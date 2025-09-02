#!/bin/bash

# CaroPhillip Pharmacy - Git Setup Script
echo "🏥 Setting up CaroPhillip Pharmacy Git Repository..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

print_status "Creating .gitignore file..."

# Create .gitignore file
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production builds
/build
/dist
.next/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# IDE/Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Temporary folders
tmp/
temp/

# Git setup script
setup-git.sh
EOF

print_success ".gitignore created successfully!"

# Check if git is initialized
if [ ! -d ".git" ]; then
    print_status "Initializing Git repository..."
    git init
    print_success "Git repository initialized!"
else
    print_warning "Git repository already exists."
fi

# Set up git config (you can modify these)
print_status "Setting up Git configuration..."
git config user.name "Akinyosoye-Oluwatobiloba"
git config user.email "akinyosoyeoluwatobiloba@gmail.com"  # Change this to your actual email

# Check if remote origin exists
if git remote get-url origin > /dev/null 2>&1; then
    print_warning "Remote 'origin' already exists. Removing and re-adding..."
    git remote remove origin
fi

print_status "Adding remote repository..."
git remote add origin https://github.com/Akinyosoye-Oluwatobiloba/CaroPhilip-Global-Pharmacy.git

# Verify remote was added
if git remote get-url origin > /dev/null 2>&1; then
    print_success "Remote repository added successfully!"
    echo "Remote URL: $(git remote get-url origin)"
else
    print_error "Failed to add remote repository!"
    exit 1
fi

# Stage all files
print_status "Staging all files..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    print_warning "No changes to commit."
else
    print_success "Files staged successfully!"

    # Show what will be committed
    echo ""
    print_status "Files to be committed:"
    git diff --staged --name-only | head -20
    if [ $(git diff --staged --name-only | wc -l) -gt 20 ]; then
        echo "... and $(( $(git diff --staged --name-only | wc -l) - 20 )) more files"
    fi
fi

# Create commit
print_status "Creating initial commit..."
git commit -m "Initial commit: Complete CaroPhillip Pharmacy website

✨ Features:
- Modern responsive pharmacy website design
- Hero slider with pharmacy-related imagery
- Interactive services showcase
- Emergency services section (24/7 support)
- Professional contact forms and pages
- Product catalog and health tips
- Testimonials and customer reviews
- Loading screens with smooth animations

🔧 Technical:
- React + Vite + Tailwind CSS
- Framer Motion animations
- React Router for navigation
- Lucide React icons
- Responsive design (mobile-first)
- SEO optimized with meta tags
- Offline support capability
- Scroll-to-top navigation

📱 Contact Integration:
- Standardized phone number: +234 806 080 1022
- WhatsApp integration
- Emergency hotline setup
- Floating action buttons
- Contact forms and consultation booking

🏥 Pharmacy-Specific:
- Prescription services showcase
- Health consultation booking
- OTC medication catalog
- Emergency pharmaceutical support
- Insurance processing information
- Delivery service details

Built with ❤️ for CaroPhillip Heritage Pharmacy Ltd"

if [ $? -eq 0 ]; then
    print_success "Initial commit created successfully!"
else
    print_error "Failed to create commit!"
    exit 1
fi

# Set default branch to main
print_status "Setting default branch to 'main'..."
git branch -M main

# Test connection to remote repository
print_status "Testing connection to remote repository..."
if git ls-remote origin > /dev/null 2>&1; then
    print_success "Successfully connected to remote repository!"

    # Push to GitHub
    print_status "Pushing to GitHub repository..."
    echo ""
    print_warning "You may be prompted for your GitHub credentials."
    print_warning "If using 2FA, use a Personal Access Token instead of password."
    echo ""

    if git push -u origin main; then
        print_success "🎉 Successfully pushed to GitHub!"
        echo ""
        echo -e "${GREEN}🌟 Your CaroPhillip Pharmacy website is now on GitHub!${NC}"
        echo -e "${BLUE}📱 Repository URL:${NC} https://github.com/Akinyosoye-Oluwatobiloba/CaroPhillip-Global-Pharmacy"
        echo ""
        echo -e "${YELLOW}Next Steps:${NC}"
        echo "1. 🌐 Deploy to Netlify/Vercel for live hosting"
        echo "2. 📝 Add a detailed README.md file"
        echo "3. 🔒 Set up environment variables for production"
        echo "4. 📊 Set up analytics and monitoring"
        echo ""
    else
        print_error "Failed to push to GitHub!"
        echo ""
        print_warning "Common solutions:"
        echo "1. Generate a Personal Access Token on GitHub"
        echo "2. Use 'git push -u origin main' and enter token when prompted for password"
        echo "3. Or set up SSH keys for easier authentication"
        exit 1
    fi
else
    print_error "Cannot connect to remote repository!"
    echo ""
    print_warning "Possible issues:"
    echo "1. Repository doesn't exist on GitHub"
    echo "2. No internet connection"
    echo "3. Incorrect repository URL"
    echo "4. Authentication required"
    echo ""
    echo "Please check the repository exists at:"
    echo "https://github.com/Akinyosoye-Oluwatobiloba/CaroPhilip-Global-Pharmacy"
    exit 1
fi

print_success "🏥 CaroPhillip Pharmacy Git setup completed successfully! 🎉"
