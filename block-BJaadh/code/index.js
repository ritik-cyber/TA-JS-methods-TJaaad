// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");
console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
console.log(strings.shift());
console.log(strings);
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf("is"));

// - Check if all the numbers in numbers array are divisible by three use array method (every)
for (let i = 0; i < numbers / length; i++) {
  console.log(numbers.every() / 3);
}
// -  Sort Array from smallest to largest
let newArr = [...strings];
console.log(strings.sort());
// - Remove the last word in strings
console.log(strings.pop());

// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
let found = numbers.find((element) => element % 2 !== 0);
console.log(found);
// - Find all the odd numbers

// - Place a new word at the start of the array use (unshift)

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(1, 3));
console.log(strings);

// - Replace 12 & 18 with 1221 and 1881
// console.log(numbers.replace("12", "1221"));
// console.log(numbers.replace("18", "1881"));
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers.star);
// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically
console.log(customers.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
