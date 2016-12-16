'use strict';

// Requires
require("./app-logic");
let $ = require("jquery");
let hotness = require("./chart-visuals/hotness-chart");

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

// change game description on hotness list on hover
$(window).on('load', function(){
  $('#hotness-1').hover(function () {
    hotness.swapDescription(0);
     console.log("you hovered over game 1");
  });
  $('#hotness-2').hover(function () {
    hotness.swapDescription(1);
     console.log("you hovered over game 2");
  });
  $('#hotness-3').hover(function () {
     hotness.swapDescription(2);
     console.log("you hovered over game 3");
  });
  $('#hotness-4').hover(function () {
     hotness.swapDescription(3);
     console.log("you hovered over game 4");
  });
  $('#hotness-5').hover(function () {
     hotness.swapDescription(4);
     console.log("you hovered over game 5");

  });
});


hotness.swapDescription();