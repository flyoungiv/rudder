var json = require('./game_search_battlefield1.json');
//console.log(json.data);

var allGames = json.data.games;
var pcGames = allGames.filter(game => game.platform === 1);
console.log(pcGames);
