// ======= UBUNTU PRESENTATION JS =======
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Init
document.getElementById('totalSlides').textContent = totalSlides;
buildNavDots();

function buildNavDots() {
  const container = document.getElementById('navDots');
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    container.appendChild(dot);
  }
}

function goToSlide(index) {
  if (index < 0 || index >= totalSlides || index === currentIndex) return;

  const current = slides[currentIndex];
  const next = slides[index];

  // Determine direction
  const goingForward = index > currentIndex;

  // Reset positions before transition
  current.classList.remove('active');
  current.classList.add(goingForward ? 'exit-left' : 'exit-right');
  
  next.style.transform = goingForward ? 'translateX(60px)' : 'translateX(-60px)';
  next.classList.remove('exit-left', 'exit-right');

  // Force reflow
  void next.offsetWidth;

  next.classList.add('active');
  next.style.transform = 'translateX(0)';

  setTimeout(() => {
    current.classList.remove('exit-left', 'exit-right');
    current.style.transform = '';
  }, 500);

  currentIndex = index;
  updateUI();
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) goToSlide(currentIndex + 1);
}

function prevSlide() {
  if (currentIndex > 0) goToSlide(currentIndex - 1);
}

function updateUI() {
  document.getElementById('currentSlide').textContent = currentIndex + 1;
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
  if (e.key === 'Home') { e.preventDefault(); goToSlide(0); }
  if (e.key === 'End') { e.preventDefault(); goToSlide(totalSlides - 1); }
});

// Touch support
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextSlide() : prevSlide();
  }
});
