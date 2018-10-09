// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron')

const selectDirBtn = document.getElementById('browse-for-shortcut')

selectDirBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-file-dialog')
})

ipcRenderer.on('selected-directory', (event, path) => {
  document.getElementById('shortcut-path').setAttribute('value',`You selected: ${path}`);
  //document.getElementById('shortcut-path').setAttribute('value',`You selected: abc`);
  console.log(path);
})