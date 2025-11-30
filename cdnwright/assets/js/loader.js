var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;return new Promise(((n,t)=>{const i=()=>window.DDC&&window.DDC.dataLayer&&Object.keys(window.DDC.dataLayer).length&&window.DDC.siteSettings&&Object.keys(window.DDC.siteSettings).length;if(i())return void n(!0);let o;const a=setTimeout((()=>{o&&clearInterval(o),t(new Error("I can't find this"))}),e);o=setInterval((()=>{i()&&(clearTimeout(a),clearInterval(o),n(!0))}),50)}))},n=async()=>{const n=await(async()=>{await e();const{pageInfo:n,attributes:t}=window.DDC.dataLayer.page,{siteSettings:i}=window.DDC;return{siteId:i.siteId||"",pageName:n.pageName||"",layoutType:t.layoutType||"",locale:t.locale||""}})(),{layoutType:t,pageName:i,siteId:o,locale:a}=n,s=[`integrationType=${["api","api_compatible"].join(",")}`,`deviceType=${t}`,`pageAlias=${i}`,`siteId=${o}`,`locale=${a}`],r=(()=>{const e={};return window.location.search.substring(1).split("&").forEach((n=>{const[t,i]=n.split("=");t&&(e[decodeURIComponent(t)]=i?decodeURIComponent(i):"")})),e})();return"false"!==r._toggleBasePageCache&&"false"!==r._toggleWIAPICache||s.push(`r=${(new Date).getTime()}`),(async e=>{const n=await fetch(e);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return n.json()})(`/api/ipp/config/services?${s.join("&")}`)};window.DDC=window.DDC||{},window.DDC.APIEvents={received:[],handleShown:e=>{e&&window.DDC.APIEvents.received.push(e)},start:()=>{window.addEventListener("wsInvListingShown",window.DDC.APIEvents.handleShown)},get:()=>window.DDC.APIEvents.received},window.DDC.APIEvents.start();const t=class t{constructor(){this.configsPromise=null}loadConfigs(){return window.DDC.PrivateAPI=window.DDC.PrivateAPI||{},window.DDC.PrivateAPI.integrationConfigs?window.DDC.PrivateAPI.integrationConfigs:(this.configsPromise=this._fetchConfigs(),window.DDC.PrivateAPI.integrationConfigs=this.configsPromise,this.configsPromise)}async _fetchConfigs(){try{await e();const t=await n();return window.DDC.PrivateAPI.integrationConfigs=t,window.dispatchEvent(new CustomEvent("WIAPIConfigsReady",{detail:t})),t}catch(e){throw window.DDC.PrivateAPI.integrationConfigs=null,e}}async isReady(){return!!window.DDC.API||new Promise((e=>{window.addEventListener("WIAPIReady",(()=>{e(!0)}))}))}static async create(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default-integration-id";const n=new t;return await n.isReady(),new window.DDC.API(e)}startEarlyLoading(){return this.loadConfigs()}};window.DDC.APILoader=t,window.DDC.apiLoaderInstance=new t,window.DDC.apiLoaderInstance.startEarlyLoading(),window.dispatchEvent(new Event("WIAPILoaderReady"))}));
//# sourceMappingURL=loader.js.map

}
/*
     FILE ARCHIVED ON 01:47:27 Sep 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:00:45 Nov 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.503
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 7.613
  LoadShardBlock: 117.276 (3)
  PetaboxLoader3.datanode: 107.229 (4)
  load_resource: 32.986
*/