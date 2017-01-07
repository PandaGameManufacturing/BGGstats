"use strict";

// a cron job configured with heroku triggers this file at 20:00 UTC (2:00pm central) every day.

let startCrawler = require("../crawler/rankings-crawler");
startCrawler(1); // start at page 1