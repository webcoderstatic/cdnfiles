var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
((window) => {
  const { document } = window;

  const pageQueryParam = "driveWebPage";
  const pagePathnames = new Map();
  pagePathnames.set("", "/");
  pagePathnames.set("location", "/location");
  pagePathnames.set("time", "/time");
  pagePathnames.set("review", "/review");
  const forwardedQueryParams = new Set([
    "campaignProvider",
    "modelFamily",
    "modelYear",
    "timePreference",
    "driveType",
  ]);

  let frame = null;

  // Jump.js functionality for smooth scroll ---------------

  // Robert Penner's easeInOutQuad

  // find the rest of his easing functions here: http://robertpenner.com/easing/
  // find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

  var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  var _typeof =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (obj) {
          return typeof obj;
        }
      : function (obj) {
          return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
        };

  var jumper = function jumper() {
    // private variable cache
    // no variables are created during a jump, preventing memory leaks

    var element = void 0; // element to scroll to                   (node)

    var start = void 0; // where scroll starts                    (px)
    var stop = void 0; // where scroll stops                     (px)

    var offset = void 0; // adjustment from the stop position      (px)
    var easing = void 0; // easing function                        (function)
    var a11y = void 0; // accessibility support flag             (boolean)

    var distance = void 0; // distance of scroll                     (px)
    var duration = void 0; // scroll duration                        (ms)

    var timeStart = void 0; // time scroll started                    (ms)
    var timeElapsed = void 0; // time spent scrolling thus far          (ms)

    var next = void 0; // next scroll position                   (px)

    var callback = void 0; // to call when done scrolling            (function)

    // scroll position helper

    function location() {
      return window.scrollY || window.pageYOffset;
    }

    // element offset helper

    function top(element) {
      return element.getBoundingClientRect().top + start;
    }

    // rAF loop helper

    function loop(timeCurrent) {
      // store time scroll started, if not started already
      if (!timeStart) {
        timeStart = timeCurrent;
      }

      // determine time spent scrolling so far
      timeElapsed = timeCurrent - timeStart;

      // calculate next scroll position
      next = easing(timeElapsed, start, distance, duration);

      // scroll to it
      window.scrollTo(0, next);

      // check progress
      timeElapsed < duration
        ? window.requestAnimationFrame(loop) // continue scroll loop
        : done(); // scrolling is done
    }

    // scroll finished helper

    function done() {
      // account for rAF time rounding inaccuracies
      window.scrollTo(0, start + distance);

      // if scrolling to an element, and accessibility is enabled
      if (element && a11y) {
        // add tabindex indicating programmatic focus
        element.setAttribute("tabindex", "-1");

        // focus the element
        element.focus();
      }

      // if it exists, fire the callback
      if (typeof callback === "function") {
        callback();
      }

      // reset time for next jump
      timeStart = false;
    }

    // API

    function jump(target) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // resolve options, or use defaults
      duration = options.duration || 1000;
      offset = options.offset || 0;
      callback = options.callback; // "undefined" is a suitable default, and won't be called
      easing = options.easing || easeInOutQuad;
      a11y = options.a11y || false;

      // cache starting position
      start = location();

      // resolve target
      switch (typeof target === "undefined" ? "undefined" : _typeof(target)) {
        // scroll from current position
        case "number":
          element = undefined; // no element to scroll to
          a11y = false; // make sure accessibility is off
          stop = start + target;
          break;

        // scroll to element (node)
        // bounding rect is relative to the viewport
        case "object":
          element = target;
          stop = top(element);
          break;

        // scroll to element (selector)
        // bounding rect is relative to the viewport
        case "string":
          element = document.querySelector(target);
          stop = top(element);
          break;
      }

      // resolve scroll distance, accounting for offset
      distance = stop - start + offset;

      // resolve duration
      switch (_typeof(options.duration)) {
        // number in ms
        case "number":
          duration = options.duration;
          break;

        // function passed the distance of the scroll
        case "function":
          duration = options.duration(distance);
          break;
      }

      // start the loop
      window.requestAnimationFrame(loop);
    }

    // expose only the jump method
    return jump;
  };
  const jump = jumper();

  // End of Jump.js functionality for smooth scroll ---------------

  function refreshFrameReference() {
    if (frame && document.contains(frame)) {
      return false;
    }

    const allowedHosts = [
      "testdrive.hyundaidrive.com",
      "web-stage.hyundaidrive.com",
    ];

    const allowedOriginSelector = `iframe:is(${allowedHosts
      .map((host) => `[src^="https://${host}/"],[src^="http://${host}/"]`)
      .concat(
        window.location.protocol === "https:"
          ? allowedHosts.map((host) => `[src^="//${host}"]`)
          : []
      )
      .join(",")})`;

    const newIframe =
      document.querySelector(allowedOriginSelector) ??
      document.querySelector(
        "iframe:is([data-drive-web-iframe],#drive-web-iframe)"
      );

    if (!newIframe) {
      frame = null;
      return false;
    }
    frame = newIframe;
    return true;
  }

  function forwardQueryParams() {
    if (!frame?.src) {
      return false;
    }

    const parentParams = new URLSearchParams(window.location.search);
    const childUrl = new URL(frame.src);

    let newChildUrl = null;

    const newPage = parentParams.get(pageQueryParam);
    if (newPage !== null) {
      const newPathname = pagePathnames.get(newPage);
      if (newPathname !== undefined && newPathname !== childUrl.pathname) {
        newChildUrl = new URL(childUrl);
        newChildUrl.pathname = newPathname;
      }
    }

    for (const param of forwardedQueryParams) {
      const paramValue = parentParams.get(param);
      if (
        paramValue !== null &&
        paramValue !== childUrl.searchParams.get(param)
      ) {
        if (newChildUrl === null) {
          newChildUrl = new URL(childUrl);
        }
        newChildUrl.searchParams.set(
          param,
          encodeURIComponent(decodeURIComponent(paramValue))
        );
      }
    }

    if (childUrl.protocol === "http:") {
      console.warn(
        'Hyundai Drive frame must use HTTPS. To suppress this warning, please update the frame\'s src from "http:" to "https:".'
      );
      if (newChildUrl === null) {
        newChildUrl = new URL(childUrl);
      }
      newChildUrl.protocol = "https:";
    }

    if (newChildUrl === null) {
      return false;
    }
    frame.src = newChildUrl
      .toString()
      .replaceAll("IONIQ", "Ioniq")
      .replaceAll(/%25/g, "%")
      .replaceAll("+", "%20");
    return true;
  }

  function onReceiveMessage(event) {
    if (
      event.origin.match(/([a-z-]+)\.hyundaidrive\.com$/) ||
      event.origin.match(/([a-z0-9-]+-)?testdrive\.hyundaiusa\.com$/)
    ) {
      switch (event.data.type) {
        case "drive-tier3-sizer": {
          const height = event.data.height;
          if (height > 0) {
            refreshFrameReference();
            if (frame) {
              frame.style.height = `${height}px`;
            } else {
              console.warn(
                "Could not resize Hyundai Drive frame: unable to locate frame."
              );
            }
          }
          return false;
        }
        case "drive-tier3-nav": {
          refreshFrameReference();
          if (frame && event.data.elementDistance) {
            jump(Number(event.data.elementDistance), {
              duration: event.data.elementDistance,
              offset: -45,
            });
          } else if (frame) {
            const { left, top } = frame.getBoundingClientRect();
            window.scrollTo(
              Math.max(Math.min(left, window.scrollX), 0),
              Math.max(Math.min(top, window.scrollY), 0)
            );
          } else {
            window.scrollTo(0, 0);
          }
          return false;
        }
        case "drive-request-submitted": {
          const customEvent = new CustomEvent("td:requestSubmitted", {
            detail: event.data.payload,
          });
          window.dispatchEvent(customEvent);
          return false;
        }
        default:
          break;
      }
    }
  }

  function setupFrameInteractivity() {
    forwardQueryParams();
    if (!frame?.src) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
          forwardQueryParams();
          if (!frame?.src) {
            window.addEventListener("load", forwardQueryParams);
          }
        });
      } else {
        window.addEventListener("load", forwardQueryParams);
      }
    }
  }

  function onDOMContentLoaded() {
    if (!frame) {
      refreshFrameReference();
      if (frame) {
        setupFrameInteractivity();
      }
    }
  }

  function onLoad() {
    if (!frame) {
      refreshFrameReference();
      if (frame) {
        console.warn(
          "Page interactivity with Hyundai Drive frame setup delayed: could not locate frame until after frame's content loaded. May cause page interactivity issues."
        );
        setupFrameInteractivity();
      } else {
        console.error(
          "Page interactivity with Hyundai Drive frame setup incomplete: frame does not contain required attribute and could not be located to complete setup. May cause page interactivity issues."
        );
        return;
      }
    }
  }

  function run() {
    window.addEventListener("message", onReceiveMessage, false);
    refreshFrameReference();
    if (frame) {
      setupFrameInteractivity();
    }
    document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
    window.addEventListener("load", onLoad);
  }

  run();
})(window);

}
/*
     FILE ARCHIVED ON 00:00:46 Sep 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:52:38 Nov 30, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.644
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.009
  esindex: 0.013
  cdx.remote: 20.904
  LoadShardBlock: 67.201 (3)
  PetaboxLoader3.datanode: 145.545 (5)
  load_resource: 248.008 (2)
  PetaboxLoader3.resolve: 124.197 (2)
*/