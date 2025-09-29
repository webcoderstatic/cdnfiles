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

jQuery(document).ready(function(){ 
	"use strict";
	
	//Desktop menu
	jQuery('#menu_wrapper div .nav li a, .mobile_main_nav li a').on( 'click', function(event){
		var documentScroll = jQuery(document).scrollTop();
		var linkURL = jQuery(this).attr('href');
	
		if(linkURL.slice(0,1)=='#')
		{
			event.preventDefault();
			var sectionID = jQuery(this).attr('href').substr(1);
			
			var topBarHeight = jQuery('.top_bar').height();
			
			if(sectionID=='top')
			{
				jQuery('body,html').animate({scrollTop:0},1200);
			}
			else
			{
				if(documentScroll != 0)
				{
					var scrollToPos = parseInt(jQuery('#'+sectionID).offset().top-topBarHeight);
				}
				else
				{
					var scrollToPos = parseInt(jQuery('#'+sectionID).offset().top-topBarHeight+32);
				}
			
				jQuery('body,html').animate({
				    scrollTop: scrollToPos
				}, 1200);
			}
			
			jQuery('#menu_wrapper div .nav li').removeClass('current-menu-item');
			jQuery(this).parent('li').addClass('current-menu-item');
			
			if(jQuery(window).width() < 960)
			{
				jQuery('body').removeClass('js_nav');
			}
		}
		else
		{
			return true;
		}
	});
	
	jQuery('#menu_wrapper div .nav li a').each(function () {
		var sectionElement = jQuery(this).attr('href');
		
		if(typeof sectionElement != 'undefined' && sectionElement.charAt(0) == '#')
		{
			var topBarHeight = jQuery('.top_bar').height();
		
			jQuery(sectionElement).waypoint(function(direction) {
				jQuery('#menu_wrapper div .nav li a').each(function(){
					if(jQuery(this).attr('href')==sectionElement)
					{
						jQuery('#menu_wrapper div .nav li').removeClass('current-menu-item');
						jQuery(this).parent('li').addClass('current-menu-item');
					}
				})
			}, { offset: topBarHeight });
		}
	});	
});

jQuery(window).load(function() {
	//Get hash tag from URL and scroll to the section
	var hash = window.location.hash;
	
	if(typeof hash != 'undefined' && hash != '')
	{
		jQuery('#menu_wrapper div .nav li a').each(function () {
			if(jQuery(this).attr('href')==hash)
			{
				jQuery(this).trigger('click');
			}
		});
	}
});

}
/*
     FILE ARCHIVED ON 09:35:08 May 21, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:01:54 Sep 29, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.621
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.016
  esindex: 0.011
  cdx.remote: 17.97
  LoadShardBlock: 355.327 (3)
  PetaboxLoader3.datanode: 242.364 (4)
  load_resource: 318.392
  PetaboxLoader3.resolve: 208.67
*/