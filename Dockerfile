FROM node:16-bullseye-slim as tectonic-dl

# Download and extract tectonic
RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get install -y ca-certificates curl \
    && rm -rf /var/lib/apt/lists/* \
    && curl -Lo tectonic.tar.gz https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%400.7.1/tectonic-0.7.1-x86_64-unknown-linux-gnu.tar.gz \
    && tar -xf tectonic.tar.gz

FROM node:16-bullseye-slim
LABEL maintainer="mario.emilio.j@gmail.com"

# Copy tectonic binary to new image
COPY --from=tectonic-dl /tectonic /usr/bin/

# Install dependencies
RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get install -y ca-certificates git libgraphite2-3 make --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Run tectonic once and delete the files to cache fonts and packages
RUN cd /root \
    && git clone https://github.com/MarioJim/ResumeAndPortfolio.git \
    && make resume -C ResumeAndPortfolio \
    && rm -r ResumeAndPortfolio \
    && yarn cache clean

ENV NEXT_TELEMETRY_DISABLED 1
