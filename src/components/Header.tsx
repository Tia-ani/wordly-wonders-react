
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { BookOpen, Menu } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-200 mb-8">
      <Link to="/" className="text-4xl font-bold tracking-tight">Wordle</Link>
      
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <Link to="/instructions">
            <BookOpen size={20} />
            <span className="sr-only">Instructions</span>
          </Link>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu size={20} />
              <span className="sr-only">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to="/">Play</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/instructions">How to Play</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
