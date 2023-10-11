                                            /* Function Declaration */
//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses

            /* Function without a parameter and return */
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
addTwoNumbers() // a function has to be called by its name to be executed


/* Function returning value */
/*Function can also return values, if a function does not return values the value of the function is undefined. Let us
write the above functions with return. From now on, we return value to a function instead of printing it.*/
function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbers())

/* Function with a parameter */
/*In a function we can pass different data types(number, string, boolean, object, function) as a parameter.*/
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10)) // should be called with one argument


/* Function with two parameters */
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return


// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));


  /* Unlimited number of parameters in regular function */
  function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173



/* Unlimited number of parameters in arrow function */
const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }  
console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173



/* Expression Function */
/*Expression functions are anonymous functions. After we create a function without a name and we assign it to a
variable. To return a value from the function we should call the variable. Look at the example below.*/
const square = function(n) {
    return n * n
  }
console.log(square(2)) // -> 4


/* Arrow Function */
const squareBis = n => {
    return n * n
  }
console.log(squareBis(2))  // -> 4



const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]


