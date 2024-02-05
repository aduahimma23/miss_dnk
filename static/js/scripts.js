// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', function() {
//   navLinks.classList.toggle('active');
// });


document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code for blinking text
    function blinkText() {
        var blinkingText = document.querySelector('.blinking-text');
        if (blinkingText) {
            blinkingText.style.opacity = (blinkingText.style.opacity == '0' ? '1' : '0');
        }
    
    // Set interval for blinking
    var blinkInterval = setInterval(blinkText, 500); 
}});