var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("prop-types"),require("react-redux"),require("react"),require("html-react-parser")):"function"==typeof define&&define.amd?define(["exports","prop-types","react-redux","react","html-react-parser"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).DDC=e.DDC||{},e.DDC.WsmCommonData={}),e.PropTypes,e.ReactRedux,e.React,e.HTMLReactParser)}(this,(function(e,t,a,s,r){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=l(t),n=l(s),o=l(r);function i(e){return e.render(e.commonData)}i.propTypes={render:u.default.func.isRequired,commonData:u.default.shape({labels:u.default.shape({}).isRequired,sitemap:u.default.shape({}).isRequired,prefs:u.default.shape({}).isRequired,flags:u.default.shape({}).isRequired}).isRequired},i.displayName="CommonRenderProp";const p=e=>({has:t=>void 0!==e[t],get:t=>e[t]||t,getKeys:()=>Object.keys(e),getAll:()=>e,getHTML:(t,a)=>((e,t=n.default.Fragment)=>{const a=o.default(e);return n.default.createElement(t,null,a)})(e[t]||t,a)}),f=e=>({has:t=>void 0!==e[t],get:t=>e[t]||null,getAll:()=>e}),d=a.connect((e=>({commonData:{labels:p(e.labels),sitemap:f(e.sitemap),prefs:e.prefs,flags:e.flags}})),null,null,{pure:!1})(i);function c(e){return{subscribe:()=>{},dispatch:()=>{},getState:()=>e}}function m(e){const{initialState:t,flags:s,labels:r,sitemap:l,prefs:u,render:o}=e,i=c({...t,flags:s,labels:r,sitemap:l,prefs:u});return n.default.createElement(a.Provider,{store:i},o())}d.displayName="Common",m.displayName="CommonTester",m.propTypes={render:u.default.func.isRequired,labels:u.default.shape({}),sitemap:u.default.shape({}),prefs:u.default.shape({}),flags:u.default.shape({}),initialState:u.default.shape({})},m.defaultProps={labels:{},sitemap:{},prefs:{},flags:{},initialState:{}},e.Common=d,e.CommonTester=m,e.createStore=c,e.useFlags=()=>a.useSelector((e=>e.flags)),e.useLabels=()=>{const e=a.useSelector((e=>e.labels));return p(e)},e.usePrefs=()=>a.useSelector((e=>e.prefs)),e.useRequestData=()=>a.useSelector((e=>e.requestData)),e.useSitemap=()=>{const e=a.useSelector((e=>e.sitemap));return f(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=umd.js.map

}
/*
     FILE ARCHIVED ON 01:47:27 Sep 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:00:44 Nov 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.378
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 13.801
  LoadShardBlock: 97.332 (3)
  PetaboxLoader3.datanode: 127.089 (4)
  load_resource: 97.959
  PetaboxLoader3.resolve: 51.321
*/