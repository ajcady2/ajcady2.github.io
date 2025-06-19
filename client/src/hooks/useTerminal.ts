import { useState, useCallback, useRef, useEffect } from 'react';
import { TerminalState, CommandHistoryEntry } from '../types/terminal';
import { getCommand } from '../utils/commands';

export const useTerminal = () => {
  const [state, setState] = useState<TerminalState>({
    isBooting: true,
    commandHistory: [],
    currentInput: '',
    historyIndex: -1,
    showSuggestions: false,
    isTyping: false
  });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  
  // Boot sequence
  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setState(prev => ({ ...prev, isBooting: false }));
    }, 3000);
    
    return () => clearTimeout(bootTimer);
  }, []);
  
  // Auto-focus input
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    focusInput();
    document.addEventListener('click', focusInput);
    
    return () => document.removeEventListener('click', focusInput);
  }, []);
  
  // Scroll to bottom on new commands
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [state.commandHistory]);
  
  const executeCommand = useCallback((commandLine: string) => {
    const [cmdName, ...args] = commandLine.trim().split(' ');
    const command = getCommand(cmdName);
    
    let output: string;
    if (command) {
      output = command.execute(args);
      if (output === '__CLEAR__') {
        setState(prev => ({
          ...prev,
          commandHistory: [],
          currentInput: '',
          historyIndex: -1
        }));
        return;
      }
    } else {
      output = `<div class="text-red-400">Command not found: ${cmdName}. Type 'help' for available commands.</div>`;
    }
    
    const newEntry: CommandHistoryEntry = {
      id: Date.now().toString(),
      command: commandLine,
      output,
      timestamp: new Date()
    };
    
    setState(prev => ({
      ...prev,
      commandHistory: [...prev.commandHistory, newEntry],
      currentInput: '',
      historyIndex: prev.commandHistory.length + 1
    }));
  }, []);
  
  const navigateHistory = useCallback((direction: 'up' | 'down') => {
    setState(prev => {
      const newIndex = direction === 'up' 
        ? Math.max(0, prev.historyIndex - 1)
        : Math.min(prev.commandHistory.length, prev.historyIndex + 1);
      
      const newInput = newIndex < prev.commandHistory.length 
        ? prev.commandHistory[newIndex].command 
        : '';
      
      return {
        ...prev,
        historyIndex: newIndex,
        currentInput: newInput
      };
    });
  }, []);
  
  const updateInput = useCallback((value: string) => {
    setState(prev => ({
      ...prev,
      currentInput: value,
      showSuggestions: value.length > 0
    }));
  }, []);
  
  const hideSuggestions = useCallback(() => {
    setState(prev => ({ ...prev, showSuggestions: false }));
  }, []);
  
  const showSuggestions = useCallback(() => {
    setState(prev => ({ ...prev, showSuggestions: true }));
  }, []);
  
  return {
    state,
    inputRef,
    outputRef,
    executeCommand,
    navigateHistory,
    updateInput,
    hideSuggestions,
    showSuggestions
  };
};
