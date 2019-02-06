import React from 'react';
import { render } from 'react-dom';
import GameConfigWindow from '../buddy-view-components/GameConfigWindow';

const refreshGameConfigWindow = props => {
    render(
            <GameConfigWindow game={props}/>,
            document.getElementById('root')
            );
}

export default refreshGameConfigWindow;