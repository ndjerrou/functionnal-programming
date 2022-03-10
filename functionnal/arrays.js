const numbers = [1, 2, 3, 4, 5];

// Add an element to multiple positions :

// at the beginning
let added = [0, ...numbers];

// at the end
added = [...numbers, 4];

// at a particular position : after the 4th element
const idx = numbers.indexOf(4);

added = [...numbers.slice(0, idx + 1), 4.5, ...numbers.slice(idx + 1)];

// console.log(added);
// console.log(numbers);

// Remove an element inside the array

// 1st proposal
const tab = [...numbers];
for (let i = 0; i < tab.length; i++) {
  if (tab[i] === 4) {
    tab.splice(i, 1);
  }
}

// 2nd proposal
const tab1 = [...numbers];

const idx1 = tab1.indexOf(2);
tab1.splice(idx1, 1);

// console.log(tab1);
// console.log(numbers);

//3rd proposal
const filtered = numbers.filter((el) => el !== 2);

// console.log(filtered);
// console.log(numbers);

// Update an element inside the array

// 1st proposal
const newTab = [...numbers];
let index = newTab.indexOf(2);

newTab[index] = "new value";

// console.log(newTab);
// console.log(numbers);

// 2nd proposal
const modified = numbers.map((el) => (el === 2 ? 2.5 : el));

console.log(modified);
console.log(numbers);
