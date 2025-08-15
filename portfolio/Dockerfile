# Build stage
FROM node:21 AS build
WORKDIR /app

# Debug: Show directory contents
RUN ls -la

# Copy package files first for better caching
COPY package*.json ./

# Debug: Show what was copied
RUN ls -la

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Debug: Show what we have before building
RUN ls -la && cat package.json

# Build the application
RUN npm run build

# Runtime
FROM node:21-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install static server
RUN npm install -g serve

# Copy built files
COPY --from=build /app/dist ./dist

# Run as non-root
USER node

# Expose DO's expected port
ENV PORT=8080
EXPOSE 8080

# Bind to $PORT so DO's probe works
CMD ["sh", "-lc", "serve -s dist -l ${PORT}"]
