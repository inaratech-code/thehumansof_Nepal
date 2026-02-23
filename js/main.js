/**
 * The Humans of Nepal — Main JS
 * Sticky header behavior, hamburger menu, smooth scroll, optional dark mode, lazy loading
 */

(function () {
  'use strict';

  // ----- Hamburger menu (tablet/mobile) -----
  var hamburger = document.querySelector('.hamburger');
  var mainNav = document.getElementById('main-nav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      mainNav.classList.toggle('is-open');
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close menu when clicking a nav link (for single-page feel on multi-page site)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        hamburger.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // ----- Smooth scroll for in-page anchors -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  // ----- Optional: Dark mode toggle -----
  var darkModeKey = 'thn-dark-mode';
  var darkToggle = document.querySelector('[data-dark-toggle]');
  function updateDarkToggleIcon() {
    if (!darkToggle) return;
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    darkToggle.setAttribute('aria-pressed', isDark);
    darkToggle.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19'; // sun / moon
    darkToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  if (darkToggle) {
    updateDarkToggleIcon();
    darkToggle.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      try {
        localStorage.setItem(darkModeKey, isDark ? 'light' : 'dark');
      } catch (e) {}
      updateDarkToggleIcon();
    });
  }
  // Restore saved theme on load
  try {
    var saved = localStorage.getItem(darkModeKey);
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (darkToggle) updateDarkToggleIcon();
    }
  } catch (e) {}

  // ----- Newsletter forms (prevent submit; show message when no backend) -----
  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        var btn = form.querySelector('button[type="submit"]');
        if (btn) {
          var orig = btn.textContent;
          btn.textContent = 'Subscribed!';
          btn.disabled = true;
          setTimeout(function () {
            btn.textContent = orig;
            btn.disabled = false;
          }, 3000);
        }
      }
    });
  });

  // ----- Lazy loading for images (native loading="lazy" is used in HTML; this adds optional intersection observer for older browsers) -----
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy load supported
  } else {
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            io.unobserve(img);
          }
        });
      });
      lazyImages.forEach(function (img) {
        io.observe(img);
      });
    }
  }
})();
