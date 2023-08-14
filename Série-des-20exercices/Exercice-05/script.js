// A l'aide de la fonction prompt() , demander un prix HT puis un taux de la TVA à l'utilisateur puis insérer
// le prix TTC dans la page HTML à l'aide de document.body.innerText .

let HT = parseFloat(prompt("Donner le prix HT : "));
let TVA = parseFloat(prompt("Donnez le TVA : "));
let TTC = HT * (TVA / 100);

document.body.innerHTML = TTC;