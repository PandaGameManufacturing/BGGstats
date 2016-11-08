
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