// This is a resource to help me keep track of how data is stored in my database

"use strict";

/**********************\
|                      |
|        Charts        |
|                      |
\**********************/

let Charts = {

  hotness: [304, 34343, 12324, 12434, 22343],
  top10: {
   games: [304, 34343, 12324, 12434, 22343, 304, 34343, 12324, 12434, 22343],
   data: [
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
      ['2016',  1,  2, 3,  4,  5,  6,  7, 11,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,  9, 11],
      ['',      1,  2, 3,  4,  5,  6,  7,  8,  9, 10,   11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
    ],
  },
  movement: {
    positive: [304, 34343, 12324, 12434, 22343, 304, 34343, 12324, 12434, 22343],
    negative: [1232, 34343, 12324, 12434, 22343]
  },
  // store lastest total ranked games number
  totalRankedGames: 13434,
  // time formats
  timeYMD: "20161217",
  timeISO: "2016-12-17T09:02:16.973Z",
  timeLocal: "03:02:16 GMT-0600 (CST)",
  timeMilliseconds: 1481965336973,
  timeYear: 2016,
};

/**********************\
|                      |
|        Games         |
|                      |
\**********************/

let Games = {
  bggID: {
    // avilable one day with crawling
    weight: 2.3,
    weightVotes: 461,
    ratingGeek: 8.056,
    ratingAverage: 8.2931,
    ratingDeviation: 1.3131,
    ratingVotes: 8320,
    // calculated with server logic
    movementDay: -1,
    movementWeek: 17,
    movementMonth: null,
    movementYear: null,

    // via bgg API call
    name: "Eurorails",
    yearPublished: "1990",
    thumbnail: "//cf.geekdo-images.com/images/pic3122349_t.jpg",
    thumbnailMini: "//cf.geekdo-images.com/images/pic3122349_mt.jpg",
    description: "Something evil stirs in Arkham...",
    image: "//cf.geekdo-images.com/images/pic3122349.jpg",
    publishers: [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    arists:  [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    designers:  [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    expansions:  [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    gameFamilies:  [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    gameMechanics:  [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    gameCategories:  [
      {
        name: "Kingdom Death: Monster – Gorm Expansion",
        bggID: "135036"
      },
      {
        name: "Kingdom Death: Monster – Green Knight Armor Expansion",
        bggID: "195317"
      }
    ],
    maxPlayers: "6",
    maxPlayTime: "60",
    minAge: "17",
    minPlayers: "1",
    minPlayTime: "30",
    playingTime: "60",
    pollPlayerCount: {
      description:"User Suggested Number of Players",
      totalvotes: 112,
      playerCount: {
        1: {
          best: 15,
          recommended: 19,
          notRecommended: 3
        },
        2: {
          best: 2,
          recommended: 5,
          notRecommended: 3
        }
      }
    },
    pollPlayerAge: {
      description:"User Suggested Player Age",
      totalvotes: 12,
      age: {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        8: 0,
        10: 3,
        12: 3,
        14: 5,
        16: 1,
        18: 0,
        21: 0
      }
    },
    pollLanguageDependence: {
      description:"Language Dependence",
      levelDescriptions: [
        "No necessary in-game text",
        "Some necessary text - easily memorized or small crib sheet",
        "Moderate in-game text - needs crib sheet or paste ups",
        "Extensive use of text - massive conversion needed to be playable",
        "Unplayable in another language"
      ],
      totalvotes: "9",
      level: {
        1: 0,
        2: 2,
        3: 7,
        4: 0,
        5: 0
      }
    },
    // stuff also in Rankings table
    bggID: "157",
    rank: 883,
    // top games
    top10: false,
    top100: false,
    top1000: true,
    top10000: true,
    // percentile
    percentile: 4,
    percentile1: true,
    percentile5: true,
    percentile10: true,
    percentile25: true,
    percentile50: true,
    percentile75: true,
    // time tags
    time_bggID: "20161217_game_157",
    time_top10: "20161217_top10_true",
    time_top100: "20161217_top100_false",
    time_top1000: "20161217_top1000_false",
    time_top10000: "20161217_top10000_false",
    time_percentile1: "20161217_percentile1_false",
    time_percentile5: "20161217_percentile5_false",
    time_percentile10: "20161217_percentile10_false",
    time_percentile25: "20161217_percentile25_false",
    time_percentile50: "20161217_percentile50_false",
    time_percentile75: "20161217_percentile75_false",
    // time formats
    timeYMD: "20161217",
    timeISO: "2016-12-17T09:02:16.973Z",
    timeLocal: "03:02:16 GMT-0600 (CST)",
    timeMilliseconds: 1481965336973,
    timeYear: 2016,
  }
};

/**********************\
|                      |
|      Rankings        |
|                      |
\**********************/

let Rankings = {
  bggID: "157",
  rank: 883,
  // top games
  top10: false,
  top100: false,
  top1000: true,
  top10000: true,
  // percentile
  percentile: 4,
  percentile1: true,
  percentile5: true,
  percentile10: true,
  percentile25: true,
  percentile50: true,
  percentile75: true,
  // time tags
  time_bggID: "20161217_game_157",
  time_top10: "20161217_top10_true",
  time_top100: "20161217_top100_false",
  time_top1000: "20161217_top1000_false",
  time_top10000: "20161217_top10000_false",
  time_percentile1: "20161217_percentile1_false",
  time_percentile5: "20161217_percentile5_false",
  time_percentile10: "20161217_percentile10_false",
  time_percentile25: "20161217_percentile25_false",
  time_percentile50: "20161217_percentile50_false",
  time_percentile75: "20161217_percentile75_false",
  // time formats
  timeYMD: "20161217",
  timeISO: "2016-12-17T09:02:16.973Z",
  timeLocal: "03:02:16 GMT-0600 (CST)",
  timeMilliseconds: 1481965336973,
  timeYear: 2016,
};

/**********************\
|                      |
|   Games Published    |
|                      |
\**********************/

let GamesPublished = {
  2016: 12432,
  2015: 34423,
  // time formats
  timeYMD: "20161217",
  timeISO: "2016-12-17T09:02:16.973Z",
  timeLocal: "03:02:16 GMT-0600 (CST)",
  timeMilliseconds: 1481965336973,
  timeYear: 2016,
};

/**********************\
|                      |
|         BGG          |
|                      |
\**********************/

let BGG = {
  totalRankedGames: 13030,
  totalTrackedGamesAndExpansions: 87712,
  // time formats
  timeYMD: "20161217",
  timeISO: "2016-12-17T09:02:16.973Z",
  timeLocal: "03:02:16 GMT-0600 (CST)",
  timeMilliseconds: 1481965336973,
  timeYear: 2016,
};

/**********************\
|                      |
|        Users         |
|                      |
\**********************/

let Users = {
  userID: "9238471ujnn2i3n3io4",
  chartOrder: ["movement", "hotness"],
  bggUsername: "nathantbaker",
  name: "Nate",
  emial: "nathantbaker@gmail.com",
    // time formats
  timeYMD: "20161217",
  timeISO: "2016-12-17T09:02:16.973Z",
  timeLocal: "03:02:16 GMT-0600 (CST)",
  timeMilliseconds: 1481965336973,
  timeYear: 2016,

};

let BggCall = {"items":{"$":{"termsofuse":"http://boardgamegeek.com/xmlapi/termsofuse"},"item":[{"$":{"type":"boardgame","id":"127023"},"thumbnail":["//cf.geekdo-images.com/images/pic1431241_t.jpg"],"image":["//cf.geekdo-images.com/images/pic1431241.jpg"],"name":[{"$":{"type":"primary","sortindex":"1","value":"Kemet"}}],"description":["In Kemet, players each deploy the troops of an Egyptian tribe and use the mystical powers of the gods of ancient Egypt &ndash; along with their powerful armies &ndash; to score points in glorious battles or through invasion of rich territories. A game is typically played to 8 or 10 victory points, which may be accrued through winning attacks, controlling temples, controlling fully-developed pyramids, sacrificing to the gods, and wielding particular magical powers.&#10;&#10;The conquest for the land of Kemet takes place over two phases: Day and Night. During the day, choose an action amongst the nine possible choices provided by your player mat and perform it immediately. Once every player has taken five actions, night falls, with players gathering Prayer Points from their temples, drawing Divine Intervention cards, and determining the turn order before the start of the new day.&#10;&#10;As the game progresses, they can use Prayer Points to acquire power tiles. Some of these enroll magical creatures and have them join their troops. In addition to intimidating enemies, these creatures provide special powers!&#10;&#10;Detailed miniature components represent the combat units and the supernatural creatures that are summoned to enhance them. Combat is resolved through cards chosen from a diminishing six-card hand and enhanced by bonuses.&#10;&#10;Play By Forum&#10;&#10;     Kemet PBF #1&#10;&#10;&#10;&#10;&#10;"],"yearpublished":[{"$":{"value":"2012"}}],"minplayers":[{"$":{"value":"2"}}],"maxplayers":[{"$":{"value":"5"}}],"poll":[{"$":{"name":"suggested_numplayers","title":"User Suggested Number of Players","totalvotes":"137"},"results":[{"$":{"numplayers":"1"},"result":[{"$":{"value":"Best","numvotes":"0"}},{"$":{"value":"Recommended","numvotes":"0"}},{"$":{"value":"Not Recommended","numvotes":"71"}}]},{"$":{"numplayers":"2"},"result":[{"$":{"value":"Best","numvotes":"5"}},{"$":{"value":"Recommended","numvotes":"47"}},{"$":{"value":"Not Recommended","numvotes":"52"}}]},{"$":{"numplayers":"3"},"result":[{"$":{"value":"Best","numvotes":"26"}},{"$":{"value":"Recommended","numvotes":"75"}},{"$":{"value":"Not Recommended","numvotes":"4"}}]},{"$":{"numplayers":"4"},"result":[{"$":{"value":"Best","numvotes":"63"}},{"$":{"value":"Recommended","numvotes":"48"}},{"$":{"value":"Not Recommended","numvotes":"2"}}]},{"$":{"numplayers":"5"},"result":[{"$":{"value":"Best","numvotes":"70"}},{"$":{"value":"Recommended","numvotes":"30"}},{"$":{"value":"Not Recommended","numvotes":"12"}}]},{"$":{"numplayers":"5+"},"result":[{"$":{"value":"Best","numvotes":"0"}},{"$":{"value":"Recommended","numvotes":"1"}},{"$":{"value":"Not Recommended","numvotes":"56"}}]}]},{"$":{"name":"suggested_playerage","title":"User Suggested Player Age","totalvotes":"27"},"results":[{"result":[{"$":{"value":"2","numvotes":"0"}},{"$":{"value":"3","numvotes":"0"}},{"$":{"value":"4","numvotes":"0"}},{"$":{"value":"5","numvotes":"0"}},{"$":{"value":"6","numvotes":"0"}},{"$":{"value":"8","numvotes":"5"}},{"$":{"value":"10","numvotes":"6"}},{"$":{"value":"12","numvotes":"12"}},{"$":{"value":"14","numvotes":"4"}},{"$":{"value":"16","numvotes":"0"}},{"$":{"value":"18","numvotes":"0"}},{"$":{"value":"21 and up","numvotes":"0"}}]}]},{"$":{"name":"language_dependence","title":"Language Dependence","totalvotes":"34"},"results":[{"result":[{"$":{"level":"16","value":"No necessary in-game text","numvotes":"24"}},{"$":{"level":"17","value":"Some necessary text - easily memorized or small crib sheet","numvotes":"10"}},{"$":{"level":"18","value":"Moderate in-game text - needs crib sheet or paste ups","numvotes":"0"}},{"$":{"level":"19","value":"Extensive use of text - massive conversion needed to be playable","numvotes":"0"}},{"$":{"level":"20","value":"Unplayable in another language","numvotes":"0"}}]}]}],"playingtime":[{"$":{"value":"120"}}],"minplaytime":[{"$":{"value":"90"}}],"maxplaytime":[{"$":{"value":"120"}}],"minage":[{"$":{"value":"13"}}],"link":[{"$":{"type":"boardgamecategory","id":"1050","value":"Ancient"}},{"$":{"type":"boardgamecategory","id":"1046","value":"Fighting"}},{"$":{"type":"boardgamecategory","id":"1047","value":"Miniatures"}},{"$":{"type":"boardgamecategory","id":"1082","value":"Mythology"}},{"$":{"type":"boardgamemechanic","id":"2001","value":"Action Point Allowance System"}},{"$":{"type":"boardgamemechanic","id":"2080","value":"Area Control / Area Influence"}},{"$":{"type":"boardgamemechanic","id":"2046","value":"Area Movement"}},{"$":{"type":"boardgamemechanic","id":"2018","value":"Campaign / Battle Card Driven"}},{"$":{"type":"boardgamemechanic","id":"2041","value":"Card Drafting"}},{"$":{"type":"boardgamefamily","id":"6471","value":"Country: Egypt"}},{"$":{"type":"boardgamefamily","id":"13265","value":"Desert Theme"}},{"$":{"type":"boardgamefamily","id":"5615","value":"Monsters"}},{"$":{"type":"boardgameexpansion","id":"146781","value":"C3K: Creatures Crossover Cyclades/Kemet"}},{"$":{"type":"boardgameexpansion","id":"207149","value":"Kemet: Dice Tower Promo 2016"}},{"$":{"type":"boardgameexpansion","id":"190744","value":"Kemet: New Power Tiles"}},{"$":{"type":"boardgameexpansion","id":"190743","value":"Kemet: Skills and Black Power Tile For Ta-Seti"}},{"$":{"type":"boardgameexpansion","id":"161842","value":"Kemet: Ta-Seti"}},{"$":{"type":"boardgamedesigner","id":"10395","value":"Jacques Bariot"}},{"$":{"type":"boardgamedesigner","id":"10393","value":"Guillaume Montiage"}},{"$":{"type":"boardgameartist","id":"30958","value":"Dimitri Bielak"}},{"$":{"type":"boardgameartist","id":"46405","value":"Emile Denis"}},{"$":{"type":"boardgameartist","id":"12935","value":"Nicolas Fructus"}},{"$":{"type":"boardgamepublisher","id":"5400","value":"Matagot"}},{"$":{"type":"boardgamepublisher","id":"157","value":"Asmodee"}},{"$":{"type":"boardgamepublisher","id":"15889","value":"Asterion Press"}},{"$":{"type":"boardgamepublisher","id":"15605","value":"Galápagos Jogos"}},{"$":{"type":"boardgamepublisher","id":"39","value":"Pegasus Spiele"}},{"$":{"type":"boardgamepublisher","id":"7466","value":"REBEL.pl"}}],"statistics":[{"$":{"page":"1"},"ratings":[{"usersrated":[{"$":{"value":"8320"}}],"average":[{"$":{"value":"7.77561"}}],"bayesaverage":[{"$":{"value":"7.53636"}}],"ranks":[{"rank":[{"$":{"type":"subtype","id":"1","name":"boardgame","friendlyname":"Board Game Rank","value":"67","bayesaverage":"7.53636"}},{"$":{"type":"family","id":"5497","name":"strategygames","friendlyname":"Strategy Game Rank","value":"49","bayesaverage":"7.56723"}}]}],"stddev":[{"$":{"value":"1.3131"}}],"median":[{"$":{"value":"0"}}],"owned":[{"$":{"value":"10272"}}],"trading":[{"$":{"value":"128"}}],"wanting":[{"$":{"value":"1151"}}],"wishing":[{"$":{"value":"4443"}}],"numcomments":[{"$":{"value":"1499"}}],"numweights":[{"$":{"value":"461"}}],"averageweight":[{"$":{"value":"2.9761"}}]}]}]}]}};

// console.log("Data Template", {
//   "Charts": Charts,
//   "Games": Games,
//   "Rankings": Rankings,
//   "GamesPublished": GamesPublished,
//   "BGG": BGG,
//   "Users": Users,
//   "BggCall": BggCall
// });

// console.log("Charts", Charts);
// console.log("BggCall", BggCall);
// console.log("Games", Games);