const container = document.querySelector(".click-event");

container.addEventListener("mouseover", () => {
  container.classList.add("border-radius");
});


container.addEventListener("mouseout", () => {
  container.classList.remove("border-radius");
});
