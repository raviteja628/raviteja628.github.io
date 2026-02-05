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

setInterval(updateTyping, 2000);
updateTyping();


// Scroll-triggered fade-in
// const fadeSections = document.querySelectorAll(".section");

// function revealOnScroll() {
//     fadeSections.forEach(section => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//             section.classList.add("visible");
//         }
//     });
// }

// window.addEventListener("scroll", revealOnScroll);
// window.addEventListener("load", revealOnScroll);

// Scroll-triggered fade-in updated
const fadeSections = document.querySelectorAll(".fade-section");

function revealOnScroll() {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // When section enters viewport → fade in
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            section.classList.add("visible");
        } 
        // When section leaves viewport → fade out
        else {
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


