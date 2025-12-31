// Utility functions for tracking and storing website visitors

const VISITOR_STORAGE_KEY = 'portfolio_visitors';
const SESSION_STORAGE_KEY = 'portfolio_session_id';
const VISIT_COUNT_KEY = 'portfolio_visit_count';

// Generate or retrieve session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }
  return sessionId;
};

// Get visitor information
const getVisitorInfo = () => {
  return {
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    page: window.location.pathname,
    referrer: document.referrer || 'Direct',
    userAgent: navigator.userAgent,
    language: navigator.language || navigator.userLanguage,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
  };
};

// Save visitor data
export const trackVisitor = () => {
  try {
    const visitorData = getVisitorInfo();
    const existingVisitors = getVisitors();
    
    // Check if this is a new session (not just a page navigation)
    const lastVisitor = existingVisitors[0];
    const isNewSession = !lastVisitor || 
      lastVisitor.sessionId !== visitorData.sessionId ||
      (new Date(visitorData.timestamp) - new Date(lastVisitor.timestamp)) > 30 * 60 * 1000; // 30 minutes

    if (isNewSession) {
      // Increment visit count
      const visitCount = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0') + 1;
      localStorage.setItem(VISIT_COUNT_KEY, visitCount.toString());
      visitorData.visitNumber = visitCount;
    } else {
      // Use the same visit number as the last visitor in this session
      visitorData.visitNumber = lastVisitor.visitNumber;
    }

    // Add to beginning of array (most recent first)
    const updatedVisitors = [visitorData, ...existingVisitors];
    
    // Keep only last 1000 visitors to prevent storage issues
    const limitedVisitors = updatedVisitors.slice(0, 1000);
    
    localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(limitedVisitors));
    return true;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return false;
  }
};

// Track page view (for same session)
export const trackPageView = () => {
  try {
    const visitorData = getVisitorInfo();
    const existingVisitors = getVisitors();
    
    // Get current session's visit number
    const currentSessionVisitor = existingVisitors.find(v => v.sessionId === visitorData.sessionId);
    visitorData.visitNumber = currentSessionVisitor?.visitNumber || 
      (parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0') + 1);

    // Add page view to beginning
    const updatedVisitors = [visitorData, ...existingVisitors];
    const limitedVisitors = updatedVisitors.slice(0, 1000);
    
    localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(limitedVisitors));
    return true;
  } catch (error) {
    console.error('Error tracking page view:', error);
    return false;
  }
};

// Get all visitors
export const getVisitors = () => {
  try {
    const visitors = localStorage.getItem(VISITOR_STORAGE_KEY);
    return visitors ? JSON.parse(visitors) : [];
  } catch (error) {
    console.error('Error retrieving visitors:', error);
    return [];
  }
};

// Get unique visitors count
export const getUniqueVisitorsCount = () => {
  try {
    const visitors = getVisitors();
    const uniqueSessions = new Set(visitors.map(v => v.sessionId));
    return uniqueSessions.size;
  } catch (error) {
    return 0;
  }
};

// Get total page views
export const getTotalPageViews = () => {
  try {
    return getVisitors().length;
  } catch (error) {
    return 0;
  }
};

// Get visitors by date range
export const getVisitorsByDateRange = (startDate, endDate) => {
  try {
    const visitors = getVisitors();
    return visitors.filter(visitor => {
      const visitDate = new Date(visitor.timestamp);
      return visitDate >= startDate && visitDate <= endDate;
    });
  } catch (error) {
    return [];
  }
};

// Get most visited pages
export const getMostVisitedPages = () => {
  try {
    const visitors = getVisitors();
    const pageCounts = {};
    
    visitors.forEach(visitor => {
      const page = visitor.page || '/';
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });
    
    return Object.entries(pageCounts)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    return [];
  }
};

// Get referrers
export const getReferrers = () => {
  try {
    const visitors = getVisitors();
    const referrerCounts = {};
    
    visitors.forEach(visitor => {
      const referrer = visitor.referrer || 'Direct';
      referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1;
    });
    
    return Object.entries(referrerCounts)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    return [];
  }
};

// Clear all visitor data
export const clearAllVisitors = () => {
  try {
    localStorage.removeItem(VISITOR_STORAGE_KEY);
    localStorage.removeItem(VISIT_COUNT_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing visitors:', error);
    return false;
  }
};

// Get visit statistics
export const getVisitStatistics = () => {
  try {
    const visitors = getVisitors();
    const uniqueSessions = new Set(visitors.map(v => v.sessionId));
    const totalPageViews = visitors.length;
    const uniqueVisitors = uniqueSessions.size;
    
    // Calculate average session duration (rough estimate)
    const sessions = {};
    visitors.forEach(v => {
      if (!sessions[v.sessionId]) {
        sessions[v.sessionId] = [];
      }
      sessions[v.sessionId].push(new Date(v.timestamp));
    });
    
    let totalDuration = 0;
    let sessionCount = 0;
    Object.values(sessions).forEach(sessionVisits => {
      if (sessionVisits.length > 1) {
        const duration = sessionVisits[0] - sessionVisits[sessionVisits.length - 1];
        totalDuration += Math.abs(duration);
        sessionCount++;
      }
    });
    
    const avgSessionDuration = sessionCount > 0 ? totalDuration / sessionCount : 0;
    
    return {
      totalPageViews,
      uniqueVisitors,
      avgSessionDuration: Math.round(avgSessionDuration / 1000 / 60), // in minutes
      totalVisits: parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0'),
    };
  } catch (error) {
    return {
      totalPageViews: 0,
      uniqueVisitors: 0,
      avgSessionDuration: 0,
      totalVisits: 0,
    };
  }
};

