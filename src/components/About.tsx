/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, Heart, Coffee } from 'lucide-react';

export default function About() {
  const brandPillars = [
    {
      icon: <Coffee className="w-5 h-5 text-coffee-ochre" />,
      title: "Handcrafted Specialty Roasts",
      desc: "Our baristas brew each cup at exact temperatures, combining high-grown local Mt. Apo Arabica beans with organic Brazilian coffees for a smooth, chocolaty finish.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-coffee-ochre" />,
      title: "Heritage Study Space",
      desc: "Thoughtfully built for creators, designers, and students. Every table features individual power access, anti-glare overhead warm lights, and noise-dampening panels.",
    },
    {
      icon: <Heart className="w-5 h-5 text-coffee-ochre" />,
      title: "Cebuano Hospitality",
      desc: "Residente represents home. We employ talented local baristas, source our ingredients from visual farmers in Cebu, and support the community's environmental endeavors.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-coffee-espresso relative border-y border-coffee-clay/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-container">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-philosophy">
            <span className="font-mono text-[10px] tracking-[0.3em] text-coffee-ochre uppercase font-bold mb-4 block">
              OUR ARCHIVE &amp; PHILOSOPHY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-cream-soft mb-6 leading-[1.1]">
              An Extension of Your Living Room, <span className="italic font-light text-coffee-ochre">Created in Cebu.</span>
            </h2>
            <p className="font-serif text-cream-warm/90 leading-relaxed mb-6 font-light text-base italic">
              The name <strong>Residente</strong> literally means 'resident' in Spanish and Cebuano. We wanted to build a workspace and beverage kitchen that captures the comforts of home, combined with the premium energy of an architectural roastery.
            </p>
            <p className="font-sans text-cream-warm/80 leading-relaxed mb-8 font-light text-sm">
              Whether you are here with your headphones on writing your next project, or catching up on high school memories with an iced Spanish Latte, Residente is designed to slow down the world around you.
            </p>

            {/* Brand Pillars list using flat, sharp artistic layouts */}
            <div className="space-y-4" id="brand-pillars">
              {brandPillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-coffee-dark/40 border border-coffee-clay/10 transition-colors duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 border border-coffee-ochre/20 bg-coffee-dark text-coffee-ochre">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-cream-soft tracking-wider mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-cream-warm/80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Stats Column with Arched Styling */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            
            {/* Main Styled Arched Photo to match the design's distinctive window frame arch */}
            <div className="relative rounded-t-[200px] overflow-hidden shadow-xl border border-coffee-ochre/20 max-w-full bg-coffee-dark">
              <img
                src="/assets/images/residente_latte_1780551631700.png"
                alt="Spanish Latte at Residente Cafe"
                className="w-full object-cover aspect-[4/5] hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/65 via-transparent to-transparent" />
              
              {/* Overlay Stat Card - Elegant Sharp Board style */}
              <div className="absolute bottom-4 left-4 right-4 bg-coffee-dark/95 border border-coffee-clay/15 p-4 flex justify-between items-center shadow-lg">
                <div className="text-center">
                  <span className="block font-display text-2xl font-semibold text-coffee-ochre">30+</span>
                  <span className="block font-sans text-[8px] uppercase tracking-widest text-[#2C1B18]/70 font-medium">Power Hubs</span>
                </div>
                <div className="w-px h-8 bg-coffee-clay/15" />
                <div className="text-center">
                  <span className="block font-display text-2xl font-semibold text-coffee-ochre">100%</span>
                  <span className="block font-sans text-[8px] uppercase tracking-widest text-[#2C1B18]/70 font-medium">Local Farmers</span>
                </div>
                <div className="w-px h-8 bg-coffee-clay/15" />
                <div className="text-center">
                  <span className="block font-display text-2xl font-semibold text-coffee-ochre">200M</span>
                  <span className="block font-sans text-[8px] uppercase tracking-widest text-[#2C1B18]/70 font-medium">Fiber Net</span>
                </div>
              </div>
            </div>

            {/* Aesthetic quote balloon */}
            <div className="absolute -top-6 -right-3 hidden xl:block bg-[#A67C52] text-[#F9F7F2] p-4 border border-coffee-ochre/25 shadow-lg max-w-[170px]">
              <p className="font-display text-base text-[#F9F7F2] leading-snug italic font-light">
                "Cebu's premier study coffee shelter."
              </p>
              <span className="block text-[8px] uppercase tracking-widest text-[#F9F7F2]/80 font-mono mt-2">— Cebu Guide</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
