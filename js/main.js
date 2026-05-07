/* ======================================
   VOUS RANKEZ VOUS ? — Scripts globaux
   ====================================== */

// Navigation mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Fermer au clic sur un lien
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace(/^\//, '').split('/')[0])) {
      a.classList.add('active');
    }
  });

  // Glossaire search (page d'accueil)
  const searchInput = document.getElementById('glossaire-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase();
      document.querySelectorAll('.glossaire-card').forEach(card => {
        const term = card.querySelector('h4')?.textContent.toLowerCase() || '';
        const def  = card.querySelector('p')?.textContent.toLowerCase() || '';
        card.style.display = (term.includes(q) || def.includes(q)) ? '' : 'none';
      });
    });
  }

  // Glossaire search (page glossaire)
  const pageSearch = document.getElementById('page-glossaire-search');
  if (pageSearch) {
    pageSearch.addEventListener('input', () => {
      const q = pageSearch.value.toLowerCase();
      document.querySelectorAll('.glossaire-page-card').forEach(card => {
        const term = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const def  = card.querySelector('p')?.textContent.toLowerCase() || '';
        card.style.display = (term.includes(q) || def.includes(q)) ? '' : 'none';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form (preventDefault + success message)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Message envoyé !';
      btn.style.background = 'var(--color-success, #10b981)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Envoyer ma demande';
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 4000);
    });
  }
});
