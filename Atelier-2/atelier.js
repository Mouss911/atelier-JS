//Déclaration de la fonction
function numAverage(tableau) {
    let somme = 0;
  
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
  
    let moyenne = somme / tableau.length;
    return moyenne;
  }
  
//Contenu du tableau et sa moyenne
let tableau = [12, 5, 9, 8, 10, 13, 7, 16];
let moyenne = numAverage(tableau);
console.log("La moyenne est : " + moyenne);