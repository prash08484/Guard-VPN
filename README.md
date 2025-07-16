# Guard-VPN

Web-based VPN service with browser-native encryption and global server network.

## 📋 Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Step-by-Step Setup](#step-by-step-setup)
- [Development](#development)
- [Deployment](#deployment)

## 🛠️ Tech Stack

**Frontend:** Next.js, React, TypeScript, Tailwind CSS, WebRTC  
**Backend:** Node.js, Express.js, Socket.io, PostgreSQL, Redis  
**Infrastructure:** Docker, Nginx, Cloudflare, WireGuard  
**Auth:** Supabase Auth, JWT  
**Deployment:** Vercel, Railway, DigitalOcean

## 📋 Prerequisites

### Required Software
```bash
# Install Node.js (v18+)
# Download from: https://nodejs.org/

# Install Git
# Download from: https://git-scm.com/

# Install Docker
# Download from: https://docker.com/

# Install VS Code (recommended)
# Download from: https://code.visualstudio.com/
```

### Required Accounts
- **GitHub Account** - For repository
- **Vercel Account** - Frontend hosting (free tier)
- **Supabase Account** - Database & Auth (free tier)
- **Cloudflare Account** - CDN & Security (free tier)
- **DigitalOcean Account** - VPN servers ($6/month minimum)

## 🚀 Step-by-Step Setup

### Step 1: Environment Setup

```bash
# 1. Clone repository
git clone https://github.com/prash08484/Guard-VPN.git
cd Guard-VPN

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
```

### Step 2: Database Setup (Supabase)

```bash
# 1. Go to https://supabase.com
# 2. Create new project
# 3. Get your database URL and API keys
# 4. Add to .env file:

DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

### Step 3: Database Schema

```bash
# 1. Install Prisma CLI
npm install -g prisma

# 2. Initialize database
npx prisma migrate dev --name init

# 3. Generate Prisma client
npx prisma generate

# 4. Seed database (optional)
npm run db:seed
```

### Step 4: Authentication Setup

```bash
# 1. In Supabase dashboard:
#    - Go to Authentication > Settings
#    - Configure providers (Email, Google, etc.)
#    - Set site URL to your domain

# 2. Add auth config to .env:
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### Step 5: VPN Server Setup

```bash
# 1. Create DigitalOcean droplet
#    - Ubuntu 22.04 LTS
#    - Minimum $6/month plan
#    - Enable IPv6

# 2. SSH into server
ssh root@your-server-ip

# 3. Install WireGuard
apt update
apt install wireguard wireguard-tools

# 4. Generate server keys
wg genkey | tee server_private_key | wg pubkey > server_public_key

# 5. Create WireGuard config
nano /etc/wireguard/wg0.conf
```

### Step 6: WireGuard Configuration

```ini
# /etc/wireguard/wg0.conf
[Interface]
PrivateKey = YOUR_SERVER_PRIVATE_KEY
Address = 10.0.0.1/24
ListenPort = 51820
SaveConfig = true

# Enable IP forwarding
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
```

### Step 7: Server Configuration

```bash
# 1. Enable IP forwarding
echo 'net.ipv4.ip_forward=1' >> /etc/sysctl.conf
sysctl -p

# 2. Start WireGuard
systemctl enable wg-quick@wg0
systemctl start wg-quick@wg0

# 3. Configure firewall
ufw allow 51820/udp
ufw allow ssh
ufw enable

# 4. Add server details to .env:
VPN_SERVER_IP="your-server-ip"
VPN_SERVER_PORT="51820"
WIREGUARD_PRIVATE_KEY="your-server-private-key"
WIREGUARD_PUBLIC_KEY="your-server-public-key"
```

### Step 8: Cloudflare Setup

```bash
# 1. Go to https://cloudflare.com
# 2. Add your domain
# 3. Update nameservers
# 4. Get API keys from dashboard
# 5. Add to .env:

CLOUDFLARE_API_TOKEN="your-api-token"
CLOUDFLARE_ZONE_ID="your-zone-id"
```

### Step 9: Development Environment

```bash
# 1. Start development server
npm run dev

# 2. Open http://localhost:3000

# 3. Test database connection
npm run db:studio

# 4. Run tests
npm test
```

### Step 10: Environment Variables

```bash
# Complete .env file:
# Database
DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Auth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# VPN
VPN_SERVER_IP="your-server-ip"
VPN_SERVER_PORT="51820"
WIREGUARD_PRIVATE_KEY="your-server-private-key"
WIREGUARD_PUBLIC_KEY="your-server-public-key"

# Cloudflare
CLOUDFLARE_API_TOKEN="your-api-token"
CLOUDFLARE_ZONE_ID="your-zone-id"

# JWT
JWT_SECRET="your-jwt-secret"
```

## 👨‍💻 Development

### Project Structure
```
guard-vpn/
├── src/
│   ├── components/         # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       └── Pricing.tsx
│   ├── pages/             # Next.js pages & API routes
│   │   ├── api/           # API endpoints
│   │   │   ├── auth/
│   │   │   │   └── login.ts
│   │   │   ├── servers.ts
│   │   │   └── socket.ts
│   │   ├── _app.tsx       # App wrapper
│   │   ├── _document.tsx  # Document structure
│   │   └── index.tsx      # Home page
│   ├── hooks/             # Custom React hooks
│   │   └── useVpnConnection.ts
│   ├── lib/               # Utilities & config
│   │   └── utils.ts
│   ├── styles/            # CSS files
│   │   └── globals.css
│   └── types/             # TypeScript types
│       └── index.ts
├── prisma/                # Database schema
│   └── schema.prisma
├── public/                # Static files
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind CSS config
├── next.config.js         # Next.js config
├── postcss.config.js      # PostCSS config
└── .env.example           # Environment variables template
```

### Development Commands
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run tests
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel --prod

# 4. Set environment variables in Vercel dashboard
```

### Backend (Railway)
```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
railway init

# 4. Deploy
railway up
```

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] VPN servers configured
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] Monitoring setup
- [ ] Backup strategy implemented

## 🔧 Troubleshooting

### Common Issues

**Database Connection:**
```bash
# Check connection
npx prisma db pull
```

**VPN Server:**
```bash
# Check WireGuard status
systemctl status wg-quick@wg0

# View logs
journalctl -u wg-quick@wg0
```

**Frontend Issues:**
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run dev
```

## 📚 Next Steps

1. **Security:** Implement rate limiting and DDoS protection
2. **Monitoring:** Set up logging and analytics
3. **Testing:** Add comprehensive test suite
4. **Documentation:** Create API documentation
5. **CI/CD:** Set up automated deployment pipeline

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
