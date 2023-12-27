const GIPHY = require('giphyAPI')('https://api.giphy.com/v1/gifs/categories?api_key=frzyVu0B6qLLIpNldTpzhbRxCUDVP8uZ');
function getRandomGIF() {
    var client = new Giphy.Client();
    client.search({
      q: "food",
      limit: 1,
      rating: "g"
    }, function(response) {
      var randomGif = response.data[0].images.fixed_height.url;
      console.log(randomGif);
    });
  }
module.exports = {GIPHY};