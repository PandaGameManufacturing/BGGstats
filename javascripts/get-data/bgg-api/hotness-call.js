"use strict";
let getData = require("../get-data-serverside");

let getHotness = () => {
 return getData('https://bgg-json.azurewebsites.net/hot');
};

module.exports = getHotness;