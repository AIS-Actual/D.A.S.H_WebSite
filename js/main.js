// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission with feedback
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! We will get back to you shortly.');
  form.reset();
});

// Reveal HUD panels on scroll
const panels = document.querySelectorAll('.hud-panel');
const revealPanels = () => {
  const triggerBottom = window.innerHeight * 0.85;
  panels.forEach(panel => {
    const panelTop = panel.getBoundingClientRect().top;
    if(panelTop < triggerBottom) {
      panel.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealPanels);
window.addEventListener('load', revealPanels);

