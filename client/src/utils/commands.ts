import { Command } from '../types/terminal';

export const commands: Record<string, Command> = {
  help: {
    name: 'help',
    description: 'Show available commands',
    color: 'neon-cyan',
    execute: () => `
      <div class="text-neon-cyan terminal-glow mb-2">AVAILABLE COMMANDS:</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ml-4">
        <div><span class="text-neon-green">help</span> - Show this help menu</div>
        <div><span class="text-neon-magenta">about</span> - Learn about AJ</div>
        <div><span class="text-neon-orange">projects</span> - View portfolio projects</div>
        <div><span class="text-neon-cyan">skills</span> - Technical expertise</div>
        <div><span class="text-yellow-400">contact</span> - Get in touch</div>
        <div><span class="text-purple-400">matrix</span> - Enter the matrix</div>
        <div><span class="text-red-400">clear</span> - Clear terminal</div>
        <div><span class="text-blue-400">whoami</span> - System information</div>
      </div>
    `
  },
  
  about: {
    name: 'about',
    description: 'Learn about AJ',
    color: 'neon-magenta',
    execute: () => `
      <div class="text-neon-magenta terminal-glow mb-2">ABOUT AJ:</div>
      <div class="ml-4 space-y-2 text-sm">
        <div>Full-Stack Developer & Digital Artist</div>
        <div>Location: Cyberspace, Matrix Level 7</div>
        <div>Specializing in: React, Node.js, Python, AI/ML</div>
        <div>Mission: Creating immersive digital experiences</div>
        <div class="text-neon-green terminal-glow">Status: Online and ready to innovate</div>
      </div>
    `
  },
  
  projects: {
    name: 'projects',
    description: 'View portfolio projects',
    color: 'neon-orange',
    execute: () => `
      <div class="text-neon-orange terminal-glow mb-2">FEATURED PROJECTS:</div>
      <div class="ml-4 space-y-3 text-sm">
        <div class="border-l-2 border-neon-cyan pl-3">
          <div class="text-neon-cyan font-bold">NeuroLink Dashboard</div>
          <div>Real-time neural network monitoring system</div>
          <div class="text-gray-400">Tech: React, D3.js, WebGL</div>
        </div>
        <div class="border-l-2 border-neon-magenta pl-3">
          <div class="text-neon-magenta font-bold">Quantum Chat</div>
          <div>Encrypted messaging app with quantum security</div>
          <div class="text-gray-400">Tech: Node.js, WebRTC, Cryptography</div>
        </div>
        <div class="border-l-2 border-neon-green pl-3">
          <div class="text-neon-green font-bold">AI Art Generator</div>
          <div>Creative AI tool for digital art creation</div>
          <div class="text-gray-400">Tech: Python, TensorFlow, DALL-E API</div>
        </div>
      </div>
    `
  },
  
  skills: {
    name: 'skills',
    description: 'Technical expertise',
    color: 'neon-cyan',
    execute: () => `
      <div class="text-neon-cyan terminal-glow mb-2">TECHNICAL MATRIX:</div>
      <div class="ml-4 space-y-2 text-sm">
        <div class="flex items-center space-x-2">
          <span class="text-neon-green">●●●●●</span>
          <span>JavaScript/TypeScript</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-neon-green">●●●●●</span>
          <span>React/Next.js</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-neon-green">●●●●○</span>
          <span>Node.js/Express</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-neon-green">●●●●○</span>
          <span>Python/Django</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-neon-green">●●●○○</span>
          <span>Machine Learning</span>
        </div>
      </div>
    `
  },
  
  contact: {
    name: 'contact',
    description: 'Get in touch',
    color: 'neon-magenta',
    execute: () => `
      <div class="text-neon-magenta terminal-glow mb-2">ESTABLISH CONNECTION:</div>
      <div class="ml-4 space-y-2 text-sm">
        <div class="flex items-center space-x-2">
          <span class="text-neon-cyan">📧</span>
          <span>aj@cybernetic-portfolio.dev</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-neon-green">🔗</span>
          <span>linkedin.com/in/aj-developer</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-neon-orange">🐙</span>
          <span>github.com/aj-coder</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-purple-400">🐦</span>
          <span>@aj_codes_things</span>
        </div>
      </div>
    `
  },
  
  whoami: {
    name: 'whoami',
    description: 'System information',
    color: 'neon-green',
    execute: () => '<div class="text-neon-green">User: guest | System: Portfolio OS | Access Level: Visitor</div>'
  },
  
  date: {
    name: 'date',
    description: 'Current date and time',
    color: 'neon-cyan',
    execute: () => `<div class="text-neon-cyan">${new Date().toLocaleString()}</div>`
  },
  
  matrix: {
    name: 'matrix',
    description: 'Enter the matrix',
    color: 'neon-green',
    execute: () => '<div class="text-neon-green terminal-glow">Entering the Matrix... Reality.exe has stopped working.</div>'
  },
  
  ls: {
    name: 'ls',
    description: 'List directory contents',
    color: 'neon-cyan',
    execute: () => '<div class="text-neon-cyan">about.txt  projects.dir  skills.exe  contact.vcard  README.md</div>'
  },
  
  pwd: {
    name: 'pwd',
    description: 'Print working directory',
    color: 'neon-green',
    execute: () => '<div class="text-neon-green">/home/aj/portfolio</div>'
  },
  
  echo: {
    name: 'echo',
    description: 'Display text',
    color: 'white',
    execute: (args: string[]) => `<div class="text-white">${args.join(' ')}</div>`
  },
  
  sudo: {
    name: 'sudo',
    description: 'Execute as superuser',
    color: 'red-400',
    execute: () => '<div class="text-red-400">Nice try! But this is a portfolio, not a server 😉</div>'
  },
  
  clear: {
    name: 'clear',
    description: 'Clear terminal',
    color: 'red-400',
    execute: () => '__CLEAR__'
  }
};

export const getCommand = (name: string): Command | undefined => {
  return commands[name.toLowerCase()];
};

export const getAllCommands = (): Command[] => {
  return Object.values(commands);
};

export const getCommandSuggestions = (input: string): Command[] => {
  if (!input) return getAllCommands();
  
  return getAllCommands().filter(cmd => 
    cmd.name.toLowerCase().startsWith(input.toLowerCase())
  );
};
