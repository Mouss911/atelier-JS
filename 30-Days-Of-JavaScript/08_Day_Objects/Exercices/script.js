//Create an empty object called dog
const dog = {}

//Add name, legs, color, age and bark properties for the dog object. 
//The bark property is a method which return _woof woof_
dog = {
    name: 'milou',
    legs: 4,
    color: 'black',
    age: 4,
    bark: 'woof woof'
}

//Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

//Set new properties the dog object: breed, getDogInfo
dog.breed = 'pitbull'
dog.getDogInfo = function () {
    
}



/* Exercice 2 */
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsersCount = 0;
let highPointsUsersCount = 0;

for (const username in users) {
  const user = users[username];

  if (user.isLoggedIn) {
    loggedInUsersCount++;
  }

  if (user.points >= 50) {
    highPointsUsersCount++;
  }
}

console.log("Number of logged-in users:", loggedInUsersCount);
console.log("Number of users with 50 or more points:", highPointsUsersCount);


//Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);


//Get all the values of users object
const values = Object.values(users);
console.log(values);
