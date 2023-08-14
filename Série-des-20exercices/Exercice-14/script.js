// Construire un tableau HTML, sans en-tête, avec X lignes et avec Y colonnes dans un élément
// <table>. Ajouter dans les celulles un contenu aléatoire de votre choix. Enfin, placer ce tableau dans la page HTML

const nombreLignes = parseInt(prompt("Entrez le nombre de lignes :"));
const nombreColonnes = parseInt(prompt("Entrez le nombre de colonnes :"));

const tableau = [];

// Remplir le tableau avec des valeurs
for (let i = 0; i < nombreLignes; i++) {
    const ligne = [];
    for (let j = 0; j < nombreColonnes; j++) {
      ligne.push(`Ligne ${i + 1}, Colonne ${j + 1}`);
    }
    tableau.push(ligne);
  }
  
  // Affiche le tableau dans la page
  //console.log(tableau);
  document.write(tableau );