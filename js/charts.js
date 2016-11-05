/**********************\
|  Top 10              |
\**********************/

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(top10);

function top10() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Game 1');
      data.addColumn('number', 'Game 2');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   // Month 4
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  // Month 3
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], // Month 2
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47] // Month 1
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        },

      };

      var chart = new google.visualization.LineChart(document.getElementById('top10'));
      chart.draw(data, options);
    }