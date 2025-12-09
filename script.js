/* -------------------------------------------------------------
    1. TYPING ANIMATION
--------------------------------------------------------------*/

const typingText = document.querySelector(".typing-text");
const roles = ["Programmer", "Web Designer", "Prompt Engineer"];
let idx = 0;
let char = 0;
let deleting = false;

function typeEffect() {
    const current = roles[idx];

    if (deleting) {
        typingText.textContent = current.substring(0, char--);
    } else {
        typingText.textContent = current.substring(0, char++);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && char === current.length) {
        speed = 2000;
        deleting = true;
    }

    if (deleting && char === 0) {
        deleting = false;
        idx = (idx + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* -------------------------------------------------------------
    2. FADE-IN SCROLL ANIMATION
--------------------------------------------------------------*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* -------------------------------------------------------------
    3. SKILL BAR ANIMATION
--------------------------------------------------------------*/

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target.querySelector(".skill-fill");
            if (bar) bar.style.width = bar.getAttribute("data-width");
        }
    });
});

document.querySelectorAll(".skill-box").forEach(box =>
    skillObserver.observe(box)
);
