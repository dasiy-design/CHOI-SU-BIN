const indicators = document.querySelectorAll('.indicator');

    function activateIndicator() {
    const scrollY = window.scrollY;
    indicators.forEach(indicator => {
        const section = document.getElementById(indicator.dataset.section);
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - sectionHeight / 2 &&
            scrollY < sectionTop + sectionHeight / 2) {
        indicator.classList.add('active');
        } else {
        indicator.classList.remove('active');
        }
    });
    }

    window.addEventListener('scroll', activateIndicator);
    window.addEventListener('load', activateIndicator);