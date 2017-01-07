"use strict";

// This scripts make it easy to set the startPage env var and recrawl at any page.

// requires
let startCrawler = require("./rankings-crawler");

let startPage = process.env.startPage;
startCrawler(startPage); // recrawl at provided page