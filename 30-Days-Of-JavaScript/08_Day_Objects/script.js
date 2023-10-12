                                                /* Scope */
/*Variable is the fundamental part in programming. We declare variable to store different data types. To declare a
variable we use the key word _var_, _let_ and _const_. A variable can be declared at different scope. In this
section, we will see the scope variables, scope of variables when we use var or let.
Variables scopes can be:
- Global
- Local*/


/* Window Global Object */
/*Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on
the browser. That means a and b are already available in the window.*/
//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible


/* Global scope */
/*A globally declared variable can be accessed every where in the same file. But the term global is relative. It can
be global to the file or it can be global relative to some block of codes.*/
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible


/* Local scope */
/*A variable declared as local can be accessed only in certain block code.
- Block Scope
- Function Scope*/
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
// console.log(gravity), Uncaught ReferenceError: gravity is not defined



/* Object */
/*Everything can be an object and objects do have properties and properties have values, so an object is a key value
pair. The order of the key is not reserved, or there is no order.
To create an object literal, we use two curly brackets.*/

//An empty object
const person = {}


/* Creating an objecting with values */
const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person1 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: true
  }
console.log(person1)



/* Getting values from an object */
/*We can access values of object using two methods:
- using . followed by key name if the key-name is a one word
- using square bracket and a quote*/
const person2 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}
// accessing values using .
console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.location) // undefined

// value can be accessed using square bracket and key name
console.log(person2['firstName'])
console.log(person2['lastName'])
console.log(person2['age'])
console.log(person2['city'])
console.log(person2['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person2['phone number'])



/* Getting object keys using Object.keys() */
//_Object.keys_: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']


/* Getting object values using Object.values() */
//_Object.values_:To get values of an object as an array
const values = Object.values(copyPerson)
console.log(values)


/* Getting object keys and values using Object.entries() */
//_Object.entries_:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)


/* Checking properties using hasOwnProperty() */
//_hasOwnProperty_: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))


