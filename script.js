let slideIndex = 0;
let touchStartX = 0;

showSlides();

function showSlides() {
  let i;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = 'block';  
  dots[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  if (deltaX > 50) {
    prevSlide();
  } else if (deltaX < -50) {
    nextSlide();
  }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);
