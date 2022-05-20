let fs= require('fs')
let path= require('path')
console.log(fs)

// C R U D -- create read update delete

// create and write in a file---writeFileSync
let filepath= path.join(__dirname,'createfile.txt')
fs.writeFileSync(filepath,'thanks for creating me')
// if file is already created then it will override the content
fs.writeFileSync(filepath,"override the content")

// read a file---readFileSync
let content= fs.readFileSync(filepath,"utf-8")
console.log(content)

// update a file----appendFileSync
fs.appendFileSync(filepath,"\nupdate me without overriding")
console.log(fs.readFileSync(filepath,"utf-8"))

// delete a file---unlinkSync
// fs.unlinkSync(filepath)

// Make a directory
if(!fs.existsSync("Meri folder"))
fs.mkdirSync("Meri folder")

// Read a directory
let directorypath= "C:\\Fjp-6 dev\\Module-2\\Nodejs"
let foldercontent= fs.readdirSync(directorypath)
console.log(foldercontent)

// delete a directory
// fs.rmdirSync("meri folder")

// copy a file
let sourcepath= path.join(__dirname,"copying.txt")
let destinationpath= path.join(__dirname,"copy folder",'copying.txt')
fs.copyFileSync(sourcepath, destinationpath)