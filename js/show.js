document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  showSlides(slideIndex);

  function showSlides(index) {
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
  }

  prevButton.addEventListener("click", function () {
    showSlides(--slideIndex);
  });

  nextButton.addEventListener("click", function () {
    showSlides(++slideIndex);
  });

  // Automatic slideshow
  setInterval(function () {
    showSlides(++slideIndex);
  }, 20000); // Muda a imagem a cada 2 segundos (2000 milissegundos)
});
