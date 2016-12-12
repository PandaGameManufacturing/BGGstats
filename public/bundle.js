/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = "<!-- Development index.html in root. Production index.html in dist folder -->\n<html>\n  <head>\n    <title>BGG Stats - Track Board Games on the Rise</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"icon\" href=\"data:;base64,iVBORwOKGO=\" />\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/public/css/bundle.css\">\n  </head>\n  <body>\n    <header>\n      <!-- Logo/tagline/social share icons  -->\n      <div class=\"row\">\n\n        <div class=\"col-sm-12 col-md-1 col-lg-1 logo-wrapper\">\n          <img id=\"logo\" src=\"/public/images/BGGstats.png\" alt=\"Board Game Geek Stats\">\n        </div>\n\n        <!-- Search -->\n<!--           <div class=\"col-sm-6 col-md-6 col-lg-6\">\n\n          <input type=\"text\" class=\"form-control text-center\" id=\"input\" placeholder=\" BoardGameGeek Username\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n\n        </div>\n-->\n<!--           <div class=\"col-sm-2 col-md-2 col-lg-2\">\n          <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\">View Stats</button>\n        </div>\n-->\n\n        <!-- Tabs -->\n        <div class=\"col-xs-10 col-sm-10 col-sm-5 col-md-4\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#\">Board Games on the Rise</a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </header>\n\n    <div class=\"container-fluid\" id=\"slot1\"></div>\n    <div class=\"container-fluid\" id=\"slot2\"></div>\n\n    <footer class=\"text-center\">\n      <!-- Footer Text -->\n      <div class=\"row\">\n        <div class=\"col-ex-12\">\n          <p>Website by <a href=\"http://nathantbaker.com\">Nathan T. Baker</a></p>\n        </div>\n      </div>\n    </footer>\n\n    <script type=\"text/javascript\" src=\"/public/bundle.js\" charset=\"utf-8\"></script>\n  </body>\n</html>";

/***/ }
/******/ ]);