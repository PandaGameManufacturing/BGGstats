"use strict";

let firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

let config = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseURL
};

firebase.initializeApp(config);