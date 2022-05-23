//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let path= require('path')
let fs= require('fs')

let newfolder= path.join(__dirname,"..","..","html q3")
// console.log(newfolder)
if(!fs.existsSync(newfolder))
fs.mkdirSync(newfolder)

let sourcepath= path.join(__dirname,'..','..','..','Module-1','index.html')
console.log(sourcepath)

let destinationpath= path.join(newfolder,'index.html')

fs.copyFileSync(sourcepath,destinationpath)