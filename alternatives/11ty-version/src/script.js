// Add interactive JavaScript for 11ty version
document.addEventListener('DOMContentLoaded', () => {
  // Add staggered animations to cards
  const cards = document.querySelectorAll('.project-card, .link-card, .studio-item');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Add hover sound effect simulation
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform += ' scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = card.style.transform.replace(' scale(1.02)', '');
    });
  });

  // Add parallax effect to hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      hero.style.transform = `translateY(${parallax}px)`;
    });
  }

  // Add typing effect to subtitle
  const subtitle = document.querySelector('.hero-subtitle');
  if (subtitle) {
    const text = subtitle.textContent || '';
    subtitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    setTimeout(typeWriter, 1000);
  }

  // Add click animations with ripple effect
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      const rect = card.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;

      card.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});