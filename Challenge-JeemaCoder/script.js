function validateForm() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let telephone = document.getElementById("telephone").value;

    if(nom = ""){
        alert("Veuillez le champ nom")
        return false;
    }

    if(prenom = ""){
        alert("Veuillez le champ prenom")
        return false;
    }

    if(telephone = ""){
        alert("Veuillez le champ telephone")
        return false;
    }

    if(email = ""){
        alert("Veuillez le champ email")
        return false;
    }
}

function showDate(){
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
        html += `<td><button onclick="deleteData('+index+')" class="btn btn-danger">Supprimer</button>
        <button onclick="updateData('+index+')" class="btn btn-warning m-2">Modifier</button></td>`;
        html += "</tr>";
    });
    document.querySelector("#table tbody").innerHTML = html;
}