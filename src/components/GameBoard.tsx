
import React from 'react';
import { WordRow } from './WordRow';

interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  evaluations: ('correct' | 'present' | 'absent')[][];
}

export const GameBoard: React.FC<GameBoardProps> = ({ guesses, currentGuess, evaluations }) => {
  // Create an array of 6 rows (the maximum number of guesses in Wordle)
  const allGuesses = [...guesses];
  
  // Add the current guess that hasn't been submitted yet
  if (allGuesses.length < 6) {
    allGuesses.push(currentGuess);
  }
  
  // Fill remaining rows with empty guesses
  while (allGuesses.length < 6) {
    allGuesses.push('');
  }

  return (
    <div className="flex flex-col items-center mb-6">
      {allGuesses.map((guess, index) => (
        <div 
          key={index} 
          className={`mb-2 ${index === guesses.length && currentGuess && guesses.length < 6 ? 'animate-bounce-once' : ''}`}
        >
          <WordRow 
            letters={guess.split('')}
            states={evaluations[index] || []}
          />
        </div>
      ))}
    </div>
  );
};
