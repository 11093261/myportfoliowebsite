import React, { useState, useEffect } from 'react';
import { FaCode, FaLaptopCode, FaUserTie, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  // Handle active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Check if user has scrolled for shadow effect
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section with proper offset
  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Update URL without causing page reload
      window.history.pushState(null, null, `#${id}`);
      
      // Scroll to section with offset for fixed header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Icons for navigation items
  const navIcons = {
    home: <FaCode className="mr-2" />,
    about: <FaUserTie className="mr-2" />,
    projects: <FaLaptopCode className="mr-2" />,
    contact: <FaEnvelope className="mr-2" />
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-xl py-2' : 'py-4'}`}>
      <div className={`bg-gradient-to-r from-blue-900 to-purple-900 transition-all duration-300 ${scrolled ? 'h-[10vh]' : 'h-[12vh]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Name - Professional Version */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-red-500 to-purple-600 p-1 rounded-full mr-3">
                <div className="bg-gray-900 p-1 rounded-full">
                  <FaCode className="text-xl text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Okechukwu Godstime
                </h1>
                <p className="text-xs text-gray-300 font-light tracking-wider">
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-white bg-gradient-to-r from-red-600 to-purple-700 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {navIcons[section]}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gradient-to-b from-blue-900 to-purple-900 shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`flex items-center w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === section
                  ? 'text-white bg-gradient-to-r from-red-600 to-purple-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {navIcons[section]}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;