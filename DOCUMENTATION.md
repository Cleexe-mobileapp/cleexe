/**
 * Comprehensive project documentation
 */

# Cleexe - Productivity Social Network

## Project Overview

Cleexe is a social media platform designed for productive professionals who want to:
- Set and track productivity goals
- Join accountability groups
- Earn achievements and recognition
- Get support from a community of like-minded individuals
- Analyze their productivity patterns

## Quick Start

### Development
\`\`\`bash
npm install
npm run dev
\`\`\`

### Production Build
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier
- `npm run type-check` - Check TypeScript

## Project Structure

```
cleexe/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Full page components
│   ├── services/         # API and business logic
│   ├── hooks/            # Custom React hooks
│   ├── context/          # Global state management
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── config/           # Configuration constants
│   ├── styles/           # Global styles
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── dist/                 # Build output
├── index.html            # HTML template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite configuration
├── Dockerfile            # Docker configuration
└── PLATFORMS.md          # Platform deployment guide
```

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Code Quality**: ESLint + Prettier
- **Container**: Docker ready

## Features

### Core Features
- ✅ User authentication & profiles
- ✅ Goal creation and tracking
- ✅ Accountability groups
- ✅ Activity feed
- ✅ Notifications
- ✅ Achievement system

### Planned Features
- 📱 React Native mobile app
- 🖥️ Electron desktop app
- 📊 Advanced analytics
- 🔔 Push notifications
- 💬 Real-time chat
- 📁 File sharing

## API Integration

All API calls are handled through `/src/services/api.ts` with:
- Automatic request/response interceptors
- Token-based authentication
- Error handling
- Request retry logic

## Environment Variables

Required environment variables (see `.env.example`):
- `VITE_API_BASE_URL` - API endpoint
- `VITE_API_TIMEOUT` - Request timeout
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - App version
- `VITE_ENABLE_ANALYTICS` - Analytics flag
- `VITE_ENABLE_NOTIFICATIONS` - Notifications flag

## Deployment

### Web (Vercel, Netlify, etc)
\`\`\`bash
npm run build
# Deploy dist/ folder
\`\`\`

### Docker
\`\`\`bash
docker build -t cleexe:latest .
docker run -p 3000:3000 cleexe:latest
\`\`\`

### Mobile (React Native)
See PLATFORMS.md for React Native setup

### Desktop (Electron)
See PLATFORMS.md for Electron setup

## Development Guidelines

### Component Structure
- Use functional components with hooks
- Keep components small and focused
- Use TypeScript for type safety
- Add descriptive prop types

### Code Style
- Follow ESLint rules
- Format with Prettier
- Use meaningful variable names
- Add comments for complex logic

### Git Workflow
- Create feature branches from main
- Commit messages: clear and descriptive
- Open pull requests for review
- Merge to main after approval

## Testing

Unit tests should be added for:
- Utility functions
- Custom hooks
- Service functions
- Complex components

## Performance

- Code splitting for routes
- Lazy loading images
- CSS optimization
- Bundle size monitoring

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Security

- XSS protection
- CSRF token support
- Secure headers
- Environment variable validation
- No sensitive data in client code

## Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Add tests if applicable
5. Submit pull request

## License

MIT License - See LICENSE file

## Support

For issues and questions:
- Email: support@cleexe.com
- GitHub: github.com/Cleexe-mobileapp/cleexe
- Documentation: docs.cleexe.com

---

**Build with ❤️ for productive professionals**
