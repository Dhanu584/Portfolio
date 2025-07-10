// src/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; // We'll use this for a cool hover effect

const Navbar = () => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('Home');
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Blogs', 'Contact'];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* Logo / Website Name */}
          <div className="flex items-center">
            <a href="#home" onClick={() => handleLinkClick('Home')} className="flex items-center py-4 px-2">
              <span className="font-bold text-white text-2xl hover:text-cyan-400 transition duration-300">Dhanashri Garande</span>
            </a>
          </div>

          {/* Primary Nav (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`py-4 px-2 font-semibold transition duration-300 nav-link ${
                  activeLink === link
                    ? 'text-cyan-400 border-b-4 border-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-400 hover:text-cyan-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" /> // Close icon (X)
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger icon
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="bg-slate-800">
            {navLinks.map((link) => (
              <li key={link} className={activeLink === link ? 'active' : ''}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(link)}
                  className="block text-sm px-2 py-4 text-white hover:bg-cyan-500 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;