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
