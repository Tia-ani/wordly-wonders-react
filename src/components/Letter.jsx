
import React from 'react';
import { cn } from '@/lib/utils';

export const Letter = ({ value, state }) => {
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
