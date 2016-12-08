"use strict";
let getData = require("../get-data");
let getHotness = getData('http://bgg-json.azurewebsites.net/hot');
module.exports = getHotness;