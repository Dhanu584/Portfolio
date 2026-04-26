// src/pages/About.jsx

import React, { useState, useEffect, useRef } from 'react';
import { FiPenTool, FiMonitor, FiDatabase, FiSmartphone, FiPlus, FiMinus, FiAward, FiCode, FiLayers } from 'react-icons/fi';
import './About.css';

/* ─── Utility: fires callback once when element enters viewport ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Section Header ─── */
const SectionHeader = ({ eyebrow, title }) => {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`about-section-header ${visible ? 'about-revealed' : ''}`}>
      <span className="about-eyebrow">{eyebrow}</span>
      <h2 className="about-section-title">{title}</h2>
      <div className="about-title-bar" />
    </div>
  );
};

/* ─── WHO AM I ─── */
const WhoAmI = () => {
  const [textRef, textVisible] = useReveal();
  const services = [
    { icon: <FiPenTool size={26} />, title: 'Graphic Design',  accent: '#38bdf8', delay: 0   },
    { icon: <FiMonitor  size={26} />, title: 'Web Design',      accent: '#f472b6', delay: 80  },
    { icon: <FiDatabase size={26} />, title: 'Software',        accent: '#a78bfa', delay: 160 },
    { icon: <FiSmartphone size={26} />, title: 'Application',   accent: '#34d399', delay: 240 },
  ];
  const [cardsRef, cardsVisible] = useReveal();

  return (
    <div className="about-block">
      <SectionHeader eyebrow="About Me" title="Who Am I?" />

      {/* Bio with floating avatar */}
      <div ref={textRef} className={`whoami-bio ${textVisible ? 'about-revealed' : ''}`}>
        <div className="whoami-avatar-wrap">
          <div className="whoami-avatar">
            <span>DG</span>
          </div>
          <div className="whoami-avatar-ring" />
        </div>
        <div className="whoami-text">
          <p>
            <strong>Hi, I'm Dhanashri Garande</strong> — a 20-year-old computer engineering student
            with a curious mind and a passion for building things that matter. Whether it's coding
            a full-stack web app, sketching out a new journal design, or exploring how AI can shape
            our future, I love bringing ideas to life.
          </p>
          <p>
            I'm pursuing my B.Tech from <strong>VJTI, Mumbai</strong>, with a minor in
            Entrepreneurship &amp; Innovation — blending technology with purpose. This portfolio
            reflects the skills I'm learning, the stories I'm writing, and the impact I hope to make.
          </p>
          <div className="whoami-stats">
            {[['2+', 'Years Coding'], ['10+', 'Projects'], ['3rd', 'Year VJTI']].map(([n, l]) => (
              <div key={l} className="whoami-stat">
                <span className="whoami-stat-num">{n}</span>
                <span className="whoami-stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div ref={cardsRef} className="services-grid">
        {services.map(({ icon, title, accent, delay }) => (
          <div
            key={title}
            className={`service-card ${cardsVisible ? 'about-revealed' : ''}`}
            style={{ '--accent': accent, '--delay': `${delay}ms` }}
          >
            <div className="service-icon-wrap">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <div className="service-glow" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── SKILLS ─── */
const Skills = () => {
  const skillsData = [
    { name: 'HTML',       level: 90, color: '#f97316' },
    { name: 'CSS',        level: 85, color: '#38bdf8' },
    { name: 'JavaScript', level: 70, color: '#facc15' },
    { name: 'React.js',   level: 70, color: '#61dafb' },
    { name: 'C++',        level: 75, color: '#a78bfa' },
    { name: 'Figma',      level: 75, color: '#f472b6' },
  ];

  const [ref, visible] = useReveal(0.2);

  return (
    <div className="about-block">
      <SectionHeader eyebrow="My Specialty" title="My Skills" />
      <p className={`about-prose ${visible ? 'about-revealed' : ''}`}>
        Strong foundation in front-end web development — HTML, CSS, JavaScript and React.js for
        dynamic interfaces. C++ for problem-solving fundamentals. Currently expanding into Node.js
        and MongoDB for full-stack work, with a creative eye for UI/UX using Figma and Canva.
      </p>

      <div ref={ref} className={`skills-grid ${visible ? 'about-revealed' : ''}`}>
        {skillsData.map(({ name, level, color }, i) => (
          <div key={name} className="skill-item" style={{ '--delay': `${i * 80}ms` }}>
            <div className="skill-header">
              <span className="skill-name">{name}</span>
              <span className="skill-pct" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-track">
              <div
                className={`skill-fill ${visible ? 'skill-fill--animate' : ''}`}
                style={{ '--w': `${level}%`, '--color': color }}
              />
              <div
                className={`skill-dot ${visible ? 'skill-dot--animate' : ''}`}
                style={{ '--w': `${level}%`, '--color': color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tech pills */}
      <div className="tech-pills">
        {['Node.js', 'MongoDB', 'Git', 'Canva', 'Python', 'Tailwind CSS'].map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>
    </div>
  );
};

/* ─── EDUCATION ─── */
const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: <FiAward size={18} />,
      title: 'B.Tech — Computer Engineering',
      meta: 'VJTI Mumbai · 2023 – 2027',
      content: 'Currently in 3rd year at one of India\'s top engineering institutes. Building strong foundations in software development, system design, and problem-solving through academics and hands-on projects.',
    },
    {
      id: 2,
      icon: <FiLayers size={18} />,
      title: 'Minor — Entrepreneurship & Innovation',
      meta: 'VJTI Mumbai · Ongoing',
      content: 'Pursuing a minor that combines technical skills with business thinking to build impactful, user-focused solutions — bridging engineering and startup mindset.',
    },
    {
      id: 3,
      icon: <FiCode size={18} />,
      title: '12th Board & MHT-CET',
      meta: '2023 · 78.17% · 98.67 percentile',
      content: 'Completed 12th board with 78.17% and scored 98.67 percentile in MHT-CET, securing admission to VJTI Mumbai for Computer Engineering.',
    },
    {
      id: 4,
      icon: <FiAward size={18} />,
      title: '10th Board',
      meta: '2020 · 91%',
      content: 'Completed 10th board with 91%, laying a strong academic foundation for future studies in technology and engineering.',
    },
  ];

  const [openId, setOpenId] = useState(1);
  const [ref, visible] = useReveal();

  return (
    <div className="about-block">
      <SectionHeader eyebrow="Education" title="My Journey" />
      <div ref={ref} className={`education-list ${visible ? 'about-revealed' : ''}`}>
        {educationData.map(({ id, icon, title, meta, content }) => {
          const isOpen = openId === id;
          return (
            <div key={id} className={`edu-item ${isOpen ? 'edu-item--open' : ''}`}>
              <button
                className="edu-trigger"
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
              >
                <span className="edu-icon">{icon}</span>
                <span className="edu-trigger-text">
                  <span className="edu-title">{title}</span>
                  <span className="edu-meta">{meta}</span>
                </span>
                <span className="edu-chevron">
                  {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                </span>
              </button>
              <div className={`edu-body ${isOpen ? 'edu-body--open' : ''}`}>
                <div className="edu-body-inner">
                  <p>{content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── PAGE ROOT ─── */
const About = () => (
  <section id="about" className="about-page">
    {/* Decorative background blobs */}
    <div className="about-blob about-blob--1" aria-hidden="true" />
    <div className="about-blob about-blob--2" aria-hidden="true" />

    <div className="about-container">
      <WhoAmI />
      <Skills />
      <Education />
    </div>
  </section>
);

export default About;