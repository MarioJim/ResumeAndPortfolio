# ResumeAndPortfolio

![GitHub top language](https://img.shields.io/github/languages/top/MarioJim/ResumeAndPortfolio)
![GitHub language count](https://img.shields.io/github/languages/count/MarioJim/ResumeAndPortfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/MarioJim/ResumeAndPortfolio)
![GitHub deployment](https://img.shields.io/github/workflow/status/MarioJim/ResumeAndPortfolio/Continuous%20Deployment)
![GitHub pages](https://img.shields.io/github/deployments/MarioJim/mariojim.github.io/github-pages)

Repository to version control my resume and portfolio.

Managed with [Yarn workspaces](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/) and built with a [shell script](https://github.com/MarioJim/ResumeAndPortfolio/blob/master/build.sh).

Using the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) Visual Studio Code extension to generate the development environment needed to compile the LaTeX pdf and Gatsby project from a [Docker image](https://github.com/MarioJim/ResumeAndPortfolio/blob/master/Dockerfile).

Continuous deployment on every push thanks to [GitHub actions](https://github.com/MarioJim/ResumeAndPortfolio/blob/master/.github/workflows/deployment.yml), using the same Docker image.

## Data

TypeScript module to keep the same database for building my resume and my portfolio.

## Portfolio

My personal webpage, hosted on [GitHub Pages](https://mariojim.github.io/). Written in React and TypeScript and compiled with [Gatsby.js](https://www.gatsbyjs.org/).

## Resume

Compiles from template strings in TypeScript to LaTeX and finally to pdf. Hosted on [GitHub Pages](https://mariojim.github.io/resume.pdf) and forked from [Awesome-CV](https://github.com/posquit0/Awesome-CV/).

## Languages widget

Using a virtual DOM, creates a SVG element of a graph with my most used languages with data pulled from the GitHub GraphQL API. Inspired in [anuraghazra's similar card](https://github.com/anuraghazra/github-readme-stats#top-languages-card)
