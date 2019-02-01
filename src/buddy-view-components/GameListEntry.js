import React, { Fragment } from 'react';
import { List } from 'semantic-ui-react';
import GameName from './GameName';
import GameSubText from './GameSubText';
import { LaunchGameButton, ConfigGameButton } from './ButtonsLaunchConfig';

export default class GameListEntry extends React.Component {
    render() {
        return (
            <Fragment>
                <List.Content
                    floated="right"
                    className="middle aligned content game-hover-options-hidden">
                    <LaunchGameButton
                        gamePath={this.props.gamePath} />
                    <ConfigGameButton
                        gamePath={this.props.gamePath}
                        gameName={this.props.gameName} />
                </List.Content>
                <List.Content>
                    <GameName gameName={this.props.gameName} />
                    <GameSubText subText={this.props.subText} />
                </List.Content>
            </Fragment>
        );
    }
}


// return (<Grid >
//     <Grid.Column width={11}>
//         <GameName gameName={this.props.gameName} />
//         <GameSubText subText={this.props.subText} />
//     </Grid.Column>
//     <Grid.Column width={5} className="middle aligned content game-hover-options-hidden">
//         <LaunchGameButton
//             gamePath={this.props.gamePath} />
//         <ConfigGameButton
//             gamePath={this.props.gamePath}
//             gameName={this.props.gameName}/>
//     </Grid.Column>
// </Grid>