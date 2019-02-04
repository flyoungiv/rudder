import { remote } from 'electron';
import path from 'path';

//this function uses props but is not a react component. it simply passes the react
//props from the main Buddy View of the app to the Settings window when it opens
const openSettingsWindow = props => {
  const modalPath = path.join('file://', __dirname, 'modal.html');
  console.log(path);
  console.log(__dirname);
  console.log(props);
  let gameConfigWindow = new remote.BrowserWindow({ width: 600, height: 560 });

  gameConfigWindow.on('close', () => { gameConfigWindow = null })
  gameConfigWindow.webContents.on('did-finish-load', () => {
    gameConfigWindow.webContents.send('message', props);
  });

  gameConfigWindow.loadURL(modalPath);
  gameConfigWindow.setMenu(null);
  gameConfigWindow.webContents.openDevTools()
  gameConfigWindow.show();
}

export default openSettingsWindow;