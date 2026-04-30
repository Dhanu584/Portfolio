import { useEffect, useRef } from "react";
import "./About.css";

const education = [
  { years: "2023–2027", place: "VJTI Mumbai", field: "Computer Engineering" },
  { years: "2021–2023", place: "New English School, Mangalwedha", field: "Science (PCM)" },
  { years: "2020–2021", place: "Shree Shau Highschool, Shahuwadi", field: "Secondary Education" },
];

// const experience = [
//   { year: "2024", role: "Freelance Developer", detail: "Built full-stack web apps for clients\nRemote, India" },
//   { year: "2023", role: "Web Dev Intern", detail: "Frontend development, React & Figma\nTech Startup, India" },
//   { year: "2022", role: "Open Source Contributor", detail: "Contributed to UI libraries\nGitHub" },
// ];

const tags = ["#Creative", "#Detail-oriented", "#Collaborative", "#Problem Solver", "#Adaptable"];

const About = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>

      {/* Resume watermark */}
      <div className="resume-watermark" aria-hidden="true">
        <div>RESUME</div>
        <div>RESUME</div>
      </div>

      <div className="about-inner">

        {/* ── LEFT COLUMN ── */}
        <div className="about-left">

          {/* Education */}
          <div className="about-grid">

  {/* LEFT — Education */}
  <div className="about-block reveal">
    <h2 className="block-heading">
      <span className="star-accent">✦</span> Education
    </h2>

    <div className="timeline">
      {education.map((e, index) => (
        <div key={e.years} className="timeline-item">
          <div className="timeline-left">
            <div className="timeline-dot" />
            <div className="timeline-line" />
          </div>

          <div className="timeline-right">
            <div className="timeline-year">{e.years}</div>

            <div className="timeline-content">
              <strong className={index === 0 ? "active-edu" : ""}>
                {e.place}
              </strong>
              <span className="edu-field">{e.field}</span>
              {e.desc && <p className="edu-desc">{e.desc}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* RIGHT — Languages */}
  <div className="about-block reveal">
            <h2 className="block-heading">Language</h2>
            <div className="lang-row">
              {[["English","Moderate"],["Hindi","Fluent"],["Marathi","Native"]].map(([l, lv]) => (
                <div key={l} className="lang-item">
                  <strong>{l}</strong>
                  <span>{lv}</span>
                </div>
              ))}
            </div>
          </div>


</div>

          {/* Experience
          <div className="about-block exp-block reveal">
            <h2 className="block-heading exp-heading">
              <span className="star-accent">✦</span> Experience
            </h2>
            <div className="timeline">
              {experience.map((e) => (
                <div key={e.year} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-year">{e.year}</div>
                  <div className="timeline-content">
                    <strong>{e.role}</strong>
                    {e.detail.split("\n").map((l, i) => <span key={i}>{l}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="tag-row">
              {tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
            </div>
          </div> */}

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="about-right">

          {/* Technical skills */}
          <div className="about-block reveal">
            <h2 className="block-heading yellow-heading">Technical skills</h2>

            <div className="skills-two-col">
              <div>
                <h4 className="skills-sub">Software Skills</h4>
                <div className="software-icons">
                  {["Figma", "VS-code", "Canva", "Ps"].map(s => (
                    <span key={s} className="sw-icon">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="skills-sub">Coding skills</h4>
                <p className="coding-note">Proficient in:</p>
                <div className="coding-grid">
                  {["React","Node.js","MongoDB","TypeScript","CSS3","JavaScript","Express","SQL"].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="skill-tag-row">
              {["Full Stack Dev", "Frontend Design", "REST APIs", "User Research"].map(t => (
                <span key={t} className="skill-dark-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          {/* <div className="about-block reveal">
            <h2 className="block-heading">Language</h2>
            <div className="lang-row">
              {[["English","Fluent"],["Hindi","Native"],["Marathi","Native"]].map(([l, lv]) => (
                <div key={l} className="lang-item">
                  <strong>{l}</strong>
                  <span>{lv}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Activities */}
          {/* <div className="about-block reveal">
            <h2 className="block-heading">Activities</h2>
            <div className="timeline small-timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <strong>Hackathon Winner</strong>
                  <span>1st place, State-level Coding Contest</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <strong>Tech Club President</strong>
                  <span>Organized workshops & coding drives</span>
                </div>
              </div>
            </div>
          </div> */}

          {/* Hobbies */}
          <div className="about-block reveal">
            <h2 className="block-heading">Hobbies &amp; Interests</h2>
            <div className="hobbies-row">
              {[["🎵","Music"],["🎨","Digital Art"],["📚","Reading"]].map(([e, l]) => (
                <div key={l} className="hobby-item">
                  <span className="hobby-icon">{e}</span>
                  <span className="hobby-label">{l}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;