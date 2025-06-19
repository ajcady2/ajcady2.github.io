import { useState, useEffect, useRef } from 'react';

const asciiArt = `
          _    _         
         / \\  | | ___    
        / _ \\ | |/ _ \\   
       / ___ \\| | (_) |  
      /_/   \\_\\_|\\___/   
`;

const commands: { [key: string]: (args: string[]) => string | void } = {
  help: () => `
Available commands:
- help: Shows this help message.
- about: Shows information about me.
- skills: Lists my skills.
- projects: Lists my projects.
- experience: Lists my work experience.
- contact: Shows contact information.
- repo: Opens the GitHub repository.
- date: Shows the current date and time.
- clear: Clears the terminal.
  `,
  about: () => "I am a passionate developer from Earth, currently exploring the vast universe of web development.",
  skills: () => `My skills include:
- HTML, CSS, JavaScript, TypeScript
- React, Next.js, Tailwind CSS
- Node.js, Express
- Python, SQL, MongoDB`,
  projects: () => `Here are some of my projects:
- Project 1: A cool project. <a href="#" class="neon-magenta terminal-glow">Link</a>
- Project 2: Another cool project. <a href="#" class="neon-magenta terminal-glow">Link</a>
- Project 3: Yet another cool project. <a href="#" class="neon-magenta terminal-glow">Link</a>`,
  experience: () => `My work experience:
- Company 1 (2022-Present): Software Engineer
- Company 2 (2020-2022): Junior Developer`,
  contact: () => `You can reach me via email at: <a href="mailto:example@example.com" class="neon-magenta terminal-glow">example@example.com</a>`,
  repo: () => {
    window.open('https://github.com/jeetsb', '_blank');
    return 'Opening GitHub repository...';
  },
  date: () => new Date().toString(),
  clear: () => { /* This will be handled in the App component */ },
};

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{ command?: string; response: string; }[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = `
<pre class="neon-cyan terminal-glow">${asciiArt}</pre>
<p>Welcome to AJ's interactive terminal.</p>
<p>Type <span class="neon-magenta">'help'</span> for a list of available commands.</p>
  `;

  useEffect(() => {
    setOutput([{ response: welcomeMessage }]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        let response = '';
        if (command === 'clear') {
          setOutput([{ response: welcomeMessage }]);
        } else {
          const [cmd, ...args] = command.split(' ');
          if (commands[cmd]) {
            const result = commands[cmd](args);
            if (result) {
              response = result;
            }
          } else {
            response = `Command not found: ${command}. Type 'help' for a list of commands.`;
          }
          setOutput(prev => [...prev, { command, response }]);
        }
      } else {
        setOutput(prev => [...prev, { response: '' }]);
      }
      setInput('');
    }
  };

  return (
    <div className="p-4 md:p-8 h-screen flex flex-col items-center justify-center text-sm md:text-base">
      <div className="w-full max-w-4xl h-full max-h-[80vh] bg-terminal-dark/80 rounded-lg border-2 border-neon-cyan/50 terminal-border-glow relative overflow-hidden scanlines">
        <div className="bg-black/50 p-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div ref={terminalRef} className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          {output.map((line, index) => (
            <div key={index}>
              {line.command && (
                <div className="flex gap-2">
                  <span className="text-neon-green terminal-glow">you@portfolio</span>
                  <span className="text-neon-magenta">:</span>
                  <span className="text-neon-cyan">~</span>
                  <span className="text-white">$</span>
                  <p className="text-white">{line.command}</p>
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: line.response }} className="whitespace-pre-wrap" />
            </div>
          ))}
          <div className="flex gap-2">
            <span className="text-neon-green terminal-glow">you@portfolio</span>
            <span className="text-neon-magenta">:</span>
            <span className="text-neon-cyan">~</span>
            <span className="text-white">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="bg-transparent border-none text-white w-full outline-none"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 