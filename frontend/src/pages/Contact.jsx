import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => { setStatus("sent"); setForm({ name: "", email: "", subject: "", message: "" }); }, 1800);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-inner">

        {/* Left */}
        <div className="contact-left reveal">
          <span className="deco-star-contact">✦</span>
          <h2 className="contact-heading">
            Let's<br /><em>Work Together</em>
          </h2>
          <p className="contact-body">
            I'm currently open to freelance projects and full-time opportunities. 
            Whether you have a project in mind or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-info-list">
  {[
    ["📍", "Location", "India", null],
    ["✉", "Email", "dhanashri@email.com", "mailto:dhanashri@email.com"],
    ["💻", "GitHub", "github.com/dhanashri", "https://github.com/Dhanu584"],
    ["💼", "LinkedIn", "linkedin.com/in/dhanashri", "https://www.linkedin.com/in/dhanashri-garande-125ab53a4/"],
  ].map(([icon, label, val, link]) => (
    <div key={label} className="contact-info-row">
      <span className="contact-info-icon">{icon}</span>

      <div>
        <span className="contact-info-label">{label}</span>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="contact-info-val"
          >
            {val}
          </a>
        ) : (
          <span className="contact-info-val">{val}</span>
        )}
      </div>
    </div>
  ))}
</div>

          <div className="avail-row">
            <span className="avail-dot" />
            <span>Available for new projects</span>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right reveal" style={{ animationDelay: "0.15s" }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name..." value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Let's build something great" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me..." value={form.message} onChange={handleChange} required />
            </div>
            <button
              type="submit"
              className={`form-submit-btn ${status === "sent" ? "sent" : ""}`}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" && <><span className="send-spin" /> Sending...</>}
              {status === "sent" && "✅ Message Sent!"}
              {!status && "Send Message →"}
            </button>
          </form>
        </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="footer-star">✦</span>
            <span>Dhanashri</span>
          </div>
          <p className="footer-copy">© 2025 Dhanashri Garande ♥</p>
          <div className="footer-links">
            <a href="https://github.com/Dhanu584" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dhanashri-garande-125ab53a4/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:dhanashri@email.com?subject=Contact%20from%20Portfolio&body=Hi%20Dhanashri,">
  Email
</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;