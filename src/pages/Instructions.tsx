
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Letter } from '@/components/Letter';
import { WordRow } from '@/components/WordRow';
import { Layout } from '@/components/Layout';
import { Footer } from '@/components/Footer';

export default function Instructions() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-4">How To Play</h1>
          <h2 className="text-2xl mb-8">Guess the Wordle in 6 tries.</h2>
          
          <ul className="space-y-8 mb-10">
            <li className="flex items-start">
              <span className="text-3xl mr-4">•</span>
              <span className="text-xl">Each guess must be a valid 5-letter word.</span>
            </li>
            <li className="flex items-start">
              <span className="text-3xl mr-4">•</span>
              <span className="text-xl">The color of the tiles will change to show how close your guess was to the word.</span>
            </li>
          </ul>
          
          <h2 className="text-3xl font-bold mb-6">Examples</h2>
          
          <div className="space-y-8">
            <div>
              <WordRow 
                letters={['W', 'O', 'R', 'D', 'Y']} 
                states={['correct', 'absent', 'absent', 'absent', 'absent']} 
              />
              <p className="text-xl mt-3">W is in the word and in the correct spot.</p>
            </div>
            
            <div>
              <WordRow 
                letters={['L', 'I', 'G', 'H', 'T']} 
                states={['absent', 'present', 'absent', 'absent', 'absent']} 
              />
              <p className="text-xl mt-3">I is in the word but in the wrong spot.</p>
            </div>
            
            <div>
              <WordRow 
                letters={['R', 'O', 'G', 'U', 'E']} 
                states={['absent', 'absent', 'absent', 'absent', 'absent']} 
              />
              <p className="text-xl mt-3">U is not in the word in any spot.</p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button asChild variant="wordle" size="lg" className="text-xl px-10">
              <Link to="/game">Play</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
