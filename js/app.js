window.addEventListener('scroll', function(){
  const fixedHeader = document.querySelector('.fixed-header');

  if (window.scrollY > 230) {
    fixedHeader.classList.add('fixed');
  } else {
    fixedHeader.classList.remove('fixed');
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const sentences = document.querySelectorAll('.sentence');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {threshold: 0.5 });

  sentences.forEach(sentence => observer.observe(sentence));
});
