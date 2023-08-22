let equal_pressed = 0;

// Accès à tous les boutons sauf C et CE
let button_input = document.querySelectorAll(".input-button");

// Accès à input, equal, clear et erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");


// Accès à chaque class en utilisant forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        // Afficher la valeur de chaque bouton
        input.value += button_class.value;
    });
});

// Résoudre les opérations quand on clique sur le bouton 'Egal'
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        // Evaluer l'input de l'utilisateur
        let solution = eval(inp_val);
        // Vrai si c'est un entier naturel
        // Faux si c'est un décimal
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
     // Si l'utilisateur met un input invalide
     alert("Input invalide");   
    }
});
