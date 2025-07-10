// src/App.jsx

import React from 'react';

// Import Components
import Navbar from './components/Navbar'; 

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact'; // <-- The final page is imported

function App() {
  return (
    <div>
      {/* Navbar is always at the top */}
      <Navbar />

      <main>
        {/* All four of your pages are now rendered in the correct order. */}
        {/* No more placeholders! */}
        <Home />
        <About />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;