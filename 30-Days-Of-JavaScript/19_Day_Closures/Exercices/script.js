
// Create a closure which has one inner function
function uneFonction() {
    let nom = 'Moussa';
    function afficheNom() {
        console.log(nom);
    }
    return afficheNom;
}

let maFonction = uneFonction();
console.log(maFonction());




// Create a closure which has three inner functions
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function plusTwo(){
        count += 2
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        plusTwo:plusTwo()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusTwo)
