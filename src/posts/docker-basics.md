---
title: "Docker Basics for Developers"
description: "Learn the fundamentals of Docker and containerization"
author: "Lisa Wang"
tags: ["docker", "devops", "containers", "deployment"]
image: "/assets/images/posts/post1.jpg"
---

# Docker Basics for Developers

Docker has revolutionized how we deploy and run applications. Let's learn the basics of containerization with Docker.

## Core Concepts

- Containers
- Images
- Dockerfile
- Docker Compose

## Example Dockerfile

```dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

## Common Commands

1. `docker build -t myapp .`
2. `docker run -p 3000:3000 myapp`
3. `docker-compose up`
4. `docker ps`
