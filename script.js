// Script per aprire il menu navigazione da telefono
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
// Funzione per attivare il menu comparsa da telefono
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

let currentLanguage = "it"; // Variabile globale per la lingua

//Funzione globale per popup
function showPopup(message, type = "") {
    const popup = document.getElementById("custom-popup");
    const popupText = document.getElementById("popup-text");

    popupText.textContent = message;
    popup.className = `popup ${type}`; // Aggiunge una classe personalizzata
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(() => {
            popup.style.display = "none";
            popup.style.animation = "fadeIn 0.5s ease-in-out";
            popup.className = "popup"; // Rimuove le classi extra dopo la chiusura
        }, 500);
    }, 2000);
}
//Funzione popup per i progetti non disponibili
function showPopupUnavailable(type = "unavailable") {
    const messages = {
        it: {
            demo: "❌ La demo non è disponibile al momento.",
            repo: "❌ Il repository GitHub non è disponibile.",
            send: "⚠️ Il servizio di invio messaggi non è disponibile al momento."
        },
        en: {
            demo: "❌ The demo is currently unavailable.",
            repo: "❌ The GitHub repository is unavailable.",
            send: "⚠️ The message sending service is currently unavailable."
        }
    };
    // Usa sempre la stessa classe CSS per il popup
    showPopup(messages[currentLanguage][type], "unavailable");
}

//Funzione per cambiare il tema del portfolio
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById('theme-switch');
    const root = document.documentElement; // Selettore root per gestire le variabili CSS

    themeSwitch.addEventListener('click', () => {
        root.classList.toggle('light-mode');

        // Determina quale tema è attivo
        const isLightMode = root.classList.contains('light-mode');
        const themeMessages = {
            it: {
                light: "🌞 Tema chiaro attivato!",
                dark: "🌙 Tema scuro attivato!"
            },
            en: {
                light: "🌞 Light mode activated!",
                dark: "🌙 Dark mode activated!"
            }
        }

        const message = isLightMode ? themeMessages[currentLanguage].light : themeMessages[currentLanguage].dark;

        showPopup(message,"theme"); // Mostra il popup
    });
});



//Funzione per cambiare la lingua del portfolio
document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.getElementById("lang-switch");

    langSwitch.addEventListener("click", function () {
        // Calcola la nuova lingua senza modificarla subito
        const newLanguage = currentLanguage === "it" ? "en" : "it";

        // Mostra il pop-up che notifica il cambio lingua
        const message = {
            it: "Lingua cambiata in Italiano!",
            en: "Language switched to English!"
        };
        showPopup(message[newLanguage], "language");

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
        // Traduzione sezione contatti
        const translatableElements = document.querySelectorAll(".contact [data-it]");
        translatableElements.forEach(item => {
            if (item.tagName === "INPUT" || item.tagName === "TEXTAREA") {
                // Cambia il placeholder per input e textarea
                item.placeholder = item.getAttribute(`data-${currentLanguage}`);
            } else {
                // Cambia il testo per titoli, bottoni e altri elementi
                item.textContent = item.getAttribute(`data-${currentLanguage}`);
            }
        });
        //Traduzione sezione footer
        const footerText = document.querySelectorAll(".footerTxt");
        footerText.forEach(item => {
            item.textContent = item.getAttribute(`data-${currentLanguage}`);
        })
        //
        const cvDownload = document.getElementById("cv-download");
        if (currentLanguage === "it") {
            cvDownload.href = "assets/cv/CV%20Zywel%20Fankam%20(IT).pdf";
        } else {
            cvDownload.href = "assets/cv/CV%20Zywel%20Fankam%20(EN).pdf";
        }
    });
});

