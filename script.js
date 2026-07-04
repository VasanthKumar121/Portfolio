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

  // Interactive hero card stack: spreads on hover, drifts with cursor position
  const stack = document.getElementById('hero-stack');
  if (stack && !prefersReducedMotion) {
    const cards = stack.querySelectorAll('.stack-card');

    stack.addEventListener('mouseenter', () => stack.classList.add('spread'));
    stack.addEventListener('mouseleave', () => {
      stack.classList.remove('spread');
      cards.forEach(card => { card.style.setProperty('--mx', '0px'); card.style.setProperty('--my', '0px'); });
    });
    stack.addEventListener('mousemove', (e) => {
      const rect = stack.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      cards.forEach(card => {
        const depth = parseFloat(card.dataset.depth) || 0.7;
        card.style.setProperty('--mx', (dx * depth * 0.08) + 'px');
        card.style.setProperty('--my', (dy * depth * 0.08) + 'px');
      });
    });
  }
});
