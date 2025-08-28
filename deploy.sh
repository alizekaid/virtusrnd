#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies for main app
echo "📦 Installing main app dependencies..."
npm install

# Install dependencies for Docusaurus
echo "📦 Installing Docusaurus dependencies..."
cd docusaurus
npm install
cd ..

# Build everything
echo "🔨 Building React app and Docusaurus blog..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Error: Build failed. build directory not found."
    exit 1
fi

if [ ! -d "build/blog" ]; then
    echo "❌ Error: Blog build failed. build/blog directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "🎉 Deployment completed!"
echo "📝 Your site should be available at: https://virtusrnd.com"
echo "📝 Your blog should be available at: https://virtusrnd.com/blog/"
