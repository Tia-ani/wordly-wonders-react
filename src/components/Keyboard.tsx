
import React from 'react';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  letterStates: Record<string, 'correct' | 'present' | 'absent' | undefined>;
}

export const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, letterStates }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  ];

  const getKeyClass = (key: string) => {
    const state = letterStates[key];
    
    if (state === 'correct') return 'letter-correct';
    if (state === 'present') return 'letter-present';
    if (state === 'absent') return 'letter-absent';
    
    return '';
  };

  return (
    <div className="keyboard mt-8">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 mb-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`keyboard-key ${key.length > 1 ? 'wide' : 'standard'} ${getKeyClass(key)}`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
