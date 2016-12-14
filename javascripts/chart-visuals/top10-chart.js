"use strict";

let $ = require("jquery");

let drawTop10List = (title, crawlerData, slot) => {

  // build top 10 list
  let top10html = "",
      d = crawlerData;

  // loop over array of objects
  for (let i = 0; i < crawlerData.length; i++) {
    top10html += `<li><a href="http://boardgamegeek.com/boardgame/${d[i].BggId}/">${d[i].Name}<a/></li>`;
  }

  let snippets = `
    <div class="row">

      <!-- Top 10  -->
      <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="statbox">
                      <div class="label-title">
          <h2>${title}</h2>
          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Top 10 Stat?"></a>
        </div>

            <div class="col-sm-12 col-md-7 col-lg-8">

              <!-- Line Chart -->
             <div id="top10"></div>

            </div>

            <!-- Table -->
            <div class="col-sm-12 col-md-5 col-lg-4">
              <ol class="color-list">

                ${top10html}

             </ol>
            </div>

          </div>
      </div>
    </div>

  `;

  $(`#${slot}`).html(snippets);

};

module.exports = drawTop10List;


