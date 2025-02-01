// Script per aprire il menu navigazione da telefono
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
// Funzione per attivare il menu comparsa da telefono
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

//Script per cambiare il tema del portfolio
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

//Script per cambiare lingua nel portfolio
document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.getElementById("lang-switch");

    let currentLanguage = "it"; // Lingua iniziale

    langSwitch.addEventListener("click", function () {
        // Calcola la nuova lingua senza modificarla subito
        const newLanguage = currentLanguage === "it" ? "en" : "it";

        // Mostra il pop-up che notifica il cambio lingua
        alert(`Cambio lingua: ${currentLanguage} → ${newLanguage}`);

        // Aggiorna la lingua corrente
        currentLanguage = newLanguage;     // Cambia lingua tra it e en

        //Traduzione testi su header
        const navItems = document.querySelectorAll(".nav-item");  // Voci di menu da tradurre
        navItems.forEach(item => {
            item.textContent = item.getAttribute(`data-${currentLanguage}`);
        });
        //Traduzione testo bottone GitHub
        const buttonGitHub = document.querySelector(".button-github");
        if(buttonGitHub) {
            buttonGitHub.textContent = buttonGitHub.getAttribute(`data-${currentLanguage}`);
        }
        // Traduzione testi in sezione Informazioni
        const textAbout = document.querySelector(".info-about .text-h3");
        if (textAbout) {
            textAbout.textContent = textAbout.getAttribute(`data-${currentLanguage}`);
        }
        // Traduzioni bottoni CV e Contatti
        const buttonAbout = document.querySelectorAll(".button-group .button");
        buttonAbout.forEach(item => {
            item.textContent = item.getAttribute(`data-${currentLanguage}`);
        });
        //Traduzione titolo della sezione 'Esperienza'
        const experienceTitle = document.querySelector(".experience .section-title");
        if (experienceTitle) {
            experienceTitle.textContent = experienceTitle.getAttribute(`data-${currentLanguage}`);
        }
        //Traduzione casella dell'esperienza
        const textExp = document.querySelector(".grid-card .monthExp");
        if (textExp) {
            textExp.textContent = textExp.getAttribute(`data-${currentLanguage}`);
        }
        const parExp = document.querySelector(".grid-card .parExp");
        if (parExp) {
            parExp.textContent = parExp.getAttribute(`data-${currentLanguage}`);
        }
        //Traduzione titolo della sezione 'Progetti'
        const projectsTitle = document.querySelector(".projects .section-title");
        if (projectsTitle) {
            projectsTitle.textContent = projectsTitle.getAttribute(`data-${currentLanguage}`);
        }
        //Traduzione nome progetto
        const projectName = document.querySelectorAll(".project-card .projectName");
        projectName.forEach(item => {
            item.textContent = item.getAttribute(`data-${currentLanguage}`);
        })
        //Traduzione descrizione progetto
        const projectDesc = document.querySelectorAll(".project-card .proDesc");
        projectDesc.forEach(item => {
            item.textContent = item.getAttribute(`data-${currentLanguage}`);
        })
        //Traduzione titolo della sezione 'Contatti'
        const contactTitle = document.querySelector(".contact .section-title");
        if (contactTitle) {
            contactTitle.textContent = contactTitle.getAttribute(`data-${currentLanguage}`);
        }
        //Traduzione tasto invia sezione Contatti
        const buttonSend = document.querySelector(".contact .button" );
        if (buttonSend) {
            buttonSend.textContent = buttonSend.getAttribute(`data-${currentLanguage}`);
        }
        //Traduzione sezione footer
        const footerText = document.querySelectorAll(".footerTxt");
        footerText.forEach(item => {
            item.textContent = item.getAttribute(`data-${currentLanguage}`);
        })
    });
});
