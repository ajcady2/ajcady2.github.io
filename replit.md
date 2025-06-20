# AJ Terminal Portfolio

## Overview
This is a full-stack web application featuring an interactive terminal-style portfolio with cyberpunk aesthetics. The project showcases a unique approach to personal portfolios by simulating a command-line interface where users can type commands to explore the developer's skills, projects, and contact information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom cyberpunk color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React hooks with custom terminal state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Data Storage Solutions
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Database**: PostgreSQL (configured via Drizzle config)
- **Connection**: Neon Database serverless PostgreSQL
- **Schema**: Shared schema between client and server
- **Development Storage**: In-memory storage implementation for rapid prototyping

### Authentication and Authorization
- **Session Management**: Prepared with connect-pg-simple for PostgreSQL sessions
- **User Schema**: Basic user table with username/password fields
- **Validation**: Zod schemas for type-safe data validation

## Key Components

### Terminal Interface
- **Terminal Component**: Main interactive terminal with command processing
- **Command System**: Extensible command registry with typed responses
- **Boot Sequence**: Animated startup sequence with cyberpunk styling
- **Command History**: Persistent command history with navigation
- **Auto-suggestions**: Tab completion and command suggestions

### UI Components
- **ASCIIArt**: Custom ASCII logo rendering
- **Terminal Header**: System status bar with live time
- **Terminal Input**: Keyboard-aware input with command history
- **Terminal Output**: Styled command output with HTML rendering

### Styling System
- **Color Scheme**: Custom cyberpunk palette with neon colors
- **Typography**: JetBrains Mono font for authentic terminal feel
- **Animations**: Glow effects, typing animations, and scanlines
- **Responsive Design**: Mobile-friendly terminal interface

## Data Flow

### Command Processing
1. User types command in terminal input
2. Command parser extracts command name and arguments
3. Command registry looks up and executes command handler
4. Command output is rendered with appropriate styling
5. Command and output are added to history

### State Management
1. Terminal state managed through custom useTerminal hook
2. Command history persisted in component state
3. Input handling with keyboard navigation support
4. Boot sequence and typing animations controlled via state

### Development Workflow
1. Vite dev server provides hot module replacement
2. Express server handles API routes and static file serving
3. TypeScript compilation checked without emission
4. Development and production builds use different strategies

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui components
- **Database**: Drizzle ORM, Neon Database serverless, PostgreSQL driver
- **Development**: Vite, TypeScript, tsx, esbuild for builds
- **Utilities**: date-fns, clsx, class-variance-authority for styling

### Development Tools
- **Build Tools**: Vite with React plugin, esbuild for production
- **Type Checking**: TypeScript with strict configuration
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Session**: connect-pg-simple for PostgreSQL session store

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: esbuild bundles server to `dist/index.js`
- **Static Assets**: Client build output served by Express in production

### Environment Configuration
- **Development**: tsx runs TypeScript server directly with Vite middleware
- **Production**: Node.js runs compiled JavaScript with static file serving
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### Replit Configuration
- **Modules**: Node.js 20, web environment, PostgreSQL 16
- **Ports**: Local port 5000 mapped to external port 80
- **Scripts**: npm run dev for development, npm run start for production
- **Auto-deployment**: Configured for autoscale deployment target

## Changelog
- June 19, 2025. Initial setup
- June 19, 2025. Made project GitHub-compatible with root index.html, deployment workflow, and proper documentation
- June 19, 2025. Restructured for GitHub Pages deployment using docs folder with compiled assets
- June 19, 2025. Created standalone HTML file for docs folder to fix GitHub Pages deployment issues

## User Preferences
Preferred communication style: Simple, everyday language.