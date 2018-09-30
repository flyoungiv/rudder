/*
THIS IS INSECURE: process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
Adding below line is insecure and need to find another approach to resolving this error

Error: certificate has expired
    at TLSSocket.<anonymous> (_tls_wrap.js:1116:38)
    at emitNone (events.js:106:13)
    at TLSSocket.emit (events.js:208:7)
    at TLSSocket._finishInit (_tls_wrap.js:643:8)
    at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:473:38)
*/
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const api_key = 'b512e9592e15949b0751aca63689953c66d1ca53d788ab3a24ad491c6d49e58f';
const url = "https://api.thegamesdb.net/";
var path = "Games/ByGameName";
var query = "Battlefield%201";
var endpoint = `${url}${path}?apikey=${api_key}&name=${query}`;
console.log(endpoint);

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
xhr.open("GET", endpoint);
xhr.setRequestHeader('accept','application/json');
xhr.send();