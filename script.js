// script for slider
const slider = document.querySelector(".my-projects-list");
let index = 0;
const total = slider.children.length;

setInterval(() => {
    index = (index + 1) % total;
    slider.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

const indicatorsContainer = document.querySelector(".project-indicators");

for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    dot.classList.add("indicator");
    if (i === 0) dot.classList.add("active-indicator");
    indicatorsContainer.appendChild(dot);
}

const indicators = document.querySelectorAll(".indicator");

setInterval(() => {
    indicators.forEach(dot => dot.classList.remove("active-indicator"));
    indicators[index].classList.add("active-indicator");
}, 3000);

// boot screen
window.addEventListener("load", () => {
    setTimeout(() => {
        const boot = document.getElementById("boot-screen");
        boot.style.transition = "opacity 0.8s ease";
        boot.style.opacity = "0";
        setTimeout(() => boot.remove(), 800);
    }, 1300);
});


// transition
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));