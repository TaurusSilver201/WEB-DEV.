const button = document.getElementById("change-text");

button.addEventListener("click", function() {
  const paragraph = document.querySelector("p");
  paragraph.textContent = "This text has been changed by JavaScript!";
});
