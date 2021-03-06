import React from 'react';
import { Button } from 'semantic-ui-react';
import startChildApp from '../utilities/start-child-app';
import openSettingsWindow from '../utilities/open-settings-window';

class LaunchGameButton extends React.Component {
    render() {
        const { game } = this.props;
        return (
            <Button
                positive
                icon='play circle outline'
                onClick={() => startChildApp(game.shortcut)}
                //onClick={() => console.log('start game')}
            />
        );
    }
}

class ConfigGameButton extends React.Component {
    render() {
        const { game } = this.props;
        return (
            <Button
                icon="settings"
                //onClick={() => console.log('settings')}
                onClick={()=>openSettingsWindow(game.rudder_id)}
            />
        );
    }
}

export { LaunchGameButton, ConfigGameButton };

