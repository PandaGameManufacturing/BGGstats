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

    let htmlString = "",
        shelf12 = "";

    switch(chartType) {
      case "shelf-12":
          shelf12 = data[0].name;
          console.log("you printed a shelf with:", data);
          break;
      case "other":
            console.log("test");
          break;
      default:
          console.log("test");
  }

  htmlString =
    shelf12;

  $("#main").prepend(htmlString);
}

/**********************\
|  5. Charts JS   |
\**********************/