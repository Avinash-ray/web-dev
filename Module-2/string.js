let str= "i am a string"
console.log(str)

// length of string
console.log(str.length)

//string methods
// sliced method---it extracts part from string
let slicedstr= str.slice(2,8) //8 means 8-1
console.log(slicedstr)

// replace method
let replacedstr= str.replace("am","was")
console.log(replacedstr)

// toUpperCase
console.log(str.toUpperCase())

// toLowerCase
let tlc= str.toLowerCase()
console.log(tlc)

// concat
let firstname= "Avinash"
let lastname= "Ray"
let fullname= firstname.concat(lastname);
console.log(fullname)
// or
console.log(firstname + lastname)

// split -- return arr
let splitstr= str.split(" ")    //here we splitted string on basis of space
console.log(splitstr)
