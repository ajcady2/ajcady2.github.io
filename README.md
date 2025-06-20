# AJ Terminal Portfolio

An interactive terminal-style portfolio website with cyberpunk neon aesthetics. Experience a unique command-line interface where visitors can explore projects, skills, and contact information through terminal commands.

## 🚀 Features

- **Interactive Terminal Interface** - Full command-line experience with history and auto-suggestions
- **Cyberpunk Aesthetics** - Neon colors, glow effects, and scanline animations
- **ASCII Art Logo** - Custom "AJ" logo with animated effects
- **Boot Sequence** - Authentic terminal startup experience
- **Command System** - Extensive command library for navigation
- **Mobile Responsive** - Works seamlessly on all devices

## 🎮 Available Commands

- `help` - Show all available commands
- `about` - Learn about AJ
- `projects` - View portfolio projects
- `skills` - Technical expertise overview
- `contact` - Get in touch
- `whoami` - System information
- `clear` - Clear terminal
- `matrix` - Enter the matrix mode
- And many more Unix-style commands!

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom cyberpunk theme
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite
- **Backend**: Node.js + Express
- **Database**: PostgreSQL with Drizzle ORM

## 🏗️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Terminal UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Route pages
│   │   ├── types/          # TypeScript definitions
│   │   └── utils/          # Command system & utilities
│   └── index.html          # Original HTML entry point
├── server/                 # Backend Express server
├── shared/                 # Shared schemas & types
├── index.html              # Root HTML file (GitHub compatible)
└── package.json            # Dependencies & scripts
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aj-terminal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit the terminal**
   Open your browser to `http://localhost:5000` and start typing commands!

## 📝 Customization

### Modify Personal Information
Edit the command responses in `client/src/utils/commands.ts`:
- Update the `about` command with your information
- Modify `projects` to showcase your work
- Customize `skills` with your technical abilities
- Update `contact` with your social links

### Customize Colors
The neon color scheme is defined in `client/src/index.css`:
- `--neon-cyan`: Primary terminal color
- `--neon-magenta`: Secondary highlights
- `--neon-orange`: ASCII art color
- `--neon-green`: Success messages

### Add New Commands
Create new commands in `client/src/utils/commands.ts`:
```typescript
newCommand: {
  name: 'newCommand',
  description: 'Description of what it does',
  color: 'neon-cyan',
  execute: (args: string[]) => `<div class="text-neon-cyan">Your output here</div>`
}
```

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/public` folder to GitHub Pages
3. Ensure the root `index.html` points to the correct paths

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`

## 🎨 Design Philosophy

This portfolio embraces the aesthetic of classic terminal interfaces with a modern cyberpunk twist. The design features:

- **Authentic Terminal Feel** - Real command history, tab completion, and Unix-style commands
- **Neon Cyberpunk Theme** - Glowing text effects and dark backgrounds
- **Responsive Design** - Works on desktop and mobile devices
- **Performance First** - Fast loading with minimal dependencies

## 📱 Mobile Support

The terminal is fully responsive and includes:
- Touch-friendly input controls
- Mobile-optimized command suggestions
- Floating action button for easy access
- Swipe gestures for command history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Roadmap

- [ ] Add more interactive animations
- [ ] Implement theme switcher
- [ ] Add sound effects
- [ ] Create more terminal games
- [ ] Add file system simulation

---

**Experience the future of portfolio websites. Welcome to the matrix.** 🚀