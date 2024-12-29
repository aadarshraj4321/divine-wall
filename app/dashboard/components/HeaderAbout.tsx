

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';  // Correct import for motion

const Menu = dynamic(() => import('lucide-react').then((mod) => mod.Menu));
const X = dynamic(() => import('lucide-react').then((mod) => mod.X));
const Moon = dynamic(() => import('lucide-react').then((mod) => mod.Moon));
const Sun = dynamic(() => import('lucide-react').then((mod) => mod.Sun));

const HeaderAbout = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else {
      // If no theme is saved, use system preference
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isSystemDark);
      if (isSystemDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);
  
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`shadow-lg fixed w-full z-50 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 text-xl font-semibold tracking-wide"
          >
            <Link href="/" passHref>
              <div className="flex items-center space-x-3 cursor-pointer">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className={`h-12 w-12 ${isDarkMode ? 'logo-glow' : ''}`} 
                />
                <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>DivineWall</span>
              </div>
            </Link>
          </motion.div>

          <div className="md:hidden flex items-center space-x-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-8 h-8 bg-transparent border-2 border-black dark:border-white rounded-full"
            >
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-white rounded-full opacity-10"></div>
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </motion.button>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-black dark:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6 text-black dark:text-white">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
            </div>

            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-8 h-8 bg-transparent border-2 border-black dark:border-white rounded-full"
            >
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-white rounded-full opacity-10"></div>
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </motion.button>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`md:hidden shadow-lg absolute left-0 right-0 top-full rounded-b-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}
            >
              <div className="flex flex-col space-y-4 p-4">
                <Link 
                  href="/" 
                  className={`text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 p-2 rounded-xl transition`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 p-2 rounded-xl transition`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
});

// Set displayName explicitly to prevent the warning
HeaderAbout.displayName = 'HeaderAbout';

export default HeaderAbout;
