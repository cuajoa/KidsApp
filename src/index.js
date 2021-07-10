const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');


let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({ icon: '/img/logo.png' });
    mainWindow.setFullScreen(true);

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    // Menu.buildFromTemplate(

    // )
});