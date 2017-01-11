"use strict";

// requires

let assets = require("../assets/asset-loader");

// inject dynamic data into the footer
let footerData = data => {

    // inject total number of games in footer
    let targetEl = document.getElementById("totalGames");
    targetEl.innerHTML = `${assets.addCommas(data.totalRankedGames)} ranked games`;

    // inject last crawl time in footer
    let targetEl2 = document.getElementById("time");
    let hours = assets.timeElapsed(data.timeMilliseconds);
    if (hours < 2) {
      targetEl2.innerHTML = `an hour ago`;
    } else {
      targetEl2.innerHTML = `${hours} hours ago`;
    }
};

module.exports = footerData;