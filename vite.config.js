import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    {
      name: 'partners-api-sync',
      configureServer(server) {
        // Save partners data to disk
        server.middlewares.use('/api/save-partners', (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const partners = JSON.parse(body);
                if (!Array.isArray(partners)) {
                  throw new Error('Invalid partners data: expected array');
                }

                const targetPath = path.resolve(__dirname, 'src/data/partners.js');
                const currentContent = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, 'utf-8') : '';

                const fileContent = `/**
 * Partner logos data configuration & local persistence helpers.
 * Automatically synchronized from /m-admin.
 */
export const PARTNERS_DATA = ${JSON.stringify(partners, null, 2)};

export const PARTNERS_STORAGE_KEY = 'menuwo_partners_data';
export const PARTNERS_UPDATED_EVENT = 'menuwo_partners_updated';

/**
 * Retrieve partners data from localStorage if available, otherwise return default PARTNERS_DATA.
 */
export const getStoredPartners = () => {
  if (typeof window === 'undefined') return PARTNERS_DATA;
  try {
    const raw = localStorage.getItem(PARTNERS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn('Unable to retrieve partners from localStorage:', error);
  }
  return PARTNERS_DATA;
};

/**
 * Save updated partners list to localStorage and dispatch custom update event.
 */
export const saveStoredPartners = (updatedList) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PARTNERS_STORAGE_KEY, JSON.stringify(updatedList));
    window.dispatchEvent(new CustomEvent(PARTNERS_UPDATED_EVENT, { detail: updatedList }));
  } catch (error) {
    console.error('Unable to save partners to localStorage:', error);
  }
};

/**
 * Reset partners back to default seed list.
 */
export const resetStoredPartners = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PARTNERS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(PARTNERS_UPDATED_EVENT, { detail: PARTNERS_DATA }));
  } catch (error) {
    console.error('Unable to reset partners in localStorage:', error);
  }
};
`;
                if (currentContent.trim() !== fileContent.trim()) {
                  fs.writeFileSync(targetPath, fileContent, 'utf-8');
                  console.log('[API] Successfully synced partners data to src/data/partners.js');
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, count: partners.length }));
              } catch (error) {
                console.error('[API Error] Failed to save partners:', error);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: error.message }));
              }
            });
          } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
          }
        });

        // 1-Click Publish to GitHub and Live Site
        server.middlewares.use('/api/publish-live', async (req, res) => {
          if (req.method === 'POST') {
            try {
              const { exec } = await import('child_process');
              const runCmd = (cmd) =>
                new Promise((resolve, reject) => {
                  exec(cmd, { cwd: __dirname }, (error, stdout, stderr) => {
                    if (error) reject(stderr || stdout || error.message);
                    else resolve(stdout);
                  });
                });

              await runCmd('git add src/data/partners.js');
              await runCmd('git commit -m "update: partner logos via admin portal"');
              await runCmd('git push origin main');

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Published to GitHub & Vercel!' }));
            } catch (err) {
              console.error('Publish error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: String(err) }));
            }
          } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
          }
        });
      },
    },
  ],
});
