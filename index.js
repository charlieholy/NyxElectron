/**
 * Created by chenpeiwen on 2019/2/11.
 */


const {app, BrowserWindow} = require('electron');
const path = require('path')
const url = require('url')

function createWindow () {
    // 创建浏览器窗口
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', createWindow)