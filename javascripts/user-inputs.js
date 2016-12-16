'use strict';

// Requires
require("./app-logic");

// tooltip config
let tooltip = require('tooltip');
let config  = {
  showDelay: 0,
  style: {
    'padding': 10,
    'border-radius': 5,
    'background-color': '#444',
    'color': 'white',
    'font-size': '1.1em',
    'width': '300px',
  }
};

tooltip(config);