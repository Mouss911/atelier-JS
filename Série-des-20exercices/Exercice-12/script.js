// En utilisant deux boucles for , écrire un script qui produit le résultat ci-dessous, dans la page HTML.
// 1
// 22
// 333
// 4444
// 55555

let tab = '';
for(let i = 1;i <= 5;i++) {
   for(let j = 1;j <= i;j++) {
      tab = tab + i;
   }
   tab = tab + '<br>';
}
document.write(tab);