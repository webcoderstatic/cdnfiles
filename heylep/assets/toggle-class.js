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

jQuery(document).on('click', '.toggle-class', function(e) {
  var toggleContainer = jQuery(this).data('container');
  var toggleClass     = jQuery(this).data('class');
  var dataReturn      = jQuery(this).data('return');

  jQuery(toggleContainer).toggleClass(toggleClass);
  jQuery(this).toggleClass('toggled');

  if (dataReturn === false) {
    e.preventDefault();
  }

  console.log('test');
});


}
/*
     FILE ARCHIVED ON 05:19:31 Apr 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:40 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.781
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 30.184
  LoadShardBlock: 454.411 (3)
  PetaboxLoader3.datanode: 225.07 (4)
  PetaboxLoader3.resolve: 213.149 (2)
  load_resource: 57.036
*/