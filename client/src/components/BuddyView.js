import React from 'react'
import SearchBar from './SearchBar'
import GameList from './GameList'
import getAllGames from '../utilities/get-all-games'

const { ipcRenderer } = window.require('electron')

class BuddyView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { gameList: [], query: '' }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    getAllGames().then(data => this.setState({ gameList: data }))

    ipcRenderer.on('updated-game-library', (event, args) => {
      console.log('updating the game list')
      getAllGames().then(data => this.setState({ gameList: data }))
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