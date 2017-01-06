"use strict";

  // function to add commas to large numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

module.exports = numberWithCommas;