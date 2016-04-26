//Step 2
var request = require('superagent');

//Step 1
function Clarifai(clientId, clientSecret){
  this.clientId = clientId;
  this.clientSecret = clientSecret;
}

module.exports = Clarifai;
