// Typing Effect for Tagline
const tagline = document.getElementById('tagline');
const text = "Cloud Engineer in Training | IT Support Veteran";
let index = 0;

function type() {
    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Speed of typing
    } else {
        setTimeout(() => {
            tagline.textContent = "";
            index = 0;
            type();
        }, 3000); // Pause before restart
    }
}

window.onload = type;

// Section Fade-In Animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Animation for Skills
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05) rotate(1deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
    });
});