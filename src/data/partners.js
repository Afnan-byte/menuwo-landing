/**
 * Partner logos data configuration & local persistence helpers.
 * Automatically synchronized from /m-admin.
 */
export const PARTNERS_DATA = [
  {
    id: "riders-cafe",
    name: "Riders Cafe",
    category: "Cafe & Lounge",
    logo: "https://res.cloudinary.com/da1edgae1/image/upload/v1791168165/kcmmqofnm0qkooydzxxd.webp",
    alt: "Riders Cafe logo",
    href: "#"
  },
  {
    id: "evergreen-continental",
    name: "Evergreen Continental",
    category: "Continental Dining",
    logo: "https://res.cloudinary.com/da1edgae1/image/upload/v1791979752/ubmp6tzxftxuarprszfg.webp",
    alt: "Evergreen Continental logo",
    href: "#"
  },
  {
    id: "nells-cafe",
    name: "Nells Cafe",
    category: "Artisan Cafe",
    logo: "https://res.cloudinary.com/da1edgae1/image/upload/v1790920181/irykysgaeyxwuu8fft55.webp",
    alt: "Nells Cafe logo",
    href: "#"
  },
  {
    id: "tea-time",
    name: "Tea Time",
    category: "Tea & Beverages",
    logo: "https://res.cloudinary.com/da1edgae1/image/upload/v1779891781/gvrfkekbiwwnwfomydpe.png",
    alt: "Tea Time logo",
    href: "#"
  },
  {
    id: "zaffron-restaurant",
    name: "Zaffron Restaurant",
    category: "Fine Dining",
    logo: "https://res.cloudinary.com/da1edgae1/image/upload/v1791427857/oll6w1zmekuxofbpjbzp.webp",
    alt: "Zaffron Restaurant logo",
    href: "#"
  }
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
