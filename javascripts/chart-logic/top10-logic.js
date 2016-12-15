'use strict';

let $ = require("jquery"),
    chartLoader = require("../assets/google-charts-loader"),
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

      /**********************\
      |                      |
      |  combine historic    |
      |  data with new data  |
      |                      |
      \**********************/

      /////  1. prep data

      let oldData = getData.historic,
          newData = crawlerData,
          _2016array = oldData[8];
      console.log("new data:", newData);

      // clear 2016 array
      _2016array = ["2016"];
      console.log("old data:", oldData);

      /////  2. check if games already with historic data
      /////     need to be updated to include 2016 data

      // iterate over names of games with historical data
      for (let i = 1; i < oldData[0].length; i++) {
        // is this game name anywhere in the new data?
        let targetGame = oldData[0][i];
        // console.log("old data:", targetGame);

        for (let i = 0; i < newData.length; i++) {
          let checkGame = newData[i].Name;
          // console.log("checkGame:", checkGame);

          if (targetGame === checkGame) {
            // if match, push current rank to 2016 array
            // console.log("match between " + targetGame + " and " + checkGame);
            _2016array.push(newData[i].Rank);
          }
        }
        // if there's note already a number for the index, push 11 to 2016 array
        if (!_2016array[i]) { _2016array.push(11); }
      }

      /////  3. add games without historical data to arrays

      // iterate over games without historical data
      for (let i = 0; i < newData.length; i++) {
        let targetGame = newData[i].Name;
        let oldNames = oldData[0];
        // console.log("target Game in loop 2:", targetGame);

        // if game isn't already in historical data
        if (!oldNames.includes(targetGame)) {
          console.log(targetGame + " needs to be added.");
          console.log("targetGame:", targetGame);
          // push new name to end of array 1
          oldData[0].push(targetGame);
          // push rank of 11 to the end of the other arrays
          oldData[1].push(11);
          oldData[2].push(11);
          oldData[3].push(11);
          oldData[4].push(11);
          oldData[5].push(11);
          oldData[6].push(11);
          oldData[7].push(11);
          // add current rank of that game to the end of 2016 array
          oldData[8].push(newData[i].Rank);
          // add current rank of that game to the end of last array
          // oldData[9].push(newData[i].Rank);
        }
      }

      // make array 9 a copy of array 8 execpt first index is "" not "2016"
      oldData[9] = Object.create(oldData[8]);
      oldData[9][0] = "";

      // TO DO: switch games 1-10 to correct order? or try just switching colors

      let allData = oldData;


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

        let chartData = google.visualization.arrayToDataTable (allData);
        console.log("allData in function", allData);

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

        // display chart in id "top10"
        let chart = new google.visualization.LineChart(document.getElementById('top10'));

        // draw google chart
        chart.draw(chartData, options);

        // resize line chart if user changes width of page
        let chart1 = "done";
        $(window).resize(function() {
          if(chart1=="done") {
          chart1 = "waiting";
        setTimeout( ()=> {
          drawChart();chart1 = "done";
        },500); // delay in milliseconds
        }
        });

      }

      // error if can't get top 10 data from database
      }, error => {
      console.log("Couldn't get top10 data from database:", error);
    });

};


module.exports = top10Logic;