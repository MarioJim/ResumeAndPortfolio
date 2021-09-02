FROM rust:1.54 as builder

# Install tectonic dependencies
RUN apt-get update \
    && apt-get install -y \
        libfontconfig1-dev \
        libgraphite2-dev \
        libharfbuzz-dev \
        libicu-dev \
        libssl-dev \
        zlib1g-dev

# Build tectonic binary
RUN cargo install tectonic --version 0.7.1 --features external-harfbuzz

FROM node:16-buster-slim
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

# Run tectonic once and delete the files to cache fonts and packages
RUN cd /root \
    && git clone https://github.com/MarioJim/ResumeAndPortfolio.git \
    && make resume -C ResumeAndPortfolio \
    && rm -r ResumeAndPortfolio

ENV NEXT_TELEMETRY_DISABLED 1
