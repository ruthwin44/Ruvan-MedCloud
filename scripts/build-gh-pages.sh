#!/bin/bash
set -e

REPO_NAME="Ruvan-MedCloud"

echo "Building static site for GitHub Pages (base: /$REPO_NAME/)..."

npx vite build --base="/$REPO_NAME/"

mkdir -p docs
rm -rf docs/*

cp -r dist/public/* docs/

touch docs/.nojekyll

cat > docs/404.html << HEREDOC
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RUVAN MEDCLOUD</title>
  <script>
    var pathSegmentsToKeep = 1;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body></body>
</html>
HEREDOC

echo "Build complete! Static site is in the 'docs/' folder."
echo ""
echo "To deploy on GitHub Pages:"
echo "1. Push the 'docs/' folder to your GitHub repository"
echo "2. Go to Settings > Pages in your repository"
echo "3. Set Source to 'Deploy from a branch'"
echo "4. Set Branch to 'main' and folder to '/docs'"
echo "5. Click Save"
echo ""
echo "Your site will be at: https://ruthwin44.github.io/$REPO_NAME/"
