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
let wordsLength = words.map((w) => w.length);
console.log(wordsLength);
// - Create a new array that only contains word with atleast one vowel.
function checkVovel(words) {
  return (
    words.toLowerCase().includes("a") ||
    words.toLowerCase().includes("e") ||
    words.toLowerCase().includes("i") ||
    words.toLowerCase().includes("o") ||
    words.toLowerCase().includes("u")
  );
}
let wordsVovel = words.filter((w) => checkVovel(w));
console.log(wordsVovel);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.
let wordsVovelNot = words.filter((w) => !checkVovel(w[0]));
console.log(wordsVovelNot);
// - Create a new array that contianse words not ending with vowel
let wordsVovelEnd = words.filter((w) => !checkVovel(w[w.length - 1]));
console.log(wordsVovelEnd);
// let endWith = words.filter((words) => words.endWith("a", "e", "i", "o", "u"));
// console.log(endWith);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its num
function sumArray(array) {
  return array.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }, 0);
}
console.log(sumArray(numbers));
console.log(sum);
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
let oddOrEven = numbers.map((num) => num % 2 === 0);
console.log(oddOrEven);
// - Sort the above number in assending order.
let sortNumber = [...numbers].sort((a, b) => a - b);
console.log(sortNumber);
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

function averageWordLength(words) {
  return (
    words
      .map((w) => w.length)
      .reduce((acc, cv) => {
        acc = acc + cv;
        return acc;
      }, 0) / words.length
  );
}
console.log(averageWordLength(strings));
