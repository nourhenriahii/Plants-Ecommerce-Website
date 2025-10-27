
    const audio = new Audio('clame.mp3'); 
    let isPlaying = false;

    function toggleMusic() {
        const musicIcon = document.querySelector('.music-btn i');
        if (isPlaying) {
            audio.pause(); 
            isPlaying = false;
            musicIcon.classList.remove('bx-pause'); 
            musicIcon.classList.add('bx-music'); 
        } else {
            audio.play();
            isPlaying = true;
            musicIcon.classList.remove('bx-music'); 
            musicIcon.classList.add('bx-pause'); 
        }
    }
document.addEventListener("DOMContentLoaded", function () {
    const customBox = document.querySelector(".custom-box");

    
    let hasScrolled = false;

    window.addEventListener("scroll", function () {
        if (!hasScrolled && window.scrollY > 0) {
            hasScrolled = true; // التأكد أن التمرير قد حدث
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(customBox);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const customBox = document.querySelector(".custom-box1");

   
    let hasScrolled = false;

    window.addEventListener("scroll", function () {
        if (!hasScrolled && window.scrollY > 0) {
            hasScrolled = true; // التأكد أن التمرير قد حدث
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(customBox);
        }
    });
});
