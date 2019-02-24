// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fs = require('fs')
window.onload=function () {
    var btn=this.document.querySelector('#btn');
    var ta = this.document.querySelector('#ta');
    var content = this.document.querySelector('#content')
    btn.onclick=function () {
        //alert("nani")
        fs.readFile('package.json',(err,data)=>{
            console.log(data)
            ta.innerHTML = data;
        })

    }
    content.ondragenter=content.ondragover=content.ondragleave=function () {
        return false;
    }
    content.ondrop=function (e) {
        e.preventDefault()
        var fp=e.dataTransfer.files[0]

        var path = fp.path
        console.log(path)
        fs.readFile(path,'latin1',(err,data)=>{
            console.log(data)
            content.innerHTML = data;
        })
    }

}