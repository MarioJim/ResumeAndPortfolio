# ResumeAndPortfolio

![GitHub top language](https://img.shields.io/github/languages/top/MarioJim/ResumeAndPortfolio)
![Lines of code](https://tokei.rs/b1/github/MarioJim/ResumeAndPortfolio?category=code)
![GitHub last commit](https://img.shields.io/github/last-commit/MarioJim/ResumeAndPortfolio)
![GitHub pages](https://img.shields.io/github/deployments/MarioJim/mariojim.github.io/github-pages)
![Continuous Deployment](https://github.com/MarioJim/ResumeAndPortfolio/workflows/Continuous%20Deployment/badge.svg)
![Scheduled updates](https://github.com/MarioJim/ResumeAndPortfolio/workflows/Scheduled%20updates/badge.svg)

Repository to version control my resume and portfolio.

Managed with [Yarn workspaces](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/) and built with [make](Makefile).

Using the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) Visual Studio Code extension to generate the development environment needed to compile the LaTeX pdf and Gatsby project from a [Docker image](Dockerfile).

Continuous deployment on [every push](.github/workflows/cd_push.yml) and [twice a month](.github/workflows/cd_schedule.yml) thanks to GitHub Actions, using the same Docker image.

## Data

TypeScript module to keep the same database for building my resume and my portfolio.

## Portfolio

My personal webpage, hosted on [GitHub Pages](https://marioj.dev/). Written in React and TypeScript and compiled with [Next.js](https://nextjs.org/).

## Resume

Compiled using [tectonic](https://tectonic-typesetting.github.io/) from template strings in TypeScript to LaTeX and finally to pdf. Hosted on [GitHub Pages](https://marioj.dev/mario_jimenez_resume.pdf) and forked from [Awesome-CV](https://github.com/posquit0/Awesome-CV/).

## Languages widget

Creates a graph of my most used languages with data pulled from the GitHub GraphQL API and renders it into a SVG using React and ReactDOMServer. Inspired by [anuraghazra's similar card](https://github.com/anuraghazra/github-readme-stats#top-languages-card)
