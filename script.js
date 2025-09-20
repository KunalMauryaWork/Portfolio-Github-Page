// Animate skill bars on scroll
function animateSkills() {
  const skills = document.querySelectorAll('.skill-bar');
  skills.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    bar.style.width = value + '%';
  });
}

// Run animation when skills section is in view
function onScroll() {
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    animateSkills();
    window.removeEventListener('scroll', onScroll);
  }
}
window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);

// Simple contact form handler (demo only)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('formStatus').textContent = "Thank you! I'll get back to you soon.";
      form.reset();
    });
  }
});
