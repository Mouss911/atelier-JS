//Dom MANIPULATION

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
  alert('I also love Javascript ');
}

buttonTwo.addEventListener('click', alertBtn);

// MouseOver

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'gray';
}
newBackgroundColor.addEventListener('mouseover', changeBgColor);
