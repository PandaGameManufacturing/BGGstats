'use strict';

// Requires
let loadCharts = require("./app-logic");
let $ = require("jquery");
let hotness = require("./chart-visuals/hotness-chart");

let addEventListeners = () => {

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

  $('#1000-day').hide();
  $('#all-day').hide();

  // toggle between views

  // 1,000 view
  $('#1000-day-weekbutton').click( () => {
    $('#1000-day').hide();
    $('#1000-week').show();
  });
  $('#1000-week-daybutton').click( () => {
    $('#1000-week').hide();
    $('#1000-day').show();
  });

  // all games view
  $('#all-day-weekbutton').click( function() {
    $('#all-day').hide();
    $('#all-week').show();

  });
  $('#all-week-daybutton').click( function() {
    $('#all-week').hide();
    $('#all-day').show();
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

};

loadCharts(addEventListeners);