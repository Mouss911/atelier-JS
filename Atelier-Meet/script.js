// Demande à l'utilisateur de saisir une balise HTML
const baliseSaisie = prompt("Veuillez saisir une balise HTML :");

// Liste de balises HTML valides
const balisesHTML = ["div", "p", "h1", "h2", "h3", "h4", "h5", "img", "ul", "li", "span", "body", "aside", "section", "main", "a", "b", "br", "center", "em", "fieldset", "caption", "legend", "figure", "head", "header", "iframe", "input", "hr", "strike", "link", "h6", "strong", "head", "mark", "script", "title", "td", "tr", "table", "thead", "tfoot"];

// Vérifie si la balise saisie existe dans la liste des balises HTML valides
if (balisesHTML.includes(baliseSaisie)) {
  alert(`La balise <${baliseSaisie}> est une balise HTML valide.`);
} else {
  alert(`La balise <${baliseSaisie}> n'est pas une balise HTML valide.`);
}
