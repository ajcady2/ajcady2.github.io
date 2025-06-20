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
├── docs/                   # GitHub Pages deployment folder
│   └── index.html          # Complete standalone terminal portfolio
├── client/                 # Frontend React application source
│   ├── src/
│   │   ├── components/     # Terminal UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Route pages
│   │   ├── types/          # TypeScript definitions
│   │   └── utils/          # Command system & utilities
│   └── index.html          # Development HTML entry point
├── server/                 # Backend Express server
├── shared/                 # Shared schemas & types
├── .github/workflows/      # GitHub Actions for auto-deployment
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

### GitHub Pages (Recommended)
1. Push your repository to GitHub
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select "main" branch and "/docs" folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Manual Deployment
The `docs/index.html` file is a complete standalone terminal portfolio that works directly on GitHub Pages without any build process required.

### Automatic Updates
If you modify the React source code, you can rebuild and update the docs folder using the included GitHub Actions workflow.

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