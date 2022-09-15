FROM node:16 as build

# Variables
ARG NODE_ENV=prod
ARG NODE_OPTIONS="--max_old_space_size=4096"
ENV NG_CLI_ANALYTICS=ci \
    NODE_ENV=${NODE_ENV} \
    NODE_OPTIONS=${NODE_OPTIONS}

# Setup
RUN npm config set unsafe-perm true && \
    mkdir /app
WORKDIR /app
COPY . .

# Install
RUN if [ ! -d "dist" ] && [ ! -d "node_modules" ]; then npm install; fi

# Build
RUN BUILD_MODE=$([ "$NODE_ENV" = "prod" ] && echo "dynmaic-prod" || echo "dynamic") && \
	if [ ! -d "dist" ]; then npm run "build:$BUILD_MODE"; fi

# Use Nginx to serve
FROM nginx:1.20-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/robots.txt /usr/share/nginx/html/robots.txt
COPY docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
