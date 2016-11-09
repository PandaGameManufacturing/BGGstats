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
    //       1    2  3   4   5   6   7   8   9  10    11  12  13  14  15  16  17  18  19  20  21  22  23
    ['2009', 11, 11, 4, 11, 11, 11,  2, 11, 11,  1,    3,  5,  6,  8, 09, 10, 11, 11, 11, 11, 11, 11,  7],
    ['2010', 11, 11, 4, 11, 11, 11,  2, 11, 11,  1,    3,  8,  6,  9, 10, 11,  7, 11, 11, 11, 11, 11,  5],
    ['2011', 11, 11, 1, 11, 11, 11,  2, 11, 11,  3,    5, 11,  8, 11, 10, 11,  6,  7,  9, 11, 11, 11,  4],
    ['2012', 11, 11, 1, 11, 11, 11,  3, 11, 11,  2,    5, 11,  9, 11, 10, 11,  6,  8,  7, 11, 11, 11,  4],
    ['2013', 11, 11, 1, 11, 11, 11,  4, 11, 11,  3,    6, 11, 11, 11, 11, 11,  7, 11, 10,  5,  8,  9,  2],
    ['2014', 11, 11, 1,  6, 11, 11,  4, 11, 11,  3,    8, 11, 11, 11, 11, 11, 10, 11, 11,  7,  5,  9,  2],
    ['2015', 11, 11, 1,  2,  6, 11,  5, 11, 11,  4,   10, 11, 11, 11, 11, 11, 11, 11, 11,  8,  7,  9,  3],
    ['2016',  1,  2, 3,  4,  5,  6,  7, 11,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,  9, 11],
    ['',      1,  2, 3,  4,  5,  6,  7,  8,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
  ]);

  var options = {
    colors: ['#e0440e', "#D62896", "#B728A1", "#9928AC", "#7A28B7", "#5C29C2", "#554FC4", "#4F75C7", "#499BC9", "#43C1CC", '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee', '#ccc', '#eee'],
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