const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  const urlSearch = url + breedName;

  request(urlSearch, (error, response, body) => {

    // if error, log error
    if (error) {
      return error;
    }

    // convert body from string to object
    const data = JSON.parse(body);
    const breed = data[0];

    // if breed exists return description
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found");
    }

  });
};

module.exports = { fetchBreedDescription };