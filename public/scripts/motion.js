/**
 * Inovix Motion System
 * Lenis Smooth Scroll + GSAP ScrollTrigger + AOS (Up & Reverse Animations)
 */
(function () {
  // Load dependencies if not already loaded
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        return resolve();
      }
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function loadCss(href) {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }

  // Load Lenis CSS
  const style = document.createElement('style');
  style.textContent = `
    html.lenis, html.lenis body { height: auto; }
    .lenis.lenis-smooth { scroll-behavior: auto !important; }
    .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
    .lenis.lenis-stopped { overflow: hidden; }
    .lenis.lenis-scrolling iframe { pointer-events: none; }
  `;
  document.head.appendChild(style);
  loadCss('https://unpkg.com/aos@2.3.4/dist/aos.css');

  // Load scripts sequentially
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js'),
    loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js'),
    loadScript('https://unpkg.com/lenis@1.1.18/dist/lenis.min.js'),
    loadScript('https://unpkg.com/aos@2.3.4/dist/aos.js')
  ]).then(() => {
    initMotion();
  }).catch((err) => {
    console.warn('Motion assets failed to load from CDN, fallback active', err);
  });

  function initMotion() {
    // 1. Initialize Lenis Smooth Scroll
    let lenis = null;
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      window.__lenis = lenis;
    }

    // 2. GSAP ScrollTrigger Integration with Up & Reverse Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      if (lenis) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      // Section Headers & Page Titles (Up & Reverse)
      document.querySelectorAll('.section-header, .page-hero').forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 36, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              end: 'bottom 12%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      });

      // Comparison Problem vs Solution Split Reveal (Up & Reverse)
      const compareProblem = document.querySelector('.compare-card.problem-card');
      const compareSolution = document.querySelector('.compare-card.solution-card');
      if (compareProblem && compareSolution) {
        gsap.fromTo(compareProblem,
          { opacity: 0, x: -45, y: 25 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.comparison-grid',
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
        gsap.fromTo(compareSolution,
          { opacity: 0, x: 45, y: 25 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.85,
            delay: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.comparison-grid',
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Milestone Cards (Up & Reverse with Stagger)
      const milestoneCards = document.querySelectorAll('.milestone-card');
      if (milestoneCards.length > 0) {
        gsap.fromTo(milestoneCards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: '.milestones-grid',
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Project Cards (Up & Reverse on Enter/Leave)
      document.querySelectorAll('.project-card').forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 45, filter: 'blur(5px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'bottom 12%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      });

      // Pricing Cards & Tiers (Up & Reverse)
      const pricingTiers = document.querySelectorAll('.pricing-tier, .pricing-card, .plan-card');
      if (pricingTiers.length > 0) {
        gsap.fromTo(pricingTiers,
          { opacity: 0, y: 45, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pricingTiers[0].parentElement || pricingTiers[0],
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // 4-Step Process Cards (Up & Reverse)
      const stepCards = document.querySelectorAll('.step-card, .process-card');
      if (stepCards.length > 0) {
        gsap.fromTo(stepCards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepCards[0].parentElement || stepCards[0],
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Free Tools Cards & Tech Pills (Up & Reverse)
      const toolCards = document.querySelectorAll('.tool-card');
      if (toolCards.length > 0) {
        gsap.fromTo(toolCards,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: toolCards[0].parentElement || toolCards[0],
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Blog Cards Grid (Up & Reverse)
      const blogCards = document.querySelectorAll('.blog-card');
      if (blogCards.length > 0) {
        gsap.fromTo(blogCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: blogCards[0].parentElement || blogCards[0],
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Founder Card (Up & Reverse with Unblur)
      const founderCard = document.querySelector('.founder-card');
      if (founderCard) {
        gsap.fromTo(founderCard,
          { opacity: 0, y: 45, scale: 0.94, filter: 'blur(6px)' },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: founderCard,
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // Contact Consultation Card (Up & Reverse)
      const contactCard = document.querySelector('.contact-card-main, .contact-box');
      if (contactCard) {
        gsap.fromTo(contactCard,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactCard,
              start: 'top 82%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }

      // FAQ Items (Up & Reverse)
      const faqItems = document.querySelectorAll('.faq-item');
      if (faqItems.length > 0) {
        gsap.fromTo(faqItems,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqItems[0].parentElement || faqItems[0],
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      }
    }

    // 3. Initialize AOS with Mirror (Reverse on Scroll Up)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true, // Reverses animation when scrolling up!
        offset: 80,
      });
    }
  }
})();
