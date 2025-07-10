// src/pages/About.jsx

import React, { useState, useEffect, useRef } from 'react';
import './About.css';

// CORRECTED: Importing icons that are all verified to exist in the 'fi' (Feather) icon set.
// 'FiPenTool' is used for "Graphic Design" instead of the non-existent lightbulb.
import { FiPenTool, FiMonitor, FiDatabase, FiSmartphone, FiPlus, FiMinus } from 'react-icons/fi';

const SectionHeader = ({ subtitle, title }) => (
  <div className="text-center mb-12">
    <h3 className="text-gray-400 text-sm font-semibold tracking-widest uppercase">{subtitle}</h3>
    <h2 className="font-serif text-4xl font-bold text-gray-800 mt-2">{title}</h2>
  </div>
);

const WhoAmI = () => {
  const services = [
    { icon: <FiPenTool size={30} />, title: "Graphic Design", color: "#3498db" },
    { icon: <FiMonitor size={30} />, title: "Web Design", color: "#e74c3c" },
    { icon: <FiDatabase size={30} />, title: "Software", color: "#f1c40f" },
    { icon: <FiSmartphone size={30} />, title: "Application", color: "#9b59b6" },
  ];

  return (
    <div className="mb-20">
      <SectionHeader subtitle="About Us" title="Who Am I?" />
      <div className="max-w-4xl mx-auto text-center text-gray-600 leading-relaxed">
        <p className="mb-4">
          <strong className="text-gray-800">Hi I'm Dhanashri Garande</strong> a 20-year-old computer engineering student with a curious mind and a passion for building things that matter. Whether it's coding a full-stack web app, sketching out a new journal design, or exploring how AI can shape our future, I love bringing ideas to life. 
        </p>
        <p>
          I’m currently pursuing my B.Tech from VJTI, Mumbai, with a minor in Entrepreneurship & Innovation — and I’m on a journey to blend technology with purpose. This portfolio is a reflection of the skills I’m learning, the stories I’m writing, and the impact I hope to make.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 text-center shadow-lg rounded-lg border-b-4 transition-transform transform hover:-translate-y-2" style={{ borderColor: service.color }}>
            <span className="inline-block" style={{ color: service.color }}>{service.icon}</span>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
    const skillsData = [
        { name: "C++", level: 75, color: "#3498db" },
        { name: "HTML", level: 90, color: "#e74c3c" },
        { name: "CSS", level: 95, color: "#f1c40f" },
        { name: "Javascript", level: 70, color: "#9b59b6" },
        { name: "React.js", level: 70, color: "#2ecc71" },
        { name: "Figma", level: 75, color: "#1abc9c" },
    ];
  
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
  
        const currentRef = skillsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
  
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} className="mb-20">
            <SectionHeader subtitle="My Specialty" title="My Skills" />
            <div className="max-w-4xl mx-auto text-center text-gray-600 leading-relaxed mb-12">
                <p>I have a strong foundation in front-end web development, with skills in HTML, CSS, and JavaScript, along with experience building dynamic and responsive interfaces using React.js. I'm also proficient in C++, which has strengthened my problem-solving and programming fundamentals. Currently, I’m expanding my backend skills by learning Node.js and MongoDB to become a full-stack developer. In addition to coding, I have a creative eye for design and enjoy working with tools like Canva and Figma to craft clean, user-friendly UI/UX designs.

</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {skillsData.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm font-medium" style={{color: skill.color}}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="h-2 rounded-full skill-bar relative" style={{ width: isVisible ? `${skill.level}%` : '0%', backgroundColor: skill.color }}>
                               <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: skill.color }}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Education = () => {
    const educationData = [
        
        { id: 1, title: "Pursuing Computer Engineering (B.Tech) Degree", content: "B.Tech in Computer Engineering (2023 – 2027) Currently in 3rd year at VJTI Mumbai, one of India’s top engineering institutes.Building strong foundations in software development, system design, and problem-solving through a blend of academics and hands-on projects." },
        { id: 4, title: "Doing Minor in Entrepreneurship & Innovation", content: "I'm also pursuing a minor in Entrepreneurship and Innovation, which helps me combine technical skills with business thinking to build impactful and user-focused solutions." },
        { id: 2, title: "12th Board and MHT-CET", content: "I completed my 12th board in 2023 with 78.17% and scored 98.67 percentile in MHT-CET, which helped me secure admission to VJTI Mumbai for Computer Engineering." },
        { id: 3, title: "10th Board", content: "I completed my 10th board in 2020 with 91%, which laid a strong academic foundation for my future studies" },
        
    ];

    const [openId, setOpenId] = useState(educationData[0].id);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div>
            <SectionHeader subtitle="Education" title="Education" />
            <div className="max-w-4xl mx-auto">
                {educationData.map(item => (
                    <div key={item.id} className="border-b border-gray-200">
                        <h2>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium text-left transition duration-300 ${
                                    openId === item.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                onClick={() => toggleAccordion(item.id)}
                            >
                                <span>{item.title}</span>
                                {openId === item.id ? <FiMinus className="w-6 h-6" /> : <FiPlus className="w-6 h-6" />}
                            </button>
                        </h2>
                        <div
                            className={`grid transition-all duration-500 ease-in-out ${
                                openId === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-5 border border-t-0 border-gray-200 bg-white">
                                    <p className="text-gray-600">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 lg:px-20 bg-white">
      <WhoAmI />
      <Skills />
      <Education />
    </section>
  );
};

export default About;