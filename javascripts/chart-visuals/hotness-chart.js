"use strict";

let $ = require("jquery");

let hotnessChart = (title, data, slot) => {
  // Setting up variables
  let shelf = "", top5list = "", gameDetails1 = "", gameDetails2 = "", gameDetails3 = "";

  /**********************\
  |                      |
  |  Info Box for Game 1
  |                      |
  \**********************/

  // item 1 description
  let truncateLength = 260,
      item1Link = `https://boardgamegeek.com/boardgame/${data[0].gameId}`,
      descriptionData = String(data[0].details.description).substring(0, truncateLength),
      description = `<a href="${item1Link}">${descriptionData}...</a>`;

  // item 1 html
  top5list += `
    <li><a href="${item1Link}/"><strong>About ${data[0].name}</strong</a></li>
    <table class="table table-hover">
      <tr>
        <td><strong>${data[0].yearPublished}</strong> - ${description}</td>
      </tr>
    </table>
  `;

  /**********************\
  |                      |
  |  Table Data
  |                      |
  \**********************/

  // titles in list form
    gameDetails1 += `<ol>`;
    for (let i = 0; i < data.length; i++) {
      gameDetails1 += `
         <li>
          <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/">
            ${data[i].name}
          </a>
        </li>
      `;
    }
    gameDetails1 += `</ol>`;

    // player count
    for (let i = 0; i < data.length; i++) {
      let playerCountMin = data[i].details.minplayers[0].$.value,
          playerCountMax = data[i].details.maxplayers[0].$.value,
          playerCount = `${playerCountMin}-${playerCountMax} players`;
          gameDetails2 += `<td>${playerCount}</td>`;
    }

    // playing time
    for (let i = 0; i < data.length; i++) {
      let timeMin = data[i].details.minplaytime[0].$.value,
          timeMax = data[i].details.maxplaytime[0].$.value,
          time = `${timeMin}-${timeMax} minutes`;
          gameDetails3 += `<td>${time}</td>`;
    }

  /**********************\
  |                      |
  |  Shelf Visuals
  |                      |
  \**********************/

  shelf += `
   <div class='row'>
    <div class="col-sm-12 col-md-12 col-lg-3">
      <div class="statbox">
        <div class="label-title">
          <h2>${title}</h2>
          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Hotness Stat?"></a>
        </div>
          <ol>
            ${top5list}
          </ol>
     </div>
    </div>

    <div class="col-sm-12 col-md-12 col-lg-9">
      <div class="statbox">
        <div class="shelf text-center">
        `;

        // loop over shelf images
        for (let i = 0; i < data.length; i++) {
          shelf += `
            <div class="shelf-shadowed">
              <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/">
                <img class="shelf-img" alt="${data[i].name}" title="${data[i].name}" src="${data[i].thumbnail}">
              </a>
            </div>
          `;
        }

        // wooden shelf
        shelf += `
          <div class="shelf-bottom">
            <div class="shelf-left">
              <div class="shelf-right"></div>
            </div>
          </div>

          <table class="table shelf-table">
            </thead>
            <tbody>
              <tr>${gameDetails1}</tr>
              <tr>${gameDetails2}</tr>
              <tr>${gameDetails3}</tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>

      `;

  $(`#${slot}`).html(shelf);

};

module.exports = hotnessChart;