"use strict";

let $ = require("jquery");

// http://jsfiddle.net/ZaLiTHkA/87rmhkr3/

let drawRankChart = (title, data, slot) => {
  console.log("movement chart data:", data);

  let item1Link = `https://boardgamegeek.com/boardgame/${data[0].bgg}`;
  let item1Rank = data[0].movement;
  let item1ImageURL = data[0].details.thumbnail[0];
  let biggestMover = `<ol class="color-list"><li><strong><a href="${item1Link}/">${data[0].name}</a></strong></li></ol>`;

  let gameDetails1 = "", gameDetails2 = "", gameDetails3 = "", top10html = "", bottom5html = "", top10status = "", bottom5status = "";

  // year published
  gameDetails1 += data[0].details.yearpublished[0].$.value;

  // player count
  let playerCountMin = data[0].details.minplayers[0].$.value,
      playerCountMax = data[0].details.maxplayers[0].$.value,
      playerCount = `${playerCountMin}-${playerCountMax} players`;
      gameDetails2 += `<td>${playerCount}</td>`;

  // playing time
  let timeMin = data[0].details.minplaytime[0].$.value,
      timeMax = data[0].details.maxplaytime[0].$.value,
      time = `${timeMin}-${timeMax} minutes`;
      gameDetails3 += `<td>${time}</td>`;

  // item 1 description
  let truncateLength = 350,
      descriptionData = String(data[0].details.description[0]).substring(0, truncateLength),
      description = `${descriptionData}... <a href="${item1Link}">Read More</a>`;

  // loop over top 10 titles
  for (let i = 0; i < 10; i++) {
    top10html += `<li><a href="http://boardgamegeek.com/boardgame/${data[i].bgg}/">${data[i].name}<a/></li>`;
  }

  // loop over top 10 status bars
  for (let i = 0; i < 10; i++) {
    let percent = (data[i].movement / data[0].movement) * 100; // build percent based on biggest movement
    top10status += `
      <div class="progress positive">
        <div class="progress-bar progress-bar-success" role="progressbar" style="width:${percent}%">
          <p>Up ${data[i].movement}</p>
        </div>
      </div>
    `;
  }

  // loop over bottom 5 titles
  for (let i = 10; i < 15; i++) {
    bottom5html += `<li><a href="http://boardgamegeek.com/boardgame/${data[i].bgg}/">${data[i].name}<a/></li>`;
  }

  // loop over bottom 5 status bars
  for (let i = 10; i < 15; i++) {
    let percent = (data[i].movement / data[14].movement) * 100; // build percent based on biggest movement
    let movementRawData = data[i].movement.toString();
    let movement = movementRawData.replace(/\D+/g, ''); // remove everything execpt digits
    bottom5status += `
      <div class="progress negative">
        <div class="progress-bar progress-bar-success" role="progressbar" style="width:${percent}%">
          <p>Down ${movement}</p>
        </div>
      </div>
    `;
  }

  let snippets = `
<!-- Rank Chart  -->
    <div class="row rankChart">
      <div class="col-sm-12 col-md-12 col-lg-12">

      <div class="statbox">

        <div class="label-title">
          <h2>${title}</h2>
          <a href="#"><img

            data-tooltip="Games that moved in BoardGameGeek rankings the most over the last week. The top 1,000 games are tracked and refreshed daily."

          class="help pull-right" src="/images/icons/help.svg" alt="What is The Biggest Movers Chart?"></a>
        </div>

            <!-- Movement Chart -->
            <div class="col-lg-8">

                <div class="row">

                    <div class="col-sm-2 bottom-wrapper">
                      ${bottom5status}
                    </div>

                    <div class="col-sm-5">
                      <ol>
                        ${top10html}
                     </ol>
                     <ol class="negative">
                       ${bottom5html}
                     </ol>
                    </div>

                    <div class="col-sm-5 top-wrapper">
                      ${top10status}
                    </div>

                </div>

            </div>

            <!-- Details About Biggest Mover -->
            <div class="col-lg-4">

              <div class="row">
                ${biggestMover}
              </div>

              <div class="row">

                <div class="col-sm-6">
                  <div class="shelf-shadowed">
                    <a href="${item1Link}">
                      <img class="shelf-img" alt="${data[0].name}" title="${data[0].name}" src="${item1ImageURL}">
                    </a>
                  </div>




                  </a>
                </div>

                <div class="col-sm-6">

                  <div id="rankMovement">${item1Rank}</div>
                  <p id="rankDescription">up ${item1Rank} spots <br/>in a week</p>

                </div>

              </div>

              <div class="row">

                <div class="shelf-bottom">
                  <div class="shelf-left">
                    <div class="shelf-right"></div>
                  </div>
               </div>

               <br/><br/>


                <table class="table table-hover">

                    <tr>
                      <td>${gameDetails1}</td>
                      <td>${gameDetails2}</td>
                      <td>${gameDetails3}</td>
                    </tr>
                    <tr>
                      <td colspan="12">
                        ${description}
                      </td>
                    </tr>

                </table>

              </div>

            </div>

        </div>

      </div>
    </div>
  `;

  $(`#${slot}`).html(snippets);

};

module.exports = drawRankChart;


