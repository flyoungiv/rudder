// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')

const selectDirBtn = document.getElementById('browse-for-shortcut')

selectDirBtn.addEventListener('click', (event) => {
  ipcRenderer.send('choose-path-to-game')
})

ipcRenderer.on('selected-game-path', (event, path) => {
  document.getElementById('shortcut-path').setAttribute('value', path);
  //document.getElementById('shortcut-path').setAttribute('value',`You selected: abc`);
  console.log(`game selected: ${path}`);
})

const selectArtBtn = document.getElementById('browse-for-picture')

selectArtBtn.addEventListener('click', (event) => {
  ipcRenderer.send('choose-path-to-cover-art')
})

ipcRenderer.on('selected-cover-art-path', (event, path) => {
  document.getElementById('cover-art-path').setAttribute('value', path);
  //document.getElementById('shortcut-path').setAttribute('value',`You selected: abc`);
  console.log(`image selected: ${path}`);
})

//handle when user clicks on Add Game to Library in the menu
ipcRenderer.on('add-game', (event) => {
  $('#addGameModal').modal('show');
})

ipcRenderer.on('remove-game', (event) => {
  populateGameDeleteList();
  $('#removeGameModal').modal('show');
})