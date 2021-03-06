let jetpack;
let library;

//adding below try/catch block for testing in browser.
try {
	library = require('../data/library.json');
} catch (e) {
	library = {"games":[{"id":60530,"game_title":"Overwatch","shortcut":"C:\\Program Files (x86)\\Battle.net\\Battle.net Launcher.exe","cover_art":"Overwatch-285x380.jpg"},{"id":1,"game_title":"Star Wars Battlefront II","shortcut":"D:\\Games\\Origin\\STAR WARS Battlefront II\\starwarsbattlefrontii.exe","cover_art":"2932265-sw_2017-apr-15.jpg"},{"id":1,"game_title":"Rocket League","shortcut":"D:\\Games\\Steam\\steamapps\\common\\rocketleague\\Binaries\\Win32\\RocketLeague.exe","cover_art":"2949245-box_rleague.png"},{"id":1,"game_title":"Portal","shortcut":"D:\\Games\\Steam\\steamapps\\common\\Portal\\hl2.exe","cover_art":"2525229-box_portal.png"},{"id":1,"game_title":"The Witcher 3 Wild Hunt","shortcut":"../src/test/launch_game.cmd","cover_art":"The Witcher 3_ Wild Hunt-285x380.jpg"},{"id":1,"game_title":"Ori and the Blind Forest","shortcut":"D:\\Games\\Steam\\steamapps\\common\\Ori\\ori.exe","cover_art":"ori.jpg"},{"id":1,"game_title":"The Force Unleashed","shortcut":"D:\\Games\\Steam\\steamapps\\common\\Star Wars The Force Unleashed\\SWTFU Launcher.exe","cover_art":"2761846-tfu_cover_art.jpg"},{"id":1,"game_title":"Half-Life 2","shortcut":"D:\\Games\\Steam\\steamapps\\common\\Half-Life 2\\hl2.exe","cover_art":"625502-hl2box.jpg"}]};
}

try {
	jetpack = require('fs-jetpack');
} catch (e) {
	jetpack = null;
}

let gameList = library.games;

const numColumns = 3;
const colWidth = 12 / numColumns;
let rowElement = document.getElementById('game-list-big-screen');

for (let i = 0; i < gameList.length; i++) {

/*
<figure id="1" onclick="switchGame('#1')" tabindex="-1">1</figure>


<figure
id="1"
tabindex="-1">
<img src="../img/cover_art/Overwatch/Overwatch-285x380.jpg">
</figure>

</figure>
*/

	//the next game from the json to add to the DOM
	let game = gameList[i];

	//set up the game as a <figure> element
	let figureElement = document.createElement('FIGURE');
	figureElement.setAttribute('id', game.game_title);
    //figureElement.setAttribute('class', `col-sm-${colWidth}`);
    figureElement.setAttribute('tabindex', '-1');
	figureElement.setAttribute('shortcut', game.shortcut);

	//create a <p> to hold the game title and then add it to the <figure>
	//let pElement = document.createElement('P');
	//pElement.appendChild(document.createTextNode(game.game_title));
	//figureElement.appendChild(pElement);

	//create an <image> with a url to the cover art and then add it to the figure
	let imgElement = document.createElement('IMG');
	if (jetpack === null) { //check whether jetpack is running (doesn't run in browser)
		//console.log('running in browser, not going to use jetpack to check for cover art');
		imgElement.setAttribute('src', `../img/cover_art/${game.game_title}/${game.cover_art}`);
	} else if (!jetpack.exists(`img/cover_art/${game.game_title}/${game.cover_art}`)) { //check whether image file exists
		imgElement.setAttribute('src', '../img/default/default.png'); //set to default image if none exists
		//console.log(`img/cover_art/${game.game_title}/${game.cover_art} does not exist`);
	} else { //if image exists then include it as the cover art for the game
		imgElement.setAttribute('src', `../img/cover_art/${game.game_title}/${game.cover_art}`);
		//console.log(`img/cover_art/${game.game_title}/${game.cover_art} exists`);
	}
	imgElement.setAttribute('class', 'clickable'); //adding a css class so we can set the cursor to pointer on hover
	figureElement.appendChild(imgElement);

	//add a listener to the figure  to launch the game when clicked
	//figureElement.addEventListener('click', function() {console.log(`clicked ${game.game_title}`)});
	figureElement.addEventListener('click', function () {startChildApp(game.shortcut)});

	//finally, add in the whole <figure> game element to the current bootstrap row
	rowElement.appendChild(figureElement);
}