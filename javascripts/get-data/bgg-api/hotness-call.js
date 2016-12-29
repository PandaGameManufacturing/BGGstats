"use strict";
let getData = require("../get-data-serverside");

let getHotness = () => {
  // host, then path
 return getData('https://bgg-json.azurewebsites.net', '/hot');
};

module.exports = getHotness;