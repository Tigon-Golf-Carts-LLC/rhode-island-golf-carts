# Rhode Island Golf Carts - Quick Start Guide

## 🎯 Quick Reference: Commands & Configuration

### Terminal Commands (Step-by-Step)

```bash
# 1. Install dependencies
npm install

# 2. Replace logo files (REQUIRED)
# Save your Rhode Island Golf Carts logo as:
#   - public/logo.png (1200x630px for social media)
#   - public/favicon.png (192x192px for browser tab)

# 3. Build the static site
npm run build

# 4. Preview locally
npm run preview
# Site will be available at: http://localhost:4173

# 5. Test production build (alternative)
npx serve -s dist
# Site will be available at: http://localhost:3000

# 6. Run development server (for editing)
npm run dev
# Site will be available at: http://localhost:5173
```

### Build Output

After `npm run build`, the `dist/` folder contains your complete static website:
- ✅ All HTML, CSS, and JavaScript files
- ✅ All images and assets
- ✅ CNAME file for custom domain
- ✅ robots.txt and sitemap.xml for SEO
- ✅ .nojekyll file for GitHub Pages

---

## ⚙️ GitHub Pages Configuration

### Option A: Using GitHub Actions (Recommended - Already Configured)

1. **Go to Repository Settings**
   ```
   https://github.com/Tigon-Golf-Carts-LLC/rhode-island-golf-carts/settings/pages
   ```

2. **Configure Source**
   - **Source**: Select "GitHub Actions"
   - That's it! The workflow is already set up.

3. **Push to Main Branch**
   ```bash
   git checkout main
   git merge claude/static-ri-golf-carts-Vu0bw
   git push origin main
   ```

4. **Monitor Deployment**
   ```
   https://github.com/Tigon-Golf-Carts-LLC/rhode-island-golf-carts/actions
   ```

### Option B: Using Branch and Folder (Manual)

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Commit the dist folder**
   ```bash
   git add dist/
   git commit -m "Add production build"
   git push origin main
   ```

3. **Configure in GitHub Settings**
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/dist`

---

## 🌐 Custom Domain Setup (rhodeislandgolfcarts.com)

### DNS Configuration (At Your Domain Provider)

Add these DNS records:

```
# For www subdomain
Type: CNAME
Name: www
Value: tigon-golf-carts-llc.github.io

# For apex domain (@)
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### GitHub Pages Custom Domain

1. Go to: https://github.com/Tigon-Golf-Carts-LLC/rhode-island-golf-carts/settings/pages
2. Under "Custom domain", enter: `rhodeislandgolfcarts.com`
3. Click "Save"
4. Wait 24-48 hours for DNS propagation
5. Enable "Enforce HTTPS" once domain is verified

---

## 🖼️ Logo Replacement Instructions

### Required Files

Replace these files with your Rhode Island Golf Carts logo:

1. **Main Logo** (`public/logo.png`)
   - Recommended size: 1200x630px
   - Format: PNG with transparency
   - Used for: Social media cards, Open Graph images

2. **Favicon** (`public/favicon.png`)
   - Recommended size: 192x192px or 512x512px
   - Format: PNG
   - Used for: Browser tab icon, mobile home screen

### How to Replace

```bash
# Method 1: Copy from your local machine
cp /path/to/your/rhode-island-logo.png public/logo.png
cp /path/to/your/rhode-island-favicon.png public/favicon.png

# Method 2: Upload via Replit or VS Code file manager
# Just drag and drop your images to replace the existing ones

# After replacing, rebuild:
npm run build
```

---

## 🧪 Testing Checklist

Run these tests before deploying:

```bash
# ✅ Test 1: Build without errors
npm run build

# ✅ Test 2: Check TypeScript
npm run check

# ✅ Test 3: Preview the site
npm run preview
# Visit: http://localhost:4173

# ✅ Test 4: Check key pages work
# - Homepage: http://localhost:4173/
# - Inventory: http://localhost:4173/inventory
# - Rentals: http://localhost:4173/rentals
# - Contact: http://localhost:4173/contact
# - About: http://localhost:4173/about

# ✅ Test 5: Check images load
# - View vehicle pages
# - Check all images display correctly

# ✅ Test 6: Verify SEO files
ls -la dist/robots.txt
ls -la dist/sitemap.xml
ls -la dist/CNAME
ls -la dist/.nojekyll

# ✅ Test 7: Check CNAME content
cat dist/CNAME
# Should output: rhodeislandgolfcarts.com
```

---

## 🐛 Debug Common Issues

### Issue: Build fails

```bash
# Clear node_modules and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Images not showing

```bash
# Check images exist
ls -la client/public/attached_assets/

# Verify build copied them
ls -la dist/attached_assets/
```

### Issue: 404 on page refresh

```bash
# Verify .nojekyll exists
ls -la dist/.nojekyll

# If missing, rebuild:
npm run build
```

### Issue: Logo not updating

```bash
# Clear browser cache (hard refresh)
# Chrome/Firefox: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

# Force rebuild
rm -rf dist/
npm run build
```

---

## 📁 Important File Locations

### Configuration Files
```
vite.config.ts               # Build configuration
package.json                 # Build scripts and dependencies
.github/workflows/deploy.yml # GitHub Actions deployment workflow
```

### Branding Files
```
client/src/config/branding.ts           # Centralized branding constants
client/index.html                       # Meta tags and SEO
public/manifest.json                    # PWA manifest
public/logo.png                         # Main logo (REPLACE THIS)
public/favicon.png                      # Favicon (REPLACE THIS)
```

### Content Files
```
client/src/pages/HomePage.tsx           # Homepage
client/src/pages/NewInventoryPage.tsx   # Inventory page
client/src/pages/ContactPage.tsx        # Contact form
client/src/data/vehicles.ts             # Vehicle inventory data
```

### SEO Files
```
public/robots.txt            # Search engine directives
public/sitemap.xml           # Site map for search engines
public/schema.json           # Structured data
CNAME                        # Custom domain configuration
docs/CNAME                   # Custom domain configuration
```

---

## 🚀 Deployment Workflow

The automated deployment process:

1. **You push to `main` branch**
2. **GitHub Actions triggers** (`.github/workflows/deploy.yml`)
3. **Workflow runs**:
   - Installs Node.js 20
   - Runs `npm ci` (clean install)
   - Runs `npm run build` (creates dist/)
   - Copies CNAME and .nojekyll files
   - Uploads artifact to GitHub Pages
4. **Site goes live** at your GitHub Pages URL

**View deployment status**:
```
https://github.com/Tigon-Golf-Carts-LLC/rhode-island-golf-carts/actions
```

---

## 🎨 What Changed (Summary)

### Branding Changes
- ❌ Chesapeake Golf Carts → ✅ Rhode Island Golf Carts
- ❌ chesapeakegolfcarts.com → ✅ rhodeislandgolfcarts.com
- ❌ Virginia location → ✅ Rhode Island location
- ❌ Hampton Roads region → ✅ Rhode Island region

### Technical Changes
- ❌ Full-stack (Express.js + React) → ✅ Static React site
- ❌ Server-side API → ✅ Client-side only
- ❌ Replit deployment → ✅ GitHub Pages deployment
- ❌ Manual deployment → ✅ Automatic deployment (GitHub Actions)

### Files Modified
- ✅ 131 files updated
- ✅ All meta tags, SEO data, and Open Graph tags
- ✅ All component references and page content
- ✅ Build configuration and scripts
- ✅ GitHub Actions workflow added

---

## 📞 Support Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Vite Docs**: https://vitejs.dev/guide/
- **DNS Propagation Check**: https://dnschecker.org

---

## ⚡ One-Command Deployment

Once configured, deploying updates is as simple as:

```bash
# Make your changes, then:
git add .
git commit -m "Update website content"
git push origin main

# GitHub Actions automatically builds and deploys!
```

---

**Quick Start Date**: January 3, 2026
**Status**: ✅ Ready for deployment
**Next Step**: Replace logo files and push to main branch
