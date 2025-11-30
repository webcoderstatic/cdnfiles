var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(){"use strict";var t=$(".buttonblock-default a"),e=DDC.siteSettings.pageAlias,i="buttonblock.default.v1",n=function(t,n,a,c){var o="Web : "+e,d=e+" > "+i+" > "+t+" : "+n;$(document).trigger("trackEvent",{widgetName:o,eventName:d,data:c})},a=function(){t.on("click",function(){var t=$(this).closest("div").data("widget-id"),e=$(this).children("span.ui-button-text").text(),i="Clicked",a="Navigated to "+e;n(t,e,i,a)})};$(document).ready(function(){a()})}();
}