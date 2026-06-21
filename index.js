// Page Navigation
  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('active', 'page-enter');
      setTimeout(() => target.classList.remove('page-enter'), 500);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Mobile Menu
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
  }

  // Cookie Banner
  function closeCookie() {
    document.getElementById('cookieBanner').classList.add('hidden');
  }

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10,10,10,0.99)';
    } else {
      nav.style.background = 'linear-gradient(to bottom, rgba(10,10,10,0.98), rgba(10,10,10,0.85))';
    }
  });

  // Form submission handler
  function handleSubmit(btn) {
    btn.textContent = 'Message Sent ✦';
    btn.style.background = 'linear-gradient(135deg, #2D5A1B, #4A8B2A)';
    setTimeout(() => {
      btn.textContent = 'Send Enquiry';
      btn.style.background = '';
    }, 4000);
  }

  // Animate features on scroll (simple)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .room-card, .event-card, .testimonial-card, .promo-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Show initial elements
  setTimeout(() => {
    document.querySelectorAll('.feature-card, .room-card, .event-card, .testimonial-card, .promo-card').forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 80);
    });
  }, 300);
