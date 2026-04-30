import { useEffect, useRef } from "react";
import "./Skills.css";

const categories = [
  {
    title: "Frontend",
    color: "green",
    items: [
      { name: "React.js", pct: 90 },
      { name: "HTML5 & CSS3", pct: 95 },
      { name: "JavaScript (ES6+)", pct: 88 },
      { name: "TypeScript", pct: 74 },
      { name: "Tailwind CSS", pct: 85 },
    ],
  },
  {
    title: "Backend",
    color: "yellow",
    items: [
      { name: "Node.js", pct: 82 },
      { name: "Express.js", pct: 80 },
      { name: "MongoDB", pct: 78 },
      { name: "MySQL / SQL", pct: 72 },
      { name: "REST APIs", pct: 86 },
    ],
  },
  {
    title: "Tools & Design",
    color: "cream",
    items: [
      { name: "Git & GitHub", pct: 90 },
      { name: "Figma", pct: 78 },
      { name: "VS Code", pct: 95 },
      { name: "Postman", pct: 80 },
      { name: "Vercel / Netlify", pct: 85 },
    ],
  },
];

const SkillBar = ({ name, pct, delay, barColor }) => {
  const fillRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => { if (fillRef.current) fillRef.current.style.width = pct + "%"; }, delay);
    }, { threshold: 0.3 });
    if (fillRef.current) obs.observe(fillRef.current.closest(".skill-row"));
    return () => obs.disconnect();
  }, [pct, delay]);

  return (
    <div className="skill-row">
      <div className="skill-row-top">
        <span className="skill-row-name">{name}</span>
        <span className="skill-row-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div ref={fillRef} className="skill-fill" style={{ width: 0, background: barColor }} />
      </div>
    </div>
  );
};

const Skills = () => {
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
    <section id="skills" className="skills" ref={sectionRef}>
      {/* Section heading */}
      <div className="skills-header reveal">
        <span className="deco-star-spin">✦</span>
        <h2 className="skills-main-title">My Skills</h2>
        <p className="skills-sub-text">Technologies I work with daily to build great products.</p>
      </div>

      <div className="skills-grid">
        {categories.map((cat, ci) => (
          <div key={cat.title} className={`skill-card skill-card--${cat.color} reveal`} style={{ animationDelay: `${ci * 0.15}s` }}>
            <h3 className="skill-card-title">{cat.title}</h3>
            <div className="skill-list">
              {cat.items.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  delay={ci * 100 + si * 100}
                  barColor={cat.color === "yellow" ? "var(--yellow)" : cat.color === "cream" ? "var(--cream)" : "var(--cream)"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;