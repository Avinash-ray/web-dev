let path= require('path')
console.log(path)

// estension of any file
let extensionname= path.extname('C:\Fjp-6 dev\Module-1\index.html')
console.log(extensionname)

let basenam= path.basename('C:\Fjp-6 dev\Module-1\index.html')
console.log(basenam)

// __dirname give full directory path in which our file is
console.log(__dirname)

// __filename give absolute path means file name will also be there in path
console.log(__filename)

// basename(path.js) means our file with extension
let basename= path.basename(__filename)
console.log(basename)

// join- we added a file (test.js) in our existing directory(nodejs)
let dirpath= __dirname
console.log(dirpath)

let newfilepath= path.join(dirpath,'test.js')
console.log(newfilepath)


