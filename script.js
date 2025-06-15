console.log("Conversery Website Loaded!");

// --- Intersection Observer for Feature Animations ---
const featuresToAnimate = document.querySelectorAll('.animate-feature');
if (featuresToAnimate.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // The delay is now handled by the main animation property, but this is fine to keep.
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    featuresToAnimate.forEach(feature => {
        observer.observe(feature);
    });
}

// --- Dynamic Header and Logo Animation on Scroll ---
const header = document.querySelector('header');

// Check if the header element exists before adding the listener
if (header) {
    window.addEventListener('scroll', () => {
        // Use a small scroll threshold to trigger the animation
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}