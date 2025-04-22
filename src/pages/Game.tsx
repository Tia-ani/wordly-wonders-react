
import React, { useState, useEffect, useCallback } from 'react';
import { GameBoard } from '@/components/GameBoard';
import { Keyboard } from '@/components/Keyboard';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Layout } from '@/components/Layout';
import { Footer } from '@/components/Footer';

// Import word list
import { getRandomWord, isValidWord } from '@/utils/wordList';

export default function Game() {
  const { toast } = useToast();
  const [secretWord, setSecretWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [evaluations, setEvaluations] = useState<Array<Array<'correct' | 'present' | 'absent'>>>([]);
  const [letterStates, setLetterStates] = useState<Record<string, 'correct' | 'present' | 'absent' | undefined>>({});

  // Initialize the game with a random word
  useEffect(() => {
    setSecretWord(getRandomWord());
  }, []);

  // Evaluate a guess and update letter states
  const evaluateGuess = useCallback((guess: string) => {
    if (!secretWord) return [];
    
    const evaluation: Array<'correct' | 'present' | 'absent'> = [];
    const secretLetters = secretWord.split('');
    const guessLetters = guess.split('');
    const newLetterStates = { ...letterStates };
    
    // First pass: Find correct letters
    guessLetters.forEach((letter, i) => {
      if (letter === secretLetters[i]) {
        evaluation[i] = 'correct';
        secretLetters[i] = '#'; // Mark as used
        newLetterStates[letter] = 'correct';
      }
    });
    
    // Second pass: Find present letters
    guessLetters.forEach((letter, i) => {
      if (evaluation[i]) return; // Skip already evaluated
      
      const secretIndex = secretLetters.indexOf(letter);
      if (secretIndex !== -1) {
        evaluation[i] = 'present';
        secretLetters[secretIndex] = '#'; // Mark as used
        if (newLetterStates[letter] !== 'correct') {
          newLetterStates[letter] = 'present';
        }
      } else {
        evaluation[i] = 'absent';
        if (!newLetterStates[letter]) {
          newLetterStates[letter] = 'absent';
        }
      }
    });
    
    setLetterStates(newLetterStates);
    return evaluation;
  }, [secretWord, letterStates]);

  // Handle key presses for the game
  const handleKeyPress = useCallback((key: string) => {
    if (gameStatus !== 'playing') return;
    
    if (key === 'ENTER') {
      // Submit guess
      if (currentGuess.length !== 5) {
        toast({
          title: "Not enough letters",
          description: "Word must be 5 letters",
          variant: "destructive",
        });
        return;
      }
      
      // Validate that the guess is a real word
      if (!isValidWord(currentGuess)) {
        toast({
          title: "Not in word list",
          description: "Please enter a valid word",
          variant: "destructive",
        });
        return;
      }
      
      const evaluation = evaluateGuess(currentGuess);
      const newGuesses = [...guesses, currentGuess];
      const newEvaluations = [...evaluations, evaluation];
      
      setGuesses(newGuesses);
      setEvaluations(newEvaluations);
      setCurrentGuess('');
      
      // Check for win/loss
      if (currentGuess === secretWord) {
        setGameStatus('won');
        toast({
          title: "Congratulations!",
          description: `You guessed the word: ${secretWord}`,
        });
      } else if (newGuesses.length >= 6) {
        setGameStatus('lost');
        toast({
          title: "Game Over",
          description: `The word was: ${secretWord}`,
          variant: "destructive",
        });
      }
    } else if (key === '⌫') {
      // Delete letter
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      // Add letter
      setCurrentGuess(prev => prev + key);
    }
  }, [currentGuess, evaluateGuess, gameStatus, guesses, evaluations, secretWord, toast]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleKeyPress('ENTER');
      } else if (e.key === 'Backspace') {
        handleKeyPress('⌫');
      } else {
        const key = e.key.toUpperCase();
        if (/^[A-Z]$/.test(key)) {
          handleKeyPress(key);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);

  // Reset the game
  const resetGame = () => {
    setSecretWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setEvaluations([]);
    setLetterStates({});
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <main className="game-container">
          <GameBoard 
            guesses={guesses} 
            currentGuess={currentGuess}
            evaluations={evaluations}
          />
          
          <Keyboard
            onKeyPress={handleKeyPress}
            letterStates={letterStates}
          />
          
          {gameStatus !== 'playing' && (
            <div className="mt-8 text-center">
              <p className="text-xl mb-4">
                {gameStatus === 'won' ? 'You won!' : 'Better luck next time!'}
              </p>
              <Button onClick={resetGame} variant="wordle">
                Play Again
              </Button>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
