import { useEffect, useRef } from "react";
import "./Blog.css";

const posts = [
  { id: 1, title: "Okay, Is a Robot Going to Steal My Job? An Unfiltered Guide to Making AI Your Actual Bestie.", excerpt: "AI is not here to replace you—it is here to amplify you. The real risk is not AI taking your job, but people who learn to use AI better than you. So instead of fearing it, learn it and make it your advantage.", date: "July 2025", read: "5 min", link: "https://shorturl.at/bhh3e" },
  // { id: 2, title: "Editorial Portfolio Aesthetics — The Anti-AI Look", excerpt: "How to design a portfolio that feels handcrafted, bold, and human rather than AI-generated gradient soup.", date: "Feb 2025", read: "5 min", link: "https://your-blog-link-2.com" },
  // { id: 3, title: "Building REST APIs with Node & Express", excerpt: "From zero to production-ready: structuring, auth, error handling and deployment of Node.js APIs.", date: "Feb 2025", read: "8 min", link: "https://your-blog-link-3.com" },
  // { id: 4, title: "My Journey from Student to Developer", excerpt: "The honest, unfiltered story of learning to code — the breakthroughs, setbacks, and lessons.", date: "Jan 2025", read: "4 min", link: "https://your-blog-link-4.com" },
  // { id: 5, title: "CSS Grid vs Flexbox: When to Use What", excerpt: "A practical, example-driven guide to picking the right layout tool every time.", date: "Jan 2025", read: "5 min", link: "https://your-blog-link-5.com" },
  // { id: 6, title: "10 VS Code Extensions I Cannot Live Without", excerpt: "The exact dev setup that makes me write better code faster — from linting to AI copilots.", date: "Dec 2024", read: "3 min", link: "https://your-blog-link-6.com" },
];

const Blog = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" className="blog" ref={sectionRef}>
      <div className="blog-watermark" aria-hidden="true">BLOG</div>

      <div className="blog-inner">
        <div className="blog-top reveal">
          <div className="blog-heading-row">
            <span className="star-spin">✦</span>
            <h2 className="blog-title-main">Latest<br /><em>Blog Posts</em></h2>
          </div>
          <p className="blog-sub">Thoughts on code, design, and building things on the web.</p>
        </div>

        {/* Posts grid */}
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article key={post.id} className="blog-post reveal" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="blog-post-top">
                <span className="blog-post-read">{post.read} read</span>
              </div>
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <div className="blog-post-footer">
                <span className="blog-post-date">{post.date}</span>
                
                  <a href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-read-btn"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;