window.addEventListener('scroll', function(){
  const fixedHeader = document.querySelector('.fixed-header');

  if (window.scrollY > 230) {
    fixedHeader.classList.add('fixed');
  } else {
    fixedHeader.classList.remove('fixed');
  }
})
