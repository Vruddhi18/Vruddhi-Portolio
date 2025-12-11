// src/components/Navigation.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home', id: 1 },
  { name: 'About', href: '#about', id: 2 },
  { name: 'Projects', href: '#projects', id: 3 },
  { name: 'Skills', href: '#skills', id: 4 },
  { name: 'Experience', href: '#experience', id: 5 },
  { name: 'Contact', href: '#contact', id: 6 }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            YourName
          </motion.div>
          
          <ul className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <motion.li key={link.id}>
                <a 
                  href={link.href}
                  className="relative group text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.button
            className="md:hidden p-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-600"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
