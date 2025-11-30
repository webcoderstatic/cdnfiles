var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function () {
  if (window.__audioEyeInitialized) { return; }
  window.__audioEyeInitialized = !0;
  var document = window.document,
    addListener = document.addEventListener || document.attachEvent,
    removeListener = document.removeEventListener || document.detachEvent,
    eventName = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange",
    hostOverride = window.localStorage.getItem("aeHostOverride")
  readyCallback = function () {
    removeListener.call(document, eventName, readyCallback, false);
    var a = document.createElement("script"), h = window.__AudioEyeSiteHash, d = window.location.hostname;
    a.src = [hostOverride || "https://web.archive.org/web/20250903014730/https://wsv3cdn.audioeye.com", "/bootstrap.js?", h ? "h=" + h : "d=" + d, "&cb=bf8f99d"].filter(Boolean).join('');
    a.type = "text/javascript";
    a.setAttribute("async", "");
    document.getElementsByTagName("body")[0].appendChild(a)
  };
  if (document.readyState !== "loading") {
    readyCallback();
  } else {
    addListener.call(document, eventName, readyCallback, false);
  }
}();

}
/*
     FILE ARCHIVED ON 01:47:30 Sep 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:01:19 Nov 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.651
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 16.351
  LoadShardBlock: 69.569 (3)
  PetaboxLoader3.datanode: 161.736 (4)
  load_resource: 214.173
  PetaboxLoader3.resolve: 115.814
*/