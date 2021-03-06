let gameList = [["Battlefield 1","Battlefield 1-285x380.jpg"],["Counter-Strike Global Offensive","Counter-Strike_ Global Offensive-285x380.jpg"],["Dota 2","Dota 2-285x380.jpg"],["Fortnite","Fortnite-285x380.jpg"],["Grand Theft Auto V","Grand Theft Auto V-285x380.jpg"],["Hearthstone","Hearthstone-285x380.jpg"],["IRL","IRL-285x380.jpg"],["League of Legends","League of Legends-285x380.jpg"],["Overwatch","Overwatch-285x380.jpg"],["Path of Exile","Path of Exile-285x380.jpg"],["Player Unknown\'s Battlegrounds","PLAYERUNKNOWN\'S BATTLEGROUNDS.jpg"],["Talk Shows","Talk Shows-285x380.jpg"],["The Witcher 3 Wild Hunt","The Witcher 3_ Wild Hunt-285x380.jpg"],["Tom Clancy\'s Rainbow Six Siege","Tom Clancy\'s Rainbow Six_ Siege-285x380.jpg"],["World of Warcraft","World of Warcraft-285x380.jpg"]];
//console.log(gameList);

let html = '';

html += `<div class="row flex-row flex-nowrap">`;

//for loop for adding figures
gameList.forEach(game => {
	html += `
  <figure class="col-sm-3">
    <img src="../img/cover_art/${game[0]}/${game[1]}"/>
  </figure>`;
});

html += `</div>`;

document.getElementById("game-list").innerHTML = html;