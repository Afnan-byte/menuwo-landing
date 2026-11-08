import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PARTNERS_DATA,
  getStoredPartners,
  saveStoredPartners,
  resetStoredPartners,
} from '../data/partners';

const ADMIN_PASSWORD = 'afnan@7373';
const SESSION_KEY = 'menuwo_admin_authenticated';

const Admin = ({ onNavigateHome }) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Partners data state
  const [partners, setPartners] = useState(() => getStoredPartners());
  const [toastMessage, setToastMessage] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  // Show temporary toast notification
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Keyboard shortcut Ctrl/Cmd + S to save
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (isAuthenticated) {
          handleSave();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthenticated, partners]);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      setPasswordError('');
      showToast('Welcome back, Admin!');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
    setPasswordInput('');
    showToast('Logged out of admin panel.', 'info');
  };

  // Update a specific field of a partner
  const handleFieldChange = (index, field, value) => {
    setPartners((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  // Add a new partner
  const handleAddPartner = () => {
    const newPartner = {
      id: `partner-${Date.now()}`,
      name: 'New Restaurant / Cafe',
      category: 'Dining & Hospitality',
      logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=60&fit=crop',
      alt: 'New Partner Restaurant logo',
      href: '#',
    };
    setPartners((prev) => [newPartner, ...prev]);
    showToast('New partner added! Customize details and click Save.', 'info');
  };

  // Delete a partner
  const handleDeletePartner = (index) => {
    const target = partners[index];
    const confirmed = window.confirm(`Are you sure you want to remove "${target.name || 'this partner'}"?`);
    if (!confirmed) return;

    setPartners((prev) => prev.filter((_, i) => i !== index));
    showToast(`Removed "${target.name || 'partner'}". Don't forget to save!`, 'info');
  };

  // Move partner position up/down
  const handleMove = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= partners.length) return;

    setPartners((prev) => {
      const updated = [...prev];
      const temp = updated[index];
      updated[index] = updated[targetIndex];
      updated[targetIndex] = temp;
      return updated;
    });
  };

  // Save all changes locally and publish live for all users
  const handleSave = async () => {
    saveStoredPartners(partners);
    setIsPublishing(true);

    try {
      // 1. Sync to local file src/data/partners.js
      await fetch('/api/save-partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partners),
      });

      // 2. Automatically push to Git and deploy to menuwo.in for everyone
      const pubRes = await fetch('/api/publish-live', {
        method: 'POST',
      });
      const pubData = await pubRes.json();
      if (pubData.success) {
        showToast('Published Live! Updates are now being deployed to menuwo.in for everyone.', 'success');
        setIsPublishing(false);
        return;
      }
    } catch (err) {
      console.warn('Live publish notice:', err);
    }

    setIsPublishing(false);
    showToast('Saved to codebase! Run push to deploy to production.', 'success');
  };

  // Reset to initial seed partners
  const handleReset = () => {
    const confirmed = window.confirm(
      'Reset all partner logos back to original default presets? Any custom links will be replaced.'
    );
    if (!confirmed) return;

    resetStoredPartners();
    setPartners(PARTNERS_DATA);
    showToast('Reset to original default partner logos.', 'info');
  };

  // Generate JS code string for copying into partners.js
  const exportCodeString = `export const PARTNERS_DATA = ${JSON.stringify(partners, null, 2)};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(exportCodeString);
    showToast('Code copied to clipboard! You can paste it into src/data/partners.js.', 'success');
  };

  // Navigation back to homepage
  const goToHome = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  // ==========================================
  // 1. LOGIN SCREEN (If not authenticated)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-bg flex flex-col justify-center items-center px-4 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 md:p-10 text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Menuwo Security</span>
            </div>

            <h1 className="text-3xl font-bold text-brand-dark tracking-tight mb-2">
              Admin Portal
            </h1>
            <p className="text-brand-muted text-sm mb-8 leading-relaxed">
              Enter your master password to update partner logos and manage the infinite carousel.
            </p>

            <form onSubmit={handleLogin} className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                  Master Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setPasswordError('');
                    }}
                    placeholder="Enter admin password"
                    autoFocus
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-brand-dark text-base transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-dark p-1 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                {passwordError && (
                  <p className="mt-2 text-xs font-medium text-red-600 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {passwordError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-green-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-brand-green/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Unlock Admin Portal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center">
              <button
                type="button"
                onClick={goToHome}
                className="text-xs font-semibold text-brand-muted hover:text-brand-dark transition-colors inline-flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Menuwo Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-brand-dark pb-24">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={goToHome}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors"
              title="Return to homepage"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg md:text-xl text-brand-dark">Menuwo Partner Manager</h1>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-brand-green/10 text-brand-green border border-brand-green/20">
                  /m-admin
                </span>
              </div>
              <p className="text-xs text-brand-muted hidden sm:block">
                Edit partner logo image paths, names, and view live previews
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goToHome}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-brand-dark transition-colors"
            >
              <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Live Website</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors"
              title="Logout from admin session"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-6 max-w-7xl pt-8">
        {/* Action Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">
                Live Data Synchronized
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark">
              Partner Logos ({partners.length})
            </h2>
            <p className="text-sm text-brand-muted">
              Add custom image URLs or local paths. Changes will instantly reflect on the homepage carousel.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleAddPartner}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-brand-dark flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Partner</span>
            </button>

            <button
              onClick={() => setShowExportModal(true)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-brand-dark flex items-center gap-1.5 transition-colors shadow-sm"
              title="View & copy source code"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>Export Code</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-red-50 text-xs font-semibold text-red-600 hover:border-red-200 flex items-center gap-1.5 transition-colors"
              title="Reset to default seed logos"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Reset</span>
            </button>

            <button
              onClick={handleSave}
              disabled={isPublishing}
              className="px-6 py-2.5 rounded-xl bg-brand-green hover:bg-green-700 disabled:opacity-70 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-brand-green/20 hover:shadow-xl transition-all"
            >
              {isPublishing ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Publishing Live...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save &amp; Publish Live</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Partners Grid / List */}
        <div className="space-y-4">
          {partners.map((partner, index) => (
            <div
              key={partner.id || index}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* 1. Live Preview Box (Square & Original Color) */}
                <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 aspect-square rounded-2xl bg-slate-50 border border-slate-200 p-3 relative group flex-shrink-0">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 absolute top-1.5 left-2">
                    Preview
                  </span>

                  <img
                    src={partner.logo}
                    alt={partner.alt || partner.name}
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.display = 'block';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'none';
                      }
                    }}
                  />
                  <div
                    style={{ display: 'none' }}
                    className="flex-col items-center justify-center text-center text-red-500 text-[10px] font-medium"
                  >
                    <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Broken</span>
                  </div>
                </div>

                {/* 2. Form Fields */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Image Link Input */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-brand-dark mb-1 flex items-center justify-between">
                      <span>Logo Image URL or Local Path</span>
                      <span className="text-[11px] font-normal text-slate-400">
                        e.g. /partners/your-logo.svg or https://...
                      </span>
                    </label>
                    <input
                      type="text"
                      value={partner.logo || ''}
                      onChange={(e) => handleFieldChange(index, 'logo', e.target.value)}
                      placeholder="/partners/your-logo.svg or https://example.com/logo.png"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm text-brand-dark font-mono bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Partner Name */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">
                      Partner / Restaurant Name
                    </label>
                    <input
                      type="text"
                      value={partner.name || ''}
                      onChange={(e) => {
                        handleFieldChange(index, 'name', e.target.value);
                        // Auto-fill alt text if default
                        if (!partner.alt || partner.alt.includes('logo')) {
                          handleFieldChange(index, 'alt', `${e.target.value} logo`);
                        }
                      }}
                      placeholder="e.g. Aroma Artisan Cafe"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm text-brand-dark transition-all"
                    />
                  </div>

                  {/* Category / Subtitle */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">
                      Category / Subtitle
                    </label>
                    <input
                      type="text"
                      value={partner.category || ''}
                      onChange={(e) => handleFieldChange(index, 'category', e.target.value)}
                      placeholder="e.g. Specialty Coffee & Bistro"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none text-sm text-brand-dark transition-all"
                    />
                  </div>
                </div>

                {/* 3. Reorder & Delete Controls */}
                <div className="flex lg:flex-col items-center justify-end gap-2 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleMove(index, -1)}
                      disabled={index === 0}
                      className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-slate-600 transition-colors"
                      title="Move Up in Carousel"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleMove(index, 1)}
                      disabled={index === partners.length - 1}
                      className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-slate-600 transition-colors"
                      title="Move Down in Carousel"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <button
                    onClick={() => handleDeletePartner(index)}
                    className="p-2 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors"
                    title="Delete Partner"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Floating Save Button Bar */}
        <div className="fixed bottom-6 right-8 z-40">
          <button
            onClick={handleSave}
            disabled={isPublishing}
            className="px-6 py-3.5 rounded-full bg-brand-green hover:bg-green-700 disabled:opacity-75 text-white font-semibold text-sm shadow-2xl shadow-brand-green/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
          >
            {isPublishing ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Publishing to menuwo.in...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Save &amp; Publish Live for Everyone</span>
              </>
            )}
          </button>
        </div>
      </main>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 left-6 z-50 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-medium ${toastMessage.type === 'success'
                ? 'bg-brand-dark text-white border border-slate-700'
                : toastMessage.type === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-800 text-white'
              }`}
          >
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
            <span>{toastMessage.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export Code Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-brand-dark">Export Partners Code</h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-brand-dark hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-xs text-brand-muted mb-4">
              If you want to commit these partner logos permanently to Git or deploy to production, copy the code below and replace <code className="bg-slate-100 px-1 py-0.5 rounded text-brand-dark font-mono">PARTNERS_DATA</code> in <code className="bg-slate-100 px-1 py-0.5 rounded text-brand-dark font-mono">src/data/partners.js</code>.
            </p>

            <textarea
              readOnly
              value={exportCodeString}
              rows={12}
              className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-900 text-slate-100 font-mono text-xs focus:outline-none mb-5"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleCopyCode}
                className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-green-700 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>Copy Code</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

