FROM debian:testing-slim
LABEL maintainer="mario.emilio.j@gmail.com"

ARG DEBIAN_FRONTEND=noninteractive

# Install texlive with xetex, node with yarn, and some utils
RUN apt-get update -q \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        git \
        gnupg \
        make \
        nodejs \
        texlive \
        texlive-xetex \
        wget \
        xz-utils \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update -q \
    && apt-get install -y yarn \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Install tex extensions and fonts with tlmgr
RUN tlmgr init-usertree \
    && tlmgr option repository http://mirror.ctan.org/systems/texlive/tlnet \
    && tlmgr install \
        fontawesome5 \
        sourcesanspro \
    ; tlmgr install \
        enumitem \
        environ \
        fontawesome5 \
        ifmtarg \ 
        sourcesanspro \
        tcolorbox \
        trimspaces \
        xifthen

ENV GATSBY_TELEMETRY_DISABLED 1
