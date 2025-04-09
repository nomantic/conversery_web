console.log("Conversery Website Loaded!");

// You can add more JavaScript functionality here later if needed.
// For example:
// - Smooth scrolling for navigation links (if you add them)
// - Animations on scroll
// - Form validation (if you add a contact form)

// Example: Alert if someone clicks the disabled button (optional)
const webappButton = document.querySelector('.webapp-button');

if (webappButton && webappButton.disabled) {
    webappButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default action if it were not disabled
        alert('The Webapp is launching soon! Stay tuned.');
    });
}