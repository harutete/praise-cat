const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  // ブラウザウインドウを作成
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // public/index.html をロード
  win.loadFile('./public/index.html')
  // 開発者ツールを開く
  win.webContents.openDevTools()
}

// Electronの初期化処理完了 && BrowserWindowの作成準備が完了したときに呼び出される
app.whenReady().then(createWindow)

// 全てのウィンドウが閉じられた時に終了する
app.on('window-all-closed', () => {
  // macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
  // アプリケーションとそのメニューバーは有効なままにする
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOSでは、ユーザがドックアイコンをクリックしたとき、
  // そのアプリのウインドウが無かったら再作成する
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})