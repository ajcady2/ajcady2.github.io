import { getCommandSuggestions } from '../utils/commands';

interface CommandSuggestionsProps {
  input: string;
  isVisible: boolean;
  onSelectCommand: (command: string) => void;
}

export const CommandSuggestions = ({ 
  input, 
  isVisible, 
  onSelectCommand 
}: CommandSuggestionsProps) => {
  if (!isVisible) return null;
  
  const suggestions = getCommandSuggestions(input);
  
  if (suggestions.length === 0) return null;
  
  return (
    <div className="mt-2">
      <div className="flex flex-wrap gap-2 text-xs">
        {suggestions.map((cmd) => (
          <button
            key={cmd.name}
            onClick={() => onSelectCommand(cmd.name)}
            className={`command-suggestion bg-${cmd.color || 'neon-cyan'}/10 px-2 py-1 rounded border border-${cmd.color || 'neon-cyan'}/30 cursor-pointer hover:bg-${cmd.color || 'neon-cyan'}/20 transition-all duration-200`}
          >
            {cmd.name}
          </button>
        ))}
      </div>
    </div>
  );
};
