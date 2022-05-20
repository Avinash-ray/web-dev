// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let folderKaPath = path.join(__dirname,"..","unorganised");
// console.log(folderKaPath);
let content = fs.readdirSync(folderKaPath)
// console.log(content);
