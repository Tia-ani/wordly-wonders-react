
import React from 'react';
import { useTypingEffect } from '@/lib/animations';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  speed?: number;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  text, 
  className = "", 
  speed = 70 
}) => {
  const { displayText } = useTypingEffect(text, speed);

  return (
    <h1 className={`relative ${className}`}>
      <span className="opacity-0">{text}</span>
      <span className="absolute top-0 left-0">{displayText}</span>
    </h1>
  );
};
