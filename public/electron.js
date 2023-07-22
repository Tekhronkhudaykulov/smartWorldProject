const { print } = require("pdf-to-printer");

const { ipcMain } = require("electron");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const os = require("os");
const fs = require("fs");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
let workerWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.webContents.openDevTools();

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", function () {
    workerWindow = undefined;
    mainWindow = undefined;
    app.quit();
  });

  workerWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  workerWindow.loadURL("file://" + __dirname + "/worker.html");
}

// retransmit it to workerWindow
ipcMain.on("printPDF", (even, content) => {
  console.log(content);
  workerWindow.webContents.send("printPDF", content);
});

// when worker window is ready
ipcMain.on("readyToPrintPDF", (event) => {
  const pdfPath = path.join(os.tmpdir(), "print.pdf");
  // Use default printing options
  workerWindow.webContents
    .printToPDF({})
    .then((data) => {
      fs.writeFile(pdfPath, data, function (error) {
        if (error) {
          throw error;
        }
        print(pdfPath).then(console.log);
        event.sender.send("wrote-pdf", pdfPath);
      });
    })
    .catch((error) => {
      throw error;
    });
});

app.on("ready", createWindow);

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
