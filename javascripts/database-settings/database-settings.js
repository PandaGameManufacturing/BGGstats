"use strict";

console.log("firebase settings running");

let firebase = require("firebase");

// var firebase = require('./app');
// require('./auth');
// require('./database');

let config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseURL
};

firebase.initializeApp(config);
console.log("database config:", config);