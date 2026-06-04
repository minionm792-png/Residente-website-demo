/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WorkspaceSpot } from '../types';
import { Wifi, VolumeX, Lightbulb, Zap, HelpCircle, Users, RefreshCw, Layers } from 'lucide-react';

const SPACE_SPOTS: WorkspaceSpot[] = [
  {
    id: 'study-nook',
    name: "The Sunlit Study Nook",
    description: "Nestled along our giant glass front windows, these individual wood desks get plenty of natural ambient lighting and plant views.",
    seatingRate: 65,
    plugOutlets: 'excellent',
    noiseLevel: 'conversational',
    idealFor: "Creative blogging, editing, and architectural sketching.",
    coordinates: { x: 20, y: 35 }
  },
  {
    id: 'focus-vault',
    name: "The Deep Focus Vault",
    description: "Our back acoustic section designed for absolute academic or corporate rigor. Low lighting, private tall partitions.",
    seatingRate: 90,
    plugOutlets: 'excellent',
    noiseLevel: 'quiet',
    idealFor: "Heavy code compiling, exam review, and serious focus.",
    coordinates: { x: 75, y: 25 }
  },
  {
    id: 'social-lounge',
    name: "The Roastery Social Lounge",
    description: "Centered wooden group tables and comfy plush mid-century sofas. Built for collaborative ideas and business meets.",
    seatingRate: 40,
    plugOutlets: 'moderate',
    noiseLevel: 'lively',
    idealFor: "Group brainstorms, design sharing, and casual catch-ups.",
    coordinates: { x: 50, y: 65 }
  },
  {
    id: 'espresso-bar',
    name: "The Espresso Brew Counter",
    description: "Stools directly facing our double-group espresso machine. Interact with the roasters and try fresh single-origin tester shots.",
    seatingRate: 15,
    plugOutlets: 'limited',
    noiseLevel: 'conversational',
    idealFor: "Quick 30-minute emails, reading a book, and sensory pairing.",
    coordinates: { x: 45, y: 20 }
  }
];

export default function AestheticSpace() {
  const [selectedSpot, setSelectedSpot] = useState<WorkspaceSpot>(SPACE_SPOTS[0]);
  const [wifiTesting, setWifiTesting] = useState(false);
  const [wifiSpeeds, setWifiSpeeds] = useState({ download: 245.8, upload: 182.1, ping: 4 });
  const [reservationQueue, setReservationQueue] = useState<Record<string, boolean>>({});

  // Simulate a Wi-Fi speed test
  const handleTestWifi = () => {
    setWifiTesting(true);
    setTimeout(() => {
      const ping = Math.floor(Math.random() * 5) + 2;
      const download = (Math.random() * 40 + 220).toFixed(1);
      const upload = (Math.random() * 30 + 170).toFixed(1);
      setWifiSpeeds({ download: parseFloat(download), upload: parseFloat(upload), ping });
      setWifiTesting(false);
    }, 1500);
  };

  const handleToggleHold = (spotId: string) => {
    setReservationQueue(prev => ({
      ...prev,
      [spotId]: !prev[spotId]
    }));
  };

  return (
    <section id="space" className="py-24 bg-coffee-espresso text-cream-soft relative border-b border-coffee-clay/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start" id="space-header-grid">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] tracking-[0.3em] text-coffee-ochre uppercase font-bold mb-3 block">
              NOMAD FRIENDLY SPACES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-normal text-cream-soft tracking-tight mb-4">
              Our Workspace <span className="italic font-light text-coffee-ochre">Architecture</span>
            </h2>
            <p className="font-sans text-cream-warm/80 font-light text-sm max-w-xl">
              We know what makes a workspace productive. Residente offers specialized zones matching your cognitive workflows, paired with Cebu's fastest fiber café network.
            </p>
          </div>

          {/* Wi-Fi Speedometer Box */}
          <div className="lg:col-span-5 bg-coffee-dark border border-coffee-clay/15 p-5 rounded-none flex flex-col justify-between" id="wifi-speed-box">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-coffee-ochre" />
                <span className="font-display text-xs font-bold uppercase tracking-widest text-[#2C1B18]/70">
                  FIBER LIVE PORTAL
                </span>
              </div>
              <button
                onClick={handleTestWifi}
                disabled={wifiTesting}
                className="text-coffee-ochre hover:text-coffee-clay font-mono text-[9px] uppercase tracking-widest border border-coffee-ochre/25 px-2.5 py-1 rounded-none bg-coffee-espresso transition-all flex items-center space-x-1 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3 h-3 ${wifiTesting ? 'animate-spin' : ''}`} />
                <span>{wifiTesting ? 'Testing...' : 'Test Speed'}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 bg-coffee-espresso/40 rounded-none border border-coffee-clay/10">
                <span className="block font-mono text-sm sm:text-lg font-extrabold text-cream-soft tracking-tight">
                  {wifiTesting ? '•••' : `${wifiSpeeds.download} Mb`}
                </span>
                <span className="block font-sans text-[8px] uppercase tracking-widest text-cream-warm/50 mt-1">
                  Download
                </span>
              </div>
              <div className="p-2.5 bg-coffee-espresso/40 rounded-none border border-coffee-clay/10">
                <span className="block font-mono text-sm sm:text-lg font-extrabold text-cream-soft tracking-tight">
                  {wifiTesting ? '•••' : `${wifiSpeeds.upload} Mb`}
                </span>
                <span className="block font-sans text-[8px] uppercase tracking-widest text-cream-warm/50 mt-1">
                  Upload
                </span>
              </div>
              <div className="p-2.5 bg-coffee-espresso/40 rounded-none border border-coffee-clay/10">
                <span className="block font-mono text-sm sm:text-lg font-extrabold text-[#A67C52] tracking-tight">
                  {wifiTesting ? '••' : `${wifiSpeeds.ping} ms`}
                </span>
                <span className="block font-sans text-[8px] uppercase tracking-widest text-cream-warm/50 mt-1">
                  Latency
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Floor Plan Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="interactive-space-plan">
          
          {/* Left Side: Aesthetic Interactive Map Widget */}
          <div className="lg:col-span-7 bg-coffee-dark border border-coffee-clay/15 p-6 rounded-none flex flex-col justify-between" id="space-map-card">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-cream-warm/40 block mb-4">
                Click a zone bubble below to inspect specs
              </span>

              {/* Map Canvas Visualizer */}
              <div className="relative aspect-[16/10] w-full rounded-none bg-coffee-espresso/50 border border-coffee-clay/10 overflow-hidden group">
                
                {/* Generated Background Workspace Image overlay */}
                <img
                  src="/src/assets/images/residente_workspace_1780551648899.png"
                  alt="Residente Coworking Plan"
                  className="w-full h-full object-cover opacity-15 filter grayscale contrast-125 saturate-50"
                  referrerPolicy="no-referrer"
                />

                {/* Map Grid Gridlines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-5">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-cream-warm/10" />
                  ))}
                </div>

                {/* Mapping Markers/Hotspots */}
                {SPACE_SPOTS.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedSpot(spot)}
                    style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center font-display text-xs font-bold tracking-tight shadow hover:scale-110 transition-all cursor-pointer ${
                      selectedSpot.id === spot.id
                        ? 'bg-[#2C1B18] border-coffee-ochre text-[#F9F7F2] scale-110'
                        : 'bg-coffee-dark border-coffee-clay/20 text-cream-soft hover:border-coffee-ochre'
                    }`}
                  >
                    {spot.id === 'study-nook' && 'N'}
                    {spot.id === 'focus-vault' && 'V'}
                    {spot.id === 'social-lounge' && 'S'}
                    {spot.id === 'espresso-bar' && 'B'}
                  </button>
                ))}

                {/* Legend overlay inside map */}
                <div className="absolute bottom-4 left-4 bg-coffee-dark border border-coffee-clay/15 px-3 py-2 rounded-none text-[9px] tracking-widest font-mono flex gap-4 text-cream-soft">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-coffee-clay animate-pulse" /> N - Study Nook
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-coffee-ochre" /> V - Vault
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-coffee-clay" /> S - Lounge
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 font-sans text-[10px] text-cream-warm/40 font-mono tracking-widest uppercase font-semibold">
              residente structural node: 120sqm climate-controlled silent air extraction.
            </div>

          </div>

          {/* Right Side: Detailed Spec Sheet and simulator */}
          <div className="lg:col-span-5 bg-coffee-dark border border-coffee-clay/15 p-6 sm:p-8 rounded-none flex flex-col justify-between" id="space-specification-pnl">
            <div>
              <div className="flex items-center space-x-2 text-coffee-ochre mb-3">
                <Layers className="w-4 h-4" />
                <span className="font-mono text-[9px] tracking-widest uppercase font-bold">
                  Space Specifications
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-cream-soft uppercase tracking-wide mb-3">
                {selectedSpot.name}
              </h3>
              
              <p className="font-sans text-xs text-cream-warm/80 leading-relaxed mb-6 font-light">
                {selectedSpot.description}
              </p>

              {/* Specifications checklist */}
              <div className="space-y-4 mb-8 bg-coffee-espresso/30 p-4 rounded-none border border-coffee-clay/10" id="spot-spec-checklist">
                
                <div className="flex justify-between items-center">
                  <span className="font-sans text-xs text-cream-warm/60 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-coffee-ochre" /> Power Outlets:
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-cream-soft font-bold">
                    {selectedSpot.plugOutlets === 'excellent' ? '⭐⭐⭐ Dedicated' : selectedSpot.plugOutlets === 'moderate' ? '⭐⭐ Shared' : '⭐ Limited'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-sans text-xs text-cream-warm/60 flex items-center gap-2">
                    <VolumeX className="w-4 h-4 text-coffee-clay" /> Quiet Level:
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-cream-soft font-bold">
                    {selectedSpot.noiseLevel}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-sans text-xs text-cream-warm/60 flex items-center gap-2">
                    <Users className="w-4 h-4 text-coffee-ochre" /> Seating Occupancy:
                  </span>
                  <span className={`font-mono text-xs font-bold uppercase ${selectedSpot.seatingRate > 80 ? 'text-orange-400' : 'text-[#A67C52]'}`}>
                    {selectedSpot.seatingRate}% Occupied
                  </span>
                </div>

                <div className="pt-3 border-t border-coffee-clay/10 flex flex-col gap-1 text-left">
                  <span className="font-sans text-[10px] uppercase text-cream-warm/40 tracking-wider font-mono">
                    Ideal Workflow:
                  </span>
                  <p className="font-serif text-xs text-[#2C1B18] font-medium leading-relaxed italic">
                    {selectedSpot.idealFor}
                  </p>
                </div>

              </div>
            </div>

            {/* Simulated Seating reservation queue trigger */}
            <div id="reservation-action-panel">
              <button
                onClick={() => handleToggleHold(selectedSpot.id)}
                className={`w-full font-sans text-xs font-bold tracking-widest uppercase py-4 px-6 rounded-none transition-all cursor-pointer uppercase ${
                  reservationQueue[selectedSpot.id]
                    ? 'bg-coffee-ochre text-[#F9F7F2] border border-coffee-ochre hover:bg-coffee-ochre/90 shadow'
                    : 'bg-[#2C1B18] text-[#F9F7F2] border border-[#2C1B18] hover:bg-coffee-clay'
                }`}
              >
                {reservationQueue[selectedSpot.id] ? '✓ Watching Occupancy Alerts' : 'Alert Me on Free Seats'}
              </button>
              
              {reservationQueue[selectedSpot.id] && (
                <p className="font-serif text-xs text-coffee-ochre text-center mt-2.5 leading-snug animate-fade-in block italic">
                  Alert Active. We will send a push notification when seat rate falls below 60%.
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
