// Immutability : once created, we can't change it

// i.e : state in react
// strings are immutable !

let name = "Paul"
let upperName = name.toUpperCase() //name is not affected

console.log(name)
console.log(upperName)

// arrays and objects : are they immutable?
// we can modfity them

const book = {author: 'Pierre'}
book.author = 'Rachid' // modification of prop so not good

book = {city: 'Paris'} // const prevents reassignment

// Why immutability ?

// 1 - notre app devient prédictible : when we pass an objet inside a function , we know that is object is not gonna be modified

// 2 - faster change detection: example with the state of react
// state changes ? react can trigger a new rerender

// 3 - Concurrency, we can run in parallel multiple instances of the function 

// Some immutable libraries

// Immutable --> Facebook
// Immer ---> Mobx
// Mori