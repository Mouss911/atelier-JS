// Grâce à la fonction prompt() , demander l'âge de l'utilisateur, puis à l'aide d'une condition, déterminer
// et afficher via une boite de dialogue si l'utilisateur est mineur ou majeur. Pour cet exercice on considère
// qu'un individu est majeur à partir de 18 ans.

let age = parseInt(prompt("Veuillez saisir votre age : "));

if(age >= 18){
    alert("Vous êtes majeur");
} else{
    alert("Vous êtes mineur");
}