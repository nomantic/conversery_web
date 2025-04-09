console.log("Conversery Website Loaded!");

// --- Intersection Observer for Fade-in Animation on Scroll ---

const featuresToAnimate = document.querySelectorAll('.animate-feature');

// Configuration for the observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // If the element is intersecting (visible)
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing the element once it's visible
            // observer.unobserve(entry.target);
        }
        // Optional: If you want the animation to reverse when scrolling up
        // else {
        //     entry.target.classList.remove('visible');
        // }
    });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each feature item
featuresToAnimate.forEach(feature => {
    observer.observe(feature);
});


// --- Optional: Alert for disabled button ---
const webappButton = document.querySelector('.webapp-button');

if (webappButton && webappButton.disabled) {
    webappButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('The Webapp is launching soon! Stay tuned.');
    });
}

// --- Add any other future JS here ---