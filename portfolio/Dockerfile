# Build stage
FROM node:21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
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
