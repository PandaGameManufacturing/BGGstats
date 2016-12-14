"use strict";

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