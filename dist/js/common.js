$(document).ready(function() {


	$("#toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$("#menu").slideToggle();
		return false;
	});
	$('select').styler();
	// $('.owl-carousel').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     autoplayTimeout: 4000,
	//     autoplaySpeed:1400,
	//     pagination:true,
	//     dots:true,
	//     dotsSpeed: 100,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:1,
	//             autoplay: false,
	//         },
	//         700:{
	//             items:1,
	//             autoplay: true,
	//         }
	//     }
	// });

	// $('.collapse').collapse();

	// $(".teaser-more").parent("p").css("display","inline-block" ).html;
});



