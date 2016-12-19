"use strict";
let getData = require("../get-data-clientside"),
    getHotness = getData('https://bgg-json.azurewebsites.net/hot');
module.exports = getHotness;