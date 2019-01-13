import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

import GameListEntry from './GameListEntry';

const library = require('./data/library.json');
const gameList = library.games;

const gameListEntries = gameList.map((game, i) =>
    <Menu.Item
        key={`game-${i}`}
        className="game-hover-options">
        <GameListEntry
            gameName={game.game_title}
            subText="Last played:  --"
            gamePath={game.shortcut}
        />
    </Menu.Item>
);

const GameList = () => (
    <Grid>
        <Grid.Column>
            <Menu vertical fluid>{gameListEntries}</Menu>
        </Grid.Column>
    </Grid>
);

export default GameList;