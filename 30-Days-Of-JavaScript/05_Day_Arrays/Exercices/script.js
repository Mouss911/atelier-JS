// Declare an _empty_ array;
const arr = [];

// Declare an array with more than 5 number of elements
const arr1 = [1, 2, 3, 4, 5, 6];

// Find the length of your array
console.log(arr1.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, 
//IBM, Oracle and Amazon
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

//Print the array using _console.log()_
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
let lastIndex = arr2.length - 1;
console.log(itCompanies[lastIndex]);

//Print out each company
itCompanies.splice();
console.log(itCompanies);

//Check if a certain company exists in the itCompanies array
console.log(itCompanies.includes('Facebook'));

//Change each company name  to uppercase one by one and print them out
itCompanies = itCompanies.toUpperCase();



                                        /* Partie 2 */
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


/* Partie 3 */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
const ageMax = Math.max(...ages);
console.log(ageMax); // Affiche l'âge le plus élevé

const ageMin = Math.min(...ages);
console.log(ageMin); // Affiche l'âge le plus bas


//Find the average age(all items divided by number of items)
const sommeAges = ages.reduce((total, age) => total + age, 0);

// Calculer la moyenne
const moyenneAges = sommeAges / ages.length;

console.log(`La moyenne des âges est : ${moyenneAges}`);
