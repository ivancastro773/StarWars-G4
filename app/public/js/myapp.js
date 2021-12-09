/* document.addEventListener('DOMContentLoaded', () => {
  let slides = Array.from(document.querySelectorAll('.my-slides'));
  if (slides) {
    let slideIndex = 1;
    showSlides(slideIndex);
    const plusSlides = (n) => showSlides((slideIndex += n));
    document
      .querySelector('#btnSliderPrev')
      .addEventListener('click', (e) => plusSlides(-1));
    document
      .querySelector('#btnSliderNext')
      .addEventListener('click', (e) => plusSlides(1));
    function showSlides(n) {
      let slidesLen = slides.length;
      if (n > slidesLen) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slidesLen;
      }
      slides.forEach((slide) => (slide.style.display = 'none'));
      slides[slideIndex - 1].style.display = 'block';
    }
  }
});
 */