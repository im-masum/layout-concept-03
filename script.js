// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close mobile menu after clicking a link
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("toggle");
    }
  });
});

// Animate Sections on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ "
    : "🌙 ";
});

// Login/Logout Functionality
const loginBtn = document.querySelector("#login-btn");
const loginModal = document.querySelector("#login-modal");
const closeModal = document.querySelector("#close-modal");
const loginForm = document.querySelector("#login-form");

let isLoggedIn = false;

loginBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    // Logout
    isLoggedIn = false;
    loginBtn.textContent = "Login";
    alert("You have logged out.");
  } else {
    // Show login modal
    loginModal.style.display = "flex";
  }
});

closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Simple client-side validation (for demo purposes)
  if (username && password) {
    isLoggedIn = true;
    loginBtn.textContent = "Logout";
    loginModal.style.display = "none";
    loginForm.reset();
    alert("Logged in successfully!");
  } else {
    alert("Please fill in all fields.");
  }
});
