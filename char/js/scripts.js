var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
//Click observe system
var FB_entityType = null;
var TW_entityType = null;
	
$(document).ready(function () {
	$('#content').show();
	
	// Add default text to search boxes
	$('#search_section div.search_section_date input[type="text"]').each(function(){
 
    this.value = $(this).attr('title');
    $(this).addClass('text-label');
 
    $(this).focus(function(){
        if(this.value == $(this).attr('title')) {
            this.value = '';
            $(this).removeClass('text-label');
        }
    });
 
    $(this).blur(function(){
        if(this.value == '') {
            this.value = $(this).attr('title');
            $(this).addClass('text-label');
        }
    });
});
	
    // Add spans into h3s to create tab shapes
    $('.content #content_main h3').not('#category_spotlight h3').not('#item_details h3').not('#description h3').wrapInner('<span></span>');

    $('#info h5').not('h5#highlight').wrapInner('<span></span>');

    $('#info h5#highlight').wrapInner('<span style="background:rgb(255, 0, 0);"></span>');

    // Add span inside content page header h1 to allow for gloss background
    $('.content #content_main h1').wrapInner('<span></span>');

    // Add an inner div to the category spotlight to create the double-border effect
    $('#category_spotlight').wrapInner('<div class="inner"></div>');


    // If the rounded.js file has been included, then round all the corners.
    if (typeof(rounded) != 'undefined' && rounded == true) {
        $('#info h5 span').corner('#fff 5px TR TL');
        $('#content_sub > ul > li').not('.advertisement').not('#calendarsearch-container').corner('10px');
        $('#content_sub > ul > li li').corner('destroy');
        $('#info_bar').corner('10px BR BL');
        $('#main_nav').corner('10px TR TL');
        $('#home_featured_events').corner('10px');
        $('#home_featured_events > ul > li').corner('10px');
        $('#home_featured_events > ul > li ul').corner('destroy');
        $('#content #maincolumnlistA > li').corner('10px');
        $('#content #maincolumnlistB > li').corner('10px');
        $('#site_info > ul > li').corner('10px');
        $('.content #content_main').corner('10px');
        $('#meta_links').wrap('<div class="meta_wrap"></div>').corner('10px TR TL');
        $('#category_spotlight').corner('10px');
        $('#category_spotlight .inner').corner('10px');
        $('.content #content_main h3 span').corner('5px TR TL');
        $('#info > li').corner('10px');
        $('#main_nav li.selected > a').corner('10px TR TL');
        $('#home_spotlight').corner('8px');

        if($("#maincolumnlistC").length) {
            $('#content #maincolumnlistC > li').corner('10px');
        }
    }
	

// Add 'selected' class to top-level LI when it is clicked. This will make the 2nd & 3rd level menus for
	// that item appear and will make the tab appear selected.
    $('#main_nav > li > a').hover(function() {
     		if(typeof(rounded) != 'undefined' && rounded == true) {
                $('#main_nav .selected a').corner('destroy'); /* Get rid of the rounded corner */
    		}
            $('#main_nav li').removeClass('selected');
            $(this).parent().addClass('selected');
     		if(typeof(rounded) != 'undefined' && rounded == true) {
                $('#main_nav .selected > a').corner('10px TR TL'); /* Add the rounded corner */
    		}
    		return false;
    	});


    // Create tabbed navigation on detail pages info section
    $('#info').semantictabs({
        panel: '#info > li',
        //-- Selector of individual panel body
        head: 'h4',
        //-- Selector of element containing panel header
        active: ':first',
        //-- Which panel to activate by default
        activate: false //-- Argument used to activate panel programmatically
    });

    // If the rounded.js file has been included, then round all the corners.
    if (typeof(rounded) != 'undefined' && rounded == true) {
        $('.semtabs').corner('10px TR TL');
        $('.semtabs li.selected').corner('#fff 10px TR TL');
    }

    // Hide full content span and add an ellipsis and a link to expand the full content
    $('.full_content').after('<span class="ellipsis">...</span> <a href="javascript:void(0)" class="expand">Expand</a>').hide();

    $('a.expand').toggle(function () {
        $(this).parent().children('.ellipsis').hide();
        $(this).parent().children('.full_content').show();
        $(this).removeClass('expand').addClass('collapse').text('Collapse');
    }, function () {
        $(this).parent().children('.ellipsis').show();
        $(this).parent().children('.full_content').hide();
        $(this).removeClass('collapse').addClass('expand').text('Expand');
    });

    // #dateBegin and #dateEnd are fields from the events advanced search form ( /advanced_search )
    $('#dateBegin').datepicker({
        showOn: 'both',
        buttonImage: '../images/icon-calendar.gif',
        buttonImageOnly: true

    });

    $('#dateEnd').datepicker({
        showOn: 'both',
        buttonImage: '../images/icon-calendar.gif',
        buttonImageOnly: true
    });

    // Set the start & end input fields to use the jquery UI datepicker.
    $('#start').datepicker({
        showOn: 'both',
        buttonImage: '../images/icon-calendar.gif',
        buttonImageOnly: true,
		onSelect: function(dateText, inst) { $('#start').css('color','black'); }
    });

    $('#end').datepicker({
        showOn: 'both',
        buttonImage: '../images/icon-calendar.gif',
        buttonImageOnly: true,
		onSelect: function(dateText, inst) { $('#end').css('color','black'); }
    });

    // Add popup preview balloons to line listings on category pages
    enableEventTooltips('.event_line_listing td a, .more_events_listing td.description h4 a[rel]');

    // Add popup preview balloons to search event results on search/results pages
    enableEventTooltips('table#search_event_results td a[rel]');

    // Add popup preview balloons to search event results on search/results pages
    enableEventTooltips('table#search_education_results td a[rel]');

    // Add popup preview balloons to poll items
    enableEventTooltips('ul a[rel]');
    
    // Add popup preview balloons to icon items
    enableEventTooltips('h4 a[rel]');    
    

    // Add class="odd" to every other tr in line listing tables
    $('.line_listing tr:even').addClass('even');

    if ($.browser.msie) {
        $('.image_listing tr:last-child td').css({
            'padding-bottom': '0'
        });
    }


// Add new code to create "more" tab if events only have been selected in admin

	var site_width = 990;
	
		var totalWidth =0;
		var toobig = 0;

		$("#main_nav > li").each(function() {
		 totalWidth += $(this).outerWidth();
		});

	  if (totalWidth > site_width) toobig=1;

      eventonly = $('#main_nav').hasClass('events_only');	
      if (eventonly && toobig){

	   $("#main_nav").each(function() {

    		var $ul = $(this).addClass("column01"), 
        	$lis = $ul.children(), 
        	mid =0;

			var totalWidth =0;
			$("#main_nav > li").each(function() {
		 	totalWidth += $(this).outerWidth();
		 	if (totalWidth > 900) {return;} 
		 	mid++;
		});
        
    	$lis.each(function(i) {
        i == mid && $(".column01").append('<li class="more_tabs dropdown" style="visibility: visible;"><a href="javascript:void(0);">More</a><ul class="more_tabs"></ul></li>');  
        i >= mid && $(this).css('visibility','visible'); $("#main_nav").find('ul.more_tabs').append($(this));    
    	 });
     
   		$('#header').css('overflow','visible');
      });
	
	} 



    // Check the width of the 2nd level nav. If it is too wide, add line breads and the "two-line" class to menu items until it is narrow enough.
if ( typeof( window[ 'site_width' ] ) == "undefined" ) {
				site_width = 990;
   }

   // Adds the "selected" class to all the items to get the same result and saves the original "selected" into "selectedLi"
   var selectedLi = $('#main_nav > li.selected');
   $('#main_nav > li').each(function (){ $(this).addClass('selected'); });
   
   $('#main_nav > li > ul').parent().addClass('dropdown');

   $('#main_nav > li > ul').each(function () {
        $('#main_nav li li ul').parent().addClass('dropdown');
        var currentNav = $(this);
        var currentNavWidth = getNavWidth($(this));
        if (currentNavWidth > site_width) {
            // Get the overage in width
            var widthDifference = currentNavWidth - site_width;

            // Find all 2nd level nav items that have ampersands in them.
            var navItemsWithAmps = $(this).children('li:contains("&")').length;
            var amountToSubtract = widthDifference / navItemsWithAmps;

            // Insert a break after the ampersand and add a class of "two_line".
            $(this).children('li:contains("&")').each(function () {
                $(this).children('a').each(function () {
                    if (getNavWidth(currentNav) < site_width-20) {
                        return;
                    }
                    $(this).html($(this).html().replace('&amp;', '&amp;<br />')).addClass('two_line');
                });
            });
        }

        // If the nav is still too wide, insert breaks and add "two_line" class into any menu items with spaces.
        if (getNavWidth($(this)) > site_width) {
            $(this).children('li:contains(" ")').not('li:contains("&")').each(function () {
                $(this).children('a').each(function () {
                    if (getNavWidth(currentNav) < site_width) {
                        return;
                    }
                    //$(this).html($(this).html().replace(' ', '<br />')).addClass('two_line');
                });
            });
        }

        // If it's still too wide, pack the last few LIs into a "more" menu.
        if (getNavWidth($(this)) > site_width) {
            // Create "more" LI.
            $(this).append('<li class="more_tabs"><a href="javascript:void(0);">More</a><ul class="more_tabs"></ul></li>');

            // Find all the LIs and put them in a variable.
            var allListItems = $(this).children('li');

            // For each list item, take the last one in the list and append it to the "more" dropdown.
            var i = 0;
            for (i = allListItems.length - 2; i > 0; i--) {
                if (getNavWidth(currentNav) < site_width) {
                    return;
                }
                allListItems.eq(i).children('a').removeClass('two_line').children('br').replaceWith(' ');
                currentNav.find('ul.more_tabs').append(allListItems.eq(i));
            }
        }
		$('#main_nav li ul li').css('visibility','visible'); // nav fix
		$('#header').css('overflow','visible'); // nav fix
		$('#main_nav > li > ul').css('width',site_width + 'px'); // nav fix
    });

    // Removes the "selected" class for all the not-selected items
    $('#main_nav > li').each(function (){ $(this).removeClass('selected'); });
    selectedLi.addClass('selected');

    $('#main_nav > li > ul').children('li:has(br)').children('a').css({
        'line-height': '14px',
        'padding-top': '5px',
        'padding-bottom': '5px'
    });

    function getNavWidth(nav) { // The width does not matter when the sub-menu is Horizontal
        var navWidth = 0;
        if( nav.css('left') == '-9999px' ){ // Menu with VERTICAL sub-menus
			nav.children('li').each(function () {
				if(navWidth < $(this).width()){
					navWidth = $(this).width();
				}
			});
        } else { // Menu with HORIZONTAL sub-menus
			nav.children('li').each(function () {
				navWidth += $(this).width();
			});
		}
        return navWidth;
    }

    // Sets all sub-menu LIs to the width of the largest one
    $('#main_nav.events_only li li').width('100%');

    // Add a class of 'dropdown' to any top nav items that have subcategories
    $('#main_nav li li ul').parent().children('a').wrapInner('<span></span>');
    
    // Observe clicks on outbound clicks
    $(".tw_link, .fb_link, .buy_tickets, .official_web_site, .artist_email, .artist_web_site, .artist_blog, .top_ten_event, .facebook_like, .attending, .donation, .button_donate, .twitter, .bookmark, .discount_tickets, #bookmark_btn, .tools-favorites").click(function (e){
		if($(this).attr('href') == '/user/bookmarks')
			return false;
		
		regClick($(this), $(this).attr('entityid'), $(this).attr('entitytype'), $(this).attr('linktype'));
	});
	
	if ((window.__twttrlr) && (typeof twttr != 'undefined')) {
		twttr.ready(function (twttr) {
			twttr.events.bind('click', function(event) {
				var url = document.URL;
				var substr = url.split('/');
				var size = substr.length;
				if(!size)
					return false;
				var entity_id = substr[size -2];
				regClick(url, entity_id, FB_entityType, 'twitter', true);
			});
		});
	}
    
    if (typeof FB != 'undefined') {
		FB.Event.subscribe('edge.create',
			function(url) {
				if(!FB_entityType)
					return false;
				
				var substr = url.split('/');
				var size = substr.length;
				if(!size)
					return false;
				var entity_id = substr[size -3];
				
				regClick(url, entity_id, FB_entityType, 'facebook_like', true);
			}
		);
	}
	
});

function submitForm(frm, btn) {
    if (btn && document.forms[frm].which_button) document.forms[frm].which_button.value = btn;
    document.forms[frm].submit();
}

// Resume actions after Facebook Login
var after_fb_login = '';
$(document).ready(function(){
	$('a.login-photo').mousedown(function (){
		after_fb_login = "$('a.photo_up').trigger('click');";
	} );
	
	$('a.login-video').mousedown(function (){
		after_fb_login = "$('a.video_up').trigger('click');";
	} );
});


// Rate an event with the STARS RATING
function rateEvent() {
	// Detect the eventID of the rated event
	var	eventID = $(this).parent('span').attr('class').match(/(?:stars-(\d+))/)[1];
	if( ! eventID){ return FALSE; } //console.log(eventID);
	
    if (typeof logged_in == undefined) {
        this_star = $(this);
        var star_title = $(this).attr('title')
        after_fb_login = "$('.stars-'+eventID+' > a[title=\""+star_title+"\"]').trigger('click');";
        // Redefine the after_login function to update the review before
        // redirecting back to the homepage
        tmp = window.after_login;
        window.after_login = function() {
            // When we trigger the click event on this element we need to
            // be 'logged in' so this block won't get executed again
            logged_in = 1;
            this_star.trigger('click');
            tmp();
        }
        $('#login-form').trigger('click');
        return;
    }

	$('#login').hide();
    var rating = $('.stars-'+eventID+' > a').index(this) + 1;
    if(rating > 5){ rating = rating - 5; }
    var itemID = eventID;
    var url = '/review_form/ajax_save';

    if (window.reviewed[eventID][0] == 1) {
        url = '/review_form/ajax_update/';
        itemID = window.reviewed[eventID][1];
    }

    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: 'itemID='+itemID+'&rating='+rating,
        success: function(data) {
            window.reviewed[eventID][0] = 1;
            window.reviewed[eventID][1] = data;
			$('#zap-'+eventID).click();
            $.ajax({
                url: '/review_form/update_rating/'+eventID,
                success: function(data) {
                    $('.rating-'+eventID).html(data);
                }
            });
        }
    });
}

// Cancell a rating just made
function cancelRating() {
	// Detect the eventID of the rated event
	var	eventID = $(this).attr('id').match(/(?:cancel-rating-(\d+))/)[1];
	if( ! eventID){ return FALSE; } //console.log(eventID);
	
    if (window.reviewed[eventID][0] != 1) {
        return;
    } else {
        var itemID = window.reviewed[eventID][1];
    }

    $.ajax({
        url: '/review_form/ajax_delete/',
        type: 'post',
        data: 'itemID='+itemID,
        success: function() {
            window.reviewed[eventID][0] = 0;
            $.ajax({
                url: '/review_form/update_rating/'+eventID,
                success: function(data) {
                    $('.rating-'+eventID).html(data);
                }
            });
        }
    });
}

// Star hover effect
function starsHover() {
	// Detect the eventID of the rated event
	var	eventID = $(this).parent('span').attr('class').match(/(?:stars-(\d+))/)[1];
	if( ! eventID){ return FALSE; } //console.log(eventID);
	
	$('.stars-'+eventID+' .review').css('width', '0');
    var idx = $('.stars-'+eventID+' a').index(this);
    //if(idx > 5){ idx = idx - 5; }
    $('.stars-'+eventID+' a:lt('+(idx+1)+')').addClass('rated');
}

// Restore the previous rating before mouse hover
function starsRestore() {
	// Detect the eventID of the rated event
	var	eventID = $(this).parent('span').attr('class').match(/(?:stars-(\d+))/)[1];
	if( ! eventID){ return FALSE; } //console.log('mouseout: '+eventID);
	
    $('.stars-'+eventID+' a').removeClass('rated');
    $('.stars-'+eventID+' .review').css('width', (window["avg_" + eventID] * 20)+'%');
}

}