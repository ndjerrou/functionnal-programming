// How to get immuability with arrays ?

const numbers = [1, 2, 3]

// adding elements : début, fin, milieu ?

//at the end

// const added = [...numbers, 4]
// console.log(added)
// console.log(numbers)

// at the beginning

// const added = [0, ...numbers]
// console.log(added)
// console.log(numbers)

// at an index position ? 
const idx = numbers.indexOf(2)

const added = [
    ...numbers.slice(0, idx),
    1.5,
    ...numbers.slice(idx)
]

// console.log(added)



// removing elements ?
const removed = numbers.filter(n=>n!==3)
// console.log(removed)
// console.log(numbers)



// updating elements ?
// const updated = numbers.map(n => {
//     if (n === 2){
//         return 20
//     }
//     else{
//         return n
//     }
// })
const updated = numbers.map(n => n === 2 ? 20 : n)

console.log(updated)
console.log(numbers)
