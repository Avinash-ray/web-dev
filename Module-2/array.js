// empty array
let arr= [];
console.log(arr)

// array with elements
let elearr= [1,2,3,'hello im fine',false,'c']
console.log(elearr)

// access particular array or index
console.log("element at 4th index"+" " +elearr[4])

// replace an element
elearr[3]= "changed"
console.log(elearr)

// Array methods
// push--add element at last
elearr.push("push")
console.log(elearr)

// pop--remove element from last
elearr.pop()
console.log(elearr)

// shift--remove element from start
elearr.shift()
console.log(elearr)

// unshift--add element at start
elearr.unshift("unshift")
console.log(elearr)

console.log("my array:", elearr)
// or
console.log("my array:" +elearr)

// lenght of array
let len= elearr.length
console.log(len)
