var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function poll_vote(l){jQuery(document).ready(function(o){poll_answer_id="",poll_multiple_ans=0,poll_multiple_ans_count=0,o("#poll_multiple_ans_"+l).length&&(poll_multiple_ans=parseInt(o("#poll_multiple_ans_"+l).val())),o("#polls_form_"+l+" input:checkbox, #polls_form_"+l+" input:radio, #polls_form_"+l+" option").each(function(l){(o(this).is(":checked")||o(this).is(":selected"))&&(poll_multiple_ans>0?(poll_answer_id=o(this).val()+","+poll_answer_id,poll_multiple_ans_count++):poll_answer_id=parseInt(o(this).val()))}),poll_multiple_ans>0?poll_multiple_ans_count>0&&poll_multiple_ans_count<=poll_multiple_ans?(poll_answer_id=poll_answer_id.substring(0,poll_answer_id.length-1),poll_process(l,poll_answer_id)):0==poll_multiple_ans_count?alert(pollsL10n.text_valid):alert(pollsL10n.text_multiple+" "+poll_multiple_ans):poll_answer_id>0?poll_process(l,poll_answer_id):alert(pollsL10n.text_valid)})}function poll_process(l,o){jQuery(document).ready(function(s){poll_nonce=s("#poll_"+l+"_nonce").val(),pollsL10n.show_fading?(s("#polls-"+l).fadeTo("def",0),pollsL10n.show_loading&&s("#polls-"+l+"-loading").show(),s.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=process&poll_id="+l+"&poll_"+l+"="+o+"&poll_"+l+"_nonce="+poll_nonce,cache:!1,success:poll_process_success(l)})):(pollsL10n.show_loading&&s("#polls-"+l+"-loading").show(),s.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=process&poll_id="+l+"&poll_"+l+"="+o+"&poll_"+l+"_nonce="+poll_nonce,cache:!1,success:poll_process_success(l)}))})}function poll_result(l){jQuery(document).ready(function(o){poll_nonce=o("#poll_"+l+"_nonce").val(),pollsL10n.show_fading?(o("#polls-"+l).fadeTo("def",0),pollsL10n.show_loading&&o("#polls-"+l+"-loading").show(),o.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=result&poll_id="+l+"&poll_"+l+"_nonce="+poll_nonce,cache:!1,success:poll_process_success(l)})):(pollsL10n.show_loading&&o("#polls-"+l+"-loading").show(),o.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=result&poll_id="+l+"&poll_"+l+"_nonce="+poll_nonce,cache:!1,success:poll_process_success(l)}))})}function poll_booth(l){jQuery(document).ready(function(o){poll_nonce=o("#poll_"+l+"_nonce").val(),pollsL10n.show_fading?(o("#polls-"+l).fadeTo("def",0),pollsL10n.show_loading&&o("#polls-"+l+"-loading").show(),o.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=booth&poll_id="+l+"&poll_"+l+"_nonce="+poll_nonce,cache:!1,success:poll_process_success(l)})):(pollsL10n.show_loading&&o("#polls-"+l+"-loading").show(),o.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=booth&poll_id="+l+"&poll_"+l+"_nonce="+poll_nonce,cache:!1,success:poll_process_success(l)}))})}function poll_process_success(l){return function(o){jQuery(document).ready(function(s){s("#polls-"+l).replaceWith(o),pollsL10n.show_loading&&s("#polls-"+l+"-loading").hide(),pollsL10n.show_fading&&s("#polls-"+l).fadeTo("def",1)})}}pollsL10n.show_loading=parseInt(pollsL10n.show_loading),pollsL10n.show_fading=parseInt(pollsL10n.show_fading);

}
/*
     FILE ARCHIVED ON 05:19:34 Apr 29, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:50:49 Sep 23, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.482
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 171.781
  LoadShardBlock: 823.812 (3)
  PetaboxLoader3.datanode: 900.936 (4)
  load_resource: 152.122
*/