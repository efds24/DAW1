const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('loaded');
      observer.unobserve(entry.target);
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});
