// empty object
let obj={}
console.log(obj)

// created capamerica object
let capamerica={
    Name: "Steve",
    age: 22,
    "friends": ['bunny','rock','ben'],
    address: {
        'city': 'Delhi',
        state:  'New Delhi'
    },
    sayhi: function(){
        console.log("capamerica says hii")
    }
}
console.log(capamerica)

// accessing a key
console.log(capamerica.Name)
console.log(capamerica.age)

// accesing a particular element from array type value
console.log(capamerica.friends[2])

// accessing a nested object key
console.log(capamerica.address)

// if try to access a undeclared key undefine output will come
console.log(capamerica.gender)

// accessing a function key
console.log(capamerica.sayhi)

// accesing function and also call the function
capamerica.sayhi()

// add a new key to object
capamerica.movies= ['avenger','endgame','civilwar']
console.log(capamerica)

// delete a key
delete capamerica.movies
console.log(capamerica)

// changing a value
capamerica.address.state= 'yoyo'
console.log(capamerica)

// adding a key in nested object
capamerica.address.highway= 'nh10'
console.log(capamerica)

// accessing a key by bracket notation
console.log(capamerica['Name'])

// accessing nested object key using bracket notation
console.log(capamerica['address']['city'])

 