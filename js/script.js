document.addEventListener('DOMContentLoaded', () => {
    const alertBtn = document.getElementById('alertBtn');
    const darkModeBtn = document.getElementById('darkModeToggle');
    const form = document.getElementById('contactForm');
  
    if (alertBtn) {
      alertBtn.addEventListener('click', () => {
        alert('Thanks for clicking!');
      });
    }
  
    if (darkModeBtn) {
      darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      });
    }
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        form.reset();
      });
    }
  });