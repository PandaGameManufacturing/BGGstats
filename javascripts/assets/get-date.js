"use strict";

let moment = require("moment");

let getDate = function(numberOfDaysBack) {
    return moment().subtract(numberOfDaysBack, "days").format("YYYYMMDD");
};

module.exports = getDate;