                                                        /* EXERCICES */

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//Exercice-1
//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const name = country.name;
      const capital = country.capital;
      const languages = country.languages.map(lang => lang.name).join(', ');
      const population = country.population;
      const area = country.area;

      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Languages: ${languages}`);
      console.log(`Population: ${population}`);
      console.log(`Area: ${area} km2`);
      console.log('-----------------------');
    });
  })
.catch(error => console.error('Error:', error));



//Exercice-2
//Print out all the cat names in to catNames variable.
let catNames = [];

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    catNames = data.map(cat => cat.name);
    console.log(catNames);
  })
.catch(error => console.error('Error:', error));



//Exercice-3-1
//Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    // Filtrer les races avec des informations de poids valides
    const validBreeds = data.filter(cat => cat.weight && cat.weight.metric);

    if (validBreeds.length === 0) {
      console.log('Aucun poids valide trouvé.');
      return;
    }
    // Extraire et convertir les poids en grammes, puis calculez la moyenne
    const weightsInGrams = validBreeds.map(cat => {
      const weightMetric = cat.weight.metric;
      const match = weightMetric.match(/\d+/);
      if (match) {
        return parseFloat(match[0]) * (weightMetric.includes('kg') ? 1000 : 1);
      }
      return 0; // Gérer les formats de poids non valides
    });

    const totalWeightInGrams = weightsInGrams.reduce((acc, weight) => acc + weight, 0);
    const averageWeightInGrams = totalWeightInGrams / validBreeds.length;

    console.log(`Le poids moyenne des chats : ${averageWeightInGrams.toFixed(2)} grammes`);
  })
.catch(error => console.error('Error:', error));




//Exercice-3-2
//Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    // Trier les pays par superficie par ordre décroissant
    data.sort((a, b) => b.area - a.area);

    // Extraire et afficher les 10 plus grands pays
    const largestCountries = data.slice(0, 10);

    console.log('Top 10 Largest Countries:');
    largestCountries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name} - Area: ${country.area} km2`);
    });
  })
.catch(error => console.error('Error:', error));




//Exercice-3-2
//Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const officialLanguages = new Set();

    data.forEach(country => {
      if (country.languages && country.languages.length > 0) {
        country.languages.forEach(lang => {
          if (lang.official) {
            officialLanguages.add(lang.name);
          }
        });
      }
    });

    const totalOfficialLanguages = officialLanguages.size;

    console.log(`Nombre Total De Langues Officielles Dans Le Monde: ${totalOfficialLanguages}`);
  })
.catch(error => console.error('Error:', error));
