"use strict";

let $ = require("jquery");

let top10Chart = (title, slot) => {

  let snippets = `
    <div class="row">

      <!-- Top 10  -->
      <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="statbox">
                      <div class="label-title">
          <h2>${title}</h2>
          <a><img class="help pull-right" src="/images/icons/help.svg" alt="What is The Hotness Stat?"></a>
        </div>

            <div class="col-sm-12 col-md-7 col-lg-8">

              <!-- Line Chart -->
             <div id="top10"></div>

            </div>

            <!-- Table -->
            <div class="col-sm-12 col-md-5 col-lg-4">
              <ol class="color-list">
                <li>Pandemic Legacy: Season 1</li>
                <li>Through the Ages: A New Story of Civilization</li>
                <li>Twilight Struggle</li>
                <li>Terra Mystica</li>
                <li>Caverna: The Cave Farmers</li>
                <li>Star Wars: Rebellion</li>
                <li>Puerto Rico</li>
                <li>7 Wonders Duel</li>
                <li>The Castles of Burgundy</li>
                <li>Agricola</li>
             </ol>
            </div>

          </div>
      </div>
    </div>

  `;

  $(`#${slot}`).html(snippets);

};

module.exports = top10Chart;


