// Comando per aprire il menu navigazione da telefono
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
// Funzione per attivare il menu comparsa da telefono
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

//Comandi per cambiare il tema del portfolio
const themeSwitch = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement; // Selettore root per gestire le variabili CSS

// Funzione per alternare il tema chiaro e scuro del portfolio
themeSwitch.addEventListener('click', () => {
    root.classList.toggle('light-mode');
});

// Funzione per apertura e chiusura popup
function showPopup() {
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}
