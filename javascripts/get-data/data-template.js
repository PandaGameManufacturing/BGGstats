// This is a resource to help me keep track of how data is stored in my database

"use strict";

let Charts = {

};
let Games = {
  bggID: {
    // calculated with server logic
    movementDay: -1,
    movementWeek: 17,
    movementMonth: null,
    movementYear: null,

    // via bgg API call
    yearPublished: "1990",
    thumbnail: "//cf.geekdo-images.com/images/pic3122349_t.jpg",
    description: "Something evil stirs in Arkham...",
    image: "//cf.geekdo-images.com/images/pic3122349.jpg",
    link: [
      {
        $: {
          id:"1002",
          type: "boardgamecategory",
          value: "Card Game"
        }
      },
      {
        $: {
          id:"18575",
          type: "boardgamepublisher",
          value: "FryxGames"
        }
      },

    ],
    maxPlayers: "6",
    maxPlayTime: "60",
    minAge: "17",
    minPlayers: "1",
    minPlayTime: "30",
    playingTime: "60",
    pollNumPlayers: [
      { info: {
        name: "suggested_numplayers",
        title:"User Suggested Number of Players",
        totalvotes: "112"
        }
      },
      {
        results: []
      }
    ],
    pollPlayerAge: [
      { info: {
        name: "suggested_numplayers",
        title:"User Suggested Number of Players",
        totalvotes: "112"
        }
      },
      {
        results: []
      }
    ],
    pollLanguage: [
      { info: {
        name: "suggested_numplayers",
        title:"User Suggested Number of Players",
        totalvotes: "112"
        }
      },
      {
        results: []
      }
    ],

    // stuff also in Rankings table
    name: "Eurorails",
    bggID: "157",
    rank: 883,
    geekRating: 8.446,
    AverageRating: 88.65,
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
    // date tags
    date_bggID: "20161217_game_157",
    date_top10: "20161217_top10_true",
    date_top100: "20161217_top100_false",
    date_top1000: "20161217_top1000_false",
    date_top10000: "20161217_top10000_false",
    date_percentile1: "20161217_date_percentile1_false",
    date_percentile5: "20161217_date_percentile5_false",
    date_percentile10: "20161217_date_percentile10_false",
    date_percentile25: "20161217_date_percentile25_false",
    date_percentile50: "20161217_date_percentile50_false",
    date_percentile75: "20161217_date_percentile75_false",
    // crawl formats
    crawlYMD: "20161217",
    crawlISO: "2016-12-17T09:02:16.973Z",
    crawlLocal: "03:02:16 GMT-0600 (CST)",
    crawlMilliseconds: 1481965336973,
    crawlYear: 2016,
  }
};
let Rankings = {
  name: "Eurorails",
  bggID: "157",
  rank: 883,
  geekRating: 8.446,
  AverageRating: 88.65,
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
  // date tags
  date_bggID: "20161217_game_157",
  date_top10: "20161217_top10_true",
  date_top100: "20161217_top100_false",
  date_top1000: "20161217_top1000_false",
  date_top10000: "20161217_top10000_false",
  date_percentile1: "20161217_date_percentile1_false",
  date_percentile5: "20161217_date_percentile5_false",
  date_percentile10: "20161217_date_percentile10_false",
  date_percentile25: "20161217_date_percentile25_false",
  date_percentile50: "20161217_date_percentile50_false",
  date_percentile75: "20161217_date_percentile75_false",
  // crawl formats
  crawlYMD: "20161217",
  crawlISO: "2016-12-17T09:02:16.973Z",
  crawlLocal: "03:02:16 GMT-0600 (CST)",
  crawlMilliseconds: 1481965336973,
  crawlYear: 2016,
};

let GamesPublished = 2;
let BGG = 2;
let Users = 2;

console.log("Data Template", {
  "Charts": Charts,
  "Games": Games,
  "Rankings": Rankings,
  "GamesPublished": GamesPublished,
  "BGG": BGG,
  "Users": Users
});