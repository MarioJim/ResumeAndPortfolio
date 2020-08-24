# ResumeAndPortfolio

![GitHub top language](https://img.shields.io/github/languages/top/MarioJim/ResumeAndPortfolio)
![GitHub language count](https://img.shields.io/github/languages/count/MarioJim/ResumeAndPortfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/MarioJim/ResumeAndPortfolio)
![GitHub deployments](https://img.shields.io/github/deployments/MarioJim/mariojim.github.io/github-pages)

Repository to version control my resume and portfolio.

Managed with [Yarn workspaces](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/) and built with a [shell script](https://github.com/MarioJim/ResumeAndPortfolio/blob/master/build.sh).

## Data

TypeScript module to keep the same database for building my resume and my portfolio.

## Portfolio

My personal webpage, hosted on [GitHub Pages](https://mariojim.github.io/). Written in React and TypeScript and compiled with [Gatsby.js](https://www.gatsbyjs.org/).

## Resume

Compiles from template strings in TypeScript to LaTeX and finally to pdf. Hosted on [GitHub Pages](https://mariojim.github.io/resume.pdf) and forked from [Awesome-CV](https://github.com/posquit0/Awesome-CV/).

### Installation

Using [texlive-core](https://www.archlinux.org/packages/extra/any/texlive-core/) and [tllocalmgr-git](https://aur.archlinux.org/packages/tllocalmgr-git/) to install these dependencies from CTAN:

- enumitem
- environ
- ifmtarg
- sourcesanspro
- tcolorbox
- trimspaces
- xifthen
- fontawesome5
