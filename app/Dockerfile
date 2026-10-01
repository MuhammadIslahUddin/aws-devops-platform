# Use specific lightweight Node.js image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Install dependencies first (caching optimization)
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to non-root user
USER appuser

# Expose application port
EXPOSE 3000

# Set environment variable
ENV VERSION=1.0.0

# Start application
CMD ["node", "src/server.js"]
