import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

import GameListEntry from './GameListEntry';

const GameList = ({ games }) => {
  const gamesList = games.map((game, i) => (
    <Menu.Item key={`game-${i}`} className="game-hover-options">
      <GameListEntry
        gameName={game.game_title}
        subText="Last played:  --"
        gamePath={game.shortcut}
      />
    </Menu.Item>
  ));

  return (
    <Grid>
      <Grid.Column>
        <Menu vertical fluid>
          {gamesList.length ? gamesList : '...'}
        </Menu>
      </Grid.Column>
    </Grid>
  );
};

export default GameList;
