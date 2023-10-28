                                        /* Exercice 1 */
/*Create a div container on HTML document and create 100 to 100 numbers dynamically and 
append to the container div. 
- Even numbers background is green
- Odd numbers background is yellow
- Prime numbers background is red*/

const body = document.querySelector("body");
const html = document.querySelector("html");
body.style.background = " #7F7FD5";
body.style.background =
  "-webkit-linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)";
body.style.background = "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)";
body.style.boxSizing = "border-box";
body.style.fontSize = "62.5%";
body.style.padding = "3rem 1rem";

const css =
  "*, *::before, *::after { padding: 0; margin: 0; box-sizing: inherit; } html { font-family: 'Raleway', sans-serif; }";

const styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(css));
body.appendChild(styleElement);

const header = document.createElement("div");
header.style.marginBottom = "1rem";
header.style.textAlign = "center";

let pOne;

const txt = [
  "Even numbers background is green",
  "Odd numbers background is yellow",
  "Prime numbers background is red"
];

for (let a = 0; a < 3; a++) {
  pOne = document.createElement("p");
  pOne.style.fontSize = "1rem";
  if (a === 1) {
    pOne.style.margin = "0.5rem 0 0.5rem 0";
  }
  pOne.textContent = txt[a];
  header.appendChild(pOne);
}

const divGroup = document.createElement("div");
divGroup.style.width = "100%";
divGroup.style.textAlign = "center";
divGroup.style.marginTop = "5px";

const input = document.createElement("input");
input.placeholder = "Generate more numbers...";
input.style.width = "200px";
input.style.padding = "9px";
input.style.border = "none";
input.style.fontSize = "13px";

const button = document.createElement("button");
button.textContent = "Generate numbers";
button.style.background = "#2ecc71";
button.style.padding = "9px";
button.style.border = "none";
button.style.marginLeft = "5px";
button.style.fontSize = "13px";
button.style.cursor = "pointer";

// background:hover
button.addEventListener("mouseenter", () => (button.style.background = "#27ae60"));
button.addEventListener(
  "mouseleave",
  () => (button.style.background = "#2ecc71")
);

const divNumbers = document.createElement("div");
divNumbers.style.width = "100%";
divNumbers.style.display = "flex";
divNumbers.style.justifyContent = "center";
divNumbers.style.marginTop = "1rem";

const ul = document.createElement("ul");
ul.style.width = "100%";
ul.style.maxWidth = "51.7rem";
ul.style.listStyleType = "none";

ul.style.display = "flex";
ul.style.flexWrap = "wrap";

let li;

// Prime numbers
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// numbers is li element

const numbers = (nbr) => {
  for (let a = 0; a < nbr; a++) {
    // element li
    li = document.createElement("li");
    li.setAttribute("id", "number");
    li.style.color = "#ecf0f1";
    li.style.fontWeight = "700";
    li.style.fontSize = "2rem";
    li.style.width = "8rem";
    li.style.height = "8rem";
    li.style.padding = "1rem";
    li.style.borderRadius = "1rem";
    li.style.margin = "0.3rem";
    li.style.display = "flex";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";
    li.textContent = a;

    // Even numbers => GREEN
    if (a === 0) {
      li.style.background = "#34495e";
      li.style.color = "red";
    }
    if (a === 1) {
      li.style.background = "#f1c40f";
    }
    if (a === 2) {
      li.style.background = "rgb(46,204,113)";
      li.style.background =
        "red";
    }

    if (a >= 3) {
      if (a % 2 === 0) {
        li.style.background = "#2ecc71";
      } else {
        li.style.background = "#f1c40f";
      }
      if (isPrime(a)) {
        li.style.background = "rgb(241,196,15)";
        li.style.background =
          "red";
      }
    }

    // ul > li
    ul.appendChild(li);
  } ///////
};

// Button click
button.addEventListener("click", (e) => {
  ul.innerHTML = "";
  numbers(input.value);
});

// automatic
numbers(12);

divGroup.appendChild(input);
divGroup.appendChild(button);
divNumbers.appendChild(ul);

document.body.appendChild(header);
document.body.appendChild(divGroup);
document.body.appendChild(divNumbers);
