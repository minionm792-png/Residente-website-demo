/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Menu as MenuIcon, X, Clock, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStatus, setCurrentStatus] = useState({ isOpen: true, text: 'Open Now' });

  // Handle scroll shadow and transparency transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine open/closed status based on actual Philippine Time
  // Operating hours: 8:00 AM - 10:00 PM (08:00 - 22:00)
  useEffect(() => {
    const checkCafeStatus = () => {
      // Get current UTC time and convert to Philippine local time (UTC+8)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const phTime = new Date(utc + 3600000 * 8);
      const hours = phTime.getHours();
      
      if (hours >= 8 && hours < 22) {
        setCurrentStatus({ isOpen: true, text: 'Open Today until 10:00 PM' });
      } else {
        setCurrentStatus({ isOpen: false, text: 'Closed • Opens at 8:00 AM' });
      }
    };
    
    checkCafeStatus();
    const interval = setInterval(checkCafeStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { label: 'Our Story', target: '#about', id: 'about' },
    { label: 'Craft Menu', target: '#menu', id: 'menu' },
    { label: 'Co-Working', target: '#space', id: 'space' },
    { label: 'Find Us', target: '#visit', id: 'visit' },
  ];

  const handleScrollTo = (targetId: string) => {
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-coffee-dark/95 backdrop-blur-md border-b border-coffee-espresso/60 py-3 shadow-lg'
          : 'bg-gradient-to-b from-coffee-dark/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <div 
            onClick={() => handleScrollTo('#hero')} 
            className="flex items-center space-x-2.5 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-coffee-clay to-coffee-ochre flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 duration-300">
              <Coffee className="w-5.5 h-5.5 text-cream-soft" />
            </div>
            <div>
              <span className="font-display text-lg tracking-widest font-extrabold uppercase text-cream-soft transition-colors group-hover:text-coffee-ochre">
                Residente
              </span>
              <span className="font-display text-sm tracking-wide font-normal text-coffee-ochre ml-1 italic block -mt-1">
                Café • Cebu
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-nav-links">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.target)}
                className={`font-sans text-xs tracking-widest font-medium uppercase transition-all relative py-1.5 cursor-pointer hover:text-coffee-ochre ${
                  activeSection === item.id
                    ? 'text-coffee-clay font-semibold'
                    : 'text-cream-warm/80'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coffee-clay rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          {/* Real-time Status and Locator Quick Link */}
          <div className="hidden lg:flex items-center space-x-4" id="header-status-box">
            <div className="flex items-center space-x-2 bg-coffee-espresso px-3.5 py-1.5 rounded-full border border-coffee-clay/20">
              <span className={`w-2 h-2 rounded-full ${currentStatus.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-cream-warm/95">
                {currentStatus.text}
              </span>
            </div>
            
            <button
              onClick={() => handleScrollTo('#visit')}
              className="bg-coffee-clay hover:bg-coffee-clay/90 text-cream-soft font-sans text-xs font-semibold tracking-widest uppercase hover:text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-1.5 cursor-pointer shadow-md active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-coffee-espresso px-2.5 py-1 rounded-full border border-coffee-clay/10">
              <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="font-mono text-[9px] uppercase tracking-wider text-cream-warm/80">
                {currentStatus.isOpen ? 'Open' : 'Closed'}
              </span>
            </div>
            
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream-warm hover:text-coffee-ochre focus:outline-none p-1.5 rounded bg-coffee-espresso transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div 
          className="md:hidden bg-coffee-dark border-b border-coffee-espresso/80 animate-fade-in"
          id="mobile-nav-panel"
        >
          <div className="px-5 pt-3 pb-6 space-y-4 shadow-xl">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.target)}
                className={`block w-full text-left py-2 px-3 rounded-lg font-sans text-sm tracking-widest font-semibold uppercase transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-coffee-clay bg-coffee-espresso/40'
                    : 'text-cream-warm/90 hover:text-coffee-ochre hover:bg-coffee-espresso/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-coffee-espresso flex flex-col space-y-3 px-3">
              <div className="flex items-center space-x-2 text-xs text-cream-warm/60 font-mono">
                <Clock className="w-3.5 h-3.5 text-coffee-ochre" />
                <span>{currentStatus.text}</span>
              </div>
              <button
                onClick={() => handleScrollTo('#visit')}
                className="w-full bg-coffee-clay hover:bg-coffee-clay/90 text-cream-soft font-sans text-xs font-semibold tracking-widest uppercase text-center py-2.5 rounded-lg transition-transform active:scale-95 cursor-pointer shadow flex items-center justify-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Us in Cebu</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
