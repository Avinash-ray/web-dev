let fs= require('fs')
let path= require('path')
let folderpath= process.argv[2]
// console.log(folderpath)
let folderexists= fs.existsSync(folderpath)

let extensions= {
    Audio: ['.mp3'],
    Video: ['.mp4','.mkv'],
    Document: ['.doc','.xlsx','.pdf','.txt'],
    Image: ['.jpeg','.jpg','.png','.gif'],
    Software: ['.exe']
}

if(folderexists){
    // console.log("valid path")
    let files= fs.readdirSync(folderpath)
    // console.log(files)
    for(let i=0; i< files.length; i++){
        let extName= path.extname(files[i])
        // console.log(extName)
        let foldername= giveFolderName(extName);
        // console.log("ext----", extName," foldername--",foldername)
        let pathoffolders= path.join(folderpath,foldername)
        let exists= fs.existsSync(pathoffolders)
        if(exists){
                movefile(folderpath,pathoffolders,files[i])
        }
        else{
            fs.mkdirSync(pathoffolders)
            movefile(folderpath,pathoffolders,files[i])
        }
    }
}
else{
    console.log("please enter a valid path")
}


function giveFolderName(ext){
    for(let key in extensions){
    let extarr= extensions[key]
        for(let i=0; i< extarr.length; i++){
            if(extarr[i] == ext){
                return key
            }
        }

    }
    return 'others'
}

function movefile(folderpath,pathoffolders,fileName){
    let sourcepath= path.join(folderpath,fileName)
    let destinationpath= path.join(pathoffolders,fileName)
    fs.copyFileSync(sourcepath,destinationpath)
    fs.unlinkSync(sourcepath)
}