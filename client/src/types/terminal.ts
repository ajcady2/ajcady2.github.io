export interface CommandHistoryEntry {
  id: string;
  command: string;
  output: string;
  timestamp: Date;
}

export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => string;
  color?: string;
}

export interface TerminalState {
  isBooting: boolean;
  commandHistory: CommandHistoryEntry[];
  currentInput: string;
  historyIndex: number;
  showSuggestions: boolean;
  isTyping: boolean;
}
