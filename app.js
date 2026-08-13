/**
 * SUDHA PUJARI — WORLD-CLASS SAAS REDESIGN (APPLE / STRIPE / LINEAR AESTHETIC)
 * Product Security Engineer | Cloud Defender | Mentor
 * Core interactive engine: Particle canvas, Theme switcher, Scroll spy, Number counters, and Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initParticleCanvas();
  initHeaderScrollSpy();
  initMobileNavigation();
  initScrollAnimations();
  initNumberCounters();
  initModalSystem();
});

/* ==========================================================================
   1. THEME MANAGER (DARK / LIGHT MODE WITH STORAGE & ICON TOGGLE)
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.querySelector('[data-theme-toggle]');
  const htmlEl = document.documentElement;
  const STORAGE_KEY = 'sudha-pujari-theme';

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const defaultTheme = savedTheme || (prefersLight ? 'light' : 'dark');

  setTheme(defaultTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    if (themeBtn) {
      themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      themeBtn.innerHTML = theme === 'dark'
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }

    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }
}

/* ==========================================================================
   2. 60FPS INTERACTIVE CANVAS PARTICLE NETWORK (#particles-canvas)
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';

  const mouse = {
    x: null,
    y: null,
    radius: 140
  };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('themeChanged', (e) => {
    isDarkMode = e.detail.theme === 'dark';
  });

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
    initParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = forceDirectionX * force * 3;
          let directionY = forceDirectionY * force * 3;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = isDarkMode
        ? 'rgba(0, 212, 255, 0.7)'
        : 'rgba(2, 132, 199, 0.7)';
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 75);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connect() {
    const maxDist = 110;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDist) {
          let opacity = 1 - distance / maxDist;
          ctx.strokeStyle = isDarkMode
            ? `rgba(0, 212, 255, ${opacity * 0.2})`
            : `rgba(2, 132, 199, ${opacity * 0.15})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
}

/* ==========================================================================
   3. STICKY HEADER & SCROLL SPY
   ========================================================================== */
function initHeaderScrollSpy() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
      header?.classList.add('site-header--scrolled');
    } else {
      header?.classList.remove('site-header--scrolled');
    }
  }, { passive: true });

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href').slice(1);
          if (href === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   4. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navContainer = document.querySelector('.nav-container');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!toggleBtn || !navContainer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = navContainer.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navContainer.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   5. SCROLL ANIMATIONS (.fade-in)
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   6. ANIMATED NUMBER COUNTERS ([data-count])
   ========================================================================== */
function initNumberCounters() {
  const counterElements = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach((el) => observer.observe(el));

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }
}

/* ==========================================================================
   7. INTERACTIVE MODALS FOR HIGHLIGHTS & CONTRIBUTIONS
   ========================================================================== */
function initModalSystem() {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  if (!modalOverlay || !modalContent) return;

  const MODAL_TEMPLATES = {
    awards: `
      <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--color-text);">🏅 Awards & Recognitions</h2>
      <div class="bento-grid" style="gap: 1.5rem;">
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Excellence in Security Leadership</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Recognized for outstanding leadership in product security at Salesforce (2023)</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Top Security Researcher</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Industry recognition for innovative security research and threat modeling (2022)</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Mentor of the Year</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">ADPList recognition for exceptional mentorship in cybersecurity (2023)</p>
        </div>
      </div>
    `,
    speaking: `
      <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--color-text);">🎙️ Speaking Engagements</h2>
      <div class="bento-grid" style="gap: 1.5rem;">
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">RSA Conference 2023</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Keynote: "Zero Trust Architecture in Modern Cloud Environments"</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Black Hat USA 2022</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Workshop: "Advanced Threat Modeling for Product Security"</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">DEF CON 30</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Panel: "The Future of Application Security in DevSecOps"</p>
        </div>
      </div>
    `,
    judging: `
      <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--color-text);">👩‍⚖️ Hackathon Judging</h2>
      <div class="bento-grid" style="gap: 1.5rem;">
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">CyberSec Hackathon 2023</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Lead judge for innovative security solutions and threat detection systems</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">SecureCode Challenge</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Evaluating secure coding practices and vulnerability assessment tools</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Cloud Security Summit</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Mentoring teams on cloud security architecture and best practices</p>
        </div>
      </div>
    `,
    research: `
      <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--color-text);">📄 Research Papers</h2>
      <div class="bento-grid" style="gap: 1.5rem;">
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Advanced Threat Detection in Cloud Environments</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Published in IEEE Security & Privacy, 2023. Research on machine learning approaches for detecting advanced persistent threats in cloud infrastructure.</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Security Frameworks for Microservices Architecture</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">ACM Computing Surveys, 2022. Comprehensive analysis of security patterns and frameworks for distributed systems.</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Automated Vulnerability Assessment in CI/CD Pipelines</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Journal of Cybersecurity, 2023. Novel approaches to integrating security testing in continuous deployment workflows.</p>
        </div>
      </div>
    `,
    articles: `
      <h2 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--color-text);">✍️ Blog & Articles</h2>
      <div class="bento-grid" style="gap: 1.5rem;">
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Zero Trust in Modern Enterprises</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">A comprehensive guide to implementing Zero Trust architecture in cloud-native environments.</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Threat Modeling for DevSecOps</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Best practices for integrating threat modeling into continuous integration pipelines.</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">Container Security Hardening</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Advanced techniques for securing containerized applications and Kubernetes clusters.</p>
        </div>
        <div class="skill-card">
          <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">API Security Best Practices</h3>
          <p style="font-size: 0.95rem; color: var(--color-text-muted);">Essential security measures for protecting APIs in microservices architectures.</p>
        </div>
      </div>
    `
  };

  window.openDetailModal = function(id) {
    const template = MODAL_TEMPLATES[id];
    if (!template) return;
    modalContent.innerHTML = `
      <button class="modal-close" onclick="closeDetailModal()">&times;</button>
      ${template}
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeDetailModal = function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeDetailModal();
    }
  });
}
