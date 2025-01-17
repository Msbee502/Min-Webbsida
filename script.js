// Get elements
const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const formPopup = document.getElementById("formPopup");

// Show popup form
openFormBtn.addEventListener("click", () => {
  formPopup.style.display = "flex";
});

// Hide popup form
closeFormBtn.addEventListener("click", () => {
  formPopup.style.display = "none";
});

// Hide popup form when clicking outside the form
window.addEventListener("click", (event) => {
  if (event.target === formPopup) {
    formPopup.style.display = "none";
  }
});
