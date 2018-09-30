const api_key = 'b512e9592e15949b0751aca63689953c66d1ca53d788ab3a24ad491c6d49e58f';
const url = "https://api.thegamesdb.net/";
var path = "Games/ByGameName";
var query = "Battlefield%201";
var endpoint = `${url}${path}?apikey=${api_key}&name=${query}`;
console.log(endpoint);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", endpoint, true);
xhttp.send();