var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(){"use strict";var e=$(".inventory-detail-pricing"),t=$(".links-list"),i=e.find(".eprice"),n=t.find('[data-href*="/schedule-form.htm"]'),c=t.find('[data-href*="/lead-form.htm"]'),r={widgetName:"Website: VDP",eventName:"VDP > Inventory Detail Pricing Box: ePrice Button Clicked",data:"Opened ePrice Dialog"},a={widgetName:"Website: VDP",eventName:"VDP > Schedule Test Drive Button Clicked",data:"Opened Schedule Test Drive Dialog"},d={widgetName:"Website: VDP",eventName:"VDP > Request More Info Button Clicked",data:"Opened Request More Info Dialog"},o=function(){i.on("click",function(){$(document).trigger("trackEvent",[r])}),n.on("click",function(){$(document).trigger("trackEvent",[a])}),c.on("click",function(){$(document).trigger("trackEvent",[d])})};DDC.tracking&&DDC.tracking.ready?o():$.subscribe("ddc-event-tracking-ready",function(){o()})}();
}