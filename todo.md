# VPS Deployment Options

## Option 1: Docker + GitHub Actions (Recommended)
- [ ] Containerise the app with Docker for consistent deployment
- [ ] Set up GitHub Actions to build and push to Docker Hub/GitHub Container Registry
- [ ] Configure VPS to run Docker container with automatic pulls via webhook or cron
- **Benefits**: Clean separation, easy rollbacks, scalable

## Option 2: Direct Git Pull + PM2
- [ ] Clone repo directly on VPS
- [ ] Set up PM2 to manage the Node.js process
- [ ] Configure GitHub webhook to trigger pull + rebuild on push
- **Benefits**: Simple, no containers needed

## Option 3: Astro SSR Mode + Caddy
- [ ] Convert to Astro SSR for dynamic content
- [ ] Set up Caddy as reverse proxy with automatic HTTPS
- [ ] Configure systemd service for process management
- **Benefits**: Dynamic features, professional setup

## Option 4: CI/CD with Self-Hosted Runner
- [ ] Install GitHub Actions runner on VPS
- [ ] Set up direct deployment from Actions workflow
- [ ] Configure rsync or scp for file transfers
- **Benefits**: Full CI/CD control, no external dependencies