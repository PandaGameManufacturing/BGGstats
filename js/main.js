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
  createChart("<strong>The Hotness</strong> Right Now", getData.hotness, "shelf-12");
  console.log("getData.hotness:", getData.hotness);
}, error => { console.log("dataFunctions.hotness error", error); });


/**********************\
|  3. App Modules      |
\**********************/


/**********************\
| 4. DOM Interactions  |
\**********************/

function createChart (title, data, chartType) {

    // Snippets all charts use
    let htmlString = "",
        shelf12 = "",
        rowStart = "<div class='row'>",
        rowEnd = "<div class='row'>";

    switch(chartType) {

      // Chart Type: SHELF-12
      case "shelf-12":

      let top5list = "", top5info1 = "", top5info2 = "";

        // Configure Top 5 List on left
        for (let i = 0; i < data.length; i++) {
          top5list += `
          <li>
            <a href="https://boardgamegeek.com/boardgame/${data[i].gameId}/">${data[i].name}</a>
          </li>
        `;}

        // Configure first row of info
        for (let i = 0; i < data.length; i++) {
          top5info1 += `<td>Published: ${data[i].yearPublished}</td>`;
        }

        // Configure second row of info
        for (let i = 0; i < data.length; i++) {
          top5info2 += `<td>Published: ${data[i].yearPublished}</td>`;
        }

        shelf12 += `
         ${rowStart}
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="statbox">

                <div class="label-title">
                  <h2>${title}</h2>
                  <a><img class="help pull-right" src="images/icons/help.svg" alt="What is The Hotness Stat?"></a>
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
                        <tr>${top5info1}</tr>
                        <tr>${top5info2}</tr>
                      </tbody>
                    </table>

                  </div>
              </div>
            </div>

            `;

          break;
      case "other":
            console.log("test");
          break;
      default:
          console.log("test");
  }

  // Set order of stats
  htmlString = shelf12;

  $("#main").prepend(htmlString);
}

/**********************\
|  5. Charts JS   |
\**********************/