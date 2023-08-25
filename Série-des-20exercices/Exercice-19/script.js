// A l'aide du code de l'exercice précédent et de cette nouvelle instruction, écrire un code JS qui modifie
// aléatoirement la couleur d'arrière-plan de l'élément HTML <body>.

function changeBackground() {
    const couleur = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = couleur;
}

changeBackground();