// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation Setup (Intersection Observer)
const revealElements = document.querySelectorAll('.fade-in');

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Optional initial load trigger for elements already in view
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const firstElements = document.querySelectorAll('.hero .fade-in');
        firstElements.forEach(el => {
            el.classList.add('appear');
        });
    }, 100);
});
