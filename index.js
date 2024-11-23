const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dotsContainer = document.querySelector('.dots-container');
let currentIndex = 0;

// Створення точок
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active'); // Перша точка активна
    dotsContainer.appendChild(dot);

    // Подія для точки
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSliderPosition();
        updateActiveDot();
    });
}

// Оновлення позиції слайдера
function updateSliderPosition() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Оновлення активної точки
function updateActiveDot() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Обробники для стрілок
document.querySelector('.prev-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
    updateActiveDot();
});

document.querySelector('.next-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
    updateActiveDot();
});

// Автоматична зміна слайдів
function startAutoSlide() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
        updateActiveDot();
    }, 3000);
}

startAutoSlide();