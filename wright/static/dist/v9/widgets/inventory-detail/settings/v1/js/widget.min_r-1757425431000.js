var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(){var e=this,i=e.jQuery,r=(e.DDC,{printUrl:"[name=printUrl]",itemId:"[name=itemId]",itemCategory:"[name=itemCategory]"}),t={page:{},user:{}},n={user:{live:{},traditional:{}}},a={page:{},user:{}},u={dynamicUrls:function(){var e={};i(r.printUrl).size()&&(e.printUrl=i(r.printUrl).val()),i(r.itemId).size()&&(e.itemId=i(r.itemId).val()),i(r.itemCategory).size()&&(e.category=i(r.itemCategory).val()),i(document).trigger("dynamicUrls",[e])}};i(function(){i.each(t.page,function(e){i(document).bind(t.page[e],a.page[e])}),i.each(n.user.live,function(e){i(n.user.live[e]).die(t.user[e]).live(t.user[e],a.user[e])}),i.each(n.user.traditional,function(e){i(n.user.traditional[e]).unbind(t.user[e]).bind(t.user[e],a.user[e])}),i.each(u,function(e){i.isFunction(u[e])&&u[e]()})})}();
}