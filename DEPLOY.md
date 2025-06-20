# GitHub Deployment Guide

This guide explains how to deploy your AJ Terminal Portfolio to GitHub Pages using the docs folder structure.

## Quick Setup for GitHub

### 1. Repository Setup
```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: AJ Terminal Portfolio"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/aj-terminal-portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/docs** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/aj-terminal-portfolio`

### 3. Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file to the root with your domain
2. Configure DNS settings with your domain provider

## File Structure for GitHub

The project uses the docs folder structure for easy GitHub Pages deployment:

```
├── docs/                   # GitHub Pages deployment folder
│   └── index.html          # Complete standalone terminal portfolio
├── client/                 # Frontend source code
│   ├── src/               # React components and logic
│   └── index.html         # Development entry point
├── server/                # Backend (for development)
├── .github/workflows/     # Automatic build workflow
├── README.md              # Project documentation
├── LICENSE                # MIT License
└── package.json           # Dependencies
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)
- **Pros**: Free, automatic deployment, custom domain support
- **Cons**: Static hosting only (frontend only)
- **URL**: `https://yourusername.github.io/aj-terminal-portfolio`

### Option 2: Vercel
1. Connect your GitHub repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist/public`
4. Automatic deployments on every push

### Option 3: Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/public`
4. Automatic deployments on every push

## Customization Before Publishing

### Personal Information
Edit `client/src/utils/commands.ts` to update:
- Your name and bio in the `about` command
- Your projects in the `projects` command
- Your skills in the `skills` command
- Your contact information in the `contact` command

### ASCII Art
The "AJ" ASCII art can be customized in `client/src/components/ASCIIArt.tsx`

### Colors and Theme
Modify the neon colors in `client/src/index.css` to match your preferred aesthetic

## Troubleshooting

### Build Errors
- Run `npm run build` locally to test
- Check that all dependencies are installed
- Ensure TypeScript compilation passes

### Deployment Issues
- Verify the GitHub Actions workflow runs successfully
- Check that the `dist/public` folder is generated
- Ensure GitHub Pages is configured correctly

### Custom Domain Issues
- Verify DNS settings point to GitHub Pages
- Check that the CNAME file contains the correct domain
- Allow up to 24 hours for DNS propagation

## Maintenance

### Updating Content
1. Edit the command responses in `client/src/utils/commands.ts`
2. Commit and push changes
3. GitHub Actions will automatically redeploy

### Adding New Commands
1. Add new commands to the commands object
2. Update the help command to include new commands
3. Test locally before pushing

Your terminal portfolio is now ready for the world to explore!