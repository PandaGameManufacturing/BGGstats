
/**********************\
| 4. DOM Interactions  |
\**********************/

function toHTML (data, chartType) {

    let htmlString = "", shelf12 = "";

    let rowStart = "<div class='row'>";

    switch(chartType) {
      case "shelf-12":
          shelf12 = `

        ${rowStart}

       <div class="col-sm-12 col-md-12 col-lg-3">
            <div class="statbox">

              <div class="label-title">
                <h2><strong>The Hotness</strong> Right Now</h2>
                <a><img class="help pull-right" src="images/icons/help.svg" alt="What is The Hotness Stat?"></a>
              </div>

                  <table class="table-top10">
                      <tr><th><div class="number n1">1</div><div class="top10-text">Terraforming Mars</div></th></tr>
                      <tr><th><div class="number">2</div><div class="top10-text">A Feast for Odin</div></th></tr>
                      <tr><th><div class="number">3</div><div class="top10-text">Arkham Horror: The Card Game</div></th></tr>
                      <tr><th><div class="number">4</div><div class="top10-text">SeaFall</div></th></tr>
                      <tr><th><div class="number">5</div><div class="top10-text">Mechs vs. Minions</div></th></tr>
                  </table>
           </div>

        </div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="statbox">


                <div class="shelf text-center">

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="https://cf.geekdo-images.com/images/pic2891964_t.jpg">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="https://cf.geekdo-images.com/images/pic3146943_t.png">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="https://cf.geekdo-images.com/images/pic3122349_t.jpg">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="https://cf.geekdo-images.com/images/pic3002143_t.png">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="https://cf.geekdo-images.com/images/pic3184103_t.jpg">
                  </div>

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
                      <tr>

                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>

                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
            </div>
          </div>

          `;
          console.log("you printed a shelf with:", data);
          break;
      case "other":
            console.log("test");
          break;
      default:
          console.log("test");
  }

  // Set order of stats
  htmlString =
    shelf12;

  $("#main").prepend(htmlString);
}