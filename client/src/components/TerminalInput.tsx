import { forwardRef, KeyboardEvent } from 'react';

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onExecuteCommand: (command: string) => void;
  onNavigateHistory: (direction: 'up' | 'down') => void;
  onShowSuggestions: () => void;
  onHideSuggestions: () => void;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ 
    value, 
    onChange, 
    onExecuteCommand, 
    onNavigateHistory, 
    onShowSuggestions,
    onHideSuggestions 
  }, ref) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          if (value.trim()) {
            onExecuteCommand(value.trim());
          }
          onHideSuggestions();
          break;
          
        case 'ArrowUp':
          e.preventDefault();
          onNavigateHistory('up');
          break;
          
        case 'ArrowDown':
          e.preventDefault();
          onNavigateHistory('down');
          break;
          
        case 'Tab':
          e.preventDefault();
          onShowSuggestions();
          break;
          
        case 'Escape':
          onHideSuggestions();
          break;
      }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };
    
    return (
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-neon-green terminal-glow shrink-0">
          guest@aj-portfolio:~$
        </span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none flex-1 text-neon-cyan caret-neon-cyan"
          placeholder="Enter command..."
          autoComplete="off"
          spellCheck="false"
        />
        <span className="text-neon-cyan animate-cursor-blink">|</span>
      </div>
    );
  }
);

TerminalInput.displayName = 'TerminalInput';
