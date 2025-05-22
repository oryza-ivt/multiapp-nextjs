# multiapp-nextjs
- 2 NextJS apps: transaction-app, transfer-app.
- Docker compose contains those 2 apps + 1 nginx as reverse proxy.

## How to run locally
1. Open 3 tabs of `cmd` terminal.
2. On **1st tab**, cd to transaction-app: 
   ```cmd
   cd transaction-app
   ```
3. On **2nd tab**, cd to transfer-app: 
   ```cmd
   cd transfer-app
   ```
4. On **3rd tab**, keep at the current path (`\multiapp-nextjs`).
5. On **1st tab** (transaction-app) build the image: 
   ```cmd
   docker build -t transaction-app .
   ```
6. On **2nd tab** (transfer-app) build the image: 
   ```cmd 
   docker build -t transfer-app .
   ```
7. On **3rd tab** (root project) do compose up: 
   ```cmd
   docker compose up -d
   ```
8. To terminate, on **3rd tab** (root project) do compose down: 
   ```cmd
   docker compose down
   ```