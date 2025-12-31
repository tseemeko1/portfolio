import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsTrash, BsDownload, BsEnvelope, BsCalendar, BsCurrencyDollar, BsClock, BsBuilding, BsArrowLeft } from 'react-icons/bs';
import { getRFQs, deleteRFQ, clearAllRFQs, setAdminSession } from '../utils/rfqStorage';
import { Link } from 'react-router-dom';

const AdminPanel = ({ onLogout, hideHeader = false }) => {
  const [rfqs, setRfqs] = useState([]);
  const [selectedRFQ, setSelectedRFQ] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadRFQs();
    // Refresh every 30 seconds
    const interval = setInterval(loadRFQs, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadRFQs = () => {
    const allRFQs = getRFQs();
    setRfqs(allRFQs);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this RFQ?')) {
      deleteRFQ(id);
      loadRFQs();
      if (selectedRFQ?.id === id) {
        setSelectedRFQ(null);
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL RFQs? This cannot be undone.')) {
      clearAllRFQs();
      loadRFQs();
      setSelectedRFQ(null);
    }
  };

  const handleLogout = () => {
    setAdminSession(false);
    onLogout();
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Email', 'Company', 'Project Type', 'Budget', 'Timeline', 'Message'];
    const rows = rfqs.map(rfq => [
      rfq.id,
      new Date(rfq.timestamp).toLocaleString(),
      rfq.name || '',
      rfq.email || '',
      rfq.company || '',
      rfq.projectType || '',
      rfq.budget || '',
      rfq.timeline || '',
      (rfq.message || '').replace(/\n/g, ' ')
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rfq-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredRFQs = rfqs.filter(rfq => {
    const matchesFilter = filter === 'all' || rfq.projectType === filter;
    const matchesSearch = !searchTerm || 
      Object.values(rfq).some(value => 
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const projectTypes = ['all', ...new Set(rfqs.map(rfq => rfq.projectType).filter(Boolean))];

  return (
    <div>
      {/* Header */}
      {!hideHeader && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-primary font-bold text-accent mb-2">
                RFQ Admin Panel
              </h1>
              <p className="text-white/70">
                Manage and view all quote requests ({rfqs.length} total)
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                className="btn btn-sm flex items-center gap-2"
              >
                <BsDownload /> Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border-2 border-white/20 rounded-lg text-white hover:border-accent hover:text-accent transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filters */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="mb-8"
      >
        {!hideHeader && (
          <div className="mb-6">
            <p className="text-white/70">
              Manage and view all quote requests ({rfqs.length} total)
            </p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search RFQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white/5 border-2 border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-all"
          >
            {projectTypes.map(type => (
              <option key={type} value={type} className="bg-primary">
                {type === 'all' ? 'All Projects' : type}
              </option>
            ))}
          </select>
          {rfqs.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-4 py-2 bg-red-500/20 border-2 border-red-500/50 rounded-lg text-red-300 hover:bg-red-500/30 transition-all"
            >
              Clear All
            </button>
          )}
        </div>
      </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* RFQ List */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="lg:col-span-1 space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide"
          >
            {filteredRFQs.length === 0 ? (
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-8 text-center">
                <p className="text-white/60">No RFQs found</p>
              </div>
            ) : (
              filteredRFQs.map((rfq) => (
                <motion.div
                  key={rfq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelectedRFQ(rfq)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedRFQ?.id === rfq.id
                      ? 'border-accent bg-accent/10'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white truncate">{rfq.name || 'Anonymous'}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(rfq.id);
                      }}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <BsTrash />
                    </button>
                  </div>
                  <p className="text-white/70 text-sm mb-2 truncate">{rfq.email}</p>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <BsCalendar />
                    <span>{new Date(rfq.timestamp).toLocaleDateString()}</span>
                  </div>
                  {rfq.projectType && (
                    <span className="inline-block mt-2 px-2 py-1 bg-accent/20 text-accent text-xs rounded">
                      {rfq.projectType}
                    </span>
                  )}
                </motion.div>
              ))
            )}
          </motion.div>

          {/* RFQ Details */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="lg:col-span-2"
          >
            {selectedRFQ ? (
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 lg:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-primary font-bold text-accent">
                    RFQ Details
                  </h2>
                  <button
                    onClick={() => setSelectedRFQ(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <BsArrowLeft className="text-xl" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-sm mb-1 block">Name</label>
                      <p className="text-white font-semibold">{selectedRFQ.name || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-1 block">Email</label>
                      <a
                        href={`mailto:${selectedRFQ.email}`}
                        className="text-accent hover:underline flex items-center gap-2"
                      >
                        <BsEnvelope />
                        {selectedRFQ.email || 'N/A'}
                      </a>
                    </div>
                    {selectedRFQ.company && (
                      <div>
                        <label className="text-white/60 text-sm mb-1 block">Company</label>
                        <p className="text-white flex items-center gap-2">
                          <BsBuilding />
                          {selectedRFQ.company}
                        </p>
                      </div>
                    )}
                    <div>
                      <label className="text-white/60 text-sm mb-1 block">Date Submitted</label>
                      <p className="text-white flex items-center gap-2">
                        <BsCalendar />
                        {new Date(selectedRFQ.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <label className="text-white/60 text-sm mb-2 block">Project Type</label>
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-lg">
                      {selectedRFQ.projectType || 'N/A'}
                    </span>
                  </div>

                  {selectedRFQ.budget && (
                    <div>
                      <label className="text-white/60 text-sm mb-2 block flex items-center gap-2">
                        <BsCurrencyDollar />
                        Budget Range
                      </label>
                      <p className="text-white">{selectedRFQ.budget}</p>
                    </div>
                  )}

                  {selectedRFQ.timeline && (
                    <div>
                      <label className="text-white/60 text-sm mb-2 block flex items-center gap-2">
                        <BsClock />
                        Timeline
                      </label>
                      <p className="text-white">{selectedRFQ.timeline}</p>
                    </div>
                  )}

                  {selectedRFQ.message && (
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Project Description</label>
                      <div className="bg-white/5 rounded-lg p-4 text-white whitespace-pre-wrap">
                        {selectedRFQ.message}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4 border-t border-white/20">
                    <a
                      href={`mailto:${selectedRFQ.email}?subject=Re: Your Quote Request&body=Hi ${selectedRFQ.name},%0D%0A%0D%0AThank you for your interest...`}
                      className="btn btn-sm flex items-center gap-2"
                    >
                      <BsEnvelope /> Reply via Email
                    </a>
                    <button
                      onClick={() => handleDelete(selectedRFQ.id)}
                      className="px-4 py-2 bg-red-500/20 border-2 border-red-500/50 rounded-lg text-red-300 hover:bg-red-500/30 transition-all"
                    >
                      <BsTrash className="inline mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-12 text-center">
                <p className="text-white/60">Select an RFQ to view details</p>
              </div>
            )}
          </motion.div>
        </div>
    </div>
  );
};

export default AdminPanel;

