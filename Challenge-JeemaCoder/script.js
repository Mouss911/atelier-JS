function validateForm() {
    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;

    if(prenom === ""){
        alert("Veuillez remplir le champ prenom")
        return false;
    }

    if(nom === ""){
        alert("Veuillez remplir le champ nom")
        return false;
    }

    if(telephone === ""){
        alert("Veuillez remplir le champ telephone")
        return false;
    }

    if(email === ""){
        alert("Veuillez remplir le champ email")
        return false;
    } 
    // else if (!email.includes("@")){
    //     alert("email invalide")
    //     return false;
    // }
    
    return true;

}

//Fonction d'affichage
function showData(){
    let listUser;
    if(localStorage.getItem("listUser") == null){
        listUser = [];
    }
    else{
        listUser = JSON.parse(localStorage.getItem("listUser"))
    }
    let html = ""

    listUser.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.prenom + "</td>";
        html += "<td>" + element.nom + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.telephone + "</td>";
        html += `<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Supprimer</button>
        <button onclick="updateData(' + index + ')" class="btn btn-warning">Modifier</button></td>`;
        html += "</tr>";
    });
    document.querySelector("#table tbody").innerHTML = html;
}

// Charger les données du formulaire depuis le localStorage au démarage de la page
document.onload = showData();

// Fonction ajout de données dans le localStorage
function addData(){
    if(validateForm() == true){
        let prenom = document.getElementById("prenom").value;
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let telephone = document.getElementById("telephone").value;
        
        let listUser;
        if(localStorage.getItem("listUser") == null){
            listUser = [];
        }
        else{
            listUser = JSON.parse(localStorage.getItem("listUser"));
        }

        listUser.push({
            prenom : prenom,
            nom : nom,
            email : email,
            telephone : telephone,
        });

        localStorage.setItem("listUser", JSON.stringify(listUser));
        showData();
        document.getElementById("prenom").value = "";
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telephone").value = "";
    }
}

//Fonction de suppression les données dans le localStorage
function deleteData(index){
    let listUser;
        if(localStorage.getItem("listUser") == null){
            listUser = [];
        }
        else{
            listUser = JSON.parse(localStorage.getItem("listUser"));
        }
    listUser.splice(index, 1);
    localStorage.setItem("listUser", JSON.stringify(listUser));
    showData();
}

//Fonction de modification
function updateData(index){
    document.getElementById("submit").style.display = "none";
    document.getElementById("edit").style.display = "block";

    let listUser;
    if(localStorage.getItem("listUser") == null){
        listUser = [];
    }
    else{
        listUser = JSON.parse(localStorage.getItem("listUser"));
    }

    document.getElementById("prenom").value = listUser[index].prenom;
    document.getElementById("nom").value = listUser[index].nom;
    document.getElementById("email").value = listUser[index].email;
    document.getElementById("telephone").value = listUser[index].telephone;

}