'use strict';

// Requires
require("./app-logic");
let $ = require("jquery");
let hotness = require("./chart-visuals/hotness-chart");

$(window).on('load', function(){

  // change game description on hotness list on hover
  $('#hotness-1').hover( () => {
    hotness.swapDescription(0);
  });
  $('#hotness-2').hover( () => {
    hotness.swapDescription(1);
  });
  $('#hotness-3').hover( () => {
     hotness.swapDescription(2);
  });
  $('#hotness-4').hover( () => {
     hotness.swapDescription(3);
  });
  $('#hotness-5').hover( () => {
     hotness.swapDescription(4);
  });

  // hide all  day views by default
  // $('#slot1-day').hide();
  // $('#slot2-day').hide();
  // $('#slot3-day').hide();
  // $('#slot4-day').hide();
  // $('#slot5-day').hide();

  // toggle between views
  $('#week10-week').click( () => {
  });
  $('#week10-day').click( () => {
  });
  $('#weekall-week').click( () => {
    $('#slot1-day').hide();
    $('#slot1-week').show();
    console.log("you clicked week week");
  });
  $('#weekall-day').click( () => {
    $('#slot3-week').hide();
    $('#slot3-day').show();
    console.log("you clicked week day");
  });
  $('#dayall-week').click( () => {
    $('#slot3-day').hide();
    $('#slot3-week').show();
    console.log("you clicked day week");
  });
  $('#dayall-day').click( () => {
    console.log("you clicked day day");
  });


});




hotness.swapDescription();

// tooltip config
let tooltip = require('tooltip');
let config  = {
  showDelay: 0,
  style: {
    'padding': '10 10 10 15',
    'background-color': '#444',
    'color': 'white',
    'font-size': '1.1em',
    'max-width': '400px',
    'border-radius': '10px'
  }
};

tooltip(config);