FROM rust:1.51 as builder

# Install tectonic dependencies
RUN apt-get update \
    && apt-get install -y \
        libfontconfig1-dev \
        libgraphite2-dev \
        libharfbuzz-dev \
        libicu-dev \
        zlib1g-dev

# Build tectonic binary
RUN cargo install tectonic --version 0.4.1

FROM node:14-buster-slim
LABEL maintainer="mario.emilio.j@gmail.com"

# Install dependencies
RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        git \
        libfontconfig1 \
        libgraphite2-3 \
        libharfbuzz0b \
        libharfbuzz-icu0 \
        libicu63 \
        libssl1.1 \
        make \
        zlib1g \
    && rm -rf /var/lib/apt/lists/*

# Copy tectonic binary to new image
COPY --from=builder /usr/local/cargo/bin/tectonic /usr/bin/

ENV NEXT_TELEMETRY_DISABLED 1
