const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    if (window.scrollY + window.innerHeight > sec.offsetTop + 100) {
      sec.classList.add('visible');
    }
  });
});