"use strict";
let getData = require("../get-data-serverside"),
    getHotness = getData('https://bgg-json.azurewebsites.net/hot');
module.exports = getHotness;