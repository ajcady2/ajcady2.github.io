import { useState, useEffect } from 'react';

const bootMessages = [
  'PORTFOLIO OS v2.4.1 BOOTING...',
  'Loading neural networks... [OK]',
  'Initializing holographic interface... [OK]',
  'Connecting to the matrix... [OK]',
  'Welcome to AJ\'s Digital Realm!'
];

export const BootSequence = ({ isVisible }: { isVisible: boolean }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(() => {
      setShowMessage(true);
      
      const messageTimer = setInterval(() => {
        setCurrentMessage(prev => {
          if (prev < bootMessages.length - 1) {
            return prev + 1;
          } else {
            clearInterval(messageTimer);
            return prev;
          }
        });
      }, 500);
      
      return () => clearInterval(messageTimer);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isVisible]);
  
  if (!isVisible || !showMessage) return null;
  
  return (
    <div className="space-y-2 text-sm mb-6">
      {bootMessages.slice(0, currentMessage + 1).map((message, index) => (
        <div
          key={index}
          className={`${
            index === 0 
              ? 'typing-effect text-neon-green' 
              : index === bootMessages.length - 1 
                ? 'text-neon-cyan terminal-glow'
                : 'text-gray-400 opacity-80'
          } ${index === currentMessage ? 'animate-pulse' : ''}`}
        >
          {message}
        </div>
      ))}
    </div>
  );
};
