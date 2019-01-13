import React from 'react';
import GameListItem from './GameListItem';

class GameGridLayout extends React.Component {
    render() {
        return (
            <section className="container">
                <GameListItem />
            </section>
        );
    }
}

export default GameGridLayout;