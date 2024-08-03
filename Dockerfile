FROM node:22-bullseye-slim
LABEL maintainer="mario.emilio.j@gmail.com"

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get install -y ca-certificates curl git libgraphite2-3 make --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && curl --proto '=https' --tlsv1.2 -fsSL https://drop-sh.fullyjustified.net |sh \
    && mv tectonic /usr/bin/

ENV NEXT_TELEMETRY_DISABLED 1
