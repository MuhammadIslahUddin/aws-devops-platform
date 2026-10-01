# AWS DevOps CI/CD Platform

> **Muhammad Islah Uddin** | [LinkedIn](https://linkedin.com/in/muhammad-islah-uddin-941335196)
> BSCS Graduate | Aspiring DevOps & Cloud Engineer

## Overview
Complete production-style DevOps platform: code commit → automated test → Docker build → security scan → ECR push → EC2 deployment → health check.

## Architecture

Developer Git Push
↓
GitHub Repository
↓
GitHub Actions CI/CD
├─ Checkout Code
├─ Install Dependencies
├─ Run Unit Tests
├─ Build Docker Image
├─ Security Scan (Trivy)
├─ Authenticate via OIDC
├─ Push to Amazon ECR
└─ Deploy to EC2 + Health Check
↓
Amazon ECR — Docker Image Storage
↓
EC2 Ubuntu Server
├─ Docker Runtime
├─ Nginx Reverse Proxy
├─ Node.js Application
└─ CloudWatch Monitoring
↓
CloudWatch — Logs & Metrics
plaintext

## Tech Stack
| Component | Technology |
|---|---|
| Application | Node.js 20 + Express |
| Containerization | Docker (non-root) |
| CI/CD | GitHub Actions |
| Infrastructure as Code | Terraform |
| Cloud Provider | AWS |
| AWS Services | VPC, EC2, ECR, IAM, CloudWatch |
| Auth Method | OIDC (no long-lived credentials) |
| Reverse Proxy | Nginx |

## Project Structure
aws-devops-platform/
├── app/ # Node.js application
│ ├── src/server.js # API endpoints
│ ├── tests/health.test.js # Unit tests
│ ├── package.json
│ └── Dockerfile
├── terraform/ # AWS infrastructure
│ ├── provider.tf
│ ├── variables.tf
│ ├── vpc.tf
│ ├── security.tf
│ ├── ec2.tf
│ ├── ecr.tf
│ ├── iam.tf
│ ├── outputs.tf
│ └── terraform.tfvars.example
├── scripts/ # Deployment helpers
│ ├── deploy.sh
│ └── health-check.sh
├── .github/workflows/
│ └── deploy.yml # CI/CD pipeline
├── config/
│ └── nginx-app.conf # Nginx configuration
├── docs/ # Documentation
│ ├── architecture.md
│ └── deployment.md
├── .gitignore
├── README.md
└── LICENSE
plaintext

## License
MIT
Save: Ctrl+O → Enter → Ctrl+X
File 3: LICENSE
bash
nano LICENSE
Paste:
plaintext
MIT License

Copyright (c) 2026 Muhammad Islah Uddin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
