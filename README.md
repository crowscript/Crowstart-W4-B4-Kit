# Crowstart W4-B4 Kit
---
This is a very basic starter kit for the project with Bootstrap 4 as a CSS framework and Webpack 4 as a module bundler.

## Table of Contents
---
- [Crowstart W4-B4 Kit](#Crowstart-W4-B4-Kit)
- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Status](#status)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Built With](#built-with)
  - [Requirements](#requirements)
    - [How install Requirements](#how-install-requirements)
  - [Dependencies](#dependencies)
    - [How install Dependencies](#how-install-dependencies)
- [How to Use](#how-to-use)
  - [webpack.config.js](#webpackconfigjs)
  - [index.html](#indexhtml)
  - [.gitkeep](#gitkeep)
  - [.gitignore](#gitignore)
  - [Git commands](#git-commands)
    - [Push changes to a Git repository](#push-changes-to-a-git-repository)
  - [Bootstrap](#bootstrap)
  - [PostCSS](#postcss)
  - [HTML5 Boilerplate](#html5-boilerplate)
  - [editorconfig](#editorconfig)
  - [Modernizr](#modernizr)


## About the Project
---
This is a very basic starter kit for project with Bootstrap 4 as a CSS framework and Webpack 4 as a module bundler. When you build the project, you will get in `dist` folder HTML files, where is automatically added `bundle.js` in the bottom of the body and `main.css` in the bottom of head tag.
In dist folder also will be created new three folders `css`, `img`, `js`, and every of these will contain files from your `src` folder.
Please feel free to clone this starter and change it how is suitable for your project.
The main benefit is creating separate files in separate folders, which is excellent for basic small projects.


## Status
---
![node](https://img.shields.io/node/v/webpack.svg)
![npm](https://img.shields.io/npm/v/webpack.svg)  ![build](https://img.shields.io/travis/webpack/webpack/master.svg)
![webpack](https://img.shields.io/badge/Webpack-v4.29.6-blue.svg)
![html](https://img.shields.io/badge/HTML-v5-orange.svg)
![sass](https://img.shields.io/badge/SASS-v3.7.3-pink.svg)
![bootstrap](https://img.shields.io/badge/Bootstrap-4.3.1-%23563d7c.svg)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)


## Directory Structure
---
```
┌── dist // all children folders and files are visible after build
│   ├── assets
│   │   ├── fonts
│   │   └── img
│   ├── css
│   │   └── main.css
│   ├── js
│   │   └── bundle.js
│   ├── .gitkeep
│   ├── .htacces
│   ├── about.html
│   ├── favicon.ico
│   ├── icon.png
│   └── index.html
├── src
│   ├── fonts
│   │   └── ...
│   ├── img
│   │   │── icons
│   │   │   └── favicon.ico
│   │   ├── bg.png
│   │   └── webpack4.jpg
│   ├── js
│   │   ├── index.js
│   │   ├── main.js
│   │   └── no-js-files.js
│   ├── scss
│   │   ├── base
│   │   │   ├── base.scss
│   │   │   └── index.scss
│   │   ├── layout
│   │   │   └── bootstrap
│   │   │   │   ├── scss
│   │   │   │   │   └── all bootstrap scss from node_modules
│   │   │   │   └── variables_custom.scss
│   │   │   └── index.scss
│   │   ├── modules
│   │   │   └── index.scss
│   │   ├── states
│   │   │   ├── index.scss
│   │   │   └── print.scss
│   │   ├── themes
│   │   │   └── index.scss
│   │   ├── utilities
│   │   │   └── vendor
│   │   │   │   └── normalize.scss
│   │   │   ├── colors.scss
│   │   │   ├── config.scss
│   │   │   ├── fonts.scss
│   │   │   ├── functions.scss
│   │   │   ├── index.scss
│   │   │   ├── mixins.scss
│   │   │   └── typography.scss
│   │   └── index.scss
│   ├── .htacces
│   ├── 404.html
│   ├── about.html
│   └── index.html
├── .editorconfig
├── .gitignore
├── .gitkeep
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js

```

## Getting Started
---
This section provide instructions for other developers how to use Crowstart W4-B4 Kit (Webpack 4 & Bootstrap 4)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- Clone this repo with `git clone https://github.com/crowscript/Crowstart-W4-B4-Kit.git` or download the zip. For this step, use npm terminal.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter.
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all [dependencies](#dependencies).
- In terminal, `npm run start` for server start (server itself won't to make dist folder, but all changes is visiable in browser) or/and enter `npm run build` to make dist folder.
- If Browser is not opened automaticly, please open in your browser this link `http://localhost:3000`.!
- Edit your code inside of the `src` folder.
- Your complied css, html, and javascript files will be created and updated in `dist/`. Never edit files within the `dist/` folder, as it gets deleted frequently.
- When you want to stop the webpack server, hit `ctrl + C`.


## Built With
---

- [Webpack 4](https://webpack.js.org/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [jQuery](https://jquery.com/)
- [SASS](https://sass-lang.com/)


### Requirements
What things you need to install the software and how to install them:

- Node/NPM

#### How install Requirements
How to install the requirements.

`npm install`

**tl;dr**: [Download Crowstart W4-B4 Kit](https://github.com/crowscript/Crowstart-W4-B4-Kit.git) and run `npm install` in that directory to get started.

To take advantage of Crowstart W4-B4 Kit you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.


### Dependencies
Dependencies that need to be installed for building/using your project
```
    "devDependencies": {
    "@babel/core": "^7.3.4",
    "@babel/preset-env": "^7.3.4",
    "autoprefixer": "^9.5.0",
    "babel-loader": "^8.0.5",
    "clean-webpack-plugin": "^2.0.1",
    "css-loader": "^2.1.1",
    "cssnano": "^4.1.10",
    "file-loader": "^3.0.1",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "node-sass-glob-importer": "^5.3.2",
    "postcss-loader": "^3.0.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "ttf-loader": "^1.0.2",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.7"
  },
```
#### How install Dependencies
All dependencies are will be installed with:
`
npm install
`

## How to Use
---
Open in your favorite code editor folder **Crowstart-W4-B4-Kit** and start editing files in `src` folder.
If you want to change something in Webpack

### webpack.config.js
Here is setup of Webpack. So please before change it, read the documentation of webpack [HERE](https://webpack.js.org/guides)
If you want to learn Webpack, check Colt Steele Youtube Channel [Colt Steele](https://www.youtube.com/watch?v=3On5Z0gjf4U&list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)

### index.html
This is the default HTML Boilerplate. Keep in mind - javascript and CSS will be automatically added in your HTML after build, so don't add them in `src/index.html` and `src/about.html`

### .gitkeep
This is the file to keep empty folder in Github commit.

### .gitignore
`.gitignore` should primarily be used to avoid certain project-level files and directories from
being kept under source control. Different development-environments will benefit from different collections of ignores.

For example, add the following to your `~/.gitconfig`, where the `.gitignore`
in your HOME directory contains the files and directories you'd like to
globally ignore:

```gitignore
[core]
    excludesfile = ~/.gitignore
```

IMPORTANT:
in `.gitignore` file in the line 59 you can find  **Build Systems** below of it you can change if you want to see in github your `dist` folder, just remove `dist/*`

- More on global ignores: https://help.github.com/articles/ignoring-files/
- Comprehensive set of ignores on GitHub: https://github.com/github/gitignore

### Git commands
#### Push changes to a Git repository
- Create your new files or edit existing files in `src` project directory.
- From the command line, enter `git status` so that you can check changes.
- Enter `git add .` at the command line to add the files or changes to the repository.

- Enter `git commit -m 'commit_message'` at the command line to commit new files/changes to the local repository. For the `commit_message` , you can enter anything that describes the changes you are committing.
- Enter `git push`  at the command line to copy your files from your local repository to remote repository (Github, Bitbucket etc).
- If prompted for authentication, enter your password.

### Bootstrap
How to use Bootstrap:
- [Bootstrap 4 Documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Bootstrap 4 cheatsheet](https://hackerthemes.com/bootstrap-cheatsheet/)

### PostCSS
A searchable catalog of PostCSS plugins:
- [PostCSS](https://www.postcss.parts/)

### HTML5 Boilerplate
[HTML5 Boilerplate](https://html5boilerplate.com/)

### editorconfig
[editorconfig](https://editorconfig.org/)

### Modernizr
Modernizr is not installed in this starter. If you need it `npm i modernizr`
Modernizr does three things:

- It adds classes indicating feature support, allowing you to apply different styling to elements depending on what features they support.
- It allows you to run feature detection to decide whether to run a script/run a polyfill or not.
- It injects html5shiv, which allows old browsers to understand HTML5 elements. `npm i html5shiv`
```
<!--[if lt IE 9]>
    <script src="../html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

## Changelog

**v1.0**
	- Just the basic version, in the next versions expect more features ;-)

## Authors
---
* **Stanislav Vranic** - *Web Developer* - [@crowscript](http://crowscript.com)

## License
---
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
[Choose the License](https://choosealicense.com/)

**[Back to top](#table-of-contents)**
