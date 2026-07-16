# Build stage
FROM node:21 AS build
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . ./

# Build the application (Vite copies public/ verbatim into dist/, so the
# vendored prototype under public/prototypes/ ships as static files)
RUN npm run build

# Runtime: nginx serving the static build.
#
# This replaced `serve -s dist`. `serve -s` rewrites every non-file path to the
# SPA shell, which makes it impossible to host a nested static app — a prototype
# under /prototypes/ would be hijacked by the portfolio's index.html. nginx with
# an explicit /prototypes/ location serves the nested app while keeping SPA
# fallback for the portfolio's own client-side routes. See nginx.conf.
FROM nginx:alpine AS runner

# Full replacement of the default config (which only include-serves conf.d).
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

# DO's App Platform routes to http_port 3000; nginx listens there (see conf).
EXPOSE 3000

# nginx:alpine's default CMD runs `nginx -g "daemon off;"` in the foreground.
