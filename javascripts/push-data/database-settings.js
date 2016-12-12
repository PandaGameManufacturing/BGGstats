"use strict";

let firebase = require('../../node_modules/firebase');

let config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseURL
};

firebase.initializeApp(config);