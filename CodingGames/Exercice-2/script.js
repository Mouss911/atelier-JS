/*Boucle et tableau*/

/* 
On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. 
Pour cela on va créer 2 tableaux :

posX qui contient la série des abscisses des objets
posY qui contient la série des ordonnées des objets
Créez une fonction initXY :

qui prend en 1er argument l'abscisse du 1er objet
qui prend en 2ème argument l'ordonnée du 1er objet
qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) 
les uns des autres en abscisse et de 30 pixels (+30) en ordonnée
*/

function initXY(xo, yo) {
    let posX = [xo];
    let posY = [yo];
  
    for (let i = 1; i < 20; i++) {
      const newX = posX[i - 1] + 40;
      const newY = posY[i - 1] + 30;
  
      posX.push(newX);
      posY.push(newY);
    }
  
    return { posX, posY };
  }
  const positions = initXY(40, 30);
  console.log(positions);
  