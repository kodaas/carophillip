@echo off
echo 🏥 Setting up CaroPhillip Pharmacy Git Repository...
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] package.json not found. Please run this script from the project root directory.
    pause
    exit /b 1
)

echo [INFO] Creating .gitignore file...

REM Create .gitignore file
(
echo # Dependencies
echo node_modules/
echo /.pnp
echo .pnp.js
echo.
echo # Testing
echo /coverage
echo.
echo # Production builds
echo /build
echo /dist
echo .next/
echo.
echo # Environment variables
echo .env
echo .env.local
echo .env.development.local
echo .env.test.local
echo .env.production.local
echo.
echo # Logs
echo npm-debug.log*
echo yarn-debug.log*
echo yarn-error.log*
echo lerna-debug.log*
echo.
echo # Runtime data
echo pids
echo *.pid
echo *.seed
echo *.pid.lock
echo.
echo # Optional npm cache directory
echo .npm
echo.
echo # Optional eslint cache
echo .eslintcache
echo.
echo # IDE/Editor files
echo .vscode/
echo .idea/
echo *.swp
echo *.swo
echo *~
echo.
echo # OS generated files
echo .DS_Store
echo .DS_Store?
echo ._*
echo .Spotlight-V100
echo .Trashes
echo ehthumbs.db
echo Thumbs.db
echo.
echo # Temporary folders
echo tmp/
echo temp/
echo.
echo # Setup scripts
echo setup-git.sh
echo setup-git.bat
) > .gitignore

echo [SUCCESS] .gitignore created successfully!

REM Check if git is initialized
if not exist ".git" (
    echo [INFO] Initializing Git repository...
    git init
    if errorlevel 1 (
        echo [ERROR] Failed to initialize Git repository!
        pause
        exit /b 1
    )
    echo [SUCCESS] Git repository initialized!
) else (
    echo [WARNING] Git repository already exists.
)

REM Set up git config
echo [INFO] Setting up Git configuration...
git config user.name "Akinyosoye-Oluwatobiloba"
git config user.email "akinyosoyeoluwatobiloba@gmail.com"

REM Remove existing origin if it exists
git remote remove origin >nul 2>&1

echo [INFO] Adding remote repository...
git remote add origin https://github.com/Akinyosoye-Oluwatobiloba/CaroPhilip-Global-Pharmacy.git

if errorlevel 1 (
    echo [ERROR] Failed to add remote repository!
    pause
    exit /b 1
)

echo [SUCCESS] Remote repository added successfully!

REM Stage all files
echo [INFO] Staging all files...
git add .

if errorlevel 1 (
    echo [ERROR] Failed to stage files!
    pause
    exit /b 1
)

echo [SUCCESS] Files staged successfully!

REM Create commit
echo [INFO] Creating initial commit...
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

if errorlevel 1 (
    echo [ERROR] Failed to create commit!
    pause
    exit /b 1
)

echo [SUCCESS] Initial commit created successfully!

REM Set default branch to main
echo [INFO] Setting default branch to 'main'...
git branch -M main

REM Push to GitHub
echo [INFO] Pushing to GitHub repository...
echo.
echo [WARNING] You may be prompted for your GitHub credentials.
echo [WARNING] If using 2FA, use a Personal Access Token instead of password.
echo.

git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] Failed to push to GitHub!
    echo.
    echo Common solutions:
    echo 1. Generate a Personal Access Token on GitHub
    echo 2. Use the token as your password when prompted
    echo 3. Make sure the repository exists on GitHub
    echo 4. Check your internet connection
    echo.
    pause
    exit /b 1
)

echo.
echo 🎉 Successfully pushed to GitHub!
echo.
echo 🌟 Your CaroPhillip Pharmacy website is now on GitHub!
echo 📱 Repository URL: https://github.com/Akinyosoye-Oluwatobiloba/CaroPhillip-Global-Pharmacy
echo.
echo Next Steps:
echo 1. 🌐 Deploy to Netlify/Vercel for live hosting
echo 2. 📝 Add a detailed README.md file
echo 3. 🔒 Set up environment variables for production
echo 4. 📊 Set up analytics and monitoring
echo.
echo 🏥 CaroPhillip Pharmacy Git setup completed successfully! 🎉

pause
