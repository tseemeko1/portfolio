import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsShieldLock, BsEye, BsEyeSlash } from 'react-icons/bs';
import { checkAdminPassword, setAdminSession } from '../utils/rfqStorage';

const AdminLogin = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (checkAdminPassword(password)) {
        setAdminSession(true);
        onLoginSuccess();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-site bg-no-repeat bg-cover p-4">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 mb-4"
          >
            <BsShieldLock className="text-4xl text-accent" />
          </motion.div>
          <h2 className="text-3xl font-primary font-bold text-white mb-2">Admin Panel</h2>
          <p className="text-white/70">Enter your password to access RFQ submissions</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-4 py-3 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-all"
                placeholder="Enter admin password"
                required
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <BsEyeSlash className="text-xl" /> : <BsEye className="text-xl" />}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full btn btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Login'}
          </button>
        </form>

        <p className="text-white/40 text-xs text-center mt-6">
          First time? Enter any password to set it up.
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

