// L'instruction JS suivante permet d'obtenir un nombre aléatoire entre 0 et 100. La limite haute (100)
// n'est pas incluse dans le tirage aléatoire.
// Math.floor(Math.random() * 100);
// A l'aide de cette instruction, insérer dans la page HTML 10 nombres aléatoires 
// sous la forme d'une liste à puces.

for (let i = 0; i < 10; i++) {
    const alea = Math.floor(Math.random() * 100);
    //console.log(alea);
    document.write(alea + `<br>`);
  }

  