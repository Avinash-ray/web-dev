let cp= require('child_process')
const { createWriteStream } = require('fs')
console.log(cp)

// opening calculator
// cp.execSync('calc')

// opening visual stidio code
// cp.execSync('code')

// run cptest.js file
let content= cp.execSync("node cptest.js")
console.log("output of cptest.js is:" +content)
console.log(""+content)