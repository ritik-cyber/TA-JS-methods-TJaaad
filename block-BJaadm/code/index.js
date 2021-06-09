let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = [];
for (let per of persons) {
  peopleName.push(per.name);
}
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = [];
for (let gra of persons) {
  peopleGrade.push(gra.grade);
}
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = [];
for (let per of persons) {
  peopleSex.push(per.sex);
}
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName1 = peopleName.filter(
  (peopleName) => peopleName.startsWith("J") || peopleName.startsWith("P")
);
console.log(filterName1);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterName = peopleName.filter((peopleName) =>
  peopleName.startsWith("A", "C")
);
console.log(filterName);
// Log all the filtered male ('M') in persons array

let filteredMale = persons.filter((persons) => persons.sex === "M");
console.log(filteredMale);

// Log all the filtered female ('F') in persons array
let filteredFemale = persons.filter((persons) => persons.sex === "F");
console.log(filteredFemale);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
// let femaleFilterdC = filteredFemale.filter((filteredFemale) =>
//   filteredFemale.startsWith("C", "J")
// );
// console.log(filterNameC);

// Log all the even numbers from peopleGrade array
let even = peopleGrade.filter((peopleGrade) => peopleGrade % 2 === 0);
console.log(even);
// Find the first name that starts with 'J' in persons array and log the object
let personsName = persons.filter((persons) => persons.name.startsWith("J"));
console.log(personsName);
// Find the first name that starts with 'P' in persons array and log the object
let personsNameP = persons.filter((persons) => persons.name.startsWith("P"));
console.log(personsNameP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePerson = [];
femalePerson.push(filteredFemale);
console.log(femalePerson);

// Filter all the male from persons array and store in malePersons array
let malePerson = [];
malePerson.push(filteredMale);
console.log(malePerson);

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  return acc + cv;
}, 0);
console.log(gradeTotal);
// Find the average grade
let average =
  peopleGrade.reduce((acc, cv) => {
    return acc + cv;
  }, 0) / peopleGrade.length;
console.log(average);
// Find the average grade of male

// let averageMale =
//   filteredMale.grade.reduce((acc, cv) => {
//     acc + cv;
//     return acc;
//   }, 0) / filteredMale.grade.length;
// console.log(averageMale);

// Find the average grade of female

// Find the highest grade
let gradesDescending = [...persons].sort((a, b) => b.grade - a.grade);
const highestGrade = gradesDescending[0];
console.log(highestGrade);

// Find the highest grade in male
let heighestMale = [...filteredMale].sort((a, b) => b.grade - a.grade);
let heighstMalegrade = heighestMale[0];
console.log(heighstMalegrade);

// Find the highest grade in female
let heighestFemale = [...filteredFemale].sort((a, b) => b.grade - a.grade);
let heighstFemalegrade = heighestFemale[0];
console.log(heighstFemalegrade);
// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
// let acending = [...peopleGrade].sort((a, b) => a.grade - b.grade);
// const highestGrade = acending[0];
// console.log(acending);

// Sort the peopleGrade in descending order
let decending = [...peopleGrade].sort((a, b) => b - a);

console.log(decending);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
let acendingPeople = [...peopleName].sort((a, b) => b.name - a.name);
let acendingPeopleName = acendingPeople[acendingPeople.length - 1];
console.log(acendingPeopleName);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

// function parameterize(str) {
//   let join = str.join("-");
//   return join;
// }
// console.log(parameterize("hello brother is gahs"));
