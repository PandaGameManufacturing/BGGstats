"use strict";

 // chartData is an array of arrays. Example:

          //    [
          //      ['year', 'game1', 'game2'],
          //      ['2015',       2,       6],
          //      ['2016',       1,       7]
          //    ]

let historicData = [

            // These titles are for building graph and what appears on hovers.
            // HTML list loaded via chart-visuals/top10-chart.js

  ['Year', 'Pandemic Legacy: Season 1',                     // 1
           'Through the Ages: A New Story of Civilization', // 2
           'Twilight Struggle',                             // 3
           'Terra Mystica',                                 // 4
           'Caverna: The Cave Farmers',                     // 5
           'Star Wars: Rebellion',                          // 6
           'Puerto Rico',                                   // 7
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
   //       1   2  3   4   5   6   7    9   10    11  12  13  14  15  16  17  18  19  20  21  22  23
  ['2009', 11, 11, 4, 11, 11, 11,  2,   11,  1,    3,  5,  6,  8,  9, 10, 11, 11, 11, 11, 11, 11,  7],
  ['2010', 11, 11, 4, 11, 11, 11,  2,   11,  1,    3,  8,  6,  9, 10, 11,  7, 11, 11, 11, 11, 11,  5],
  ['2011', 11, 11, 1, 11, 11, 11,  2,   11,  3,    5, 11,  8, 11, 10, 11,  6,  7,  9, 11, 11, 11,  4],
  ['2012', 11, 11, 1, 11, 11, 11,  3,   11,  2,    5, 11,  9, 11, 10, 11,  6,  8,  7, 11, 11, 11,  4],
  ['2013', 11, 11, 1, 11, 11, 11,  4,   11,  3,    6, 11, 11, 11, 11, 11,  7, 11, 10,  5,  8,  9,  2],
  ['2014', 11, 11, 1,  6, 11, 11,  4,   11,  3,    8, 11, 11, 11, 11, 11, 10, 11, 11,  7,  5,  9,  2],
  ['2015', 11, 11, 1,  2,  6, 11,  5,   11,  4,   10, 11, 11, 11, 11, 11, 11, 11, 11,  8,  7,  9,  3],
  ['2016',  1,  2, 3,  4,  5,  6, 11,    9, 11,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,  11, 11]

  // this last row helps lines ellegantly crop off the canvas
  // ['',      1,  2, 3,  4,  5,  5,  7,  8,  9, 11,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
];

module.exports = historicData;