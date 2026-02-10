# Platform Setup Guides

## Web Platform (Ready to Deploy)

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy
```bash
# Vercel
vercel

# Netlify
netlify deploy --prod --dir=dist

# Traditional Server
scp -r dist/* user@server:/var/www/cleexe
```

---

## PWA (Progressive Web App)

The web build automatically includes PWA capabilities:
- Manifest configured at `/public/manifest.json`
- Service worker ready for implementation
- Works offline-first with offline capabilities

### Deploy PWA:
```bash
npm run build
# Deploy dist/ folder to any web server
```

---

## React Native / Expo

### Setup
```bash
npm install -g eas-cli
cd /path/to/cleexe
eas init
```

### Build iOS
```bash
eas build --platform ios
```

### Build Android
```bash
eas build --platform android
```

### Local Testing
```bash
npx expo start
# Scan QR code with Expo Go app
```

---

## Electron (Desktop - Windows, macOS, Linux)

### Setup
```bash
npm install --save-dev electron electron-builder
npm install --save-dev concurrently wait-on
```

### Build
```bash
npm run build
npm run electron
```

### Package
```bash
npm run electron-build
```

---

## Tauri (Lightweight Desktop)

### Setup
```bash
cargo install tauri-cli
cargo tauri init
```

### Development
```bash
cargo tauri dev
```

### Build
```bash
cargo tauri build
```

---

## Docker Container

### Build
```bash
docker build -t cleexe:latest .
```

### Run
```bash
docker run -p 3000:3000 cleexe:latest
```

---

## Mobile App (React Native - Not yet implemented)

### For native iOS/Android development:
1. Extract core logic to shared modules
2. Create React Native specific components
3. Use @react-native-community packages for cross-platform APIs

---

## Architecture for Multiple Platforms

```
cleexe/
├── src/
│   ├── core/              # Shared business logic
│   ├── components/        # Web components
│   ├── hooks/             # Custom hooks
│   ├── services/          # API services
│   └── utils/             # Utilities
├── platforms/
│   ├── web/              # Web-specific code
│   ├── mobile/           # React Native (future)
│   ├── desktop/          # Electron/Tauri
│   └── pwa/              # PWA configs
└── docs/                 # Documentation
```

