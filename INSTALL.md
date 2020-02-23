# Install
## Dependencies
### General
 - [lerna](https://www.npmjs.com/package/lerna) installed globally

### Portfolio
Everything is installed from npm.

### Resume
First I installed [texlive-core](https://www.archlinux.org/packages/extra/any/texlive-core/) and [texlive-localmanager-git](https://aur.archlinux.org/packages/texlive-localmanager-git/) (with the pkgver() change from @cobalspace).

In tllocalmgr I ran `status` to update my packages and then I installed:
 - enumitem
 - environ
 - ifmtarg
 - sourcesanspro
 - tcolorbox
 - trimspaces
 - xifthen

And then ran `texhash` to update the database.

