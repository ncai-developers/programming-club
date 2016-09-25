const { app, ipcMain, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('windows-all-closed',()=>{
	app.quit();
});

app.on('ready',()=>{
	mainWindow = new BrowserWindow({
		width:1000,
		height:800,
		minWidth:500,
		minHeight:500,
		center:true,
		title:'TeacherAccess',
		acceptFirstMouse: true
	});

	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
	mainWindow.webContents.openDevTools({detach:true});
	//mainWindow.setMenu(null);
	mainWindow.maximize();

	mainWindow.on('closed',()=>{ mainWindow = null; });

});

ipcMain.on('mail-from-composer',(e,data)=>{
	console.log(data);
});
