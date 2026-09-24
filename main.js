// Intelligence Designed To Evolve — Core Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. STATS COUNT-UP CONTROLLER
  const stats = [
    { target: 120, decimals: 0, suffix: 'ms' },
    { target: 99.99, decimals: 2, suffix: '%' },
    { target: 24, decimals: 0, suffix: '/7' },
    { target: 2.4, decimals: 1, suffix: 'M' }
  ];

  const statElements = document.querySelectorAll('.stat-count');
  let hasCounted = false;

  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  function startCountUp() {
    if (hasCounted) return;
    hasCounted = true;

    statElements.forEach((el, index) => {
      const config = stats[index];
      if (!config) return;

      const duration = 1500 + index * 80;
      const startOffset = 480 + index * 90;

      setTimeout(() => {
        let startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(progress);
          const currentVal = eased * config.target;

          el.textContent = currentVal.toFixed(config.decimals);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = config.target.toFixed(config.decimals);
          }
        }

        requestAnimationFrame(step);
      }, startOffset);
    });
  }

  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            startCountUp();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(statsContainer);
  }

  // 2. MOBILE MENU CONTROLLER
  const burgerBtn = document.querySelector('.mobile-burger');
  const overlay = document.querySelector('.mobile-overlay');
  const sheet = document.querySelector('.mobile-sheet');
  const sheetLinks = document.querySelectorAll('.sheet-link, .sheet-signin');

  function openMenu() {
    if (!burgerBtn) return;
    burgerBtn.classList.add('open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    if (overlay) overlay.removeAttribute('hidden');
    if (sheet) sheet.removeAttribute('hidden');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!burgerBtn) return;
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.setAttribute('hidden', '');
    if (sheet) sheet.setAttribute('hidden', '');
    document.body.classList.remove('menu-open');
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = burgerBtn.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  sheetLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
});
