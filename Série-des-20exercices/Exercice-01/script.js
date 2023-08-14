// Créer une variable result qui contient la somme des variables a et b. 
// Afficher le résultat de la somme dans une boite de dialogue.

let a = parseFloat(prompt("Entrer une variable: "));
if (a != Number){
    alert("Veuillez saisir un nombre entier")
}

let b = parseFloat(prompt("Entrer une autre variable: "));

if (b != Number){
    alert("Veuillez saisir un nombre entier")
}

let result = a + b;

alert("La somme des deux variables est : " + result);