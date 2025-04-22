
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pb-8 text-center text-gray-500 text-sm">
      <div className="flex justify-center space-x-4 mb-4">
        <Link to="/" className="hover:text-gray-800 transition-colors">Home</Link>
        <Link to="/game" className="hover:text-gray-800 transition-colors">Play</Link>
        <Link to="/instructions" className="hover:text-gray-800 transition-colors">How to Play</Link>
      </div>
      <p>© {new Date().getFullYear()} WordlyWonders - A Wordle Clone</p>
      <p className="mt-2">Built with React, TypeScript and TailwindCSS</p>
    </footer>
  );
};
