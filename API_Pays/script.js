const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const regionName = document.querySelectorAll(".regionName");
// const search = document.querySelector("search");
const inputs = document.getElementById("input");

async function getCountry(){
    const url = await fetch("https://restcountries.com/v3.1/all")
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}
getCountry();
function showCountry(data){
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML = `
    <div class="country-img">
    <img src="${data.flags.png}" alt="">
</div>
<div class="country-info">
    <h5>${data.name.common}</h5>
    <p><strong>Population :</strong>${data.population}</p>
    <p class="regionName"><strong>Region :</strong>${data.region}</p>
    <p><strong>Capital :</strong>${data.capital}</p>
</div>`
    countriesElem.appendChild(country)
}

dropDown.addEventListener("click", () =>{
    dropElem.classList.toggle("showDropDown")
})

region.forEach(element => {
    element.addEventListener("click", ()=>{
        regionName.forEach(element => {
            console.log(element);
        })
    })
});


inputs.addEventListener("input", ()=>{
    async function getResearch(){
        if(inputs.value===''){
            alert("Veuillez mettre un nom de pays connu!")
        } else{
        const url1 = await fetch(`https://restcountries.com/v3.1/name/${inputs.value}`)
        const resp = await url1.json();
        console.log(resp, "bravo");
        // countriesElem.innerHTML = "";
        // res.forEach(element => {
        //     showCountry(element)
        // });
    }
        }
        getResearch();
})