const request = require('request')

const ENDPOINT = 'https://httpbin.org/get'

request
  .get(ENDPOINT)
  .on('response', response => console.log(response.body))
  .on('error', err => console.log(err))


  // request(ENDPOINT, (error, response, body) => {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // })

console.log('moving on')