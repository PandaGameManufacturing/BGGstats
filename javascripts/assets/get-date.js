"use strict";

let getDate = function() {
  Date.prototype.yyyymmdd = function() {
    let mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    let dd = this.getDate().toString();
    return [this.getFullYear(), mm.length===2 ? '' : '0', mm, dd.length===2 ? '' : '0', dd].join('');
  };
    let date = new Date();
    return date.yyyymmdd();
};

module.exports = getDate;