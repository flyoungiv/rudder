import React from 'react';
const library = require('./data/library.json');
const gameList = library.games;

const gameListItems = gameList.map((game, i) =>
    <figure
        id={game.game_title}
        key={`game_${i}`}
        className="col-sm-4"
        shortcut={game.shortcut} >
        <p>{game.game_title}</p>
        <img
            src={`img/cover_art/${game.game_title}/${game.cover_art}`}
            className="clickable"
            alt="" />
    </figure>
);

class GameListItem extends React.Component {
    render() {
        return (
            <div className="row">{gameListItems}</div>
        );
    }
}

export default GameListItem;