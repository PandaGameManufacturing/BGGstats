## How to Run This App

In the root folder, run `npm install`.

This will download dependencies, open [http://localhost:9966/webpack-dev-server/](http://localhost:9966/webpack-dev-server/) where the app will load in a few seconds, and boot up `webpack-dev-server` for you.

## Developement Environment
This app uses [Webpack](https://webpack.github.io/) to modularize code and automate tasks. NPM scripts are configured in the `package.json` file. They are being used so you can easily access commands of local node modules without having to install anything globally. Webpack is being configured in `webpack.config.js`.

### Webpack Dev Server
In this project, the Webpack Dev Server is configured to live-reload changes you make. It creates the latest version of the app on the fly, even though it does **not** compile code.
* **`npm start`** Start Webpack Dev Server and be send to the URL where the app loads
* **`npm stop`** Stop Webpack Dev Server
* **`npm restart`** Stop and then start Webpack Dev Server

### Compile Code
* **`npm run compile`** Compile once to see changes live reload in Webpack Dev Server
* **`npm run watch`** Compile continuously to see changes live reload in Webpack Dev Server

### Linting
`jshint` runs in the background and will halt watch functionality until code is lint free. You can supress specific errors across the project in the `js/.jshintrc` file.

### Production
If you're deploying your app, read the `PRODUCTION-README` in the  `dist` folder. `npm run build` sends the right production assets to the dist folder, but you'll still need to change a few lines of code here and there with this current configuration.