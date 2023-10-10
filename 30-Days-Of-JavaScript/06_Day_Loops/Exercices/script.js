
//Iterate 0 to 10 using for loop, do the same using while and do while loop
/*for loop*/
for(let i = 0; i <= 10; i++){
    console.log(i)
  }
/*while loop*/
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}
/*do while loop*/
let j = 0
do {
  console.log(j)
  j++
} while (j <= 10)


/*Write a loop that makes the following pattern using console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
 ```
*/
let tab = '';
for(let i = 1;i <= 7;i++) {
   for(let j = 1;j <= i;j++) {
      tab = tab + i;
   }
   tab = tab + '<br>';
}
document.write(tab);


/*Use loop to print the following pattern:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```
*/
for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}



/*Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```*/
for(let i = 0; i <= 10; i++){
    console.log(`${i} -- ${i*i} -- ${i*i*i}`)
}



//Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)