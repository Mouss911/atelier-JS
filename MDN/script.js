//Créer un tableau
let fruits = ['Apple', 'Banana'];

console.log(fruits.length);

//Accéder (via son index) à un élément du tableau
let first = fruits[0];

let last = fruits[fruits.length - 1]; //Afficher le dernier élément du tableau


//Boucler sur un tableau
fruits.forEach(function(item, index, array) {
    console.log(item, index);   //Afficher l'élément du tableau et son index
  });

//Ajouter à la fin du tableau
let newLength = fruits.push('Orange');

//Supprimer le dernier élément du tableau
let laste = fruits.pop();    // supprime Orange (à la fin)

//Supprimer le premier élément du tableau
let firste = fruits.shift();    // supprime Apple (au début)

//Ajouter au début du tableau
let newDebut = fruits.unshift('Strawberry')     // ajoute au début

//Trouver l'index d'un élément dans le tableau
fruits.push('Mango');
    // ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf('Banana');

//Supprimer un élément par son index
let removedItem = fruits.splice(pos, 1);    // supprime 1 élément à la position pos

//Supprimer des éléments à partir d'un index
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pose = 1, n = 2;

let removedItems = vegetables.splice(pose, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pose

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)


//Copier un tableau
let shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]


//Accéder aux éléments d'un tableau
let arr = ["le premier élément", "le deuxième élément", "le dernier élément"];
console.log(arr[0]);             // affiche "le premier élément"
console.log(arr[1]);             // affiche "le deuxième élément"
console.log(arr[arr.length - 1]);// affiche "le dernier élément"
/*console.log(arr.0);*/  // erreur de syntaxe

//Modification de la propriété lenght
fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);  // 10


//Créer un nouveau tableau vide
let tableauMsg = [];
tableauMsg[0] = 'Coucou';
tableauMsg[99] = 'monde';

if (tableauMsg.length === 100) {
  console.log('La longueur du tableau vaut 100.');
}


//Créer un tableau à deux dimensions
let plateau = [
    ['T','C','F','R','K','F','C','T'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['t','c','f','k','r','f','c','t'] ];
  
  console.log(plateau.join('\n') + '\n\n');
  
  // On déplace le pion de deux cases en avant 2
  plateau[4][4] = plateau[6][4];
  plateau[6][4] = ' ';
  console.log(plateau.join('\n'));

  
//Utiliser un tableau pour tabuler un ensemble de valeurs
values = [];
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)


