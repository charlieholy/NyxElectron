// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fs = require('fs')
window.onload=function () {
    var btn=this.document.querySelector('#btn');
    var ta = this.document.querySelector('#ta');
    btn.onclick=function () {
        //alert("nani")
        fs.readFile('package.json',(err,data)=>{
            console.log(data)
            ta.innerHTML = data;
        })

    }

}