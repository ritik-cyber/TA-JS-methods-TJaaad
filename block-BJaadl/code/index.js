let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words) {
  return words;
}
let newWords = [...words].sort((a, b) => a.length - b.length).pop();
console.log(newWords);
// - Convert the above array "words" into an array of length of word instead of word.

// - Create a new array that only contains word with atleast one vowel.

// function oneVovel(words) {
//   return words;
// }
// let oneVovel1 = words.filter((element) => element);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
// let startWith = words.filter((words) =>
//   words.startsWith("a", "e", "i", "o", "u")
// );
// console.log(startWith);
// - Create a new array that contianse words not ending with vowel
// let endWith = words.filter((words) => words.endWith("a", "e", "i", "o", "u"));
// console.log(endWith);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its num
// function sumArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers;
//   }
//   return sum;
// }
// console.log(sum);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multipliedBy3(num) {
  return num % 3 === 0;
}
let multiplied = numbers.filter(multipliedBy3);
console.log(multiplied);
// - Create a new array that contains only even numbers
function even(num) {
  return num % 2 === 0;
}
let evenNumber = numbers.filter(even);
console.log(evenNumber);
// - Create  a new array that contains only odd numbers.
function odd(num) {
  return num % 2 !== 0;
}
let oddNumber = numbers.filter(odd);
console.log(oddNumber);
// - Create a new array that should have true for even number and false for odd numbers.

// - Sort the above number in assending order.
console.log([...numbers].sort((a, b) => a.length - b.length).pop());
// - Does sort mutate the original array?
console.log(numbers); // yes
// - Find the sum of the numbers in the array.
function sum(acc, cv) {
  return acc + cv;
}
let add = numbers.reduce(sum);
console.log(add);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(num) {
  return add / 10;
}

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(strings) {
  return strings.length;
}
console.log(averageWordLength());
