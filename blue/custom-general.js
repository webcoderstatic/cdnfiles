var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


// To setup the template, change the variables below
// Follow instructions in code comments or see documentation for more detail

//  1. Header Section
//	2. General Sections
//	3. Gallery Section


/*****************************************************************************
						1. Header Section
******************************************************************************/


jQuery(document).ready(function($){
"use strict";

// Menu Logo Hover logo animation

$( "a.brand-logo" ).on({
  mouseenter: function() {
    $('.brand-logo').addClass('animated pulse')
  }, mouseleave: function() {
   $('.brand-logo').removeClass('animated pulse');
  }
});
// logo animation
 
// Menu On Mobile Resolution
$(function(){
	$('#sub-nav').slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutQuint", //available with jQuery UI
	closeOnClick:true
});
});
// Menu On Mobile Resolution


//Top Header Fixed
var $top1= $('.header-inner').offset().top  +50;   

$(window).scroll(function()
{   

    if ($(window).scrollTop()>$top1)   
    {
     $('#fixed-header').addClass('header-fixed');
	   $(".top-bar").hide();
    }
    else
    {
     $('#fixed-header').removeClass('header-fixed');
	 	   $(".top-bar").show();
     }
     
});
//Top Header Fixed end

/**********************1. Header  END**********************/


/*************************************************************
		  		2. GENERAL SECTION
**************************************************************/

//Preloader
 $("body").jpreLoader(
			  {
				splashID:"#jSplash",
				showPercentage:!0,
				autoClose:!0,
				showSplash: true,
				splashFunction:function(){
				$("#circle").delay(1250).animate({opacity:1},700,"linear");
			  }
			 });       
//Preloader end

// Modal Section
 $('.materialboxed').materialbox();
// Modal Section

// Parallax Section
 $('.parallax').parallax();
// Parallax Section
 
// Modal Section
$('.modal-trigger').leanModal();  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
// Modal Section

// Date Time Picker Section
$('.datepicker').pickadate({
    selectMonths: false, // Creates a dropdown to control month
    selectYears: false, // Creates a dropdown of 15 years to control year
  });
// Date Time Picker Section

//scrollSpy
$('.scrollspy').scrollSpy();
// smooth scrolling 


//Navigation smooth Scrolling
$('#sub-nav a, .smoothscroll').on('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -78}, 1500,'easeInOutExpo');
		event.preventDefault();
});
//Navigation smooth Scrolling

/*   modal video Stop On Click Close Button  */
$( ".modal" ).on({
  click: function() {
   video_containers = $('.video-container');				// Video Stoped While The Modal Is Closed
   video_containers.html( video-container.html() );
}
});
/****************** 2. GENERAL SECTION END******************/

});//ready end


// WOW Init Reveal Animation  
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
   wow.init();
//   
// wow end 


// ******************************************************************************************
// Reservation Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	

   $("#resbutton").click(function() {
    if ($("#reservation_form").valid()) {
        $("#reservation_form").submit();
    }
});

  $('#reservation_form').validate(
    {
    rules: {
   /* date: {
    required: true
    },*/
	time: {
    required: true,
    },
    noofpeople: {
    required: true,
   
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('reservation_form.php', $("#reservation_form").serialize(), function(data) { // action file is here 
						$('#reservation_form_thanks').html(data);
					});
				}
    });

    }); // end document.ready


//Reservation Form END

// ******************************************************************************************
// Contact Form Start
// ******************************************************************************************
jQuery(document).ready(function($){
"use strict";	

$("#conbutton").click(function() {
    if ($("#contact_form").valid()) {
        $("#contact_form").submit();
    }
});


  $('#contact_form').validate(
    {
    rules: {
    name: {
    minlength: 2,
    required: true
    },
	phone: {
    required: true,
    },
    email: {
    required: true,
    email: true
    },
    message: {
    minlength: 2,
    required: true
    }
    },
    highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
    },
    success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
    },
	submitHandler: function(form) {
					// do other stuff for a valid form
					$.post('contact_form.php', $("#contact_form").serialize(), function(data) { // action file is here 
						$('#contact_form_thanks').html(data);
					});
				}
    });
    }); // end document.ready


//Contact Form END

}
/*
     FILE ARCHIVED ON 09:05:57 Sep 19, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:00:14 Nov 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.613
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.011
  esindex: 0.011
  cdx.remote: 7.759
  LoadShardBlock: 88.123 (3)
  PetaboxLoader3.datanode: 102.286 (4)
  load_resource: 23.354
*/