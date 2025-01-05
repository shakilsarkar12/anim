const box = document.querySelector(".box");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  box.classList.remove("close");
  box.classList.add("open");
  open.classList.remove("active")
  close.classList.add("active")
});

close.addEventListener("click", () => {
  box.classList.remove("open");
  box.classList.add("close");
  open.classList.add("active")
  close.classList.remove("active")
});