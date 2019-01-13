import React from 'react';
import { Grid } from 'semantic-ui-react';

import GameName from './GameName';
import GameSubText from './GameSubText';
import { LaunchGameButton, ConfigGameButton } from './ButtonsLaunchConfig';

export default class GameListEntry extends React.Component {
    render() {
        return (<Grid >
            <Grid.Column width={11}>
                <GameName gameName={this.props.gameName} />
                <GameSubText subText={this.props.subText} />
            </Grid.Column>
            <Grid.Column width={5} className="middle aligned content game-hover-options-hidden">
                <LaunchGameButton gamePath={this.props.gamePath} />
                <ConfigGameButton />
            </Grid.Column>
        </Grid>
        );
    }
}