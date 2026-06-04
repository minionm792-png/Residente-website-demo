/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, Leaf, Wifi, MapPin } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-coffee-dark flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Graphic overlay with warm sepia glow to match off-white aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/residente_hero_1780551609409.png"
          alt="Residente Cafe Ambiance"
          className="w-full h-full object-cover opacity-20 filter sepia brightness-110 saturate-75 contrast-[90%] scale-100 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/85 to-coffee-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark via-transparent to-coffee-dark/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in" id="hero-content-wrapper">
        
        {/* Upper Tagline Line & Badge */}
        <div 
          className="inline-flex items-center space-x-4 mb-8"
          id="hero-tagline-badge"
        >
          <div className="h-[1px] w-6 sm:w-12 bg-coffee-clay/20"></div>
          <Leaf className="w-3.5 h-3.5 text-coffee-ochre" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-cream-warm/80">
            Est. 2024 • Cebu City, Philippines
          </span>
          <div className="h-[1px] w-6 sm:w-12 bg-coffee-clay/20"></div>
        </div>

        {/* Hero Main Heading with gorgeous serif italic flourish */}
        <h1 
          className="font-display text-4xl sm:text-6xl md:text-[84px] font-medium tracking-tight text-cream-soft mb-6 leading-[1.0]"
          id="hero-heading"
        >
          A Nest for <span className="italic text-coffee-ochre font-light font-serif">Slow Mornings</span><br className="hidden sm:block" /> &amp; Deep Work
        </h1>

        {/* Supporting Paragraph */}
        <p 
          className="text-base sm:text-lg text-cream-warm/90 font-serif max-w-xl mx-auto mb-10 leading-relaxed font-light italic opacity-95"
          id="hero-paragraph"
        >
          Residente Café is Cebu's contemporary neighborhood roastery. We build spaces that feel like home—designed for slow sips, rich conversations, and uninterrupted focus.
        </p>

        {/* Feature Triggers with thin borders and minimal bg */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          id="hero-features-grid"
        >
          <div className="flex items-center justify-center space-x-2 bg-coffee-espresso/20 border border-coffee-clay/10 py-3 px-4 rounded-none hover:border-coffee-ochre/30 transition-colors">
            <Wifi className="w-4 h-4 text-coffee-ochre" />
            <span className="text-xs font-mono text-cream-warm/95 tracking-wide">200Mbps Fiber Wi-Fi</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-coffee-espresso/20 border border-coffee-clay/10 py-3 px-4 rounded-none hover:border-coffee-ochre/30 transition-colors">
            <MapPin className="w-4 h-4 text-coffee-ochre" />
            <span className="text-xs font-mono text-cream-warm/95 tracking-wide">Cebu, Philippines</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center space-x-2 bg-coffee-espresso/20 border border-coffee-clay/10 py-3 px-4 rounded-none hover:border-coffee-ochre/30 transition-colors">
            <span className="w-2 h-2 rounded-full bg-coffee-ochre animate-pulse" />
            <span className="text-xs font-mono text-cream-warm/95 tracking-wide">Power Outlets Galore</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          id="hero-actions"
        >
          <button
            onClick={() => handleScrollTo('#menu')}
            className="w-full sm:w-auto bg-coffee-clay hover:bg-coffee-ochre hover:text-white text-cream-soft font-sans text-xs tracking-widest font-bold uppercase py-4 px-10 border border-coffee-clay hover:border-coffee-ochre rounded-none transition-all duration-300 shadow-none cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Explore Craft Menu</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => handleScrollTo('#space')}
            className="w-full sm:w-auto bg-transparent border border-coffee-clay/30 hover:border-coffee-clay text-cream-soft font-sans text-xs tracking-widest font-bold uppercase py-4 px-10 rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Reserve Workseat</span>
          </button>
        </div>

        {/* Coordinates overlay at the bottom */}
        <div className="absolute bottom-8 left-0 w-full flex justify-between items-center px-4 sm:px-8 text-cream-warm/40 font-mono text-[9px] uppercase tracking-widest">
          <div>LAT / RNG: 10.3157° N, 123.8854° E</div>
          <div className="hidden sm:block">residente coffee co. • aesthetic &amp; archive</div>
          <div>Cebu PH 2026</div>
        </div>

      </div>
    </section>
  );
}
