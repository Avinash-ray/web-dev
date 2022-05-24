let fs= require('fs')
let folderpath= process.argv[2]
// console.log(folderpath)
let folderexists= fs.existsSync(folderpath)

if(folderexists){
    console.log("valid path")
}
else{
    console.log("please enter a valid path")
}