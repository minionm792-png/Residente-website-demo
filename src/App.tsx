/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import AestheticSpace from './components/AestheticSpace';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active header link
  useEffect(() => {
    const sections = ['hero', 'about', 'menu', 'space', 'visit'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // offset for sticky nav bar
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="applet-container" className="bg-coffee-dark min-h-screen text-cream-soft overflow-x-hidden selection:bg-coffee-clay selection:text-cream-soft">
      {/* Fixed Sticky Header Navigation */}
      <Header activeSection={activeSection} />

      {/* Hero Entrance Feature Block */}
      <main id="main-content">
        <Hero />

        {/* Company History/Philosophy Story block */}
        <About />

        {/* Dynamic & Filterable Culinary & Coffee Menu */}
        <Menu />

        {/* Interactive Nomad Spatial Seats Map / WiFi Speeder */}
        <AestheticSpace />

        {/* Location Markers, transit guides & Live Guestbook Star Review Box */}
        <Contact />
      </main>

      {/* Structured Footer with links and socials */}
      <Footer />
    </div>
  );
}
