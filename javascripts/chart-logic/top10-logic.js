'use strict';

require("../../third-party-js/google-charts-loader");
let $ = require("jquery"),
    getData = require("../get-data/get-data-loader"),
    createChart = require("../chart-visuals/chart-visuals-loader");


let top10Logic = slot => {

  // pull top 10 data from database
  getData.top10().then( databaseData => {
    let parsedData = JSON.parse(databaseData); // parse JSON to a javascript Object

      // convert data from unsorted object of objects to sorted array in object
      let crawlerData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // iterate over object of object
        for (let prop in parsedData) {

          // check the rank (1 to 10)
          let rank = parsedData[prop].Rank;

          // whatever the rank, push the object to that index in the prettyData array
          let index = crawlerData.indexOf(rank);
            if (index !== -1) {
                crawlerData[index] = parsedData[prop];
            }
        }

      // Create html for google chart to be injected into and build list of the game names
      createChart.top10("Top 10", crawlerData, slot);

      let // color scheme for line chart
      n1  = "#26BB5D",
      n2  = "#259E7C",
      n3  = "#24819B",
      n4  = "#2364BA",
      n5  = "#2347D9",
      n6  = "#503FC1",
      n7  = "#7E37A9",
      n8  = "#AB2F91",
      n9  = "#D9277A",
      n10 = "#D9274B",
      x1  = "#ccc",
      x2  = "#eee";

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        // These titles are for building graph and what appears on hovers.
        // HTML list loaded via chart-visuals/top10-chart.js


        let chartData = google.visualization.arrayToDataTable ([

          // chartData is an array of arrays. Example:

          //    [
          //      ['year', 'game1', 'game2'],
          //      ['2015',       2,       6],
          //      ['2016',       1,       7]
          //    ]

          // 1. Pandemic Legacy: Season 1
          // 2. Through the Ages: A New Story of Civilization
          // 3. Twilight Struggle
          // 4. Terra Mystica
          // 5. Star Wars: Rebellion
          // 6. Caverna: The Cave Farmers
          // 7. Scythe
          // 8. 7 Wonders Duel
          // 9. Puerto Rico
          // 10. The Castles of Burgundy

          // to do

          // get current number of games
          // clear 2016 array
          // build new 2016 array.
          // iterate over all current names against new names and set current rank or 11 for each slot
          // track names that aren't already on the list
          // for each untracked name
          // push new name to end of array 1
          // push rank of 11 to the end of the other arrays
          // add current rank of that game to the end of 2016 array
          // add current rank of that game to the end of last array

          ['Year', 'Pandemic Legacy: Season 1',                     // 1
                   'Through the Ages: A New Story of Civilization', // 2
                   'Twilight Struggle',                             // 3
                   'Terra Mystica',                                 // 4
                   'Caverna: The Cave Farmers',                     // 5
                   'Star Wars: Rebellion',                          // 6
                   'Puerto Rico',                                   // 7
                   '7 Wonders Duel',                                // 8
                   'The Castles of Burgundy',                       // 9
                   'Agricola',                                     // 10

                   'Power Grid',                                   // 11
                   'Tigris & Euphrates',                           // 12
                   'Dominion',                                     // 13
                   'El Grande',                                    // 14
                   'Caylus',                                       // 15
                   'Race for the Galaxy',                          // 16
                   'Le Havre',                                     // 17
                   'Dominion: Intrigue',                           // 18
                   'Brass',                                        // 19
                   'Eclipse',                                      // 20
                   'Android: Netrunner',                           // 21
                   'Mage Knight Board Game',                       // 22
                   'Through the Ages: A Story of Civilization'     // 23
          ],
           //       1   2  3   4   5   6   7   8   9  10    11  12  13  14  15  16  17  18  19  20  21  22  23
          ['2009', 11, 11, 4, 11, 11, 11,  2, 11, 11,  1,    3,  5,  6,  8,  9, 10, 11, 11, 11, 11, 11, 11,  7],
          ['2010', 11, 11, 4, 11, 11, 11,  2, 11, 11,  1,    3,  8,  6,  9, 10, 11,  7, 11, 11, 11, 11, 11,  5],
          ['2011', 11, 11, 1, 11, 11, 11,  2, 11, 11,  3,    5, 11,  8, 11, 10, 11,  6,  7,  9, 11, 11, 11,  4],
          ['2012', 11, 11, 1, 11, 11, 11,  3, 11, 11,  2,    5, 11,  9, 11, 10, 11,  6,  8,  7, 11, 11, 11,  4],
          ['2013', 11, 11, 1, 11, 11, 11,  4, 11, 11,  3,    6, 11, 11, 11, 11, 11,  7, 11, 10,  5,  8,  9,  2],
          ['2014', 11, 11, 1,  6, 11, 11,  4, 11, 11,  3,    8, 11, 11, 11, 11, 11, 10, 11, 11,  7,  5,  9,  2],
          ['2015', 11, 11, 1,  2,  6, 11,  5, 11, 11,  4,   10, 11, 11, 11, 11, 11, 11, 11, 11,  8,  7,  9,  3],
          ['2016',  1,  2, 3,  4,  5,  6,  7, 11,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,  11, 11],

          // this last row helps lines ellegantly crop off the canvas
          ['',      1,  2, 3,  4,  5,  6,  7,  8,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
        ]);

        let options = {
          colors: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2, x1, x2],
          legend: 'none',
          curveType: 'function',
          pointSize: 0,
          lineWidth: 1.5,
          chartArea: { width: "100%", height: "80%"},
          vAxis:{
           baselineColor: '#fff',
           gridlineColor: '#fff',
           textPosition: 'none',
           direction: -1,
           viewWindow: { min: 0, max: 11}
          },
          hAxis:{
            gridlines: { color: '#f3f3f3', count: 8}
          }
        };

        let chart = new google.visualization.LineChart(document.getElementById('top10'));

        // draw google chart
        chart.draw(chartData, options);

        // crawlerData

        let chart1 = "done";

        $(window).resize(function() {
          if(chart1=="done"){
          chart1 = "waiting";
        setTimeout(function(){
          drawChart();chart1 = "done";
        },500); // resize line chart every half second if user changes width of page
        }
        });
      }

      // error if can't get top 10 data from database
      }, error => {
      console.log("Couldn't get top10 data from database:", error);
    });

};


module.exports = top10Logic;