###############################################################################################
# THILO API - BASE
###############################################################################################
FROM node:20-slim as thilo-api-base

RUN mkdir -p /docker
WORKDIR /srv/app

ENV NODE_ENV=production

###############################################################################################
# THILO API - PRODUCTION
###############################################################################################
FROM thilo-api-base as thilo-api-production

# Install dos2unix
RUN apt-get update && apt-get install -y dos2unix && rm -rf /var/lib/apt/lists/*

# Copy and configure scripts
COPY ./docker/custom_entrypoint.sh /docker/custom_entrypoint.sh
COPY ./docker/set_env_secrets.sh /docker/set_env_secrets.sh
RUN chmod +x /docker/custom_entrypoint.sh /docker/set_env_secrets.sh && \
    dos2unix /docker/custom_entrypoint.sh /docker/set_env_secrets.sh

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts

# Copy application code
COPY . .

# Build application
RUN NODE_ENV=production npm run build

EXPOSE 1337
ENTRYPOINT [ "/docker/custom_entrypoint.sh" ]
