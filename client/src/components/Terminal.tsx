import { TerminalHeader } from './TerminalHeader';
import { ASCIIArt } from './ASCIIArt';
import { BootSequence } from './BootSequence';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { CommandSuggestions } from './CommandSuggestions';
import { useTerminal } from '../hooks/useTerminal';

export const Terminal = () => {
  const {
    state,
    inputRef,
    outputRef,
    executeCommand,
    navigateHistory,
    updateInput,
    hideSuggestions,
    showSuggestions
  } = useTerminal();
  
  const handleSelectCommand = (command: string) => {
    updateInput(command);
    hideSuggestions();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className="min-h-screen relative scanlines">
      <TerminalHeader />
      
      <div className="h-screen flex flex-col p-4 space-y-4">
        <ASCIIArt />
        
        <BootSequence isVisible={state.isBooting} />
        
        <TerminalOutput 
          ref={outputRef}
          commandHistory={state.commandHistory}
        />
        
        <div className="space-y-2">
          <TerminalInput
            ref={inputRef}
            value={state.currentInput}
            onChange={updateInput}
            onExecuteCommand={executeCommand}
            onNavigateHistory={navigateHistory}
            onShowSuggestions={showSuggestions}
            onHideSuggestions={hideSuggestions}
          />
          
          <CommandSuggestions
            input={state.currentInput}
            isVisible={state.showSuggestions}
            onSelectCommand={handleSelectCommand}
          />
        </div>
      </div>
      
      {/* Mobile Helper */}
      <div className="md:hidden fixed bottom-4 right-4">
        <button
          onClick={() => inputRef.current?.focus()}
          className="bg-neon-cyan/20 border border-neon-cyan/50 p-3 rounded-lg terminal-glow text-neon-cyan"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M8 12h.01M16 12h.01"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
