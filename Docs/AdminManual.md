# Administration Manual for the game Tic-Tac-Toe

## Introduction 
---
This is a manual for the Tic-Tac-Toe program created as a late-term assignment in a software development course at Reykjavik University.

## System Application
----
The system's purpose is to test a Tic-Tac-Toe game created through continuous integration and regular testing. It is a real-world application is limited as it was created as an assignment to teach various techniques in software development.

---
## The necessary software needed for this project
By clicking each name it will allow you to follow the link and help you how to download as well as installing the items needed. Do note that the installation guide can be found in the development manual

* [Node](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/downloads)
* [Heroku](https://devcenter.heroku.com/articles/heroku-cli)
* [TravisCI](https://github.com/travis-ci/travis.rb)
* [Webpack](https://webpack.js.org/)

----

## Deploying, running and maintaining the project
After installing the necessary softwares. Follow the next steps..

You need to have a github account, if you already have one, you can make one [here](https://github.com/).

There you clone the project to your computer with this : git@github.com:ComputerFriendz/TicTacToe.git 

---
## Installing required plugins

After installing both node and git you should be able to connect to the local repository after cloning it and typing `node --version`. You should see either "v8.12.0" or "v10.11.0". Also check on `node --version`.
When you have verified the versions you should be able to install jest. A few plugins are required to run this project, by typing `npm install --save-dev` and then the name of the plugin, they should install. 
so start with "jest", if that worked you should continue down the list.
* jest
* webpack
* webpack-cli
* webpack-dev-server
* html-webpack-plugin
* clean-webpack-plugin
* supertest
* lodash
* style-loader
* express
* ccs-loader
* babel-cli
* babel-core
* babel-loader
* babel-present-env
* jquery
* puppeteer
*puppeteer-screenshot-tester



### Connecting plugins to repository

Two plugins that need to be connected through a browser are Circle CI and Heroku. those have already been connected to the repository but keep them n mind if you plan on working on the code

---
In order for the project to deploy and run ..... There you should be able to run the program on http://localhost:5000

If you want to get access to the latest version of the repository, it is necessary to access the project root and type 

`git pull origin master`

---
##### Feel free to contact us anytime if you have any questions related to the program at
`John.Google@TheGoogleEmailCompany.com`
