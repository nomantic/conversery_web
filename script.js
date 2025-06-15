console.log("Conversery Website Loaded!");

// --- Intersection Observer for Feature Animations ---
const featuresToAnimate = document.querySelectorAll('.animate-feature');
if (featuresToAnimate) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.05}s`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    featuresToAnimate.forEach(feature => {
        observer.observe(feature);
    });
}

// --- Dynamic Header and Logo on Scroll ---
const header = document.querySelector('header');
const heroLogo = document.querySelector('.hero-logo');

// Check if both elements exist before adding the listener (this prevents errors on static pages)
if (header && heroLogo) {
    window.addEventListener('scroll', () => {
        // Use a threshold (e.g., 100px) to trigger the change
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
            heroLogo.classList.add('hero-logo-hidden');
        } else {
            header.classList.remove('header-scrolled');
            heroLogo.classList.remove('hero-logo-hidden');
        }
    });
}