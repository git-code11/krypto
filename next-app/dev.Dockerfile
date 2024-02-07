## syntax=docker/dockerfile:1

ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-alpine

RUN corepack enable

WORKDIR /app

# Install dependencies based on the preferred package manager
#COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

COPY package*.json pnpm-lock.yaml* ./

RUN --mount=type=cache,id=pnpm_cache,target=/store/pnpm \
  #--mount=type=cache,id=yarn_cache,target=/store/yarn \
  #yarn config set /store/yarn && yarn global add pnpm && \
  pnpm set store-dir /store/pnpm && pnpm config set package-import-method copy && pnpm install;
# RUN --mount=type=cache,target=~/.npm \
# RUN --mount=type=cache,target=~/.npm \
#   --mount=type=cache,target=~/.cache/yarn \
#   --mount=type=cache,target=/usr/local/share/.cache/yarn \
#   --mount=type=cache,target=~/.cache/pnpm \
#   --mount=type=cache,target=~/.local/share/pnpm/store \
#   if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
#   elif [ -f package-lock.json ]; then npm ci; \
#   elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
#   # Allow install without lockfile, so example works even without Node.js installed locally
#   else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn global add pnpm && pnpm i; \
#   fi
# COPY src ./src
# COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager

CMD pnpm dev -H 0.0.0.0
# CMD \
#   if [ -f yarn.lock ]; then yarn dev; \
#   elif [ -f package-lock.json ]; then npm run dev; \
#   elif [ -f pnpm-lock.yaml ]; then pnpm dev; \
#   else yarn dev; \
#   fi
