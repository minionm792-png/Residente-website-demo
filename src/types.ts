/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in PHP PHP (₱)
  category: 'espresso' | 'signature' | 'non-coffee' | 'kitchen-food' | 'pastry';
  tags: string[];
  caffeineLevel: 'none' | 'low' | 'medium' | 'high';
  popular: boolean;
  pairingSuggestion?: string;
  isCold?: boolean;
  isHot?: boolean;
}

export interface MoodOption {
  text: string;
  tags: string[]; // matches against menuItem tags
}

export interface MoodQuestion {
  id: string;
  questionText: string;
  options: MoodOption[];
}

export interface WorkspaceSpot {
  id: string;
  name: string;
  description: string;
  seatingRate: number; // 0-100 indicating fullness
  plugOutlets: 'excellent' | 'moderate' | 'limited';
  noiseLevel: 'quiet' | 'conversational' | 'lively';
  idealFor: string;
  coordinates: { x: number; y: number }; // Percentage offset on our map
}

export interface UserFeedback {
  name: string;
  email: string;
  rating: number;
  comments: string;
  visitDate: string;
  status: 'pending' | 'submitted';
}
