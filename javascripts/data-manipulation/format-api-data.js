"use strict";

// requires
let xml2js = require("xml2js");

let xml = xmlArray => {

  let gameDataArray = [];

  for (let i = 0; i < xmlArray.length; i++) {

    let parseString = xml2js.parseString;
    let xml = xmlArray[i];
    parseString(xml, (err, result) => {
      gameDataArray.push(result); // push json to new array
    });
  }

  // array of game data
  let games = [];

  for (let i = 0; i < gameDataArray.length; i++) {

    let game = {};

    // map data
    game.name          = gameDataArray[i].items.item[0].name[0].$.value;
    game.bggID         = gameDataArray[i].items.item[0].$.id;
    game.description   = gameDataArray[i].items.item[0].description[0];
    game.image         = gameDataArray[i].items.item[0].image[0];
    game.thumbnail     = gameDataArray[i].items.item[0].thumbnail[0];
    game.minPlayers    = gameDataArray[i].items.item[0].minplayers[0].$.value;
    game.maxPlayers    = gameDataArray[i].items.item[0].maxplayers[0].$.value;
    game.minPlayTime   = gameDataArray[i].items.item[0].minplaytime[0].$.value;
    game.maxPlayTime   = gameDataArray[i].items.item[0].maxplaytime[0].$.value;
    game.playingTime   = gameDataArray[i].items.item[0].playingtime[0].$.value;
    game.weight        = gameDataArray[i].items.item[0].statistics[0].ratings[0].averageweight[0].$.value;
    game.ratingAverage = gameDataArray[i].items.item[0].statistics[0].ratings[0].average[0].$.value;
    game.ratingGeek    = gameDataArray[i].items.item[0].statistics[0].ratings[0].ranks[0].rank[0].$.bayesaverage;
    game.yearPublished = gameDataArray[i].items.item[0].yearpublished[0].$.value;

    // push formatted data to games array
    games.push(game);

  }

  // return formatted games array
  return games;

};

let azure = array => {

  // array of game data
  let games = [];

  for (let i = 0; i < array.length; i++) {

    let game = {};

    // map data
    game.name          = array[i].name;
    game.bggID         = array[i].gameId;
    game.description   = array[i].description;
    game.image         = array[i].image;
    game.thumbnail     = array[i].thumbnail;
    game.minPlayers    = array[i].minPlayers;
    game.maxPlayers    = array[i].maxPlayers;
    game.minPlayTime   = array[i].playingTime;
    game.maxPlayTime   = array[i].playingTime;
    game.maxPlayTime   = array[i].playingTime;
    game.mechanics     = array[i].mechanics;
    game.ratingAverage = array[i].averageRating;
    game.ratingGeek    = array[i].bggRating;
    game.yearPublished = array[i].yearPublished;

    // push formatted data to games array
    games.push(game);

  }

  // return formatted games array
  return games;

};




module.exports = {xml, azure};