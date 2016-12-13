'use strict';

// Requires
let rankings = require("./rankings-crawler"),
    historic = require("./historic-crawler"),
    published = require("./published-crawler");

module.exports = {
  rankings,
  historic,
  published
};