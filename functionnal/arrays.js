const numbers = [1, 2, 3, 4, 5];

// Add an element to multiple positions :

// at the beginning
let added = [0, ...numbers];

// at the end
added = [...numbers, 4];

// at a particular position : after the 4th element
const idx = numbers.indexOf(4);

added = [...numbers.slice(0, idx + 1), 4.5, ...numbers.slice(idx + 1)];

console.log(added);
console.log(numbers);

// Remove an element inside the array

// Update an element inside the array

[].splice();
