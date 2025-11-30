var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function() {
	window.addEventListener('DOMContentLoaded', function (event) {
		setHyundaiTestDriveAutoSelectModelFlag();
	});

	/**
	 * @description Set cookie on VDP page so that the iframe widget on /hyundai-test-drive.htm can consume this cookie.
	 * The hyundai paramater modifier should only fire if document.referrer is vdp.
	 * The presence of the cookie is the flag for the modifier so we must delete the cookie if non-vdp page.
	 */
	function setHyundaiTestDriveAutoSelectModelFlag() {
		var isTestDrive = (DDC.dataLayer.page.pageInfo.pageName == 'HYUNDAI_TEST_DRIVE');

		if (DDC.dataLayer.page.pageInfo.isVdp ) {
			var vehicle = DDC.dataLayer.vehicles[0];
			if (vehicle) {
				document.cookie = 'hyundaiTestDriveAutoSelectModel=' + vehicle.model + '; path=/';
			} else {
				deleteCookie('hyundaiTestDriveAutoSelectModel');
			}
		} else if (!isTestDrive){
			deleteCookie('hyundaiTestDriveAutoSelectModel');
		}
	}

	function deleteCookie(cookieName) {
		var now = new Date();
		now.setMonth( now.getMonth() - 1 );
		document.cookie = cookieName + '=false; expires=' + now.toUTCString() + '; path=/';
	}
})();

}
/*
     FILE ARCHIVED ON 16:37:39 Sep 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:00:51 Nov 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.555
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 5.83
  LoadShardBlock: 207.803 (3)
  PetaboxLoader3.datanode: 221.587 (4)
  load_resource: 122.576
  PetaboxLoader3.resolve: 63.778
*/