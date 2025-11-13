document.addEventListener("DOMContentLoaded", function () {
  // Determine if we're in a subdirectory and handle both development and production paths
  const path = window.location.pathname;
  const isInSubdirectory =
    path.includes("/pages/") || path.includes("\\pages\\");
  const componentPath = isInSubdirectory ? "../components/" : "./components/";

  // Load header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch(componentPath + "header.html")
      .then((response) => response.text())
      .then((data) => {
        headerPlaceholder.innerHTML = data;

        // Initialize mobile menu after header is loaded
        initMobileMenu();

        // Fix navigation links
        fixNavigationLinks();

        // Fix logo link when in subdirectory
        fixLogoLink();

        // Highlight active nav link
        highlightCurrentPage();

        // Initialize theme toggle
        initThemeToggle();
      })
      .catch((error) => console.error("Error loading header:", error));
  } // Load footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch(componentPath + "footer.html")
      .then((response) => response.text())
      .then((data) => {
        footerPlaceholder.innerHTML = data;

        // Set copyright year
        const copyrightYearElement = document.getElementById("copyright-year");
        if (copyrightYearElement) {
          copyrightYearElement.textContent = new Date().getFullYear();
        }

        // Initialize back to top button
        initBackToTopButton();
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
});

// Function to handle mobile menu toggle
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });
  }
}

// Function to fix navigation links when in subdirectory
function fixNavigationLinks() {
  const path = window.location.pathname;
  const isInSubdirectory =
    path.includes("/pages/") || path.includes("\\pages\\");

  if (isInSubdirectory) {
    // Use the correct selector for navigation links (.nav-menu instead of .nav-links)
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      // Fix links that point to pages directory
      if (href.startsWith("pages/")) {
        link.setAttribute("href", "../" + href);
      } else if (href === "index.html") {
        link.setAttribute("href", "../index.html");
      }
    });
  }
}

// Function to fix the logo link when in subdirectory
function fixLogoLink() {
  const path = window.location.pathname;
  const isInSubdirectory =
    path.includes("/pages/") || path.includes("\\pages\\");

  if (isInSubdirectory) {
    const logoLink = document.getElementById("logo-link");
    if (logoLink && logoLink.getAttribute("href") === "index.html") {
      logoLink.setAttribute("href", "../index.html");
    }
  }
}

// Function to highlight current page in navigation
function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    const pageName = currentPath.split("/").pop();

    // Check if current page matches the link's href
    if (
      pageName === linkPath.split("/").pop() ||
      (currentPath.endsWith("/") && linkPath === "index.html") ||
      (currentPath.endsWith("/index.html") && linkPath === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Function to initialize back to top button
function initBackToTopButton() {
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    // Show button when user scrolls down 300px
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = "1";
      } else {
        backToTopBtn.style.opacity = "0";
      }
    });

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  if (!themeToggle) return;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  themeToggle.checked = savedTheme === "dark";

  // Theme toggle event listener
  themeToggle.addEventListener("change", function () {
    const newTheme = this.checked ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Smooth transition
    document.body.style.transition =
      "background-color 0.3s ease, color 0.3s ease";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 300);
  });

  // Apply theme to body immediately for smooth loading
  document.body.style.transition =
    "background-color 0.3s ease, color 0.3s ease";
}

// Initialize theme on page load (before header loads)
function initThemeEarly() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Call early theme initialization
initThemeEarly();
