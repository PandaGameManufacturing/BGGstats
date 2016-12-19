"use strict";
let getData = require("../get-data-clientside");

let options = `&stats=1`;
// "stats" adds ratings and weight info

let gameDetails = function(id) {
  return getData(`https://bgg-api.herokuapp.com/api/v1/thing?id=${id}${options}`);
};

module.exports = gameDetails;