// Scrollspy: destaca o link de navegação da seção visível
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('bg-brand-800/60', isActive);
        link.classList.toggle('text-white', isActive);
    });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Botão Voltar ao Topo
const backToTopBtn = document.getElementById('back-to-top');

function toggleBackToTop() {
    const visible = window.scrollY > 400;
    backToTopBtn.classList.toggle('opacity-0', !visible);
    backToTopBtn.classList.toggle('pointer-events-none', !visible);
    backToTopBtn.classList.toggle('translate-y-4', !visible);
}

window.addEventListener('scroll', toggleBackToTop, { passive: true });
toggleBackToTop();

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
