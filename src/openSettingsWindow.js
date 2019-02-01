import { remote } from 'electron';
import path from 'path';

const openSettingsWindow = props => {
  const modalPath = path.join('file://', __dirname, 'modal.html');
  console.log(path);
  console.log(__dirname);
  console.log(props);
  let win = new remote.BrowserWindow({ width: 600, height: 560 });

  win.on('close', () => { win = null })
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('message', props);
  });

  win.loadURL(modalPath);
  win.setMenu(null);
  win.show();
};

export default openSettingsWindow;