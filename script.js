document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.reveal, .reveal-img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));

  // Reveal hero immediately on load rather than waiting for scroll
  requestAnimationFrame(() => {
    document.querySelectorAll('.hero.reveal, .hero-stack.reveal-img').forEach(el => {
      el.classList.add('in-view');
    });
  });
});
