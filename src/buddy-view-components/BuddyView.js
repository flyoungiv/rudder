import React from 'react'
import SearchBar from './SearchBar';
import GameList from './GameList';
import { games } from '../data/library.json';

// const library = require('../data/library.json');
// const gameList = library.games;
// const BuddyView = () => (
//   <div>
//       <SearchBar />
//       <GameList />
//   </div>
// );
// filter(game => game.game_title.indexOf('Chopper') >= 0)


class BuddyView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gameList: games }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    const queryString = event.target.value.toUpperCase();
    this.setState(
      { gameList: games.filter(game => game.game_title.toUpperCase().includes(queryString)) }
    );
  }

  render() {
    return (
      <div>
        <SearchBar onKeyPress={this.handleKeyPress} />
        <GameList games={this.state.gameList} />
      </div>
    );
  }
}

export default BuddyView;