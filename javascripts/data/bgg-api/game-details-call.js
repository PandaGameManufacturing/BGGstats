"use strict";
let getData = require("../get-data");

let gameDetails = function(id) {
  return getData(`https://bgg-api.herokuapp.com/api/v1/thing?id=${id}`);
};

module.exports = gameDetails;