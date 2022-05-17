// function without parameter and return type
function sayhello(){
    console.log("common say hello to me")
}
sayhello()

// function with parameter
function sum(num1, num2){
    let addition= num1 + num2
    console.log("addition of these two no." +addition +" ans")
}
sum(3,4)

// function with returntype
function multiply(num1, num2){
    let multiply= num1*num2
    return multiply
}
let result= multiply(7,8)
console.log(result)

// in js functions are called first class citizen because we can store function in variable
let a= function subtract(num1, num2){
    return num1-num2
}
console.log(a(10,5))

// IIFE- immediately invoked function expression
(function(){
    console.log("hello from iife")
})();