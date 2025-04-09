document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleDarkMode() {
    const body = document.body;
    const footer = document.querySelector('footer');

    // Toggle body class
    body.classList.toggle('dark-mode');

    // Toggle footer text color
    if (footer.classList.contains('dark-mode')) {
        footer.style.color = '#9EB1FF';
    } else {
        footer.style.color = '#1F2D5C';
    }

    // Toggle mode icon
    const modeIcon = document.getElementById('mode-icon');
    if (modeIcon.src.includes('moon')) {
        modeIcon.src = 'img/sun.svg';
        modeIcon.alt = 'Mode clair';
    } else {
        modeIcon.src = 'img/moon.svg';
        modeIcon.alt = 'Mode sombre';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le formulaire de s'envoyer normalement

        // Vous pouvez ajouter ici le code pour envoyer le formulaire (par exemple, via AJAX)
        // En attendant, vous pouvez afficher un message de confirmation ou effectuer d'autres actions
        alert('Formulaire soumis avec succès!');
    });
});
