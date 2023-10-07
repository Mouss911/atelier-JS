                                            /* Exercice 1 */
/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to
drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.*/

let age = parseInt(prompt('Enter your age : '));
let diff = 18-age;
if (age >= 18) {
    alert('You are old enough to drive');
} else {
    alert('You are left with ' + diff + ' years to drive');
}



/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console
stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/
let myAge = parseInt(prompt('Enter your age :'));
let yourAge = parseInt(prompt('Enter my age : '));
let ecart1 = myAge - yourAge;
let ecart2 = yourAge - myAge;

if (myAge > yourAge) {
    alert('You are ' + ecart1 + ' years old than me');
} else if(myAge < yourAge){
    alert('I am ' + ecart2 + ' years old than you');
} else{
    alert('Our ages are even !');
}


/* Write a code which  can give grades to students according to theirs scores: */
let score = parseInt(prompt('Entrer votre score : '));
if (score >= 90 && score <= 100) {
    alert('Votre grade est : A');
} else if (score >= 70 && score <= 89) {
    alert('Votre grade est : B');
} else if (score >= 60 && score <= 69) {
    alert('Votre grade est : C');
} else if (score >= 50 && score <= 59) {
    alert('Votre grade est : D');
} else if (score >= 40 && score <= 49) {
    alert('Votre grade est : E');
} else if (score >= 0 && score <= 39) {
    alert('Votre grade est : F');
} else{
    alert('Veuillez entrer un bon score !');
}