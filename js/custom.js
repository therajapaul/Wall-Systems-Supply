// JavaScript Document

//Equal Height
jQuery('.coleql_height').matchHeight();

//Navigation
jQuery(document).ready(function ($) {
jQuery('.stellarnav').stellarNav({
theme: 'light',
breakpoint: 991,
position: 'right',
});
});

//Add class onscroll in heaer
jQuery(window).scroll(function () {
if (jQuery(".header").offset().top > 0) {
jQuery(".header").addClass("fixed-header");
} else {
jQuery(".header").removeClass("fixed-header");
}
})

jQuery(document).ready(function () {
//Accordion Nav
jQuery('.mainNav').navAccordion({
expandButtonText: '<i class="fa-solid fa-angle-down"></i>',  //Text inside of buttons can be HTML
collapseButtonText: '<i class="fa-solid fa-angle-up"></i>'
},
function () {
console.log('Callback')
});
})

jQuery('.marquee-logos').marquee({
speed:30000,
gap:0,
delayBeforeStart: 0,
direction: 'left',
duplicated: true,
pauseOnHover: true
});

//Slick Carousel
jQuery('.BannerSlider').slick({
dots: true,
infinite: true,
autoplay: true,
arrows: false,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
});


//Slick Carousel
jQuery('.TestiSlider').slick({
dots: true,
infinite: true,
autoplay: true,
arrows: true,
speed: 600,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1199,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
}
},
{
breakpoint: 992,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
arrows: false,
}
},
{
breakpoint: 767,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
}
}
]
});