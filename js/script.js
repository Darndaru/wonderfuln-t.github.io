'use strict';

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementByClassName("article_item_img");

	if (slides.length < n) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	for (let slide of slides) {
		slide.style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}