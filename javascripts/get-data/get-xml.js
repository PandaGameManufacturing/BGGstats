"use strict";

// requires
let got = require('got');

let getXML = (host, path) => {

  return new Promise( (resolve, reject) => {
    let url = `https://www.${host}${path}`;
    got(url)
    .then(response => {
        resolve(response);
    })
    .catch(error => {
        console.log(error.response.body);
    });
  });

};

module.exports = getXML;