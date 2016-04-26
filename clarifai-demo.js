var Clarifai = require('./index.js');

var c = new Clarifai('id','secret');
//Check to see if function exported properly
//console.log(c);

//Step 3
c.getAccessToken(function(err, res){
  // Check to see if access_token comes through properly.
  // console.log(res.body.access_token);
});
