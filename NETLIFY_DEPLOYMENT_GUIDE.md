# Netlify Deployment Guide

**Status**: Ready for immediate deployment
**Repository**: https://github.com/Lohithpallikonda/Appscrip-Assignment.git
**Branch**: main
**Configuration**: netlify.toml (fully configured)

---

## Quick Deployment (5 minutes)

### Step 1: Go to Netlify
1. Open https://app.netlify.com
2. Sign up or log in with your GitHub account

### Step 2: Connect GitHub Repository
1. Click **"New site from Git"** button
2. Select **GitHub** as your Git provider
3. Authorize Netlify to access your GitHub account
4. Search for and select: `Appscrip-Assignment`

### Step 3: Configure Build Settings
Netlify will automatically detect the configuration from `netlify.toml`, but verify:

- **Build command**: `npm run build` ✅ (auto-detected)
- **Publish directory**: `.next` ✅ (auto-detected)
- **Node version**: 18.17.0 ✅ (auto-detected from netlify.toml)

**Important**: The `netlify.toml` file includes the `@netlify/plugin-nextjs` plugin, which is essential for:
- ✅ Automatic ISR (Incremental Static Regeneration) handling
- ✅ On-demand revalidation support
- ✅ Proper static file serving for Next.js

### Step 4: Deploy
1. Click the **"Deploy site"** button
2. Netlify will:
   - Install dependencies (npm install)
   - Run build command (npm run build)
   - Deploy to production
   - Assign you a unique URL like: `https://appscrip-assignment.netlify.app`

**Deployment time**: ~3-5 minutes

---

## Post-Deployment Verification

Once deployed, verify everything works:

### 1. Homepage
- Visit your deployed URL
- Check header, hero section, category links render correctly
- Verify responsive design on mobile

### 2. Products Page
- Navigate to `/products`
- Verify 20 products load
- Test category filter
- Test price range filter
- Test rating filter
- Verify combinations work (AND logic)

### 3. Footer
- Scroll to footer
- Verify social media icons display correctly:
  - Facebook icon ✅
  - Twitter/X icon ✅
  - Instagram icon ✅
  - LinkedIn icon ✅
- Verify footer links work

### 4. Performance Check
- Run Lighthouse audit on deployed URL:
  ```
  1. Open Chrome DevTools (F12)
  2. Go to Lighthouse tab
  3. Click "Analyze page load"
  4. Check scores (target: Performance >83, Accessibility >95, SEO 100)
  ```

### 5. SEO Verification
- Right-click page → "View page source"
- Search for `"@type":"Product"` to verify schemas
- Should find 20 Product schemas
- Verify meta tags present (og:, twitter:)

---

## Configuration Details

### netlify.toml Breakdown

```toml
[build]
  command = "npm run build"      # Next.js production build
  publish = ".next"               # Static export output directory

[build.environment]
  NODE_VERSION = "18.17.0"       # Recommended Node version
  NPM_VERSION = "9.6.7"          # Compatible npm version

# ISR Plugin - CRITICAL for Next.js
[[plugins]]
  package = "@netlify/plugin-nextjs"

# Security Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"

# Cache Control - Static Assets (1 year)
[[headers]]
  for = "/_next/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Cache Control - Pages (1 hour, revalidates)
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600, must-revalidate"
```

### What Each Part Does

**Build Configuration**:
- Runs `npm run build` to create optimized Next.js output
- Publishes `.next` directory (Next.js static export)

**Environment**:
- Node.js 18.17.0 matches development environment
- Ensures consistent behavior

**ISR Plugin** (Most Important):
- Handles Incremental Static Regeneration automatically
- Products revalidate every 1 hour
- Supports on-demand revalidation via API

**Headers**:
- Security headers protect against common attacks
- Cache control optimizes performance
- Pages cached for 1 hour, assets cached for 1 year

---

## Environment Variables (Optional)

If you need environment variables later:

1. Go to Netlify Site Settings → Environment
2. Add any required environment variables
3. Redeploy

Currently, no environment variables are needed.

---

## Continuous Deployment

After initial deployment, the site will automatically redeploy when you push to the `main` branch:

```bash
# Make changes
git add .
git commit -m "Your message"
git push origin main

# Netlify automatically:
# 1. Detects the push
# 2. Runs npm run build
# 3. Deploys to production
# 4. Updates your live URL
```

---

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure Node.js version matches (18.17.0)
- Verify `npm run build` works locally

### Performance Issues
- Clear Netlify cache: Site Settings → Deploys → Clear cache and redeploy
- Check bundle size with: `npm run build`
- Optimize images further if needed

### ISR Not Working
- Verify `@netlify/plugin-nextjs` is in netlify.toml
- Check that pages use `next.config.js` with revalidate settings
- Products page has `revalidate: 3600` (1 hour)

### Styles/Icons Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check if SVG files exist in deployed `/public` folder
- Verify CSS modules are properly bundled

---

## Your Deployed Details

After deployment, you'll have:

- **Deployed URL**: `https://appscrip-assignment.netlify.app` (or your custom domain)
- **Auto-redeployment**: On every `git push` to main
- **Preview URLs**: For PRs (if you use them)
- **Analytics**: Available in Netlify dashboard

---

## Next Steps After Deployment

1. ✅ Test all features on live site
2. ✅ Run Lighthouse audit
3. ✅ Test on mobile devices
4. ✅ Verify SEO schemas in page source
5. ✅ Monitor performance metrics
6. ✅ Update documentation with live URL

---

## Support

- **Netlify Docs**: https://docs.netlify.com/
- **Next.js on Netlify**: https://docs.netlify.com/frameworks/next-js/overview/
- **GitHub Repo**: https://github.com/Lohithpallikonda/Appscrip-Assignment

---

**Ready to Deploy!** Follow the 4 steps above to get your site live in minutes.
