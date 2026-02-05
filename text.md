---------------------------index.html-------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ravi Teja Voruganti | Empowering Enterprise Data</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>
    <!-- <div class="floating-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#techstack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#timeline">Timeline</a>
        <a href="#lakehouse">Lakehouse</a>
        <a href="#blog">Blog</a>
        <a href="#cv">CV</a>
        <a href="#contact">Contact</a>
    </div> -->


    <!-- Dark Mode Toggle -->
    <button id="darkToggle">🌙</button>

    <header class="hero">
        <div class="logo">RAVI TEJA VORUGANTI </div>
        <!-- <h5>Empowering Business with Data & AI | Building Systems with Intention</h5> -->
        <!-- <h1 class="typing-text"></h1> -->
        <h1 class="typing-text"></h1>

        <!-- Optional sound toggle -->
        <!-- <div class="sound-toggle">
            <label>
                <input type="checkbox" id="typingSoundToggle">
                Typing Sound
             </label>
        </div> -->

        <!-- <h2>Clarity in Complexity. Systems with Intention.</h2> -->
        <!-- <h5>Building Systems with Intention.</h5> -->
        <p>Lead AI Data Engineer | Gen AI & RAG architect | Building Scalable, AI powered Enterprise Data Platform | Startup Innovator</p>

        <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#timeline">Timeline</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <section id="about" class="section fade-section">
        <h2>About Me</h2>
            <div class="profile-container">
                <!-- <div class="profile-pic">
                <span>R</span>
                </div> -->
                <div class="profile-pic" style="background-image: url('yourphoto.jpg');"></div>
            </div>
        <p>I’m a systems‑driven data and AI engineer who thrives in complexity. I bring clarity, structure, and calm leadership to high‑stakes environments. My work spans Databricks, streaming pipelines, MLflow, GenAI architectures, and enterprise cloud solutions. I love helping teams move from uncertainty to confidence.</p>
    </section>
    <!-- <section id="about" class="section"> -->
    <!-- <section id="about" class="section"></section>
        <h2>About Me</h2>
            <div class="profile-container">
                <div class="profile-pic">
                <span>R</span>
                </div>
            </div> -->

        <!-- <p>I’m a systems‑driven data and AI engineer who thrives in complexity. I bring clarity, structure, and calm leadership to high‑stakes environments. My work spans Databricks, streaming pipelines, MLflow, GenAI architectures, and enterprise cloud solutions. I love helping teams move from uncertainty to confidence.</p> -->
            <!-- <div class="bio-card">
                <div class="bio-front">
                  <h3>Hover to Learn More</h3>
                </div>
                <div class="bio-back">
            <p>I’m a systems‑driven engineer who thrives in complexity.  
            I bring clarity, structure, and calm leadership to high‑stakes environments.  
            My work blends data engineering, ML, and GenAI with intentional design.</p>
                </div>
            </div> -->
    </section>

    <section id="experience" class="section fade-section">
        <h2>Experience</h2>
        <ul>
            <li>Designed end‑to‑end data platforms using Databricks, Delta Lake, MLflow, and Azure.</li>
            <li>Built GenAI hybrid search systems using embeddings, vector search, and metadata filtering.</li>
            <li>Developed Kafka → Databricks streaming pipelines with Bronze/Silver/Gold architecture.</li>
            <li>Operationalized ML models using AutoML + Model Serving + Azure Functions.</li>
            <li>Mentored teams, simplified architectures, and guided customers through ambiguity.</li>
        </ul>
    </section>
    <section id="techstack" class="section fade-section">
    <h2>Tech Stack</h2>
    <div class="tech-grid">

        <!-- <div class="tech-item">
            <img src="https://github.com/devicons/devicon/tree/v2.17.0/icons/databricks/databricks-original.svg" alt="Databricks">
            <p>Databricks</p>
        </div> -->
        <!-- <div class="tech-item">
            <svg width="50" height="50" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="20" rx="4" fill="#FF6A3D"/>
            <rect x="10" y="40" width="80" height="20" rx="4" fill="#2EC4B6"/>
            <rect x="10" y="70" width="80" height="20" rx="4" fill="#1F1F1F"/>
            </svg>
        <p>Databricks</p>
    </div> -->
        <div class="tech-item">
            <i class="fas fa-database tech-icon"></i>
            <p>Databricks</p>
        </div>


        <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure">
            <p>Azure</p>
        </div>

        <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka">
            <p>Kafka</p>
        </div>

        <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python">
            <p>Python</p>
        </div>

        <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker">
            <p>Docker</p>
        </div>

        <div class="tech-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
            <p>Git</p>
        </div>

    </div>
</section>

    <section id="projects" class="section fade-section">
        <h2>Projects</h2>
        <div class="card-container">

            <div class="card">
                <h3>Hybrid Search GenAI System</h3>
                <p>Built a vector + metadata hybrid retrieval system using embeddings, Delta Lake, and Databricks Model Serving.</p>
            </div>

            <div class="card">
                <h3>Kafka Streaming Pipeline</h3>
                <p>Designed a real‑time ingestion pipeline with Structured Streaming, Delta Lake, and business‑ready Gold views.</p>
            </div>

            <div class="card">
                <h3>MLflow + AutoML Intent Classifier</h3>
                <p>Created a multivariate classification model to categorize user search intent and improve marketplace UX.</p>
            </div>

        </div>
    </section>
    <!-- <section id="lakehouse" class="section">
        <h2>Lakehouse Architecture (Animated)</h2>

        <div class="lakehouse-container">

            <div class="lakehouse-layer bronze">
                <h3>Bronze</h3>
                <p>Raw data • Ingestion • Streaming</p>
            </div>

            <div class="arrow">⬇</div>

            <div class="lakehouse-layer silver">
                <h3>Silver</h3>
                <p>Cleaned • Normalized • Enriched</p>
            </div>

            <div class="arrow">⬇</div>

            <div class="lakehouse-layer gold">
                <h3>Gold</h3>
                <p>Business-ready • Aggregated • ML Features</p>
            </div>

        </div>
    </section> -->

    <section id="timeline" class="section fade-section">
        <h2>Career Timeline</h2>
        <div class="timeline">

            <div class="timeline-item">
                <span class="year">2026</span>
                <p>Designed GenAI hybrid search and vector retrieval systems.</p>
            </div>

            <div class="timeline-item">
                <span class="year">2024–2025</span>
                <p>Built MLflow‑driven ML systems and Databricks Model Serving pipelines.</p>
            </div>

            <div class="timeline-item">
                <span class="year">2022–2023</span>
                <p>Developed Kafka streaming pipelines and enterprise data platforms.</p>
            </div>

            <div class="timeline-item">
                <span class="year">Earlier</span>
                <p>Led cloud migrations, data engineering initiatives, and cross‑team architecture work.</p>
            </div>

        </div>
    </section>

    <section id="blog" class="section fade-section">
    <h2>Blog</h2>
    <input type="text" id="blogSearch" placeholder="Search blog posts..." class="search-bar">

    <ul id="blogList" class="blog-list">
        <li><strong>The Future of AI is Hybrid</strong> — Why structured data + vector intelligence is the next frontier.</li>
        <li><strong>Clarity in Complexity</strong> — How calm systems thinking transforms engineering teams.</li>
        <li><strong>GenAI in the Enterprise</strong> — Practical patterns that actually work.</li>
        <li><strong>Building Trust with Data</strong> — Why governance and empathy matter.</li>
        <li><strong>Streaming Done Right</strong> — Lessons from real‑world Kafka pipelines.</li>
    </ul>
</section>


    <section id="contact" class="section fade-section">
        <h2>Contact Me</h2>
        <form class="contact-form">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
    <section id="cv" class="section fade-section">
    <h2>Download My CV</h2>
    <p>You can download my latest CV below.</p>
    <a href="Ravi_CV.pdf" download class="cv-button">Download CV</a>
</section>

    <footer>
        <p>© 2026 Ravi • Built with clarity, intention, and curiosity.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
-------------------------------------Style.css-------------------------------------------------
/* Base */
body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background: #F6F7F9;
    color: #1A1A1A;
    transition: background 0.3s, color 0.3s;
}

/* Dark Mode */
.dark-mode {
    background: #0E0E0E;
    color: #EEE;
}

#darkToggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    border: none;
    background: #FF5F3A;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.dark-mode #darkToggle {
    background: #23C7B8;
}

/* Hero */
.hero {
    text-align: center;
    padding: 80px 20px;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #ddd;
}

.dark-mode .hero {
    background: rgba(20,20,20,0.6);
}

.logo {
    font-weight: 700;
    letter-spacing: 2px;
    color: #FF5F3A;
    margin-bottom: 10px;
}

.dark-mode .logo {
    color: #23C7B8;
}

nav a {
    margin: 0 15px;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
}

nav a:hover {
    color: #FF5F3A;
}

.dark-mode nav a:hover {
    color: #23C7B8;
}


.profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.profile-pic {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: floatPic 4s infinite ease-in-out;
}


/* Sections */
.section {
    max-width: 900px;
    margin: 60px auto;
    padding: 25px;
    background: #FFFFFF;
    border-radius: 14px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: background 0.3s;
}

.dark-mode .section {
    background: #1B1B1B;
    box-shadow: none;
}

/* Cards */
.card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 260px;
    padding: 20px;
    background: #FFFFFF;
    border-radius: 14px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    border-left: 5px solid #FF5F3A;
    transition: transform 0.2s, background 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.dark-mode .card {
    background: #1B1B1B;
    border-left: 5px solid #23C7B8;
}

/* Timeline */
.timeline {
    border-left: 3px solid #FF5F3A;
    padding-left: 20px;
}

.dark-mode .timeline {
    border-left: 3px solid #23C7B8;
}

.year {
    font-weight: bold;
    color: #FF5F3A;
}

.dark-mode .year {
    color: #23C7B8;
}

/* Blog */
.blog-list li {
    margin-bottom: 12px;
}

/* Contact Form */
.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.contact-form button {
    padding: 12px 20px;
    border: none;
    background: #FF5F3A;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
}

.dark-mode .contact-form button {
    background: #23C7B8;
}

/* Tech Stack Grid */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    text-align: center;
}

.tech-item img {
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
}

/* Blog Search Bar */
.search-bar {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

/* CV Button */
.cv-button {
    display: inline-block;
    padding: 12px 20px;
    background: #FF5F3A;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
}

.dark-mode .cv-button {
    background: #23C7B8;
}

/* Horizontal Floating Navigation */
.floating-nav {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 18px;
    padding: 12px 20px;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    z-index: 2000;
}

.floating-nav a {
    text-decoration: none;
    color: #1A1A1A;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 6px;
    transition: background 0.3s, color 0.3s;
}

.floating-nav a:hover {
    background: #FF5F3A;
    color: white;
}

.dark-mode .floating-nav {
    background: rgba(20,20,20,0.85);
}

.dark-mode .floating-nav a {
    color: #EEE;
}

.dark-mode .floating-nav a:hover {
    background: #23C7B8;
    color: #000;
}

/* Add top padding so content doesn't hide behind nav */
body {
    padding-top: 80px;
}

.tech-icon {
    font-size: 48px;
    color: #FF5F3A;
}


/* Profile Picture */
.profile-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.profile-pic {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FF5F3A, #23C7B8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: white;
    animation: floatPic 4s infinite ease-in-out;
    background-size: cover;
    background-position: center;
}

/* Floating animation */
@keyframes floatPic {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
}

/* Hover Bio Card */
.bio-card {
    width: 100%;
    max-width: 500px;
    height: 180px;
    margin: 20px auto;
    perspective: 1000px;
}

.bio-card > div {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.bio-front {
    background: #FF5F3A;
    color: white;
    font-weight: 700;
}

.bio-back {
    background: #23C7B8;
    color: #000;
    transform: rotateY(180deg);
}

.bio-card:hover .bio-front {
    transform: rotateY(180deg);
}

.bio-card:hover .bio-back {
    transform: rotateY(360deg);
}

/* Typing Animation
.typing-text {
    font-size: 1.6rem;
    font-weight: 600;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #FF5F3A;
    animation: typing 4s steps(40) infinite, blink 0.7s infinite;
}

@keyframes typing {
    0% { width: 0 }
    50% { width: 100% }
    100% { width: 0 }
}

@keyframes blink {
    0%, 100% { border-color: transparent }
    50% { border-color: #FF5F3A }
}


/* Scroll Fade-In *//*
.fade-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-section.visible {
    opacity: 1;
    transform: translateY(0);
} */

/* Typing Animation (Centered + Slower) *//*
.typing-text {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 auto;
    width: fit-content;          /* keeps text centered *//*
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #FF5F3A;
    animation: typing 6s steps(40) infinite, blink 0.8s infinite;
    text-align: center;
}

/* Slower typing *//*
@keyframes typing {
    0% { width: 0 }
    50% { width: 100% }
    100% { width: 0 }
}

@keyframes blink {
    0%, 100% { border-color: transparent }
    50% { border-color: #FF5F3A }
}

/* Fade-in before typing starts *//*
.typing-text {
    opacity: 0;
    animation: fadeIn 1.2s forwards;
    animation-delay: 0.5s;
}

/* Typing Animation (Centered + Slower + Gradient Cursor) */
.typing-text {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 auto;
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid transparent;
    background-image: linear-gradient(90deg, #FF5F3A, #23C7B8);
    background-clip: text;
    color: transparent;
    animation: fadeIn 1.2s forwards, typing 6s steps(40) infinite, cursorBlink 0.8s infinite;
    animation-delay: 0.5s, 1.2s, 1.2s;
}

/* Cursor blink with gradient */
@keyframes cursorBlink {
    0%, 100% { border-color: transparent; }
    50% { border-color: #FF5F3A; }
}

/* Slower typing, stops at end */
@keyframes typing {
    0% { width: 0 }
    50% { width: 100% }
    100% { width: 100% }
}

/* Fade-in */
/* @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
} */

/* Sound toggle styling */
/* .sound-toggle {
    margin-top: 10px;
    font-size: 0.9rem;
    opacity: 0.7;
} */
-----------------------------script.js--------------------------------------------------------------
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

setInterval(updateTyping, 4000);
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

--------------------------------------------------------------------------------------------------------------------------