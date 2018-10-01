
var fs = require('fs');
var request = require('request');

request('https://cdn.thegamesdb.net/images/small/boxart/front/36615-1.jpg').pipe(fs.createWriteStream('bf1.jpg')).on('close', function(){
    console.log('done');
});

//original code from stack overflow
/*  var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://cdn.thegamesdb.net/images/small/boxart/front/36615-1.jpg', 'bf1.jpg', function(){
  console.log('done');
}); */