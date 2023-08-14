// A l'aide de la fonction prompt() , demander un prix HT puis un taux de la TVA à l'utilisateur puis insérer
// le prix TTC dans la page HTML à l'aide de document.body.innerHTML . Si le prix TTC est strictement
// supérieur à 100 on affichera le prix en rouge sinon en vert. Pour simplifier on utilisera les bouts de code
// suivants sur l'élément HTML de votre choix :

let HT = parseFloat(prompt("Donner le prix HT : "));
let TVA = parseFloat(prompt("Donnez le TVA : "));
let TTC = HT * (TVA / 100);

if (TTC > 100) {
    document.body.innerHTML = '<h1 style="color: red;"> TTC </h1>'
} else{
    document.body.innerHTML = '<h1 style="color: green;"> TTC </h1>'   
}