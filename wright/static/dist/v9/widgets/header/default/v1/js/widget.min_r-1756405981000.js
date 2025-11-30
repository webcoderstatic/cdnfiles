var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
$(document).ready(function(){var o=$(".page-header,.container-header,.header"),e=o.find(".header-logo"),t=function(o){var e=o.height();return logoHeight=o.find(".dealer-path-override-img:last").height(),topValue=Math.floor((e-logoHeight)/2)},a=function(o,e){o.css("top",e+"px")};o.attr("role","banner"),e.length&&(sessionStorage.logoTopVal?a(e,sessionStorage.logoTopVal):$(window).on("load",function(){(999==Math.abs(parseInt(e.css("top").replace("px","")))||"auto"==e.css("top"))&&(topVal=t(o),a(e,topVal),sessionStorage.setItem("logoTopVal",topValue))}))});
}