// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Typing Animation (simple phrase cycling)
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

// Blog Search (if blog exists)
const searchInput = document.getElementById("blogSearch");
const blogList = document.getElementById("blogList");

if (searchInput && blogList) {
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const posts = blogList.getElementsByTagName("li");

        for (let i = 0; i < posts.length; i++) {
            const text = posts[i].textContent.toLowerCase();
            posts[i].style.display = text.includes(filter) ? "" : "none";
        }
    });
}

// Scroll-triggered fade-in + fade-out
const fadeSections = document.querySelectorAll(".fade-section");

function revealOnScroll() {
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;

        if (inView) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
