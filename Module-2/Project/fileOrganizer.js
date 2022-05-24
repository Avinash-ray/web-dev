let fs= require('fs')
let folderpath= process.argv[2]
// console.log(folderpath)
let folderexists= fs.existsSync(folderpath)

if(folderexists){
    console.log("valid path")
    let files= fs.readdirSync(folderpath)
    console.log(files)
}
else{
    console.log("please enter a valid path")
}