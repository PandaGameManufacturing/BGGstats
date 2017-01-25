"use strict";

let $ = require("jquery"),
    chartLoader = require("../assets/google-charts-loader");

let drawTop10List = (settings, slot) => {

  let data = settings.dataSource;

  let top10List = data.top10.games;

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

      let chartData = google.visualization.arrayToDataTable(data.top10.data);

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

      // // resize line chart if user changes width of page
      // let chart1 = "done";
      // $(window).resize(function() {
      //   if(chart1=="done") {
      //   chart1 = "waiting";
      // setTimeout( ()=> {
      //   drawChart();chart1 = "done";
      // },500); // delay in milliseconds
      // }
      // });

    }

  // build top 10 list
  let top10html = "";

  // loop over array of objects
  for (let i = 0; i < top10List.length; i++) {
    top10html += `<li><a href="http://boardgamegeek.com/boardgame/${top10List[i].bggID}/">${top10List[i].name}</a></li>`;
  }


  let snippets = `
    <div class="row">

          <!-- Top 10  -->
          <div class="col-sm-12 col-md-12 col-lg-12">

          <div class="statbox">
            <div class="label-title">
              <h2>${settings.chartTitle}</h2>
              <a data-tooltip="${settings.helpText}" class="help-link pull-right"><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Top 10 Stat?"><span class="hidden-sm hidden-xs">About This Chart</span></a>
            </div>
          </div>

          <div class="col-sm-12 col-md-7 col-lg-8">

            <!-- Line Chart -->
           <div id="top10"></div>

          </div>

          <!-- Table -->
          <div class="col-sm-12 col-md-5 col-lg-4">
            <ol class="color-list">

              ${top10html}

           </ol>
          </div>

        </div>
    </div>

  `;

    // add this chart data as a div in the correct slot
  $(`#${slot}`).append(`<div class="container" id="#top10">
      ${snippets}
    </div>`);

};

module.exports = drawTop10List;


