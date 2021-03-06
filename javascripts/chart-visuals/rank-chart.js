"use strict";

let $ = require("jquery"),
    addCommas = require("../assets/add-commas");

// http://jsfiddle.net/ZaLiTHkA/87rmhkr3/

let drawRankChart = (settings, slot) => {

  let data = settings.dataSource;
  let chartData = null;
  let weekbutton = null;
  let daybutton = null;

  // pull data from right place based on date range and any filtering
  switch(settings.dateRange + settings.dataFilter) {
    case "dayall":
      chartData = data.movementDay;
      weekbutton = `<button id="${settings.dataFilter}-${settings.dateRange}-weekbutton" type="button" class="btn btn-default">Week</button>`;
      daybutton = `<button id="${settings.dataFilter}-${settings.dateRange}-daybutton" type="button" class="btn-primary btn btn-default">Day</button>`;
      break;
    case "day1000":
      chartData = data.movementToday1000;
      weekbutton = `<button id="${settings.dataFilter}-${settings.dateRange}-weekbutton" type="button" class="btn btn-default">Week</button>`;
      daybutton = `<button id="${settings.dataFilter}-${settings.dateRange}-daybutton" type="button" class="btn-primary btn btn-default">Day</button>`;
      break;
    case "weekall":
      chartData = data.movementWeek;
      weekbutton = `<button id="${settings.dataFilter}-${settings.dateRange}-weekbutton" type="button" class="btn-primary btn btn-default">Week</button>`;
      daybutton = `<button id="${settings.dataFilter}-${settings.dateRange}-daybutton" type="button" class="btn btn-default">Day</button>`;
      break;
    case "week1000":
      chartData = data.movementWeek1000;
      weekbutton = `<button id="${settings.dataFilter}-${settings.dateRange}-weekbutton" type="button" class="btn-primary btn btn-default">Week</button>`;
      daybutton = `<button id="${settings.dataFilter}-${settings.dateRange}-daybutton" type="button" class="btn btn-default">Day</button>`;
      break;
  }

  let game1 = chartData.positive[0];
  let item1Link = `https://boardgamegeek.com/boardgame/${game1.bggID}`;
  let item1Rank = game1.movement;
  let item1ImageURL = game1.thumbnail;
  let biggestMover = `<ol class="color-list"><li><strong><a href="${item1Link}/">${game1.name}</a></strong></li></ol>`;
  let percentChange = game1.percentile - Math.round((game1.rank-game1.movement)/data.totalRankedGames*100);
  let percentChangeNumber = Math.round((game1.rank-game1.movement)/data.totalRankedGames*100);

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
    top10html += `
      <li>
        <div class="truncate">
          <a href="http://boardgamegeek.com/boardgame/${chartData.positive[i].bggID}/">
            ${chartData.positive[i].name}
          <a/>
        </div>
        <div class="hidden-md hidden-lg movementSmallDetails">
        <span class="hidden-md hidden-lg up">Up ${chartData.positive[i].movement} spots</span>
        <span class="hidden-md hidden-lg rank">Ranked ${addCommas(chartData.positive[i].rank)}</span>
        </div>
      </li>`;
  }

  // loop over positive ranks
  for (let i = 0; i < 10; i++) {
    ranksPositive += `<li class="pull-right">${addCommas(chartData.positive[i].rank)}</li>`;
  }

  // loop over negative ranks
  for (let i = 0; i < 5; i++) {
    ranksNegative += `<li class="pull-right">${addCommas(chartData.negative[i].rank)}</li>`;
  }

  // loop over top 10 status bars
  for (let i = 0; i < 10; i++) {
    let percent = (chartData.positive[i].movement / game1.movement) * 100; // build percent based on biggest movement
    top10status += `
      <div class="progress positive">
        <div class="progress-bar progress-bar-success" role="progressbar" style="width:${percent}%">
          <p>Up ${chartData.positive[i].movement}</p>
        </div>
      </div>
    `;
  }

  // loop over bottom 5 titles
  for (let i = 4; i > -1; i--) {
    bottom5html += `
      <li>
        <div class="truncate">
          <a href="http://boardgamegeek.com/boardgame/${chartData.negative[i].bggID}/">${chartData.negative[i].name}
          </a>
        </div>
        <div class="hidden-md hidden-lg movementSmallDetails">
        <span class="hidden-md hidden-lg down">Down ${chartData.negative[i].movement} spots</span>
        <span class="hidden-md hidden-lg rank">Ranked ${addCommas(chartData.negative[i].rank)}</span>
        </div>
      </li>
    `;  }

  // loop over bottom 5 status bars
  for (let i = 0; i < 5; i++) {

    let percent = (chartData.negative[i].movement / chartData.negative[4].movement) * 100; // build percent based on biggest movement
    let movementRawData = chartData.negative[i].movement.toString();
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


  let allGame1Details = `
        <!-- Details About Biggest Mover -->
        <div class="col-md-3 rankChart">

          <div class="row hidden-xs hidden-sm">
            ${biggestMover}
          </div>

          <div class="row">

            <div class="col-xs-12 text-center">

                <div class="shelf-shadowed">
                  <a href="https://boardgamegeek.com/boardgame/${game1.bggID}/">
                    <img class="shelf-img" alt="${game1.name}" title="${game1.name}" src="${game1.thumbnail}">
                  </a>
                </div>

                <div class="shelf-bottom">
                  <div class="shelf-left">
                    <div class="shelf-right"></div>
                  </div>
                </div>

            </div>


          <div class="row">
          </div>

            <div id="rankMovement">${addCommas(item1Rank)}</div>
            <p id="rankDescription">Up ${addCommas(item1Rank)} spots from ${settings.dateString}</p>

          <div class="row">

            <table class="table table-hover">

                <tr>
                  <td>
                    Ranked <strong>${addCommas(game1.rank)}</strong>
                  </td>
                  <td>Published <strong>${game1.yearPublished}</strong></td>
                </tr>
                <tr>
                  <td>In Top <strong>${game1.percentile}%</td>
                  <td>Up <strong>${percentChange}%</strong></td>
                </tr>
                <tr>
                  <td colspan="2"><a href="${item1Link}">${game1.name}</a> is ranked in the top ${game1.percentile}% of all ranked board games (currently ${addCommas(data.totalRankedGames)}). It was in the top ${game1.percentile+percentChange}% ${settings.dateString}.</td>
                </tr>


                ${apiDetails}
            </table>

          </div>

        </div>

    </div>
  `;

  let snippets = `
<!-- Rank Chart  -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">

        <div class="statbox">

          <div class="label-title">
            <h2>${settings.chartTitle}</h2>

            <div class="btn-group" role="group" aria-label="...">
              ${weekbutton}
              ${daybutton}
            </div>

            <a data-tooltip="${settings.helpText}" class="help-link pull-right"><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Biggest Movers Chart?"><span class="hidden-sm hidden-xs">About This View</span></a>
          </div>
          <br/>

        </div>


              <!-- Movement Chart -->
              <div class="col-md-9 rankChart">

                  <div class="row">

                      <div class="col-sm-2 bottom-wrapper hidden-sm hidden-xs">
                        ${bottom5status}
                      </div>

                      <span class="hidden-md hidden-lg">${allGame1Details}</span>

                      <div class="col-xs-12 col-md-4">
                        <ol>
                          ${top10html}
                       </ol>
                       <ol class="negative">
                         ${bottom5html}
                       </ol>
                       <br/>
                      </div>

                      <div class="col-sm-1 col-xs-2 hidden-xs" id="rankColumn">
                        <ul>
                          <li class="pull-right"><strong>Rank</strong></li>
                          ${ranksPositive}
                        </ul>
                        <ul>
                          <li style="color: white" class="pull-right">Rank</li>
                          ${ranksNegative}
                        </ul>

                      </div>

                      <div class="col-sm-5 top-wrapper hidden-sm hidden-xs">
                        ${top10status}
                      </div>

                  </div>

              </div>

              <span class="hidden-sm hidden-xs">${allGame1Details}</span>

        </div>
      </div>
  `;

  // add this chart data as a div in the correct slot
  $(`#${slot}`).append(`<div class="container" id="${settings.dataFilter}-${settings.dateRange}">
      ${snippets}
    </div>`);
};

module.exports = drawRankChart;


