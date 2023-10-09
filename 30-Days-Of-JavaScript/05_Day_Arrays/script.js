                                        /* How to create an empty array */
/*In JavaScript, we can create an array in different ways. Let us see different ways to create an array.
It is very common to use _const_ instead of _let_ to declare an array variable. If you ar using const it means you
do not use that variable name again.*/

// This the most recommended way to create an empty list
const arr = []
console.log(arr)

                                        /* How to create an array with values */
/*Array with initial values. We use _length_ property to find the length of an array.*/

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits1 = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits1)
console.log('Number of fruits:', fruits1.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

/* Accessing array items using index */
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)  // lemon


/* Modifying array element */
/*An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.*/
const numbers1 = [1, 2, 3, 4, 5]
numbers1[0] = 10      // changing 1 at index 0 to 10
numbers1[1] = 20      // changing  2 at index 1 to 20

console.log(numbers1) // [10, 20, 3, 4, 5]


/*Getting array length*/
//Length:To know the size of the array
const numbers2 = [1, 2, 3, 4, 5]
console.log(numbers2.length) // -> 5 is the size of the array

/*Getting index an element in arr array*/

const numbers3 = [1, 2, 3, 4, 5]
//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
console.log(numbers3.indexOf(5)) // -> 4
console.log(numbers3.indexOf(0)) // -> -1
console.log(numbers3.indexOf(1)) // -> 0
console.log(numbers3.indexOf(6)) // -> -1

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const numbers4 = [1, 2, 3, 4, 5]

console.log(numbers4.includes(5)) // true
console.log(numbers4.includes(0)) // false
console.log(numbers4.includes(1)) // true
console.log(numbers4.includes(6)) // false


//Joining array elements
const numbers5 = [1, 2, 3, 4, 5]
console.log(numbers5.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook


/*Slice array elements*/
/*Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't 
include the ending position.*/
const numbers6 = [1,2,3,4,5]

console.log(numbers6.slice()) // -> it copies all  item
console.log(numbers6.slice(0)) // -> it copies all  item
console.log(numbers6.slice(0, numbers.length)) // it copies all  item
console.log(numbers6.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


