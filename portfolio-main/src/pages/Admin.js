import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../components/AdminLogin';
import AdminPanel from '../components/AdminPanel';
import VisitorAnalytics from '../components/VisitorAnalytics';
import { isAdminLoggedIn, setAdminSession } from '../utils/rfqStorage';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('rfqs');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    if (isAdminLoggedIn()) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setAdminSession(false);
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-site bg-no-repeat bg-cover p-4 lg:p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-primary font-bold text-accent">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border-2 border-white/20 rounded-lg text-white hover:border-accent hover:text-accent transition-all"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-white/20">
          <button
            onClick={() => setActiveTab('rfqs')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'rfqs'
                ? 'text-accent border-b-2 border-accent'
                : 'text-white/60 hover:text-white'
            }`}
          >
            RFQ Submissions
          </button>
          <button
            onClick={() => setActiveTab('visitors')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'visitors'
                ? 'text-accent border-b-2 border-accent'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Visitor Analytics
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'rfqs' && <AdminPanel onLogout={handleLogout} hideHeader={true} />}
        {activeTab === 'visitors' && <VisitorAnalytics />}
      </div>
    </div>
  );
};

export default Admin;

