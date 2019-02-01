// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//const {BrowserWindow} = require('electron').remote
import { remote } from 'electron';
import path from 'path';

const newWindowBtn = document.getElementById('button-2')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'modal.html');
  console.log(path);
  console.log(__dirname);
  let win = new remote.BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('message', 'Hello second window!')
  })
  win.loadURL(modalPath)
  win.show()
})