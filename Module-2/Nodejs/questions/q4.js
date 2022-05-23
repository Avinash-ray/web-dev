// read content of unorganised folder and make  an array which has extension name of each file

let fs= require('fs')
let path= require('path')

let folderpath= path.join(__dirname,"Unorganise q4")
// console.log(folderpath)
let content= (fs.readdirSync(folderpath))

// console.log(fs.readdirSync("Unorganise q4"))
console.log(content)

let extarr= []
for(let i=0; i< content.length; i++){
    let name= content[i]
    let extensionname= path.extname(name)
    console.log(extensionname)
    // extarr[i]=extensionname
    extarr.push(extensionname)
}
console.log(extarr)


