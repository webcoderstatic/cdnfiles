var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");

   /* global scripting */
   
   jQuery.fn.reverse = [].reverse;
      
   /* switch on geolocated stuff */
   
   var Markers = new Array();
   var infowindow;
   var lat;
   var lon;
   function geo_show(lat,lon)
   {
      console.log('Geolocated.');
      $('.geolocated').show();
      $('#lat').val(lat);
      $('#lon').val(lon);
   }
   
   /* initialize a single map */
   
   function init_map(lat,lon,title)
   {
      var myLatlng = new google.maps.LatLng(lat,lon);
      var myOptions = { zoom: 13, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
      map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
      marker = new google.maps.Marker({ map: map, position: myLatlng, title: title, animation: google.maps.Animation.DROP });
   }

   /* add markers to "what's nearby" map */
            
   function add_markers(lat,lon,dates)
   {
      // console.log('Adding markers for ' + dates + ' @ ' + lat + ', ' + lon);
      /* clear existing markers */

      if (Markers.length > 0)
      {
         for (var i = 0; i < Markers.length; i++) { Markers[i].setMap(null); } 
      }
      Markers = new Array();
         
      var bounds = new google.maps.LatLngBounds();
      
      /* retrieve new list of markers and display */
      
      $.getJSON('/search/json.php?lat=' + lat + '&lon=' + lon + '&dates=' + dates,function(pointfile) 
      {
         $.each(pointfile, function(key, data) 
         {
            var latlon = new google.maps.LatLng(data[1], data[2]);
            var marker = new google.maps.Marker({ map: map, position: latlon, title: data[0], animation: google.maps.Animation.DROP });
            bounds.extend(marker.position);
            
            google.maps.event.addListener(marker, 'click', (function(marker, i) 
            {
               return function() 
               { 
                  infowindow.setContent(data[3]);
                  infowindow.setOptions({maxWidth: 200});
                  infowindow.open(map, marker);
               }
            }) (marker, key));
            Markers[key] = marker;  
         });
         map.fitBounds(bounds);
         var listener = google.maps.event.addListener(map, "idle", function() 
         { 
            zoom = map.getZoom();
            map.setZoom(zoom + 1); 
            google.maps.event.removeListener(listener); 
         });
      });
   }
   
   /* create "what's nearby" map */
      
   function init_map_nearby(lat,lon,dates)
   {
      console.log('Initiating nearby map: ' + dates + ' @ ' + lat + ', ' + lon);
      var myLatlng = new google.maps.LatLng(lat,lon);
      var myOptions = { zoom: 11, center:myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
      map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
      infowindow = new google.maps.InfoWindow();
      add_markers(lat,lon,dates);
      $('#nearbydates, .nearbydates').on('change',function() { add_markers(lat,lon,$(this).val()); });  
   }
   
   /* startup */

   $(function() 
   {
      
      /* replace certain images with proportional divs that use the images as backgrounds */
      
      $('div.tile img').each(function()
      {
         $(this).wrap('<div class="img" style="background-image: url(' + $(this).attr('src') + ');"></div>');
      });

      /* activate sliders */
      
      $('.slider').flickity({ wrapAround: true, resize: true, cellSelector: '.slide', autoPlay: 4000, percentPosition: false, pageDots: true, prevNextButtons: false, cellAlign: 'left' });
      
      /* buttons that are links */
      
      $('input[type=button].link').on('click',function(e) { document.location.href = $(this).attr('tgt'); });
      
      /* confirmation required */
      
      $('.confirm').on('click',function(e) 
      {
         var dialog = ($(this).attr('dialog') ? $(this).attr('dialog') : 'Are you sure? This is not reversible.');
         if (confirm(dialog)) return true;
         else e.preventDefault();
         return false;
      });
      
      /* scroll-to-top control */
       
      $(window).scroll(function()
      {
         if ($(window).scrollTop() > ( $(window).height() * 1.5)) $('a#totop').fadeIn();
         else $('a#totop').fadeOut();
      });
      
      /* smooth scrolling to anchor links */    
      
      $('a[href*="#"]:not([href="#"])').click(function() 
      {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
         {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length && !$(this).hasClass('nosmooth')) 
            { 
               var y = target.offset().top - 80;
               if (y < 0) y = 0;
               $('html, body').animate({ scrollTop: y }, 600);
               return false;
            }
         }
      });
      
      /* activate calendar slider */

      if ($('.calendar').length > 0)
      {
         var $carousel = $('.calendar').flickity({ wrapAround: true, autoPlay: false, cellSelector: '.monthgrid', pageDots: false, prevNextButtons: false });
         $('.calendar a.prev').on('click',function() { $carousel.flickity('previous'); return false; });
         $('.calendar a.next').on('click',function() { $carousel.flickity('next'); return false; });
      }
      
      /* menu modal */
      
      $('.openmenu, #cancelmenu').on('click',function() 
      { 
         $('#menumodal').fadeToggle('fast'); 
      });
      
      /* set search form parameters from hidden fields */
      
      $('#searchbox, .opensearch').on('click',function(e)
      {  
         if ($('#param_terms').length) { $('#modalsearch #terms').val($('#param_terms').val()); }
         if ($('#param_category').length) { $('#modalsearch #category').val($('#param_category').val()); }
         if ($('#param_start').length)
         {
            $('#modalsearch #dates').val('range');
            $('#modalsearch #sdate').val($('#param_start').val());
            $('#modalsearch #edate').val($('#param_end').val());
            $('.daterange').slideDown('fast');
         }
         if ($('#param_lat').length) { $('#regionn').click(); }
         else if ($('#param_region').length) { $('#region' + $('#param_region').val()).click(); }
      });
      
      /* open search modal, stack tiles */
      
      $('#searchbox, .opensearch').on('click',function(e)
      {  
         // $('#searchbox').fadeOut('fast');
         $('#searchmodal .panel').css({ 'opacity':0, 'top':200 });
         $('#searchmodal').fadeIn('fast',function()
         {
            $('#terms').focus();
            $('#searchmodal .panel').each(function(index)
            {
               $(this).delay(index * 100).animate({ opacity: 1, top: 0 },400)
            });
         });
         return false;
      });

      /* unstack panels, close search modal, reinstate search button */
      
      $('#cancelsearch').on('click',function(e)
      { 
         $('#searchmodal .panel').reverse().each(function(index)
         {
            $(this).delay(index * 100).animate({ opacity: 0, top: 200 },400)
         });
         $('.modal').delay(100).fadeOut('fast',function()
         {
            // $('#searchbox').fadeIn('fast');
         }); 
         return false;
      });
      
      /* light selected radio button label, turn off any currently lit */
      
      $('ul input:radio').click(function(e) 
      {
         $(this).closest('ul').find('label.active').removeClass('active');
         $(this).closest('label').addClass('active');
         
         /* regions: light map zone */

         if ($(this).closest('ul').attr('id') == 'regions')
         {
            var rid = $(this).attr('id');
            $('#map').css('background-image','url(/images/' + rid + '.png)');
         }
         
      });
      
      /* show or hide date range pickers */
      
      $('select#dates').change(function() 
      {
         if ($(this).val() == 'range') $('.daterange').slideDown('fast');
         else $('.daterange').slideUp('fast');
      });
      
      /* instantiate date pickers */
 
      $('.datepicker').datepicker(
      { 
         dateFormat: 'DD, MM d, yy', inline: true, autoSize: true, dayNamesMin: ['S','M','T','W','T','F','S'],
         minDate: 0, maxDate: '+1Y'
      });
      $('#mdate').datepicker('option', { onSelect: function(date) { $("#menudate").submit(); } });    
      $('#sdatebtn').click(function(){ $('#sdate').datepicker('show') });
      $('#edatebtn').click(function(){ $('#edate').datepicker('show') });
      $('#mdatebtn').click(function(){ $('#mdate').datepicker('show') });        

      /* trigger date picker with icon */
      
      $('.datebtn').click(function(){ $(this).next('.datepicker').datepicker('show'); });   
      
            
      /* see if we already have user's location */
      
      var loc = Cookies.get('loc');
      var lat = Cookies.get('lat');
      var lon = Cookies.get('lon');
      
      // Cookies.set('loc','0');

      if (loc !== '1') //  && loc !== '0' 
      {
         // not yet found; try to get user's coordinates and turn on location services 

         

      }
      else if (loc == '1')
      {
         geo_show(lat,lon);
      }
      
      /* switch on home page map regardless */
      
      if ($('.map-nearby').length) 
      { 
         if (!lat) var lat = 0;
         if (!lon) var lon = 0;
         google.maps.event.addDomListener(window, 'load', init_map_nearby(lat,lon,'next week')); 
      }

      /* calendar modal date pickers */
      
      var dateFormat = 'mm/dd/yy',
      calsdate = $('#calsdate')
         .datepicker({ dayNamesMin: ['S','M','T','W','T','F','S'],numberOfMonths: 1,minDate: '0', maxDate: '+1Y' })
         .on('change', function() 
         {
            var sdate = getDate(this);
            caledate.datepicker('option','minDate',sdate); 
            $('#calsd').val(sdate);
         }),
      caledate = $('#caledate')
         .datepicker({ defaultDate: '+1w',dayNamesMin: ['S','M','T','W','T','F','S'],numberOfMonths: 1,minDate: '0', maxDate: '+1Y' })
         .on('change', function() 
         { 
            var edate = getDate(this);
            calsdate.datepicker('option','maxDate',edate); 
            $('#caled').val(edate);
         });
      function getDate(element) 
      { 
         var date; 
         try { date = $.datepicker.parseDate(dateFormat,element.value ); } 
         catch(error) { date = null; }
         return date;
      }
      
      /* open calendar modal, stack tiles */
      
      $('#calendarbtn').on('click',function(e)
      {  
         $('#calendarmodal .panel').css({ 'opacity':0, 'top':200 });
         $('#calendarmodal').fadeIn('fast',function()
         {
            $('#calendarmodal .panel').each(function(index)
            {
               $(this).delay(index * 100).animate({ opacity: 1, top: 0 },400)
            });
         });
         return false;
      });

      /* unstack panels, close calendar modal */
      
      $('#cancelcalendar').on('click',function(e)
      { 
         $('#calendarmodal .panel').reverse().each(function(index)
         {
            $(this).delay(index * 100).animate({ opacity: 0, top: 200 },400)
         });
         $('.modal').delay(100).fadeOut('fast',function()
         {
            // $('#searchbox').fadeIn('fast');
         }); 
         return false;
      });
      
      
      /* debounce window resize */
      
      var resizeTimer;
      $(window).on('resize', function(e) 
      {
         clearTimeout(resizeTimer);
         resizeTimer = setTimeout(function() 
         {
            /* re-hide any shown subnav; switch off active menu items */
            
            var wx = $( window ).width();
            if (wx >= 1100)
            {
               $('#nav a').removeClass('current');
               $('#navzone > div').hide();        
            }
         }, 250);
      });
      
     
      /* form validation */
      
      $('.validate').validate();
      $('.phone').rules('add', { minlength: 10 });
      
      /* autocomplete for label:key pairs */

      var directhit = '0';            
      $('.autocomplete').autocomplete(
      {
         source: function (request, response) 
         {
            /* search just orgs by default */
            var scope = 'orgs';
            var attr = this.element.attr('scope');
            if (typeof attr !== typeof undefined && attr !== false) { scope = attr; }
            
            /* key format: id or url */
            var keyformat = 'id';
            var attr = this.element.attr('directhit');
            if (typeof attr !== typeof undefined && attr !== false) 
            {
               if (attr == '1') { keyformat = 'url'; }
            }
                        
            /* perform autocomplete */
            
            var url = '/search/autocomplete.php?q=' + request.term + '&scope=' + scope + '&key=' + keyformat;
                     console.log(url);
            $.getJSON(url, function (data) 
            {
               response($.map(data, function (value, key) 
               {
                  return { label: value, value: key };
               }));
            });
         },
         focus: function(event, ui) 
         {
            event.preventDefault();
            /* $(this).val(ui.item.label); */
         },
         select: function(event, ui) 
         {
            event.preventDefault();
            $(this).val(ui.item.label);
            $(this).siblings('.autocomplete-value').val(ui.item.value);
            
            /* direct hits redirect on selection */
            var directhit = '0';
            var attr = $(this).attr('directhit');
            if (typeof attr !== typeof undefined && attr !== false) 
            { 
               if (attr == '1') document.location = ui.item.value;
            }
         }
      });
      
      /* some fields can be reset with a matching action */
      
      $('input.resetter').each(function()
      {
         var newid = $(this).attr('id') + '-clearcontrol';
         var html = '<a href="#" class="clearcontrol" id="' + newid + '" data-param=\'' + $(this).attr('clearvars') + '\' '
            + 'originator="#' + $(this).attr('id') + '"><i class="fa fa-times-circle"></i></a>';
         $(this).after(html);
         if ($(this).val() == '') $('#' + newid).hide();
         $('#' + newid).on('click',function()
         {
            var orig = $(this).attr('originator');
            $(orig).val('');
            var param = $(this).data('param');
            $.each(param,function(key,value) { $(key).val(value); });
            $(this).hide();
            return false;
         });
         $(this).on('change',function()
         {
            if ($(this).val() == '') $('#' + newid).hide();
            else $('#' + newid).show();
         });
      });
      
      /* wysiwyg editor */
      
      var editorOptions = { removeformatPasted: true, semantic: false, btns: [ ['formatting'], ['bold', 'italic'], ['link'], 
         ['unorderedList', 'orderedList'], ['insertImage'], ['removeformat'], ['viewHTML'], ['fullscreen'] ] };

      $('textarea.wysiwyg').each(function(index) 
      {
         var thisid = $(this).attr('id');
         if (!thisid)
         {
            var thisid = 'texty';
            $(this).attr('id',thisid);
         }
         var thised = thisid + 'editor';
         $(this).hide().after('<div id="' + thised + '">' + $(this).val() + '</div>');
         $('#' + thised).trumbowyg(editorOptions);
                  
         $('form').on('submit',function(event)
         {
            var html = $('#' + thised).html();
            $('#' + thisid).val(html);
            return true;
         });
      });


      
      /* load a form's action into a div */
      
      $('div.ajax').on('submit','form',function() 
      { 
         var target = $(this).attr('target');
         $.ajax({ data: $(this).serialize(), type: $(this).attr('method'), url: $(this).attr('action'), 
            success: function(response) { $(target).html(response); }
         });
         return false;
      });
      
      /* open update form */
      
      $('a.openupdate').on('click',function() { $('#updateform').slideDown(); return true; });
      
      
   });
   
   
}