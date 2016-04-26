var Clarifai = require('./index.js');

var c = new Clarifai('id','secret');
//Check to see if function exported properly
//console.log(c);

//Step 3
c.getAccessToken(function(err, res){
  // Check to see if access_token comes through properly.
  // console.log(res.body.access_token);
  //Step 4
  c.tagPhotoByUrl('https://i.imgur.com/wfm55ll.jpg',function(err, res){
    //Check results
    // var response = JSON.parse(res.text);
    // console.log(response.results[0].result);
  });
});
