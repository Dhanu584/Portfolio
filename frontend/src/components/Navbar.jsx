import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  const navLinks = [
    { label: 'Home',    id: 'home' },
    { label: 'About',   id: 'about' },
    { label: 'Blogs',   id: 'blogs' },
    { label: 'Contact', id: 'contact' },
  ];

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver — highlights the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most visible on screen
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveLink(visible[0].target.id);
        }
      },
      {
        // Fire when ≥30% of a section enters the viewport
        threshold: [0.3],
        // Shrink the root margin so the trigger zone is the middle of the screen
        rootMargin: '-10% 0px -60% 0px',
      }
    );

    sections.forEach((sec) => observerRef.current.observe(sec));
    return () => observerRef.current?.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Brand */}
        <a
          href="#home"
          className="navbar__brand"
          onClick={() => handleLinkClick('home')}
        >
          Dhanashri Garande
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => handleLinkClick(id)}
                className={`navbar__link ${activeLink === id ? 'navbar__link--active' : ''}`}
              >
                {label}
                <span className="navbar__link-underline" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => handleLinkClick(id)}
            className={`navbar__mobile-link ${activeLink === id ? 'navbar__mobile-link--active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;