import React from 'react';
import { Button } from 'semantic-ui-react';
import startChildApp from '../utilities/startChildApp';
import ConfigModal from './ConfigModal';

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

const ConfigGameButton = () => <ConfigModal />;

export { LaunchGameButton, ConfigGameButton };

