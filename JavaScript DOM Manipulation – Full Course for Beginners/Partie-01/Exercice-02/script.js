// DOM MANIPULATION

// REVEAL EVENT

const revealtBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn');
  } else {
    hiddenContent.classList.add('reveal-btn');
  }
}

revealtBtn.addEventListener('click', revealContent);
