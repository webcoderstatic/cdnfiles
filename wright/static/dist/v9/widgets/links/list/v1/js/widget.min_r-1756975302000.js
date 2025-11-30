var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(){var e=this,r={linksList:".links-list:not(.type-0)",links:"a"},s={},a={page:{},user:{mouseout:"mouseleave"}},t={user:{mouseout:[r.linksList,r.links]}},i={page:{highlight:function(){$(r.linksList).find(r.links).each(function(){i.user.type($(this))})}},user:{type:function(e){var r=[],a=[],t=e&&e.attr("href")&&e.attr("href").replace("%20","").replace("&_mode=debug",""),i=0;for(var n in s.params)if("tags"===n||"type"===n){i++;var u=s.params[n];r.push(n),a.push(u.replace("%20",""))}r=r.join("|"),a=a.join("|");var o=2>i?"\\?+("+r+")+([\\^?&;=]*("+a+"))$":"\\?+("+r+")+([\\^?&;=]*("+a+"))+([\\^?&;=]*("+r+"))+([\\^?&;=]*("+a+"))$",p=new RegExp(o,"gi");return t&&t.match(p)?(e.addClass("ui-state-hover"),!1):void 0},mouseout:function(){i.user.type($(this))}}},n={queryParams:!function(e,r,a,t){for(a={},t=/([^?&;=]+)=?([^?&;]*)/g;r=t.exec(e.substr(1));)a[r[1]]=r[2];s.params=a,i.page.highlight()}(e.location.search)};for(var u in a.page)$(document).bind(a.page[u],i.page[u]);for(var u in t.user){var o=t.user[u];$(o[0]).undelegate(o[1],a.user[u]).delegate(o[1],a.user[u],i.user[u])}for(var u in n)"function"==typeof n[u]&&n[u]()}();
}