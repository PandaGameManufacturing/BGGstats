"use strict";

let $ = require("jquery");

let globalData;

// Setting up variables
  let shelf = "", top5list = [], gameDetails1 = "", gameDetails2 = "", gameDetails3 = "";

let hotness = (title, helpText, data) => {

  // push game data for 5 hotest games to hotnessGames array
  let hotnessGames = data.hotness;

  // save data so other function can use it
  globalData = hotnessGames;

  /**********************\
  |                      |
  |  Info Box for Game 1
  |                      |
  \**********************/

// create 5 descriptions so they can be swapped
for (let i = 0; i < 5; i++) {

  let bggAPI = data.games[hotnessGames[i].bggID];
   // item 1 description
  let truncateLength1 = 200,
      item1Link1 = `https://boardgamegeek.com/boardgame/${hotnessGames[i].bggID}`,
      descriptionData1 = String(bggAPI.description).substring(0, truncateLength1),
      description1 = `<a href="${item1Link1}">${descriptionData1}...</a>`;

  // item 1 html
  top5list[i] = `
    <h3><a href="${item1Link1}/">${hotnessGames[i].name}</a></h3>
    <table class="table table-hover">
      <tr>
        <td><strong>${hotnessGames[i].yearPublished}</strong> - ${description1}</td>
      </tr>
    </table>
  `;
}

  /**********************\
  |                      |
  |  Table Data
  |                      |
  \**********************/

  // titles in list form
    gameDetails1 += `<ol class="hidden-sm hidden-xs">`;
    for (let i = 0; i < hotnessGames.length; i++) {
      gameDetails1 += `
         <li>
          <a href="https://boardgamegeek.com/boardgame/${hotnessGames[i].bggID}/">
            ${hotnessGames[i].name}
          </a>
        </li>
      `;
    }
    gameDetails1 += `</ol>`;

    // player count
    for (let i = 0; i < hotnessGames.length; i++) {

      let bggAPI = data.games[hotnessGames[i].bggID];

      let playerCountMin = bggAPI.minPlayers,
          playerCountMax = bggAPI.maxPlayers,
          playerCount = `${playerCountMin}-${playerCountMax} players`;
          gameDetails2 += `<td>${playerCount}</td>`;
    }

    // playing time
    for (let i = 0; i < hotnessGames.length; i++) {

      let bggAPI = data.games[hotnessGames[i].bggID];
      let time = "";
      let timeMin = bggAPI.minPlayTime;

      let timeMax = bggAPI.maxPlayTime;
          if (timeMin === timeMax) {
            time = `${timeMax} minutes`;
          } else {
            time = `${timeMin}-${timeMax} minutes`;
          }
        gameDetails3 += `<td>${time}</td>`;
    }

  /**********************\
  |                      |
  |  Shelf Visuals
  |                      |
  \**********************/

  shelf += `
   <div class='row'>
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="statbox">
        <div class="label-title">
          <h2>${title}</h2>
          <a data-tooltip="${helpText}" href="#" class="help-link pull-right"><img class="help pull-right" src="/images/icons/help.svg" alt="What is Most Viewed Chart?"><span class="hidden-sm hidden-xs">About This Chart</span></a>
        </div>
     </div>
    </div>
  </div>
  <div class='row'>

  <div class="col-xs-12 text-center hidden-md hidden-lg">

      <div class="shelf-shadowed">
        <a href="https://boardgamegeek.com/boardgame/${hotnessGames[0].bggID}/">
          <img class="shelf-img" alt="${hotnessGames[0].name}" title="${hotnessGames[0].name}" src="${hotnessGames[0].thumbnail}">
        </a>
      </div>

      <div class="shelf-bottom">
        <div class="shelf-left">
          <div class="shelf-right"></div>
        </div>
      </div>
      <table class="table shelf-table hidden-md hidden-lg">
        </thead>
        <tbody>
          <tr>
            <td>${data.games[hotnessGames[0].bggID].minPlayers}-${data.games[hotnessGames[0].bggID].maxPlayers} players</td>
            <td>${data.games[hotnessGames[0].bggID].maxPlayTime} minutes</td>
          </tr>
        </tbody>
      </table>
      <br/>
  </div>

  <div class="col-sm-12 col-md-12 col-lg-3">
    <ol id="hotness-inject">
      ${top5list[0]}
    </ol>
  </div>
  <div class="col-sm-12 col-md-12 col-lg-9">

      <div class="statbox">
        <div class="shelf text-center">
        `;

        // loop over shelf images
        for (let i = 0; i < hotnessGames.length; i++) {
          shelf += `
            <div class="shelf-shadowed hidden-sm hidden-xs">
              <a href="https://boardgamegeek.com/boardgame/${hotnessGames[i].bggID}/">
                <img id="hotness-${i+1}" class="shelf-img" alt="${hotnessGames[i].name}" title="${hotnessGames[i].name}" src="${hotnessGames[i].thumbnail}">
              </a>
            </div>
          `;
        }

        // wooden shelf
        shelf += `
          <div class="shelf-bottom hidden-sm hidden-xs">
            <div class="shelf-left">
              <div class="shelf-right"></div>
            </div>
          </div>

          <table class="table shelf-table hidden-sm hidden-xs">
            </thead>
            <tbody>
              <tr>${gameDetails1}</tr>
              <tr>${gameDetails2}</tr>
              <tr>${gameDetails3}</tr>
            </tbody>
          </table>


          <table class="table hidden-md hidden-lg">
              <tr>
                <td rowspan="2">
                  <a href="https://boardgamegeek.com/boardgame/${hotnessGames[1].bggID}/">
                    <img class="hotnessSmall" alt="${hotnessGames[1].name}" title="${hotnessGames[1].name}" src="${hotnessGames[1].thumbnail}">
                  </a>
                </td>
                <td>
                  <strong><a href="https://boardgamegeek.com/boardgame/${hotnessGames[1].bggID}/">2. ${hotnessGames[1].name}</a></strong>
                <td>
              </tr>
              <tr>

                <td>${data.games[hotnessGames[1].bggID].minPlayers}-${data.games[hotnessGames[1].bggID].maxPlayers} players</td>
                <td>${data.games[hotnessGames[1].bggID].maxPlayTime} minutes</td>
              </tr>
          </table>

          <table class="table hidden-md hidden-lg">
              <tr>
                <td rowspan="2">
                  <a href="https://boardgamegeek.com/boardgame/${hotnessGames[2].bggID}/">
                    <img class="hotnessSmall" alt="${hotnessGames[2].name}" title="${hotnessGames[2].name}" src="${hotnessGames[2].thumbnail}">
                  </a>
                </td>
                <td>
                  <strong><a href="https://boardgamegeek.com/boardgame/${hotnessGames[2].bggID}/">3. ${hotnessGames[2].name}</a></strong>
                <td>
              </tr>
              <tr>

                <td>${data.games[hotnessGames[2].bggID].minPlayers}-${data.games[hotnessGames[2].bggID].maxPlayers} players</td>
                <td>${data.games[hotnessGames[2].bggID].maxPlayTime} minutes</td>
              </tr>
          </table>

          <table class="table hidden-md hidden-lg">
              <tr>
                <td rowspan="2">
                  <a href="https://boardgamegeek.com/boardgame/${hotnessGames[3].bggID}/">
                    <img class="hotnessSmall" alt="${hotnessGames[3].name}" title="${hotnessGames[3].name}" src="${hotnessGames[3].thumbnail}">
                  </a>
                </td>
                <td>
                  <strong><a href="https://boardgamegeek.com/boardgame/${hotnessGames[3].bggID}/">4. ${hotnessGames[3].name}</a></strong>
                <td>
              </tr>
              <tr>

                <td>${data.games[hotnessGames[3].bggID].minPlayers}-${data.games[hotnessGames[3].bggID].maxPlayers} players</td>
                <td>${data.games[hotnessGames[3].bggID].maxPlayTime} minutes</td>
              </tr>
          </table>

          <table class="table hidden-md hidden-lg">
              <tr>
                <td rowspan="2">
                  <a href="https://boardgamegeek.com/boardgame/${hotnessGames[4].bggID}/">
                    <img class="hotnessSmall" alt="${hotnessGames[4].name}" title="${hotnessGames[4].name}" src="${hotnessGames[4].thumbnail}">
                  </a>
                </td>
                <td>
                  <strong><a href="https://boardgamegeek.com/boardgame/${hotnessGames[4].bggID}/">5. ${hotnessGames[4].name}</a></strong>
                <td>
              </tr>
              <tr>

                <td>${data.games[hotnessGames[4].bggID].minPlayers}-${data.games[hotnessGames[4].bggID].maxPlayers} players</td>
                <td>${data.games[hotnessGames[4].bggID].maxPlayTime} minutes</td>
              </tr>
          </table>



        </div>
      </div>
    </div>

      `;

  $(`#hotness`).html(shelf);

};

let swapDescription = number => {
  $('#hotness-inject').html(top5list[number]);
};


module.exports = {hotness, swapDescription};