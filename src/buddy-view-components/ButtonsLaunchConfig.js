import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import startChildApp from '../utilities/startChildApp';
import openSettingsWindow from '../openSettingsWindow';

class LaunchGameButton extends React.Component {
    render() {
        const { game } = this.props;
        return (
            <Button
                positive
                icon='play circle outline'
                onClick={() => startChildApp(game.shortcut)}
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
                onClick={ () => openSettingsWindow(game) }
            />
        );
    }
}

export { LaunchGameButton, ConfigGameButton };

