const {print} = require("pdf-to-printer");

const {app, ipcMain, BrowserWindow} = require('electron');
const os = require("os");
const fs = require("fs");
const path = require('path');
const url = require('url');

let mainWindow;
let workerWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL('http://localhost:3000');

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    workerWindow = new BrowserWindow();
    workerWindow.loadURL("file://" + __dirname + "/worker.html");
    workerWindow.webContents.openDevTools();

    workerWindow.on("closed", () => {
        workerWindow = undefined;
    });
}

// retransmit it to workerWindow
ipcMain.on("printPDF", (even, content) => {
    console.log(content);
    workerWindow.webContents.send("printPDF", content);
});
// when worker window is ready
ipcMain.on("readyToPrintPDF", (event) => {
    const pdfPath = path.join(os.tmpdir(), 'print.pdf');
    // Use default printing options
    workerWindow.webContents.printToPDF({}).then((data) => {
        fs.writeFile(pdfPath, data, function (error) {
            if (error) {
                throw error
            }
            print(pdfPath).then(console.log);
            event.sender.send('wrote-pdf', pdfPath)
        })


    }).catch((error) => {
        throw error;
    })
});

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
