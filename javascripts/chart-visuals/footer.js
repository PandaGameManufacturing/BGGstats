"use strict";

// requires

let assets = require("../assets/asset-loader");

// inject dynamic data into the footer
let footerData = data => {

    // inject total number of games in footer
    let targetEl = document.getElementById("totalGames");
    targetEl.innerHTML = `${assets.addCommas(data.totalRankedGames)} games`;

    // inject last crawl time in footer
    let targetEl2 = document.getElementById("time");
    let hours = assets.timeElapsed(data.timeMilliseconds);
    targetEl2.innerHTML = `${hours} hours ago`;

};

module.exports = footerData;