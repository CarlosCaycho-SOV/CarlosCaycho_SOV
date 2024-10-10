

const carousel = document.querySelector('#carrusel');

carousel.addEventListener('wheel', (i) => {
    e.preventDefault();

    carousel.scrollBy({
        left: e.deltaY < 0 ? -300 : 300,
    });
});
