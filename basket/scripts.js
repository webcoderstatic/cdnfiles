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

window.addEventListener("DOMContentLoaded", function () {
    search_complete();
    backToTop(); 
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dot: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
    })
    load_wishlist_cookies();
    
    
    $('input#search').on('keyup', function () {
            let empty = false;
            $('input#search').each(function () {
                empty = $(this).val().length == 0;
            });

            if (empty) {
                $('#search_game').attr('disabled', 'disabled');
            } else {
                $('#search_game').attr('disabled', false);
                $("#search").on('keyup', function (e) {
                    if (e.keyCode === 13) {
                        window.location.replace("/search?q=" + $("#search").val());
                    }
                    $("#search_game").on('click', function () {
                        window.location.replace("/search?q=" + $("#search").val());
                    });
                });
            }

        }
        );
});
function open_fullscreen() {
    let game = document.getElementById("game-area") || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
            !document.webkitFullscreenElement && !document.msFullscreenElement) {

        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.msRequestFullscreen) {
            game.msRequestFullscreen();
        } else if (game.mozRequestFullScreen) {
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) {
            game.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function backToTop() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('#back-to-top').addClass("show");
        } else {
            $('#back-to-top').removeClass("show");
        }
    });


    $("#back-to-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 40) {
        } else {
        }
    });
}
function search_complete() {
    $("#search").keyup(delay(function (e) {
        var keyword = $("#search").val();
        if (keyword.length >= 3) {
            search_complete(keyword);
        }
    }, 700));
    function search_complete(s) {
        var metadataload = {};
        metadataload.keywords = s;
        jQuery.ajax({
            url: "game-results-search.ajax",
            data: metadataload,
            type: 'GET',
            success: function (data) {
                if (data) {
                    $(".search-results").show();
                    $(".search-results").html(data);
                    var i = $("#search");
                    i.focus(function () {
                        $(".search-results").show()
                    }), i.focusout(function () {
                        setTimeout((function () {
                            $(".search-results").hide()
                        }), 500)
                    })
                }
            }
        });
        if ($("#search").val != '') {
            $("#search").on('keyup', function (e) {
                if (e.keyCode === 13) {
                    window.location.replace("/search?q=" + $("#search").val());
                }
            });
        }

    }
}
function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}
function favorite(e) {
    var image = $(e).data('image');
    var id = $(e).data('id');
    var slug = $(e).data("slug");
    var name = $(e).data("name");
    var rate = $(e).data("rate");
    var favorited;
//    console.log(image + "__" + id + "___" + slug + "\n");
    if ($(e).hasClass('is-favorite')) {
        console.log("Co roi ! Xoa di  ");
        remove_wishlist_cookies(id);
        favorited = true;
        $(e).removeClass("is-favorite");
    } else {
        save_wishlish_cookies(id, slug, image, name, rate);
        $(e).addClass("is-favorite");
        favorited = false;
    }
    let html = '<div class="notification-success"> <div class="success-content"> <div class="success-text"> <span>' + (favorited == true ? "Remove" : "Add") + ' Success Favorite</span> <div class="game-favorite-add"> <img width="50" height="50" src="' + image + '" class="img-fluid"> <span>' + name + '</span> </div> </div></div> </div>';
    $('body').one("click", e, function () {
        notification(html, 1000)
    })
}
function notification(s, time) {
    $(s).appendTo('body').fadeTo(time, 1, function () {
        $(this).fadeTo(1000, 0, function () {
            $(this).remove()
        });
    });
}


function remove_wishlist_cookies(_id) {
    if (!!jQuery.cookie('favorite_game') && _id !== '') {
        var favorite_array = JSON.parse(jQuery.cookie("favorite_game"));
        jQuery.each(favorite_array, function (key, value) {
            favorite_array = favorite_array.filter(function (element) {
                return element !== undefined;
            });
            if (value.id === _id && key > -1)
            {

                favorite_array.splice(key, 1);
            }
        });
        console.log("xoa game favorite");
        jQuery.cookie('favorite_game', JSON.stringify(favorite_array), {expires: 30, path: '/'});
        load_wishlist_cookies();
    }
}

function save_wishlish_cookies(_id, _slug, _image, _name, _rate) {
    var favorites_count = 5;
    if (!!jQuery.cookie('favorite_game') && _slug !== '' && _image !== '' && _id !== '' && _name != '' && _rate != '') {
        var favorite_array = JSON.parse(jQuery.cookie("favorite_game"));
        jQuery.each(favorite_array, function (key, value) {
            if (value !== undefined && value.slug === _slug && key > -1)
            {
                favorite_array.splice(key, 1);
            }
        });
        favorite_array.push(
                {
                    "id": _id,
                    "slug": _slug,
                    "image": _image,
                    "name": _name,
                    "rate": _rate
                }
        );
        if (favorite_array.length > favorites_count)
        {
            favorite_array.shift();
        }
        jQuery.cookie('favorite_game', JSON.stringify(favorite_array), {expires: 30, path: '/'});
    } else {
        var data = [];
        data.push(
                {
                    "id": _id,
                    "slug": _slug,
                    "image": _image,
                    "name": _name,
                    "rate": _rate
                }
        );
        jQuery.cookie('favorite_game', JSON.stringify(data), {expires: 30, path: '/'});
    }
    load_wishlist_cookies();
}
function load_wishlist_cookies() {
    if (!!jQuery.cookie('favorite_game')) {
        var favorites = JSON.parse(jQuery.cookie("favorite_game"));
        var current_url = window.location.pathname;
        var current_slug = "";
        current_slug = current_url.replace("/", "");
        if (favorites.length > 0) {
//Load checked compare 
            var str_wishlist = '';
            var $leng = favorites.length;
            var slug_array = [];
            for (var i = $leng - 1; i >= 0; i--) {
                var value = favorites[i];
                slug_array.push(value.slug + "_" + value.kind);
                str_wishlist += '<div class="games__item"> <div class="card"> <div class="card__inner"> <div class="card__rating"> <span>' + value.rate + '</span> </div> <div class="card__thumb"> <div class="card__overlay"> <span class="card__icon"></span> </div> <img width="200" height="165" src="' + value.image + '" class="img-fluid" alt="' + value.name + '"> </div> <div class="card__content"> <a href="/' + value.slug + '" class="card__title"> ' + value.name + ' </a> </div> </div> </div> </div>'
                if (value.slug === current_slug && !$(".favorites-add-" + value.id).hasClass('is-favorite')) {
                    $(".favorites-add-" + value.id).addClass("is-favorite")
                }
            }
            if (str_wishlist != "")
            {
                jQuery("#game_favorite").html(str_wishlist);
            }
        } else {
            $(".empty_favorite").show();
            $(".empty_favorite").html('<center>No favorite game</center>')
            jQuery("#game_favorite").html('');
        }

    } else {
        $(".empty_favorite").show();
        $(".empty_favorite").html('<center>No favorite game</center>')
        jQuery("#game_favorite").html('');
    }
}

}
/*
     FILE ARCHIVED ON 16:23:39 Feb 01, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:16:38 Nov 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.574
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.015
  esindex: 0.012
  cdx.remote: 6.363
  LoadShardBlock: 93.318 (3)
  PetaboxLoader3.datanode: 117.242 (4)
  load_resource: 46.635
*/