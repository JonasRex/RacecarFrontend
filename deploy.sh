#!/usr/bin/env sh

PROJECT_NAME="racecar"
DROPLET_URL="165.22.76.82"

echo "#############################"
echo "Building the frontend project"
echo "#############################"
npm run build

echo "#############################"
echo "Deploying frontend project..."
echo "#############################"
scp -r ./dist/* root@$DROPLET_URL:/var/www/$PROJECT_NAME