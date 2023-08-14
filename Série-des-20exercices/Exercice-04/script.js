// A l'aide de la fonction prompt() , demander un prix HT à l'utilisateur puis insérer le prix TTC (TVA 20 %)
// dans la page HTML à l'aide de document. body. innerText .

let HT = parseFloat(prompt("Veuillez saisir le prix HT : "));
let TVA = 20/100;
let TTC = HT * (1 + TVA);

document.body.innerHTML = TTC;