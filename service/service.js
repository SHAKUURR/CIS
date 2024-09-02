$(".security-container").slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	prevArrow: $(".carousel-nav .prev"),
	nextArrow: $(".carousel-nav .next"),
	responsive: [
		{
			breakpoint: 894,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

$(".intelligent-container").slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	prevArrow: $(".intelligent-nav .prev"),
	nextArrow: $(".intelligent-nav .next"),
	responsive: [
		{
			breakpoint: 894,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
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
