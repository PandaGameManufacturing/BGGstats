"use strict";

// requires
let got = require('got');

let getData = (host, path) => {

  return new Promise( (resolve, reject) => {
    let url = `https://${host}${path}`;
    got(url)
    .then(response => {
        resolve(JSON.parse(response.body));
    })
    .catch(error => {
        console.log(error.response.body);
    });

  });
};

module.exports = getData;