
/**********************\
| 4. DOM Interactions  |
\**********************/

function createChart (title, data, chartType, allData) {

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
          let string = data[i].gameId;
          top5info1 += `<td>Published: ${string}</td>`;
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
                        <!-- <tr>${top5info1}</tr> -->
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

console.log("allData",allData);
console.log("allData._167791", allData._167791);

}















