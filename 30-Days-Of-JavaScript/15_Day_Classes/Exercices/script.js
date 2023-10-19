//Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs){
        console.log(this);
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}
const animal = new Animal()
console.log(animal);


//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{
    saySomething() {
        console.log('I am a dog')
      }
}

class Cat extends Animal{
    saySomething() {
        console.log('I am a cat')
      }
}


//Override the method you create in Animal class
class Animal {
    constructor(name, age, color, legs, gender){
        super(name, age, color, legs)
        this.gender = gender
    }
}