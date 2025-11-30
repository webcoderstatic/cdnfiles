var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(o,t){"use strict";var e=o('[data-widget-name="directions-form"]'),n=e.find('[name="strt1"]'),a=e.find('[name="zipc1"]'),i=function(){return n&&a&&navigator.geolocation?navigator.geolocation.getCurrentPosition(r):void 0},r=function(o){if(o&&google&&google.maps){var t=new google.maps.Geocoder,e=new google.maps.LatLng(o.coords.latitude,o.coords.longitude);t.geocode({latLng:e},function(o,t){t==google.maps.GeocoderStatus.OK&&o.length>0&&s(o[0])})}},d=function(o){for(var t=o.length,e=!1,n=!1,a=!1,i=0;t>i;i++){var r=o[i].types[0],d=o[i].long_name;if("street_number"===r?e=d:"route"===r?n=d:"postal_code"===r&&(a=d),e&&n&&a)return{street:e+" "+n,postal_code:a}}return!1},s=function(o){var t=d(o.address_components);t&&(n.attr("value",t.street),a.attr("value",t.postal_code))};o(document).on("google-maps-initialized",function(){i()}),e.on("click",'button[type="submit"]',function(){if(window.DDC.Widgets.DirectionsForm.openMapOnSubmit){var o=t.dataLayer.dealership,e=o.address1+"-"+o.city+"-"+o.stateProvince+"-"+o.postalCode,i=n.val()+","+a.val();window.open("https://maps.google.com/?saddr="+i+"&daddr="+e)}})}(jQuery,window.DDC);
}