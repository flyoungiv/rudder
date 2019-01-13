import React from 'react';
import { Header } from 'semantic-ui-react';

export default class GameName extends React.Component {
    render() {
        return (
            <Header size="medium">{this.props.gameName}</Header>
        );
    }
}