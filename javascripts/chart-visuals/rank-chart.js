"use strict";

let $ = require("jquery");

// http://jsfiddle.net/ZaLiTHkA/87rmhkr3/

let drawRankChart = (title, compareString, data, slot) => {

  let chartData = data.movement,
      game1 = data.movement.positive[0];

  // console.log("chartData:", chartData);
  // console.log("id:", games[chartData.positive[0]].bggID);

  // console.log("data:", data);
  let item1Link = `https://boardgamegeek.com/boardgame/${game1.bggID}`;
  let item1Rank = game1.movementDay;
  let item1ImageURL = game1.thumbnail;
  let biggestMover = `<ol class="color-list"><li><strong><a href="${item1Link}/">${game1.name}</a></strong></li></ol>`;
  let percentChange = game1.percentile - Math.round((game1.rank-game1.movementDay)/data.totalRankedGames*100);
  let percentChangeNumber = Math.round((game1.rank-game1.movementDay)/data.totalRankedGames*100);

  let ranksPositive = "", ranksNegative = "", top10html = "", bottom5html = "", top10status = "", bottom5status = "";



  // player count
  let playerCountMin = game1.minPlayers,
      playerCountMax = game1.maxPlayers,
      playerCount = `${playerCountMin}-${playerCountMax} players`;

  // playing time
  let timeMin = game1.minPlayTime,
      timeMax = game1.maxPlayTime,
      time = `${timeMin}-${timeMax} minutes`;

  // item 1 description
  let truncateLength = 250,
      descriptionData = String(game1.description).substring(0, truncateLength),
      description = `${descriptionData}... <a href="${item1Link}">Read More</a>`;

  // loop over top 10 titles
  for (let i = 0; i < 10; i++) {
    top10html += `<li><div class="truncate"><a href="http://boardgamegeek.com/boardgame/${chartData.positive[i].bggID}/">${chartData.positive[i].name}<a/></div></li>`;
  }

  // loop over positive ranks
  for (let i = 0; i < 10; i++) {
    ranksPositive += `<li>${numberWithCommas(chartData.positive[i].rank)}</li>`;
  }

  // loop over negative ranks
  for (let i = 0; i < 5; i++) {
    ranksNegative += `<li>${numberWithCommas(chartData.negative[i].rank)}</li>`;
  }


  // loop over top 10 status bars
  for (let i = 0; i < 10; i++) {
    let percent = (chartData.positive[i].movementDay / game1.movementDay) * 100; // build percent based on biggest movement
    top10status += `
      <div class="progress positive">
        <div class="progress-bar progress-bar-success" role="progressbar" style="width:${percent}%">
          <p>Up ${chartData.positive[i].movementDay}</p>
        </div>
      </div>
    `;
  }

  // loop over bottom 5 titles
  for (let i = 0; i < 5; i++) {
    bottom5html += `<li><div class="truncate"><a href="http://boardgamegeek.com/boardgame/${chartData.negative[i].bggID}/">${chartData.negative[i].name}</a></div></li>`;  }

  // loop over bottom 5 status bars
  for (let i = 0; i < 5; i++) {

    let percent = (chartData.negative[i].movementDay / chartData.negative[4].movementDay) * 100; // build percent based on biggest movement
    let movementRawData = chartData.negative[i].movementDay.toString();
    let movement = movementRawData.replace(/\D+/g, ''); // remove everything execpt digits
    bottom5status += `
      <div class="progress negative">
        <div class="progress-bar progress-bar-success" role="progressbar" style="width:${percent}%">
          <p>${movement} Down</p>
        </div>
      </div>
    `;
  }

  let apiDetails = "";
  // <tr>
  //   <td>${playerCount}</td>
  //   <td>${time}</td>
  // </tr>
  // <tr>
  //   <td coldiv="12">
  //     ${description}
  //   </td>
  // </tr>

  let snippets = `
<!-- Rank Chart  -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">

        <div class="statbox" data-tooltip="Based on user ratings on BoardGameGeek, each board game has a unique rank. This chart shows which ranked games moved the most over the last day. Data is calculated daily.">

          <div class="label-title">
            <h2>${title}</h2>
            <a href="#"><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Biggest Movers Chart?"></a>
          </div>
          <br/>

        </div>


              <!-- Movement Chart -->
              <div class="col-lg-9 rankChart">

                  <div class="row">

                      <div class="col-sm-2 bottom-wrapper">
                        ${bottom5status}
                      </div>

                      <div class="col-sm-4">
                        <ol>
                          ${top10html}
                       </ol>
                       <ol class="negative">
                         ${bottom5html}
                       </ol>
                      </div>

                      <div class="col-sm-1" id="rankColumn">
                        <ul>
                          <li><strong>Rank</strong></li>
                          ${ranksPositive}
                        </ul>
                        <ul id="rankColumnNegative">
                          ${ranksNegative}
                        </ul>

                      </div>

                      <div class="col-sm-5 top-wrapper">
                        ${top10status}
                      </div>

                  </div>

              </div>

              <!-- Details About Biggest Mover -->
              <div class="col-lg-3 rankChart">

                <div class="row">
                  ${biggestMover}
                </div>

                <div class="row">

                  <div class="col-sm-4">
                      <a href="${item1Link}">
                        <img alt="${game1.name}" title="${game1.name}" src="${item1ImageURL}">
                      </a>
                  </div>

                  <div class="col-sm-8"s>

                    <div id="rankMovement">${item1Rank}</div>
                    <p id="rankDescription">Up ${item1Rank} spots <br/>from ${compareString}</p>

                  </div>


                <div class="row">
                </div>

                <div class="row">

                  <table class="table table-hover">

                      <tr>
                        <td>Ranked <strong>${numberWithCommas(game1.rank)}</strong></td>
                        <td>Published <strong>${game1.yearPublished}</strong></td>

                      </tr>
                      <tr>
                        <td>In Top <strong>${game1.percentile}%</td>
                        <td>Up <strong>${percentChange}%</strong></td>

                      </tr>
                      <tr>
                        <td colspan="2"><a href="${item1Link}">${game1.name}</a> is ranked in the top ${game1.percentile}% of all ranked board games (currently ${numberWithCommas(data.totalRankedGames)}). It was in the top ${percentChangeNumber}% ${compareString}.</td>
                      </tr>

                      ${apiDetails}
                  </table>

                </div>

              </div>

          </div>

        </div>
      </div>
  `;

  $(`#${slot}`).html(snippets);

};

// function to add commas to large numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = drawRankChart;


