let currentIndex = 0;

const items = document.querySelectorAll('.carousel .carousel-item');
const totalItems = items.length;

const intervalTime = 3000; // Tempo em milissegundos entre cada transição (3 segundos)

function autoMoveCarousel() {
    if (currentIndex < totalItems - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

// Avançar o carrossel automaticamente a cada intervalo
setInterval(autoMoveCarousel, intervalTime);

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    if (currentIndex < totalItems - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 3;
    }
    updateCarousel();
});

function updateCarousel() {
    const newTransformValue = -currentIndex * (100 / 3); // Desloca o carrossel
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}





