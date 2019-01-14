import React from 'react';
import { Button } from 'semantic-ui-react';
import { startChildApp } from '../utilities/startChildApp';

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
                onClick={ () => startChildApp(this.props.gamePath) }
                />
        );
    }
}

const ConfigGameButton = () => <Button icon='settings' />;

export { LaunchGameButton, ConfigGameButton };

