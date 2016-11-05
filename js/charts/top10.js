/**********************\
|  Top 10              |
\**********************/

     google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable ([
            ['Year', 'Game 1', 'Game 2'],
            ['2013',  1000,      400],
            ['2014',  1170,      460],
            ['2015',  660,       1120],
            ['2016',  1030,      540]
          ]);

        var options = {
          colors: ['#e0440e', '#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888'],
          legend: 'none',
          hAxis: { minValue: 0, maxValue: 9 },
          curveType: 'function',
          pointSize: 0,
          chartArea: { width: "100%", height: "auto"},
          vAxis:{
           baselineColor: '#fff',
           gridlineColor: '#fff',
           textPosition: 'none'
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('top10'));
        chart.draw(data, options);
    }
