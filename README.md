# Guard-VPN

Web-based VPN service with browser-native encryption and global server network.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Security Features](#security-features)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

This web-based VPN service provides secure, encrypted connections through a modern web interface. Users can connect to VPN servers directly from their browser without installing additional software, making it accessible across all platforms and devices.

### Key Features

- 🔐 Browser-based encrypted connections
- 🌍 Multiple server locations worldwide
- ⚡ High-speed web proxy tunneling
- 🌐 Cross-platform web compatibility
- �️ Real-time connection monitoring
- � Usage analytics dashboard
- �🔄 Auto-reconnect functionality
- 📝 Connection logs and history
- 🎯 No software installation required
- 📱 Mobile-responsive design

## 🛠️ Tech Stack

### Backend Technologies

#### Core VPN Implementation
- **WireGuard** - Modern VPN protocol for server infrastructure
- **OpenVPN** - Traditional VPN protocol support
- **WebRTC** - Browser-based peer-to-peer connections
- **WebSocket Secure (WSS)** - Real-time encrypted communication
- **HTTP/2 + TLS 1.3** - Modern web protocols

#### Server Technologies
- **Node.js** + **Express.js** - Main API server
- **Socket.io** - Real-time bidirectional communication
- **Fastify** - High-performance alternative to Express
- **Next.js API Routes** - Full-stack React framework

#### Database & Caching
- **PostgreSQL** - User management and session data
- **Redis** - Session caching and real-time data
- **Prisma** - Modern database ORM

#### Infrastructure
- **Docker** - Containerization
- **Nginx** - Reverse proxy and load balancing
- **Cloudflare** - CDN, DDoS protection, and edge computing
- **Let's Encrypt** - SSL certificate management

### Frontend Technologies

#### Web Application
- **React** + **TypeScript** - Main frontend framework
- **Next.js** - Full-stack React framework with SSR
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Query** - Server state management
- **Zustand** - Client state management

#### UI Components & Design
- **Shadcn/ui** - Modern component library
- **Headless UI** - Unstyled, accessible components
- **Lucide Icons** - Beautiful icon library
- **Chart.js** - Data visualization for analytics

#### Progressive Web App (PWA)
- **Service Workers** - Offline functionality
- **Web App Manifest** - Native app-like experience
- **Push Notifications** - Real-time alerts

### DevOps & Security

#### Deployment & Monitoring
- **Vercel** - Frontend deployment and edge functions
- **Railway** or **Heroku** - Backend deployment
- **AWS/GCP/Azure** - Cloud infrastructure for VPN servers
- **Terraform** - Infrastructure as Code
- **GitHub Actions** - CI/CD pipeline
- **Prometheus** + **Grafana** - Monitoring and alerting
- **LogRocket** - Frontend error tracking

#### Security & Authentication
- **Auth0** or **Supabase Auth** - Authentication service
- **JWT** - Stateless authentication
- **HTTPS Everywhere** - Secure connections
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection
- **Web Crypto API** - Browser-native cryptography

#### Web Security Tools
- **Content Security Policy (CSP)** - XSS protection
- **HSTS** - HTTP Strict Transport Security
- **Web Application Firewall (WAF)** - Cloudflare security
- **OWASP ZAP** - Security testing

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Clients   │    │   Web Gateway   │    │  VPN Servers    │
│                 │    │                 │    │                 │
│ • Desktop       │◄──►│ • Load Balancer │◄──►│ • WireGuard     │
│ • Mobile        │    │ • WebSocket     │    │ • Proxy Servers │
│ • Tablet        │    │ • API Gateway   │    │ • Global Network│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │  Web Services   │
                       │                 │
                       │ • User Auth     │
                       │ • Session Mgmt  │
                       │ • Analytics     │
                       │ • Real-time API │
                       └─────────────────┘
```

## 📋 Prerequisites

### Development Environment
- **Node.js** (v18+) with npm or yarn
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)
- **Git** for version control
- **VS Code** with recommended extensions

### System Requirements
- **Any OS** (Windows/macOS/Linux) for development
- **Minimum 4GB RAM** for development
- **Modern browser** with WebRTC support

### Accounts & Services
- **Vercel Account** - Frontend deployment
- **Railway/Heroku Account** - Backend deployment
- **Cloudflare Account** - CDN and security
- **Domain Name** - Custom domain (optional)
- **Auth0/Supabase** - Authentication service

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/prash08484/Guard-VPN.git
cd Guard-VPN
```

### 2. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit configuration
code .env
```

### 3. Frontend Setup (Next.js)
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Backend API Setup
```bash
cd api
npm install

# Setup database
npm run db:setup

# Start API server
npm run dev
```

### 5. Database Migration
```bash
# Run Prisma migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate
```

### 6. VPN Infrastructure Setup
```bash
# Deploy VPN servers (using Terraform)
cd infrastructure
terraform init
terraform plan
terraform apply
```

## ⚙️ Configuration

### Environment Variables
```bash
# Server Configuration
NODE_ENV=production
PORT=3000
HOST=0.0.0.0

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/vpndb
REDIS_URL=redis://localhost:6379

# VPN Configuration
WIREGUARD_PRIVATE_KEY=your_private_key
WIREGUARD_PUBLIC_KEY=your_public_key
VPN_SUBNET=10.0.0.0/24

# Security
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_encryption_key

# External Services
CLOUD_PROVIDER=aws
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

### WireGuard Server Config
```ini
[Interface]
PrivateKey = SERVER_PRIVATE_KEY
Address = 10.0.0.1/24
ListenPort = 51820
SaveConfig = true

# Enable IP forwarding
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT
```

## 📱 Usage

### Server Management
```bash
# Start the application
npm start

# Start in development mode
npm run dev

# Start VPN server
sudo systemctl start wg-quick@wg0
```

### Client Configuration
```bash
# Generate client config
npm run generate-client-config

# Connect client
wg-quick up client.conf
```

### API Endpoints
```
POST /api/auth/login       - User authentication
GET  /api/servers          - Available VPN servers
POST /api/connections      - Create VPN connection
GET  /api/status           - Connection status
DELETE /api/connections/:id - Disconnect VPN
```

## 🔒 Security Features

### Encryption
- **ChaCha20-Poly1305** - WireGuard encryption
- **AES-256-GCM** - OpenVPN encryption
- **Perfect Forward Secrecy** - Key rotation
- **Certificate Pinning** - Prevent MITM attacks

### Authentication
- **JWT Tokens** - Stateless authentication
- **2FA Support** - Time-based OTP
- **Rate Limiting** - Brute force protection
- **Session Management** - Secure session handling

### Network Security
- **Kill Switch** - Prevent IP leaks
- **DNS Leak Protection** - Secure DNS queries
- **IPv6 Leak Protection** - Prevent IPv6 leaks
- **Split Tunneling** - Selective routing

## 👨‍💻 Development

### Project Structure
```
guard-vpn/
├── src/                    # Next.js frontend
│   ├── components/         # React components
│   │   ├── dashboard/
│   │   ├── auth/
│   │   └── vpn/
│   ├── pages/             # Next.js pages
│   │   ├── api/           # API routes
│   │   ├── dashboard/
│   │   └── auth/
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── styles/            # CSS and Tailwind
│   └── lib/               # Shared libraries
├── api/                   # Backend API (if separate)
│   ├── src/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
├── infrastructure/        # Deployment configs
│   ├── terraform/         # Infrastructure as Code
│   ├── docker/           # Container configs
│   └── nginx/            # Reverse proxy configs
├── docs/                 # Documentation
└── tests/                # E2E tests
```

### Development Commands
```bash
# Frontend development
npm run dev              # Start Next.js dev server
npm run build            # Build for production
npm run start            # Start production server

# Backend development (if separate)
npm run dev:api          # Start API dev server
npm run build:api        # Build API for production

# Database
npm run db:migrate       # Run database migrations
npm run db:seed          # Seed database with test data
npm run db:studio        # Open Prisma Studio

# Testing
npm run test             # Run all tests
npm run test:e2e         # Run end-to-end tests
npm run test:watch       # Run tests in watch mode

# Linting & Formatting
npm run lint             # ESLint
npm run format           # Prettier
npm run type-check       # TypeScript check
```

### Code Quality
- **ESLint** - JavaScript/TypeScript linting with Next.js config
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files
- **Jest** - Unit testing framework
- **Playwright** - End-to-end testing
- **TypeScript** - Type safety
- **Tailwind CSS** - Consistent styling

## 🧪 Testing

### Unit Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch

# Test specific component
npm test -- --testNamePattern="VPN Connection"
```

### Integration Tests
```bash
# API endpoint tests
npm run test:api

# Database integration tests
npm run test:db

# WebSocket connection tests
npm run test:websocket
```

### End-to-End Tests
```bash
# Run E2E tests with Playwright
npm run test:e2e

# Run E2E tests in headed mode
npm run test:e2e:headed

# Generate test report
npm run test:e2e:report
```

### Performance Testing
```bash
# Lighthouse CI for web performance
npm run test:performance

# Load testing for API endpoints
npm run test:load
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod

# Set environment variables
vercel env add
```

### Backend Deployment (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway link
railway up
```

### Full Stack Deployment
```bash
# Build all components
npm run build

# Deploy with Docker
docker build -t guard-vpn .
docker run -p 3000:3000 guard-vpn

# Deploy to cloud with Terraform
cd infrastructure
terraform init
terraform apply
```

### CDN & Performance
```bash
# Setup Cloudflare for CDN
npm run setup:cloudflare

# Configure edge caching
npm run setup:edge-cache

# Setup monitoring
npm run setup:monitoring
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write comprehensive tests
- Update documentation
- Ensure security best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: [Wiki](https://github.com/prash08484/Guard-VPN/wiki)
- **Issues**: [GitHub Issues](https://github.com/prash08484/Guard-VPN/issues)
- **Discussions**: [GitHub Discussions](https://github.com/prash08484/Guard-VPN/discussions)
- **Email**: support@guardvpn.com

## 🙏 Acknowledgments

- WireGuard for the modern VPN protocol
- OpenVPN for the battle-tested VPN solution
- The open-source community for amazing tools and libraries

---

**⚠️ Disclaimer**: This web-based VPN service is for educational and legitimate privacy purposes only. Users are responsible for complying with applicable laws and regulations. Browser-based VPN solutions may have limitations compared to native VPN clients.