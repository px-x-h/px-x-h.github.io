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
  const valentin = document.querySelectorAll('.valentin');


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
  valentin.forEach(valent => observer.observe(valent));
});

document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector(".amount-select");
  const button = document.querySelector(".show-button");
  const container = document.querySelector(".flowers");

  for (let i = 3; i <= 201; i+= 2) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }

  button.addEventListener("click", function () {
    const count = parseInt(select.value);
    if (isNaN(count)) return;

    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      let flower = document.createElement("img");
      flower.src = "../img/flowers/Pink.svg";
      flower.classList.add("pink-flower");
      container.appendChild(flower);

      setTimeout(() => {
        flower.classList.add("animate");
      }, i * 75)

      container.scrollIntoView({behavior: "smooth"});
    }

    const footer = document.querySelector('.footer');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {threshold: 0.5 });

    observer.observe(footer);
  });
});
