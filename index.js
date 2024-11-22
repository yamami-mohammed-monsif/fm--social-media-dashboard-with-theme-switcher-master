const toggleButton = document.getElementById("toggle-theme-btn");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  // when opening the app fist time the theme in local storage will be null, default it to light
  const theme = localStorage.getItem("theme") || "light";
  body.className = theme;
});

function changeTheme() {
  // change the theme
  if (body.className === "light") {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  // make the button move
  toggleButton.classList.toggle("active");
}

toggleButton.addEventListener("click", changeTheme);
