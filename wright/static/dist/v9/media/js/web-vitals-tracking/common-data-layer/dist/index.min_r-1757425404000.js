var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
"use strict";!function(e){var t=["CLS","LCP","INP"],n=["FID","FCP","TTFB"],i=function(e){switch(e){case"CLS":return"cumulativeLayoutShift";case"FID":return"firstInputDelay";case"LCP":return"largestContentfulPaint";case"TTFB":return"timeToFirstByte";case"INP":return"interactionToNextPaint";case"FCP":return"firstContentfulPaint";default:return e}},a=["data:image/","data:video/","<svg"],r=function(e){if(!e||"string"!=typeof e)return"";var t=a.some(function(t){return e.includes(t)});return t?"embedded multimedia":e.replace(/<[^>]*>/g,"").replace(/&[^;\s]+;/g,"").replace(/javascript:/gi,"").trim()},u=function(t){if(t){var n=i(t.name),a={};if(a[n]=["CLS","INP"].includes(t.name)?t.value:t.value/1e3,t.rating&&(a[n+"Rating"]=t.rating),t.attribution){var u=t.attribution;(u.eventTarget||u.element)&&(a[n+"Element"]=u.eventTarget?u.eventTarget:u.element),"LCP"===t.name&&u.lcpEntry&&u.lcpEntry.url&&(a[n+"URL"]=r(u.lcpEntry.url)),u.eventType&&(a[n+"EventType"]=u.eventType)}e&&e.push(a)}},c=function(e){e.forEach(function(e){webVitals["on"+e](u)})};"loading"!==document.readyState?c(n):window.addEventListener("DOMContentLoaded",function(){c(n)}),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&c(t)})}(window.coxAutoDataLayer);
}