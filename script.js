document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    document.querySelectorAll('.hero.reveal').forEach(el => {
      el.classList.add('in-view');
    });
  });

  // Hero image slider
  const slides = document.querySelectorAll('#hero-slider .slide');
  const dots = document.querySelectorAll('#hero-slider .dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.slide)));
  });

  if (slides.length > 0 && !prefersReducedMotion) {
    setInterval(() => {
      showSlide((currentSlide + 1) % slides.length);
    }, 4500);
  }
});
