//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs= require('fs')
let path= require('path')

let arr= ['audio','video','image','software','documents','applications','other']
let arrname= ['abc','def','ghi','jkl','mno','pqr','stu']
let arrext= ['.mp3','.mp4','.jpeg','.exe','.pdf','.apk','.rar']

let organisepath= path.join(__dirname,'q2Organiser')
if(!fs.existsSync(organisepath))
fs.mkdirSync(organisepath)

for(let i=0; i< arr.length; i++){
    let folderpath= path.join(__dirname,'q2Organiser',arr[i])
    if(!fs.existsSync(folderpath))
    fs.mkdirSync(folderpath)

for(let j=0; j< arrname.length; j++){
    let filepath= path.join(folderpath, arrname[j]+arrext[i])
    fs.writeFileSync(filepath,"")
}
}