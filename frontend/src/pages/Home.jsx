// src/components/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // For custom scrollbar hiding and font
import { BsBag } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import designerImage from '../assets/designer.png'; 
import dhanashriImage from '../assets/dhanashri.jpg';

const Home = () => {
  
  // State to track the active slide
  const [activeSlide, setActiveSlide] = useState(1);
  
  // Refs for the slide sections
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  
  // Ref for the scroll container
  const containerRef = useRef(null);

  // This effect sets up the Intersection Observer to watch which slide is visible
  useEffect(() => {
    const options = {
      root: containerRef.current, // important: observe within the scroll container
      threshold: 0.5, // Trigger when 50% of the slide is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'slide1') {
            setActiveSlide(1);
          } else if (entry.target.id === 'slide2') {
            setActiveSlide(2);
          }
        }
      });
    }, options);

    if (slide1Ref.current) observer.observe(slide1Ref.current);
    if (slide2Ref.current) observer.observe(slide2Ref.current);

    // Cleanup observer on component unmount
    return () => {
      if (slide1Ref.current) observer.unobserve(slide1Ref.current);
      if (slide2Ref.current) observer.unobserve(slide2Ref.current);
    };
  }, []);

  // Function to scroll to a specific slide
  const scrollToSlide = (slideRef) => {
    slideRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full">
      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      >
        {/* Slide 1: Designer */}
        <div
          id="slide1"
          ref={slide1Ref}
          className="h-screen w-full snap-start flex items-center bg-cover bg-center"
          // style={{ backgroundImage: `url('./assets/designer.jpg')` }}
          style={{ backgroundImage: `url(${designerImage})` }}

        >
          <div className="text-left text-black ml-16 md:ml-24 lg:ml-32">
            <h1 className="text-6xl md:text-8xl font-serif font-bold">Hi!</h1>
            <h1 className="text-6xl md:text-8xl font-serif font-bold">I'm Dhanashri</h1>
            <p className="mt-4 text-gray-600">
             Pursuing Computer Engineering  <br />from <a href="#" className="text-blue-500 hover:underline">https://vjti.ac.in/</a>
            </p>
            <button className="mt-6 border border-black px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300">
              VIEW PORTFOLIO <BsBag />
            </button>
          </div>
        </div>

        {/* Slide 2: Jackson */}
        <div
          id="slide2"
          ref={slide2Ref}
          className="h-screen w-full snap-start flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${dhanashriImage})` }}

        >
          <div className="text-left text-black ml-16 md:ml-24 lg:ml-32">
            <h1 className="text-6xl md:text-8xl font-serif font-bold">I am</h1>
            <h1 className="text-6xl md:text-8xl font-serif font-bold">a Devloper</h1>
            <p className="mt-4 text-gray-600">
              Design, Devlop, Deploy. <br /> <a href="#" className="text-blue-500 hover:underline"></a>
            </p>
            <button className="mt-6 border border-black px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-black hover:text-white transition-colors duration-300">
             <a href="/cv.pdf" download>DOWNLOAD CV</a>  <FiDownload />
            </button>
          </div>
        </div>
      </div>
      
      {/* Side Navigation Dots */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        <button
          onClick={() => scrollToSlide(slide1Ref)}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            activeSlide === 1 ? 'bg-blue-500' : 'bg-gray-400 hover:bg-gray-500'
          }`}
        ></button>
        <button
          onClick={() => scrollToSlide(slide2Ref)}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            activeSlide === 2 ? 'bg-blue-500' : 'bg-gray-400 hover:bg-gray-500'
          }`}
        ></button>
      </div>
    </section>
  );
};

export default Home;