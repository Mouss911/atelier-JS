//create an empty set
const newSet = new Set()

//Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  newSet.add(i);
}
console.log(newSet);

//Remove an element from a set
const nums = [1, 3, 2, 5, 8, 0];
const setOfNums = new Set(nums);
setOfNums.delete(5);
console.log(setOfNums.size);

//Clear a set
setOfNums.clear();
console.log(setOfNums.size);

//Create a set of 5 string elements from array
const languages = [
  'English',
  'Finnish',
  'German',
  'French',
  'Spanish'
]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages);

//Create a map of countries and number of characters of a country
const countries = [
  ['Finland', 7],
  ['USA', 3],
  ['Japan', 5],
  ['France', 6],
  ['Senegal', 7],
];
const map = new Map(countries)
console.log(map)
console.log(map.size)

/***********************************************************************************************/

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
//Find a union b
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


//Find a intersection b
let d = a.filter((num) => B.has(num))
let D = new Set(d)

console.log(D)


//Find a with b
let e = a.filter((num) => !B.has(num))
let E = new Set(e)

console.log(E)