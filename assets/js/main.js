// Rangeway - Main JavaScript

// Automatic Theme Detection (follows system preference)
const html = document.documentElement;
const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
}

// Initialize theme based on system preference
applyTheme(prefersDarkQuery.matches ? 'dark' : 'light');

// Listen for system theme changes (e.g., macOS auto dark mode at sunset)
prefersDarkQuery.addEventListener('change', (e) => {
  applyTheme(e.matches ? 'dark' : 'light');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMobileMenu() {
  navMenu.classList.add('active');
  menuToggle.classList.add('active');
  mobileMenuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

function closeMobileMenu() {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('active');
  mobileMenuOverlay.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Open menu with hamburger button
if (menuToggle) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

// Close menu with X button
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMobileMenu();
  });
}

// Close menu when clicking overlay
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', () => {
    closeMobileMenu();
  });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Smooth scroll for anchor links (only for same-page anchors)
document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Check if this is a same-page anchor link
    // Skip if it's a link to another page (contains path before #)
    if (href.startsWith('#')) {
      // Pure anchor link like #section
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else if (href.includes('#')) {
      // Link like /page#section or /#section
      const hashIndex = href.indexOf('#');
      const path = href.substring(0, hashIndex);
      const hash = href.substring(hashIndex);

      // Check if we're on the same page
      const currentPath = window.location.pathname;
      const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
      const linkToHome = path === '/' || path === '' || path === '/index.html';

      if ((isHomePage && linkToHome) || path === currentPath) {
        // Same page - smooth scroll
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
      // Otherwise, let the browser handle navigation to the other page
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections for animations
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .feature-grid, .stat-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
