import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow: BrowserWindow;

function createMainWindow(): BrowserWindow {
  const window: BrowserWindow = new BrowserWindow({
    icon: path.join(__static, '/icon.png'),
    show: false,
  });

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }));
  }

  window.on('ready-to-show', () => {
    window.maximize();
  });

  window.on('closed', () => {
    mainWindow = null;
  });

  return window;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
