import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { 
  BsPeople, 
  BsEye, 
  BsClock, 
  BsGlobe, 
  BsLaptop, 
  BsTrash,
  BsBarChart,
  BsLink45Deg
} from 'react-icons/bs';
import {
  getVisitors,
  getVisitStatistics,
  getMostVisitedPages,
  getReferrers,
  clearAllVisitors
} from '../utils/visitorTracking';

const VisitorAnalytics = () => {
  const [visitors, setVisitors] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    loadData();
    // Refresh every 10 seconds
    const interval = setInterval(loadData, 10000);
    return () => clearInterval(interval);
  }, []);

  const loadData = () => {
    const allVisitors = getVisitors();
    setVisitors(allVisitors);
    setStats(getVisitStatistics());
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL visitor data? This cannot be undone.')) {
      clearAllVisitors();
      loadData();
      setSelectedVisitor(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getDeviceType = (userAgent) => {
    if (/mobile|android|iphone|ipad/i.test(userAgent)) {
      return 'Mobile';
    } else if (/tablet/i.test(userAgent)) {
      return 'Tablet';
    }
    return 'Desktop';
  };

  const getBrowser = (userAgent) => {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Other';
  };

  const mostVisitedPages = getMostVisitedPages();
  const referrers = getReferrers();

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BsPeople className="text-3xl text-accent" />
              <span className="text-2xl font-bold text-accent">{stats.uniqueVisitors}</span>
            </div>
            <p className="text-white/70 text-sm">Unique Visitors</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BsEye className="text-3xl text-accent" />
              <span className="text-2xl font-bold text-accent">{stats.totalPageViews}</span>
            </div>
            <p className="text-white/70 text-sm">Total Page Views</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BsClock className="text-3xl text-accent" />
              <span className="text-2xl font-bold text-accent">{stats.avgSessionDuration}</span>
            </div>
            <p className="text-white/70 text-sm">Avg Session (min)</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BsBarChart className="text-3xl text-accent" />
              <span className="text-2xl font-bold text-accent">{stats.totalVisits}</span>
            </div>
            <p className="text-white/70 text-sm">Total Visits</p>
          </motion.div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/20">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 font-semibold transition-colors ${
            activeTab === 'overview'
              ? 'text-accent border-b-2 border-accent'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('visitors')}
          className={`px-4 py-2 font-semibold transition-colors ${
            activeTab === 'visitors'
              ? 'text-accent border-b-2 border-accent'
              : 'text-white/60 hover:text-white'
          }`}
        >
          All Visitors
        </button>
        <button
          onClick={() => setActiveTab('pages')}
          className={`px-4 py-2 font-semibold transition-colors ${
            activeTab === 'pages'
              ? 'text-accent border-b-2 border-accent'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Pages
        </button>
        <button
          onClick={() => setActiveTab('referrers')}
          className={`px-4 py-2 font-semibold transition-colors ${
            activeTab === 'referrers'
              ? 'text-accent border-b-2 border-accent'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Referrers
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Most Visited Pages */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BsLink45Deg className="text-accent" />
              Most Visited Pages
            </h3>
            <div className="space-y-3">
              {mostVisitedPages.slice(0, 5).map((page, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/80 truncate">{page.page}</span>
                  <span className="text-accent font-semibold">{page.count}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Referrers */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BsGlobe className="text-accent" />
              Top Referrers
            </h3>
            <div className="space-y-3">
              {referrers.slice(0, 5).map((ref, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/80 truncate text-sm">{ref.referrer}</span>
                  <span className="text-accent font-semibold">{ref.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === 'visitors' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visitor List */}
          <div className="lg:col-span-1 space-y-3 max-h-[600px] overflow-y-auto scrollbar-hide">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Recent Visitors</h3>
              {visitors.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-red-400 hover:text-red-300 text-sm transition-colors"
                >
                  <BsTrash className="inline mr-1" />
                  Clear All
                </button>
              )}
            </div>
            {visitors.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 text-center">
                <p className="text-white/60">No visitors yet</p>
              </div>
            ) : (
              visitors.slice(0, 50).map((visitor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedVisitor(visitor)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedVisitor?.timestamp === visitor.timestamp
                      ? 'border-accent bg-accent/10'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <BsLaptop className="text-accent" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm truncate">
                        {getDeviceType(visitor.userAgent)}
                      </p>
                      <p className="text-white/60 text-xs truncate">
                        {getBrowser(visitor.userAgent)}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs mb-1 truncate">
                    {visitor.page}
                  </p>
                  <p className="text-white/50 text-xs">
                    {formatDate(visitor.timestamp)}
                  </p>
                </motion.div>
              ))
            )}
          </div>

          {/* Visitor Details */}
          <div className="lg:col-span-2">
            {selectedVisitor ? (
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-accent mb-6">Visitor Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Timestamp</label>
                    <p className="text-white">{formatDate(selectedVisitor.timestamp)}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Page</label>
                    <p className="text-white">{selectedVisitor.page}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Device</label>
                    <p className="text-white">{getDeviceType(selectedVisitor.userAgent)}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Browser</label>
                    <p className="text-white">{getBrowser(selectedVisitor.userAgent)}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Screen Resolution</label>
                    <p className="text-white">{selectedVisitor.screenWidth} x {selectedVisitor.screenHeight}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Viewport</label>
                    <p className="text-white">{selectedVisitor.viewportWidth} x {selectedVisitor.viewportHeight}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Language</label>
                    <p className="text-white">{selectedVisitor.language}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Timezone</label>
                    <p className="text-white">{selectedVisitor.timezone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-white/60 text-sm mb-1 block">Referrer</label>
                    <p className="text-white break-all">{selectedVisitor.referrer}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-white/60 text-sm mb-1 block">User Agent</label>
                    <p className="text-white text-xs break-all bg-white/5 p-3 rounded">
                      {selectedVisitor.userAgent}
                    </p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Session ID</label>
                    <p className="text-white text-xs break-all">{selectedVisitor.sessionId}</p>
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1 block">Visit Number</label>
                    <p className="text-white">#{selectedVisitor.visitNumber || 'N/A'}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-12 text-center">
                <p className="text-white/60">Select a visitor to view details</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'pages' && (
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Page Analytics</h3>
          <div className="space-y-3">
            {mostVisitedPages.map((page, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-white/80">{page.page}</span>
                <span className="text-accent font-semibold">{page.count} views</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'referrers' && (
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {referrers.map((ref, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-white/80 text-sm truncate">{ref.referrer}</span>
                <span className="text-accent font-semibold">{ref.count} visits</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VisitorAnalytics;

