import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import GameListEntry from './GameListEntry';

const GameList = (props) => {
    const gameListEntries = props.games.map((game, i) =>
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