"use strict";
exports.__esModule = true;
// 배포 환경에서 빌드된 HTML 파일을 가져오기 위해 아래 두 모듈을 사용합니다.
var path = require("path");
var url = require("url");
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
// config 파일로 따로 선언하여도 좋습니다.
var baseUrl = "http://localhost:3000";
var mainWindow;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1920,
        height: 1080,
        // 위 path, url 모듈을 사용하기 위해서 Node 환경을 Electron에 합치는 것을 뜻합니다.
        webPreferences: {
            nodeIntegration: true
        }
    });
    // 2021.03.28 수정
    // 실제로 배포된 어플리케이션에서는 빌드된 index.html 파일을 서빙합니다.
    // url.pathToFileURL()로 나온 객체는 string type으로 변환이 필요합니다.
    var mainWindowUrl = url
        .pathToFileURL(path.join(__dirname, "../build/index.html"))
        .toString();
    // 개발 환경 여부 확인 후 맞는 url/file로 서빙합니다.
    mainWindow.loadURL(isDev ? baseUrl : mainWindowUrl);
    // 개발 환경의 경우 Chrome의 개발자 도구를 열어 사용합니다.
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
// 어플리케이션이 준비가 되었다면 데스크탑 어플리케이션으로 실행합니다.
electron_1.app.on("ready", function () {
    createMainWindow();
});
// 모든 윈도우가 닫혔다면 어플리케이션을 종료합니다.
electron_1.app.on("window-all-closed", function () {
    electron_1.app.quit();
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createMainWindow();
    }
});
