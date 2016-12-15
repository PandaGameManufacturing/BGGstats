"use strict";

let $ = require("jquery");

let drawRankChart = (title, data, slot) => {

  let snippets = `
    <!-- Rank Chart  -->
    <div class="row">
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
              <p>details about biggest mover</p>
            </div>

        </div>

      </div>
    </div>
  `;

  $(`#${slot}`).html(snippets);

};

module.exports = drawRankChart;


