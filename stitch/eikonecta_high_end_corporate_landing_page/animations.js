/* ============================================ */
/* EIKONECTA — GSAP Animation Engine            */
/* ScrollTrigger · Async Entry · Hover FX       */
/* ============================================ */

// Wait for DOM + GSAP to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // ==========================================
  // 1. PAGE LOAD ANIMATIONS (Async Entry)
  // ==========================================
  const heroTimeline = gsap.timeline({ delay: 0.3 });

  // Navbar entrance
  heroTimeline.from('.navbar', {
    y: -80,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Hero badge
  heroTimeline.from('.hero-badge', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.3');

  // Hero headline — dramatic entrance
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTimeline.from(heroTitle, {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.3');
  }

  // Hero paragraph
  heroTimeline.from('.hero p', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.3');

  // Hero CTAs
  heroTimeline.from('.hero-ctas .btn', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.2');

  // Hero stats
  heroTimeline.from('.hero-stat', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.2');

  // Hero decorative circles
  heroTimeline.from('.hero-circle', {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out'
  }, '-=0.6');

  // Page header (for subpages)
  gsap.from('.page-header .label', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: 'power2.out'
  });

  gsap.from('.page-header h1', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.7,
    ease: 'power3.out'
  });

  gsap.from('.page-header p', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.9,
    ease: 'power2.out'
  });

  // Service hero (for service subpages)
  gsap.from('.service-hero .label', {
    x: -40,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: 'power2.out'
  });

  gsap.from('.service-hero h1', {
    y: 50,
    opacity: 0,
    duration: 0.9,
    delay: 0.7,
    ease: 'power3.out'
  });

  gsap.from('.service-hero p', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.9,
    ease: 'power2.out'
  });

  // ==========================================
  // 2. SCROLL-TRIGGERED ANIMATIONS
  // ==========================================

  // Generic reveals — fade-in from bottom
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Slide from left
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out'
    });
  });

  // Slide from right
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out'
    });
  });

  // Scale-in
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Rotate-in
  gsap.utils.toArray('.reveal-rotate').forEach(el => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      rotation: 0,
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Staggered card reveals
  document.querySelectorAll('.service-grid, .grid-3, .grid-4').forEach(grid => {
    const children = grid.children;
    gsap.from(children, {
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });
  });

  // Stats counter animation
  document.querySelectorAll('.stat-item h3, .hero-stat h4').forEach(stat => {
    const text = stat.textContent;
    const number = parseInt(text);
    if (isNaN(number)) return;

    const suffix = text.replace(/[\d]+/, '');

    ScrollTrigger.create({
      trigger: stat,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            stat.textContent = Math.ceil(parseFloat(stat.textContent)) + suffix;
          }
        });
      }
    });
  });

  // Section titles — slide in
  gsap.utils.toArray('section h2, .section h2, .section-alt h2, .section-dark h2').forEach(title => {
    if (!title.closest('.hero') && !title.closest('.cta-section') && !title.closest('.page-header') && !title.closest('.service-hero')) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  });

  // Service features list items
  gsap.utils.toArray('.service-features li').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      x: -30,
      opacity: 0,
      duration: 0.5,
      delay: i * 0.08,
      ease: 'power2.out'
    });
  });

  // Pain items
  gsap.utils.toArray('.pain-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      x: -40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });

  // CTA section parallax
  const ctaSection = document.querySelector('.cta-section');
  if (ctaSection) {
    gsap.from('.cta-section h2', {
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.cta-section p', {
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.cta-section .btn', {
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 20,
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      ease: 'back.out(1.7)'
    });

    // Floating decorations
    gsap.to('.cta-decoration.d1', {
      y: -30, x: 20,
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.cta-decoration.d2', {
      y: 30, x: -20,
      scrollTrigger: {
        trigger: ctaSection,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  // Testimonial subtle float
  gsap.utils.toArray('.testimonial').forEach(t => {
    gsap.from(t, {
      scrollTrigger: {
        trigger: t,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // Differentiator cards
  gsap.utils.toArray('.diff-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'power2.out'
    });
  });

  // ==========================================
  // 3. NAVBAR SCROLL BEHAVIOR
  // ==========================================
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 100,
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 100) {
          navbar.classList.add('scrolled');
        }
        if (self.scroll() <= 100) {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }

  // ==========================================
  // 4. MOBILE NAV TOGGLE
  // ==========================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.navbar-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // ==========================================
  // 5. SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 80 },
          duration: 1,
          ease: 'power3.inOut'
        });
        // Close mobile nav
        navLinks?.classList.remove('open');
      }
    });
  });

  // ==========================================
  // 6. FORM INTERACTIONS
  // ==========================================
  document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
    });
    input.addEventListener('blur', () => {
      gsap.to(input, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });

  // ==========================================
  // 7. LOGO IMAGE REVEAL ON LOAD
  // ==========================================
  const logoImg = document.querySelector('.navbar-logo img');
  if (logoImg) {
    gsap.from(logoImg, {
      x: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out'
    });
  }

  // ==========================================
  // 8. PARALLAX ON HERO ELEMENTS
  // ==========================================
  gsap.utils.toArray('.hero-circle').forEach((circle, i) => {
    gsap.to(circle, {
      y: (i + 1) * -40,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
});
