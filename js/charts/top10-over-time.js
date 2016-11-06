/**********************\
|  Top 10              |
\**********************/

     google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable ([
            ['Year', 'Pandemic Legacy: Season 1',                     // 1
                     'Through the Ages: A New Story of Civilization', // 2
                     'Twilight Struggle',                             // 3
                     'Terra Mystica',
                     'Caverna: The Cave Farmers',
                     'Star Wars: Rebellion',
                     'Puerto Rico',
                     '7 Wonders Duel',
                     'The Castles of Burgundy',
                     'Agricola'
            ],
            ['',      11,  11, 4,  11,  11,  11,  11,  11,  11,  1],     // dummy row
            ['2009',  11,  7,  4,  11,  11,  11,  11,  11,  11,  1],
            ['2010',  11,  5,  4,  11,  11,  11,  11,  11,  11,  1],
            ['2011',  11,  4,  1,  11,  11,  11,  11,  11,  11,  3],
            ['2012',  11,  4,  1,  11,  11,  11,  11,  11,  11,  2],
            ['2013',  11,  2,  1,  11,  11,  11,  11,  11,  11,  3],
            ['2014',  11,  2,  1,  6,   11,  11,  11,  11,  11,  3],
            ['2015',  11,  3,  1,  2,    6,  11,  11,  11,  11,  4],
            ['2016',  1,   2,  3,  4,    5,  6,    7,  11,  9,  10],
            ['',      1,   2,  3,  4,    5,  6,    7,  8,   9,  10]      // dummy row
          ]);

        var options = {
          colors: ['#e0440e', '#5DA5DA', '#FAA43A', '#60BD68', '#F17CB0', '#B2912F', '#70dde5', '#B276B2', '#DECF3F', '#685e43'],
          legend: 'none',
          curveType: 'function',
          pointSize: 0,
          lineWidth: 2,
          chartArea: { width: "100%", height: "80%"},
          vAxis:{
           baselineColor: '#fff',
           gridlineColor: '#fff',
           textPosition: 'none',
           direction: -1,
           viewWindow: { min: 0, max: 10}
          },
          hAxis:{
           baselineColor: '#fff',
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('top10'));
        chart.draw(data, options);

        var chart1 = "done";

        $(window).resize(function() {
          if(chart1=="done"){
          chart1 = "waiting";
        setTimeout(function(){drawChart();chart1 = "done"},1000); // only resize every second
        }
        });
    }
