"use strict";
let getData = require("../get-data-serverside");

let getHotness = () => {
  // host, then path
 return getData('bgg-json.azurewebsites.net', '/hot');
};

module.exports = getHotness;