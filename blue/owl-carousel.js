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



/***************************************************
		 // Portfolio on mouseover opactiy
***************************************************/	

jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
		jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
		jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, deeplinking:false});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
		});


//mixitup gallery filters
	  $('#portfolio-grid').mixitup({
		effects: ['fade','scale'],
		easing: 'snap'
	  });
//mixitup Portfolio END

//gallery Owl Carousel **/

$(document).ready(function () {
    var carousel = $("#portfolio-grid");
  carousel.owlCarousel({
    navigation:false,
	autoPlay:true,
	loop:true,
	items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
	pagination:false,
    navigationText : ["prev","next"],
  });
});
//	 Owl Carousel end

}
/*
     FILE ARCHIVED ON 09:05:54 Sep 19, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:00:14 Nov 01, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.705
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 7.626
  LoadShardBlock: 66.095 (3)
  PetaboxLoader3.datanode: 73.835 (4)
  load_resource: 10.429
*/