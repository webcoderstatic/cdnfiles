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


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var cookieName  = 'hlep-cookie-acceptance',
    cookieDiv   = '.cookie-message',
    cookieValue = '1';

jQuery(document).ready(function() {
  var cookieWarning = getCookie(cookieName);

  if(cookieWarning != cookieValue) {
    jQuery(cookieDiv).slideDown('fast');
  }
});

jQuery(document).on('click', '.cookie-acceptance', function() {
  jQuery(cookieDiv).slideUp('fast');
  setCookie(cookieName, cookieValue, 365);
});


}
/*
     FILE ARCHIVED ON 06:23:36 May 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:44 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.514
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 86.336
  LoadShardBlock: 308.47 (3)
  PetaboxLoader3.datanode: 418.439 (5)
  load_resource: 517.866
  PetaboxLoader3.resolve: 167.079
  loaddict: 147.203
*/