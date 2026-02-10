# Cleexe - Complete Setup

This document provides a complete guide for setting up and deploying Cleexe across multiple platforms.

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- (Optional) Docker for containerization
- (Optional) Rust for Tauri

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/Cleexe-mobileapp/cleexe.git
cd cleexe
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env
```

4. **Configure environment variables**
Edit `.env` with your API endpoint and settings

## Development

Start the development server:
```bash
npm run dev
```

The app will open at http://localhost:3000 with hot module reloading.

## Building

### Web Production Build
```bash
npm run build
npm run preview  # Test production build locally
```

The output is in the `dist/` folder.

## 📱 Multi-Platform Support

### Web → PWA
The web build automatically works as a PWA:
- Install on home screen
- Works offline
- Push notifications ready

**Deploy:**
```bash
# Vercel
vercel

# Netlify  
netlify deploy --prod --dir=dist

# Traditional Server
npm run build && scp -r dist/* user@server:/var/www/cleexe
```

### Web → Docker
```bash
docker build -t cleexe:latest .
docker run -p 3000:3000 cleexe:latest
```

### Web → Electron (Desktop)
Coming soon - See PLATFORMS.md for setup

### Web → React Native (Mobile)
Coming soon - See PLATFORMS.md for React Native conversion

### Web → Tauri (Lightweight Desktop)
Coming soon - See PLATFORMS.md for Tauri setup

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript configuration |
| `vite.config.ts` | Vite build configuration |
| `.prettierrc` | Code formatting rules |
| `.eslintrc.cjs` | Linting rules |
| `tauri.conf.json` | Tauri configuration |
| `electron-builder.json` | Electron build config |

## 📦 Build Outputs

```
dist/                  # Web build
electron/main.js       # Electron main process
electron/preload.js    # Electron preload script
release/               # Desktop app installers
```

## 🚀 Deployment Platforms

### Vercel
```bash
npm i -g vercel
vercel login
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### AWS S3 + CloudFront
```bash
aws s3 sync dist/ s3://your-bucket-name/
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase deploy
```

### GitHub Pages
```bash
npm run build
# commit dist/ to gh-pages branch
```

## 📊 Performance Optimization

- ✅ Code splitting enabled
- ✅ Lazy route loading ready
- ✅ Image optimization
- ✅ CSS minification
- ✅ JavaScript compression

## 🔒 Security

- XSS Protection
- CSRF Token Support  
- Secure Headers
- Environment Variable Isolation
- Dependency Auditing: `npm audit`

## 📝 Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Check for Vulnerabilities
```bash
npm audit
npm audit fix --force  # Use with caution
```

### Code Quality
```bash
npm run lint
npm run format
npm run type-check
```

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript Errors
```bash
npm run type-check
```

### Port Already in Use
```bash
# Change port in vite.config.ts or
kill -9 $(lsof -t -i:3000)
```

## 📖 Additional Resources

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [React Router Docs](https://reactrouter.com)

## 📝 Changelog

### v1.0.0 (Initial Release)
- Initial web platform setup
- PWA support configured
- Docker containerization
- Platform expansion guide

## Support & Contact

**Email:** support@cleexe.com
**GitHub Issues:** https://github.com/Cleexe-mobileapp/cleexe/issues
**Website:** https://cleexe.com

---

**Ready to deploy Cleexe on any platform!** 🚀
