var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
// Dynamically generates a list of available event categories
function listCategories() {
    // Add the user's custom categories first
    $("#modal-dialog").show();

    // Create a new list each time the dialog is opened
    $('#col1, #col2').html(''); 

    var categories = [];
    $('#featured_event_tabs > li').each(function() {
        var html = '<li>'

	var str=($(this).text());
	var n=str.match(/TOP TEN/g);

	 if ( ($(this).attr('id') == 'column-14') || (n == 'TOP TEN') ) {
        html += '<input type="checkbox" id="select-' + $(this).attr('id') + '" checked="checked" disabled/>';
	} else {
        html += '<input type="checkbox" id="select-' + $(this).attr('id') + '" checked="checked" />';
	}
        html += '<label for="select-' + $(this).attr('id') + '">&nbsp;' + $(this).children().text() + "</label>";
        html += '</li>';
        categories.push($(html));
	
    });

    // Append all the other available site categories
    $.ajax({
        async: false,
        url: "/user_categories/site_categories/",
        success: function(data) {
            var cats = eval('(' + data + ')');
            var f = $('ul#selected-categories');
            for (c in cats) {
                var html = '<li>';
		if (cats[c] != 14){
                html += '<input type="checkbox" id="select-column-' + cats[c] +'" />';
                html += '<label for="select-column-' + cats[c] + '">&nbsp;' + c + "</label>";
                html += '</li>';
                categories.push($(html));
		}
            }
        }
    });

    // Now we can split the list into 2 columns
    var break_point = Math.round((categories.length )/ 2);

    $.each(categories, function (index, category) {
        if (index < break_point) {
            $('#col1').append(category);
        } else {
            $('#col2').append(category);
        }
    });

    createSortable();
};

// Updates the tab order when dragged
function updateOrder(event, ui) {
    var order = [];
    $('li[id^="column-"]').each(function () {
        order.push($(this).attr('id').split('-')[1]);
    });

    $.post("/user_categories/update_category_order/", '&order[]='+order.join('&order[]='));
}

// Updates selected categories chosen on 'Select Categories' dialog
function updateSelectedCategories() {
    var order = [];
    $('#category-wrapper input[id^="select-column-"]').each(function () {
        if ($(this).attr('checked')) {
            order.push($(this).attr('id').split('-')[2]);
        }
    });

    $.ajax({
        type: 'POST',
        url: "/user_categories/update_category_order/", 
        data: '&order[]='+order.join('&order[]='),
        async: false
    });
    window.location.reload(true);
}

function createSortable () {
    $( "#category-wrapper" ).sortable({
        connectWith: "ul",
        containment: $("#modal-dialog > .content"),
        items: 'li',
        placeholder: "ui-state-highlight"
    });
};

}