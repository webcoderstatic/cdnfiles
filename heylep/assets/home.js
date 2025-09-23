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

jQuery(window).load(function() {
  var maxHeight = -1;

  var winWidth = jQuery(window).width();

  if(winWidth >= 768) {
    jQuery('.content-box-text').each(function() {
        maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
    });

    jQuery('.content-box-text').each(function() {
        jQuery(this).height(maxHeight);
    });
  }  
});


}
/*
     FILE ARCHIVED ON 11:53:08 Apr 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:42 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.55
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 153.764
  LoadShardBlock: 529.693 (3)
  PetaboxLoader3.datanode: 490.485 (4)
  load_resource: 329.765
  PetaboxLoader3.resolve: 174.043
*/