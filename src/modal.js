const ipc = require('electron').ipcRenderer;
import React from 'react';
import { render } from 'react-dom';
import GameConfigWindow from './buddy-view-components/GameConfigWindow';

ipc.on('message', (event, message) => {
    console.log(message); // logs out "Hello second window!"
    render(
        <GameConfigWindow game={message} />,
        document.getElementById('root')
        );
})