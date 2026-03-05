
# Home Cloud Server (Docker + Nginx Proxy Manager) — Clean Version (Routing by Container Name)

This guide builds a **home hosting server on Ubuntu** using your Lenovo laptop.

Your server will host **multiple projects** (React apps, Node APIs, etc.) using:

- Docker
- Docker networks
- Nginx Proxy Manager (NPM)
- Automatic HTTPS with Let's Encrypt

Unlike simple setups, this version **routes apps by container name instead of random ports**.

Example architecture:

Internet
    |
Domain (Namecheap)
    |
Router Port Forward
    |
Ubuntu Server (Lenovo)
    |
Docker Network
    |
Nginx Proxy Manager
    |
Containers
   ├── portal
   ├── api
   ├── portfolio
   └── future apps

------------------------------------------------------------

# Phase 1 — Prepare Ubuntu

Update system:

sudo apt update
sudo apt upgrade -y

Disable sleep (server must stay awake):

sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target

Install basic tools:

sudo apt install -y curl git ufw

------------------------------------------------------------

# Phase 2 — Install Docker

Install Docker:

sudo apt install -y ca-certificates curl gnupg

sudo install -m 0755 -d /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

------------------------------------------------------------

# Allow Docker without sudo

sudo usermod -aG docker $USER

Then reload group:

newgrp docker

Test docker:

docker run hello-world

------------------------------------------------------------

# Phase 3 — Create Home Cloud Folder

mkdir -p ~/home-cloud

cd ~/home-cloud

------------------------------------------------------------

# Phase 4 — Create Shared Docker Network

This is the key improvement.

docker network create homecloud

All containers will communicate internally.

------------------------------------------------------------

# Phase 5 — Install Nginx Proxy Manager

Create docker compose file:

nano docker-compose.yml

Paste:

services:
  npm:
    image: jc21/nginx-proxy-manager:latest
    container_name: npm
    restart: unless-stopped
    ports:
      - "80:80"
      - "81:81"
      - "443:443"
    volumes:
      - ./npm-data:/data
      - ./npm-letsencrypt:/etc/letsencrypt
    networks:
      - homecloud

networks:
  homecloud:
    external: true

Start it:

docker compose up -d

------------------------------------------------------------

# Phase 6 — Open Admin Interface

Open browser:

http://YOUR_LOCAL_IP:81

Default login:

Email: admin@example.com
Password: changeme

Change credentials immediately.

------------------------------------------------------------

# Phase 7 — Run First App (Example Container)

Create app folder:

mkdir -p ~/home-cloud/apps/hello

cd ~/home-cloud/apps/hello

Create HTML:

nano index.html

Add:

<h1>Hello from Home Cloud 🚀</h1>

------------------------------------------------------------

Create Dockerfile:

nano Dockerfile

FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html

------------------------------------------------------------

Build container:

docker build -t hello-app .

Run container:

docker run -d \
--name hello \
--network homecloud \
--restart unless-stopped \
hello-app

Notice:

No ports exposed.
NPM will connect directly via Docker network.

------------------------------------------------------------

# Phase 8 — Connect App in Nginx Proxy Manager

Open NPM → Proxy Hosts → Add Proxy Host

Domain:
hello.local (temporary)

Forward Hostname:

hello

Forward Port:

80

Because Docker network allows container name resolution.

------------------------------------------------------------

# Phase 9 — Firewall

Enable firewall:

sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable

------------------------------------------------------------

# Phase 10 — Router Setup

In router settings:

Port Forward:

80 → your Ubuntu server
443 → your Ubuntu server

Also set a DHCP reservation so your Lenovo always has the same local IP.

------------------------------------------------------------

# Phase 11 — When You Buy Your Domain (Namecheap)

Example domain:

mycloudserver.com

In Namecheap Advanced DNS:

A record:

@ → YOUR_PUBLIC_IP

Subdomains:

portal → YOUR_PUBLIC_IP
api → YOUR_PUBLIC_IP
app → YOUR_PUBLIC_IP

------------------------------------------------------------

# Phase 12 — Enable SSL

In Nginx Proxy Manager:

Edit proxy host

Enable:

Request new SSL certificate
Force SSL
HTTP/2

Now your site becomes:

https://portal.yourdomain.com

------------------------------------------------------------

# Phase 13 — Deploy React App

Inside your React project:

npm install
npm run build

Create Dockerfile:

FROM nginx:alpine
COPY build /usr/share/nginx/html

Build image:

docker build -t react-portal .

Run container:

docker run -d \
--name portal \
--network homecloud \
--restart unless-stopped \
react-portal

In NPM:

Domain:
portal.yourdomain.com

Forward Host:

portal

Port:

80

------------------------------------------------------------

# Phase 14 — Deploy Node API

Dockerfile:

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node","server.js"]

Build:

docker build -t api-server .

Run:

docker run -d \
--name api \
--network homecloud \
--restart unless-stopped \
api-server

In NPM:

Domain:
api.yourdomain.com

Forward Host:

api

Port:

3000

------------------------------------------------------------

# Phase 15 — Useful Docker Commands

View running containers:

docker ps

View logs:

docker logs container-name

Restart container:

docker restart container-name

Stop container:

docker stop container-name

------------------------------------------------------------

# Final Result

You now have your own **home cloud server**.

Capabilities:

Host unlimited apps
Automatic HTTPS
Multiple domains
Docker isolation
Central routing

Your Lenovo becomes a **mini cloud platform**.

