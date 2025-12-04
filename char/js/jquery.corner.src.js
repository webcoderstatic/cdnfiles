var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
// JRC (jquery-round-corners)
// www.meerbox.nl

// Excanvas:

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

if (!document.createElement('canvas').getContext) {

(function() {

  // alias some functions to make (compiled) code shorter
  var m = Math;
  var mr = m.round;
  var ms = m.sin;
  var mc = m.cos;
  var abs = m.abs;
  var sqrt = m.sqrt;

  // this is used for sub pixel precision
  var Z = 10;
  var Z2 = Z / 2;

  /**
   * This funtion is assigned to the <canvas> elements as element.getContext().
   * @this {HTMLElement}
   * @return {CanvasRenderingContext2D_}
   */
  function getContext() {
    return this.context_ ||
        (this.context_ = new CanvasRenderingContext2D_(this));
  }

  var slice = Array.prototype.slice;

  /**
   * Binds a function to an object. The returned function will always use the
   * passed in {@code obj} as {@code this}.
   *
   * Example:
   *
   *   g = bind(f, obj, a, b)
   *   g(c, d) // will do f.call(obj, a, b, c, d)
   *
   * @param {Function} f The function to bind the object to
   * @param {Object} obj The object that should act as this when the function
   *     is called
   * @param {*} var_args Rest arguments that will be used as the initial
   *     arguments when the function is called
   * @return {Function} A new function that has bound this
   */
  function bind(f, obj, var_args) {
    var a = slice.call(arguments, 2);
    return function() {
      return f.apply(obj, a.concat(slice.call(arguments)));
    };
  }

  function encodeHtmlAttribute(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  }

  function addNamespacesAndStylesheet(doc) {
    // create xmlns
    if (!doc.namespaces['g_vml_']) {
      doc.namespaces.add('g_vml_', 'urn:schemas-microsoft-com:vml',
                         '#default#VML');

    }
    if (!doc.namespaces['g_o_']) {
      doc.namespaces.add('g_o_', 'urn:schemas-microsoft-com:office:office',
                         '#default#VML');
    }

    // Setup default CSS.  Only add one style sheet per document
    if (!doc.styleSheets['ex_canvas_']) {
      var ss = doc.createStyleSheet();
      ss.owningElement.id = 'ex_canvas_';
      ss.cssText = 'canvas{display:inline-block;overflow:hidden;' +
          // default size is 300x150 in Gecko and Opera
          'text-align:left;width:300px;height:150px}';
    }
  }

  // Add namespaces and stylesheet at startup.
  addNamespacesAndStylesheet(document);

  var G_vmlCanvasManager_ = {
    init: function(opt_doc) {
      if (/MSIE/.test(navigator.userAgent) && !window.opera) {
        var doc = opt_doc || document;
        // Create a dummy element so that IE will allow canvas elements to be
        // recognized.
        doc.createElement('canvas');
        doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
      }
    },

    init_: function(doc) {
      // find all canvas elements
      var els = doc.getElementsByTagName('canvas');
      for (var i = 0; i < els.length; i++) {
        this.i(els[i]);
      }
    },

    /**
     * Public initializes a canvas element so that it can be used as canvas
     * element from now on. This is called automatically before the page is
     * loaded but if you are creating elements using createElement you need to
     * make sure this is called on the element.
     * @param {HTMLElement} el The canvas element to initialize.
     * @return {HTMLElement} the element that was created.
     */
    i: function(el) {
      if (!el.getContext) {
        el.getContext = getContext;

        // Add namespaces and stylesheet to document of the element.
        addNamespacesAndStylesheet(el.ownerDocument);

        // Remove fallback content. There is no way to hide text nodes so we
        // just remove all childNodes. We could hide all elements and remove
        // text nodes but who really cares about the fallback content.
        el.innerHTML = '';

        // do not use inline function because that will leak memory
        el.attachEvent('onpropertychange', onPropertyChange);
        el.attachEvent('onresize', onResize);

        var attrs = el.attributes;
        if (attrs.width && attrs.width.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setWidth_(attrs.width.nodeValue);
          el.style.width = attrs.width.nodeValue + 'px';
        } else {
          el.width = el.clientWidth;
        }
        if (attrs.height && attrs.height.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setHeight_(attrs.height.nodeValue);
          el.style.height = attrs.height.nodeValue + 'px';
        } else {
          el.height = el.clientHeight;
        }
        //el.getContext().setCoordsize_()
      }
      return el;
    }
  };

  function onPropertyChange(e) {
    var el = e.srcElement;

    switch (e.propertyName) {
      case 'width':
        el.getContext().clearRect();
        el.style.width = el.attributes.width.nodeValue + 'px';
        // In IE8 this does not trigger onresize.
        el.firstChild.style.width =  el.clientWidth + 'px';
        break;
      case 'height':
        el.getContext().clearRect();
        el.style.height = el.attributes.height.nodeValue + 'px';
        el.firstChild.style.height = el.clientHeight + 'px';
        break;
    }
  }

  function onResize(e) {
    var el = e.srcElement;
    if (el.firstChild) {
      el.firstChild.style.width =  el.clientWidth + 'px';
      el.firstChild.style.height = el.clientHeight + 'px';
    }
  }


  G_vmlCanvasManager_.init();

  // precompute "00" to "FF"
  var dec2hex = [];
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      dec2hex[i * 16 + j] = i.toString(16) + j.toString(16);
    }
  }

  function createMatrixIdentity() {
    return [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
  }

  function matrixMultiply(m1, m2) {
    var result = createMatrixIdentity();

    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        var sum = 0;

        for (var z = 0; z < 3; z++) {
          sum += m1[x][z] * m2[z][y];
        }

        result[x][y] = sum;
      }
    }
    return result;
  }

  function copyState(o1, o2) {
    o2.fillStyle     = o1.fillStyle;
    o2.lineCap       = o1.lineCap;
    o2.lineJoin      = o1.lineJoin;
    o2.lineWidth     = o1.lineWidth;
    o2.miterLimit    = o1.miterLimit;
    o2.shadowBlur    = o1.shadowBlur;
    o2.shadowColor   = o1.shadowColor;
    o2.shadowOffsetX = o1.shadowOffsetX;
    o2.shadowOffsetY = o1.shadowOffsetY;
    o2.strokeStyle   = o1.strokeStyle;
    o2.globalAlpha   = o1.globalAlpha;
    o2.font          = o1.font;
    o2.textAlign     = o1.textAlign;
    o2.textBaseline  = o1.textBaseline;
    o2.arcScaleX_    = o1.arcScaleX_;
    o2.arcScaleY_    = o1.arcScaleY_;
    o2.lineScale_    = o1.lineScale_;
  }

  function processStyle(styleString) {
    var str, alpha = 1;

    styleString = String(styleString);
    if (styleString.substring(0, 3) == 'rgb') {
      var start = styleString.indexOf('(', 3);
      var end = styleString.indexOf(')', start + 1);
      var guts = styleString.substring(start + 1, end).split(',');

      str = '#';
      for (var i = 0; i < 3; i++) {
        str += dec2hex[Number(guts[i])];
      }

      if (guts.length == 4 && styleString.substr(3, 1) == 'a') {
        alpha = guts[3];
      }
    } else {
      str = styleString;
    }

    return {color: str, alpha: alpha};
  }

  function getComputedStyle(style, element) {
    var computedStyle = {};

    for (var p in style) {
      computedStyle[p] = style[p];
    }

    // Compute the size
    var canvasFontSize = parseFloat(element.currentStyle.fontSize),
        fontSize = parseFloat(style.size);

    if (typeof style.size == 'number') {
      computedStyle.size = style.size;
    } else if (style.size.indexOf('px') != -1) {
      computedStyle.size = fontSize;
    } else if (style.size.indexOf('em') != -1) {
      computedStyle.size = canvasFontSize * fontSize;
    } else if(style.size.indexOf('%') != -1) {
      computedStyle.size = (canvasFontSize / 100) * fontSize;
    } else if (style.size.indexOf('pt') != -1) {
      computedStyle.size = canvasFontSize * (4/3) * fontSize;
    } else {
      computedStyle.size = canvasFontSize;
    }

    // Different scaling between normal text and VML text. This was found using
    // trial and error to get the same size as non VML text.
    computedStyle.size *= 0.981;

    return computedStyle;
  }

  function buildStyle(style) {
    return style.style + ' ' + style.variant + ' ' + style.weight + ' ' +
        style.size + 'px ' + style.family;
  }

  function processLineCap(lineCap) {
    switch (lineCap) {
      case 'butt':
        return 'flat';
      case 'round':
        return 'round';
      case 'square':
      default:
        return 'square';
    }
  }

  /**
   * This class implements CanvasRenderingContext2D interface as described by
   * the WHATWG.
   * @param {HTMLElement} surfaceElement The element that the 2D context should
   * be associated with
   */
  function CanvasRenderingContext2D_(surfaceElement) {
    this.m_ = createMatrixIdentity();

    this.mStack_ = [];
    this.aStack_ = [];
    this.currentPath_ = [];

    // Canvas context properties
    this.strokeStyle = '#000';
    this.fillStyle = '#000';

    this.lineWidth = 1;
    this.lineJoin = 'miter';
    this.lineCap = 'butt';
    this.miterLimit = Z * 1;
    this.globalAlpha = 1;
    this.font = '10px sans-serif';
    this.textAlign = 'left';
    this.textBaseline = 'alphabetic';
    this.canvas = surfaceElement;

    var el = surfaceElement.ownerDocument.createElement('div');
    el.style.width =  surfaceElement.clientWidth + 'px';
    el.style.height = surfaceElement.clientHeight + 'px';
    el.style.overflow = 'hidden';
    el.style.position = 'absolute';
    surfaceElement.appendChild(el);

    this.element_ = el;
    this.arcScaleX_ = 1;
    this.arcScaleY_ = 1;
    this.lineScale_ = 1;
  }


  var contextPrototype = CanvasRenderingContext2D_.prototype;
  contextPrototype.clearRect = function() {
    if (this.textMeasureEl_) {
      this.textMeasureEl_.removeNode(true);
      this.textMeasureEl_ = null;
    }
    this.element_.innerHTML = '';
  };

  contextPrototype.beginPath = function() {
    // TODO: Branch current matrix so that save/restore has no effect
    //       as per safari docs.
    this.currentPath_ = [];
  };

  contextPrototype.moveTo = function(aX, aY) {
    var p = this.getCoords_(aX, aY);
    this.currentPath_.push({type: 'moveTo', x: p.x, y: p.y});
    this.currentX_ = p.x;
    this.currentY_ = p.y;
  };

  contextPrototype.lineTo = function(aX, aY) {
    var p = this.getCoords_(aX, aY);
    this.currentPath_.push({type: 'lineTo', x: p.x, y: p.y});

    this.currentX_ = p.x;
    this.currentY_ = p.y;
  };

  contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
                                            aCP2x, aCP2y,
                                            aX, aY) {
    var p = this.getCoords_(aX, aY);
    var cp1 = this.getCoords_(aCP1x, aCP1y);
    var cp2 = this.getCoords_(aCP2x, aCP2y);
    bezierCurveTo(this, cp1, cp2, p);
  };

  // Helper function that takes the already fixed cordinates.
  function bezierCurveTo(self, cp1, cp2, p) {
    self.currentPath_.push({
      type: 'bezierCurveTo',
      cp1x: cp1.x,
      cp1y: cp1.y,
      cp2x: cp2.x,
      cp2y: cp2.y,
      x: p.x,
      y: p.y
    });
    self.currentX_ = p.x;
    self.currentY_ = p.y;
  }




  contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
    var oldPath = this.currentPath_;
    this.beginPath();

    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.fill();

    this.currentPath_ = oldPath;
  };

  contextPrototype.stroke = function(aFill) {
    var lineStr = [];
    var lineOpen = false;

    var W = 10;
    var H = 10;

    lineStr.push('<g_vml_:shape',
                 ' filled="', !!aFill, '"',
                 ' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
                 ' coordorigin="0,0"',
                 ' coordsize="', Z * W, ',', Z * H, '"',
                 ' stroked="', !aFill, '"',
                 ' path="');

    var newSeq = false;
    var min = {x: null, y: null};
    var max = {x: null, y: null};

    for (var i = 0; i < this.currentPath_.length; i++) {
      var p = this.currentPath_[i];
      var c;

      switch (p.type) {
        case 'moveTo':
          c = p;
          lineStr.push(' m ', mr(p.x), ',', mr(p.y));
          break;
        case 'lineTo':
          lineStr.push(' l ', mr(p.x), ',', mr(p.y));
          break;
        case 'close':
          lineStr.push(' x ');
          p = null;
          break;
        case 'bezierCurveTo':
          lineStr.push(' c ',
                       mr(p.cp1x), ',', mr(p.cp1y), ',',
                       mr(p.cp2x), ',', mr(p.cp2y), ',',
                       mr(p.x), ',', mr(p.y));
          break;
        case 'at':
        case 'wa':
          lineStr.push(' ', p.type, ' ',
                       mr(p.x - this.arcScaleX_ * p.radius), ',',
                       mr(p.y - this.arcScaleY_ * p.radius), ' ',
                       mr(p.x + this.arcScaleX_ * p.radius), ',',
                       mr(p.y + this.arcScaleY_ * p.radius), ' ',
                       mr(p.xStart), ',', mr(p.yStart), ' ',
                       mr(p.xEnd), ',', mr(p.yEnd));
          break;
      }


      // TODO: Following is broken for curves due to
      //       move to proper paths.

      // Figure out dimensions so we can do gradient fills
      // properly
      if (p) {
        if (min.x == null || p.x < min.x) {
          min.x = p.x;
        }
        if (max.x == null || p.x > max.x) {
          max.x = p.x;
        }
        if (min.y == null || p.y < min.y) {
          min.y = p.y;
        }
        if (max.y == null || p.y > max.y) {
          max.y = p.y;
        }
      }
    }
    lineStr.push(' ">');

    if (!aFill) {
      appendStroke(this, lineStr);
    } else {
      appendFill(this, lineStr, min, max);
    }

    lineStr.push('</g_vml_:shape>');

    this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
  };

  function appendStroke(ctx, lineStr) {
    var a = processStyle(ctx.strokeStyle);
    var color = a.color;
    var opacity = a.alpha * ctx.globalAlpha;
    var lineWidth = ctx.lineScale_ * ctx.lineWidth;

    // VML cannot correctly render a line if the width is less than 1px.
    // In that case, we dilute the color to make the line look thinner.
    if (lineWidth < 1) {
      opacity *= lineWidth;
    }

    lineStr.push(
      '<g_vml_:stroke',
      ' opacity="', opacity, '"',
      ' joinstyle="', ctx.lineJoin, '"',
      ' miterlimit="', ctx.miterLimit, '"',
      ' endcap="', processLineCap(ctx.lineCap), '"',
      ' weight="', lineWidth, 'px"',
      ' color="', color, '" />'
    );
  }

  function appendFill(ctx, lineStr, min, max) {
    var fillStyle = ctx.fillStyle;
    var arcScaleX = ctx.arcScaleX_;
    var arcScaleY = ctx.arcScaleY_;
    var width = max.x - min.x;
    var height = max.y - min.y;
    if (fillStyle instanceof CanvasGradient_) {
      // TODO: Gradients transformed with the transformation matrix.
      var angle = 0;
      var focus = {x: 0, y: 0};

      // additional offset
      var shift = 0;
      // scale factor for offset
      var expansion = 1;

      if (fillStyle.type_ == 'gradient') {
        var x0 = fillStyle.x0_ / arcScaleX;
        var y0 = fillStyle.y0_ / arcScaleY;
        var x1 = fillStyle.x1_ / arcScaleX;
        var y1 = fillStyle.y1_ / arcScaleY;
        var p0 = ctx.getCoords_(x0, y0);
        var p1 = ctx.getCoords_(x1, y1);
        var dx = p1.x - p0.x;
        var dy = p1.y - p0.y;
        angle = Math.atan2(dx, dy) * 180 / Math.PI;


        // The angle should be a non-negative number.
        if (angle < 0) {
          angle += 360;
        }

        // Very small angles produce an unexpected result because they are
        // converted to a scientific notation string.
        if (angle < 1e-6) {
          angle = 0;
        }
      } else {
        var p0 = ctx.getCoords_(fillStyle.x0_, fillStyle.y0_);
        focus = {
          x: (p0.x - min.x) / width,
          y: (p0.y - min.y) / height
        };

        width  /= arcScaleX * Z;
        height /= arcScaleY * Z;
        var dimension = m.max(width, height);
        shift = 2 * fillStyle.r0_ / dimension;
        expansion = 2 * fillStyle.r1_ / dimension - shift;
      }

      // We need to sort the color stops in ascending order by offset,
      // otherwise IE won't interpret it correctly.
      var stops = fillStyle.colors_;
      stops.sort(function(cs1, cs2) {
        return cs1.offset - cs2.offset;
      });

      var length = stops.length;
      var color1 = stops[0].color;
      var color2 = stops[length - 1].color;
      var opacity1 = stops[0].alpha * ctx.globalAlpha;
      var opacity2 = stops[length - 1].alpha * ctx.globalAlpha;

      var colors = [];
      for (var i = 0; i < length; i++) {
        var stop = stops[i];
        colors.push(stop.offset * expansion + shift + ' ' + stop.color);
      }

      // When colors attribute is used, the meanings of opacity and o:opacity2
      // are reversed.
      lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
                   ' method="none" focus="100%"',
                   ' color="', color1, '"',
                   ' color2="', color2, '"',
                   ' colors="', colors.join(','), '"',
                   ' opacity="', opacity2, '"',
                   ' g_o_:opacity2="', opacity1, '"',
                   ' angle="', angle, '"',
                   ' focusposition="', focus.x, ',', focus.y, '" />');
    } else if (fillStyle instanceof CanvasPattern_) {
      if (width && height) {
        var deltaLeft = -min.x;
        var deltaTop = -min.y;
        lineStr.push('<g_vml_:fill',
                     ' position="',
                     deltaLeft / width * arcScaleX * arcScaleX, ',',
                     deltaTop / height * arcScaleY * arcScaleY, '"',
                     ' type="tile"',
                     // TODO: Figure out the correct size to fit the scale.
                     //' size="', w, 'px ', h, 'px"',
                     ' src="', fillStyle.src_, '" />');
       }
    } else {
      var a = processStyle(ctx.fillStyle);
      var color = a.color;
      var opacity = a.alpha * ctx.globalAlpha;
      lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
                   '" />');
    }
  }

  contextPrototype.fill = function() {
    this.stroke(true);
  };

  contextPrototype.closePath = function() {
    this.currentPath_.push({type: 'close'});
  };

  /**
   * @private
   */
  contextPrototype.getCoords_ = function(aX, aY) {
    var m = this.m_;
    return {
      x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
      y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
    };
  };

  // Gradient / Pattern Stubs
  function CanvasGradient_(aType) {
    this.type_ = aType;
    this.x0_ = 0;
    this.y0_ = 0;
    this.r0_ = 0;
    this.x1_ = 0;
    this.y1_ = 0;
    this.r1_ = 0;
    this.colors_ = [];
  }

  function CanvasPattern_(image, repetition) {
    assertImageIsValid(image);
    switch (repetition) {
      case 'repeat':
      case null:
      case '':
        this.repetition_ = 'repeat';
        break
      case 'repeat-x':
      case 'repeat-y':
      case 'no-repeat':
        this.repetition_ = repetition;
        break;
      default:
        throwException('SYNTAX_ERR');
    }

    this.src_ = image.src;
    this.width_ = image.width;
    this.height_ = image.height;
  }

  // set up externs
  G_vmlCMjrc = G_vmlCanvasManager_;
})();


} // if


/*

 End of Excanvas

*/


if (jQuery.browser.msie) {
	document.execCommand("BackgroundImageCache", false, true);
}

		
(function($){
		
	var isMSIE = $.browser.msie;
	var isltMSIE7 = isMSIE && !window.XMLHttpRequest;
	var isOpera = $.browser.opera;
	var canvasSupport = typeof document.createElement('canvas').getContext == "function";
	
	// get number as integer
	var Num = function(i) { return parseInt(i,10) || 0; };
		
	// get lowest number from array
	/*
	var asNum = function(a, b) { return a-b; };
	var getMin = function(a) {
		var b = a.concat();
		return b.sort(asNum)[0];
	};*/
	
	// a basic replacement for jquery .css()
	// getStyle(elm,BorderTopWidth,border-top-width)
	var getStyle = function(el,styleProp,styleProp2) {
		var x = el,y;
		if (x.currentStyle) {
			y = x.currentStyle[styleProp];
		} else if (window.getComputedStyle) {
			if (typeof arguments[2] == "string") styleProp = styleProp2;
			y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
		}
		return y;
	};
	
	var getBorderColor = function (elm,p) {
		return getStyle(elm,'border'+p+'Color','border-'+p.toLowerCase()+'-color')
	};

	var getBorderWidth = function(elm,p) {

		if (elm.currentStyle && !isOpera) {
			w = elm.currentStyle['border'+p+'Width'];
			if (w == 'thin') w = 2;
			if (w == 'medium' && !(elm.currentStyle['border'+p+'Style'] == 'none')) w = 4;
			if (w == 'thick') w = 6; /// 5px in ie8?
		} else {
			p = p.toLowerCase();
			w = document.defaultView.getComputedStyle(elm,null).getPropertyValue('border-'+p+'-width');
		}
		return Num(w);
	};
	
	var isElm = function(elm,i) {
		return elm.tagName.toLowerCase() == i;
	};
	
	var rotationSteps = function(r_type,a,b,c,d) {
		if (r_type == 'tl') return a;
		if (r_type == 'tr') return b;
		if (r_type == 'bl') return c;
		if (r_type == 'br') return d;
	};
	
	// draw the round corner in Canvas object
	var drawCorner = function(canvas,radius,r_type,bg_color,border_width,border_color,corner_effect) {
		
		var steps,curve_to;
		
		// change rgba(1,2,3,0.9) to rgb(1,2,3)
		if (bg_color.indexOf('rgba') != -1) {
			var reg = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;   
			var bits = reg.exec(bg_color);
			if (bits) {
				var channels = [Num(bits[1]),Num(bits[2]),Num(bits[3])];
				bg_color = 'rgb('+channels[0]+', '+channels[1]+', '+channels[2]+')';
			} 
		}
		
		var ctx = canvas.getContext('2d');
		
		if (radius == 1 || corner_effect == 'notch') {
			
			if (border_width > 0 && radius > 1) {
				ctx.fillStyle = border_color;
				ctx.fillRect(0,0,radius,radius);
				ctx.fillStyle = bg_color;
				steps = rotationSteps(r_type,[0-border_width,0-border_width],[border_width,0-border_width],[0-border_width,border_width],[border_width,border_width]);
				ctx.fillRect(steps[0],steps[1],radius,radius);
			} else {
				ctx.fillStyle = bg_color;
				ctx.fillRect(0,0,radius,radius);
			}
			return canvas;
		} else if (corner_effect == 'bevel') {
			steps = rotationSteps(r_type,[0,0,0,radius,radius,0,0,0],[0,0,radius,radius,radius,0,0,0],[0,0,radius,radius,0,radius,0,0],[radius,radius,radius,0,0,radius,radius,radius]);
			ctx.fillStyle = bg_color;
			ctx.beginPath();
			ctx.moveTo(steps[0],steps[1]);
			ctx.lineTo(steps[2], steps[3]);
			ctx.lineTo(steps[4], steps[5]);
			ctx.lineTo(steps[6], steps[7]);
			ctx.fill(); 
			if (border_width > 0 && border_width < radius) {
				ctx.strokeStyle = border_color;
	        	ctx.lineWidth = border_width;
    			ctx.beginPath();
				steps = rotationSteps(r_type,[0,radius,radius,0],[0,0,radius,radius],[radius,radius,0,0],[0,radius,radius,0]);
    			ctx.moveTo(steps[0],steps[1]);
				ctx.lineTo(steps[2],steps[3]);
    			ctx.stroke();
			}
			return canvas;
		}

		steps = rotationSteps(r_type,
					[0,0,radius,0,radius,0,0,radius,0,0],
					[radius,0,radius,radius,radius,0,0,0,0,0],
					[0,radius,radius,radius,0,radius,0,0,0,radius],
					[radius,radius,radius,0,radius,0,0,radius,radius,radius]);
         
		ctx.fillStyle = bg_color;
    	ctx.beginPath();
     	ctx.moveTo(steps[0],steps[1]); 
     	ctx.lineTo(steps[2], steps[3]);
    	if(r_type == 'br') ctx.bezierCurveTo(steps[4], steps[5], radius, radius, steps[6], steps[7]);
    	else ctx.bezierCurveTo(steps[4], steps[5], 0, 0, steps[6], steps[7]);
		ctx.lineTo(steps[8], steps[9]);
        ctx.fill(); 
         
        // draw border
        if (border_width > 0 && border_width < radius) {
	        
	        // offset caused by border
	        var offset = border_width/2; 
	        var ro = radius-offset;
			steps = rotationSteps(r_type,
				[ro,offset,ro,offset,offset,ro],
				[ro,ro,ro,offset,offset,offset],
				[ro,ro,offset,ro,offset,offset,offset,ro],
				[ro,offset,ro,offset,offset,ro,ro,ro]	
			);

			curve_to = rotationSteps(r_type,[0,0],[0,0],[0,0],[radius, radius]);

	        ctx.strokeStyle = border_color;
	        ctx.lineWidth = border_width;
    		ctx.beginPath();
    		// go to corner to begin curve
     		ctx.moveTo(steps[0], steps[1]); 
     		// curve from righttop to leftbottom (for the tl canvas)
    		ctx.bezierCurveTo(steps[2], steps[3], curve_to[0], curve_to[1], steps[4], steps[5]); 
			ctx.stroke();
	        
	    }
	    
	    return canvas;
	    
	};
	
	// create and append canvas element to parent
	var createCanvas = function(p,radius) {
		
		var elm = document.createElement('canvas');
		elm.setAttribute("height", radius);
		elm.setAttribute("width", radius); 
	    elm.style.display = "block";
		elm.style.position = "absolute";
		elm.className = "jrCorner";
		
		appendToParent(p,elm);
		
		if (!canvasSupport && isMSIE) { // no native canvas support
			if (typeof G_vmlCanvasManager == "object") { // use excanvas
				elm = G_vmlCanvasManager.initElement(elm);
			} else if (typeof G_vmlCMjrc == "object") { // use the stipped down version of excanvas included in this file
				elm = G_vmlCMjrc.i(elm);
			} else {
				 throw Error('Could not find excanvas');
			}
		}
		
		return elm;
	};
	
	var appendToParent = function(p,elm) {
		if (p.is("table")) {
			p.children("tbody").children("tr:first").children("td:first").append(elm); 
			p.css('display','block'); // only firefox seems to need this
		} else if(p.is("td")) {
			if (p.children(".JrcTdContainer").length === 0) {
				// only in msie you can absolute position a element inside a table cell, so we need a wrapper
				p.html('<div class="JrcTdContainer" style="padding:0px;position:relative;margin:-1px;zoom:1;">'+p.html()+'</div>');
				p.css('zoom','1');
				if (isltMSIE7) { //  msie6 only
					p.children(".JrcTdContainer").get(0).style.setExpression("height","this.parentNode.offsetHeight"); 
				}
				
			} 
			p.children(".JrcTdContainer").append(elm); 
			
		} else {
			p.append(elm); 
		}

	};
	
	// hide corners in ie print
	// (using canvas {display:none} doesnt work)
	if (isMSIE) {
		var ss = document.createStyleSheet(); 
		ss.media = 'print';
    	ss.cssText = '.jrcIECanvasDiv { display:none !important; }';
    }
	
    // $.corner function
	var _corner = function(options) {
		
		// nothing to do || no support for native canvas or excanvas
		if (this.length==0 || !(canvasSupport || isMSIE)) {
			return this;
		}	
		
		if (options == "destroy") {
			return this.each(function() {
				var p, elm = $(this);
				if (elm.is(".jrcRounded")) {
					if (typeof elm.data("ie6tmr.jrc") == 'number') window.clearInterval(elm.data("ie6tmr.jrc"));
					if (elm.is("table")) p = elm.children("tbody").children("tr:first").children("td:first");
					else if (elm.is("td")) p = elm.children(".JrcTdContainer");
					else p = elm;
					p.children(".jrCorner").remove();
					elm.unbind('mouseleave.jrc').unbind('mouseenter.jrc').removeClass('jrcRounded').removeData('ie6tmr.jrc');
					if (elm.is("td")) elm.html(elm.children(".JrcTdContainer").html());
				}
			});
		}
			
		// interpret the (string) argument
   		var o = (options || "").toLowerCase();
   		var radius = Num((o.match(/(\d+)px/)||[])[1]) || "auto"; // corner width
   		var bg_arg = ((o.match(/(#[0-9a-f]+)/)||[])[1]) || "auto";  // strip color
   		var re = /round|bevel|notch/; // Corner Effects
    	var fx = ((o.match(re)||['round'])[0]);
    	var hover = /hover/.test(o);
    	var overSized = /oversized/.test(o);
    	var hiddenparent_arg = o.match("hiddenparent");
    	if (isMSIE) {
    		var re = /ie6nofix|ie6fixinit|ie6fixexpr|ie6fixonload|ie6fixwidthint|ie6fixheightint|ie6fixbothint/; // Type of iefix
    		var ie6Fix = ((o.match(re)||['ie6fixinit'])[0]);
    	} 	
    	
   		//var edges = { T:0, B:1 };
    	var opts = {
        	tl:  /top|left|tl/.test(o),       
        	tr:  /top|right|tr/.test(o),
        	bl:  /bottom|left|bl/.test(o),    
        	br:  /bottom|right|br/.test(o)
    	};
    	
    	// round all corners if nothing is set
    	if ( !opts.tl && !opts.tr && !opts.bl && !opts.br) opts = { tl:1, tr:1, bl:1, br:1 };
    	       	
		this.each(function() {

			var elm = $(this),rbg=null,bg,s,b,pr;
			var a = this;
			var elm_display = getStyle(this,'display');
			var elm_position = getStyle(this,'position');
			var elm_lineheight = getStyle(this,'lineHeight','line-height');
					
			if (bg_arg == "auto") { // no background color of the parent is set ...
				s = elm.siblings(".jrcRounded:eq(0)");
				if (s.length > 0) { // sibling already has the parent background color stored?
					b = s.data("rbg.jrc");
					if (typeof b == "string") {
						rbg = b;
					}
				}
			}
			
			if (hiddenparent_arg || rbg === null) {
				// temporary show hidden parent (wm.morgun) + search for background color
				var current_p = this.parentNode, hidden_parents = new Array(),a = 0;
				while( (typeof current_p == 'object') && !isElm(current_p,'html') ) {
					
					if (hiddenparent_arg && getStyle(current_p,'display') == 'none') {
						hidden_parents.push({
							originalvisibility: getStyle(current_p,'visibility'),
							elm: current_p
						});
						current_p.style.display = 'block';
						current_p.style.visibility = 'hidden';
					}
					var pbg = getStyle(current_p,'backgroundColor','background-color');
					if (rbg === null && pbg != "transparent" && pbg != "rgba(0, 0, 0, 0)") {
						rbg = pbg;
					}
					
					current_p = current_p.parentNode;
	
				}
				
				if (rbg === null) rbg = "#ffffff";
			}
			
			// store the parent background color
			if (bg_arg == "auto") {
				bg = rbg;
				elm.data("rbg.jrc",rbg);
			} else {
				bg = bg_arg;
			}
			
			// if element is hidden we cant get the size..
			if (elm_display == 'none') {
				var originalvisibility = getStyle(this,'visibility');
				this.style.display = 'block';
				this.style.visibility = 'hidden';
				var ishidden = true;
			} else {
				var ishiddden = false;
			}
			
			// save width/height
			var elm_height = elm.height();
			var elm_width = elm.width();
			
			// hover (optional argument - a alterative to #roundedelement:hover)
			if (hover) {
				
				var newOptions = o.replace(/hover|ie6nofix|ie6fixinit|ie6fixexpr|ie6fixonload|ie6fixwidthint|ie6fixheightint|ie6fixbothint/g, "");
				if (ie6Fix != 'ie6nofix') newOptions = "ie6fixinit "+newOptions;
				
				elm.bind("mouseenter.jrc", function(){
					elm.addClass('jrcHover');
					elm.corner(newOptions);
				});
				elm.bind("mouseleave.jrc", function(){
					elm.removeClass('jrcHover');
					elm.corner(newOptions);
				});
				
			}
			
	   		// msie6 rendering bugs 
			if (isltMSIE7 && ie6Fix != 'ie6nofix') {
				
				this.style.zoom = 1;
				
				//if (this.currentStyle['height'] == 'auto') {
				//	elm.height(elm_height); 
				//}
				
				// http://www.pmob.co.uk/temp/onepxgap.htm
				if (ie6Fix != 'ie6fixexpr') {
					if (elm.width()%2 != 0)elm.width(elm.width()+1);
			 		if (elm.height()%2 != 0) elm.height(elm.height()+1);
			 	}

			 	$(window).load(function () {
					 	if (ie6Fix == 'ie6fixonload') {
							if (elm.css('height') == 'auto') elm.height(elm.css('height')); 
				 			if (elm.width()%2 != 0) elm.width(elm.width()+1);
				 			if (elm.height()%2 != 0) elm.height(elm.height()+1);
			 			} else if (ie6Fix == 'ie6fixwidthint' || ie6Fix == 'ie6fixheightint' || ie6Fix == 'ie6fixbothint') {
				 			var myInterval,ie6FixFunction;
				 			if (ie6Fix == 'ie6fixheightint') {
					 			ie6FixFunction = function () {
									elm.height('auto');
									var elm_height = elm.height();
									if (elm_height%2 != 0) elm_height = elm_height+1;
		  							elm.css({height:elm_height}); 
								};
							} else if (ie6Fix == 'ie6fixwidthint') {
								ie6FixFunction = function () {
									elm.width('auto');
									var elm_width = elm.width();
		  							if (elm_width%2 != 0) elm_width = elm_width+1;
		  							elm.css({width:elm_width}); 
		  							elm.data('lastWidth.jrc',elm.get(0).offsetWidth);
								};
							} else if(ie6Fix == 'ie6fixbothint') {
								ie6FixFunction = function () {
									elm.width('auto');
									elm.height('auto');
									var elm_width = elm.width();
									var elm_height = elm.height();
									if (elm_height%2 != 0) elm_height = elm_height+1;
		  							if (elm_width%2 != 0) elm_width = elm_width+1;
		  							elm.css({width:elm_width,height:elm_height}); 
								};
							} 
							myInterval = window.setInterval(ie6FixFunction,100);
							elm.data("ie6tmr.jrc",myInterval);
				 		}
    			});

			 	// ie6fixwidthint|ie6fixheightint
			 	
			 	//this.style.setExpression("height","parseInt(this.clientHeight) % 2 != 0 ? parseInt(this.style.height)-1 : parseInt(this.style.height)"); 
			 	//alert(this.style.height);
			 	//if (elm_lineheight != 'normal' && elm_height < elm_lineheight) {
				// 	elm.css('lineHeight', elm_height);
				//}
			}
			
			// get lowest height/width
			/*
			var arr = [this.offsetHeight,this.offsetWidth];
			if (elm_height != 0) arr[arr.length] = elm_height;
			if (elm_width != 0) arr[arr.length] = elm_width;
			var widthHeightSmallest = getMin(arr);*/
			
			var widthHeightSmallest = elm_height < elm_width ? this.offsetHeight : this.offsetWidth;
			
			
			// the size of the corner is not defined...
			if (radius == "auto") {
				radius = widthHeightSmallest/2;
				if (radius > 10) radius = widthHeightSmallest/4; 
			}

			// the size of the corner can't be to high
			if (radius > widthHeightSmallest/2 && !overSized) {
				radius = widthHeightSmallest/2;
			}
			
			radius = Math.floor(radius);
			
			// get border width
			var border_t = getBorderWidth(this, 'Top');
			var border_r = getBorderWidth(this, 'Right');
			var border_b = getBorderWidth(this, 'Bottom');
			var border_l = getBorderWidth(this, 'Left');
			
			// some css thats required in order to position the canvas elements
			if (elm_position == 'static' && !isElm(this,'td')) { 
				//elm.css('position','relative'); 
				this.style.position = 'relative';
			// only needed for ie6 and (ie7 in Quirks mode) , CSS1Compat == Strict mode
			} else if (elm_position == 'fixed' && isMSIE && !(document.compatMode == 'CSS1Compat' && !isltMSIE7)) { 
				//elm.css('position','absolute');
				this.style.position = 'absolute';
			}
			
			// overflow hidden + border makes the real borders at the corners visible
			// so we set overflow to visible when it has borders
			if (border_t+border_r+border_b+border_l > 0) {
				this.style.overflow = 'visible';
			}
			
			// restore css
			if (ishidden) elm.css({display:'none',visibility:originalvisibility});
			
			//  restore css of hidden parents
			if (typeof hidden_parents != "undefined") {
				for (var i = 0; i < hidden_parents.length; i++) {
					hidden_parents[i].elm.style.display = 'none';
					hidden_parents[i].elm.style.visibility = hidden_parents[i].originalvisibility;
				}
			}	
			
			var p_top = 0-border_t, 
				p_right = 0-border_r, 
				p_bottom = 0-border_b,
				p_left = 0-border_l;
				
			var mhc = (elm.find("canvas").length > 0);
			
			if (mhc) {
				// pr is the parent of the canvas elements
				if (isElm(this,'table')) pr = elm.children("tbody").children("tr:first").children("td:first");
				else if (isElm(this,'td')) pr = elm.children(".JrcTdContainer");
				else pr = elm;
			}
	
			// draw Corners in canvas elements (createCanvas also appends it to parent)
			if (opts.tl) { 
				// use lowest border size
				bordersWidth = border_t < border_l ? border_t : border_l;
				// remove old corner
				if (mhc) pr.children("canvas.jrcTL").remove(); 
				// create,append and draw corner
				var tl = drawCorner(createCanvas(elm,radius),radius,'tl',bg,bordersWidth,getBorderColor(this,'Top'),fx); 
				// position corner
				$(tl).css({left:p_left,top:p_top}).addClass('jrcTL'); 
			}
			if (opts.tr) { 
				bordersWidth = border_t < border_r ? border_t : border_r;
				if (mhc) pr.children("canvas.jrcTR").remove();
				var tr = drawCorner(createCanvas(elm,radius),radius,'tr',bg,bordersWidth,getBorderColor(this,'Top'),fx); 
				$(tr).css({right:p_right,top:p_top}).addClass('jrcTR'); 
			}
			if (opts.bl) { 
				bordersWidth = border_b < border_l ? border_b : border_l;
				if (mhc) pr.children("canvas.jrcBL").remove();
				var bl = drawCorner(createCanvas(elm,radius),radius,'bl',bg,bordersWidth,getBorderColor(this,'Bottom'),fx);
				$(bl).css({left:p_left,bottom:p_bottom}).addClass('jrcBL');  
			}
			if (opts.br) { 
				bordersWidth = border_b < border_r ? border_b : border_r;
				if (mhc) pr.children("canvas.jrcBR").remove();
				var br = drawCorner(createCanvas(elm,radius),radius,'br',bg,bordersWidth,getBorderColor(this,'Bottom'),fx);
				$(br).css({right:p_right,bottom:p_bottom}).addClass('jrcBR');
			}
			
			// we need this to hide it in ie print
			if (isMSIE) elm.children('canvas.jrCorner').children('div').addClass('jrcIECanvasDiv');
			
			// based on fix: http://www.ilikespam.com/blog/the-odd-pixel-bug
			if (isltMSIE7 && ie6Fix == 'ie6fixexpr') {
				if (opts.bl) {
					bl.style.setExpression("bottom","this.parentNode.offsetHeight % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])) : 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])+1)");
				}
				if (opts.br) {
					br.style.setExpression("right", "this.parentNode.offsetWidth  % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderRightWidth']))  : 0-(parseInt(this.parentNode.currentStyle['borderRightWidth'])+1)");
					br.style.setExpression("bottom","this.parentNode.offsetHeight % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])) : 0-(parseInt(this.parentNode.currentStyle['borderBottomWidth'])+1)");
				}
				if (opts.tr) {
					tr.style.setExpression("right","this.parentNode.offsetWidth   % 2 == 0 || this.parentNode.offsetWidth % 2 == 0 ? 0-(parseInt(this.parentNode.currentStyle['borderRightWidth']))  : 0-(parseInt(this.parentNode.currentStyle['borderRightWidth'])+1)");
				}	
			}
			
			elm.addClass('jrcRounded');
			
				
   		});  
   		
   		// callback function (is called when the last element is rounded)
		if (typeof arguments[1] == "function") arguments[1](this); 
   		return this;
   		
	};
	
	$.fn.corner = _corner;
	
})(jQuery);

}