
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
                      <tr><th><div class="number n1">1</div><div class="top10-text">${data[0].name}</div></th></tr>
                      <tr><th><div class="number">2</div><div class="top10-text">${data[1].name}</div></th></tr>
                      <tr><th><div class="number">3</div><div class="top10-text">${data[2].name}</div></th></tr>
                      <tr><th><div class="number">4</div><div class="top10-text">${data[3].name}</div></th></tr>
                      <tr><th><div class="number">5</div><div class="top10-text">${data[4].name}</div></th></tr>
                  </table>
           </div>

        </div>
        <div class="col-sm-12 col-md-12 col-lg-9">
          <div class="statbox">


                <div class="shelf text-center">

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="${data[0].thumbnail}">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="${data[1].thumbnail}">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="${data[2].thumbnail}">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="${data[3].thumbnail}">
                  </div>

                  <div class="shelf-shadowed">
                    <img class="shelf-img" src="${data[4].thumbnail}">
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