document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('mobile-dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    // Interception de l'événement tactile sur smartphone et tablette
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Annule la redirection immédiate vers services.html
            dropdown.classList.toggle('is-open'); // Alterne l'affichage de la liste
        }
    });

    // Masque automatiquement la liste si l'utilisateur clique ailleurs sur l'écran
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && window.innerWidth <= 768) {
            dropdown.classList.remove('is-open');
        }
    });
});
