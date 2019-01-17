import React, { Component } from 'react';
import fuzzy from 'fuzzy';
import SearchBar from './SearchBar';
import GameList from './GameList';
import { games } from '../data/library.json';

class BuddyView extends Component {
  constructor() {
    super();
    this.state = {
      games
    };
    this.search = this.search.bind(this);
  }

  search(query) {
    const results = fuzzy.filter(query, games, {
      extract: game => game.game_title
    });
    this.setState({
      games: results.map(result => result.original)
    });
  }

  render() {
    return (
      <div>
        <SearchBar search={this.search} />
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default BuddyView;
