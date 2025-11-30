var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
"use strict";$(document).ready(function(){DDC.dataLayer.events.listener.listen("ddc.form.initiation",function(t){t&&t.element&&$(t.element).closest("form").submit(function(){var t=$(this).find('[name*="contact.phone"]');t.each(function(){var e=$(this).val();t.val(e.replace("ext","x")),e.startsWith("1")?t.val(t.val().substring(1)):e.startsWith("+1")&&t.val(t.val().substring(2))})})})});
}