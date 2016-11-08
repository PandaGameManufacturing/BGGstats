/**********************\
|  1. Dependencies     |
\**********************/

// SPEED TESTS

// http://bgg-json.azurewebsites.net/hot         40ms
// http://bgg-api.herokuapp.com/api/v1/hotness   50ms
// https://www.boardgamegeek.com/xmlapi2/hot    700ms

// http://bgg-json.azurewebsites.net/collection/nathantbaker 50ms
// https://boardgamegeek.com/xmlapi2/collection?username=nathantbaker 80ms


/**********************\
|  2. Data             |
\**********************/

let dataFunctions = [],
    apiCalls = {
      "hotness": "http://bgg-json.azurewebsites.net/hot" // Strathmeyer API
    },
    getData = {
      "hotness": {
      // {
      // gameId :167791
      // name: "Terraforming Mars"
      // rank: 1
      // thumbnail: "//cf.geekdo-images.com/images/pic2891964_t.jpg"
      // yearPublished: 2016
      // }, etc
      }
    };

// getData.hotness returns an object of data, etc.

for (var prop in apiCalls) {
  // console.log("apiCalls." + prop + " = " + apiCalls[prop]);

  dataFunctions[prop] = (function (prop) { // iife allows prop to not have closure in loop
    return function () {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: apiCalls[prop]
        }).done(data => {
          resolve(data);
        }).fail(error => {
          reject(error);
        });
      });
    };
  })(prop);

}

console.log("Data Functions:", dataFunctions);

dataFunctions.hotness()
.then( data => {
  getData.hotness = JSON.parse(data).slice(0,5);
  toHTML(getData.hotness, "shelf-12");
  console.log("getData.hotness:", getData.hotness);
}, error => { console.log("dataFunctions.hotness error", error); });


/**********************\
|  3. App Modules      |
\**********************/


/**********************\
| 4. DOM Interactions  |
\**********************/

function toHTML (data, chartType) {

    let htmlString = "", shelf12 = "";

    let rowStart = "<div class='row'>";

    switch(chartType) {
      case "shelf-12":
          shelf12 += `${rowStart}`;
          shelf12 += `

       <div class="col-sm-12 col-md-12 col-lg-3">
            <div class="statbox">

              <div class="label-title">
                <h2><strong>The Hotness</strong> Right Now</h2>
                <a><img class="help pull-right" src="images/icons/help.svg" alt="What is The Hotness Stat?"></a>
              </div>

                  <ol>`;

                // // /loop over list items
                for (let i = 0; i < data.length; i++) {
                  shelf12 += `<li>${data[i].name}</li>`;
                  }

          shelf12 += `

                  </ol>
           </div>

        </div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="statbox">


                <div class="shelf text-center">`;

                // /loop over shelf items
                for (let i = 0; i < data.length; i++) {
                  shelf12 += `
                    <div class="shelf-shadowed">
                      <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/" alt="${data[i].name}">
                        <img class="shelf-img" src="${data[i].thumbnail}">
                      </a>
                    </div>
                  `;
                }

                // shelf12 += `

                //   <div class="shelf-shadowed">
                //     <a href="https://boardgamegeek.com/boardgame/${data[0].gameId}/" alt="${data[0].name}">
                //       <img class="shelf-img" src="${data[0].thumbnail}">
                //     </a>
                //   </div>

                //   <div class="shelf-shadowed">
                //     <a href="https://boardgamegeek.com/boardgame/${data[1].gameId}/" alt="${data[1].name}">
                //       <img class="shelf-img" src="${data[1].thumbnail}">
                //     </a>
                //   </div>

                //   <div class="shelf-shadowed">
                //     <a href="https://boardgamegeek.com/boardgame/${data[2].gameId}/" alt="${data[2].name}">
                //       <img class="shelf-img" src="${data[2].thumbnail}">
                //     </a>
                //   </div>

                //   <div class="shelf-shadowed">
                //     <a href="https://boardgamegeek.com/boardgame/${data[3].gameId}/" alt="${data[3].name}">
                //       <img class="shelf-img" src="${data[3].thumbnail}">
                //     </a>
                //   </div>

                //   <div class="shelf-shadowed">
                //     <a href="https://boardgamegeek.com/boardgame/${data[4].gameId}/" alt="${data[4].name}">
                //       <img class="shelf-img" src="${data[4].thumbnail}">
                //     </a>
                //   </div>`;

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
                      <tr>
                        <td>${data[0].yearPublished}</td>
                        <td>${data[1].yearPublished}</td>
                        <td>${data[2].yearPublished}</td>
                        <td>${data[3].yearPublished}</td>
                        <td>${data[4].yearPublished}</td>
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

/**********************\
|  5. Charts JS   |
\**********************/