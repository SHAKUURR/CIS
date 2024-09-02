$(".security-container").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $(".carousel-nav .prev"),
	nextArrow: $(".carousel-nav .next"),
});

$(".security-container2").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $(".carousel-nav2 .prev2"),
	nextArrow: $(".carousel-nav2 .next2"),
});

$(".security-container3").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $(".carousel-nav3 .prev3"),
	nextArrow: $(".carousel-nav3 .next3"),
});

$(".security-container4").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: $(".carousel-nav4 .prev4"),
	nextArrow: $(".carousel-nav4 .next4"),
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
