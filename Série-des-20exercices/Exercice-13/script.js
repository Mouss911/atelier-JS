// Déclarer une variable avec le nom de votre choix et avec la valeur 0. 
// Tant que cette variable n'atteint pas 20, il faut :

// l'afficher dans la page HTML;
// incrémenter sa valeur de 2 ;


let tab = '';
let i = 0;

while(i <= 20) {
   tab = tab + i + '<br>';
   i = i + 2;
}
document.body.innerHTML = tab;