
import React from 'react';
import { Letter } from './Letter';

export const WordRow = ({ letters, states = [] }) => {
  // Fill up to 5 letters, with empty strings for missing letters
  const filledLetters = [...letters, ...Array(5 - letters.length).fill('')];
  // Default states to 'initial'
  const letterStates = states.length > 0 
    ? [...states, ...Array(5 - states.length).fill('initial')] 
    : Array(5).fill('initial');
  
  return (
    <div className="flex gap-1 mb-2">
      {filledLetters.map((letter, index) => (
        <Letter key={index} value={letter} state={letterStates[index]} />
      ))}
    </div>
  );
};
