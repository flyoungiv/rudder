const jetpack = require('fs-jetpack');
const library = require('../data/library.json');

let newGameTitle = 'BioShock Infinite';
let newGameShortcut = 'D:\\Games\\Steam\\steamapps\\common\\BioShock Infinite\\Binaries\\Win32\\BioShockInfinite';
let newGameCoverArt = 'C:\\Users\\Fleetwood\\Documents\\Git\\rudder\\img\\default\\default.png';

let gameList = library.games;

let gameMatches = gameList.filter(game => game.game_title === newGameTitle);

if (gameMatches.length) { //game already exists
    console.log(`${newGameTitle} already exists.`);
}
else { //game does not yet exist
    console.log(`${newGameTitle} does not yet exist. Creating as new game.`);
    library.games.push({
        'id': 1,
        'game_title': newGameTitle,
        'shortcut': newGameShortcut,
        'newGameCoverArt': newGameCoverArt
    });
    jetpack.write('../data/library.json', library);
    console.log('library.json successfully updated');
    }

console.log(library);

