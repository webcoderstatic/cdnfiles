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
  jQuery('#events').pajinate({
    items_per_page: 10,
    item_container_id: '.event',
    nav_panel_id: '.event_navigation',
    num_page_links_to_display : 5
  });

  jQuery('#blogs').pajinate({
    items_per_page : 10,
    item_container_id : '.blog',
    nav_panel_id : '.blog_navigation',
    num_page_links_to_display : 5
  });

  jQuery('#posts').pajinate({
    items_per_page : 10,
    item_container_id : '.posts',
    nav_panel_id : '.post_navigation',
    num_page_links_to_display : 5
  });

  jQuery('#pages').pajinate({
    items_per_page : 10,
    item_container_id : '.pages',
    nav_panel_id : '.page_navigation',
    num_page_links_to_display : 5
  });

  jQuery('#posts-mentioned').pajinate({
    items_per_page : 10,
    item_container_id : '.posts-mentioned',
    nav_panel_id : '.posts_mentioned_navigation',
    num_page_links_to_display : 5
  });
});

jQuery(document).on('click', '.blog_navigation a:not(.no_more)', function() {
  window.location = '#blogs';
})


jQuery(document).on('click', '.event_navigation a:not(.no_more)', function() {
  window.location = '#events';
})

jQuery(document).on('click', '.post_navigation a:not(.no_more)', function() {
  window.location = '#posts';
})

jQuery(document).on('click', '.page_navigation a:not(.no_more)', function() {
  window.location = '#pages';
})


}
/*
     FILE ARCHIVED ON 05:19:31 Apr 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:41 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.501
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 132.339
  LoadShardBlock: 944.852 (3)
  PetaboxLoader3.datanode: 971.788 (4)
  load_resource: 354.377
  PetaboxLoader3.resolve: 140.989
*/