"use strict";

// a cron job triggers this file at 00:05 every day. it runs:
require("../crawler/rankings-crawler");

//   manually run it with:
//   `heroku run "node javascripts/cron-jobs/daily.js" --app bggstats`

// heroku run "node javascripts/crawler/rankings-crawler2.js" --app bggstats