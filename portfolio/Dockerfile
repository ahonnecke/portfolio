# Build stage
FROM node:21 AS build
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . ./

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

# Set proper ownership
RUN chown -R node:node /app

# Run as non-root
USER node

# Expose port 3000 for Digital Ocean
ENV PORT=3000
EXPOSE 3000

# Bind to $PORT so DO's probe works
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
