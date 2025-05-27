import './components/navbar.js';
import './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('app-navbar');
  const footer = document.createElement('app-footer');

  document.body.prepend(header);
  document.body.appendChild(footer);
});
