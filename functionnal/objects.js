// Updating objects

const person = {name: 'John', age: 40,  // don't modify it !!
 address:{
    city: 'Paris',
    street: '1 rue des tulipes'
}} 

// 1 - Spread operator 

const updated = {...person, name: 'Nicolas', age: 41}
// console.log(updated)
// console.log(person)

// 2 - assign method

const newPerson = Object.assign({}, person, {name: 'Patrick', age: 50})
// console.log(newPerson)
// console.log(person)

// !!! shallow copy 

// let's add an adress property on person
// updated.address.city = 'Lille'
// console.log(updated)
// and the original person...
// console.log(person)

// fixing it...deep copy
const updatedNicolas = {...updated, address: {
    city: 'Lille',
    street: '1 rue des tulipes'
}}

console.log(updatedNicolas)
console.log(updated)

