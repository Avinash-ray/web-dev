//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs= require('fs')
let path= require('path')

if(!fs.existsSync("q1 folder"))
fs.mkdirSync("q1 folder")

let filepath= path.join(__dirname,'q1 folder',"text_file.txt")
fs.writeFileSync(filepath,"new file has been made")
