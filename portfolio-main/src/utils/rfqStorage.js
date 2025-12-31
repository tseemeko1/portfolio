// Utility functions for storing and retrieving RFQ submissions

const STORAGE_KEY = 'portfolio_rfq_submissions';
const ADMIN_PASSWORD_KEY = 'admin_password_hash';

// Simple hash function (not cryptographically secure, but better than plain text)
const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
};

// Save RFQ submission
export const saveRFQ = (rfqData) => {
  try {
    const existingRFQs = getRFQs();
    const newRFQ = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...rfqData,
    };
    
    const updatedRFQs = [newRFQ, ...existingRFQs];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRFQs));
    return true;
  } catch (error) {
    console.error('Error saving RFQ:', error);
    return false;
  }
};

// Get all RFQs
export const getRFQs = () => {
  try {
    const rfqs = localStorage.getItem(STORAGE_KEY);
    return rfqs ? JSON.parse(rfqs) : [];
  } catch (error) {
    console.error('Error retrieving RFQs:', error);
    return [];
  }
};

// Delete RFQ
export const deleteRFQ = (id) => {
  try {
    const rfqs = getRFQs();
    const filteredRFQs = rfqs.filter(rfq => rfq.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRFQs));
    return true;
  } catch (error) {
    console.error('Error deleting RFQ:', error);
    return false;
  }
};

// Clear all RFQs
export const clearAllRFQs = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing RFQs:', error);
    return false;
  }
};

// Set admin password (first time setup)
export const setAdminPassword = (password) => {
  try {
    const hash = simpleHash(password);
    localStorage.setItem(ADMIN_PASSWORD_KEY, hash);
    return true;
  } catch (error) {
    console.error('Error setting admin password:', error);
    return false;
  }
};

// Check admin password
export const checkAdminPassword = (password) => {
  try {
    const storedHash = localStorage.getItem(ADMIN_PASSWORD_KEY);
    if (!storedHash) {
      // First time - set the password
      setAdminPassword(password);
      return true;
    }
    const inputHash = simpleHash(password);
    return storedHash === inputHash;
  } catch (error) {
    console.error('Error checking admin password:', error);
    return false;
  }
};

// Check if admin is logged in
export const isAdminLoggedIn = () => {
  try {
    return localStorage.getItem('admin_session') === 'true';
  } catch (error) {
    return false;
  }
};

// Set admin session
export const setAdminSession = (isLoggedIn) => {
  try {
    if (isLoggedIn) {
      localStorage.setItem('admin_session', 'true');
    } else {
      localStorage.removeItem('admin_session');
    }
  } catch (error) {
    console.error('Error setting admin session:', error);
  }
};

