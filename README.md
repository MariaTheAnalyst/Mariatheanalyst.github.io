# Maria's Portfolio Website

A personal portfolio website built with Next.js and deployed to GitHub Pages.

## Setup and Deployment Instructions

### Local Development

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for GitHub Pages

1. Build the project:
   \`\`\`
   npm run build
   \`\`\`

2. This will generate a `docs` folder with all static files.

3. Commit and push the changes, including the `docs` folder:
   \`\`\`
   git add .
   git commit -m "Update build files"
   git push
   \`\`\`

### GitHub Pages Configuration

1. Go to your GitHub repository settings
2. Scroll down to the "GitHub Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/docs" folder
5. Click "Save"
6. Your site will be published at `https://yourusername.github.io/your-repo-name/`

### Adding a .nojekyll File

Create an empty file named `.nojekyll` in your repository root to prevent GitHub Pages from using Jekyll processing:

\`\`\`
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll file"
git push
\`\`\`

## Updating Content

To update your portfolio:

1. Edit the files in the `components` or `app` directories
2. Run `npm run build` to generate new static files
3. Commit and push all changes, including the updated `docs` folder
4. Your changes will be live on GitHub Pages shortly after pushing

## Project Structure

- `app/` - Next.js app router pages
- `components/` - React components
- `public/` - Static assets like images
- `docs/` - Generated static site (don't edit directly)
- `next.config.mjs` - Next.js configuration
\`\`\`

```plaintext file=".nojekyll"
