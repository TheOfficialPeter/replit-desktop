const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function initWindow() {
	var win = new BrowserWindow({width: 800, height: 600});

	win.loadURL("https://replit.com/~");
	win.once('ready-to-show', () => {
  		win.show();
	});
	win.on('closed', function() {
		win = null;
	});
};

app.whenReady().then(() =>{
	initWindow();
});
