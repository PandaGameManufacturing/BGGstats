let  express = require('express'),
    app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// uncomment to test crawler
// require("./javascripts/cron-jobs/daily");
require("./javascripts/crawler/rankings-crawler2");

// uncomment to push data
// pushData = require("./javascripts/push-data/push-data-serverside");
// pushData.post({}, `/BGG.json`, "POST");
