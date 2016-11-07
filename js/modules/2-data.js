
/**********************\
|  2. Data             |
\**********************/

let getData = {},
    dataFunctions = [],
    apiCalls = {
      "hotness": "http://bgg-api.herokuapp.com/api/v1/hot"
    };

// getData.hotness returns an object of data, etc.




for (var prop in apiCalls) {
  console.log("apiCalls." + prop + " = " + apiCalls[prop]);

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

// do something after all promises complete. fails if all don't return
Promise.all([dataFunctions.hotness()])
.then( arrayOfData => {
  parseData(arrayOfData);
  console.log("Array Of Data:", arrayOfData);
});

function parseData(arrayOfData) {
  let hotnessArray = arrayOfData[0].items.item.splice(0,5);
  console.log("hotnessArray:", hotnessArray);
  }

  // toHTML(getData.hotness); // will take (stat, chartType) as paramaters
