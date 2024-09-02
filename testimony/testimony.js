$(".testimonial-container").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	prevArrow: $(".carousel-nav .prev"),
	nextArrow: $(".carousel-nav .next"),
});

const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});
