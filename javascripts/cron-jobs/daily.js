"use strict";

// a cron job configured with heroku triggers this file at 10:00 UTC (4:00 am central) every day.

let startCrawler = require("../crawler/rankings-crawler");
startCrawler(1); // start at page 1