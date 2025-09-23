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

function clickLink(link){
    window.open(link,'_blank');
}
jQuery( document ).ready(function() {
    jQuery('#open_advance_search').on('click',function(){
    	if( jQuery(this).is(':checked') ){
    		jQuery('.advanced_search .input_search,.advanced_search select').removeAttr('disabled');
    		jQuery('.advanced_search .input_search,.advanced_search select').removeAttr('title');
    	}else{
    		jQuery('.advanced_search .input_search,.advanced_search select').prop('disabled','true');
    		jQuery('.advanced_search .input_search,.advanced_search select').prop('title','Check the box above to enable meta search fields');
    	}    	
		
	});
});


}
/*
     FILE ARCHIVED ON 05:19:24 Apr 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:43 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.012
  exclusion.robots: 0.039
  exclusion.robots.policy: 0.018
  esindex: 0.017
  cdx.remote: 214.185
  LoadShardBlock: 537.477 (3)
  PetaboxLoader3.datanode: 212.294 (4)
  PetaboxLoader3.resolve: 162.024
  load_resource: 57.362
*/