// src/pages/Contact.jsx

import React, { useState } from 'react';
import { FiGlobe, FiMapPin, FiPhone } from 'react-icons/fi';

// Reusable Section Header from previous components
const SectionHeader = ({ subtitle, title }) => (
  <div className="text-left mb-16">
    <h3 className="text-gray-500 text-sm font-semibold tracking-widest uppercase">{subtitle}</h3>
    <h2 className="font-serif text-5xl font-bold text-gray-800 mt-2">{title}</h2>
  </div>
);

// Individual contact info item component
const ContactInfoItem = ({ icon, title, link, href }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 bg-gray-100 p-5 rounded-md">
      {icon}
    </div>
    <div>
      <a href={href} className="text-lg text-blue-500 hover:underline">
        {title}
      </a>
      <p className="text-gray-600">{link}</p> 
    </div>
  </div>
);

const Contact = () => {
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // NEW Handler for form submission that sends data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // The fetch call to your future backend API
      const response = await fetch('http://localhost:5000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        // Try to get error message from backend
        const errorData = await response.json().catch(() => ({ error: 'An unknown error occurred.' }));
        alert(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message. Please try again later.");
    }
  };

  const contactDetails = [
    { icon: <FiGlobe size={24} className="text-blue-500" />, title: 'dhanashri.garande@gmail.com', href: 'mailto:dhnashri.garande@gmail.com' },
    { icon: <FiMapPin size={24} className="text-blue-500" />, title: 'VJTI Mumbai,', link: 'Matunga east, Mumbai - 400019', href: '#' },
    { icon: <FiPhone size={24} className="text-blue-500" />, title: '+91 9529206580', href: 'tel:+91 9529206580' },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subtitle="Get in Touch" title="Contact" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-12">
            {contactDetails.map((item, index) => (
              <ContactInfoItem key={index} {...item} />
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows="6"
              className="w-full p-4 bg-gray-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-4 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300 self-start"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;