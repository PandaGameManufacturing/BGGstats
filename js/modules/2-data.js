
/**********************\
|  2. Data             |
\**********************/

function getHotness () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://boardgamegeek.com/xmlapi2/hot?boardgame"
    }).done(data => {
      resolve(data);
    }).fail(error => {
      reject(error);
    });
  });
}

getHotness()
.then( data => {
  console.log("Hotness Data:", data);
}, error => {
  console.log("error:", error);
});