/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, MoodQuestion } from '../types';
import { Search, Sparkles, Flame, Snowflake, Heart, CheckCircle2, ChevronRight, CornerDownRight } from 'lucide-react';

const CRAFT_MENU: MenuItem[] = [
  // Classis Espresso
  {
    id: 'latte',
    name: "Classic Latte",
    description: "Rich double-shot espresso topped with premium silky textured steamed milk.",
    price: 145,
    category: 'espresso',
    tags: ['creamy', 'low-sweet', 'comfort', 'hot', 'cold'],
    caffeineLevel: 'medium',
    popular: false,
    pairingSuggestion: "Warm Butter Croissant",
    isHot: true,
    isCold: true,
  },
  {
    id: 'spanish-latte',
    name: "Spanish Latte",
    description: "A crowd favorite in Cebu. Blend of organic condensed milk, full cream dairy, and double espresso.",
    price: 155,
    category: 'espresso',
    tags: ['sweet', 'creamy', 'signature', 'cold', 'hot'],
    caffeineLevel: 'high',
    popular: true,
    pairingSuggestion: "Espresso Cinnamon Roll",
    isHot: true,
    isCold: true,
  },
  {
    id: 'americano',
    name: "Americano",
    description: "Double espresso pulled over hot filtered water. Pure and robust.",
    price: 120,
    category: 'espresso',
    tags: ['strong', 'no-sweet', 'pure', 'cold', 'hot'],
    caffeineLevel: 'high',
    popular: false,
    pairingSuggestion: "Almond Croissant",
    isHot: true,
    isCold: true,
  },
  {
    id: 'cappuccino',
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and heavy dry foam, dusted with cacao powder.",
    price: 145,
    category: 'espresso',
    tags: ['milky', 'foam', 'no-sweet', 'hot'],
    caffeineLevel: 'medium',
    popular: false,
    pairingSuggestion: "Butter Croissant",
    isHot: true,
    isCold: false,
  },

  // Residente Signatures
  {
    id: 'cold-foam',
    name: "Residente Vanilla Cold Foam",
    description: "16-hour steeped cold brew coffee poured over ice, crowned with a thick layer of vanilla sea salt cold foam.",
    price: 175,
    category: 'signature',
    tags: ['sweet', 'creamy', 'strong', 'cold'],
    caffeineLevel: 'high',
    popular: true,
    pairingSuggestion: "Grilled Cheese with Tablea Honey",
    isHot: false,
    isCold: true,
  },
  {
    id: 'coconut-latte',
    name: "Cebuano Coconut Latte",
    description: "Espresso mixed with premium locally sourced coconut cream, light condensed sweetener, and organic milk. Nutty and clean.",
    price: 180,
    category: 'signature',
    tags: ['creamy', 'sweet', 'nontraditional', 'cold'],
    caffeineLevel: 'medium',
    popular: true,
    pairingSuggestion: "Cebuano Adobo Benedict",
    isHot: false,
    isCold: true,
  },
  {
    id: 'sea-salt-caramel',
    name: "Sea Salt Caramel Macchiato",
    description: "Espresso, steamed milk, house-cooked caramel glaze, enhanced with hand-harvested organic French sea salt.",
    price: 170,
    category: 'signature',
    tags: ['sweet', 'creamy', 'salty', 'hot', 'cold'],
    caffeineLevel: 'medium',
    popular: false,
    pairingSuggestion: "Butter Croissant",
    isHot: true,
    isCold: true,
  },

  // Craft Non-Coffee
  {
    id: 'cebu-tablea',
    name: "Cebu Tablea Chocolate",
    description: "Native pure cacao tablea harvested in Argao, Cebu, whisked with dark sugar and velvety steamed milk. Incredibly rich.",
    price: 150,
    category: 'non-coffee',
    tags: ['sweet', 'thick', 'chocolate', 'no-caffeine', 'hot', 'cold'],
    caffeineLevel: 'none',
    popular: true,
    pairingSuggestion: "Grilled Cheese with Tablea Honey",
    isHot: true,
    isCold: true,
  },
  {
    id: 'matcha',
    name: "Ceremonial Uji Matcha Latte",
    description: "Direct-import Kyoto ceremonial matcha hand-whisked and balanced with organic milk and a splash of wild orange honey.",
    price: 165,
    category: 'non-coffee',
    tags: ['earthy', 'creamy', 'low-sweet', 'hot', 'cold'],
    caffeineLevel: 'medium',
    popular: false,
    pairingSuggestion: "Almond Croissant",
    isHot: true,
    isCold: true,
  },
  {
    id: 'hibiscus-rose',
    name: "Hibiscus Rose Petal Iced-Tea",
    description: "A steep of local dried hibiscus flowers, red rose petals, and a dash of sweet lime juice. Tall, refreshing, and clean.",
    price: 155,
    category: 'non-coffee',
    tags: ['floral', 'refreshing', 'cold', 'no-caffeine'],
    caffeineLevel: 'none',
    popular: false,
    pairingSuggestion: "Cebuano Adobo Benedict",
    isHot: false,
    isCold: true,
  },

  // Kitchen Food
  {
    id: 'truffle-pasta',
    name: "Truffle Mushroom Pasta",
    description: "Capellini tossed in a rich, velvety forest mushroom white sauce, spiked with Italian white truffle extract.",
    price: 260,
    category: 'kitchen-food',
    tags: ['savory', 'hearty', 'pasta'],
    caffeineLevel: 'none',
    popular: true,
    isHot: true,
  },
  {
    id: 'adobo-benedict',
    name: "Cebuano Pork Benedict",
    description: "Slow-rendered sweet pork humba adobo nested on country rye, topped with an organic poached egg and garlic-hollandaise.",
    price: 245,
    category: 'kitchen-food',
    tags: ['savory', 'rich', 'breakfast'],
    caffeineLevel: 'none',
    popular: false,
    isHot: true,
  },
  {
    id: 'grilled-cheese',
    name: "Grilled Cheese & Tablea Honey",
    description: "A toasted sourdough sandwich loaded with mature English Cheddar & Mozzarella, served with raw Cebuano floral tablea dipping honey.",
    price: 210,
    category: 'kitchen-food',
    tags: ['savory', 'sweet', 'comfort-food'],
    caffeineLevel: 'none',
    popular: true,
    isHot: true,
  },

  // Pastries
  {
    id: 'butter-croissant',
    name: "Fine Butter Croissant",
    description: "French style leavened croissant, prepared with high-grade European butter. Warmed and incredibly flaky.",
    price: 95,
    category: 'pastry',
    tags: ['flaky', 'pastry', 'warm'],
    caffeineLevel: 'none',
    popular: false,
    isHot: true,
  },
  {
    id: 'almond-croissant',
    name: "Glazed Almond Croissant",
    description: "Twice-baked butter croissant loaded with almond frangipane cream and topped with crispy sliced almonds.",
    price: 130,
    category: 'pastry',
    tags: ['sweet', 'nutty', 'pastry'],
    caffeineLevel: 'none',
    popular: true,
    isHot: true,
  },
  {
    id: 'espresso-cinnamon',
    name: "Espresso Cinnamon Bun",
    description: "Soft swirled cinnamon bun coated with a rich, velvety glaze spiked with our signature Residente espresso roast.",
    price: 115,
    category: 'pastry',
    tags: ['sweet', 'spiced', 'pastry'],
    caffeineLevel: 'low',
    popular: false,
    isHot: true,
  }
];

// Coffee mood questions
const MOOD_QUESTIONS: MoodQuestion[] = [
  {
    id: 'energy',
    questionText: "What is your energy goal for today?",
    options: [
      { text: "I need massive studying/work fuel!", tags: ['strong', 'espresso', 'high'] },
      { text: "A moderate chill focus is perfect.", tags: ['creamy', 'medium', 'earthy'] },
      { text: "No caffeine please, keeping it serene.", tags: ['no-caffeine', 'none'] }
    ]
  },
  {
    id: 'sweetness',
    questionText: "How do you prefer your sweetness profile?",
    options: [
      { text: "Rich, luscious, and beautifully sweet.", tags: ['sweet', 'thick', 'creamy'] },
      { text: "Balanced, milky, and slightly subtle.", tags: ['creamy', 'low-sweet', 'milky'] },
      { text: "Strong, pure, unadulterated strength.", tags: ['no-sweet', 'pure', 'strong'] }
    ]
  },
  {
    id: 'temp',
    questionText: "What is your temperature vibe?",
    options: [
      { text: "Iced! It is tropical Cebu after all.", tags: ['cold'] },
      { text: "A hot, comforting, slow-sip mug.", tags: ['hot'] }
    ]
  }
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'all' | 'espresso' | 'signature' | 'non-coffee' | 'kitchen-food' | 'pastry'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mood finder states
  const [moodStep, setMoodStep] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [recommendedRecommendation, setRecommendedRecommendation] = useState<MenuItem | null>(null);

  // Categories translation
  const categories = [
    { id: 'all', label: 'View All' },
    { id: 'espresso', label: 'Classic Espresso' },
    { id: 'signature', label: 'Signatures' },
    { id: 'non-coffee', label: 'Non-Coffee Specialties' },
    { id: 'kitchen-food', label: 'Coffee Kitchen Food' },
    { id: 'pastry', label: 'Warmed Bakery' }
  ];

  const handleMoodAnswer = (tags: string[]) => {
    const nextTags = [...selectedTags, ...tags];
    setSelectedTags(nextTags);
    
    if (moodStep < MOOD_QUESTIONS.length - 1) {
      setMoodStep(moodStep + 1);
    } else {
      // Analyze and compute score for each MenuItem
      let bestItem = CRAFT_MENU[0];
      let maxScore = -1;

      CRAFT_MENU.forEach(item => {
        let score = 0;
        
        // Match tag elements
        nextTags.forEach(selectedTag => {
          if (item.tags.includes(selectedTag)) {
            score += 2;
          }
        });

        // Match caffeineLevel explicitly
        if (nextTags.includes('high') && item.caffeineLevel === 'high') score += 3;
        if (nextTags.includes('medium') && item.caffeineLevel === 'medium') score += 3;
        if (nextTags.includes('none') && item.caffeineLevel === 'none') score += 3;

        // Match temperature
        if (nextTags.includes('cold') && item.isCold) score += 2;
        if (nextTags.includes('hot') && item.isHot) score += 2;

        if (score > maxScore) {
          maxScore = score;
          bestItem = item;
        }
      });

      setRecommendedRecommendation(bestItem);
      setMoodStep(moodStep + 1);
    }
  };

  const resetMoodFinder = () => {
    setMoodStep(0);
    setSelectedTags([]);
    setRecommendedRecommendation(null);
  };

  // Filtered menu
  const filteredMenu = CRAFT_MENU.filter(item => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-coffee-dark text-cream-soft relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#2c1b18_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="menu-heading-wrapper">
          <span className="font-mono text-[10px] tracking-[0.3em] text-coffee-ochre uppercase font-bold mb-3 block">
            BEVERAGE KITCHEN
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-normal text-cream-soft tracking-tight mb-4">
            Curated Local &amp; <span className="italic font-light text-coffee-ochre">International Crafts</span>
          </h2>
          <p className="font-serif text-cream-warm/95 font-light text-sm italic">
            Each coffee bean is roasted in medium small-batches and extracted at high precision. Explore our local Cebuano-infused signatures and wholesome workspace bites.
          </p>
        </div>

        {/* INTERACTIVE COMPONENT 1: The Interactive "Coffee Mood Finder" Wizard */}
        <div 
          className="max-w-3xl mx-auto mb-20 bg-coffee-espresso p-6 sm:p-10 rounded-none border border-coffee-clay/15 relative overflow-hidden"
          id="coffee-mood-wizard"
        >
          {/* Subtle Sparkly decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Sparkles className="w-16 h-16 text-coffee-ochre" />
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-none bg-coffee-dark border border-coffee-clay/10">
              <Sparkles className="w-5 h-5 text-coffee-ochre" />
            </div>
            <div>
              <span className="font-display text-base font-bold uppercase tracking-wider block text-cream-soft">
                Residente Blend Assistant
              </span>
              <span className="font-mono text-[9px] text-[#2C1B18]/60 uppercase tracking-widest block font-medium">
                Let your current mood match the craft menu
              </span>
            </div>
          </div>

          {moodStep < MOOD_QUESTIONS.length ? (
            <div id="mood-question-box" className="animate-fade-in">
              {/* Step indicator bubbles */}
              <div className="flex space-x-2 mb-6">
                {MOOD_QUESTIONS.map((_, i) => (
                  <span 
                    key={i} 
                    className={`h-[3px] transition-all duration-300 rounded-none ${i === moodStep ? 'w-10 bg-coffee-ochre' : 'w-4 bg-coffee-dark/40'}`}
                  />
                ))}
              </div>

              {/* Question Text */}
              <h3 className="font-display text-xl sm:text-2xl font-normal text-cream-soft mb-6 leading-snug italic">
                "{MOOD_QUESTIONS[moodStep].questionText}"
              </h3>

              {/* Options list */}
              <div className="space-y-3.5" id="mood-options-list">
                {MOOD_QUESTIONS[moodStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleMoodAnswer(option.tags)}
                    className="w-full text-left p-4 rounded-none bg-coffee-dark border border-coffee-clay/10 hover:border-coffee-ochre/50 hover:bg-coffee-dark/60 font-sans text-xs sm:text-sm text-cream-warm/95 hover:text-coffee-ochre transition-all cursor-pointer flex justify-between items-center group active:scale-[0.99]"
                  >
                    <span className="font-sans font-medium tracking-wide">{option.text}</span>
                    <ChevronRight className="w-4 h-4 text-coffee-ochre group-hover:translate-x-1.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div id="mood-recommendation-box" className="animate-fade-in text-center p-2">
              <div className="mx-auto w-12 h-12 rounded-full bg-coffee-dark border border-coffee-ochre/25 flex items-center justify-center mb-4 text-coffee-ochre">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#2C1B18]/60 font-bold block mb-1">
                Your Custom Brew Match:
              </span>
              
              {recommendedRecommendation && (
                <div id="result-drink-card" className="max-w-md mx-auto bg-coffee-dark p-6 rounded-none border border-coffee-ochre/20 mb-6 text-left">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="font-display text-lg font-bold text-cream-soft uppercase tracking-wide">
                      {recommendedRecommendation.name}
                    </h4>
                    <span className="font-mono text-xs text-coffee-ochre font-extrabold flex-shrink-0">
                      ₱{recommendedRecommendation.price}.00
                    </span>
                  </div>
                  <p className="font-sans text-xs text-cream-warm/85 leading-relaxed mb-4">
                    {recommendedRecommendation.description}
                  </p>
                  
                  {recommendedRecommendation.pairingSuggestion && (
                    <div className="flex items-center space-x-2 pt-3 border-t border-coffee-clay/10 text-left">
                      <CornerDownRight className="w-3.5 h-3.5 text-coffee-ochre flex-shrink-0" />
                      <span className="font-sans text-[10px] text-cream-warm/75 tracking-wide">
                        Perfect Workspace Pairing: <strong className="text-coffee-ochre font-semibold">{recommendedRecommendation.pairingSuggestion}</strong>
                      </span>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={resetMoodFinder}
                className="bg-coffee-clay hover:bg-coffee-ochre text-cream-soft text-xs font-sans font-bold uppercase tracking-widest py-3 px-6 rounded-none transition-all cursor-pointer"
              >
                Find Another beverage
              </button>
            </div>
          )}
        </div>

        {/* INTERACTIVE COMPONENT 2: Main Menu with Category Tabs & Search */}
        <div className="space-y-8" id="main-menu-container">
          
          {/* Tabs Filter & Fast Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-b border-coffee-clay/10 pb-6" id="menu-filters-wrapper">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start" id="menu-category-tabs">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 border font-sans text-[10px] tracking-widest uppercase font-bold transition-all cursor-pointer rounded-none hover:border-coffee-ochre ${
                    activeTab === tab.id
                      ? 'bg-coffee-clay text-cream-soft border-coffee-clay shadow-none'
                      : 'bg-transparent text-cream-warm border-coffee-clay/15 hover:bg-coffee-espresso/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Live Search bar */}
            <div className="relative w-full max-w-xs" id="menu-search-bar">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2C1B18]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee or baked items..."
                className="w-full bg-transparent text-cream-soft font-sans text-xs rounded-none pl-10 pr-4 py-3 border border-coffee-clay/15 focus:border-coffee-clay focus:outline-none transition-all placeholder:text-[#2C1B18]/45"
              />
            </div>
          </div>

          {/* Staggered Grid of filtered items */}
          {filteredMenu.length > 0 ? (
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              id="menu-grid-display"
            >
              {filteredMenu.map((item) => (
                <div
                  key={item.id}
                  className="bg-coffee-espresso/30 hover:bg-coffee-espresso/50 p-6 rounded-none border border-coffee-clay/10 hover:border-coffee-ochre/30 transition-all duration-300 flex flex-col justify-between relative group shadow-sm"
                >
                  {/* Popularity Badge */}
                  {item.popular && (
                    <span className="absolute -top-2.5 right-4 bg-coffee-ochre text-cream-soft font-mono text-[8.5px] uppercase tracking-widest py-0.5 px-2">
                      Highly Popular
                    </span>
                  )}

                  <div>
                    {/* Header: Name and Price */}
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display text-base font-bold uppercase tracking-wide text-cream-soft group-hover:text-coffee-ochre transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-xs text-coffee-ochre font-extrabold flex-shrink-0">
                        ₱{item.price}.00
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-serif text-xs text-cream-warm/90 leading-relaxed font-light mb-4 italic">
                      {item.description}
                    </p>
                  </div>

                  {/* Foot Metadata */}
                  <div className="flex justify-between items-center pt-3 border-t border-coffee-clay/10">
                    <div className="flex items-center space-x-2">
                      {item.isHot && <Flame className="w-3.5 h-3.5 text-orange-500" title="Available Hot" />}
                      {item.isCold && <Snowflake className="w-3.5 h-3.5 text-blue-500" title="Available Iced" />}
                      <span className="font-mono text-[9px] text-[#2C1B18]/45 uppercase tracking-widest ml-1 font-semibold">
                        {item.caffeineLevel} caffeine
                      </span>
                    </div>
                    {item.pairingSuggestion && (
                      <span className="font-sans text-[9px] text-coffee-ochre uppercase tracking-wider font-semibold">
                        Pairs with: {item.pairingSuggestion.split(' ')[0]}
                      </span>
                    )}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-coffee-espresso/10 border border-dashed border-coffee-clay/20" id="empty-menu-state">
              <p className="font-sans text-sm text-[#2C1B18]/50 font-light">
                No coffee or dining masterpieces found for "{searchQuery}".
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }} 
                className="mt-4 font-mono text-xs text-coffee-clay underline uppercase tracking-wider hover:text-coffee-ochre"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
