// Demande à l'utilisateur de saisir une balise HTML
const baliseSaisie = prompt("Veuillez saisir une balise HTML :");

// Liste de balises HTML valides
const balisesHTML = ["div", "p", "h1", "h2", "h3", "a", "img", "ul", "li", "span"];

// Vérifie si la balise saisie existe dans la liste des balises HTML valides
if (balisesHTML.includes(baliseSaisie)) {
  alert(`La balise <${baliseSaisie}> est une balise HTML valide.`);
} else {
  alert(`La balise <${baliseSaisie}> n'est pas une balise HTML valide.`);
}