showFirst();

function currentSlide(n, k) {
    showSlides(slideIndex = n + (k - 1) * 2);
}

function showFirst() {
    let slides = document.getElementsByClassName("article_item_img");
    for (let slide of slides) {
            slide.style.display = "none";
        }
    slides[0].style.display = "block";
    slides[2].style.display = "block"; 
    slides[4].style.display = "block";
}

function showSlides(n, k) {
    let slides = document.getElementsByClassName("article_item_img");
    let slideIndex = n;

    if (slideIndex % 2 == 1) {
        slides[slideIndex].style.display = "none";
    } else {
        slides[slideIndex - 2].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}