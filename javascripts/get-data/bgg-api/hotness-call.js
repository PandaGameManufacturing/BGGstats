"use strict";
let getData = require("../get-data");
let getHotness = getData('https://bgg-json.azurewebsites.net/hot');
module.exports = getHotness;