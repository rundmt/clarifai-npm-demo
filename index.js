//Step 2
var request = require('superagent');

//Step 1
function Clarifai(clientId, clientSecret){
  this.clientId = clientId;
  this.clientSecret = clientSecret;
}

//Step 3
Clarifai.prototype.getAccessToken = function(cb) {
  var _this = this;
  request
    .post('https://api.clarifai.com/v1/token/')
    .send('client_id='+this.clientId)
    .send('client_secret='+this.clientSecret)
    .send('grant_type=client_credentials')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end(function(err, res){
      _this.accessToken = res.body.access_token;
      cb(err, res);
    });
};

//Step 4
Clarifai.prototype.tagPhotoByUrl = function(url, cb) {
  request.get('https://api.clarifai.com/v1/tag/')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+this.accessToken)
    .query({ url: url })
    .end(function(err, res){      
      cb(err, res);
    });
};

module.exports = Clarifai;
