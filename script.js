// Comando per aprire il menu navigazione da telefono
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

//Comandi per cambiare il tema del portfolio
const themeSwitch = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement; // Selettore :root per gestire le variabili CSS

// Funzione per alternare il tema
themeSwitch.addEventListener('click', () => {
    // Alterna la classe 'light-mode' al root
    root.classList.toggle('light-mode');

    // // Cambia l'icona
    // if (root.classList.contains('light-mode')) {
    //     themeIcon.classList.remove('fa-lightbulb');
    //     themeIcon.classList.add('fa-solid', 'fa-lightbulb'); // Icona accesa
    // } else {
    //     themeIcon.classList.remove('fa-solid', 'fa-lightbulb');
    //     themeIcon.classList.add('fa-lightbulb'); // Icona spenta
    // }
});