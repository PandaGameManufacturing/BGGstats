// a cron job configured with heroku triggers this file at 10:30 UTC (4:30 am central) every day, 30 minutes after waking up the daily crawler.

// this file checks if rankings are being pushed up to the database yet. If not, the crawler is triggered again in case the first attempt failed.

"use strict";

// requires
let getData = require("../get-data/get-data-loader"),
    getToday = require("../assets/get-date"),
    isDataEmpty = require("../assets/empty-data-checker");

let today = getToday();

getData.rankings(today).then( rankingsToday => {
    let areThereRankingsToday = !isDataEmpty(rankingsToday);
    if (areThereRankingsToday) {
      console.log(`:: `);
      console.log(`:: ✓ Cron job checking if rankings are coming in. Yup.`);
      console.log(`:: `);
    } else {
      console.log(`:: `);
      console.log(`:: ERROR: Crawler didn't start after first cron job. Rebooting...`);
      console.log(`:: `);
      require("../crawler/rankings-crawler");
    }
});