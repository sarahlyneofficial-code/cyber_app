const openBtn = document.getElementById("get-started");
const popup = document.getElementById("auth-popup");
const closeBtn = document.getElementById("close-popup");

openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});