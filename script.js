// 1. Typing Animation Logic
const typingText = document.querySelector(".typing-text");
const roles = [
    "Programmer.", 
    "Web Designer", 
    "UI/UX Designer.", 
    "Prompt Engineer.", 
    "Computer Engineer."
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex--);
    } else {
        typingText.textContent = currentRole.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing on load
typeEffect();


// 2. Scroll Animation (Fade in Elements)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// 3. Skill Bar Animation (Fills when scrolled to)
const skillSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.skill-per');

const showProgress = () => {
    progressBars.forEach(progressBar => {
        const value = progressBar.getAttribute('data-width');
        progressBar.style.width = value;
    });
}

const hideProgress = () => {
    progressBars.forEach(p => {
        p.style.width = 0;
    });
}

// Trigger skill animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showProgress();
        } else {
            hideProgress();
        }
    });
});

if (skillSection) {
    skillObserver.observe(skillSection);
}
