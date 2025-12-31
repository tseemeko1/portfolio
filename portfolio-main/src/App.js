import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsCurrencyDollar } from 'react-icons/bs';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import ServicesDetail from './components/ServicesDetail';
import Work from './components/Work';
import DataAnalytics from './components/DataAnalytics';
import MobileApps from './components/MobileApps';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
// pages
import Admin from './pages/Admin';
// utils
import { trackVisitor, trackPageView } from './utils/visitorTracking';

const Portfolio = () => {
  const [showServicesDetail, setShowServicesDetail] = useState(false);
  const location = useLocation();

  // Track visitor on component mount (first visit)
  useEffect(() => {
    trackVisitor();
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (location.pathname === '/') {
      trackPageView();
    }
  }, [location.pathname]);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About /> 
      <Services onShowPricing={() => setShowServicesDetail(true)} />
      {showServicesDetail && (
        <ServicesDetail onClose={() => setShowServicesDetail(false)} />
      )}
      <Work />
      <DataAnalytics />
      <MobileApps />
      <Certificates />
      <Contact />
      <div className='h-[4000px]'></div>

      {/* Floating Pricing Button */}
      {!showServicesDetail && (
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowServicesDetail(true)}
          className="fixed right-6 bottom-24 lg:bottom-32 z-40 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-accent via-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-accent/50 transition-all duration-300 backdrop-blur-sm border-2 border-white/20 group"
        >
          <BsCurrencyDollar className="text-xl group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline-block font-primary">See Pricing</span>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
