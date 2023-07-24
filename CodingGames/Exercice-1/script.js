/*EXERCICE 1*/
/*
Créez une fonction puissance qui :

prend deux arguments
réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions 
mahtématiques de JS
Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois
*/

function puissance(base, exposant) {
    let puissance = 1;
  
    for (let i = 0; i < exposant; i++) {
      puissance = puissance * base;
    }
    return puissance;
  }
  console.log(puissance(5, 3));