import React from 'react'
import SearchBar from './SearchBar';
import GameList from './GameList';
//import { games } from '../data/library.json';

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
    this.state = { gameList: [], query: '' }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/games/')
      .then(response => response.json())
      .then(data => {
        this.setState({ gameList: data })
      })
    //.then(data => console.log(data))
  }

  handleKeyPress(event) {
    const queryString = event.target.value.toUpperCase();
    this.setState(
      { 
        //gameList: games.filter(game => game.game_title.toUpperCase().includes(queryString)),
        query: queryString,
       }
    );
  }

  render() {
    //this.getGames();
    return (
      <div>
        <SearchBar onKeyPress={this.handleKeyPress} />
        <GameList games={this.state.gameList} query={this.state.query} />
      </div>
    );
  }
}

export default BuddyView;