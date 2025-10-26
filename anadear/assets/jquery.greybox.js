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

/*************************
  Coppermine Photo Gallery
  ************************
  Copyright (c) 2003-2016 Coppermine Dev Team
  v1.0 originally written by Gregory DEMAR

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License version 3
  as published by the Free Software Foundation.

  ********************************************
  Coppermine version: 1.6.03
  $HeadURL$
**********************************************/

/* Greybox Redux
 * Required: http://jquery.com/
 * Written by: John Resig
 * Based on code by: 4mir Salihefendic (http://amix.dk)
 * License: LGPL (read more in LGPL.txt)
 */

var GB_DONE = false;
var GB_HEIGHT = 400;
var GB_WIDTH = 600;

function GB_show(caption, url, height, width) {
  GB_HEIGHT = height || 400;
  GB_WIDTH = width || 600;
  if(!GB_DONE) {
    $(document.body)
      .append("<div id=\"GB_overlay\"></div><div id=\"GB_window\"><div id=\"GB_caption\" class=\"tableh1\"></div>"
        + "<img src=\""+js_vars.icon_close_path+"\" alt=\"\" title=\""+js_vars.lang_close+"\"/><img id=\"GBloading\" src=\"images/loader.gif\" style=\"top:36px;left:20px\" /></div>");
    $("#GB_window img").click(GB_hide);
    $("#GB_overlay").click(GB_hide);
    $(window).resize(GB_position);
    $(window).scroll(GB_position);
    GB_DONE = true;
  }

  $("#GB_frame").remove();
	$('#GBloading').show();
  $("#GB_window").append("<iframe id=\"GB_frame\" src=\""+url+"\" onload=\"$('#GBloading').hide();\"></iframe>");

  $("#GB_caption").html(caption);
  $("#GB_overlay").show();
  GB_position();

  if(GB_ANIMATION)
    $("#GB_window").slideDown("slow");
  else
    $("#GB_window").show();
}

function GB_hide() {
  $("#GB_window,#GB_overlay").hide();
}

function GB_position()
{
    var de = document.documentElement;
    var h = self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
    var w = self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
    var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body;
    var dsocleft=document.all? iebody.scrollLeft : pageXOffset;
    var dsoctop=document.all? iebody.scrollTop : pageYOffset;
    
    var height = h < GB_HEIGHT ? h - 32 : GB_HEIGHT;
    var top = (h - height)/2 + dsoctop;
    
    $("#GB_window").css({width:GB_WIDTH+"px",height:height+"px",
      left: ((w - GB_WIDTH)/2)+"px", top: top+"px" });
    $("#GB_frame").css("height",height - 32 +"px");
    $("#GB_overlay").css({height:h, top:dsoctop + "px", width:w});
}


}
/*
     FILE ARCHIVED ON 15:31:45 Apr 02, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:35:11 Oct 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.508
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 46.825
  LoadShardBlock: 401.04 (3)
  PetaboxLoader3.resolve: 241.986 (5)
  PetaboxLoader3.datanode: 337.134 (5)
  load_resource: 270.687 (2)
*/