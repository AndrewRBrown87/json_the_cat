const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      try {
        callback(null, data[0].description);
      } catch (err) {
        callback("Breed not found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };