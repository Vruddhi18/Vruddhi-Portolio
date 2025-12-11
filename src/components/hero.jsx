// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const phrases = ['Full Stack Developer', 'UI/UX Designer', 'React Enthusiast', 'Creative Problem Solver'];

  useEffect(() => {
    let currentPhrase = '';
    let charIndex = 0;
    let phraseIndex = 0;
    let deleting = false;

    const typeWriter = () => {
      const current = phrases[phraseIndex];
      
      if (deleting) {
        currentPhrase = currentPhrase.slice(0, charIndex - 1);
        charIndex--;
      } else {
        currentPhrase = current.slice(0, charIndex + 1);
        charIndex++;
      }

      setTypedText(currentPhrase);

      if (!deleting && charIndex === current.length) {
        setTimeout(() => deleting = true, 1500);
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(typeWriter, deleting ? 50 : 100);
    };

    typeWriter();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 mb-8 flex items-center">
            <span className="font-mono mr-3">{typedText}</span>
            <span className="w-3 h-8 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse rounded-full" />
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 border-2 border-gray-200 hover:border-gray-300 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-xl border border-white/30 shadow-2xl p-8 flex items-center justify-center">
            <div className="w-72 h-72 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl shadow-2xl animate-pulse" />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
