/**
 * Partner logos data configuration & local persistence helpers.
 *
 * To add, edit, or replace a partner logo:
 * 1. Place your image/SVG file in the `public/partners/` folder (or use any valid public/remote URL).
 * 2. Update or add an entry in this list below, or use the admin portal at `/m-admin`.
 */
export const PARTNERS_DATA = [
  {
    id: 'malabar-coastal',
    name: 'Malabar Coastal Kitchen',
    category: 'Fine Dining & Seafood',
    logo: '/partners/malabar-coastal.svg',
    alt: 'Malabar Coastal Kitchen logo - Partner Restaurant',
    href: '#',
  },
  {
    id: 'aroma-roastery',
    name: 'Aroma Roastery & Cafe',
    category: 'Artisan Coffee & Bistro',
    logo: '/partners/aroma-roastery.svg',
    alt: 'Aroma Roastery and Cafe logo - Partner Cafe',
    href: '#',
  },
  {
    id: 'urban-bistro',
    name: 'The Urban Bistro',
    category: 'Modern European & Bar',
    logo: '/partners/urban-bistro.svg',
    alt: 'The Urban Bistro logo - Partner Restaurant',
    href: '#',
  },
  {
    id: 'olive-basil',
    name: 'Olive & Basil',
    category: 'Authentic Italian Trattoria',
    logo: '/partners/olive-basil.svg',
    alt: 'Olive and Basil Trattoria logo - Partner Restaurant',
    href: '#',
  },
  {
    id: 'saffron-lounge',
    name: 'Saffron Lounge',
    category: 'Grand North Indian Dining',
    logo: '/partners/saffron-lounge.svg',
    alt: 'Saffron Lounge logo - Partner Restaurant',
    href: '#',
  },
  {
    id: 'brew-co',
    name: 'Brew & Co. Bakehouse',
    category: 'Artisan Bakery & Brunch',
    logo: '/partners/brew-co.svg',
    alt: 'Brew and Co Bakehouse logo - Partner Cafe',
    href: '#',
  },
  {
    id: 'rustic-grill',
    name: 'The Rustic Grill',
    category: 'Woodfire Steakhouse & BBQ',
    logo: '/partners/rustic-grill.svg',
    alt: 'The Rustic Grill logo - Partner Restaurant',
    href: '#',
  },
  {
    id: 'golden-leaf',
    name: 'Golden Leaf Resorts',
    category: 'Luxury Hospitality & Dining',
    logo: '/partners/golden-leaf.svg',
    alt: 'Golden Leaf Resorts and Dining logo - Partner Brand',
    href: '#',
  },
];

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
