/* Destructuring and Spread */
//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

/* Destructing Arrays */
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
const [frontEnd, backEnd] = fullStack
  
console.log(frontEnd)   //["HTML", "CSS", "JS", "React"]
console.log(backEnd)    //["Node", "Express", "MongoDB"]


/*If we like to skip on of the values in the array we use additional comma.
The comma helps to omit the value at that specific index*/
const numbers1 = [1, 2, 3]
let [numbOne, , numbThree] = numbers1 //2 is omitted

console.log(numbOne, numbThree) //1 3


//We can use default value in case the value of array for that index is undefined:
const names1 = [undefined, 'Brook', 'David']
let [
  firstPerson1 = 'Asabeneh',
  secondPerson1,
  thirdPerson1,
  fourthPerson1 = 'John'
] = names1
console.log(firstPerson1, secondPerson1, thirdPerson1, fourthPerson1)


/*We can not assign variable to all the elements in the array. We can destructure few of the first
and we can get the remaining as array using spread operator(...).*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)   //1 2 3
console.log(rest)   //[4, 5, 6, 7, 8, 9, 10]


/* Destructuring during iteration */
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries) {
console.log(country, city)
}
//Finland Helsinki
//Sweden Stockholm
//Norway Oslo


                            /* Destructuring Object */

/*When we destructure the name of the variable we use to destructure should be exactly the same
as the key or property of the object. See the example below.*/
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)  //20 10 200 undefined


/* Renaming during structuring */
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)  //20 10 200 undefined



/*If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might
not be in the object, in that case we can give a default value during declaration. See the example.*/
let { width1, height1, area1, perimeter1 = 60 } = rectangle

console.log(width1, height1, area1, perimeter1) //20 10 200 60



/*Destructuring keys as a function parameters. Let us create a function which takes a rectangle object
and it returns a perimeter of a rectangle.*/
/* Object parameter without destructuring */

// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
console.log(calculatePerimeter(rect)) // 60



//Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring
const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
console.log(getPersonInfo(person))



/* Object parameter with destructuring */
const calculatePerimeter1 = ({ width, height }) => {
    return 2 * (width + height)
  }
console.log(calculatePerimeter1(rect)) // 60



/* Destructuring object during iteration */
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}
//Prepare JS Test 4/1/2020 8:30 true
//Give JS Test 4/1/2020 10:00 false
//Assess Test Result 4/1/2020 1:00 false


                                    /* Spread or Rest Operator */
/*When we destructure an array we use the spread operator(...) to get the rest elements as array.
In addition to that we use spread operator to spread array elements to another array.*/

/* Spread operator to copy array */
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)    //[0, 2, 4, 6, 8, 10]
console.log(oddNumbers)     //[1, 3, 5, 7, 9]
console.log(wholeNumbers)   //[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]



/* Spread operator to copy object */
//We can copy an object using a spread operator
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }  
const copiedUser = {...user}
console.log(copiedUser) //{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}



/* Spread operator with arrow function */
/*Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator.
If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.*/

/*const sumAllNums = (...args) => {
    console.log(args)
  }
sumAllNums(1, 2, 3, 4, 5)*/   //[1, 2, 3, 4, 5]

const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
console.log(sumAllNums(1, 2, 3, 4, 5))   //15

