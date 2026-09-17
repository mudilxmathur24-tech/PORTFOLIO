import { portfolioData } from './data/portfolioData.js';
import { icons, getIcon } from './utils/icons.js';
import { initDataCanvas } from './canvas/dataNetwork.js';

document.addEventListener('DOMContentLoaded', () => {
  initDataCanvas();
  injectIcons();

  renderQuickStrip();
  renderAbout();
  renderSkills();
  renderLearningJourney();
  renderProjects();
  renderCertifications();
  renderBeyondClassroom();

  setupNavigation();
  setupMobileMenu();
  setupContactForm();
  setupResumeModal();
  setupScrollReveal();
  updateFooterYear();
});

function injectIcons() {
  const setHtml = (id, iconSvg) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = iconSvg;
  };

  setHtml('nav-github-icon', icons.github);
  setHtml('nav-linkedin-icon', icons.linkedin);

  setHtml('hero-badge-icon', icons.code);
  setHtml('hero-arrow-icon', icons.arrowRight);
  setHtml('hero-gh-icon', icons.github);
  setHtml('hero-in-icon', icons.linkedin);
  setHtml('hero-mail-icon', icons.email);

  setHtml('cta-gh-icon', icons.external);
  setHtml('cta-in-icon', icons.external);

  setHtml('copy-email-icon', icons.copy);
  setHtml('ft-gh-icon', icons.github);
  setHtml('ft-in-icon', icons.linkedin);
  setHtml('ft-mail-icon', icons.email);
  setHtml('modal-close-icon', icons.close);
}

function renderQuickStrip() {
  const container = document.getElementById('quick-strip-container');
  if (!container) return;

  container.innerHTML = portfolioData.quickStrip.map(card => `
    <div class="quick-card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="quick-card-tag">${card.tag}</span>
        <span style="color: var(--accent-blue-light); display: flex;">${getIcon(card.icon)}</span>
      </div>
      <div class="quick-card-title">${card.title}</div>
      <div class="quick-card-subtitle">${card.subtitle}</div>
    </div>
  `).join('');
}

function renderAbout() {
  const textContainer = document.getElementById('about-text-container');
  const stepsContainer = document.getElementById('transition-steps-container');

  if (textContainer) {
    textContainer.innerHTML = portfolioData.about.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (stepsContainer) {
    stepsContainer.innerHTML = portfolioData.about.transitionSteps.map(s => `
      <div class="transition-step-item">
        <span class="step-number">${s.step}</span>
        <span class="step-label">${s.label}</span>
        <span class="step-desc">${s.desc}</span>
      </div>
    `).join('');
  }
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skill-block reveal">
      <div class="skill-block-header">
        <span class="skill-block-icon">${getIcon(cat.icon)}</span>
        <h3 class="skill-block-title">${cat.name}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.skills.map(skill => `
          <div class="skill-item-card">
            <div class="skill-item-top">
              <span class="skill-name">${skill.name}</span>
              <span class="status-badge ${skill.statusClass}">${skill.status}</span>
            </div>
            <p class="skill-desc">${skill.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderLearningJourney() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = portfolioData.learningJourney.map(item => `
    <div class="timeline-step reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-step-card">
        <div class="timeline-header">
          <span class="timeline-title">${item.title}</span>
          <span class="timeline-phase">${item.status}</span>
        </div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card reveal">
      <div class="project-card-top">
        <div class="project-tag-row">
          <span class="project-status ${project.statusClass}">${project.status}</span>
          <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">LAB CARD</span>
        </div>
        <h3 class="project-card-title">${project.title}</h3>
        
        <div class="project-field-label">Problem Statement</div>
        <p class="project-field-text">${project.problem}</p>

        <div class="project-field-label">Technical Approach</div>
        <p class="project-field-text">${project.approach}</p>

        <div class="project-field-label">Key Learning</div>
        <p class="project-field-text">${project.keyLearning}</p>
      </div>

      <div>
        <div class="tech-tag-group">
          ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm" style="width: 100%;">
            View Repo
            ${icons.external}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certs-container');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cert-card reveal">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="cert-org">${cert.organization}</span>
        <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">${cert.date}</span>
      </div>
      <h3 class="cert-title">${cert.title}</h3>
      <p class="cert-desc">${cert.desc}</p>
      <div style="margin-top: auto; padding-top: 0.75rem;">
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm" style="width: 100%;">
          Verify Credential
          ${icons.external}
        </a>
      </div>
    </div>
  `).join('');
}

function renderBeyondClassroom() {
  const container = document.getElementById('hackathon-container');
  if (!container) return;

  container.innerHTML = portfolioData.beyondClassroom.map(item => `
    <div class="hackathon-card reveal">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span class="mono" style="font-size: 0.78rem; font-weight: 700; color: var(--accent-blue);">${item.role.toUpperCase()} • ${item.year}</span>
        <span class="status-badge practicing">Verified Participation</span>
      </div>
      <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-heading);">${item.event}</h3>
      <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6;">${item.desc}</p>
    </div>
  `).join('');
}

function setupNavigation() {
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const closeMenu = () => {
    mobileNav?.classList.remove('open');
    overlay?.classList.remove('open');
    toggleBtn?.setAttribute('aria-expanded', 'false');
  };

  toggleBtn?.addEventListener('click', () => {
    const isOpen = mobileNav?.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      mobileNav?.classList.add('open');
      overlay?.classList.add('open');
      toggleBtn?.setAttribute('aria-expanded', 'true');
    }
  });

  overlay?.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('btn-copy-email');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const message = document.getElementById('contact-message')?.value;

    const mailtoUrl = `mailto:mudilmathur2021@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;

    showToast('Opening mail client...');
    form.reset();
  });

  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText('mudilmathur2021@gmail.com').then(() => {
      showToast('Email copied to clipboard!');
    }).catch(() => {
      showToast('mudilmathur2021@gmail.com');
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const textEl = document.getElementById('toast-text');
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function setupResumeModal() {
  const openNavBtn = document.getElementById('btn-open-resume');
  const openMobileBtn = document.getElementById('btn-mobile-resume');
  const closeBtn = document.getElementById('btn-close-resume');
  const dismissBtn = document.getElementById('btn-modal-dismiss');
  const modal = document.getElementById('modal-resume');

  const openModal = () => {
    modal?.classList.add('open');
    modal?.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
  };

  openNavBtn?.addEventListener('click', openModal);
  openMobileBtn?.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.remove('open');
    document.getElementById('mobile-overlay')?.classList.remove('open');
    openModal();
  });

  closeBtn?.addEventListener('click', closeModal);
  dismissBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

function updateFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}
