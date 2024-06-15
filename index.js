const toggleButton = document.getElementById('toggle-theme-btn');

toggleButton.addEventListener('click', () => {

    document.querySelector('body').classList.toggle('dark');
    toggleButton.classList.toggle('active');
});