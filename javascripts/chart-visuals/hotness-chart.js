"use strict";

let $ = require("../../third-party-js/jquery-local");

let hotnessChart = (title, data) => {
  console.log("Data needed for hotness chart", data);

  // item 1 description
  let truncateLength = 250,
      item1Link = `https://boardgamegeek.com/boardgame/${data[0].gameId}`,
      descriptionData = String(data[0].details.description).substring(0, truncateLength),
      description = `${descriptionData}... <a href="${item1Link}">Read More</a>`;

  // table configuration

  // Snippets all charts use
  let htmlString = "",
      shelf12 = "";

    let top5list = "";

    let gameDetails1 = "", gameDetails2 = "", gameDetails3 = "";

    top5list += `
        <li><a href="${item1Link}/">${data[0].name}</a></li>

        <table class="table table-hover">
          <tr>
            <td><strong>Game Description</strong></td>
            <td>${data[0].yearPublished}</td>
          </tr>
          <tr>
            <td colspan="2">${description}</td>
          </tr>
        </table>

      `;


      gameDetails1 += `<ol>`;

      // Configure first row of info
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

      // Configure second row of info
      for (let i = 0; i < data.length; i++) {
        let playerCountMin = data[i].details.minplayers[0].$.value,
            playerCountMax = data[i].details.maxplayers[0].$.value,
            playerCount = `${playerCountMin}-${playerCountMax} players`;
            gameDetails2 += `<td>${playerCount}</td>`;
      }

      // Configure third row of info
      for (let i = 0; i < data.length; i++) {
        let timeMin = data[i].details.minplaytime[0].$.value,
            timeMax = data[i].details.maxplaytime[0].$.value,
            time = `${timeMin}-${timeMax} minutes`;
        gameDetails3 += `<td>${time}</td>`;
      }


      shelf12 += `
       <div class='row'>
          <div class="col-sm-12 col-md-12 col-lg-3">
            <div class="statbox">

              <div class="label-title">
                <h2>${title}</h2>
                <a><img class="help pull-right" src="/dist/images/icons/help.svg" alt="What is The Hotness Stat?"></a>
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

                // /loop over shelf items
                for (let i = 0; i < data.length; i++) {
                  shelf12 += `
                    <div class="shelf-shadowed">
                      <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/">
                        <img class="shelf-img" alt="${data[i].name}" title="${data[i].name}" src="${data[i].thumbnail}">
                      </a>
                    </div>
                  `;
                }

                shelf12 += `
                  <!-- Wooden Shelf -->
                  <div class="shelf-bottom">
                    <div class="shelf-left">
                      <div class="shelf-right"></div>
                    </div>
                  </div>


                  <!-- Table of Info -->
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

    htmlString = shelf12;

    $("#main").prepend(htmlString);


};

module.exports = hotnessChart;