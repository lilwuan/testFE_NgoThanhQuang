let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image-1528-1");
    let indicators = document.getElementsByClassName("indicator-ellipse");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].style.background = "#D8D8D8";  
    }

    slides[slideIndex].style.display = "block";
    indicators[slideIndex].style.background = "#e89f71";  
}
