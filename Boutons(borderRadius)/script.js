const bouton = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");

btn1.addEventListener("click", () => {
    bouton.classList.toggle;
    bouton.style.borderRadius = "20px";
});

btn2.addEventListener("click", () => {
    bouton.classList.toggle;
    bouton.style.borderRadius = "30px";
});

btn3.addEventListener("click", () => {
    bouton.classList.toggle;
    bouton.style.borderRadius = "40px";
});

btn4.addEventListener("click", () => {
    bouton.classList.toggle;
    bouton.style.borderRadius = "50px";
});

btn5.addEventListener("click", () => {
    bouton.classList.toggle;
    bouton.style.borderRadius = "60px";
});
