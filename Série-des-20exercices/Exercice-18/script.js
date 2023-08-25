// A l'aide du code de l'exercice précédent, insérer dans la page HTML 10 nombres aléatoires sous la
// forme d'une liste à puces, compris entre 0 et 10 (inclus). Via une condition, compter le nombre de fois
// où le nombre 10 fait partie du tirage. A la fin du script, insérer en plus dans la page HTML le nombre
// en question.

let alea10 = 0;
for (let i = 0; i < 10; i++) {
    const alea = Math.floor(Math.random() * 100);
    //console.log(alea);
    document.write(alea + `<br>`);
   if(alea == 10){
    alea10++;
   } 
   document.write("Le npmbre 10 est apparu" + alea10 + "fois")
  }