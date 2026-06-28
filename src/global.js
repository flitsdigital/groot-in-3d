  // Initialize Bold Full Screen Navigation
  document.addEventListener('DOMContentLoaded', function() {
    initLenis();
    initBoldFullScreenNavigation();
  });

function initLenis() {
    // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

}

function initBoldFullScreenNavigation() {

    // Toggle Navigation
    document.querySelectorAll('[data-navigation-toggle="toggle"]').forEach(toggleBtn => {
      toggleBtn.addEventListener('click', () => {
        const navStatusEl = document.querySelector('[data-navigation-status]');
        if (!navStatusEl) return;
        if (navStatusEl.getAttribute('data-navigation-status') === 'not-active') {
          navStatusEl.setAttribute('data-navigation-status', 'active');
          // If you use Lenis you can 'stop' Lenis here: Example Lenis.stop();
        } else {
          navStatusEl.setAttribute('data-navigation-status', 'not-active');
          // If you use Lenis you can 'start' Lenis here: Example Lenis.start();
        }
      });
    });
  
    // Close Navigation
    document.querySelectorAll('[data-navigation-toggle="close"]').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        const navStatusEl = document.querySelector('[data-navigation-status]');
        if (!navStatusEl) return;
        navStatusEl.setAttribute('data-navigation-status', 'not-active');
        // If you use Lenis you can 'start' Lenis here: Example Lenis.start();
      });
    });
  
    // Key ESC - Close Navigation
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        const navStatusEl = document.querySelector('[data-navigation-status]');
        if (!navStatusEl) return;
        if (navStatusEl.getAttribute('data-navigation-status') === 'active') {
          navStatusEl.setAttribute('data-navigation-status', 'not-active');
         // If you use Lenis you can 'start' Lenis here: Example Lenis.start();
        }
      }
    });
  }