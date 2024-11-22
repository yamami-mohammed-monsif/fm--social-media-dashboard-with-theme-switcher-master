const toggleButton = document.getElementById("toggle-theme-btn");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme") || "light"; // Default to "light"
  body.className = theme;

  // Set button state based on the theme
  toggleButton.classList.toggle("active", theme === "dark");
});

function changeTheme() {
  const isDarkMode = body.classList.toggle("dark"); // Toggle "dark" class
  const newTheme = isDarkMode ? "dark" : "light"; // Determine the new theme
  localStorage.setItem("theme", newTheme); // Save the theme to localStorage

  // Update the button state
  toggleButton.classList.toggle("active", isDarkMode);
}

toggleButton.addEventListener("click", changeTheme);
