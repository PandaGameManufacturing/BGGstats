"use strict";

let $ = require("jquery");

let drawRankChart = (title, data, slot) => {
  console.log("movement chart data:", data);

  let item1Link = `https://boardgamegeek.com/boardgame/${data[0].bgg}`;
  let item1Rank = data[0].movement;
  let item1ImageURL = data[0].details.thumbnail[0];
  let biggestMover = `<ol><li><strong><a href="${item1Link}/">${data[0].name}</a></strong></li></ol>`;

  let snippets = `
<!-- Rank Chart  -->
    <div class="row rankChart">
      <div class="col-sm-12 col-md-12 col-lg-12">

      <div class="statbox">

        <div class="label-title">
          <h2>${title}</h2>
          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Biggest Movers Chart?"></a>
        </div>

            <!-- Movement Chart -->
            <div class="col-lg-8">
              <p>movement chart</p>
            </div>

            <!-- Details About Biggest Mover -->
            <div class="col-lg-4">

              <div class="row">
                ${biggestMover}
              </div>

              <div class="row">

                <div class="col-sm-6">
                  <img src="${item1ImageURL}" alt="${data[0].name}"/>
                </div>

                <div class="col-sm-6">

                  <div id="rankMovement">${item1Rank}</div>
                  <p id="rankDescription">up ${item1Rank} spots <br/>in a week</p>

                </div>

              </div>

            </div>

        </div>

      </div>
    </div>
  `;

  $(`#${slot}`).html(snippets);

};

module.exports = drawRankChart;


