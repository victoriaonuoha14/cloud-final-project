Dockerized Two-tier App with GitHub CI/CD
A 2-tier To-Do application (frontend + backend) built with JavaScript, containerized with Docker, and deployed to an Azure Virtual Machine using GitHub Actions CI/CD.

Live Demo
http://http://172.167.178.197/
(Accessible on port 80 only — no port number required)

Project Overview
1.Frontend: Static HTML/CSS/JavaScript
2.Backend: Node.js + Express REST API 
3.Containerization: Docker with multi-stage builds
4.Orchestration: docker-compose.yml for local and cloud deployment
5.CI/CD: GitHub Actions automates build, push, and deployment
6.Cloud: Deployed on Azure Ubuntu VM with public IP

Build Process
1.npm install → installs dependencies (node_modules)
2.npm run build → generates production-ready dist/ folder
3.Docker uses multi-stage builds to deploy only the dist/ output
4.Frontend served via Nginx; backend runs as Node.js service

Features
1.Add, delete, and mark todos as complete or pending
2.Real-time data loading from backend API (/api/tasks)
3.Clean, responsive UI
4.Fully automated deployment pipeline

Repository Structure

cloud-final-project/
├── frontend/               
│   ├── src/index.html
│   ├── package.json
│   └── Dockerfile
├── backend/                
│   ├── src/index.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml      
├── .github/workflows/ci-cd.yml  
└── screenshots/Demo link - https://share.vidyard.com/watch/KFZk52LDVyQh4Gva7qPRGS            

Run Locally
bash
1.git clone https://github.com/victoriaonuoha14/cloud-final-project.git
2.cd cloud-final-project
3.docker-compose up --build

CI/CD Workflow
On every git push to master:
1.Builds Docker images for frontend and backend
2.Pushes images to Docker Hub
3.SSH into Azure VM and redeploys using docker-compose

Submission Requirements Met
1.Dockerfiles for frontend and backend
2.docker-compose.yml
3.Images pushed to Docker Hub
4.App deployed on Azure VM
5.Public access via port 80 only
6.GitHub Actions CI/CD automation
7.Documentation and screenshots included

