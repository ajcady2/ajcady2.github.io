import { useState, useEffect } from 'react';

export const TerminalHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="bg-terminal-dark border-b border-neon-cyan/30 p-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500 terminal-glow"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 terminal-glow"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 terminal-glow"></div>
      </div>
      <div className="text-neon-cyan text-sm terminal-glow">AJ@portfolio:~</div>
      <div className="flex items-center space-x-2 text-xs text-gray-400">
        <span>{currentTime}</span>
      </div>
    </div>
  );
};
