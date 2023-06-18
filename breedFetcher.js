const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv[2];
const urlSearch = url + breed;

request(urlSearch, (error, response, body) => {

  // if error, log error
  if (error) {
    console.log(error);
    return;
  }

  // convert body from string to object
  const data = JSON.parse(body);

  // if no data on breed, log error
  if (data.length < 1) {
    console.log("Error: Breed not found. Check your spelling or enter a different breed.");
    return;
  }
 
  // access description in object in the array
  console.log(data[0].description);
  
});