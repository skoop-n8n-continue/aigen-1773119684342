document.addEventListener('DOMContentLoaded', () => {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const slides = [slide1, slide2];
    let currentSlideIndex = 0;

    function nextSlide() {
        const currentSlide = slides[currentSlideIndex];

        // Start current slide animation (Slide In)
        currentSlide.classList.remove('exit');
        currentSlide.classList.add('active');

        // Wait for slide to be seen, then slide out
        setTimeout(() => {
            currentSlide.classList.remove('active');
            currentSlide.classList.add('exit');

            // Move to next slide index
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;

            // Wait for exit animation to finish before showing next
            setTimeout(nextSlide, 800);
        }, 3000); // Display slide for 3 seconds
    }

    // Start the sequence
    nextSlide();
});
