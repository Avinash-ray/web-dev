//move a file

let fs= require('fs')
let path= require('path')

let sourcepath= path.join(__dirname,'q5.txt')
let destinationpath= path.join(__dirname,'q5 folder','q5.txt')

fs.copyFileSync(sourcepath,destinationpath)
fs.unlinkSync(sourcepath)
