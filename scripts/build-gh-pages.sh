#!/bin/bash
set -e

echo "Building static site for GitHub Pages..."

npx vite build --base="./"

mkdir -p docs
rm -rf docs/*

cp -r dist/public/* docs/

touch docs/.nojekyll

echo "Build complete! Static site is in the 'docs/' folder."
echo ""
echo "To deploy on GitHub Pages:"
echo "1. Push the 'docs/' folder to your GitHub repository"
echo "2. Go to Settings > Pages in your repository"
echo "3. Set Source to 'Deploy from a branch'"
echo "4. Set Branch to 'main' and folder to '/docs'"
echo "5. Click Save"
