import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import ConfigModal from './ConfigModal';
import startChildApp from '../utilities/startChildApp';
import openSettingsWindow from '../openSettingsWindow';

const logClick = (property) => {
    console.log(property);
}

class LaunchGameButton extends React.Component {
    render() {
        return (
            <Button
                positive
                icon='play circle outline'
                //onClick={() => logClick(this.props.gamePath)}
                onClick={() => startChildApp(this.props.gamePath)}
            />
        );
    }
}

class ConfigGameButton extends React.Component {
    render() {
        return (
            <Button
                icon="settings"
                onClick={() => openSettingsWindow(this.props)}
            />
        );
    }
}
// const ConfigGameButton = (props) => (
//     <ConfigModal
//         gamePath={props.gamePath}
//         gameName={props.gameName}
//         onClick={() => openSettingsWindow(props)}
//         />);

export { LaunchGameButton, ConfigGameButton };

