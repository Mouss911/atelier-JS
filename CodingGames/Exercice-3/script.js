/*Modifiez un tableau avec push et pop*/

/* 
Vous disposez d'un tableau contenant des nombres aléatoires et vous devez 
créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :

tous les éléments de tInit inférieurs à 10 dans le tableau tInf
et tous les éléments de tInit supérieurs ou égaux à 10 dans le tableau tSup
la fonction doit fonctionner quel que soit le tableau tInit
*/

function sortNumbers(tInit, tInf, tSup) {
    for (const element of tInit) {
      if (element < 10) {
        tInf.push(element);
      } else {
        tSup.push(element);
      }
    }
  }
  
  const tInit = [2, 12, 15, 25, 5, 7, 6, 10];
  const tInf = [];
  const tSup = [];
  
  sortNumbers(tInit, tInf, tSup);
  
  console.log(tInf);
  console.log(tSup);