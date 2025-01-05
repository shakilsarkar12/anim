const box = document.querySelector(".box");
const firstText = document.querySelector(".first");
const secondText = document.querySelector(".second");
const open = document.getElementById("open");
const close = document.getElementById("close");


open.addEventListener("click", () => {
  box.classList.remove("close");
  box.classList.add("open");
  open.classList.remove("active");
  close.classList.add("active");
  firstText.innerHTML = "close";
  secondText.innerHTML = "close";
});

close.addEventListener("click", () => {
  box.classList.remove("open");
  box.classList.add("close");
  open.classList.add("active");
  close.classList.remove("active");
  firstText.innerHTML = "open";
  secondText.innerHTML = "open";
});