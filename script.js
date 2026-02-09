// Dark mode toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Project status badges
const projects = document.querySelectorAll(".project[data-status]");
projects.forEach(project => {
    const status = project.getAttribute("data-status");
    const badge = project.querySelector(".status");
    if (status === "completed") {
        badge.textContent = "Completed";
        badge.style.backgroundColor = "#bbf7d0";
    }
    if (status === "in-progress") {
        badge.textContent = "In Progress";
        badge.style.backgroundColor = "#fde68a";
    }
});

// Smooth scrolling is handled by CSS scroll-behavior
