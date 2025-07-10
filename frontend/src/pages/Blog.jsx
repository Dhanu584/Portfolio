// src/pages/Blog.jsx

import React from 'react';
import { FiMessageSquare } from 'react-icons/fi'; // Import the comment icon
import { href } from 'react-router-dom';
import blog1 from '../assets/blog1.png';


// --- Reusable Section Header ---
// We can reuse the header style from the About page for consistency.
const SectionHeader = ({ subtitle, title }) => (
  <div className="text-center mb-16">
    <h3 className="text-gray-500 text-sm font-semibold tracking-widest uppercase">{subtitle}</h3>
    <h2 className="font-serif text-5xl font-bold text-gray-800 mt-2">{title}</h2>
  </div>
);

// --- Blog Card Component ---
// This makes our main component cleaner and the card reusable.
const BlogCard = ({ post }) => {
  return (
    <div className="group">
      <a href="#">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-64 object-cover mb-4" 
        />
      </a>
      <div className="text-left">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
          {post.date} | {post.category} | <FiMessageSquare className="inline-block -mt-1" /> {post.comments}
        </p>
        <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-500 transition-colors duration-300">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

// --- Main Blog Page Component ---
const Blog = () => {
  // We'll store our blog posts in an array of objects.
  // This makes it easy to add more posts later.
  const blogData = [
    {
      id: 1,
      title: <a href="https://lnk.ink/kFX7p" target="_blank" rel="noopener noreferrer">
  Okay, Is a Robot Going to Steal My Job? An Unfiltered Guide to Making AI Your Actual Bestie.
</a>
,
      date: "July 09, 2025",
      category: "AI",
      comments: 0,
      excerpt: "Think AI's coming for your job? Maybe. But what if it could help you get better at it instead? Let’s make AI your new bestie — not your enemy.",
      imageUrl:  blog1
    },
  //   {
  //     id: 2,
  //     title: "WordPress for a Beginner",
  //     date: "April 14, 2018",
  //     category: "Web Design",
  //     comments: 4,
  //     excerpt: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  //     imageUrl: "/images/blog/blog2.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Make Website from Scratch",
  //     date: "April 14, 2018",
  //     category: "Inspiration",
  //     comments: 4,
  //     excerpt: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  //     imageUrl: "/images/blog/blog3.jpg"
  //   }
  ];

  return (
    <section id="blogs" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subtitle="Read" title="Recent Blog" />
        
        {/* Responsive Grid for Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogData.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;