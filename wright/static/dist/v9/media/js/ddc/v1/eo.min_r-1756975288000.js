var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(e){"use strict";var t=window.DDC=window.DDC||{},i=window.DDC.EO=window.DDC.EO||{};i.trackEO=function(){t.isComposer||e(document).trigger("trackEvent",{widgetName:"Website",eventName:"EO Eligible",data:"true",noninteraction:!0})},i.checkForEO=function(){e.ajax({type:"GET",url:"/apis/eo",contentType:"application/json",cache:!1,success:function(e){e&&(e.offMarket||e.hasVehicleHistory)&&(i.trackEO(),sessionStorage.setItem("eo_user_optimizable","true"))},error:function(i){var c=e(i.responseText).filter("h1").text();c&&(t.log("EO User Optimizable API Fetch "+c),"undefined"!=typeof newrelic&&newrelic.addPageAction("EOUserOptimizable",{result:c}))}})},i.init=function(){"true"===sessionStorage.getItem("eo_user_optimizable")||(jQuery.cookie("ddc_abc_cache")?i.checkForEO():e.subscribe("ddc-eo-cookies-set",function(){jQuery.cookie("ddc_abc_cache")&&i.checkForEO()}))},t.tracking&&t.tracking.ready?i.init():e.subscribe("ddc-event-tracking-ready",function(){i.init()})}(jQuery);
}