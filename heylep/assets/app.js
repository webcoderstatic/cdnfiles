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

// http://forum.jquery.com/topic/fade-in-fade-out-11-2-2013
(function($) {
  $.fn.slideshow = function(options) {

    var o = $.extend({
      speed: 1000,
      interval: 2500
    }, options);

      var $slider = $(this),
      $slider_li = $slider.find('li'),
      length = $slider_li.length;

      if ( length > 1 ) {


        setInterval(function () {
          var $active = $slider.find('.active'),
              index = $slider_li.index($active),
              i = length-1 === index?0:++index;
          $active
          .animate({opacity: 0}, o.speed, function () {
            $(this).removeClass('active');
          });

          $slider_li
          .eq(i)
          .animate({opacity: 1}, o.speed, function () {
            $(this).addClass('active');
          });
        }, o.interval);

      }

  };
})(jQuery);


jQuery(window).load(function() {
  jQuery('#primary-navigation-list li:has(ul)').doubleTapToGo();

  //jQuery('.banners').slideshow({ interval: 5000, speed: 1000 });
  //jQuery('.home-post-wrapper').slideshow({ interval: 6000, speed: 500 });

  var maxHeight = -1;
  var winWidth = jQuery(window).width();

  if(winWidth < 1024) {
    jQuery('.banner').width(winWidth);
  }

  if(winWidth >= 768) {
    jQuery('.equal-height').each(function() {
      maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
    });

    jQuery('.equal-height').each(function() {
      jQuery(this).height(maxHeight);
    });
  }
});

jQuery(document).on('click', '.popup-window', function() {
  var linkToOpen = jQuery(this).attr('href');

  var w    = screen.width - 100;
  var h    = screen.height  - 200;
  var left = (screen.width/2)-(w/2);
  var top  = (screen.height/2)-(h/2) - 80; //start menu

  // http://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen
  var newWindow = window.open(linkToOpen, '_blank', 'resizable=no, scrollbars=no, titlebar=no, width='+w+', height='+h+', top='+top+', left='+left);
  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }

  return false;
});

jQuery(document).ready(function() {
  var style;
  jQuery('.shortcode-dynamic-border').each(function(index, elem) {
    style = jQuery(this).attr('style');
    if(style !== undefined) {
      jQuery(this).find('li').attr('style', style);
    }
  });

  if(jQuery('.widget-style').length >= 1) {
    jQuery('.widget').attr('style', jQuery('.widget-style').attr('style'));
    jQuery('.widget li').attr('style', jQuery('.widget-style').attr('style'));
  }

  if(jQuery('.widget-header-style').length >= 1) {
    jQuery('.widget h5').attr('style', jQuery('.widget-header-style').attr('style'));
  }

  jQuery('.wiki a img').parent().attr('target', '_blank');


  jQuery('.banner-li-wrap').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    arrows: false
  });

  jQuery('.testimonial-wrap').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    dots: true,
    arrows: false
  }).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});


jQuery(document).on('click', '.banner-previous', function() {
  jQuery('.banner-li-wrap').slick('slickPrev');
});

jQuery(document).on('click', '.banner-next', function() {
  jQuery('.banner-li-wrap').slick('slickNext');
});




jQuery(function () {
  jQuery('.tagcloud a').tagcloud();
});


}
/*
     FILE ARCHIVED ON 05:19:31 Apr 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:43 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.84
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.012
  esindex: 0.018
  cdx.remote: 160.639
  LoadShardBlock: 472.047 (3)
  PetaboxLoader3.datanode: 600.603 (5)
  load_resource: 526.695 (2)
  PetaboxLoader3.resolve: 346.449
*/