jQuery(document).ready(function(){
	/* mobile menu */
	jQuery(".menu_pointer_mb").click(function(e){
		e.preventDefault();
		if(!jQuery(".menu").hasClass("active")) {
			jQuery(".menu").addClass("active");
		} else {
			jQuery(".menu").removeClass("active");
		}
	});
	
	/* slider */
	jQuery('.slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
	});
	
	/* image carousel */
	jQuery('.image_carousel').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
	
	/* logo carousel */
	jQuery('.logo_carousel').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
	
	/* testimonial slider */
	jQuery('.testimonial_slider').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	/* calendar */
	jQuery("#canlender").zabuto_calendar({
	});
	
	/* blog */
	var name = jQuery(".blog_header li.active a").attr("class");
	jQuery(".blog_content .row."+name).addClass("active");
	jQuery(".blog_header li a").click(function(e){
		e.preventDefault();
		var name = jQuery(this).attr("class");
		jQuery(".blog_header li").removeClass("active");
		jQuery(".blog_header li a."+name).parent().addClass("active");
		jQuery(".blog_content .row").removeClass("active");
		jQuery(".blog_content .row."+name).addClass("active");
	});
});