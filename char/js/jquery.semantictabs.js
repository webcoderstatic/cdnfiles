var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
jquery.semantictabs.js
Creates semantic tabs from nested divs
Chris Yates

Inspired by Niall Doherty's jQuery Coda-Slider v1.1 - http://www.ndoherty.com/coda-slider

Usage:
$("#mycontainer").semantictabs({
  panel:'mypanelclass',         //-- Selector of individual panel body
  head:'headelement',           //-- Selector of element containing panel header
  active:':first',              //-- Which panel to activate by default
  activate:':eq(2)'             //-- Argument used to activate panel programmatically
});

1 Nov 2007
*/

jQuery.fn.semantictabs = function(passedArgsObj) {
  /* defaults */
  args = {panel:'.panel', head:'h2', active:':first', activate:false};

  /* override the defaults if necessary */
  for (var argName in passedArgsObj) {
    args[argName] = passedArgsObj[argName];
  }
  
  // Allow activation of specific tab, by index
	if (args.activate) {
	  return this.each(function(){
	    var container = jQuery(this);
			jQuery('.selected').corner('destroy');
			container.parent().find(args.panel).css({'display':'none'});
			container.find("ul.tabs li").removeClass("selected");
			
			container.parent().find(args.panel + ":eq(" + args.activate + ")").css({'display':'block'});
			container.find("ul.tabs li:eq(" + args.activate + ")").addClass("selected").corner('#fff 10px TR TL');
			//jQuery(this).addClass("selected").corner('#fff 10px TR TL');
	  });
	} else {
    return this.each(function(){
  		// Load behavior
  		var container = jQuery(this);
		// Find all of the panels and hide them
  		container.parent().find(args.panel).css({'display':'none'});
		// Show the default activated panel
  		$(args.panel + args.active).css({'display':'block'});
  		// 
  		var count_panel = 0;
  		$(args.panel).each( function() {
 			  // Find the text inside the head
 	  		  var title = $(this).find(args.head).html();
 			  if (title == null) {
 				 count_panel = count_panel + 1;
 			  }
	  		});
		// Create the semtabs nav
  		if (count_panel == $(args.panel).size())
  		{
  			container.prepend("<ul class=\"tabs\"></ul>");
  		}
  		else
  		{
  			container.prepend("<ul class=\"tabs semtabs\"></ul>");
  		}
		// For each panel...
 		$(args.panel).each( function() {
		  // Find the text inside the head
  		  var title = $(this).find(args.head).html();
		  if (title != null) {
			this.title = title;
			// Build each of the semtabs links
  			container.find("ul.tabs").append("<li id=\"li_" + this.id + "\"><a href=\"javascript:void(0);\" style=\"word-wrap: break-word\">"+title+"</a></li>");
		  }
  		});
  		container.find("ul li" + args.active).addClass("selected");
  		// Tab click behavior
  		container.find("ul.tabs li").click(function(){
  			$(args.panel).css({'display':'none'});
if ( typeof( window[ 'rounded_info_tabs' ] ) == "undefined" ) {
				jQuery('.selected').corner('destroy'); 
   } 
			container.find("ul.tabs li").removeClass("selected");
  			var sId = jQuery(this).attr('id').substr(3)
  			$(args.panel + "[id='"+sId+"']").css({'display':'block'});
  			jQuery(this).addClass("selected").corner('#fff 10px TR TL');
	});                                
  		container.find("#remtabs").click(function(){
  			container.find("ul.tabs").remove();
  			container.find(args.container + " " + args.panel).css({'display':'block'});
  			container.find("#remtabs").remove();
  		});
  	});
	}
		
};

}