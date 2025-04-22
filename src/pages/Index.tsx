
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { WordRow } from '@/components/WordRow';
import { Footer } from '@/components/Footer';
import { AnimatedTitle } from '@/components/AnimatedTitle';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-md w-full text-center space-y-8 animate-fadeIn">
          <AnimatedTitle 
            text="WordlyWonders" 
            className="text-6xl font-bold tracking-tight mb-4"
            speed={100}
          />
          
          <p className="text-lg text-gray-600 mb-8">
            Guess the hidden 5-letter word in 6 tries. Each guess gives you color-coded clues.
          </p>
          
          <div className="flex justify-center mb-8 transform -rotate-3 hover:rotate-0 transition-all duration-300">
            <div className="space-y-1">
              <WordRow 
                letters={['W', 'O', 'R', 'D', 'S']} 
                states={['correct', 'present', 'absent', 'present', 'absent']}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="wordle" size="lg" className="text-xl py-6">
              <Link to="/game">Play Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xl py-6">
              <Link to="/instructions">How to Play</Link>
            </Button>
          </div>
          
          <div className="mt-10 text-sm text-gray-500">
            <p>Built with React & Tailwind CSS</p>
            <p>A modern take on the classic word game</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
