var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var currentPanel;

function setPanel(panel)
{
	currentPanel = panel;
	document.getElementById(panel).style.display = 'block';
	document.getElementById('events_search').className = 'current';
}

function switchPanel(opt)
{
	document.getElementById(currentPanel).style.display = 'none';
	document.getElementById(opt).style.display = 'block';
	currentPanel = opt;
}

function submitForm ( frm, btn )
{
	if (btn && document.forms[frm].which_button) document.forms[frm].which_button.value = btn;
	document.forms[frm].submit();
}

function submitFormAjax(form_name, button, success)
{
    var dataString = '';
    document.forms[form_name].which_button.value = button;
    $('form[name="'+form_name+'"]  input[type!="submit"]').each(function () {
       dataString += $(this).attr('name') + '=' + $(this).val() + '&';
    });

    $.post('/user/login', dataString+'ajax=ajax',
        function (data) {
            if (data['errors']) {
                var error_div = $('#' + button + '-errors');
                error_div.hide();
                error_div.html('<p>' + data['errors'][button] + '</p>');
                error_div.show();

                // If we have errors we need to regenerate the captcha
                $('img[alt="Captcha"]').attr('src', '/captcha/default');
                $('#veriword').val('');
            } else {
                if (typeof success != "undefined") {
                    success();
                } 
            }
       
        }, 'json');

}

function setState(tab)
{
	document.getElementById('events_search').className = '';
	document.getElementById('organizations_search').className = '';
	document.getElementById('venues_search').className = '';
	document.getElementById('members_search').className = '';
	document.getElementById('classifieds_search').className = '';
	document.getElementById('businesses_search').className = '';
	document.getElementById('public_art_search').className = '';
	document.getElementById(tab).className = 'current';
}

//----------------------- Begin advanced search functions --------------------------

function showForm(whichForm)
{
	//hide visible form, show selected form,
	//set tab
	hideForms();
	hideTabs();
	document.getElementById(whichForm + '_search_form').style.display = 'block';
	document.getElementById(whichForm + '_tab').className = 'selected';
}

function hideForms()
{
	//hide all the forms
	var theForms = document.getElementById('info').getElementsByTagName('form');
	for (i = 0 ; i < theForms.length ; i++)
	{
		theForms[i].style.display = 'none';
	}
}

function hideTabs() {
	var theTabs = document.getElementById('info_nav').getElementsByTagName('li');
	for (i = 0 ; i < theTabs.length ; i++)
	{
		theTabs[i].className = '';
	}
}

//----------------------- End advanced search functions ----------------------------

//----------------------- Begin home page functions --------------------------------
// Removed by Matt B. -- buggy
//----------------------- End home page functions ----------------------------------

// For the popup calendar
function disablePastDates(date, y, m, d)
{
	var nowDate = new Date();
	var nowYear = nowDate.getFullYear();
	var nowMonth = nowDate.getMonth();
	var nowDay = nowDate.getDate();

	if      (y < nowYear)	return true;
	else if (y > nowYear)	return false;
	else if (m < nowMonth)	return true;
	else if (m > nowMonth)	return false;
	else if (d < nowDay)	return true;
	else					return false;
}

function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr;
	for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
	var d=document;
	if(d.images){
		if(!d.MM_p) d.MM_p=new Array();
		var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
		for(i=0; i<a.length; i++) {
			if (a[i].indexOf("#")!=0){
				d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];
			}
		}
	}
}

function MM_findObj(n, d) { //v4.01
	var p,i,x;
	if(!d) d=document;if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);
	}
	if(!(x=d[n])&&d.all) x=d.all[n];
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n);
	return x;
}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){
		document.MM_sr[j++]=x;
		if(!x.oSrc) x.oSrc=x.src;x.src=a[i+2];
	}
}

function popupWindow(url, width, height) {
	var width = width || 350;
	var height = height || 254;
	window.open(url,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=np,resizable=yes,copyhistory=no,width=' + width + ',height=' + height + ',screenX=150,screenY=150,top=150,left=150');
	return false;
}

function popupReview(url) {
	window.open(url,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=720,height=525,screenX=150,screenY=150,top=150,left=150');
	return false;
}

function writeReviewPopup() {

	var eventsDropDown = document.getElementById('popupEventID');
	var eventID = eventsDropDown.options[eventsDropDown.selectedIndex].value;

	if (eventID != '') {
		popupReview('/review_form/edit/' + eventID);	
	}
}

function eaWindow(url) {
	window.open(url,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=np,resizable=no,copyhistory=no,width=350,height=245,screenX=150,screenY=150,top=150,left=150')
}

function uploadWindow(url) {
	if(submit.image.value != "")upload= window.open(url,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=np,resizable=yes,copyhistory=no,width=400,height=400,screenX=150,screenY=150,top=150,left=150')
}

function galleryPopupWindow(url) {
	window.open(url,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=np,resizable=yes,copyhistory=no,width=603,height=581,screenX=150,screenY=150,top=150,left=150')
}

function videoPopupWindow(date, id) {
	window.open('video_popup.php?date=' + date + '&id=' + id,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=np,resizable=no,copyhistory=no,width=340,height=330,screenX=150,screenY=150,top=150,left=150')
}

function openTafWindow()
{
    var pathname = window.location.pathname;
    pathname = pathname.replace(/\//g, ':');
    window.open('/taf/prep/' + escape(pathname) + '/','blank','toolbar=no,width=660,height=211,left=50,top=50');
}

function openReportWindow()
{
    var pathname = window.location.pathname;
    pathname = pathname.replace(/\//g, ':');
    window.open('/submit/report/index/' + escape(pathname) + '/','blank','toolbar=no,width=400,height=700,left=50,top=50');
}

function openTafBookmarksWindow(form)
{
	if($('input[name*=bookmarks_ids]:checked').length > 0)
	{
		$('#confirmation').fadeOut();
		var bookForm = document.forms[form];
		var windowName = "TafBookmark"; 
		var windowStyle = "toolbar=no,width=700,height=480,left=50,top=50";
		var oldAction = bookForm.action; 
		var oldTarget = bookForm.target;
		bookForm.action = "/taf/prep/bookmarks"; 
		bookForm.target = windowName;
		window.open("about:blank", windowName, windowStyle);
		document.forms[form].submit();
		bookForm.action = oldAction; 
		bookForm.target = oldTarget;
	} else {
		$('#confirmation').fadeIn();
	}
}

function closeUpload(url) {
	upload= window.open(url,'popupWindow','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=np,resizable=yes,copyhistory=no,width=400,height=400,screenX=150,screenY=150,top=150,left=150');
	upload.close();
}

function closeWindow(target) {
	target.close();
}

function deleteConfirm() {
	return confirm("Are you sure that you want to delete this record?");
}

function shortCuts() {
	if (event.ctrlKey != true) return;
	strSelection = document.selection.createRange().text;
	if (event.keyCode == 1) ahrefThis();
	if (event.keyCode == 2) boldThis(2);
	if (event.keyCode == 20) italicThis(2);
}

function findEventLink() {
	strSelection = document.selection.createRange().text
	if (strSelection == "")document.form.description.focus()
	window.open("findEventLink.php?key="+strSelection,"findlink","toolbar=no,location=no,scrollbars=auto,width=600,height=30,left='+leftPos+',top=100,alwaysRaised=true");
}

function findOrgLink() {
	strSelection = document.selection.createRange().text
	if (strSelection == "")document.form.description.focus()
	window.open("findOrgLink.php?key="+strSelection,"findOrglink","toolbar=no,location=no,scrollbars=auto,width=600,height=30,left='+leftPos+',top=100,alwaysRaised=true");
}

function getID() {
	strSelection = document.cast.artistID0.value
	if (strSelection == "")document.cast.artistID0.focus()
	window.open("findArtistID.php?key="+strSelection,"getID","toolbar=no,location=no,scrollbars=auto,width=600,height=30,left='+leftPos+',top=100,alwaysRaised=true");
}



function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0 ;i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

function hasCookiesEnabled() {
	var tmpcookie = new Date();
	testcookie = (tmpcookie.getTime() + '');
	document.cookie = "testcookie=" + testcookie + "; path=/";
	if (document.cookie.indexOf(testcookie, 0) < 0) {
		return false;
	}
	else {
		return true;
	}
}

function collapseReview(reviewID) {
	document.getElementById('longReview' + reviewID).style.display = 'none';
	document.getElementById('shortReview' + reviewID).style.display = 'inline';
	return false;
}

function expandReview(reviewID) {
	document.getElementById('longReview' + reviewID).style.display = 'inline';
	document.getElementById('shortReview' + reviewID).style.display = 'none';
	return false;
}

function collapseReport(ids) {
	var arr_id = ids.split(",");
	for(i = 0; i < arr_id.length; i++){
		document.getElementById('expandReport' + arr_id[i]).style.display = 'none';
	}
	
	return false;
}

function expandReport(ids) {
	var arr_id = ids.split(",");
	for(i = 0; i < arr_id.length; i++){
		document.getElementById('expandReport' + arr_id[i]).style.display = 'inline';
	}
	return false;
}

function expandParentDiv(el) {
    var $collapsed = $(el).closest('div.collapsed_content');
    $collapsed.siblings('div.expanded_content').toggle();;    
    $collapsed.toggle();
}

function collapseParentDiv(el) {
    var $expanded   = $(el).closest('div.expanded_content');
    $expanded.siblings('div.collapsed_content').toggle();
    $expanded.toggle();
}

function expandBlock(elemID) {
	document.getElementById(elemID).style.display = 'inline';
	return false;
}

function collapseBlock(elemID) {
	document.getElementById(elemID).style.display = 'none';
	return false;
}

var currentPanel;
function setPanel(panel) {
	currentPanel = panel;
	document.getElementById(panel).style.visibility = 'visible';
	switch(panel) {
		case 'search-events':
			document.advSearch.category.selectedIndex=0;
			return;
		case 'search-orgs':
			document.advSearch.category.selectedIndex=1;
			return;
		case 'search-venues':
			document.advSearch.category.selectedIndex=2;
			return;
		case 'search-artists':
			document.advSearch.category.selectedIndex=3;
			return;
		case 'search-auditions':
			document.advSearch.category.selectedIndex=4;
			return;
		case 'search-classifieds':
			document.advSearch.category.selectedIndex=5;
			return;
		case 'search-classes':
			document.advSearch.category.selectedIndex=6;
			return;
		case 'search-businesses':
			document.advSearch.category.selectedIndex=7;
			return;
		case 'search-publicart':
			document.advSearch.category.selectedIndex=8;
			return;
		case 'search-users':
			document.advSearch.category.selectedIndex=9;
			return;
		default:
			document.advSearch.category.selectedIndex=0;
			return;
	}
}

function switchPanel(opt) {
	document.getElementById(currentPanel).style.visibility = 'hidden';
	document.getElementById(opt).style.visibility = 'visible';
	currentPanel = opt;
}

function validatefrm(frm)
{
	if (frm.nameFirst.value == '')
	{
		alert('Please enter a value for the "First Name" field.');
		frm.nameFirst.focus();
		return (false);
	}

	if (frm.nameFirst.value.length > 50)
	{
		alert('Please enter at most 50 characters in the "First Name" field.');
		frm.nameFirst.focus();
		return (false);
	}

	if (frm.nameLast.value == '')
	{
		alert('Please enter a value for the "Last Name" field.');
		frm.nameLast.focus();
		return (false);
	}

	if (frm.nameLast.value.length > 50)
	{
		alert('Please enter at most 50 characters in the "Last Name" field.');
		frm.nameLast.focus();
		return (false);
	}

	if (frm.fromAddress.value == '')
	{
		alert('Please enter a value for the "email" field.');
		frm.email.focus();
		return (false);
	}

	if (frm.fromAddress.value.length > 50)
	{
		alert('Please enter at most 50 characters in the "email" field.');
		frm.fromAddress.focus();
		return (false);
	}

	return (true);
}

function textCounter(field, countfield, maxlimit)
{
	if (field.value.length > maxlimit)
		field.value = field.value.substring(0, maxlimit);
	else
		countfield.value = maxlimit - field.value.length;
}

function checkEmailFormat(val)
{
	emailEntered = val;

	if (emailEntered == '')
	{
		return false;
	}

	if (RegExp)
	{
		regexp1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)|( )/i;
		regexp2 = /^.+\@(\[?)[-a-zA-Z0-9\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
		if (regexp1.test(emailEntered) == true)
		{
			return false;
		}
		else if (regexp2.test(emailEntered) == false)
		{
			return false;
		}
		else
		{
			return true;
		}
	// this part is crap
	}
	else
	{
		spaceExists = 0;
		atExists = 0;
		dotExists = 0;

		for (x = 0; x < emailEntered.length ; x++)
		{
			if (emailEntered.charAt(x) == " ")
			{
				spaceExists++;
			}
			else if (emailEntered.charAt(x) == "@")
			{
				atExists++;
			}
			else if (emailEntered.charAt(x) == ".")
			{
				dotExists++;
			}
		}

		if ((atExists == 1) && (dotExists > 0) && (spaceExists == 0))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

function googleMapsLoad(mapDiv, address)
{
	if (GBrowserIsCompatible())
	{
		var map = new GMap2(document.getElementById(mapDiv));
		var geocoder = new GClientGeocoder();

		function showAddress(address)
		{
			geocoder.getLatLng(
				address,
				function(point)
				{
					if (!point)
					{
						//alert(address + " not found");
					}
					else
					{
						map.setCenter(point, 15);
						var marker = new GMarker(point);
						map.addOverlay(marker);
					}
				}
			);
		}

		map.addControl(new GSmallMapControl());
		showAddress(address);
	}
}

// TODO: How do I do this with prototype?
function pageUnload()
{
	// TODO: Only call this function if there is a map loaded...  How?
	GUnload();
}

//HTML toolbar
	
	var thisForm = document.edit;    /* make sure to change the onload handler of the
	 <body> tag to the form you're using!... */
	
	/* YOU CAN ERASE getMozSelection(): 
	It's here for debug purposes only */
	function getMozSelection(txtarea) {
		var selLength = txtarea.textLength;
		var selStart = txtarea.selectionStart;
		var selEnd = txtarea.selectionEnd;
		if (selEnd==1 || selEnd==2) selEnd=selLength;
		return (txtarea.value).substring(selStart, selEnd);
	}
	
	function mozWrap(txtarea, lft, rgt) {
		var selLength = txtarea.textLength;
		var selStart = txtarea.selectionStart;
		var selEnd = txtarea.selectionEnd;
		if (selEnd==1 || selEnd==2) selEnd=selLength;
		var s1 = (txtarea.value).substring(0,selStart);
		var s2 = (txtarea.value).substring(selStart, selEnd)
		var s3 = (txtarea.value).substring(selEnd, selLength);
		txtarea.value = s1 + lft + s2 + rgt + s3;
	}
	
	function IEWrap(lft, rgt) {
		strSelection = document.selection.createRange().text;
		if (strSelection!="") {
		document.selection.createRange().text = lft + strSelection + rgt;
		}
	}
	
	function wrapSelection(txtarea, lft, rgt) {
		if (document.all) {IEWrap(lft, rgt);}
		else if (document.getElementById) {mozWrap(txtarea, lft, rgt);}
	}
	function wrapSelectionWithLink(txtarea) {
		var my_link = prompt("Enter URL:","http://");
		if (my_link != null) {
			lft="<a href=\"" + my_link + "\">";
			rgt="</a>";
			wrapSelection(txtarea, lft, rgt);
		}
		return;
	}	
	

//	document.onkeypress = function (e) {
//	  if (document.all) {
//		key=event.keyCode; txtarea=thisForm.T;
//		if (key == 1) wrapSelectionWithLink(txtarea);
//		if (key == 2) wrapSelection(txtarea,'<b>','</b>');
//		if (key == 20) wrapSelection(txtarea,'<i>','</i>');
//	  }
//	  else if (document.getElementById) {
//	  	ctrl=e.ctrlKey; shft=e.shiftKey; chr=e.charCode;
//	  	if (ctrl) if (shft) if (chr==65) wrapSelectionWithLink(thisForm.T);
//	  	if (ctrl) if (shft) if (chr==66) wrapSelection(thisForm.T,'<strong>','</strong>');
//	  	if (ctrl) if (shft) if (chr==84) wrapSelection(thisForm.T,'<em>','</em>');
//	  }
//	  return true;
//	}

	function mouseover(el) {
		el.className = "raise";
		}
	
	function mouseout(el) {
		el.className = "buttons";
	}
	
	function mousedown(el) {
		el.className = "press";
	}
	
	function mouseup(el) {
		el.className = "raise";
	}

// ------------ Event icons ----------------
var Icons = {
	init: function() {
		$(".eventicon").each(function() {
			var iconId = $(this).attr("id").split("_")[1];
			var descEl = $("#eventicondesc_"+iconId);
			var timeout;
			
			$(this).mouseover(function(e) {
				window.clearTimeout(timeout);
				Icons.hideAll(iconId);
				descEl.fadeIn("fast");
				var pos = $(this).position();
				descEl.css({
					"display": "block",
					"left": (pos.left)+"px",
					"top": (pos.top+20)+"px"
				});
			});
			
			$(descEl).mouseover(function(e) {
				window.clearTimeout(timeout);
			});
			
			var out = function(e) {
				timeout = window.setTimeout(function() {
					descEl.fadeOut("fast", function() {
						descEl.css("display", "none");
					});
				}, 1000);
			};
			$(this).mouseout(out);
			$(descEl).mouseout(out);
		});
	},
	
	hideAll: function(except) {
		$(".eventicon").each(function() {
			var iconId = $(this).attr("id").split("_")[1];
			if(arguments.length && except != iconId) {
				var descEl = $("#eventicondesc_"+iconId);
				descEl.fadeOut("fast", function() {
					descEl.css("display", "none");
				});
			}
		});
	}
};

 //---------------------- Share Activity ---------------------------

function save_shares(network, site_url, user_activity){
    $.post("/user/save_shares", {service: network, url: site_url,  activity: user_activity, title: document.title} );
}
// Detect click on Google+1
function plusClick(data){
    if(data.state=="on"){
        var act = '+1';
        save_shares('google', document.URL, act);
    }
}
 
$(document).ready(function () {
// Detect click on Tweet
	if ((window.__twttrlr) && (typeof twttr != 'undefined')) {
		twttr.ready(function (twttr) {
			twttr.events.bind('click', function(event) {
				var act = event.region;
				save_shares('twitter', document.URL, act);
			});
		});
	}
    
    // Add Facebook "Like" listener
    if (typeof FB != 'undefined') {
        // Detect click on Like
        FB.Event.subscribe('edge.create', function() {
            save_shares('facebook', document.URL, 'like');
        });
        // Detect new comment
        FB.Event.subscribe('comment.create', function() {
            save_shares('facebook', document.URL, 'comment');
        });
    }
    
});

$(document).ajaxComplete(function(){
    try{
    	setTimeout(function(){FB.XFBML.parse();},30000); 
    }catch(ex){}
});

function getMore(someUrl, offset, target, button)
{
    var $parent_div = $(button).parent('div');
    $parent_div.children('img').show();
    $.ajax({
      url: someUrl + '/' + offset,
      dataType: 'text',
      success: function(data) {
        offset++;
        var new_button = "<a onClick=\"getMore('"+someUrl+"', '"+offset+"', '"+target+"', this);\" href=\"javascript:void(0);\" >more [+]</a>";
        // Checks if there are more items
        $.post(someUrl+'/'+offset, {'check' : 1 }, function(response){
            if(response.left < 1) { new_button = ''; }
            // Replaces the "more[+]" button with the new button
            $(button).replaceWith(new_button);
        }, "json");
        $(target).append(data);
        $parent_div.children('img').hide();
        enableEventTooltips('.event_line_listing td a, .more_events_listing td.description h4 a[rel]');
      }
      
    });
    
}

// Add popup preview balloons to line listings
function enableEventTooltips(selectors)
{
	$(selectors).qtip({
		content: {
			text: function(api) {
				return $('#' + $(this).attr('rel')).html();
			}
		},
		style: {
			classes: 'ui-tooltip-light ui-tooltip-rounded ui-tooltip-shadow',
			width: 400,
			tip: {
				width: 9,
				height: 9,
				border: 1
			}
		},
		position: {
			my: 'left center',
			at: 'right center'
		}
		/*, events: {
			hide: function(event, api) {
				event.preventDefault(); // Stop it!
			}
		}*/
	});
}

function regClick(link, entityID, entityType, linkType, fb_link){
	if(!fb_link){
		if (link.attr('target') != '_blank') {
	        link.click(function() { return false });
	    }		
	}
	
    var link_url = (!fb_link) ? link.attr('href') : link;
    
	$.post("/click", { entityID: entityID, entityType: entityType, linkType: linkType, url: link_url },
		function(data){
			if(!fb_link){
				if (link.attr('target') != undefined && link.attr('target') != '_blank') {
					document.location = link.attr('href');				
			}
		}
	});
}
	
function isOutboundLink(link){
	var linkHref = link.href;
	var localBaseUrl = window.location.protocol + '//' + window.location.host;
	var testBaseUrl = linkHref.substr(0, linkHref.indexOf('/', linkHref.indexOf('//') + 2));
	return localBaseUrl != testBaseUrl;
}
}