"use strict";
$(".gallery-container").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	prevArrow: $(".carousel-nav .prev"),
	nextArrow: $(".carousel-nav .next"),
	infinite: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			},
		},
		{
			breakpoint: 998,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
