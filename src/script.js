document.addEventListener('DOMContentLoaded', () => {
  // Style pipeline badges section
  const pipesSection = document.querySelector('h2#pipes');
  if (pipesSection && pipesSection.nextElementSibling) {
    pipesSection.parentElement.classList.add('pipes-section');
  }

  // Add smooth scroll behavior for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add subtle hover effects
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'all 0.2s ease';
    });
  });
});