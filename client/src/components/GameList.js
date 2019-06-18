import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import GameListEntry from './GameListEntry';

const GameList = (props) => {
    const { games, query } = props;

    const gameList = games.filter(game => game.game_title.toUpperCase().includes(query));

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
    return (
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
    )
};

export default GameList;