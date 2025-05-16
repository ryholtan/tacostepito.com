document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});

document.getElementById('year').textContent = new Date().getFullYear();
