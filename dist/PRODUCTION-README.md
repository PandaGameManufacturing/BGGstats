# How to Get Your Project Ready for Production
`npm run build` sends the right production assets to the dist folder, but you'll still need to change a few lines of code here and there with this current configuration to re-connect the right things.

1. Run `npm run build`. Keep in mind running this again after making changes in the `dist` folder will overwrite them.
1. In `dist/css/style.css` delete the `@import url("/node_modules/bootstrap/dist/css/bootstrap.min.css");` line.
1. In `dist/index.html`, add a ` <link rel="stylesheet" href="css/bundle.css">` css script.
1. In `dist/index.html`, before the `</body>` tag makes sure there's a `<script type="text/javascript" src="bundle.js" charset="utf-8"></script>`  tag to bundle.js
1. Run something like `http-server` in the `dist` folder and open `http://localhost:8080/`. If the project is running well there without errors, try copying all your files from the dist folder to a live server to test your app.