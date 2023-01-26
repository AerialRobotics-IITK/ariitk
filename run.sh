#!/bin/bash

echo "Commiting your changes of Astro source"
git add -A
echo "Enter Commit Message:"
read -r message
git commit -m "$message"
echo "Pushing to site_astro"
git push origin site_astro

echo "Building source"
npm run build

cd dist
echo "Entered dist"
git add -A
echo "Enter Commit Message for dist:"
read -r message_dist
git commit -m "$message_dist"
echo "Pushing to main"
git push origin main