# Crowstart W4-B4 Kit
---

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
  - [Bootstrap](#bootstrap)
  - [PostCSS](#postcss)
- [Changelog](#changelog)
- [Authors](#authors)
- [License](#license)

## About the Project
---
This is a very basic starter for a Bootstrap 4 project with Webpack. When you build the project, you will get in `dist` folder HTML files, where is automatically added `bundle.js` in the bottom of the body and `main.css` in the bottom of head tag.
In dist folder also will be created new folder `assets`, and inside it, three folders `css`, `img`, `js`, and every of these will contain files from your `src` folder.
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
│   │   ├── css
│   │   │   └── main.css
│   │   ├── img
│   │   │   └── webpack4.jpg
│   │   └── js
│   │       └── bundle.js
│   ├── about.html
│   ├── index.html
│   └── .gitkeep
├── src
│   ├── img
│   │   └── webpack4.jpg
│   ├── js
│   │   ├── index.js
│   │   ├── main.js
│   │   └── no-js-files.js
│   ├── scss
│   │   ├── css
│   │   │   └── bootstrap
│   │   │       ├── bootstrap.scss
│   │   │       └── variables.scss
│   │   ├── index.scss
│   │   └── main.scss
│   ├── about.html
│   └── index.html
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
    "postcss-loader": "^3.0.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
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

### index.html
This is the default HTML skeleton. Keep in mind - javascript and CSS will be automatically added in your HTML after build, so don't add them in `src/index.html` and `src/about.html`

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

## Changelog

**v1.0**
	- Just the basic version, in the next versions expect more features ;-)

## Authors
---
* **Stanislav Vranic** - *Developing* - [@crowscript](http://crowscript.com)

## License
---
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
[Choose the License](https://choosealicense.com/)


**[Back to top](#table-of-contents)**



