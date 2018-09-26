//let gameList = require('./gameList.json');
let gameList = [["Battlefield 1","Battlefield 1-285x380.jpg"],["Counter-Strike Global Offensive","Counter-Strike_ Global Offensive-285x380.jpg"],["Dota 2","Dota 2-285x380.jpg"],["Fortnite","Fortnite-285x380.jpg"],["Grand Theft Auto V","Grand Theft Auto V-285x380.jpg"],["Hearthstone","Hearthstone-285x380.jpg"],["IRL","IRL-285x380.jpg"],["League of Legends","League of Legends-285x380.jpg"],["Overwatch","Overwatch-285x380.jpg"],["Path of Exile","Path of Exile-285x380.jpg"],["Player Unknown\'s Battlegrounds","PLAYERUNKNOWN\'S BATTLEGROUNDS.jpg"],["Talk Shows","Talk Shows-285x380.jpg"],["The Witcher 3 Wild Hunt","The Witcher 3_ Wild Hunt-285x380.jpg"],["Tom Clancy\'s Rainbow Six Siege","Tom Clancy\'s Rainbow Six_ Siege-285x380.jpg"],["World of Warcraft","World of Warcraft-285x380.jpg"]];
//console.log(gameList);

let html = '';
let numColumns = 4;

for (let i = 0; i < gameList.length; i++) {
	//closing div row tags
	if (i % numColumns === 0 && i !== 0) html += `</div>`;
	
	//opening div row tags
	if (i % numColumns === 0) html+= `<div class="row justify-content-center">`;
	
	//html for each figure
	html += `
  <figure class="col-sm-${12/numColumns}">
    <p>${gameList[i][0]}</p>
    <img src="../img/cover_art/${gameList[i][0]}/${gameList[i][1]}"/>
  </figure>`;

	//final closing div tag
	if (i === gameList.length - 1) html += `</div>`;
}

//console.log(html);
document.getElementById("game-list").innerHTML = html;
