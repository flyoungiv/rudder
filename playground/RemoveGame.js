//const jetpack = require('fs-jetpack');
console.log('RemoveGame.js ran');

function populateGameDeleteList() {
    let library = require('../data/library.json');
    let gameList = library.games;
    gameList.forEach(function (game) {
        //create row element to hold next game in the delete list
        let rowElement = document.createElement('DIV');
        rowElement.setAttribute('class', 'row justify-content-center');
        rowElement.setAttribute('id', `${game.game_title} DELETE`);
        
        //create col element for delete icon
        let col1 = document.createElement('DIV');
        col1.setAttribute('class', 'col-sm-1 clickable');
        col1.appendChild(document.createTextNode('\u26D4')); //hex for the delete icon

        //add event listener to the delete icon to delete game when clicked
        col1.addEventListener('click', function () {removeGame(game.game_title)});

        //insert the delete icon into the HTML row
        rowElement.appendChild(col1);

        //create col element for the name of the game to be deleted
        let col2 = document.createElement('DIV');
        col2.setAttribute('class', 'col-sm-9')
        col2.appendChild(document.createTextNode(game.game_title)); //the game title
        rowElement.appendChild(col2);

        //finally, append the row to the DOM
        document.getElementById('delete-list').appendChild(rowElement);
    }
    );
}

function removeGame(gameTitle) {
    console.log('removeGame() function ran');
    //let gameToDelete = 'Bioshock Infinite';
    let gameToDelete = gameTitle;
    let library = require('../data/library.json');
    console.log(library);
    library.games = library.games.filter(game => game.game_title !== gameToDelete);
    jetpack.write('data/library.json', library);
    console.log(`${gameToDelete} removed from library.json`);
    location.reload();
}

//removeGame();

