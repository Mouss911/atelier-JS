let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");
let edit = document.getElementById("edit");
let ajout = document.getElementById("submit");
const form = document.querySelector("form");

//Fonction d'affichage des données
function afficheDonnee(){
    let listPersonne;
    if(localStorage.getItem("listPersonne") == null){
        listPersonne = [];
    }
    else{
        listPersonne = JSON.parse(localStorage.getItem("listPersonne"));
    }
    let ligne = "";

    listPersonne.forEach(function (element, index){
        ligne += "<tr>";
        ligne += "<td>" + element.prenom + "</td>";
        ligne += "<td>" + element.nom + "</td>";
        ligne += "<td>" + element.email + "</td>";
        ligne += "<td>" + element.telephone + "</td>";
        ligne += 
            '<td><button onclick="deleteUser(' +
            index +
            ')" class="btn btn-danger">Supprimer</button><button onclick="updateUser(' +
            index +
            ')" class="btn btn-warning">Modifier</button></td>';
        ligne += "</tr>";
    });
    document.querySelector("#table tbody").innerHTML = ligne;
}

// Charger les données du formulaire depuis le localStorage au démarage de la page
window.onload = afficheDonnee;

//Ajout de données
function ajoutUser(){
        let prenom = document.getElementById("prenom").value;
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let telephone = document.getElementById("telephone").value;
        
    let listPersonne;
    if(localStorage.getItem("listPersonne") == null){
        listPersonne = [];
    }
    else{
        listPersonne = JSON.parse(localStorage.getItem("listPersonne"));
    }

    listPersonne.push({
            prenom : prenom,
            nom : nom,
            email : email,
            telephone : telephone,
        });

    localStorage.setItem("listPersonne", JSON.stringify(listPersonne));

    afficheDonnee();

    document.getElementById("prenom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    
}

//Fonction suppression
function deleteUser(index){
    let listPersonne;
    if(localStorage.getItem("listPersonne") == null){
        listPersonne = [];
    }
    else{
        listPersonne = JSON.parse(localStorage.getItem("listPersonne"));
    }

    listPersonne.splice(index, 1);
    localStorage.setItem("listPersonne", JSON.stringify(listPersonne));

    afficheDonnee();
}

//Fonction de modification
function updateUser(index){
    edit.style.display = "block";
    ajout.style.display = "none";

    let listPersonne;
    if(localStorage.getItem("listPersonne") == null){
        listPersonne = [];
    }
    else{
        listPersonne = JSON.parse(localStorage.getItem("listPersonne"));
    }

    prenom.value = listPersonne[index].prenom;
    nom.value = listPersonne[index].nom;
    email.value = listPersonne[index].email;
    telephone.value = listPersonne[index].telephone;

    edit.onclick = function(){
        listPersonne[index].prenom = prenom.value;
        listPersonne[index].nom = nom.value;
        listPersonne[index].email = email.value;
        listPersonne[index].telephone = telephone.value;

        localStorage.setItem("listPersonne", JSON.stringify(listPersonne));

        afficheDonnee();

        prenom.value = "";
        nom.value = "";
        email.value = "";
        telephone.value = "";

        ajout.style.display = "block";
        edit.style.display = "none";
    }
}