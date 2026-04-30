//Home.jsx
import { useEffect, useRef } from "react";
import "./Home.css";
import designerImg from "../assets/designer2.png";
import designerImg1 from "../assets/dhanu1.jpeg";

const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="home" ref={sectionRef}>

      <div className="hero-top">

        <div className="hero-stack-text" aria-hidden="true">
          {"PORTFOLIO".split("").map((_, i) => (
            <div key={i} className="hero-stack-line" style={{ opacity: 1 - i * 0.18 }}>
              {"PORTFOLIO".slice(i)}
            </div>
          ))}
        </div>

        {/* UPDATED PHOTO BLOCK */}
        <div className="hero-photo-wrap reveal">
          
          {/* IMAGE ON TOP */}
          <img
            src={designerImg}
            alt="Dhanashri Garande"
            className="hero-photo"
          />
      </div>
          {/* ORANGE BLOCK BELOW */}
          {/* <div className="hero-orange-card"></div> */}
                    <p className="cv-info-text">
            Pursuing Computer Engineering from{" "}
            <a href="https://vjti.ac.in/" target="_blank" rel="noreferrer">
              VJTI
            </a>
          </p>

          <a href="/cv.pdf" download className="cv-download-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download CV
          </a>
       

        {/* MOVED HANDLES LEFT OF BLOCK */}
        {/* <div className="hero-handles reveal">
          <div className="handle-row">
            <span className="handle-label">GH:</span>
            <span>/dhanashri-garande</span>
          </div>
          <div className="handle-row">
            <span className="handle-label">LI:</span>
            <span>/dhanashri-garande</span>
          </div>
          <div className="handle-row">
            <span className="handle-label">EM:</span>
            <span>dhanashri@email.com</span>
          </div>
        </div> */}

        <span className="deco-star s1">✦</span>
        <span className="deco-star s2">✦</span>

        <p className="hero-tagline reveal">
          I love coding and crafting for the web.<br />
          I approach problems in a rational and pragmatic<br />
          way and seek elegant, functional solutions.
        </p>
      </div>

      <div className="scroll-cta" onClick={() => scrollTo("about")}>
        <span>Scroll</span>
        <span>down</span>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-inner">

          <div className="hello-col reveal">
            <h1 className="hello-heading">
              Hello,<br />I'm Dhanashri<span className="yellow-dot">!</span>
            </h1>
            <p className="hello-desc">
              I'm a passionate <strong>Full Stack Developer</strong> based in India with a love for
              clean code and beautiful interfaces. I build web experiences that are fast,
              accessible, and genuinely delightful to use.
            </p>
            <a href="https://linkedin.com/in/dhanashri-garande" className="search-link" target="_blank" rel="noreferrer">
              <span className="search-icon">⌕</span>
              linkedin.com/in/dhanashri-garande
            </a>
          </div>

          <div className="hello-photo-col reveal">
            <div className="hello-photo-card">
              <img src={designerImg1} alt="Dhanashri Garande" className="hello-photo" />
            </div>
            <div className="float-tag tag-1">Full Stack Dev</div>
            <div className="float-tag tag-2">India 🇮🇳</div>
            <div className="contact-mini-card">
              <h4>Contact</h4>
              <p>📍 India</p>
              <p>✉ dhanashri@email.com</p>
              <p>💻 github.com/dhanashri-garande</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Home;