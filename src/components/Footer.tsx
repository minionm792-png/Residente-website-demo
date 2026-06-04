/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Coffee, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-coffee-dark border-t border-coffee-clay/10 pt-16 pb-12 text-cream-warm" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12" id="footer-upper-grid">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer w-fit" onClick={() => handleScrollTo('#hero')}>
              <div className="w-8 h-8 rounded-none bg-coffee-clay flex items-center justify-center text-[#F9F7F2]">
                <Coffee className="w-4.5 h-4.5" />
              </div>
              <span className="font-display text-base tracking-[0.25em] font-bold uppercase text-cream-soft">
                RESIDENTE CAFÉ
              </span>
            </div>
            
            <p className="font-sans text-xs text-cream-warm/70 leading-relaxed font-light max-w-sm">
              Cebu's contemporary neighborhood coffee kitchen. We focus on low-glare, peaceful coworking spaces paired with high-precision double-shot espressos. Designed for deep work and slow life.
            </p>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-3">
            <h4 className="font-display text-[11px] uppercase tracking-[0.2em] font-normal text-coffee-ochre mb-4">
              Explore Spaces
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleScrollTo('#hero')} className="hover:text-coffee-ochre transition-colors cursor-pointer text-cream-warm/85 font-light">
                  Direct Entrance
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#about')} className="hover:text-coffee-ochre transition-colors cursor-pointer text-cream-warm/85 font-light">
                  Our Coffee Pillars
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#menu')} className="hover:text-coffee-ochre transition-colors cursor-pointer text-cream-warm/85 font-light">
                  Interactive Craft Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('#space')} className="hover:text-coffee-ochre transition-colors cursor-pointer text-cream-warm/85 font-light">
                  Coworking Zone specifications
                </button>
              </li>
            </ul>
          </div>

          {/* Social Indices */}
          <div className="md:col-span-4">
            <h4 className="font-display text-[11px] uppercase tracking-[0.2em] font-normal text-coffee-ochre mb-4">
              Social Mentions
            </h4>
            <p className="font-sans text-xs text-cream-warm/75 leading-relaxed font-light mb-4">
              Share your study workflows with our community! Tag us in your stories and view daily local roastery details.
            </p>
            <div className="flex space-x-3.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-none bg-coffee-espresso hover:bg-coffee-clay hover:text-cream-soft flex items-center justify-center text-cream-warm/85 border border-coffee-clay/10 transition-colors shadow"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-none bg-coffee-espresso hover:bg-coffee-clay hover:text-cream-soft flex items-center justify-center text-cream-warm/85 border border-coffee-clay/10 transition-colors shadow"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
            </div>
            <span className="block font-mono text-[9px] text-[#A67C52] tracking-[0.2em] font-semibold uppercase mt-4">
              Follow Us: @residente.cafe.cebu
            </span>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-coffee-clay/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-wider text-cream-warm/40 text-center gap-4">
          <div>
            © 2026 Residente Café Cebu Co. All Rights Reserved.
          </div>
          <div>
            Made with Craft &amp; Integrity in Consolacion, Cebu, Philippines.
          </div>
        </div>

      </div>
    </footer>
  );
}
