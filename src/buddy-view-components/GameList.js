import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import GameListEntry from './GameListEntry';

const library = require('../data/library.json');
const gameList = library.games;

const gameListEntries = gameList.map((game, i) =>
    <List.Item
        key={`game-${i}`}
        className="game-hover-options">
        <GameListEntry
            game={game}
            subText="Last played:  --"
        />
    </List.Item>
);

const GameList = () => (
    <Segment id="game-list">
        <List
            relaxed
            divided
            verticalAlign="middle"
            size="small"
        >
            {gameListEntries}
        </List>
    </Segment>
);

export default GameList;