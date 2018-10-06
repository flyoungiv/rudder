//let library = require('../data/library.json');
let library = {
	"games": [
		{
			"id": 60530,
			"game_title": "Overwatch",
			"shortcut": "C:\\Program Files (x86)\\Battle.net\\Battle.net Launcher.exe",
			"cover_art": "Overwatch-285x380.jpg"
		},
		{
			"id": 1,
			"game_title": "Star Wars Battlefront II",
			"shortcut": "D:\\Games\\Origin\\STAR WARS Battlefront II\\starwarsbattlefrontii.exe",
			"cover_art": "2932265-sw_2017-apr-15.jpg"
		},
		{
			"id": 1,
			"game_title": "Rocket League",
			"shortcut": "D:\\Games\\Steam\\steamapps\\common\\rocketleague\\Binaries\\Win32\\RocketLeague.exe",
			"cover_art": "2949245-box_rleague.png"
		},
		{
			"id": 1,
			"game_title": "Portal",
			"shortcut": "D:\\Games\\Steam\\steamapps\\common\\Portal\\hl2.exe",
			"cover_art": "2525229-box_portal.png"
		},
		{
			"id": 1,
			"game_title": "The Witcher 3 Wild Hunt",
			"shortcut": "../src/test/launch_game.cmd",
			"cover_art": "The Witcher 3_ Wild Hunt-285x380.jpg"
		},
		{
			"id": 1,
			"game_title": "Ori and the Blind Forest",
			"shortcut": "D:\\Games\\Steam\\steamapps\\common\\Ori\\ori.exe",
			"cover_art": "ori.jpg"
		},
		{
			"id": 1,
			"game_title": "The Force Unleashed",
			"shortcut": "D:\\Games\\Steam\\steamapps\\common\\Star Wars The Force Unleashed\\SWTFU Launcher.exe",
			"cover_art": "2761846-tfu_cover_art.jpg"
		},
		{
			"id": 1,
			"game_title": "Half-Life 2",
			"shortcut": "D:\\Games\\Steam\\steamapps\\common\\Half-Life 2\\hl2.exe",
			"cover_art": "625502-hl2box.jpg"
		}
	]
};
let gameList = library.games;

let html = '';
const numColumns = 4;

for (let i = 0; i < gameList.length; i++) {
	//closing div row tags
	if (i % numColumns === 0 && i !== 0) html += `</div>`;
	
	//opening div row tags
	if (i % numColumns === 0) html+= `<div class="row justify-content-center">`;
	
	//html for each figure
	html += `
  <figure name="${gameList[i].game_title}" id="game-${i}" class="col-sm-${12/numColumns}">
    <p>${gameList[i].game_title}</p>
    <img src="../img/cover_art/${gameList[i].game_title}/${gameList[i].cover_art}"/>
  </figure>`;
  
	//below commented section for testing//
/*
	uncomment below block to replace all images with default test image
  	html += `
  <figure name="${gameList[i][0]}" class="col-sm-${12/numColumns}">
    <p>${gameList[i][0]}</p>
    <img src="../img/default/default.png"/>
  </figure>`;
*/

    //final closing div tag

	if (i === gameList.length - 1) html += `</div>`;
}


console.log(html);
document.getElementById("game-list").innerHTML = html;