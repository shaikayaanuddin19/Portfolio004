// Smooth fade-in animation when scrolling
const elements = document.querySelectorAll('.fade-in, .fade-in-delay');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));
