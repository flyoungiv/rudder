const jetpack = require('fs-jetpack');
console.log('addnewgame.js ran');

//let newGameTitle = 'BioShock Infinite';
//let newGameShortcut = 'D:\\Games\\Steam\\steamapps\\common\\BioShock Infinite\\Binaries\\Win32\\BioShockInfinite';
//let newGameCoverArt = 'C:\\Users\\Fleetwood\\Documents\\Git\\rudder\\img\\default\\default.png';
function addNewGame() {
    console.log('addnewgame() function ran');
    const library = require('../data/library.json');
    let newGameTitle = document.getElementById('game-title').value;
    let newGameShortcut = document.getElementById('shortcut-path').value;
    let newGameCoverArt = document.getElementById('cover-art-path').value;
    console.log(newGameTitle);
    console.log(newGameShortcut);
    console.log(newGameCoverArt);

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
        jetpack.write('data/library.json', library);
        console.log('library.json successfully updated');
    }

    console.log(library);
}

