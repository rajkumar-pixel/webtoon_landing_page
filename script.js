const carouselContainer = document.querySelector('.carousel-container');

let isDown = false;
let startX;
let scrollLeft;

carouselContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
});

carouselContainer.addEventListener('mouseleave', () => {
    isDown = false;
});

carouselContainer.addEventListener('mouseup', () => {
    isDown = false;
});

carouselContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    carouselContainer.scrollLeft = scrollLeft - walk;
});
