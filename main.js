import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

// Definir __dirname manualmente con ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "src/public/main.js"),
    },
  });

  mainWindow.loadFile("src/public/index.html");
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
