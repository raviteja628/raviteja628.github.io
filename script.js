// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
// Blog Search
const searchInput = document.getElementById("blogSearch");
const blogList = document.getElementById("blogList");

searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const posts = blogList.getElementsByTagName("li");

    for (let i = 0; i < posts.length; i++) {
        const text = posts[i].textContent.toLowerCase();
        posts[i].style.display = text.includes(filter) ? "" : "none";
    }
});

// Typing Animation
const typingElement = document.querySelector(".typing-text");
const phrases = [
    "Empowering Business with Data & AI.",
    "Building Systems with Intention.",
    "Engineering with Empathy.",
    "AI with Purpose."
];

let phraseIndex = 0;

function updateTyping() {
    typingElement.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(updateTyping, 5000);
updateTyping();


// Scroll-triggered fade-in
const fadeSections = document.querySelectorAll(".section");

function revealOnScroll() {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// // Typing Animation with Sound Toggle
// const typingElement = document.querySelector(".typing-text");
// const soundToggle = document.getElementById("typingSoundToggle");

// const phrases = [
//     "Empowering Business with Data & AI.",
//     "Building Systems with Intention.",
//     "Engineering with Empathy.",
//     "AI with Purpose."
// ];

// let phraseIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// let typingSound = new Audio("https://actions.google.com/sounds/v1/office/typewriter.ogg");
// typingSound.volume = 0.0; // silent by default

// function type() {
//     const currentPhrase = phrases[phraseIndex];

//     // Play sound only if toggle is ON
//     if (soundToggle.checked) {
//         typingSound.volume = 0.2;
//         typingSound.play();
//     } else {
//         typingSound.volume = 0.0;
//     }

//     typingElement.textContent = currentPhrase.substring(0, charIndex);

//     if (!isDeleting && charIndex < currentPhrase.length) {
//         charIndex++;
//         setTimeout(type, 120); // slower typing
//     } else if (charIndex === currentPhrase.length) {
//         setTimeout(() => {
//             isDeleting = true;
//             type();
//         }, 2000); // pause at end
//     } else if (isDeleting && charIndex > 0) {
//         charIndex--;
//         setTimeout(type, 60);
//     } else {
//         isDeleting = false;
//         phraseIndex = (phraseIndex + 1) % phrases.length;
//         setTimeout(type, 500);
//     }
// }

// setTimeout(type, 1500); // wait for fade-in

