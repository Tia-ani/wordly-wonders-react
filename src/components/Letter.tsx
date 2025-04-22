
import { cn } from '@/lib/utils';
import React from 'react';

type LetterState = 'initial' | 'correct' | 'present' | 'absent';

interface LetterProps {
  value: string;
  state: LetterState;
}

export const Letter: React.FC<LetterProps> = ({ value, state }) => {
  return (
    <div 
      className={cn(
        'letter-tile', 
        {
          'letter-correct': state === 'correct',
          'letter-present': state === 'present',
          'letter-absent': state === 'absent',
        }
      )}
    >
      {value}
    </div>
  );
};
