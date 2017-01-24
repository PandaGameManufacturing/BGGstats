![Tabletop Tracker](http://www.tabletoptracker.com/images/tabletop-tracker-large.png "Table Top Tracker")

[TabletopTracker.com](http://www.tabletoptracker.com/) tracks which new board games deserve your attention among the thousands of games that are published each year.

Rankings are based on the number and quality of user ratings on [BoardGameGeek.com](http://boardgamegeek.com/). Data is calculated daily. Hover over the title of a chart for more details.

Tabletop Tracker was created and is maintained by [Nathan T. Baker](http://nathantbaker.com/). Subscribe to the [Tabletop Tracker email list](http://eepurl.com/ctZUa5) to learn when new charts and features are added.

### Server-Side Logic
Tabletop Tracker is deployed on Heroku where the Tabletop Tracker node.js crawler runs daily. After crawling data, the app makes API calls, manipulates data, and pushes up data to a database. When a user visits the website all board game data can be pulled down with one call since all relevent data is cached daily.

## Local Development

To boot up this app locally:
1. In the root folder, run `npm install` to download dependencies.
1. Run `npm run server`.

This will open [http://localhost:9966/webpack-dev-server/](http://localhost:9966/webpack-dev-server/) where the app will load in a few seconds, and boot up `webpack-dev-server` for you.

## Developement Environment

This app uses [Webpack](https://webpack.github.io/) to modularize code and automate tasks. NPM scripts are configured in the `package.json` file. They are being used so you can easily access commands of local node modules without having to install anything globally. Webpack is configured in `webpack.config.js`. Webpack Dev Server is configured to live-reload changes you make (except sass). It creates the latest version of the app on the fly, even though it does **not** compile code.

## Scripts

* **`npm run server`** Start Webpack Dev Server and be send to the URL where the app loads
* **`npm run watch`** Compile continuously to see changes live reload in Webpack Dev Server (except sass)
* **`npm run build`** Compile sass to public folder and move copy of images folder to the right place.

### Linting
`jshint` runs in the background and will halt watch functionality until code is lint free. You can configure jshint across the project in the `javascripts/.jshintrc` file.