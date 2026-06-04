/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserFeedback } from '../types';
import { MapPin, Clock, Phone, Mail, Star, MessageSquare, Check, Send } from 'lucide-react';

const INITIAL_FEEDBACK: UserFeedback[] = [
  {
    name: "Miguel Solis",
    email: "migs.dev@outlook.com",
    rating: 5,
    comments: "The absolute best study cafe in Cebu. Spanish Latte is perfectly balanced, and the 240Mbps Wi-Fi didn't drop once. I worked here for 6 hours straight without interruptions.",
    visitDate: "2026-05-28",
    status: 'submitted'
  },
  {
    name: "Janina Torres",
    email: "janina@up.edu.ph",
    rating: 5,
    comments: "Highly recommend the Deep Focus Vault! It is extremely quiet and let me cram for my law school exams in peace. The native Cebu Tablea Hot Chocolate is rich and heavenly.",
    visitDate: "2026-06-02",
    status: 'submitted'
  },
  {
    name: "Lance Go",
    email: "lance.go@gmail.com",
    rating: 5,
    comments: "Great aesthetic! Perfect blend of industrial raw concrete with mid-century wooden fixtures. The baristas are super friendly and let me try a sample shot of Mt. Apo roast.",
    visitDate: "2026-06-03",
    status: 'submitted'
  }
];

export default function Contact() {
  const [reviews, setReviews] = useState<UserFeedback[]>(INITIAL_FEEDBACK);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formComments, setFormComments] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formComments || !formEmail) return;

    const newReview: UserFeedback = {
      name: formName,
      email: formEmail,
      rating: formRating,
      comments: formComments,
      visitDate: new Date().toISOString().split('T')[0],
      status: 'submitted'
    };

    setReviews([newReview, ...reviews]);
    setFormName('');
    setFormEmail('');
    setFormRating(5);
    setFormComments('');
    setFormStatus('success');

    setTimeout(() => {
      setFormStatus('idle');
    }, 4000);
  };

  return (
    <section id="visit" className="py-24 bg-coffee-dark text-cream-soft relative border-b border-coffee-clay/5">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#231c17_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="contact-wrapper">
        
        {/* Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="visit-layout-grid">
          
          {/* Left Column: Direct Address, Hours, & Map Links */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="visit-details-pnl">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-coffee-ochre uppercase font-bold mb-3 block">
                LOCATE OUR SANCTUARY
              </span>
              <h2 className="font-display text-4.5xl sm:text-5xl font-normal text-cream-soft tracking-tight mb-8">
                Visit <span className="italic font-light text-coffee-ochre">Residente</span>
              </h2>

              {/* Specs boxes for locator with sharp-edged borders */}
              <div className="space-y-6" id="location-cards-stack">
                <div className="flex gap-4 p-5 rounded-none bg-coffee-espresso/40 border border-coffee-clay/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-none bg-coffee-clay/10 border border-coffee-clay/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-coffee-clay" />
                  </div>
                  <div>
                    <h3 className="font-display text-xs font-bold uppercase tracking-widest text-[#F9F7F2] mb-1">
                      Our Address
                    </h3>
                    <p className="font-sans text-xs text-cream-warm/80 leading-relaxed font-light">
                      M.C. Briones Street, Barangay Basak,<br />
                      Mandaue Highway (Near Consolacion Boundary),<br />
                      Metro Cebu, Philippines 6014
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-coffee-ochre hover:text-coffee-clay font-bold underline"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-none bg-coffee-espresso/40 border border-coffee-clay/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-none bg-coffee-clay/10 border border-coffee-clay/15 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-coffee-ochre" />
                  </div>
                  <div>
                    <h3 className="font-display text-xs font-bold uppercase tracking-widest text-[#F9F7F2] mb-1">
                      Operating Hours
                    </h3>
                    <p className="font-sans text-xs text-cream-warm/80 leading-relaxed font-mono">
                      Monday to Sunday: 8:00 AM - 10:00 PM
                    </p>
                    <span className="inline-block mt-2.5 text-[9px] font-mono uppercase tracking-[0.1em] text-[#A67C52] font-semibold">
                      Kitchen Closes at 9:30 PM
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-none bg-coffee-espresso/40 border border-coffee-clay/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-none bg-coffee-clay/10 border border-coffee-clay/15 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-coffee-ochre" />
                  </div>
                  <div>
                    <h3 className="font-display text-xs font-bold uppercase tracking-widest text-[#F9F7F2] mb-1">
                      Direct Messaging
                    </h3>
                    <p className="font-sans text-xs text-cream-warm/85 leading-relaxed">
                      Mobile: <strong className="text-[#F9F7F2] font-mono">+63 917 123 4567</strong><br />
                      Inquiries: <strong className="text-[#F9F7F2] font-serif italic text-coffee-ochre">hello@residentecafe.com</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Aesthetic Transit guide illustration */}
            <div className="hidden lg:block bg-coffee-espresso/20 p-5 rounded-none border border-coffee-clay/10 mt-8" id="transit-guide">
              <span className="font-mono text-[9px] text-[#A67C52] font-bold uppercase tracking-[0.2em] block mb-2">Transit Companion</span>
              <p className="font-sans text-[10px] text-cream-warm/75 leading-relaxed font-light">
                If riding a jeepney, take a <strong>21A, 21D, or 01K</strong> route and disembark near the boundary crossing. We are located exactly adjacent to the steel-cladded modern complex, featuring tall glass frames.
              </p>
            </div>
          </div>

          {/* Right Column: Immersive Star Guestbook and Feed */}
          <div className="lg:col-span-7" id="guestbook-pnl">
            
            {/* The Input Feedback Form Section */}
            <div className="bg-[#231815] p-6 sm:p-8 rounded-none border border-coffee-clay/15 shadow-sm mb-8" id="guestbook-form-card">
              <div className="flex items-center space-x-2.5 text-coffee-ochre mb-6">
                <MessageSquare className="w-5 h-5 text-coffee-ochre" />
                <span className="font-display text-sm font-bold uppercase tracking-widest text-cream-soft">
                  Residente Guestbook Guest Registry
                </span>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-[#1C201A] border border-green-500/15 text-green-200 p-6 rounded-none text-center space-y-2 animate-fade-in" id="feedback-success-msg">
                  <div className="w-10 h-10 rounded-none bg-[#1F2C1A] border border-green-500/20 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider">Registry Signed Successfully!</h4>
                  <p className="font-sans text-xs text-green-300">
                    Thank you for sharing your experience. We have appended your review to our digital feed instantly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4" id="review-submission-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[8px] font-mono tracking-widest uppercase text-cream-warm/50 mb-1.5 font-bold">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Keanu Lee"
                        className="w-full bg-coffee-dark text-cream-soft font-sans text-xs rounded-none px-3 py-2.5 border border-coffee-clay/10 focus:border-coffee-ochre/40 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-mono tracking-widest uppercase text-cream-warm/50 mb-1.5 font-bold">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="keanu@domain.com"
                        className="w-full bg-coffee-dark text-cream-soft font-sans text-xs rounded-none px-3 py-2.5 border border-coffee-clay/10 focus:border-coffee-ochre/40 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Star Rating selector */}
                  <div>
                    <label className="block text-[8px] font-mono tracking-widest uppercase text-cream-warm/50 mb-1.5 font-bold">
                      Your Savor &amp; Space Experience (Star Score)
                    </label>
                    <div className="flex space-x-1.5 bg-coffee-dark/40 py-2 px-3.5 rounded-none border border-coffee-clay/10 w-fit">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setFormRating(starVal)}
                          className="focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                        >
                          <Star 
                            className={`w-5 h-5 ${
                              starVal <= formRating 
                                ? 'text-coffee-ochre fill-coffee-ochre' 
                                : 'text-cream-warm/25'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review text */}
                  <div>
                    <label className="block text-[8px] font-mono tracking-widest uppercase text-[#A67C52] mb-1.5 font-bold">
                      Ambiance Review / Thoughts
                    </label>
                    <textarea
                      required
                      value={formComments}
                      onChange={(e) => setFormComments(e.target.value)}
                      placeholder="Tell us what you tried! Highlights about the coffee, space, or baristas..."
                      rows={3}
                      className="w-full bg-coffee-dark text-cream-soft font-sans text-xs rounded-none p-3 border border-coffee-clay/10 focus:border-coffee-ochre/40 focus:outline-none transition-colors resize-none placeholder:text-cream-warm/25"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2C1B18] hover:bg-coffee-clay text-cream-soft font-sans text-xs font-bold tracking-[0.2em] uppercase py-4 px-6 rounded-none transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2 border border-coffee-clay/20 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>REGISTER TESTIMONIAL</span>
                  </button>
                </form>
              )}
            </div>

            {/* Live Review Feed Wall */}
            <div className="space-y-3.5 max-h-[360px] overflow-y-auto pr-2" id="reviews-feed-wall">
              <span className="font-mono text-[9px] text-coffee-ochre uppercase tracking-[0.2em] block mb-1 font-bold">
                VERIFIED MENTIONS (OUR DIGITAL FOOTPRINT)
              </span>

              {reviews.map((rev, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-none bg-[#2C1B18]/30 border border-coffee-clay/10 hover:border-coffee-clay/25 transition-colors animate-fade-in"
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-display text-base font-medium text-cream-soft tracking-wide italic">{rev.name}</span>
                    <span className="font-mono text-[9px] text-[#A67C52] font-semibold">{rev.visitDate}</span>
                  </div>
                  
                  {/* Rating Stars render */}
                  <div className="flex space-x-0.5 mb-2.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < rev.rating ? 'text-coffee-ochre fill-coffee-ochre' : 'text-cream-warm/15'}`} 
                      />
                    ))}
                  </div>

                  <p className="font-serif text-xs text-cream-warm/85 italic leading-relaxed font-light">
                    "{rev.comments}"
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
