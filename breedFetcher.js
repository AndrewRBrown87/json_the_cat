const request = require('request');
let args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    try {
      console.log(data[0].description);
    } catch (err) {
      console.log("Breed not found");
    }
  }
});