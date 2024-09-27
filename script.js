let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.imagenes-tienda').style.transform = `translateX(${-currentSlide * 100}%)`;
}

