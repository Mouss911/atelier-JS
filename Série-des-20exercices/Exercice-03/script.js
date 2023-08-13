// Déclarer une variable budget qui contient le budget de votre choix. Déclarer une variable achats
// qui contient le montant de votre choix. Afficher si le budget permet de payer les achats.

let budget = parseFloat(prompt("Entrer votre budget: "));
let achats = parseFloat(prompt("Entrer la valeur des achats: "));

if(budget >= achats) {
    alert("Le budget permet de payer tous les achats");
} else{
    alert("Le budget ne permet pas de payer tous les achats");
}