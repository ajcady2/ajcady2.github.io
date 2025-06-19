import { forwardRef } from 'react';
import { CommandHistoryEntry } from '../types/terminal';

interface TerminalOutputProps {
  commandHistory: CommandHistoryEntry[];
}

export const TerminalOutput = forwardRef<HTMLDivElement, TerminalOutputProps>(
  ({ commandHistory }, ref) => {
    return (
      <div ref={ref} className="terminal-output flex-1 space-y-2 text-sm">
        {/* Welcome Message */}
        <div className="mb-4">
          <div className="text-neon-magenta terminal-glow">
            ╔══════════════════════════════════════════════════════════════╗
          </div>
          <div className="text-neon-magenta terminal-glow">
            ║  CYBERNETIC PORTFOLIO SYSTEM - READY FOR INPUT              ║
          </div>
          <div className="text-neon-magenta terminal-glow">
            ║  Type 'help' to view available commands                     ║
          </div>
          <div className="text-neon-magenta terminal-glow">
            ╚══════════════════════════════════════════════════════════════╝
          </div>
        </div>
        
        {/* Command History */}
        <div className="space-y-1">
          {commandHistory.map((entry) => (
            <div key={entry.id} className="space-y-2">
              {/* Command Input Display */}
              <div className="flex text-sm">
                <span className="text-neon-green terminal-glow shrink-0">
                  guest@aj-portfolio:~$
                </span>
                <span className="text-white ml-2">{entry.command}</span>
              </div>
              
              {/* Command Output */}
              {entry.output && (
                <div 
                  className="ml-4 mb-4"
                  dangerouslySetInnerHTML={{ __html: entry.output }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

TerminalOutput.displayName = 'TerminalOutput';
