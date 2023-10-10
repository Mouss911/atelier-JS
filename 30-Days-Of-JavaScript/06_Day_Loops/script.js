                                                /* LES BOUCLES */
                //Boucle "for"
//  structure
/*for(initialization, condition, increment/decrement){
    // code goes here
  }*/

  for(let i = 0; i <= 5; i++){
    console.log(i)    // 0 1 2 3 4 5
  }
  
  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
  const newArr = []
  for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())     // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
  }
  
//  Adding all elements in the array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}
console.log(sum)  // 15

//Creating a new array based on the existing array
const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
let sum1 = 0
for(let i = 0; i < numbers1.length; i++){
  newArr.push( numbers1[i] ** 2)

}
console.log(newArr1)  // [1, 4, 9, 16, 25]


                //Boucle "while"
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}       // 0 1 2 3 4 5


                //Boucle "do while"
let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)     // 0 1 2 3 4 5

            //Boucle "for of"
/*We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index
of each element in the array.*/
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())     // HTML CSS JAVASCRIPT REACT NODE MONGODB
  }
  
for (const tech of webTechs) {
    console.log(tech[0])            // get only the first letter of each element,  H C J R N M
}


                //Break
//Break is used to interrupt a loop. (interrompre une boucle)
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)          // 0 1 2
  }
/*Le code ci-dessus s'arrête si '3' est trouvé dans le processus d'itération*/


                //Continue
//We use the keyword *continue* to skip a certain iterations.
for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)      // 0 1 2 4 5
  }
  

