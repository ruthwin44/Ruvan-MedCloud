#!/bin/bash
set -e

CUSTOM_DOMAIN="www.ruvanmedcloud.com"

echo "Building static site for GitHub Pages (custom domain: $CUSTOM_DOMAIN)..."

npx vite build --base="/"

mkdir -p docs
rm -rf docs/*

cp -r dist/public/* docs/

touch docs/.nojekyll

echo "$CUSTOM_DOMAIN" > docs/CNAME

cat > docs/404.html << HEREDOC
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RUVAN MEDCLOUD</title>
  <script>
    var pathSegmentsToKeep = 0;
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
echo "Your site will be at: https://$CUSTOM_DOMAIN/"
