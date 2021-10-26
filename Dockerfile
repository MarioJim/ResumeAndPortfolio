FROM node:16-bullseye-slim
LABEL maintainer="mario.emilio.j@gmail.com"

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get install -y ca-certificates curl git libgraphite2-3 make --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && curl -Lo tectonic.tar.gz https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%400.8.0/tectonic-0.8.0-x86_64-unknown-linux-gnu.tar.gz \
    && tar -xf tectonic.tar.gz \
    && rm tectonic.tar.gz \
    && mv tectonic /usr/bin/

ENV NEXT_TELEMETRY_DISABLED 1
