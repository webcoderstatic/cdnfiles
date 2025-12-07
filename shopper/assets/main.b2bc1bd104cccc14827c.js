var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    };
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opens = _____WB$wombat$assign$function_____("opens");
    var main;
    !(function () {
        var t = {
                548: function (t, e, i) {
                    t.exports = i(5174);
                },
                7544: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return t.extend(t.expr[":"], {
                                        data: t.expr.createPseudo
                                            ? t.expr.createPseudo(function (e) {
                                                  return function (i) {
                                                      return !!t.data(i, e);
                                                  };
                                              })
                                            : function (e, i, n) {
                                                  return !!t.data(e, n[3]);
                                              },
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                3200: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return t.fn.extend({
                                        disableSelection:
                                            ((e =
                                                "onselectstart" in document.createElement("div")
                                                    ? "selectstart"
                                                    : "mousedown"),
                                            function () {
                                                return this.on(e + ".ui-disableSelection", function (t) {
                                                    t.preventDefault();
                                                });
                                            }),
                                        enableSelection: function () {
                                            return this.off(".ui-disableSelection");
                                        },
                                    });
                                    var e;
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                2432: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.escapeSelector =
                                        ((e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g),
                                        function (t) {
                                            return t.replace(e, "\\$1");
                                        }));
                                    var e;
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                4848: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    function e(t) {
                                        for (var e = t.css("visibility"); "inherit" === e; )
                                            e = (t = t.parent()).css("visibility");
                                        return "hidden" !== e;
                                    }
                                    return (
                                        (t.ui.focusable = function (i, n) {
                                            var o,
                                                s,
                                                r,
                                                a,
                                                l,
                                                c = i.nodeName.toLowerCase();
                                            return "area" === c
                                                ? ((s = (o = i.parentNode).name),
                                                  !(!i.href || !s || "map" !== o.nodeName.toLowerCase()) &&
                                                      (r = t("img[usemap='#" + s + "']")).length > 0 &&
                                                      r.is(":visible"))
                                                : (/^(input|select|textarea|button|object)$/.test(c)
                                                      ? (a = !i.disabled) &&
                                                        (l = t(i).closest("fieldset")[0]) &&
                                                        (a = !l.disabled)
                                                      : (a = ("a" === c && i.href) || n),
                                                  a && t(i).is(":visible") && e(t(i)));
                                        }),
                                        t.extend(t.expr[":"], {
                                            focusable: function (e) {
                                                return t.ui.focusable(e, null != t.attr(e, "tabindex"));
                                            },
                                        }),
                                        t.ui.focusable
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                1834: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(8290), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.formResetMixin = {
                                        _formResetHandler: function () {
                                            var e = t(this);
                                            setTimeout(function () {
                                                var i = e.data("ui-form-reset-instances");
                                                t.each(i, function () {
                                                    this.refresh();
                                                });
                                            });
                                        },
                                        _bindFormResetHandler: function () {
                                            if (((this.form = this.element.form()), this.form.length)) {
                                                var t = this.form.data("ui-form-reset-instances") || [];
                                                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                                                    t.push(this),
                                                    this.form.data("ui-form-reset-instances", t);
                                            }
                                        },
                                        _unbindFormResetHandler: function () {
                                            if (this.form.length) {
                                                var e = this.form.data("ui-form-reset-instances");
                                                e.splice(t.inArray(this, e), 1),
                                                    e.length
                                                        ? this.form.data("ui-form-reset-instances", e)
                                                        : this.form
                                                              .removeData("ui-form-reset-instances")
                                                              .off("reset.ui-form-reset");
                                            }
                                        },
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                8290: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.fn.form = function () {
                                        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                9565: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                1937: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.keyCode = {
                                        BACKSPACE: 8,
                                        COMMA: 188,
                                        DELETE: 46,
                                        DOWN: 40,
                                        END: 35,
                                        ENTER: 13,
                                        ESCAPE: 27,
                                        HOME: 36,
                                        LEFT: 37,
                                        PAGE_DOWN: 34,
                                        PAGE_UP: 33,
                                        PERIOD: 190,
                                        RIGHT: 39,
                                        SPACE: 32,
                                        TAB: 9,
                                        UP: 38,
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                1906: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539), i(2432)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.fn.labels = function () {
                                        var e, i, n, o, s;
                                        return this[0].labels && this[0].labels.length
                                            ? this.pushStack(this[0].labels)
                                            : ((o = this.eq(0).parents("label")),
                                              (n = this.attr("id")) &&
                                                  ((s = (e = this.eq(0).parents().last()).add(
                                                      e.length ? e.siblings() : this.siblings()
                                                  )),
                                                  (i = "label[for='" + t.ui.escapeSelector(n) + "']"),
                                                  (o = o.add(s.find(i).addBack(i)))),
                                              this.pushStack(o));
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                1849: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.plugin = {
                                        add: function (e, i, n) {
                                            var o,
                                                s = t.ui[e].prototype;
                                            for (o in n)
                                                (s.plugins[o] = s.plugins[o] || []), s.plugins[o].push([i, n[o]]);
                                        },
                                        call: function (t, e, i, n) {
                                            var o,
                                                s = t.plugins[e];
                                            if (
                                                s &&
                                                (n ||
                                                    (t.element[0].parentNode &&
                                                        11 !== t.element[0].parentNode.nodeType))
                                            )
                                                for (o = 0; o < s.length; o++)
                                                    t.options[s[o][0]] && s[o][1].apply(t.element, i);
                                        },
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                7050: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (
                                        (function () {
                                            var e,
                                                i = Math.max,
                                                n = Math.abs,
                                                o = /left|center|right/,
                                                s = /top|center|bottom/,
                                                r = /[\+\-]\d+(\.[\d]+)?%?/,
                                                a = /^\w+/,
                                                l = /%$/,
                                                c = t.fn.position;
                                            function u(t, e, i) {
                                                return [
                                                    parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1),
                                                    parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1),
                                                ];
                                            }
                                            function h(e, i) {
                                                return parseInt(t.css(e, i), 10) || 0;
                                            }
                                            function d(e) {
                                                var i = e[0];
                                                return 9 === i.nodeType
                                                    ? {
                                                          width: e.width(),
                                                          height: e.height(),
                                                          offset: { top: 0, left: 0 },
                                                      }
                                                    : t.isWindow(i)
                                                      ? {
                                                            width: e.width(),
                                                            height: e.height(),
                                                            offset: { top: e.scrollTop(), left: e.scrollLeft() },
                                                        }
                                                      : i.preventDefault
                                                        ? {
                                                              width: 0,
                                                              height: 0,
                                                              offset: { top: i.pageY, left: i.pageX },
                                                          }
                                                        : {
                                                              width: e.outerWidth(),
                                                              height: e.outerHeight(),
                                                              offset: e.offset(),
                                                          };
                                            }
                                            (t.position = {
                                                scrollbarWidth: function () {
                                                    if (void 0 !== e) return e;
                                                    var i,
                                                        n,
                                                        o = t(
                                                            "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
                                                        ),
                                                        s = o.children()[0];
                                                    return (
                                                        t("body").append(o),
                                                        (i = s.offsetWidth),
                                                        o.css("overflow", "scroll"),
                                                        i === (n = s.offsetWidth) && (n = o[0].clientWidth),
                                                        o.remove(),
                                                        (e = i - n)
                                                    );
                                                },
                                                getScrollInfo: function (e) {
                                                    var i =
                                                            e.isWindow || e.isDocument
                                                                ? ""
                                                                : e.element.css("overflow-x"),
                                                        n =
                                                            e.isWindow || e.isDocument
                                                                ? ""
                                                                : e.element.css("overflow-y"),
                                                        o =
                                                            "scroll" === i ||
                                                            ("auto" === i && e.width < e.element[0].scrollWidth);
                                                    return {
                                                        width:
                                                            "scroll" === n ||
                                                            ("auto" === n && e.height < e.element[0].scrollHeight)
                                                                ? t.position.scrollbarWidth()
                                                                : 0,
                                                        height: o ? t.position.scrollbarWidth() : 0,
                                                    };
                                                },
                                                getWithinInfo: function (e) {
                                                    var i = t(e || window),
                                                        n = t.isWindow(i[0]),
                                                        o = !!i[0] && 9 === i[0].nodeType;
                                                    return {
                                                        element: i,
                                                        isWindow: n,
                                                        isDocument: o,
                                                        offset: n || o ? { left: 0, top: 0 } : t(e).offset(),
                                                        scrollLeft: i.scrollLeft(),
                                                        scrollTop: i.scrollTop(),
                                                        width: i.outerWidth(),
                                                        height: i.outerHeight(),
                                                    };
                                                },
                                            }),
                                                (t.fn.position = function (e) {
                                                    if (!e || !e.of) return c.apply(this, arguments);
                                                    e = t.extend({}, e);
                                                    var l,
                                                        p,
                                                        f,
                                                        g,
                                                        m,
                                                        v,
                                                        y = t(e.of),
                                                        b = t.position.getWithinInfo(e.within),
                                                        _ = t.position.getScrollInfo(b),
                                                        w = (e.collision || "flip").split(" "),
                                                        x = {};
                                                    return (
                                                        (v = d(y)),
                                                        y[0].preventDefault && (e.at = "left top"),
                                                        (p = v.width),
                                                        (f = v.height),
                                                        (g = v.offset),
                                                        (m = t.extend({}, g)),
                                                        t.each(["my", "at"], function () {
                                                            var t,
                                                                i,
                                                                n = (e[this] || "").split(" ");
                                                            1 === n.length &&
                                                                (n = o.test(n[0])
                                                                    ? n.concat(["center"])
                                                                    : s.test(n[0])
                                                                      ? ["center"].concat(n)
                                                                      : ["center", "center"]),
                                                                (n[0] = o.test(n[0]) ? n[0] : "center"),
                                                                (n[1] = s.test(n[1]) ? n[1] : "center"),
                                                                (t = r.exec(n[0])),
                                                                (i = r.exec(n[1])),
                                                                (x[this] = [t ? t[0] : 0, i ? i[0] : 0]),
                                                                (e[this] = [a.exec(n[0])[0], a.exec(n[1])[0]]);
                                                        }),
                                                        1 === w.length && (w[1] = w[0]),
                                                        "right" === e.at[0]
                                                            ? (m.left += p)
                                                            : "center" === e.at[0] && (m.left += p / 2),
                                                        "bottom" === e.at[1]
                                                            ? (m.top += f)
                                                            : "center" === e.at[1] && (m.top += f / 2),
                                                        (l = u(x.at, p, f)),
                                                        (m.left += l[0]),
                                                        (m.top += l[1]),
                                                        this.each(function () {
                                                            var o,
                                                                s,
                                                                r = t(this),
                                                                a = r.outerWidth(),
                                                                c = r.outerHeight(),
                                                                d = h(this, "marginLeft"),
                                                                v = h(this, "marginTop"),
                                                                k = a + d + h(this, "marginRight") + _.width,
                                                                D = c + v + h(this, "marginBottom") + _.height,
                                                                C = t.extend({}, m),
                                                                T = u(x.my, r.outerWidth(), r.outerHeight());
                                                            "right" === e.my[0]
                                                                ? (C.left -= a)
                                                                : "center" === e.my[0] && (C.left -= a / 2),
                                                                "bottom" === e.my[1]
                                                                    ? (C.top -= c)
                                                                    : "center" === e.my[1] && (C.top -= c / 2),
                                                                (C.left += T[0]),
                                                                (C.top += T[1]),
                                                                (o = { marginLeft: d, marginTop: v }),
                                                                t.each(["left", "top"], function (i, n) {
                                                                    t.ui.position[w[i]] &&
                                                                        t.ui.position[w[i]][n](C, {
                                                                            targetWidth: p,
                                                                            targetHeight: f,
                                                                            elemWidth: a,
                                                                            elemHeight: c,
                                                                            collisionPosition: o,
                                                                            collisionWidth: k,
                                                                            collisionHeight: D,
                                                                            offset: [l[0] + T[0], l[1] + T[1]],
                                                                            my: e.my,
                                                                            at: e.at,
                                                                            within: b,
                                                                            elem: r,
                                                                        });
                                                                }),
                                                                e.using &&
                                                                    (s = function (t) {
                                                                        var o = g.left - C.left,
                                                                            s = o + p - a,
                                                                            l = g.top - C.top,
                                                                            u = l + f - c,
                                                                            h = {
                                                                                target: {
                                                                                    element: y,
                                                                                    left: g.left,
                                                                                    top: g.top,
                                                                                    width: p,
                                                                                    height: f,
                                                                                },
                                                                                element: {
                                                                                    element: r,
                                                                                    left: C.left,
                                                                                    top: C.top,
                                                                                    width: a,
                                                                                    height: c,
                                                                                },
                                                                                horizontal:
                                                                                    s < 0
                                                                                        ? "left"
                                                                                        : o > 0
                                                                                          ? "right"
                                                                                          : "center",
                                                                                vertical:
                                                                                    u < 0
                                                                                        ? "top"
                                                                                        : l > 0
                                                                                          ? "bottom"
                                                                                          : "middle",
                                                                            };
                                                                        p < a &&
                                                                            n(o + s) < p &&
                                                                            (h.horizontal = "center"),
                                                                            f < c &&
                                                                                n(l + u) < f &&
                                                                                (h.vertical = "middle"),
                                                                            i(n(o), n(s)) > i(n(l), n(u))
                                                                                ? (h.important = "horizontal")
                                                                                : (h.important = "vertical"),
                                                                            e.using.call(this, t, h);
                                                                    }),
                                                                r.offset(t.extend(C, { using: s }));
                                                        })
                                                    );
                                                }),
                                                (t.ui.position = {
                                                    fit: {
                                                        left: function (t, e) {
                                                            var n,
                                                                o = e.within,
                                                                s = o.isWindow ? o.scrollLeft : o.offset.left,
                                                                r = o.width,
                                                                a = t.left - e.collisionPosition.marginLeft,
                                                                l = s - a,
                                                                c = a + e.collisionWidth - r - s;
                                                            e.collisionWidth > r
                                                                ? l > 0 && c <= 0
                                                                    ? ((n = t.left + l + e.collisionWidth - r - s),
                                                                      (t.left += l - n))
                                                                    : (t.left =
                                                                          c > 0 && l <= 0
                                                                              ? s
                                                                              : l > c
                                                                                ? s + r - e.collisionWidth
                                                                                : s)
                                                                : l > 0
                                                                  ? (t.left += l)
                                                                  : c > 0
                                                                    ? (t.left -= c)
                                                                    : (t.left = i(t.left - a, t.left));
                                                        },
                                                        top: function (t, e) {
                                                            var n,
                                                                o = e.within,
                                                                s = o.isWindow ? o.scrollTop : o.offset.top,
                                                                r = e.within.height,
                                                                a = t.top - e.collisionPosition.marginTop,
                                                                l = s - a,
                                                                c = a + e.collisionHeight - r - s;
                                                            e.collisionHeight > r
                                                                ? l > 0 && c <= 0
                                                                    ? ((n = t.top + l + e.collisionHeight - r - s),
                                                                      (t.top += l - n))
                                                                    : (t.top =
                                                                          c > 0 && l <= 0
                                                                              ? s
                                                                              : l > c
                                                                                ? s + r - e.collisionHeight
                                                                                : s)
                                                                : l > 0
                                                                  ? (t.top += l)
                                                                  : c > 0
                                                                    ? (t.top -= c)
                                                                    : (t.top = i(t.top - a, t.top));
                                                        },
                                                    },
                                                    flip: {
                                                        left: function (t, e) {
                                                            var i,
                                                                o,
                                                                s = e.within,
                                                                r = s.offset.left + s.scrollLeft,
                                                                a = s.width,
                                                                l = s.isWindow ? s.scrollLeft : s.offset.left,
                                                                c = t.left - e.collisionPosition.marginLeft,
                                                                u = c - l,
                                                                h = c + e.collisionWidth - a - l,
                                                                d =
                                                                    "left" === e.my[0]
                                                                        ? -e.elemWidth
                                                                        : "right" === e.my[0]
                                                                          ? e.elemWidth
                                                                          : 0,
                                                                p =
                                                                    "left" === e.at[0]
                                                                        ? e.targetWidth
                                                                        : "right" === e.at[0]
                                                                          ? -e.targetWidth
                                                                          : 0,
                                                                f = -2 * e.offset[0];
                                                            u < 0
                                                                ? ((i = t.left + d + p + f + e.collisionWidth - a - r) <
                                                                      0 ||
                                                                      i < n(u)) &&
                                                                  (t.left += d + p + f)
                                                                : h > 0 &&
                                                                  ((o =
                                                                      t.left -
                                                                      e.collisionPosition.marginLeft +
                                                                      d +
                                                                      p +
                                                                      f -
                                                                      l) > 0 ||
                                                                      n(o) < h) &&
                                                                  (t.left += d + p + f);
                                                        },
                                                        top: function (t, e) {
                                                            var i,
                                                                o,
                                                                s = e.within,
                                                                r = s.offset.top + s.scrollTop,
                                                                a = s.height,
                                                                l = s.isWindow ? s.scrollTop : s.offset.top,
                                                                c = t.top - e.collisionPosition.marginTop,
                                                                u = c - l,
                                                                h = c + e.collisionHeight - a - l,
                                                                d =
                                                                    "top" === e.my[1]
                                                                        ? -e.elemHeight
                                                                        : "bottom" === e.my[1]
                                                                          ? e.elemHeight
                                                                          : 0,
                                                                p =
                                                                    "top" === e.at[1]
                                                                        ? e.targetHeight
                                                                        : "bottom" === e.at[1]
                                                                          ? -e.targetHeight
                                                                          : 0,
                                                                f = -2 * e.offset[1];
                                                            u < 0
                                                                ? ((o = t.top + d + p + f + e.collisionHeight - a - r) <
                                                                      0 ||
                                                                      o < n(u)) &&
                                                                  (t.top += d + p + f)
                                                                : h > 0 &&
                                                                  ((i =
                                                                      t.top -
                                                                      e.collisionPosition.marginTop +
                                                                      d +
                                                                      p +
                                                                      f -
                                                                      l) > 0 ||
                                                                      n(i) < h) &&
                                                                  (t.top += d + p + f);
                                                        },
                                                    },
                                                    flipfit: {
                                                        left: function () {
                                                            t.ui.position.flip.left.apply(this, arguments),
                                                                t.ui.position.fit.left.apply(this, arguments);
                                                        },
                                                        top: function () {
                                                            t.ui.position.flip.top.apply(this, arguments),
                                                                t.ui.position.fit.top.apply(this, arguments);
                                                        },
                                                    },
                                                });
                                        })(),
                                        t.ui.position
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                294: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.safeActiveElement = function (t) {
                                        var e;
                                        try {
                                            e = t.activeElement;
                                        } catch (i) {
                                            e = t.body;
                                        }
                                        return e || (e = t.body), e.nodeName || (e = t.body), e;
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                1810: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui.safeBlur = function (e) {
                                        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                5682: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.fn.scrollParent = function (e) {
                                        var i = this.css("position"),
                                            n = "absolute" === i,
                                            o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                                            s = this.parents()
                                                .filter(function () {
                                                    var e = t(this);
                                                    return (
                                                        (!n || "static" !== e.css("position")) &&
                                                        o.test(
                                                            e.css("overflow") +
                                                                e.css("overflow-y") +
                                                                e.css("overflow-x")
                                                        )
                                                    );
                                                })
                                                .eq(0);
                                        return "fixed" !== i && s.length ? s : t(this[0].ownerDocument || document);
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                5836: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539), i(4848)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return t.extend(t.expr[":"], {
                                        tabbable: function (e) {
                                            var i = t.attr(e, "tabindex"),
                                                n = null != i;
                                            return (!n || i >= 0) && t.ui.focusable(e, n);
                                        },
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                9491: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return t.fn.extend({
                                        uniqueId:
                                            ((e = 0),
                                            function () {
                                                return this.each(function () {
                                                    this.id || (this.id = "ui-id-" + ++e);
                                                });
                                            }),
                                        removeUniqueId: function () {
                                            return this.each(function () {
                                                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
                                            });
                                        },
                                    });
                                    var e;
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                9539: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                2214: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    var e,
                                        i = 0,
                                        n = Array.prototype.slice;
                                    return (
                                        (t.cleanData =
                                            ((e = t.cleanData),
                                            function (i) {
                                                var n, o, s;
                                                for (s = 0; null != (o = i[s]); s++)
                                                    try {
                                                        (n = t._data(o, "events")) &&
                                                            n.remove &&
                                                            t(o).triggerHandler("remove");
                                                    } catch (t) {}
                                                e(i);
                                            })),
                                        (t.widget = function (e, i, n) {
                                            var o,
                                                s,
                                                r,
                                                a = {},
                                                l = e.split(".")[0],
                                                c = l + "-" + (e = e.split(".")[1]);
                                            return (
                                                n || ((n = i), (i = t.Widget)),
                                                t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
                                                (t.expr[":"][c.toLowerCase()] = function (e) {
                                                    return !!t.data(e, c);
                                                }),
                                                (t[l] = t[l] || {}),
                                                (o = t[l][e]),
                                                (s = t[l][e] =
                                                    function (t, e) {
                                                        if (!this._createWidget) return new s(t, e);
                                                        arguments.length && this._createWidget(t, e);
                                                    }),
                                                t.extend(s, o, {
                                                    version: n.version,
                                                    _proto: t.extend({}, n),
                                                    _childConstructors: [],
                                                }),
                                                ((r = new i()).options = t.widget.extend({}, r.options)),
                                                t.each(n, function (e, n) {
                                                    t.isFunction(n)
                                                        ? (a[e] = (function () {
                                                              function t() {
                                                                  return i.prototype[e].apply(this, arguments);
                                                              }
                                                              function o(t) {
                                                                  return i.prototype[e].apply(this, t);
                                                              }
                                                              return function () {
                                                                  var e,
                                                                      i = this._super,
                                                                      s = this._superApply;
                                                                  return (
                                                                      (this._super = t),
                                                                      (this._superApply = o),
                                                                      (e = n.apply(this, arguments)),
                                                                      (this._super = i),
                                                                      (this._superApply = s),
                                                                      e
                                                                  );
                                                              };
                                                          })())
                                                        : (a[e] = n);
                                                }),
                                                (s.prototype = t.widget.extend(
                                                    r,
                                                    { widgetEventPrefix: (o && r.widgetEventPrefix) || e },
                                                    a,
                                                    { constructor: s, namespace: l, widgetName: e, widgetFullName: c }
                                                )),
                                                o
                                                    ? (t.each(o._childConstructors, function (e, i) {
                                                          var n = i.prototype;
                                                          t.widget(n.namespace + "." + n.widgetName, s, i._proto);
                                                      }),
                                                      delete o._childConstructors)
                                                    : i._childConstructors.push(s),
                                                t.widget.bridge(e, s),
                                                s
                                            );
                                        }),
                                        (t.widget.extend = function (e) {
                                            for (var i, o, s = n.call(arguments, 1), r = 0, a = s.length; r < a; r++)
                                                for (i in s[r])
                                                    (o = s[r][i]),
                                                        s[r].hasOwnProperty(i) &&
                                                            void 0 !== o &&
                                                            (t.isPlainObject(o)
                                                                ? (e[i] = t.isPlainObject(e[i])
                                                                      ? t.widget.extend({}, e[i], o)
                                                                      : t.widget.extend({}, o))
                                                                : (e[i] = o));
                                            return e;
                                        }),
                                        (t.widget.bridge = function (e, i) {
                                            var o = i.prototype.widgetFullName || e;
                                            t.fn[e] = function (s) {
                                                var r = "string" == typeof s,
                                                    a = n.call(arguments, 1),
                                                    l = this;
                                                return (
                                                    r
                                                        ? this.length || "instance" !== s
                                                            ? this.each(function () {
                                                                  var i,
                                                                      n = t.data(this, o);
                                                                  return "instance" === s
                                                                      ? ((l = n), !1)
                                                                      : n
                                                                        ? t.isFunction(n[s]) && "_" !== s.charAt(0)
                                                                            ? (i = n[s].apply(n, a)) !== n &&
                                                                              void 0 !== i
                                                                                ? ((l =
                                                                                      i && i.jquery
                                                                                          ? l.pushStack(i.get())
                                                                                          : i),
                                                                                  !1)
                                                                                : void 0
                                                                            : t.error(
                                                                                  "no such method '" +
                                                                                      s +
                                                                                      "' for " +
                                                                                      e +
                                                                                      " widget instance"
                                                                              )
                                                                        : t.error(
                                                                              "cannot call methods on " +
                                                                                  e +
                                                                                  " prior to initialization; attempted to call method '" +
                                                                                  s +
                                                                                  "'"
                                                                          );
                                                              })
                                                            : (l = void 0)
                                                        : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))),
                                                          this.each(function () {
                                                              var e = t.data(this, o);
                                                              e
                                                                  ? (e.option(s || {}), e._init && e._init())
                                                                  : t.data(this, o, new i(s, this));
                                                          })),
                                                    l
                                                );
                                            };
                                        }),
                                        (t.Widget = function () {}),
                                        (t.Widget._childConstructors = []),
                                        (t.Widget.prototype = {
                                            widgetName: "widget",
                                            widgetEventPrefix: "",
                                            defaultElement: "<div>",
                                            options: { classes: {}, disabled: !1, create: null },
                                            _createWidget: function (e, n) {
                                                (n = t(n || this.defaultElement || this)[0]),
                                                    (this.element = t(n)),
                                                    (this.uuid = i++),
                                                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                                                    (this.bindings = t()),
                                                    (this.hoverable = t()),
                                                    (this.focusable = t()),
                                                    (this.classesElementLookup = {}),
                                                    n !== this &&
                                                        (t.data(n, this.widgetFullName, this),
                                                        this._on(!0, this.element, {
                                                            remove: function (t) {
                                                                t.target === n && this.destroy();
                                                            },
                                                        }),
                                                        (this.document = t(
                                                            n.style ? n.ownerDocument : n.document || n
                                                        )),
                                                        (this.window = t(
                                                            this.document[0].defaultView ||
                                                                this.document[0].parentWindow
                                                        ))),
                                                    (this.options = t.widget.extend(
                                                        {},
                                                        this.options,
                                                        this._getCreateOptions(),
                                                        e
                                                    )),
                                                    this._create(),
                                                    this.options.disabled &&
                                                        this._setOptionDisabled(this.options.disabled),
                                                    this._trigger("create", null, this._getCreateEventData()),
                                                    this._init();
                                            },
                                            _getCreateOptions: function () {
                                                return {};
                                            },
                                            _getCreateEventData: t.noop,
                                            _create: t.noop,
                                            _init: t.noop,
                                            destroy: function () {
                                                var e = this;
                                                this._destroy(),
                                                    t.each(this.classesElementLookup, function (t, i) {
                                                        e._removeClass(i, t);
                                                    }),
                                                    this.element
                                                        .off(this.eventNamespace)
                                                        .removeData(this.widgetFullName),
                                                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                                                    this.bindings.off(this.eventNamespace);
                                            },
                                            _destroy: t.noop,
                                            widget: function () {
                                                return this.element;
                                            },
                                            option: function (e, i) {
                                                var n,
                                                    o,
                                                    s,
                                                    r = e;
                                                if (0 === arguments.length) return t.widget.extend({}, this.options);
                                                if ("string" == typeof e)
                                                    if (((r = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
                                                        for (
                                                            o = r[e] = t.widget.extend({}, this.options[e]), s = 0;
                                                            s < n.length - 1;
                                                            s++
                                                        )
                                                            (o[n[s]] = o[n[s]] || {}), (o = o[n[s]]);
                                                        if (((e = n.pop()), 1 === arguments.length))
                                                            return void 0 === o[e] ? null : o[e];
                                                        o[e] = i;
                                                    } else {
                                                        if (1 === arguments.length)
                                                            return void 0 === this.options[e] ? null : this.options[e];
                                                        r[e] = i;
                                                    }
                                                return this._setOptions(r), this;
                                            },
                                            _setOptions: function (t) {
                                                var e;
                                                for (e in t) this._setOption(e, t[e]);
                                                return this;
                                            },
                                            _setOption: function (t, e) {
                                                return (
                                                    "classes" === t && this._setOptionClasses(e),
                                                    (this.options[t] = e),
                                                    "disabled" === t && this._setOptionDisabled(e),
                                                    this
                                                );
                                            },
                                            _setOptionClasses: function (e) {
                                                var i, n, o;
                                                for (i in e)
                                                    (o = this.classesElementLookup[i]),
                                                        e[i] !== this.options.classes[i] &&
                                                            o &&
                                                            o.length &&
                                                            ((n = t(o.get())),
                                                            this._removeClass(o, i),
                                                            n.addClass(
                                                                this._classes({
                                                                    element: n,
                                                                    keys: i,
                                                                    classes: e,
                                                                    add: !0,
                                                                })
                                                            ));
                                            },
                                            _setOptionDisabled: function (t) {
                                                this._toggleClass(
                                                    this.widget(),
                                                    this.widgetFullName + "-disabled",
                                                    null,
                                                    !!t
                                                ),
                                                    t &&
                                                        (this._removeClass(this.hoverable, null, "ui-state-hover"),
                                                        this._removeClass(this.focusable, null, "ui-state-focus"));
                                            },
                                            enable: function () {
                                                return this._setOptions({ disabled: !1 });
                                            },
                                            disable: function () {
                                                return this._setOptions({ disabled: !0 });
                                            },
                                            _classes: function (e) {
                                                var i = [],
                                                    n = this;
                                                function o(o, s) {
                                                    var r, a;
                                                    for (a = 0; a < o.length; a++)
                                                        (r = n.classesElementLookup[o[a]] || t()),
                                                            (r = e.add
                                                                ? t(t.unique(r.get().concat(e.element.get())))
                                                                : t(r.not(e.element).get())),
                                                            (n.classesElementLookup[o[a]] = r),
                                                            i.push(o[a]),
                                                            s && e.classes[o[a]] && i.push(e.classes[o[a]]);
                                                }
                                                return (
                                                    (e = t.extend(
                                                        { element: this.element, classes: this.options.classes || {} },
                                                        e
                                                    )),
                                                    this._on(e.element, { remove: "_untrackClassesElement" }),
                                                    e.keys && o(e.keys.match(/\S+/g) || [], !0),
                                                    e.extra && o(e.extra.match(/\S+/g) || []),
                                                    i.join(" ")
                                                );
                                            },
                                            _untrackClassesElement: function (e) {
                                                var i = this;
                                                t.each(i.classesElementLookup, function (n, o) {
                                                    -1 !== t.inArray(e.target, o) &&
                                                        (i.classesElementLookup[n] = t(o.not(e.target).get()));
                                                });
                                            },
                                            _removeClass: function (t, e, i) {
                                                return this._toggleClass(t, e, i, !1);
                                            },
                                            _addClass: function (t, e, i) {
                                                return this._toggleClass(t, e, i, !0);
                                            },
                                            _toggleClass: function (t, e, i, n) {
                                                n = "boolean" == typeof n ? n : i;
                                                var o = "string" == typeof t || null === t,
                                                    s = {
                                                        extra: o ? e : i,
                                                        keys: o ? t : e,
                                                        element: o ? this.element : t,
                                                        add: n,
                                                    };
                                                return s.element.toggleClass(this._classes(s), n), this;
                                            },
                                            _on: function (e, i, n) {
                                                var o,
                                                    s = this;
                                                "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
                                                    n
                                                        ? ((i = o = t(i)), (this.bindings = this.bindings.add(i)))
                                                        : ((n = i), (i = this.element), (o = this.widget())),
                                                    t.each(n, function (n, r) {
                                                        function a() {
                                                            if (
                                                                e ||
                                                                (!0 !== s.options.disabled &&
                                                                    !t(this).hasClass("ui-state-disabled"))
                                                            )
                                                                return ("string" == typeof r ? s[r] : r).apply(
                                                                    s,
                                                                    arguments
                                                                );
                                                        }
                                                        "string" != typeof r &&
                                                            (a.guid = r.guid = r.guid || a.guid || t.guid++);
                                                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                                                            c = l[1] + s.eventNamespace,
                                                            u = l[2];
                                                        u ? o.on(c, u, a) : i.on(c, a);
                                                    });
                                            },
                                            _off: function (e, i) {
                                                (i =
                                                    (i || "").split(" ").join(this.eventNamespace + " ") +
                                                    this.eventNamespace),
                                                    e.off(i).off(i),
                                                    (this.bindings = t(this.bindings.not(e).get())),
                                                    (this.focusable = t(this.focusable.not(e).get())),
                                                    (this.hoverable = t(this.hoverable.not(e).get()));
                                            },
                                            _delay: function (t, e) {
                                                function i() {
                                                    return ("string" == typeof t ? n[t] : t).apply(n, arguments);
                                                }
                                                var n = this;
                                                return setTimeout(i, e || 0);
                                            },
                                            _hoverable: function (e) {
                                                (this.hoverable = this.hoverable.add(e)),
                                                    this._on(e, {
                                                        mouseenter: function (e) {
                                                            this._addClass(t(e.currentTarget), null, "ui-state-hover");
                                                        },
                                                        mouseleave: function (e) {
                                                            this._removeClass(
                                                                t(e.currentTarget),
                                                                null,
                                                                "ui-state-hover"
                                                            );
                                                        },
                                                    });
                                            },
                                            _focusable: function (e) {
                                                (this.focusable = this.focusable.add(e)),
                                                    this._on(e, {
                                                        focusin: function (e) {
                                                            this._addClass(t(e.currentTarget), null, "ui-state-focus");
                                                        },
                                                        focusout: function (e) {
                                                            this._removeClass(
                                                                t(e.currentTarget),
                                                                null,
                                                                "ui-state-focus"
                                                            );
                                                        },
                                                    });
                                            },
                                            _trigger: function (e, i, n) {
                                                var o,
                                                    s,
                                                    r = this.options[e];
                                                if (
                                                    ((n = n || {}),
                                                    ((i = t.Event(i)).type = (
                                                        e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
                                                    ).toLowerCase()),
                                                    (i.target = this.element[0]),
                                                    (s = i.originalEvent))
                                                )
                                                    for (o in s) o in i || (i[o] = s[o]);
                                                return (
                                                    this.element.trigger(i, n),
                                                    !(
                                                        (t.isFunction(r) &&
                                                            !1 === r.apply(this.element[0], [i].concat(n))) ||
                                                        i.isDefaultPrevented()
                                                    )
                                                );
                                            },
                                        }),
                                        t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
                                            t.Widget.prototype["_" + e] = function (n, o, s) {
                                                var r;
                                                "string" == typeof o && (o = { effect: o });
                                                var a = o ? (!0 === o || "number" == typeof o ? i : o.effect || i) : e;
                                                "number" == typeof (o = o || {}) && (o = { duration: o }),
                                                    (r = !t.isEmptyObject(o)),
                                                    (o.complete = s),
                                                    o.delay && n.delay(o.delay),
                                                    r && t.effects && t.effects.effect[a]
                                                        ? n[e](o)
                                                        : a !== e && n[a]
                                                          ? n[a](o.duration, o.easing, s)
                                                          : n.queue(function (i) {
                                                                t(this)[e](), s && s.call(n[0]), i();
                                                            });
                                            };
                                        }),
                                        t.widget
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                4488: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(2702), i(505), i(1937), i(2214)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    var e;
                                    return (
                                        t.widget("ui.button", {
                                            version: "1.12.1",
                                            defaultElement: "<button>",
                                            options: {
                                                classes: { "ui-button": "ui-corner-all" },
                                                disabled: null,
                                                icon: null,
                                                iconPosition: "beginning",
                                                label: null,
                                                showLabel: !0,
                                            },
                                            _getCreateOptions: function () {
                                                var t,
                                                    e = this._super() || {};
                                                return (
                                                    (this.isInput = this.element.is("input")),
                                                    null != (t = this.element[0].disabled) && (e.disabled = t),
                                                    (this.originalLabel = this.isInput
                                                        ? this.element.val()
                                                        : this.element.html()),
                                                    this.originalLabel && (e.label = this.originalLabel),
                                                    e
                                                );
                                            },
                                            _create: function () {
                                                !this.option.showLabel & !this.options.icon &&
                                                    (this.options.showLabel = !0),
                                                    null == this.options.disabled &&
                                                        (this.options.disabled = this.element[0].disabled || !1),
                                                    (this.hasTitle = !!this.element.attr("title")),
                                                    this.options.label &&
                                                        this.options.label !== this.originalLabel &&
                                                        (this.isInput
                                                            ? this.element.val(this.options.label)
                                                            : this.element.html(this.options.label)),
                                                    this._addClass("ui-button", "ui-widget"),
                                                    this._setOption("disabled", this.options.disabled),
                                                    this._enhance(),
                                                    this.element.is("a") &&
                                                        this._on({
                                                            keyup: function (e) {
                                                                e.keyCode === t.ui.keyCode.SPACE &&
                                                                    (e.preventDefault(),
                                                                    this.element[0].click
                                                                        ? this.element[0].click()
                                                                        : this.element.trigger("click"));
                                                            },
                                                        });
                                            },
                                            _enhance: function () {
                                                this.element.is("button") || this.element.attr("role", "button"),
                                                    this.options.icon &&
                                                        (this._updateIcon("icon", this.options.icon),
                                                        this._updateTooltip());
                                            },
                                            _updateTooltip: function () {
                                                (this.title = this.element.attr("title")),
                                                    this.options.showLabel ||
                                                        this.title ||
                                                        this.element.attr("title", this.options.label);
                                            },
                                            _updateIcon: function (e, i) {
                                                var n = "iconPosition" !== e,
                                                    o = n ? this.options.iconPosition : i,
                                                    s = "top" === o || "bottom" === o;
                                                this.icon
                                                    ? n && this._removeClass(this.icon, null, this.options.icon)
                                                    : ((this.icon = t("<span>")),
                                                      this._addClass(this.icon, "ui-button-icon", "ui-icon"),
                                                      this.options.showLabel || this._addClass("ui-button-icon-only")),
                                                    n && this._addClass(this.icon, null, i),
                                                    this._attachIcon(o),
                                                    s
                                                        ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
                                                          this.iconSpace && this.iconSpace.remove())
                                                        : (this.iconSpace ||
                                                              ((this.iconSpace = t("<span> </span>")),
                                                              this._addClass(this.iconSpace, "ui-button-icon-space")),
                                                          this._removeClass(this.icon, null, "ui-wiget-icon-block"),
                                                          this._attachIconSpace(o));
                                            },
                                            _destroy: function () {
                                                this.element.removeAttr("role"),
                                                    this.icon && this.icon.remove(),
                                                    this.iconSpace && this.iconSpace.remove(),
                                                    this.hasTitle || this.element.removeAttr("title");
                                            },
                                            _attachIconSpace: function (t) {
                                                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
                                                    this.iconSpace
                                                );
                                            },
                                            _attachIcon: function (t) {
                                                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
                                                    this.icon
                                                );
                                            },
                                            _setOptions: function (t) {
                                                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                                                    i = void 0 === t.icon ? this.options.icon : t.icon;
                                                e || i || (t.showLabel = !0), this._super(t);
                                            },
                                            _setOption: function (t, e) {
                                                "icon" === t &&
                                                    (e
                                                        ? this._updateIcon(t, e)
                                                        : this.icon &&
                                                          (this.icon.remove(),
                                                          this.iconSpace && this.iconSpace.remove())),
                                                    "iconPosition" === t && this._updateIcon(t, e),
                                                    "showLabel" === t &&
                                                        (this._toggleClass("ui-button-icon-only", null, !e),
                                                        this._updateTooltip()),
                                                    "label" === t &&
                                                        (this.isInput
                                                            ? this.element.val(e)
                                                            : (this.element.html(e),
                                                              this.icon &&
                                                                  (this._attachIcon(this.options.iconPosition),
                                                                  this._attachIconSpace(this.options.iconPosition)))),
                                                    this._super(t, e),
                                                    "disabled" === t &&
                                                        (this._toggleClass(null, "ui-state-disabled", e),
                                                        (this.element[0].disabled = e),
                                                        e && this.element.blur());
                                            },
                                            refresh: function () {
                                                var t = this.element.is("input, button")
                                                    ? this.element[0].disabled
                                                    : this.element.hasClass("ui-button-disabled");
                                                t !== this.options.disabled && this._setOptions({ disabled: t }),
                                                    this._updateTooltip();
                                            },
                                        }),
                                        !1 !== t.uiBackCompat &&
                                            (t.widget("ui.button", t.ui.button, {
                                                options: { text: !0, icons: { primary: null, secondary: null } },
                                                _create: function () {
                                                    this.options.showLabel &&
                                                        !this.options.text &&
                                                        (this.options.showLabel = this.options.text),
                                                        !this.options.showLabel &&
                                                            this.options.text &&
                                                            (this.options.text = this.options.showLabel),
                                                        this.options.icon ||
                                                        (!this.options.icons.primary && !this.options.icons.secondary)
                                                            ? this.options.icon &&
                                                              (this.options.icons.primary = this.options.icon)
                                                            : this.options.icons.primary
                                                              ? (this.options.icon = this.options.icons.primary)
                                                              : ((this.options.icon = this.options.icons.secondary),
                                                                (this.options.iconPosition = "end")),
                                                        this._super();
                                                },
                                                _setOption: function (t, e) {
                                                    "text" !== t
                                                        ? ("showLabel" === t && (this.options.text = e),
                                                          "icon" === t && (this.options.icons.primary = e),
                                                          "icons" === t &&
                                                              (e.primary
                                                                  ? (this._super("icon", e.primary),
                                                                    this._super("iconPosition", "beginning"))
                                                                  : e.secondary &&
                                                                    (this._super("icon", e.secondary),
                                                                    this._super("iconPosition", "end"))),
                                                          this._superApply(arguments))
                                                        : this._super("showLabel", e);
                                                },
                                            }),
                                            (t.fn.button =
                                                ((e = t.fn.button),
                                                function () {
                                                    return !this.length ||
                                                        (this.length && "INPUT" !== this[0].tagName) ||
                                                        (this.length &&
                                                            "INPUT" === this[0].tagName &&
                                                            "checkbox" !== this.attr("type") &&
                                                            "radio" !== this.attr("type"))
                                                        ? e.apply(this, arguments)
                                                        : (t.ui.checkboxradio ||
                                                              t.error("Checkboxradio widget missing"),
                                                          0 === arguments.length
                                                              ? this.checkboxradio({ icon: !1 })
                                                              : this.checkboxradio.apply(this, arguments));
                                                })),
                                            (t.fn.buttonset = function () {
                                                return (
                                                    t.ui.controlgroup || t.error("Controlgroup widget missing"),
                                                    "option" === arguments[0] &&
                                                    "items" === arguments[1] &&
                                                    arguments[2]
                                                        ? this.controlgroup.apply(this, [
                                                              arguments[0],
                                                              "items.button",
                                                              arguments[2],
                                                          ])
                                                        : "option" === arguments[0] && "items" === arguments[1]
                                                          ? this.controlgroup.apply(this, [
                                                                arguments[0],
                                                                "items.button",
                                                            ])
                                                          : ("object" == typeof arguments[0] &&
                                                                arguments[0].items &&
                                                                (arguments[0].items = { button: arguments[0].items }),
                                                            this.controlgroup.apply(this, arguments))
                                                );
                                            })),
                                        t.ui.button
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                505: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(2432), i(1834), i(1906), i(2214)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (
                                        t.widget("ui.checkboxradio", [
                                            t.ui.formResetMixin,
                                            {
                                                version: "1.12.1",
                                                options: {
                                                    disabled: null,
                                                    label: null,
                                                    icon: !0,
                                                    classes: {
                                                        "ui-checkboxradio-label": "ui-corner-all",
                                                        "ui-checkboxradio-icon": "ui-corner-all",
                                                    },
                                                },
                                                _getCreateOptions: function () {
                                                    var e,
                                                        i,
                                                        n = this,
                                                        o = this._super() || {};
                                                    return (
                                                        this._readType(),
                                                        (i = this.element.labels()),
                                                        (this.label = t(i[i.length - 1])),
                                                        this.label.length ||
                                                            t.error("No label found for checkboxradio widget"),
                                                        (this.originalLabel = ""),
                                                        this.label
                                                            .contents()
                                                            .not(this.element[0])
                                                            .each(function () {
                                                                n.originalLabel +=
                                                                    3 === this.nodeType
                                                                        ? t(this).text()
                                                                        : this.outerHTML;
                                                            }),
                                                        this.originalLabel && (o.label = this.originalLabel),
                                                        null != (e = this.element[0].disabled) && (o.disabled = e),
                                                        o
                                                    );
                                                },
                                                _create: function () {
                                                    var t = this.element[0].checked;
                                                    this._bindFormResetHandler(),
                                                        null == this.options.disabled &&
                                                            (this.options.disabled = this.element[0].disabled),
                                                        this._setOption("disabled", this.options.disabled),
                                                        this._addClass(
                                                            "ui-checkboxradio",
                                                            "ui-helper-hidden-accessible"
                                                        ),
                                                        this._addClass(
                                                            this.label,
                                                            "ui-checkboxradio-label",
                                                            "ui-button ui-widget"
                                                        ),
                                                        "radio" === this.type &&
                                                            this._addClass(this.label, "ui-checkboxradio-radio-label"),
                                                        this.options.label && this.options.label !== this.originalLabel
                                                            ? this._updateLabel()
                                                            : this.originalLabel &&
                                                              (this.options.label = this.originalLabel),
                                                        this._enhance(),
                                                        t &&
                                                            (this._addClass(
                                                                this.label,
                                                                "ui-checkboxradio-checked",
                                                                "ui-state-active"
                                                            ),
                                                            this.icon &&
                                                                this._addClass(this.icon, null, "ui-state-hover")),
                                                        this._on({
                                                            change: "_toggleClasses",
                                                            focus: function () {
                                                                this._addClass(
                                                                    this.label,
                                                                    null,
                                                                    "ui-state-focus ui-visual-focus"
                                                                );
                                                            },
                                                            blur: function () {
                                                                this._removeClass(
                                                                    this.label,
                                                                    null,
                                                                    "ui-state-focus ui-visual-focus"
                                                                );
                                                            },
                                                        });
                                                },
                                                _readType: function () {
                                                    var e = this.element[0].nodeName.toLowerCase();
                                                    (this.type = this.element[0].type),
                                                        ("input" === e && /radio|checkbox/.test(this.type)) ||
                                                            t.error(
                                                                "Can't create checkboxradio on element.nodeName=" +
                                                                    e +
                                                                    " and element.type=" +
                                                                    this.type
                                                            );
                                                },
                                                _enhance: function () {
                                                    this._updateIcon(this.element[0].checked);
                                                },
                                                widget: function () {
                                                    return this.label;
                                                },
                                                _getRadioGroup: function () {
                                                    var e = this.element[0].name,
                                                        i = "input[name='" + t.ui.escapeSelector(e) + "']";
                                                    return e
                                                        ? (this.form.length
                                                              ? t(this.form[0].elements).filter(i)
                                                              : t(i).filter(function () {
                                                                    return 0 === t(this).form().length;
                                                                })
                                                          ).not(this.element)
                                                        : t([]);
                                                },
                                                _toggleClasses: function () {
                                                    var e = this.element[0].checked;
                                                    this._toggleClass(
                                                        this.label,
                                                        "ui-checkboxradio-checked",
                                                        "ui-state-active",
                                                        e
                                                    ),
                                                        this.options.icon &&
                                                            "checkbox" === this.type &&
                                                            this._toggleClass(
                                                                this.icon,
                                                                null,
                                                                "ui-icon-check ui-state-checked",
                                                                e
                                                            )._toggleClass(this.icon, null, "ui-icon-blank", !e),
                                                        "radio" === this.type &&
                                                            this._getRadioGroup().each(function () {
                                                                var e = t(this).checkboxradio("instance");
                                                                e &&
                                                                    e._removeClass(
                                                                        e.label,
                                                                        "ui-checkboxradio-checked",
                                                                        "ui-state-active"
                                                                    );
                                                            });
                                                },
                                                _destroy: function () {
                                                    this._unbindFormResetHandler(),
                                                        this.icon && (this.icon.remove(), this.iconSpace.remove());
                                                },
                                                _setOption: function (t, e) {
                                                    if ("label" !== t || e) {
                                                        if ((this._super(t, e), "disabled" === t))
                                                            return (
                                                                this._toggleClass(
                                                                    this.label,
                                                                    null,
                                                                    "ui-state-disabled",
                                                                    e
                                                                ),
                                                                void (this.element[0].disabled = e)
                                                            );
                                                        this.refresh();
                                                    }
                                                },
                                                _updateIcon: function (e) {
                                                    var i = "ui-icon ui-icon-background ";
                                                    this.options.icon
                                                        ? (this.icon ||
                                                              ((this.icon = t("<span>")),
                                                              (this.iconSpace = t("<span> </span>")),
                                                              this._addClass(
                                                                  this.iconSpace,
                                                                  "ui-checkboxradio-icon-space"
                                                              )),
                                                          "checkbox" === this.type
                                                              ? ((i += e
                                                                    ? "ui-icon-check ui-state-checked"
                                                                    : "ui-icon-blank"),
                                                                this._removeClass(
                                                                    this.icon,
                                                                    null,
                                                                    e ? "ui-icon-blank" : "ui-icon-check"
                                                                ))
                                                              : (i += "ui-icon-blank"),
                                                          this._addClass(this.icon, "ui-checkboxradio-icon", i),
                                                          e ||
                                                              this._removeClass(
                                                                  this.icon,
                                                                  null,
                                                                  "ui-icon-check ui-state-checked"
                                                              ),
                                                          this.icon.prependTo(this.label).after(this.iconSpace))
                                                        : void 0 !== this.icon &&
                                                          (this.icon.remove(),
                                                          this.iconSpace.remove(),
                                                          delete this.icon);
                                                },
                                                _updateLabel: function () {
                                                    var t = this.label.contents().not(this.element[0]);
                                                    this.icon && (t = t.not(this.icon[0])),
                                                        this.iconSpace && (t = t.not(this.iconSpace[0])),
                                                        t.remove(),
                                                        this.label.append(this.options.label);
                                                },
                                                refresh: function () {
                                                    var t = this.element[0].checked,
                                                        e = this.element[0].disabled;
                                                    this._updateIcon(t),
                                                        this._toggleClass(
                                                            this.label,
                                                            "ui-checkboxradio-checked",
                                                            "ui-state-active",
                                                            t
                                                        ),
                                                        null !== this.options.label && this._updateLabel(),
                                                        e !== this.options.disabled &&
                                                            this._setOptions({ disabled: e });
                                                },
                                            },
                                        ]),
                                        t.ui.checkboxradio
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                2702: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(2214)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    var e = /ui-corner-([a-z]){2,6}/g;
                                    return t.widget("ui.controlgroup", {
                                        version: "1.12.1",
                                        defaultElement: "<div>",
                                        options: {
                                            direction: "horizontal",
                                            disabled: null,
                                            onlyVisible: !0,
                                            items: {
                                                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                                                controlgroupLabel: ".ui-controlgroup-label",
                                                checkboxradio: "input[type='checkbox'], input[type='radio']",
                                                selectmenu: "select",
                                                spinner: ".ui-spinner-input",
                                            },
                                        },
                                        _create: function () {
                                            this._enhance();
                                        },
                                        _enhance: function () {
                                            this.element.attr("role", "toolbar"), this.refresh();
                                        },
                                        _destroy: function () {
                                            this._callChildMethod("destroy"),
                                                this.childWidgets.removeData("ui-controlgroup-data"),
                                                this.element.removeAttr("role"),
                                                this.options.items.controlgroupLabel &&
                                                    this.element
                                                        .find(this.options.items.controlgroupLabel)
                                                        .find(".ui-controlgroup-label-contents")
                                                        .contents()
                                                        .unwrap();
                                        },
                                        _initWidgets: function () {
                                            var e = this,
                                                i = [];
                                            t.each(this.options.items, function (n, o) {
                                                var s,
                                                    r = {};
                                                if (o)
                                                    return "controlgroupLabel" === n
                                                        ? ((s = e.element.find(o)).each(function () {
                                                              var e = t(this);
                                                              e.children(".ui-controlgroup-label-contents").length ||
                                                                  e
                                                                      .contents()
                                                                      .wrapAll(
                                                                          "<span class='ui-controlgroup-label-contents'></span>"
                                                                      );
                                                          }),
                                                          e._addClass(
                                                              s,
                                                              null,
                                                              "ui-widget ui-widget-content ui-state-default"
                                                          ),
                                                          void (i = i.concat(s.get())))
                                                        : void (
                                                              t.fn[n] &&
                                                              ((r = e["_" + n + "Options"]
                                                                  ? e["_" + n + "Options"]("middle")
                                                                  : { classes: {} }),
                                                              e.element.find(o).each(function () {
                                                                  var o = t(this),
                                                                      s = o[n]("instance"),
                                                                      a = t.widget.extend({}, r);
                                                                  if (
                                                                      "button" !== n ||
                                                                      !o.parent(".ui-spinner").length
                                                                  ) {
                                                                      s || (s = o[n]()[n]("instance")),
                                                                          s &&
                                                                              (a.classes = e._resolveClassesValues(
                                                                                  a.classes,
                                                                                  s
                                                                              )),
                                                                          o[n](a);
                                                                      var l = o[n]("widget");
                                                                      t.data(
                                                                          l[0],
                                                                          "ui-controlgroup-data",
                                                                          s || o[n]("instance")
                                                                      ),
                                                                          i.push(l[0]);
                                                                  }
                                                              }))
                                                          );
                                            }),
                                                (this.childWidgets = t(t.unique(i))),
                                                this._addClass(this.childWidgets, "ui-controlgroup-item");
                                        },
                                        _callChildMethod: function (e) {
                                            this.childWidgets.each(function () {
                                                var i = t(this).data("ui-controlgroup-data");
                                                i && i[e] && i[e]();
                                            });
                                        },
                                        _updateCornerClass: function (t, e) {
                                            var i =
                                                    "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                                                n = this._buildSimpleOptions(e, "label").classes.label;
                                            this._removeClass(t, null, i), this._addClass(t, null, n);
                                        },
                                        _buildSimpleOptions: function (t, e) {
                                            var i = "vertical" === this.options.direction,
                                                n = { classes: {} };
                                            return (
                                                (n.classes[e] = {
                                                    middle: "",
                                                    first: "ui-corner-" + (i ? "top" : "left"),
                                                    last: "ui-corner-" + (i ? "bottom" : "right"),
                                                    only: "ui-corner-all",
                                                }[t]),
                                                n
                                            );
                                        },
                                        _spinnerOptions: function (t) {
                                            var e = this._buildSimpleOptions(t, "ui-spinner");
                                            return (
                                                (e.classes["ui-spinner-up"] = ""),
                                                (e.classes["ui-spinner-down"] = ""),
                                                e
                                            );
                                        },
                                        _buttonOptions: function (t) {
                                            return this._buildSimpleOptions(t, "ui-button");
                                        },
                                        _checkboxradioOptions: function (t) {
                                            return this._buildSimpleOptions(t, "ui-checkboxradio-label");
                                        },
                                        _selectmenuOptions: function (t) {
                                            var e = "vertical" === this.options.direction;
                                            return {
                                                width: !!e && "auto",
                                                classes: {
                                                    middle: {
                                                        "ui-selectmenu-button-open": "",
                                                        "ui-selectmenu-button-closed": "",
                                                    },
                                                    first: {
                                                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                                                        "ui-selectmenu-button-closed":
                                                            "ui-corner-" + (e ? "top" : "left"),
                                                    },
                                                    last: {
                                                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                                                        "ui-selectmenu-button-closed":
                                                            "ui-corner-" + (e ? "bottom" : "right"),
                                                    },
                                                    only: {
                                                        "ui-selectmenu-button-open": "ui-corner-top",
                                                        "ui-selectmenu-button-closed": "ui-corner-all",
                                                    },
                                                }[t],
                                            };
                                        },
                                        _resolveClassesValues: function (i, n) {
                                            var o = {};
                                            return (
                                                t.each(i, function (s) {
                                                    var r = n.options.classes[s] || "";
                                                    (r = t.trim(r.replace(e, ""))),
                                                        (o[s] = (r + " " + i[s]).replace(/\s+/g, " "));
                                                }),
                                                o
                                            );
                                        },
                                        _setOption: function (t, e) {
                                            "direction" === t &&
                                                this._removeClass("ui-controlgroup-" + this.options.direction),
                                                this._super(t, e),
                                                "disabled" !== t
                                                    ? this.refresh()
                                                    : this._callChildMethod(e ? "disable" : "enable");
                                        },
                                        refresh: function () {
                                            var e,
                                                i = this;
                                            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
                                                "horizontal" === this.options.direction &&
                                                    this._addClass(null, "ui-helper-clearfix"),
                                                this._initWidgets(),
                                                (e = this.childWidgets),
                                                this.options.onlyVisible && (e = e.filter(":visible")),
                                                e.length &&
                                                    (t.each(["first", "last"], function (t, n) {
                                                        var o = e[n]().data("ui-controlgroup-data");
                                                        if (o && i["_" + o.widgetName + "Options"]) {
                                                            var s = i["_" + o.widgetName + "Options"](
                                                                1 === e.length ? "only" : n
                                                            );
                                                            (s.classes = i._resolveClassesValues(s.classes, o)),
                                                                o.element[o.widgetName](s);
                                                        } else i._updateCornerClass(e[n](), n);
                                                    }),
                                                    this._callChildMethod("refresh"));
                                        },
                                    });
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                6734: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9539), i(1937)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    var e;
                                    function i(t) {
                                        for (var e, i; t.length && t[0] !== document; ) {
                                            if (
                                                ("absolute" === (e = t.css("position")) ||
                                                    "relative" === e ||
                                                    "fixed" === e) &&
                                                ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i)
                                            )
                                                return i;
                                            t = t.parent();
                                        }
                                        return 0;
                                    }
                                    function n() {
                                        (this._curInst = null),
                                            (this._keyEvent = !1),
                                            (this._disabledInputs = []),
                                            (this._datepickerShowing = !1),
                                            (this._inDialog = !1),
                                            (this._mainDivId = "ui-datepicker-div"),
                                            (this._inlineClass = "ui-datepicker-inline"),
                                            (this._appendClass = "ui-datepicker-append"),
                                            (this._triggerClass = "ui-datepicker-trigger"),
                                            (this._dialogClass = "ui-datepicker-dialog"),
                                            (this._disableClass = "ui-datepicker-disabled"),
                                            (this._unselectableClass = "ui-datepicker-unselectable"),
                                            (this._currentClass = "ui-datepicker-current-day"),
                                            (this._dayOverClass = "ui-datepicker-days-cell-over"),
                                            (this.regional = []),
                                            (this.regional[""] = {
                                                closeText: "Done",
                                                prevText: "Prev",
                                                nextText: "Next",
                                                currentText: "Today",
                                                monthNames: [
                                                    "January",
                                                    "February",
                                                    "March",
                                                    "April",
                                                    "May",
                                                    "June",
                                                    "July",
                                                    "August",
                                                    "September",
                                                    "October",
                                                    "November",
                                                    "December",
                                                ],
                                                monthNamesShort: [
                                                    "Jan",
                                                    "Feb",
                                                    "Mar",
                                                    "Apr",
                                                    "May",
                                                    "Jun",
                                                    "Jul",
                                                    "Aug",
                                                    "Sep",
                                                    "Oct",
                                                    "Nov",
                                                    "Dec",
                                                ],
                                                dayNames: [
                                                    "Sunday",
                                                    "Monday",
                                                    "Tuesday",
                                                    "Wednesday",
                                                    "Thursday",
                                                    "Friday",
                                                    "Saturday",
                                                ],
                                                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                                                weekHeader: "Wk",
                                                dateFormat: "mm/dd/yy",
                                                firstDay: 0,
                                                isRTL: !1,
                                                showMonthAfterYear: !1,
                                                yearSuffix: "",
                                            }),
                                            (this._defaults = {
                                                showOn: "focus",
                                                showAnim: "fadeIn",
                                                showOptions: {},
                                                defaultDate: null,
                                                appendText: "",
                                                buttonText: "...",
                                                buttonImage: "",
                                                buttonImageOnly: !1,
                                                hideIfNoPrevNext: !1,
                                                navigationAsDateFormat: !1,
                                                gotoCurrent: !1,
                                                changeMonth: !1,
                                                changeYear: !1,
                                                yearRange: "c-10:c+10",
                                                showOtherMonths: !1,
                                                selectOtherMonths: !1,
                                                showWeek: !1,
                                                calculateWeek: this.iso8601Week,
                                                shortYearCutoff: "+10",
                                                minDate: null,
                                                maxDate: null,
                                                duration: "fast",
                                                beforeShowDay: null,
                                                beforeShow: null,
                                                onSelect: null,
                                                onChangeMonthYear: null,
                                                onClose: null,
                                                numberOfMonths: 1,
                                                showCurrentAtPos: 0,
                                                stepMonths: 1,
                                                stepBigMonths: 12,
                                                altField: "",
                                                altFormat: "",
                                                constrainInput: !0,
                                                showButtonPanel: !1,
                                                autoSize: !1,
                                                disabled: !1,
                                            }),
                                            t.extend(this._defaults, this.regional[""]),
                                            (this.regional.en = t.extend(!0, {}, this.regional[""])),
                                            (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
                                            (this.dpDiv = o(
                                                t(
                                                    "<div id='" +
                                                        this._mainDivId +
                                                        "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                                                )
                                            ));
                                    }
                                    function o(e) {
                                        var i =
                                            "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                                        return e
                                            .on("mouseout", i, function () {
                                                t(this).removeClass("ui-state-hover"),
                                                    -1 !== this.className.indexOf("ui-datepicker-prev") &&
                                                        t(this).removeClass("ui-datepicker-prev-hover"),
                                                    -1 !== this.className.indexOf("ui-datepicker-next") &&
                                                        t(this).removeClass("ui-datepicker-next-hover");
                                            })
                                            .on("mouseover", i, s);
                                    }
                                    function s() {
                                        t.datepicker._isDisabledDatepicker(
                                            e.inline ? e.dpDiv.parent()[0] : e.input[0]
                                        ) ||
                                            (t(this)
                                                .parents(".ui-datepicker-calendar")
                                                .find("a")
                                                .removeClass("ui-state-hover"),
                                            t(this).addClass("ui-state-hover"),
                                            -1 !== this.className.indexOf("ui-datepicker-prev") &&
                                                t(this).addClass("ui-datepicker-prev-hover"),
                                            -1 !== this.className.indexOf("ui-datepicker-next") &&
                                                t(this).addClass("ui-datepicker-next-hover"));
                                    }
                                    function r(e, i) {
                                        for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
                                        return e;
                                    }
                                    return (
                                        t.extend(t.ui, { datepicker: { version: "1.12.1" } }),
                                        t.extend(n.prototype, {
                                            markerClassName: "hasDatepicker",
                                            maxRows: 4,
                                            _widgetDatepicker: function () {
                                                return this.dpDiv;
                                            },
                                            setDefaults: function (t) {
                                                return r(this._defaults, t || {}), this;
                                            },
                                            _attachDatepicker: function (e, i) {
                                                var n, o, s;
                                                (o = "div" === (n = e.nodeName.toLowerCase()) || "span" === n),
                                                    e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
                                                    ((s = this._newInst(t(e), o)).settings = t.extend({}, i || {})),
                                                    "input" === n
                                                        ? this._connectDatepicker(e, s)
                                                        : o && this._inlineDatepicker(e, s);
                                            },
                                            _newInst: function (e, i) {
                                                return {
                                                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                                                    input: e,
                                                    selectedDay: 0,
                                                    selectedMonth: 0,
                                                    selectedYear: 0,
                                                    drawMonth: 0,
                                                    drawYear: 0,
                                                    inline: i,
                                                    dpDiv: i
                                                        ? o(
                                                              t(
                                                                  "<div class='" +
                                                                      this._inlineClass +
                                                                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                                                              )
                                                          )
                                                        : this.dpDiv,
                                                };
                                            },
                                            _connectDatepicker: function (e, i) {
                                                var n = t(e);
                                                (i.append = t([])),
                                                    (i.trigger = t([])),
                                                    n.hasClass(this.markerClassName) ||
                                                        (this._attachments(n, i),
                                                        n
                                                            .addClass(this.markerClassName)
                                                            .on("keydown", this._doKeyDown)
                                                            .on("keypress", this._doKeyPress)
                                                            .on("keyup", this._doKeyUp),
                                                        this._autoSize(i),
                                                        t.data(e, "datepicker", i),
                                                        i.settings.disabled && this._disableDatepicker(e));
                                            },
                                            _attachments: function (e, i) {
                                                var n,
                                                    o,
                                                    s,
                                                    r = this._get(i, "appendText"),
                                                    a = this._get(i, "isRTL");
                                                i.append && i.append.remove(),
                                                    r &&
                                                        ((i.append = t(
                                                            "<span class='" + this._appendClass + "'>" + r + "</span>"
                                                        )),
                                                        e[a ? "before" : "after"](i.append)),
                                                    e.off("focus", this._showDatepicker),
                                                    i.trigger && i.trigger.remove(),
                                                    ("focus" !== (n = this._get(i, "showOn")) && "both" !== n) ||
                                                        e.on("focus", this._showDatepicker),
                                                    ("button" !== n && "both" !== n) ||
                                                        ((o = this._get(i, "buttonText")),
                                                        (s = this._get(i, "buttonImage")),
                                                        (i.trigger = t(
                                                            this._get(i, "buttonImageOnly")
                                                                ? t("<img/>")
                                                                      .addClass(this._triggerClass)
                                                                      .attr({ src: s, alt: o, title: o })
                                                                : t("<button type='button'></button>")
                                                                      .addClass(this._triggerClass)
                                                                      .html(
                                                                          s
                                                                              ? t("<img/>").attr({
                                                                                    src: s,
                                                                                    alt: o,
                                                                                    title: o,
                                                                                })
                                                                              : o
                                                                      )
                                                        )),
                                                        e[a ? "before" : "after"](i.trigger),
                                                        i.trigger.on("click", function () {
                                                            return (
                                                                t.datepicker._datepickerShowing &&
                                                                t.datepicker._lastInput === e[0]
                                                                    ? t.datepicker._hideDatepicker()
                                                                    : t.datepicker._datepickerShowing &&
                                                                        t.datepicker._lastInput !== e[0]
                                                                      ? (t.datepicker._hideDatepicker(),
                                                                        t.datepicker._showDatepicker(e[0]))
                                                                      : t.datepicker._showDatepicker(e[0]),
                                                                !1
                                                            );
                                                        }));
                                            },
                                            _autoSize: function (t) {
                                                if (this._get(t, "autoSize") && !t.inline) {
                                                    var e,
                                                        i,
                                                        n,
                                                        o,
                                                        s = new Date(2009, 11, 20),
                                                        r = this._get(t, "dateFormat");
                                                    r.match(/[DM]/) &&
                                                        ((e = function (t) {
                                                            for (i = 0, n = 0, o = 0; o < t.length; o++)
                                                                t[o].length > i && ((i = t[o].length), (n = o));
                                                            return n;
                                                        }),
                                                        s.setMonth(
                                                            e(
                                                                this._get(
                                                                    t,
                                                                    r.match(/MM/) ? "monthNames" : "monthNamesShort"
                                                                )
                                                            )
                                                        ),
                                                        s.setDate(
                                                            e(
                                                                this._get(
                                                                    t,
                                                                    r.match(/DD/) ? "dayNames" : "dayNamesShort"
                                                                )
                                                            ) +
                                                                20 -
                                                                s.getDay()
                                                        )),
                                                        t.input.attr("size", this._formatDate(t, s).length);
                                                }
                                            },
                                            _inlineDatepicker: function (e, i) {
                                                var n = t(e);
                                                n.hasClass(this.markerClassName) ||
                                                    (n.addClass(this.markerClassName).append(i.dpDiv),
                                                    t.data(e, "datepicker", i),
                                                    this._setDate(i, this._getDefaultDate(i), !0),
                                                    this._updateDatepicker(i),
                                                    this._updateAlternate(i),
                                                    i.settings.disabled && this._disableDatepicker(e),
                                                    i.dpDiv.css("display", "block"));
                                            },
                                            _dialogDatepicker: function (e, i, n, o, s) {
                                                var a,
                                                    l,
                                                    c,
                                                    u,
                                                    h,
                                                    d = this._dialogInst;
                                                return (
                                                    d ||
                                                        ((this.uuid += 1),
                                                        (a = "dp" + this.uuid),
                                                        (this._dialogInput = t(
                                                            "<input type='text' id='" +
                                                                a +
                                                                "' style='position: absolute; top: -100px; width: 0px;'/>"
                                                        )),
                                                        this._dialogInput.on("keydown", this._doKeyDown),
                                                        t("body").append(this._dialogInput),
                                                        ((d = this._dialogInst =
                                                            this._newInst(this._dialogInput, !1)).settings = {}),
                                                        t.data(this._dialogInput[0], "datepicker", d)),
                                                    r(d.settings, o || {}),
                                                    (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
                                                    this._dialogInput.val(i),
                                                    (this._pos = s ? (s.length ? s : [s.pageX, s.pageY]) : null),
                                                    this._pos ||
                                                        ((l = document.documentElement.clientWidth),
                                                        (c = document.documentElement.clientHeight),
                                                        (u =
                                                            document.documentElement.scrollLeft ||
                                                            document.body.scrollLeft),
                                                        (h =
                                                            document.documentElement.scrollTop ||
                                                            document.body.scrollTop),
                                                        (this._pos = [l / 2 - 100 + u, c / 2 - 150 + h])),
                                                    this._dialogInput
                                                        .css("left", this._pos[0] + 20 + "px")
                                                        .css("top", this._pos[1] + "px"),
                                                    (d.settings.onSelect = n),
                                                    (this._inDialog = !0),
                                                    this.dpDiv.addClass(this._dialogClass),
                                                    this._showDatepicker(this._dialogInput[0]),
                                                    t.blockUI && t.blockUI(this.dpDiv),
                                                    t.data(this._dialogInput[0], "datepicker", d),
                                                    this
                                                );
                                            },
                                            _destroyDatepicker: function (i) {
                                                var n,
                                                    o = t(i),
                                                    s = t.data(i, "datepicker");
                                                o.hasClass(this.markerClassName) &&
                                                    ((n = i.nodeName.toLowerCase()),
                                                    t.removeData(i, "datepicker"),
                                                    "input" === n
                                                        ? (s.append.remove(),
                                                          s.trigger.remove(),
                                                          o
                                                              .removeClass(this.markerClassName)
                                                              .off("focus", this._showDatepicker)
                                                              .off("keydown", this._doKeyDown)
                                                              .off("keypress", this._doKeyPress)
                                                              .off("keyup", this._doKeyUp))
                                                        : ("div" !== n && "span" !== n) ||
                                                          o.removeClass(this.markerClassName).empty(),
                                                    e === s && (e = null));
                                            },
                                            _enableDatepicker: function (e) {
                                                var i,
                                                    n,
                                                    o = t(e),
                                                    s = t.data(e, "datepicker");
                                                o.hasClass(this.markerClassName) &&
                                                    ("input" === (i = e.nodeName.toLowerCase())
                                                        ? ((e.disabled = !1),
                                                          s.trigger
                                                              .filter("button")
                                                              .each(function () {
                                                                  this.disabled = !1;
                                                              })
                                                              .end()
                                                              .filter("img")
                                                              .css({ opacity: "1.0", cursor: "" }))
                                                        : ("div" !== i && "span" !== i) ||
                                                          ((n = o.children("." + this._inlineClass))
                                                              .children()
                                                              .removeClass("ui-state-disabled"),
                                                          n
                                                              .find(
                                                                  "select.ui-datepicker-month, select.ui-datepicker-year"
                                                              )
                                                              .prop("disabled", !1)),
                                                    (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                                                        return t === e ? null : t;
                                                    })));
                                            },
                                            _disableDatepicker: function (e) {
                                                var i,
                                                    n,
                                                    o = t(e),
                                                    s = t.data(e, "datepicker");
                                                o.hasClass(this.markerClassName) &&
                                                    ("input" === (i = e.nodeName.toLowerCase())
                                                        ? ((e.disabled = !0),
                                                          s.trigger
                                                              .filter("button")
                                                              .each(function () {
                                                                  this.disabled = !0;
                                                              })
                                                              .end()
                                                              .filter("img")
                                                              .css({ opacity: "0.5", cursor: "default" }))
                                                        : ("div" !== i && "span" !== i) ||
                                                          ((n = o.children("." + this._inlineClass))
                                                              .children()
                                                              .addClass("ui-state-disabled"),
                                                          n
                                                              .find(
                                                                  "select.ui-datepicker-month, select.ui-datepicker-year"
                                                              )
                                                              .prop("disabled", !0)),
                                                    (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                                                        return t === e ? null : t;
                                                    })),
                                                    (this._disabledInputs[this._disabledInputs.length] = e));
                                            },
                                            _isDisabledDatepicker: function (t) {
                                                if (!t) return !1;
                                                for (var e = 0; e < this._disabledInputs.length; e++)
                                                    if (this._disabledInputs[e] === t) return !0;
                                                return !1;
                                            },
                                            _getInst: function (e) {
                                                try {
                                                    return t.data(e, "datepicker");
                                                } catch (t) {
                                                    throw "Missing instance data for this datepicker";
                                                }
                                            },
                                            _optionDatepicker: function (e, i, n) {
                                                var o,
                                                    s,
                                                    a,
                                                    l,
                                                    c = this._getInst(e);
                                                if (2 === arguments.length && "string" == typeof i)
                                                    return "defaults" === i
                                                        ? t.extend({}, t.datepicker._defaults)
                                                        : c
                                                          ? "all" === i
                                                              ? t.extend({}, c.settings)
                                                              : this._get(c, i)
                                                          : null;
                                                (o = i || {}),
                                                    "string" == typeof i && ((o = {})[i] = n),
                                                    c &&
                                                        (this._curInst === c && this._hideDatepicker(),
                                                        (s = this._getDateDatepicker(e, !0)),
                                                        (a = this._getMinMaxDate(c, "min")),
                                                        (l = this._getMinMaxDate(c, "max")),
                                                        r(c.settings, o),
                                                        null !== a &&
                                                            void 0 !== o.dateFormat &&
                                                            void 0 === o.minDate &&
                                                            (c.settings.minDate = this._formatDate(c, a)),
                                                        null !== l &&
                                                            void 0 !== o.dateFormat &&
                                                            void 0 === o.maxDate &&
                                                            (c.settings.maxDate = this._formatDate(c, l)),
                                                        "disabled" in o &&
                                                            (o.disabled
                                                                ? this._disableDatepicker(e)
                                                                : this._enableDatepicker(e)),
                                                        this._attachments(t(e), c),
                                                        this._autoSize(c),
                                                        this._setDate(c, s),
                                                        this._updateAlternate(c),
                                                        this._updateDatepicker(c));
                                            },
                                            _changeDatepicker: function (t, e, i) {
                                                this._optionDatepicker(t, e, i);
                                            },
                                            _refreshDatepicker: function (t) {
                                                var e = this._getInst(t);
                                                e && this._updateDatepicker(e);
                                            },
                                            _setDateDatepicker: function (t, e) {
                                                var i = this._getInst(t);
                                                i &&
                                                    (this._setDate(i, e),
                                                    this._updateDatepicker(i),
                                                    this._updateAlternate(i));
                                            },
                                            _getDateDatepicker: function (t, e) {
                                                var i = this._getInst(t);
                                                return (
                                                    i && !i.inline && this._setDateFromField(i, e),
                                                    i ? this._getDate(i) : null
                                                );
                                            },
                                            _doKeyDown: function (e) {
                                                var i,
                                                    n,
                                                    o,
                                                    s = t.datepicker._getInst(e.target),
                                                    r = !0,
                                                    a = s.dpDiv.is(".ui-datepicker-rtl");
                                                if (((s._keyEvent = !0), t.datepicker._datepickerShowing))
                                                    switch (e.keyCode) {
                                                        case 9:
                                                            t.datepicker._hideDatepicker(), (r = !1);
                                                            break;
                                                        case 13:
                                                            return (
                                                                (o = t(
                                                                    "td." +
                                                                        t.datepicker._dayOverClass +
                                                                        ":not(." +
                                                                        t.datepicker._currentClass +
                                                                        ")",
                                                                    s.dpDiv
                                                                ))[0] &&
                                                                    t.datepicker._selectDay(
                                                                        e.target,
                                                                        s.selectedMonth,
                                                                        s.selectedYear,
                                                                        o[0]
                                                                    ),
                                                                (i = t.datepicker._get(s, "onSelect"))
                                                                    ? ((n = t.datepicker._formatDate(s)),
                                                                      i.apply(s.input ? s.input[0] : null, [n, s]))
                                                                    : t.datepicker._hideDatepicker(),
                                                                !1
                                                            );
                                                        case 27:
                                                            t.datepicker._hideDatepicker();
                                                            break;
                                                        case 33:
                                                            t.datepicker._adjustDate(
                                                                e.target,
                                                                e.ctrlKey
                                                                    ? -t.datepicker._get(s, "stepBigMonths")
                                                                    : -t.datepicker._get(s, "stepMonths"),
                                                                "M"
                                                            );
                                                            break;
                                                        case 34:
                                                            t.datepicker._adjustDate(
                                                                e.target,
                                                                e.ctrlKey
                                                                    ? +t.datepicker._get(s, "stepBigMonths")
                                                                    : +t.datepicker._get(s, "stepMonths"),
                                                                "M"
                                                            );
                                                            break;
                                                        case 35:
                                                            (e.ctrlKey || e.metaKey) &&
                                                                t.datepicker._clearDate(e.target),
                                                                (r = e.ctrlKey || e.metaKey);
                                                            break;
                                                        case 36:
                                                            (e.ctrlKey || e.metaKey) &&
                                                                t.datepicker._gotoToday(e.target),
                                                                (r = e.ctrlKey || e.metaKey);
                                                            break;
                                                        case 37:
                                                            (e.ctrlKey || e.metaKey) &&
                                                                t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                                                                (r = e.ctrlKey || e.metaKey),
                                                                e.originalEvent.altKey &&
                                                                    t.datepicker._adjustDate(
                                                                        e.target,
                                                                        e.ctrlKey
                                                                            ? -t.datepicker._get(s, "stepBigMonths")
                                                                            : -t.datepicker._get(s, "stepMonths"),
                                                                        "M"
                                                                    );
                                                            break;
                                                        case 38:
                                                            (e.ctrlKey || e.metaKey) &&
                                                                t.datepicker._adjustDate(e.target, -7, "D"),
                                                                (r = e.ctrlKey || e.metaKey);
                                                            break;
                                                        case 39:
                                                            (e.ctrlKey || e.metaKey) &&
                                                                t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                                                                (r = e.ctrlKey || e.metaKey),
                                                                e.originalEvent.altKey &&
                                                                    t.datepicker._adjustDate(
                                                                        e.target,
                                                                        e.ctrlKey
                                                                            ? +t.datepicker._get(s, "stepBigMonths")
                                                                            : +t.datepicker._get(s, "stepMonths"),
                                                                        "M"
                                                                    );
                                                            break;
                                                        case 40:
                                                            (e.ctrlKey || e.metaKey) &&
                                                                t.datepicker._adjustDate(e.target, 7, "D"),
                                                                (r = e.ctrlKey || e.metaKey);
                                                            break;
                                                        default:
                                                            r = !1;
                                                    }
                                                else
                                                    36 === e.keyCode && e.ctrlKey
                                                        ? t.datepicker._showDatepicker(this)
                                                        : (r = !1);
                                                r && (e.preventDefault(), e.stopPropagation());
                                            },
                                            _doKeyPress: function (e) {
                                                var i,
                                                    n,
                                                    o = t.datepicker._getInst(e.target);
                                                if (t.datepicker._get(o, "constrainInput"))
                                                    return (
                                                        (i = t.datepicker._possibleChars(
                                                            t.datepicker._get(o, "dateFormat")
                                                        )),
                                                        (n = String.fromCharCode(
                                                            null == e.charCode ? e.keyCode : e.charCode
                                                        )),
                                                        e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
                                                    );
                                            },
                                            _doKeyUp: function (e) {
                                                var i = t.datepicker._getInst(e.target);
                                                if (i.input.val() !== i.lastVal)
                                                    try {
                                                        t.datepicker.parseDate(
                                                            t.datepicker._get(i, "dateFormat"),
                                                            i.input ? i.input.val() : null,
                                                            t.datepicker._getFormatConfig(i)
                                                        ) &&
                                                            (t.datepicker._setDateFromField(i),
                                                            t.datepicker._updateAlternate(i),
                                                            t.datepicker._updateDatepicker(i));
                                                    } catch (t) {}
                                                return !0;
                                            },
                                            _showDatepicker: function (e) {
                                                var n, o, s, a, l, c, u;
                                                "input" !== (e = e.target || e).nodeName.toLowerCase() &&
                                                    (e = t("input", e.parentNode)[0]),
                                                    t.datepicker._isDisabledDatepicker(e) ||
                                                        t.datepicker._lastInput === e ||
                                                        ((n = t.datepicker._getInst(e)),
                                                        t.datepicker._curInst &&
                                                            t.datepicker._curInst !== n &&
                                                            (t.datepicker._curInst.dpDiv.stop(!0, !0),
                                                            n &&
                                                                t.datepicker._datepickerShowing &&
                                                                t.datepicker._hideDatepicker(
                                                                    t.datepicker._curInst.input[0]
                                                                )),
                                                        !1 !==
                                                            (s = (o = t.datepicker._get(n, "beforeShow"))
                                                                ? o.apply(e, [e, n])
                                                                : {}) &&
                                                            (r(n.settings, s),
                                                            (n.lastVal = null),
                                                            (t.datepicker._lastInput = e),
                                                            t.datepicker._setDateFromField(n),
                                                            t.datepicker._inDialog && (e.value = ""),
                                                            t.datepicker._pos ||
                                                                ((t.datepicker._pos = t.datepicker._findPos(e)),
                                                                (t.datepicker._pos[1] += e.offsetHeight)),
                                                            (a = !1),
                                                            t(e)
                                                                .parents()
                                                                .each(function () {
                                                                    return !(a |= "fixed" === t(this).css("position"));
                                                                }),
                                                            (l = {
                                                                left: t.datepicker._pos[0],
                                                                top: t.datepicker._pos[1],
                                                            }),
                                                            (t.datepicker._pos = null),
                                                            n.dpDiv.empty(),
                                                            n.dpDiv.css({
                                                                position: "absolute",
                                                                display: "block",
                                                                top: "-1000px",
                                                            }),
                                                            t.datepicker._updateDatepicker(n),
                                                            (l = t.datepicker._checkOffset(n, l, a)),
                                                            n.dpDiv.css({
                                                                position:
                                                                    t.datepicker._inDialog && t.blockUI
                                                                        ? "static"
                                                                        : a
                                                                          ? "fixed"
                                                                          : "absolute",
                                                                display: "none",
                                                                left: l.left + "px",
                                                                top: l.top + "px",
                                                            }),
                                                            n.inline ||
                                                                ((c = t.datepicker._get(n, "showAnim")),
                                                                (u = t.datepicker._get(n, "duration")),
                                                                n.dpDiv.css("z-index", i(t(e)) + 1),
                                                                (t.datepicker._datepickerShowing = !0),
                                                                t.effects && t.effects.effect[c]
                                                                    ? n.dpDiv.show(
                                                                          c,
                                                                          t.datepicker._get(n, "showOptions"),
                                                                          u
                                                                      )
                                                                    : n.dpDiv[c || "show"](c ? u : null),
                                                                t.datepicker._shouldFocusInput(n) &&
                                                                    n.input.trigger("focus"),
                                                                (t.datepicker._curInst = n))));
                                            },
                                            _updateDatepicker: function (i) {
                                                (this.maxRows = 4),
                                                    (e = i),
                                                    i.dpDiv.empty().append(this._generateHTML(i)),
                                                    this._attachHandlers(i);
                                                var n,
                                                    o = this._getNumberOfMonths(i),
                                                    r = o[1],
                                                    a = 17,
                                                    l = i.dpDiv.find("." + this._dayOverClass + " a");
                                                l.length > 0 && s.apply(l.get(0)),
                                                    i.dpDiv
                                                        .removeClass(
                                                            "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
                                                        )
                                                        .width(""),
                                                    r > 1 &&
                                                        i.dpDiv
                                                            .addClass("ui-datepicker-multi-" + r)
                                                            .css("width", a * r + "em"),
                                                    i.dpDiv[(1 !== o[0] || 1 !== o[1] ? "add" : "remove") + "Class"](
                                                        "ui-datepicker-multi"
                                                    ),
                                                    i.dpDiv[(this._get(i, "isRTL") ? "add" : "remove") + "Class"](
                                                        "ui-datepicker-rtl"
                                                    ),
                                                    i === t.datepicker._curInst &&
                                                        t.datepicker._datepickerShowing &&
                                                        t.datepicker._shouldFocusInput(i) &&
                                                        i.input.trigger("focus"),
                                                    i.yearshtml &&
                                                        ((n = i.yearshtml),
                                                        setTimeout(function () {
                                                            n === i.yearshtml &&
                                                                i.yearshtml &&
                                                                i.dpDiv
                                                                    .find("select.ui-datepicker-year:first")
                                                                    .replaceWith(i.yearshtml),
                                                                (n = i.yearshtml = null);
                                                        }, 0));
                                            },
                                            _shouldFocusInput: function (t) {
                                                return (
                                                    t.input &&
                                                    t.input.is(":visible") &&
                                                    !t.input.is(":disabled") &&
                                                    !t.input.is(":focus")
                                                );
                                            },
                                            _checkOffset: function (e, i, n) {
                                                var o = e.dpDiv.outerWidth(),
                                                    s = e.dpDiv.outerHeight(),
                                                    r = e.input ? e.input.outerWidth() : 0,
                                                    a = e.input ? e.input.outerHeight() : 0,
                                                    l =
                                                        document.documentElement.clientWidth +
                                                        (n ? 0 : t(document).scrollLeft()),
                                                    c =
                                                        document.documentElement.clientHeight +
                                                        (n ? 0 : t(document).scrollTop());
                                                return (
                                                    (i.left -= this._get(e, "isRTL") ? o - r : 0),
                                                    (i.left -=
                                                        n && i.left === e.input.offset().left
                                                            ? t(document).scrollLeft()
                                                            : 0),
                                                    (i.top -=
                                                        n && i.top === e.input.offset().top + a
                                                            ? t(document).scrollTop()
                                                            : 0),
                                                    (i.left -= Math.min(
                                                        i.left,
                                                        i.left + o > l && l > o ? Math.abs(i.left + o - l) : 0
                                                    )),
                                                    (i.top -= Math.min(
                                                        i.top,
                                                        i.top + s > c && c > s ? Math.abs(s + a) : 0
                                                    )),
                                                    i
                                                );
                                            },
                                            _findPos: function (e) {
                                                for (
                                                    var i, n = this._getInst(e), o = this._get(n, "isRTL");
                                                    e &&
                                                    ("hidden" === e.type ||
                                                        1 !== e.nodeType ||
                                                        t.expr.filters.hidden(e));

                                                )
                                                    e = e[o ? "previousSibling" : "nextSibling"];
                                                return [(i = t(e).offset()).left, i.top];
                                            },
                                            _hideDatepicker: function (e) {
                                                var i,
                                                    n,
                                                    o,
                                                    s,
                                                    r = this._curInst;
                                                !r ||
                                                    (e && r !== t.data(e, "datepicker")) ||
                                                    (this._datepickerShowing &&
                                                        ((i = this._get(r, "showAnim")),
                                                        (n = this._get(r, "duration")),
                                                        (o = function () {
                                                            t.datepicker._tidyDialog(r);
                                                        }),
                                                        t.effects && (t.effects.effect[i] || t.effects[i])
                                                            ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, o)
                                                            : r.dpDiv[
                                                                  "slideDown" === i
                                                                      ? "slideUp"
                                                                      : "fadeIn" === i
                                                                        ? "fadeOut"
                                                                        : "hide"
                                                              ](i ? n : null, o),
                                                        i || o(),
                                                        (this._datepickerShowing = !1),
                                                        (s = this._get(r, "onClose")) &&
                                                            s.apply(r.input ? r.input[0] : null, [
                                                                r.input ? r.input.val() : "",
                                                                r,
                                                            ]),
                                                        (this._lastInput = null),
                                                        this._inDialog &&
                                                            (this._dialogInput.css({
                                                                position: "absolute",
                                                                left: "0",
                                                                top: "-100px",
                                                            }),
                                                            t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
                                                        (this._inDialog = !1)));
                                            },
                                            _tidyDialog: function (t) {
                                                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
                                            },
                                            _checkExternalClick: function (e) {
                                                if (t.datepicker._curInst) {
                                                    var i = t(e.target),
                                                        n = t.datepicker._getInst(i[0]);
                                                    ((i[0].id === t.datepicker._mainDivId ||
                                                        0 !== i.parents("#" + t.datepicker._mainDivId).length ||
                                                        i.hasClass(t.datepicker.markerClassName) ||
                                                        i.closest("." + t.datepicker._triggerClass).length ||
                                                        !t.datepicker._datepickerShowing ||
                                                        (t.datepicker._inDialog && t.blockUI)) &&
                                                        (!i.hasClass(t.datepicker.markerClassName) ||
                                                            t.datepicker._curInst === n)) ||
                                                        t.datepicker._hideDatepicker();
                                                }
                                            },
                                            _adjustDate: function (e, i, n) {
                                                var o = t(e),
                                                    s = this._getInst(o[0]);
                                                this._isDisabledDatepicker(o[0]) ||
                                                    (this._adjustInstDate(
                                                        s,
                                                        i + ("M" === n ? this._get(s, "showCurrentAtPos") : 0),
                                                        n
                                                    ),
                                                    this._updateDatepicker(s));
                                            },
                                            _gotoToday: function (e) {
                                                var i,
                                                    n = t(e),
                                                    o = this._getInst(n[0]);
                                                this._get(o, "gotoCurrent") && o.currentDay
                                                    ? ((o.selectedDay = o.currentDay),
                                                      (o.drawMonth = o.selectedMonth = o.currentMonth),
                                                      (o.drawYear = o.selectedYear = o.currentYear))
                                                    : ((i = new Date()),
                                                      (o.selectedDay = i.getDate()),
                                                      (o.drawMonth = o.selectedMonth = i.getMonth()),
                                                      (o.drawYear = o.selectedYear = i.getFullYear())),
                                                    this._notifyChange(o),
                                                    this._adjustDate(n);
                                            },
                                            _selectMonthYear: function (e, i, n) {
                                                var o = t(e),
                                                    s = this._getInst(o[0]);
                                                (s["selected" + ("M" === n ? "Month" : "Year")] = s[
                                                    "draw" + ("M" === n ? "Month" : "Year")
                                                ] =
                                                    parseInt(i.options[i.selectedIndex].value, 10)),
                                                    this._notifyChange(s),
                                                    this._adjustDate(o);
                                            },
                                            _selectDay: function (e, i, n, o) {
                                                var s,
                                                    r = t(e);
                                                t(o).hasClass(this._unselectableClass) ||
                                                    this._isDisabledDatepicker(r[0]) ||
                                                    (((s = this._getInst(r[0])).selectedDay = s.currentDay =
                                                        t("a", o).html()),
                                                    (s.selectedMonth = s.currentMonth = i),
                                                    (s.selectedYear = s.currentYear = n),
                                                    this._selectDate(
                                                        e,
                                                        this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)
                                                    ));
                                            },
                                            _clearDate: function (e) {
                                                var i = t(e);
                                                this._selectDate(i, "");
                                            },
                                            _selectDate: function (e, i) {
                                                var n,
                                                    o = t(e),
                                                    s = this._getInst(o[0]);
                                                (i = null != i ? i : this._formatDate(s)),
                                                    s.input && s.input.val(i),
                                                    this._updateAlternate(s),
                                                    (n = this._get(s, "onSelect"))
                                                        ? n.apply(s.input ? s.input[0] : null, [i, s])
                                                        : s.input && s.input.trigger("change"),
                                                    s.inline
                                                        ? this._updateDatepicker(s)
                                                        : (this._hideDatepicker(),
                                                          (this._lastInput = s.input[0]),
                                                          "object" != typeof s.input[0] && s.input.trigger("focus"),
                                                          (this._lastInput = null));
                                            },
                                            _updateAlternate: function (e) {
                                                var i,
                                                    n,
                                                    o,
                                                    s = this._get(e, "altField");
                                                s &&
                                                    ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
                                                    (n = this._getDate(e)),
                                                    (o = this.formatDate(i, n, this._getFormatConfig(e))),
                                                    t(s).val(o));
                                            },
                                            noWeekends: function (t) {
                                                var e = t.getDay();
                                                return [e > 0 && e < 6, ""];
                                            },
                                            iso8601Week: function (t) {
                                                var e,
                                                    i = new Date(t.getTime());
                                                return (
                                                    i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
                                                    (e = i.getTime()),
                                                    i.setMonth(0),
                                                    i.setDate(1),
                                                    Math.floor(Math.round((e - i) / 864e5) / 7) + 1
                                                );
                                            },
                                            parseDate: function (e, i, n) {
                                                if (null == e || null == i) throw "Invalid arguments";
                                                if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
                                                    return null;
                                                var o,
                                                    s,
                                                    r,
                                                    a,
                                                    l = 0,
                                                    c =
                                                        (n ? n.shortYearCutoff : null) ||
                                                        this._defaults.shortYearCutoff,
                                                    u =
                                                        "string" != typeof c
                                                            ? c
                                                            : (new Date().getFullYear() % 100) + parseInt(c, 10),
                                                    h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                                                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                                                    p =
                                                        (n ? n.monthNamesShort : null) ||
                                                        this._defaults.monthNamesShort,
                                                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                                                    g = -1,
                                                    m = -1,
                                                    v = -1,
                                                    y = -1,
                                                    b = !1,
                                                    _ = function (t) {
                                                        var i = o + 1 < e.length && e.charAt(o + 1) === t;
                                                        return i && o++, i;
                                                    },
                                                    w = function (t) {
                                                        var e = _(t),
                                                            n =
                                                                "@" === t
                                                                    ? 14
                                                                    : "!" === t
                                                                      ? 20
                                                                      : "y" === t && e
                                                                        ? 4
                                                                        : "o" === t
                                                                          ? 3
                                                                          : 2,
                                                            o = new RegExp(
                                                                "^\\d{" + ("y" === t ? n : 1) + "," + n + "}"
                                                            ),
                                                            s = i.substring(l).match(o);
                                                        if (!s) throw "Missing number at position " + l;
                                                        return (l += s[0].length), parseInt(s[0], 10);
                                                    },
                                                    x = function (e, n, o) {
                                                        var s = -1,
                                                            r = t
                                                                .map(_(e) ? o : n, function (t, e) {
                                                                    return [[e, t]];
                                                                })
                                                                .sort(function (t, e) {
                                                                    return -(t[1].length - e[1].length);
                                                                });
                                                        if (
                                                            (t.each(r, function (t, e) {
                                                                var n = e[1];
                                                                if (
                                                                    i.substr(l, n.length).toLowerCase() ===
                                                                    n.toLowerCase()
                                                                )
                                                                    return (s = e[0]), (l += n.length), !1;
                                                            }),
                                                            -1 !== s)
                                                        )
                                                            return s + 1;
                                                        throw "Unknown name at position " + l;
                                                    },
                                                    k = function () {
                                                        if (i.charAt(l) !== e.charAt(o))
                                                            throw "Unexpected literal at position " + l;
                                                        l++;
                                                    };
                                                for (o = 0; o < e.length; o++)
                                                    if (b) "'" !== e.charAt(o) || _("'") ? k() : (b = !1);
                                                    else
                                                        switch (e.charAt(o)) {
                                                            case "d":
                                                                v = w("d");
                                                                break;
                                                            case "D":
                                                                x("D", h, d);
                                                                break;
                                                            case "o":
                                                                y = w("o");
                                                                break;
                                                            case "m":
                                                                m = w("m");
                                                                break;
                                                            case "M":
                                                                m = x("M", p, f);
                                                                break;
                                                            case "y":
                                                                g = w("y");
                                                                break;
                                                            case "@":
                                                                (g = (a = new Date(w("@"))).getFullYear()),
                                                                    (m = a.getMonth() + 1),
                                                                    (v = a.getDate());
                                                                break;
                                                            case "!":
                                                                (g = (a = new Date(
                                                                    (w("!") - this._ticksTo1970) / 1e4
                                                                )).getFullYear()),
                                                                    (m = a.getMonth() + 1),
                                                                    (v = a.getDate());
                                                                break;
                                                            case "'":
                                                                _("'") ? k() : (b = !0);
                                                                break;
                                                            default:
                                                                k();
                                                        }
                                                if (l < i.length && ((r = i.substr(l)), !/^\s+/.test(r)))
                                                    throw "Extra/unparsed characters found in date: " + r;
                                                if (
                                                    (-1 === g
                                                        ? (g = new Date().getFullYear())
                                                        : g < 100 &&
                                                          (g +=
                                                              new Date().getFullYear() -
                                                              (new Date().getFullYear() % 100) +
                                                              (g <= u ? 0 : -100)),
                                                    y > -1)
                                                )
                                                    for (m = 1, v = y; !(v <= (s = this._getDaysInMonth(g, m - 1))); )
                                                        m++, (v -= s);
                                                if (
                                                    (a = this._daylightSavingAdjust(
                                                        new Date(g, m - 1, v)
                                                    )).getFullYear() !== g ||
                                                    a.getMonth() + 1 !== m ||
                                                    a.getDate() !== v
                                                )
                                                    throw "Invalid date";
                                                return a;
                                            },
                                            ATOM: "yy-mm-dd",
                                            COOKIE: "D, dd M yy",
                                            ISO_8601: "yy-mm-dd",
                                            RFC_822: "D, d M y",
                                            RFC_850: "DD, dd-M-y",
                                            RFC_1036: "D, d M y",
                                            RFC_1123: "D, d M yy",
                                            RFC_2822: "D, d M yy",
                                            RSS: "D, d M y",
                                            TICKS: "!",
                                            TIMESTAMP: "@",
                                            W3C: "yy-mm-dd",
                                            _ticksTo1970:
                                                24 *
                                                (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
                                                60 *
                                                60 *
                                                1e7,
                                            formatDate: function (t, e, i) {
                                                if (!e) return "";
                                                var n,
                                                    o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                                                    s = (i ? i.dayNames : null) || this._defaults.dayNames,
                                                    r =
                                                        (i ? i.monthNamesShort : null) ||
                                                        this._defaults.monthNamesShort,
                                                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                                                    l = function (e) {
                                                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                                                        return i && n++, i;
                                                    },
                                                    c = function (t, e, i) {
                                                        var n = "" + e;
                                                        if (l(t)) for (; n.length < i; ) n = "0" + n;
                                                        return n;
                                                    },
                                                    u = function (t, e, i, n) {
                                                        return l(t) ? n[e] : i[e];
                                                    },
                                                    h = "",
                                                    d = !1;
                                                if (e)
                                                    for (n = 0; n < t.length; n++)
                                                        if (d)
                                                            "'" !== t.charAt(n) || l("'")
                                                                ? (h += t.charAt(n))
                                                                : (d = !1);
                                                        else
                                                            switch (t.charAt(n)) {
                                                                case "d":
                                                                    h += c("d", e.getDate(), 2);
                                                                    break;
                                                                case "D":
                                                                    h += u("D", e.getDay(), o, s);
                                                                    break;
                                                                case "o":
                                                                    h += c(
                                                                        "o",
                                                                        Math.round(
                                                                            (new Date(
                                                                                e.getFullYear(),
                                                                                e.getMonth(),
                                                                                e.getDate()
                                                                            ).getTime() -
                                                                                new Date(
                                                                                    e.getFullYear(),
                                                                                    0,
                                                                                    0
                                                                                ).getTime()) /
                                                                                864e5
                                                                        ),
                                                                        3
                                                                    );
                                                                    break;
                                                                case "m":
                                                                    h += c("m", e.getMonth() + 1, 2);
                                                                    break;
                                                                case "M":
                                                                    h += u("M", e.getMonth(), r, a);
                                                                    break;
                                                                case "y":
                                                                    h += l("y")
                                                                        ? e.getFullYear()
                                                                        : (e.getFullYear() % 100 < 10 ? "0" : "") +
                                                                          (e.getFullYear() % 100);
                                                                    break;
                                                                case "@":
                                                                    h += e.getTime();
                                                                    break;
                                                                case "!":
                                                                    h += 1e4 * e.getTime() + this._ticksTo1970;
                                                                    break;
                                                                case "'":
                                                                    l("'") ? (h += "'") : (d = !0);
                                                                    break;
                                                                default:
                                                                    h += t.charAt(n);
                                                            }
                                                return h;
                                            },
                                            _possibleChars: function (t) {
                                                var e,
                                                    i = "",
                                                    n = !1,
                                                    o = function (i) {
                                                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                                                        return n && e++, n;
                                                    };
                                                for (e = 0; e < t.length; e++)
                                                    if (n)
                                                        "'" !== t.charAt(e) || o("'") ? (i += t.charAt(e)) : (n = !1);
                                                    else
                                                        switch (t.charAt(e)) {
                                                            case "d":
                                                            case "m":
                                                            case "y":
                                                            case "@":
                                                                i += "0123456789";
                                                                break;
                                                            case "D":
                                                            case "M":
                                                                return null;
                                                            case "'":
                                                                o("'") ? (i += "'") : (n = !0);
                                                                break;
                                                            default:
                                                                i += t.charAt(e);
                                                        }
                                                return i;
                                            },
                                            _get: function (t, e) {
                                                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
                                            },
                                            _setDateFromField: function (t, e) {
                                                if (t.input.val() !== t.lastVal) {
                                                    var i = this._get(t, "dateFormat"),
                                                        n = (t.lastVal = t.input ? t.input.val() : null),
                                                        o = this._getDefaultDate(t),
                                                        s = o,
                                                        r = this._getFormatConfig(t);
                                                    try {
                                                        s = this.parseDate(i, n, r) || o;
                                                    } catch (t) {
                                                        n = e ? "" : n;
                                                    }
                                                    (t.selectedDay = s.getDate()),
                                                        (t.drawMonth = t.selectedMonth = s.getMonth()),
                                                        (t.drawYear = t.selectedYear = s.getFullYear()),
                                                        (t.currentDay = n ? s.getDate() : 0),
                                                        (t.currentMonth = n ? s.getMonth() : 0),
                                                        (t.currentYear = n ? s.getFullYear() : 0),
                                                        this._adjustInstDate(t);
                                                }
                                            },
                                            _getDefaultDate: function (t) {
                                                return this._restrictMinMax(
                                                    t,
                                                    this._determineDate(t, this._get(t, "defaultDate"), new Date())
                                                );
                                            },
                                            _determineDate: function (e, i, n) {
                                                var o = function (t) {
                                                        var e = new Date();
                                                        return e.setDate(e.getDate() + t), e;
                                                    },
                                                    s = function (i) {
                                                        try {
                                                            return t.datepicker.parseDate(
                                                                t.datepicker._get(e, "dateFormat"),
                                                                i,
                                                                t.datepicker._getFormatConfig(e)
                                                            );
                                                        } catch (t) {}
                                                        for (
                                                            var n =
                                                                    (i.toLowerCase().match(/^c/)
                                                                        ? t.datepicker._getDate(e)
                                                                        : null) || new Date(),
                                                                o = n.getFullYear(),
                                                                s = n.getMonth(),
                                                                r = n.getDate(),
                                                                a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                                                                l = a.exec(i);
                                                            l;

                                                        ) {
                                                            switch (l[2] || "d") {
                                                                case "d":
                                                                case "D":
                                                                    r += parseInt(l[1], 10);
                                                                    break;
                                                                case "w":
                                                                case "W":
                                                                    r += 7 * parseInt(l[1], 10);
                                                                    break;
                                                                case "m":
                                                                case "M":
                                                                    (s += parseInt(l[1], 10)),
                                                                        (r = Math.min(
                                                                            r,
                                                                            t.datepicker._getDaysInMonth(o, s)
                                                                        ));
                                                                    break;
                                                                case "y":
                                                                case "Y":
                                                                    (o += parseInt(l[1], 10)),
                                                                        (r = Math.min(
                                                                            r,
                                                                            t.datepicker._getDaysInMonth(o, s)
                                                                        ));
                                                            }
                                                            l = a.exec(i);
                                                        }
                                                        return new Date(o, s, r);
                                                    },
                                                    r =
                                                        null == i || "" === i
                                                            ? n
                                                            : "string" == typeof i
                                                              ? s(i)
                                                              : "number" == typeof i
                                                                ? isNaN(i)
                                                                    ? n
                                                                    : o(i)
                                                                : new Date(i.getTime());
                                                return (
                                                    (r = r && "Invalid Date" === r.toString() ? n : r) &&
                                                        (r.setHours(0),
                                                        r.setMinutes(0),
                                                        r.setSeconds(0),
                                                        r.setMilliseconds(0)),
                                                    this._daylightSavingAdjust(r)
                                                );
                                            },
                                            _daylightSavingAdjust: function (t) {
                                                return t
                                                    ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
                                                    : null;
                                            },
                                            _setDate: function (t, e, i) {
                                                var n = !e,
                                                    o = t.selectedMonth,
                                                    s = t.selectedYear,
                                                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
                                                (t.selectedDay = t.currentDay = r.getDate()),
                                                    (t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth()),
                                                    (t.drawYear = t.selectedYear = t.currentYear = r.getFullYear()),
                                                    (o === t.selectedMonth && s === t.selectedYear) ||
                                                        i ||
                                                        this._notifyChange(t),
                                                    this._adjustInstDate(t),
                                                    t.input && t.input.val(n ? "" : this._formatDate(t));
                                            },
                                            _getDate: function (t) {
                                                return !t.currentYear || (t.input && "" === t.input.val())
                                                    ? null
                                                    : this._daylightSavingAdjust(
                                                          new Date(t.currentYear, t.currentMonth, t.currentDay)
                                                      );
                                            },
                                            _attachHandlers: function (e) {
                                                var i = this._get(e, "stepMonths"),
                                                    n = "#" + e.id.replace(/\\\\/g, "\\");
                                                e.dpDiv.find("[data-handler]").map(function () {
                                                    var e = {
                                                        prev: function () {
                                                            t.datepicker._adjustDate(n, -i, "M");
                                                        },
                                                        next: function () {
                                                            t.datepicker._adjustDate(n, +i, "M");
                                                        },
                                                        hide: function () {
                                                            t.datepicker._hideDatepicker();
                                                        },
                                                        today: function () {
                                                            t.datepicker._gotoToday(n);
                                                        },
                                                        selectDay: function () {
                                                            return (
                                                                t.datepicker._selectDay(
                                                                    n,
                                                                    +this.getAttribute("data-month"),
                                                                    +this.getAttribute("data-year"),
                                                                    this
                                                                ),
                                                                !1
                                                            );
                                                        },
                                                        selectMonth: function () {
                                                            return t.datepicker._selectMonthYear(n, this, "M"), !1;
                                                        },
                                                        selectYear: function () {
                                                            return t.datepicker._selectMonthYear(n, this, "Y"), !1;
                                                        },
                                                    };
                                                    t(this).on(
                                                        this.getAttribute("data-event"),
                                                        e[this.getAttribute("data-handler")]
                                                    );
                                                });
                                            },
                                            _generateHTML: function (t) {
                                                var e,
                                                    i,
                                                    n,
                                                    o,
                                                    s,
                                                    r,
                                                    a,
                                                    l,
                                                    c,
                                                    u,
                                                    h,
                                                    d,
                                                    p,
                                                    f,
                                                    g,
                                                    m,
                                                    v,
                                                    y,
                                                    b,
                                                    _,
                                                    w,
                                                    x,
                                                    k,
                                                    D,
                                                    C,
                                                    T,
                                                    S,
                                                    E,
                                                    A,
                                                    N,
                                                    M,
                                                    P,
                                                    I,
                                                    z,
                                                    H,
                                                    O,
                                                    L,
                                                    j,
                                                    R,
                                                    W = new Date(),
                                                    F = this._daylightSavingAdjust(
                                                        new Date(W.getFullYear(), W.getMonth(), W.getDate())
                                                    ),
                                                    q = this._get(t, "isRTL"),
                                                    Y = this._get(t, "showButtonPanel"),
                                                    B = this._get(t, "hideIfNoPrevNext"),
                                                    U = this._get(t, "navigationAsDateFormat"),
                                                    $ = this._getNumberOfMonths(t),
                                                    K = this._get(t, "showCurrentAtPos"),
                                                    X = this._get(t, "stepMonths"),
                                                    V = 1 !== $[0] || 1 !== $[1],
                                                    G = this._daylightSavingAdjust(
                                                        t.currentDay
                                                            ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                                                            : new Date(9999, 9, 9)
                                                    ),
                                                    J = this._getMinMaxDate(t, "min"),
                                                    Q = this._getMinMaxDate(t, "max"),
                                                    Z = t.drawMonth - K,
                                                    tt = t.drawYear;
                                                if ((Z < 0 && ((Z += 12), tt--), Q))
                                                    for (
                                                        e = this._daylightSavingAdjust(
                                                            new Date(
                                                                Q.getFullYear(),
                                                                Q.getMonth() - $[0] * $[1] + 1,
                                                                Q.getDate()
                                                            )
                                                        ),
                                                            e = J && e < J ? J : e;
                                                        this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

                                                    )
                                                        --Z < 0 && ((Z = 11), tt--);
                                                for (
                                                    t.drawMonth = Z,
                                                        t.drawYear = tt,
                                                        i = this._get(t, "prevText"),
                                                        i = U
                                                            ? this.formatDate(
                                                                  i,
                                                                  this._daylightSavingAdjust(new Date(tt, Z - X, 1)),
                                                                  this._getFormatConfig(t)
                                                              )
                                                            : i,
                                                        n = this._canAdjustMonth(t, -1, tt, Z)
                                                            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                                                              i +
                                                              "'><span class='ui-icon ui-icon-circle-triangle-" +
                                                              (q ? "e" : "w") +
                                                              "'>" +
                                                              i +
                                                              "</span></a>"
                                                            : B
                                                              ? ""
                                                              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                                                                i +
                                                                "'><span class='ui-icon ui-icon-circle-triangle-" +
                                                                (q ? "e" : "w") +
                                                                "'>" +
                                                                i +
                                                                "</span></a>",
                                                        o = this._get(t, "nextText"),
                                                        o = U
                                                            ? this.formatDate(
                                                                  o,
                                                                  this._daylightSavingAdjust(new Date(tt, Z + X, 1)),
                                                                  this._getFormatConfig(t)
                                                              )
                                                            : o,
                                                        s = this._canAdjustMonth(t, 1, tt, Z)
                                                            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                                                              o +
                                                              "'><span class='ui-icon ui-icon-circle-triangle-" +
                                                              (q ? "w" : "e") +
                                                              "'>" +
                                                              o +
                                                              "</span></a>"
                                                            : B
                                                              ? ""
                                                              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                                                                o +
                                                                "'><span class='ui-icon ui-icon-circle-triangle-" +
                                                                (q ? "w" : "e") +
                                                                "'>" +
                                                                o +
                                                                "</span></a>",
                                                        r = this._get(t, "currentText"),
                                                        a = this._get(t, "gotoCurrent") && t.currentDay ? G : F,
                                                        r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r,
                                                        l = t.inline
                                                            ? ""
                                                            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                                                              this._get(t, "closeText") +
                                                              "</button>",
                                                        c = Y
                                                            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                                                              (q ? l : "") +
                                                              (this._isInRange(t, a)
                                                                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                                                                    r +
                                                                    "</button>"
                                                                  : "") +
                                                              (q ? "" : l) +
                                                              "</div>"
                                                            : "",
                                                        u = parseInt(this._get(t, "firstDay"), 10),
                                                        u = isNaN(u) ? 0 : u,
                                                        h = this._get(t, "showWeek"),
                                                        d = this._get(t, "dayNames"),
                                                        p = this._get(t, "dayNamesMin"),
                                                        f = this._get(t, "monthNames"),
                                                        g = this._get(t, "monthNamesShort"),
                                                        m = this._get(t, "beforeShowDay"),
                                                        v = this._get(t, "showOtherMonths"),
                                                        y = this._get(t, "selectOtherMonths"),
                                                        b = this._getDefaultDate(t),
                                                        _ = "",
                                                        x = 0;
                                                    x < $[0];
                                                    x++
                                                ) {
                                                    for (k = "", this.maxRows = 4, D = 0; D < $[1]; D++) {
                                                        if (
                                                            ((C = this._daylightSavingAdjust(
                                                                new Date(tt, Z, t.selectedDay)
                                                            )),
                                                            (T = " ui-corner-all"),
                                                            (S = ""),
                                                            V)
                                                        ) {
                                                            if (((S += "<div class='ui-datepicker-group"), $[1] > 1))
                                                                switch (D) {
                                                                    case 0:
                                                                        (S += " ui-datepicker-group-first"),
                                                                            (T =
                                                                                " ui-corner-" + (q ? "right" : "left"));
                                                                        break;
                                                                    case $[1] - 1:
                                                                        (S += " ui-datepicker-group-last"),
                                                                            (T =
                                                                                " ui-corner-" + (q ? "left" : "right"));
                                                                        break;
                                                                    default:
                                                                        (S += " ui-datepicker-group-middle"), (T = "");
                                                                }
                                                            S += "'>";
                                                        }
                                                        for (
                                                            S +=
                                                                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                                                                T +
                                                                "'>" +
                                                                (/all|left/.test(T) && 0 === x ? (q ? s : n) : "") +
                                                                (/all|right/.test(T) && 0 === x ? (q ? n : s) : "") +
                                                                this._generateMonthYearHeader(
                                                                    t,
                                                                    Z,
                                                                    tt,
                                                                    J,
                                                                    Q,
                                                                    x > 0 || D > 0,
                                                                    f,
                                                                    g
                                                                ) +
                                                                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                                                                E = h
                                                                    ? "<th class='ui-datepicker-week-col'>" +
                                                                      this._get(t, "weekHeader") +
                                                                      "</th>"
                                                                    : "",
                                                                w = 0;
                                                            w < 7;
                                                            w++
                                                        )
                                                            E +=
                                                                "<th scope='col'" +
                                                                ((w + u + 6) % 7 >= 5
                                                                    ? " class='ui-datepicker-week-end'"
                                                                    : "") +
                                                                "><span title='" +
                                                                d[(A = (w + u) % 7)] +
                                                                "'>" +
                                                                p[A] +
                                                                "</span></th>";
                                                        for (
                                                            S += E + "</tr></thead><tbody>",
                                                                N = this._getDaysInMonth(tt, Z),
                                                                tt === t.selectedYear &&
                                                                    Z === t.selectedMonth &&
                                                                    (t.selectedDay = Math.min(t.selectedDay, N)),
                                                                M = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7,
                                                                P = Math.ceil((M + N) / 7),
                                                                I = V && this.maxRows > P ? this.maxRows : P,
                                                                this.maxRows = I,
                                                                z = this._daylightSavingAdjust(new Date(tt, Z, 1 - M)),
                                                                H = 0;
                                                            H < I;
                                                            H++
                                                        ) {
                                                            for (
                                                                S += "<tr>",
                                                                    O = h
                                                                        ? "<td class='ui-datepicker-week-col'>" +
                                                                          this._get(t, "calculateWeek")(z) +
                                                                          "</td>"
                                                                        : "",
                                                                    w = 0;
                                                                w < 7;
                                                                w++
                                                            )
                                                                (L = m
                                                                    ? m.apply(t.input ? t.input[0] : null, [z])
                                                                    : [!0, ""]),
                                                                    (R =
                                                                        ((j = z.getMonth() !== Z) && !y) ||
                                                                        !L[0] ||
                                                                        (J && z < J) ||
                                                                        (Q && z > Q)),
                                                                    (O +=
                                                                        "<td class='" +
                                                                        ((w + u + 6) % 7 >= 5
                                                                            ? " ui-datepicker-week-end"
                                                                            : "") +
                                                                        (j ? " ui-datepicker-other-month" : "") +
                                                                        ((z.getTime() === C.getTime() &&
                                                                            Z === t.selectedMonth &&
                                                                            t._keyEvent) ||
                                                                        (b.getTime() === z.getTime() &&
                                                                            b.getTime() === C.getTime())
                                                                            ? " " + this._dayOverClass
                                                                            : "") +
                                                                        (R
                                                                            ? " " +
                                                                              this._unselectableClass +
                                                                              " ui-state-disabled"
                                                                            : "") +
                                                                        (j && !v
                                                                            ? ""
                                                                            : " " +
                                                                              L[1] +
                                                                              (z.getTime() === G.getTime()
                                                                                  ? " " + this._currentClass
                                                                                  : "") +
                                                                              (z.getTime() === F.getTime()
                                                                                  ? " ui-datepicker-today"
                                                                                  : "")) +
                                                                        "'" +
                                                                        ((j && !v) || !L[2]
                                                                            ? ""
                                                                            : " title='" +
                                                                              L[2].replace(/'/g, "&#39;") +
                                                                              "'") +
                                                                        (R
                                                                            ? ""
                                                                            : " data-handler='selectDay' data-event='click' data-month='" +
                                                                              z.getMonth() +
                                                                              "' data-year='" +
                                                                              z.getFullYear() +
                                                                              "'") +
                                                                        ">" +
                                                                        (j && !v
                                                                            ? "&#xa0;"
                                                                            : R
                                                                              ? "<span class='ui-state-default'>" +
                                                                                z.getDate() +
                                                                                "</span>"
                                                                              : "<a class='ui-state-default" +
                                                                                (z.getTime() === F.getTime()
                                                                                    ? " ui-state-highlight"
                                                                                    : "") +
                                                                                (z.getTime() === G.getTime()
                                                                                    ? " ui-state-active"
                                                                                    : "") +
                                                                                (j ? " ui-priority-secondary" : "") +
                                                                                "' href='#'>" +
                                                                                z.getDate() +
                                                                                "</a>") +
                                                                        "</td>"),
                                                                    z.setDate(z.getDate() + 1),
                                                                    (z = this._daylightSavingAdjust(z));
                                                            S += O + "</tr>";
                                                        }
                                                        ++Z > 11 && ((Z = 0), tt++),
                                                            (k += S +=
                                                                "</tbody></table>" +
                                                                (V
                                                                    ? "</div>" +
                                                                      ($[0] > 0 && D === $[1] - 1
                                                                          ? "<div class='ui-datepicker-row-break'></div>"
                                                                          : "")
                                                                    : ""));
                                                    }
                                                    _ += k;
                                                }
                                                return (_ += c), (t._keyEvent = !1), _;
                                            },
                                            _generateMonthYearHeader: function (t, e, i, n, o, s, r, a) {
                                                var l,
                                                    c,
                                                    u,
                                                    h,
                                                    d,
                                                    p,
                                                    f,
                                                    g,
                                                    m = this._get(t, "changeMonth"),
                                                    v = this._get(t, "changeYear"),
                                                    y = this._get(t, "showMonthAfterYear"),
                                                    b = "<div class='ui-datepicker-title'>",
                                                    _ = "";
                                                if (s || !m)
                                                    _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                                                else {
                                                    for (
                                                        l = n && n.getFullYear() === i,
                                                            c = o && o.getFullYear() === i,
                                                            _ +=
                                                                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                                                            u = 0;
                                                        u < 12;
                                                        u++
                                                    )
                                                        (!l || u >= n.getMonth()) &&
                                                            (!c || u <= o.getMonth()) &&
                                                            (_ +=
                                                                "<option value='" +
                                                                u +
                                                                "'" +
                                                                (u === e ? " selected='selected'" : "") +
                                                                ">" +
                                                                a[u] +
                                                                "</option>");
                                                    _ += "</select>";
                                                }
                                                if ((y || (b += _ + (!s && m && v ? "" : "&#xa0;")), !t.yearshtml))
                                                    if (((t.yearshtml = ""), s || !v))
                                                        b += "<span class='ui-datepicker-year'>" + i + "</span>";
                                                    else {
                                                        for (
                                                            h = this._get(t, "yearRange").split(":"),
                                                                d = new Date().getFullYear(),
                                                                f = (p = function (t) {
                                                                    var e = t.match(/c[+\-].*/)
                                                                        ? i + parseInt(t.substring(1), 10)
                                                                        : t.match(/[+\-].*/)
                                                                          ? d + parseInt(t, 10)
                                                                          : parseInt(t, 10);
                                                                    return isNaN(e) ? d : e;
                                                                })(h[0]),
                                                                g = Math.max(f, p(h[1] || "")),
                                                                f = n ? Math.max(f, n.getFullYear()) : f,
                                                                g = o ? Math.min(g, o.getFullYear()) : g,
                                                                t.yearshtml +=
                                                                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                                                            f <= g;
                                                            f++
                                                        )
                                                            t.yearshtml +=
                                                                "<option value='" +
                                                                f +
                                                                "'" +
                                                                (f === i ? " selected='selected'" : "") +
                                                                ">" +
                                                                f +
                                                                "</option>";
                                                        (t.yearshtml += "</select>"),
                                                            (b += t.yearshtml),
                                                            (t.yearshtml = null);
                                                    }
                                                return (
                                                    (b += this._get(t, "yearSuffix")),
                                                    y && (b += (!s && m && v ? "" : "&#xa0;") + _),
                                                    (b += "</div>")
                                                );
                                            },
                                            _adjustInstDate: function (t, e, i) {
                                                var n = t.selectedYear + ("Y" === i ? e : 0),
                                                    o = t.selectedMonth + ("M" === i ? e : 0),
                                                    s =
                                                        Math.min(t.selectedDay, this._getDaysInMonth(n, o)) +
                                                        ("D" === i ? e : 0),
                                                    r = this._restrictMinMax(
                                                        t,
                                                        this._daylightSavingAdjust(new Date(n, o, s))
                                                    );
                                                (t.selectedDay = r.getDate()),
                                                    (t.drawMonth = t.selectedMonth = r.getMonth()),
                                                    (t.drawYear = t.selectedYear = r.getFullYear()),
                                                    ("M" !== i && "Y" !== i) || this._notifyChange(t);
                                            },
                                            _restrictMinMax: function (t, e) {
                                                var i = this._getMinMaxDate(t, "min"),
                                                    n = this._getMinMaxDate(t, "max"),
                                                    o = i && e < i ? i : e;
                                                return n && o > n ? n : o;
                                            },
                                            _notifyChange: function (t) {
                                                var e = this._get(t, "onChangeMonthYear");
                                                e &&
                                                    e.apply(t.input ? t.input[0] : null, [
                                                        t.selectedYear,
                                                        t.selectedMonth + 1,
                                                        t,
                                                    ]);
                                            },
                                            _getNumberOfMonths: function (t) {
                                                var e = this._get(t, "numberOfMonths");
                                                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
                                            },
                                            _getMinMaxDate: function (t, e) {
                                                return this._determineDate(t, this._get(t, e + "Date"), null);
                                            },
                                            _getDaysInMonth: function (t, e) {
                                                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
                                            },
                                            _getFirstDayOfMonth: function (t, e) {
                                                return new Date(t, e, 1).getDay();
                                            },
                                            _canAdjustMonth: function (t, e, i, n) {
                                                var o = this._getNumberOfMonths(t),
                                                    s = this._daylightSavingAdjust(
                                                        new Date(i, n + (e < 0 ? e : o[0] * o[1]), 1)
                                                    );
                                                return (
                                                    e < 0 &&
                                                        s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())),
                                                    this._isInRange(t, s)
                                                );
                                            },
                                            _isInRange: function (t, e) {
                                                var i,
                                                    n,
                                                    o = this._getMinMaxDate(t, "min"),
                                                    s = this._getMinMaxDate(t, "max"),
                                                    r = null,
                                                    a = null,
                                                    l = this._get(t, "yearRange");
                                                return (
                                                    l &&
                                                        ((i = l.split(":")),
                                                        (n = new Date().getFullYear()),
                                                        (r = parseInt(i[0], 10)),
                                                        (a = parseInt(i[1], 10)),
                                                        i[0].match(/[+\-].*/) && (r += n),
                                                        i[1].match(/[+\-].*/) && (a += n)),
                                                    (!o || e.getTime() >= o.getTime()) &&
                                                        (!s || e.getTime() <= s.getTime()) &&
                                                        (!r || e.getFullYear() >= r) &&
                                                        (!a || e.getFullYear() <= a)
                                                );
                                            },
                                            _getFormatConfig: function (t) {
                                                var e = this._get(t, "shortYearCutoff");
                                                return {
                                                    shortYearCutoff: (e =
                                                        "string" != typeof e
                                                            ? e
                                                            : (new Date().getFullYear() % 100) + parseInt(e, 10)),
                                                    dayNamesShort: this._get(t, "dayNamesShort"),
                                                    dayNames: this._get(t, "dayNames"),
                                                    monthNamesShort: this._get(t, "monthNamesShort"),
                                                    monthNames: this._get(t, "monthNames"),
                                                };
                                            },
                                            _formatDate: function (t, e, i, n) {
                                                e ||
                                                    ((t.currentDay = t.selectedDay),
                                                    (t.currentMonth = t.selectedMonth),
                                                    (t.currentYear = t.selectedYear));
                                                var o = e
                                                    ? "object" == typeof e
                                                        ? e
                                                        : this._daylightSavingAdjust(new Date(n, i, e))
                                                    : this._daylightSavingAdjust(
                                                          new Date(t.currentYear, t.currentMonth, t.currentDay)
                                                      );
                                                return this.formatDate(
                                                    this._get(t, "dateFormat"),
                                                    o,
                                                    this._getFormatConfig(t)
                                                );
                                            },
                                        }),
                                        (t.fn.datepicker = function (e) {
                                            if (!this.length) return this;
                                            t.datepicker.initialized ||
                                                (t(document).on("mousedown", t.datepicker._checkExternalClick),
                                                (t.datepicker.initialized = !0)),
                                                0 === t("#" + t.datepicker._mainDivId).length &&
                                                    t("body").append(t.datepicker.dpDiv);
                                            var i = Array.prototype.slice.call(arguments, 1);
                                            return "string" != typeof e ||
                                                ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
                                                ? "option" === e &&
                                                  2 === arguments.length &&
                                                  "string" == typeof arguments[1]
                                                    ? t.datepicker["_" + e + "Datepicker"].apply(
                                                          t.datepicker,
                                                          [this[0]].concat(i)
                                                      )
                                                    : this.each(function () {
                                                          "string" == typeof e
                                                              ? t.datepicker["_" + e + "Datepicker"].apply(
                                                                    t.datepicker,
                                                                    [this].concat(i)
                                                                )
                                                              : t.datepicker._attachDatepicker(this, e);
                                                      })
                                                : t.datepicker["_" + e + "Datepicker"].apply(
                                                      t.datepicker,
                                                      [this[0]].concat(i)
                                                  );
                                        }),
                                        (t.datepicker = new n()),
                                        (t.datepicker.initialized = !1),
                                        (t.datepicker.uuid = new Date().getTime()),
                                        (t.datepicker.version = "1.12.1"),
                                        t.datepicker
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                874: function (t, e, i) {
                    var n, o, s;
                    (o = [
                        i(585),
                        i(4488),
                        i(8086),
                        i(2848),
                        i(7816),
                        i(4848),
                        i(1937),
                        i(7050),
                        i(294),
                        i(1810),
                        i(5836),
                        i(9491),
                        i(9539),
                        i(2214),
                    ]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (
                                        t.widget("ui.dialog", {
                                            version: "1.12.1",
                                            options: {
                                                appendTo: "body",
                                                autoOpen: !0,
                                                buttons: [],
                                                classes: {
                                                    "ui-dialog": "ui-corner-all",
                                                    "ui-dialog-titlebar": "ui-corner-all",
                                                },
                                                closeOnEscape: !0,
                                                closeText: "Close",
                                                draggable: !0,
                                                hide: null,
                                                height: "auto",
                                                maxHeight: null,
                                                maxWidth: null,
                                                minHeight: 150,
                                                minWidth: 150,
                                                modal: !1,
                                                position: {
                                                    my: "center",
                                                    at: "center",
                                                    of: window,
                                                    collision: "fit",
                                                    using: function (e) {
                                                        var i = t(this).css(e).offset().top;
                                                        i < 0 && t(this).css("top", e.top - i);
                                                    },
                                                },
                                                resizable: !0,
                                                show: null,
                                                title: null,
                                                width: 300,
                                                beforeClose: null,
                                                close: null,
                                                drag: null,
                                                dragStart: null,
                                                dragStop: null,
                                                focus: null,
                                                open: null,
                                                resize: null,
                                                resizeStart: null,
                                                resizeStop: null,
                                            },
                                            sizeRelatedOptions: {
                                                buttons: !0,
                                                height: !0,
                                                maxHeight: !0,
                                                maxWidth: !0,
                                                minHeight: !0,
                                                minWidth: !0,
                                                width: !0,
                                            },
                                            resizableRelatedOptions: {
                                                maxHeight: !0,
                                                maxWidth: !0,
                                                minHeight: !0,
                                                minWidth: !0,
                                            },
                                            _create: function () {
                                                (this.originalCss = {
                                                    display: this.element[0].style.display,
                                                    width: this.element[0].style.width,
                                                    minHeight: this.element[0].style.minHeight,
                                                    maxHeight: this.element[0].style.maxHeight,
                                                    height: this.element[0].style.height,
                                                }),
                                                    (this.originalPosition = {
                                                        parent: this.element.parent(),
                                                        index: this.element.parent().children().index(this.element),
                                                    }),
                                                    (this.originalTitle = this.element.attr("title")),
                                                    null == this.options.title &&
                                                        null != this.originalTitle &&
                                                        (this.options.title = this.originalTitle),
                                                    this.options.disabled && (this.options.disabled = !1),
                                                    this._createWrapper(),
                                                    this.element.show().removeAttr("title").appendTo(this.uiDialog),
                                                    this._addClass("ui-dialog-content", "ui-widget-content"),
                                                    this._createTitlebar(),
                                                    this._createButtonPane(),
                                                    this.options.draggable && t.fn.draggable && this._makeDraggable(),
                                                    this.options.resizable && t.fn.resizable && this._makeResizable(),
                                                    (this._isOpen = !1),
                                                    this._trackFocus();
                                            },
                                            _init: function () {
                                                this.options.autoOpen && this.open();
                                            },
                                            _appendTo: function () {
                                                var e = this.options.appendTo;
                                                return e && (e.jquery || e.nodeType)
                                                    ? t(e)
                                                    : this.document.find(e || "body").eq(0);
                                            },
                                            _destroy: function () {
                                                var t,
                                                    e = this.originalPosition;
                                                this._untrackInstance(),
                                                    this._destroyOverlay(),
                                                    this.element.removeUniqueId().css(this.originalCss).detach(),
                                                    this.uiDialog.remove(),
                                                    this.originalTitle &&
                                                        this.element.attr("title", this.originalTitle),
                                                    (t = e.parent.children().eq(e.index)).length &&
                                                    t[0] !== this.element[0]
                                                        ? t.before(this.element)
                                                        : e.parent.append(this.element);
                                            },
                                            widget: function () {
                                                return this.uiDialog;
                                            },
                                            disable: t.noop,
                                            enable: t.noop,
                                            close: function (e) {
                                                var i = this;
                                                this._isOpen &&
                                                    !1 !== this._trigger("beforeClose", e) &&
                                                    ((this._isOpen = !1),
                                                    (this._focusedElement = null),
                                                    this._destroyOverlay(),
                                                    this._untrackInstance(),
                                                    this.opener.filter(":focusable").trigger("focus").length ||
                                                        t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
                                                    this._hide(this.uiDialog, this.options.hide, function () {
                                                        i._trigger("close", e);
                                                    }));
                                            },
                                            isOpen: function () {
                                                return this._isOpen;
                                            },
                                            moveToTop: function () {
                                                this._moveToTop();
                                            },
                                            _moveToTop: function (e, i) {
                                                var n = !1,
                                                    o = this.uiDialog
                                                        .siblings(".ui-front:visible")
                                                        .map(function () {
                                                            return +t(this).css("z-index");
                                                        })
                                                        .get(),
                                                    s = Math.max.apply(null, o);
                                                return (
                                                    s >= +this.uiDialog.css("z-index") &&
                                                        (this.uiDialog.css("z-index", s + 1), (n = !0)),
                                                    n && !i && this._trigger("focus", e),
                                                    n
                                                );
                                            },
                                            open: function () {
                                                var e = this;
                                                this._isOpen
                                                    ? this._moveToTop() && this._focusTabbable()
                                                    : ((this._isOpen = !0),
                                                      (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
                                                      this._size(),
                                                      this._position(),
                                                      this._createOverlay(),
                                                      this._moveToTop(null, !0),
                                                      this.overlay &&
                                                          this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                                                      this._show(this.uiDialog, this.options.show, function () {
                                                          e._focusTabbable(), e._trigger("focus");
                                                      }),
                                                      this._makeFocusTarget(),
                                                      this._trigger("open"));
                                            },
                                            _focusTabbable: function () {
                                                var t = this._focusedElement;
                                                t || (t = this.element.find("[autofocus]")),
                                                    t.length || (t = this.element.find(":tabbable")),
                                                    t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
                                                    t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
                                                    t.length || (t = this.uiDialog),
                                                    t.eq(0).trigger("focus");
                                            },
                                            _keepFocus: function (e) {
                                                function i() {
                                                    var e = t.ui.safeActiveElement(this.document[0]);
                                                    this.uiDialog[0] === e ||
                                                        t.contains(this.uiDialog[0], e) ||
                                                        this._focusTabbable();
                                                }
                                                e.preventDefault(), i.call(this), this._delay(i);
                                            },
                                            _createWrapper: function () {
                                                (this.uiDialog = t("<div>")
                                                    .hide()
                                                    .attr({ tabIndex: -1, role: "dialog" })
                                                    .appendTo(this._appendTo())),
                                                    this._addClass(
                                                        this.uiDialog,
                                                        "ui-dialog",
                                                        "ui-widget ui-widget-content ui-front"
                                                    ),
                                                    this._on(this.uiDialog, {
                                                        keydown: function (e) {
                                                            if (
                                                                this.options.closeOnEscape &&
                                                                !e.isDefaultPrevented() &&
                                                                e.keyCode &&
                                                                e.keyCode === t.ui.keyCode.ESCAPE
                                                            )
                                                                return e.preventDefault(), void this.close(e);
                                                            if (
                                                                e.keyCode === t.ui.keyCode.TAB &&
                                                                !e.isDefaultPrevented()
                                                            ) {
                                                                var i = this.uiDialog.find(":tabbable"),
                                                                    n = i.filter(":first"),
                                                                    o = i.filter(":last");
                                                                (e.target !== o[0] && e.target !== this.uiDialog[0]) ||
                                                                e.shiftKey
                                                                    ? (e.target !== n[0] &&
                                                                          e.target !== this.uiDialog[0]) ||
                                                                      !e.shiftKey ||
                                                                      (this._delay(function () {
                                                                          o.trigger("focus");
                                                                      }),
                                                                      e.preventDefault())
                                                                    : (this._delay(function () {
                                                                          n.trigger("focus");
                                                                      }),
                                                                      e.preventDefault());
                                                            }
                                                        },
                                                        mousedown: function (t) {
                                                            this._moveToTop(t) && this._focusTabbable();
                                                        },
                                                    }),
                                                    this.element.find("[aria-describedby]").length ||
                                                        this.uiDialog.attr({
                                                            "aria-describedby": this.element.uniqueId().attr("id"),
                                                        });
                                            },
                                            _createTitlebar: function () {
                                                var e;
                                                (this.uiDialogTitlebar = t("<div>")),
                                                    this._addClass(
                                                        this.uiDialogTitlebar,
                                                        "ui-dialog-titlebar",
                                                        "ui-widget-header ui-helper-clearfix"
                                                    ),
                                                    this._on(this.uiDialogTitlebar, {
                                                        mousedown: function (e) {
                                                            t(e.target).closest(".ui-dialog-titlebar-close") ||
                                                                this.uiDialog.trigger("focus");
                                                        },
                                                    }),
                                                    (this.uiDialogTitlebarClose = t("<button type='button'></button>")
                                                        .button({
                                                            label: t("<a>").text(this.options.closeText).html(),
                                                            icon: "ui-icon-closethick",
                                                            showLabel: !1,
                                                        })
                                                        .appendTo(this.uiDialogTitlebar)),
                                                    this._addClass(
                                                        this.uiDialogTitlebarClose,
                                                        "ui-dialog-titlebar-close"
                                                    ),
                                                    this._on(this.uiDialogTitlebarClose, {
                                                        click: function (t) {
                                                            t.preventDefault(), this.close(t);
                                                        },
                                                    }),
                                                    (e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
                                                    this._addClass(e, "ui-dialog-title"),
                                                    this._title(e),
                                                    this.uiDialogTitlebar.prependTo(this.uiDialog),
                                                    this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
                                            },
                                            _title: function (t) {
                                                this.options.title ? t.text(this.options.title) : t.html("&#160;");
                                            },
                                            _createButtonPane: function () {
                                                (this.uiDialogButtonPane = t("<div>")),
                                                    this._addClass(
                                                        this.uiDialogButtonPane,
                                                        "ui-dialog-buttonpane",
                                                        "ui-widget-content ui-helper-clearfix"
                                                    ),
                                                    (this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane)),
                                                    this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
                                                    this._createButtons();
                                            },
                                            _createButtons: function () {
                                                var e = this,
                                                    i = this.options.buttons;
                                                this.uiDialogButtonPane.remove(),
                                                    this.uiButtonSet.empty(),
                                                    t.isEmptyObject(i) || (t.isArray(i) && !i.length)
                                                        ? this._removeClass(this.uiDialog, "ui-dialog-buttons")
                                                        : (t.each(i, function (i, n) {
                                                              var o, s;
                                                              (n = t.isFunction(n) ? { click: n, text: i } : n),
                                                                  (n = t.extend({ type: "button" }, n)),
                                                                  (o = n.click),
                                                                  (s = {
                                                                      icon: n.icon,
                                                                      iconPosition: n.iconPosition,
                                                                      showLabel: n.showLabel,
                                                                      icons: n.icons,
                                                                      text: n.text,
                                                                  }),
                                                                  delete n.click,
                                                                  delete n.icon,
                                                                  delete n.iconPosition,
                                                                  delete n.showLabel,
                                                                  delete n.icons,
                                                                  "boolean" == typeof n.text && delete n.text,
                                                                  t("<button></button>", n)
                                                                      .button(s)
                                                                      .appendTo(e.uiButtonSet)
                                                                      .on("click", function () {
                                                                          o.apply(e.element[0], arguments);
                                                                      });
                                                          }),
                                                          this._addClass(this.uiDialog, "ui-dialog-buttons"),
                                                          this.uiDialogButtonPane.appendTo(this.uiDialog));
                                            },
                                            _makeDraggable: function () {
                                                var e = this,
                                                    i = this.options;
                                                function n(t) {
                                                    return { position: t.position, offset: t.offset };
                                                }
                                                this.uiDialog.draggable({
                                                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                                                    handle: ".ui-dialog-titlebar",
                                                    containment: "document",
                                                    start: function (i, o) {
                                                        e._addClass(t(this), "ui-dialog-dragging"),
                                                            e._blockFrames(),
                                                            e._trigger("dragStart", i, n(o));
                                                    },
                                                    drag: function (t, i) {
                                                        e._trigger("drag", t, n(i));
                                                    },
                                                    stop: function (o, s) {
                                                        var r = s.offset.left - e.document.scrollLeft(),
                                                            a = s.offset.top - e.document.scrollTop();
                                                        (i.position = {
                                                            my: "left top",
                                                            at:
                                                                "left" +
                                                                (r >= 0 ? "+" : "") +
                                                                r +
                                                                " top" +
                                                                (a >= 0 ? "+" : "") +
                                                                a,
                                                            of: e.window,
                                                        }),
                                                            e._removeClass(t(this), "ui-dialog-dragging"),
                                                            e._unblockFrames(),
                                                            e._trigger("dragStop", o, n(s));
                                                    },
                                                });
                                            },
                                            _makeResizable: function () {
                                                var e = this,
                                                    i = this.options,
                                                    n = i.resizable,
                                                    o = this.uiDialog.css("position"),
                                                    s = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                                                function r(t) {
                                                    return {
                                                        originalPosition: t.originalPosition,
                                                        originalSize: t.originalSize,
                                                        position: t.position,
                                                        size: t.size,
                                                    };
                                                }
                                                this.uiDialog
                                                    .resizable({
                                                        cancel: ".ui-dialog-content",
                                                        containment: "document",
                                                        alsoResize: this.element,
                                                        maxWidth: i.maxWidth,
                                                        maxHeight: i.maxHeight,
                                                        minWidth: i.minWidth,
                                                        minHeight: this._minHeight(),
                                                        handles: s,
                                                        start: function (i, n) {
                                                            e._addClass(t(this), "ui-dialog-resizing"),
                                                                e._blockFrames(),
                                                                e._trigger("resizeStart", i, r(n));
                                                        },
                                                        resize: function (t, i) {
                                                            e._trigger("resize", t, r(i));
                                                        },
                                                        stop: function (n, o) {
                                                            var s = e.uiDialog.offset(),
                                                                a = s.left - e.document.scrollLeft(),
                                                                l = s.top - e.document.scrollTop();
                                                            (i.height = e.uiDialog.height()),
                                                                (i.width = e.uiDialog.width()),
                                                                (i.position = {
                                                                    my: "left top",
                                                                    at:
                                                                        "left" +
                                                                        (a >= 0 ? "+" : "") +
                                                                        a +
                                                                        " top" +
                                                                        (l >= 0 ? "+" : "") +
                                                                        l,
                                                                    of: e.window,
                                                                }),
                                                                e._removeClass(t(this), "ui-dialog-resizing"),
                                                                e._unblockFrames(),
                                                                e._trigger("resizeStop", n, r(o));
                                                        },
                                                    })
                                                    .css("position", o);
                                            },
                                            _trackFocus: function () {
                                                this._on(this.widget(), {
                                                    focusin: function (e) {
                                                        this._makeFocusTarget(), (this._focusedElement = t(e.target));
                                                    },
                                                });
                                            },
                                            _makeFocusTarget: function () {
                                                this._untrackInstance(), this._trackingInstances().unshift(this);
                                            },
                                            _untrackInstance: function () {
                                                var e = this._trackingInstances(),
                                                    i = t.inArray(this, e);
                                                -1 !== i && e.splice(i, 1);
                                            },
                                            _trackingInstances: function () {
                                                var t = this.document.data("ui-dialog-instances");
                                                return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
                                            },
                                            _minHeight: function () {
                                                var t = this.options;
                                                return "auto" === t.height
                                                    ? t.minHeight
                                                    : Math.min(t.minHeight, t.height);
                                            },
                                            _position: function () {
                                                var t = this.uiDialog.is(":visible");
                                                t || this.uiDialog.show(),
                                                    this.uiDialog.position(this.options.position),
                                                    t || this.uiDialog.hide();
                                            },
                                            _setOptions: function (e) {
                                                var i = this,
                                                    n = !1,
                                                    o = {};
                                                t.each(e, function (t, e) {
                                                    i._setOption(t, e),
                                                        t in i.sizeRelatedOptions && (n = !0),
                                                        t in i.resizableRelatedOptions && (o[t] = e);
                                                }),
                                                    n && (this._size(), this._position()),
                                                    this.uiDialog.is(":data(ui-resizable)") &&
                                                        this.uiDialog.resizable("option", o);
                                            },
                                            _setOption: function (e, i) {
                                                var n,
                                                    o,
                                                    s = this.uiDialog;
                                                "disabled" !== e &&
                                                    (this._super(e, i),
                                                    "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
                                                    "buttons" === e && this._createButtons(),
                                                    "closeText" === e &&
                                                        this.uiDialogTitlebarClose.button({
                                                            label: t("<a>")
                                                                .text("" + this.options.closeText)
                                                                .html(),
                                                        }),
                                                    "draggable" === e &&
                                                        ((n = s.is(":data(ui-draggable)")) &&
                                                            !i &&
                                                            s.draggable("destroy"),
                                                        !n && i && this._makeDraggable()),
                                                    "position" === e && this._position(),
                                                    "resizable" === e &&
                                                        ((o = s.is(":data(ui-resizable)")) &&
                                                            !i &&
                                                            s.resizable("destroy"),
                                                        o &&
                                                            "string" == typeof i &&
                                                            s.resizable("option", "handles", i),
                                                        o || !1 === i || this._makeResizable()),
                                                    "title" === e &&
                                                        this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
                                            },
                                            _size: function () {
                                                var t,
                                                    e,
                                                    i,
                                                    n = this.options;
                                                this.element
                                                    .show()
                                                    .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
                                                    n.minWidth > n.width && (n.width = n.minWidth),
                                                    (t = this.uiDialog
                                                        .css({ height: "auto", width: n.width })
                                                        .outerHeight()),
                                                    (e = Math.max(0, n.minHeight - t)),
                                                    (i =
                                                        "number" == typeof n.maxHeight
                                                            ? Math.max(0, n.maxHeight - t)
                                                            : "none"),
                                                    "auto" === n.height
                                                        ? this.element.css({
                                                              minHeight: e,
                                                              maxHeight: i,
                                                              height: "auto",
                                                          })
                                                        : this.element.height(Math.max(0, n.height - t)),
                                                    this.uiDialog.is(":data(ui-resizable)") &&
                                                        this.uiDialog.resizable(
                                                            "option",
                                                            "minHeight",
                                                            this._minHeight()
                                                        );
                                            },
                                            _blockFrames: function () {
                                                this.iframeBlocks = this.document.find("iframe").map(function () {
                                                    var e = t(this);
                                                    return t("<div>")
                                                        .css({
                                                            position: "absolute",
                                                            width: e.outerWidth(),
                                                            height: e.outerHeight(),
                                                        })
                                                        .appendTo(e.parent())
                                                        .offset(e.offset())[0];
                                                });
                                            },
                                            _unblockFrames: function () {
                                                this.iframeBlocks &&
                                                    (this.iframeBlocks.remove(), delete this.iframeBlocks);
                                            },
                                            _allowInteraction: function (e) {
                                                return (
                                                    !!t(e.target).closest(".ui-dialog").length ||
                                                    !!t(e.target).closest(".ui-datepicker").length
                                                );
                                            },
                                            _createOverlay: function () {
                                                if (this.options.modal) {
                                                    var e = !0;
                                                    this._delay(function () {
                                                        e = !1;
                                                    }),
                                                        this.document.data("ui-dialog-overlays") ||
                                                            this._on(this.document, {
                                                                focusin: function (t) {
                                                                    e ||
                                                                        this._allowInteraction(t) ||
                                                                        (t.preventDefault(),
                                                                        this._trackingInstances()[0]._focusTabbable());
                                                                },
                                                            }),
                                                        (this.overlay = t("<div>").appendTo(this._appendTo())),
                                                        this._addClass(
                                                            this.overlay,
                                                            null,
                                                            "ui-widget-overlay ui-front"
                                                        ),
                                                        this._on(this.overlay, { mousedown: "_keepFocus" }),
                                                        this.document.data(
                                                            "ui-dialog-overlays",
                                                            (this.document.data("ui-dialog-overlays") || 0) + 1
                                                        );
                                                }
                                            },
                                            _destroyOverlay: function () {
                                                if (this.options.modal && this.overlay) {
                                                    var t = this.document.data("ui-dialog-overlays") - 1;
                                                    t
                                                        ? this.document.data("ui-dialog-overlays", t)
                                                        : (this._off(this.document, "focusin"),
                                                          this.document.removeData("ui-dialog-overlays")),
                                                        this.overlay.remove(),
                                                        (this.overlay = null);
                                                }
                                            },
                                        }),
                                        !1 !== t.uiBackCompat &&
                                            t.widget("ui.dialog", t.ui.dialog, {
                                                options: { dialogClass: "" },
                                                _createWrapper: function () {
                                                    this._super(), this.uiDialog.addClass(this.options.dialogClass);
                                                },
                                                _setOption: function (t, e) {
                                                    "dialogClass" === t &&
                                                        this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
                                                        this._superApply(arguments);
                                                },
                                            }),
                                        t.ui.dialog
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                8086: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(2848), i(7544), i(1849), i(294), i(1810), i(5682), i(9539), i(2214)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (
                                        t.widget("ui.draggable", t.ui.mouse, {
                                            version: "1.12.1",
                                            widgetEventPrefix: "drag",
                                            options: {
                                                addClasses: !0,
                                                appendTo: "parent",
                                                axis: !1,
                                                connectToSortable: !1,
                                                containment: !1,
                                                cursor: "auto",
                                                cursorAt: !1,
                                                grid: !1,
                                                handle: !1,
                                                helper: "original",
                                                iframeFix: !1,
                                                opacity: !1,
                                                refreshPositions: !1,
                                                revert: !1,
                                                revertDuration: 500,
                                                scope: "default",
                                                scroll: !0,
                                                scrollSensitivity: 20,
                                                scrollSpeed: 20,
                                                snap: !1,
                                                snapMode: "both",
                                                snapTolerance: 20,
                                                stack: !1,
                                                zIndex: !1,
                                                drag: null,
                                                start: null,
                                                stop: null,
                                            },
                                            _create: function () {
                                                "original" === this.options.helper && this._setPositionRelative(),
                                                    this.options.addClasses && this._addClass("ui-draggable"),
                                                    this._setHandleClassName(),
                                                    this._mouseInit();
                                            },
                                            _setOption: function (t, e) {
                                                this._super(t, e),
                                                    "handle" === t &&
                                                        (this._removeHandleClassName(), this._setHandleClassName());
                                            },
                                            _destroy: function () {
                                                (this.helper || this.element).is(".ui-draggable-dragging")
                                                    ? (this.destroyOnClear = !0)
                                                    : (this._removeHandleClassName(), this._mouseDestroy());
                                            },
                                            _mouseCapture: function (e) {
                                                var i = this.options;
                                                return !(
                                                    this.helper ||
                                                    i.disabled ||
                                                    t(e.target).closest(".ui-resizable-handle").length > 0 ||
                                                    ((this.handle = this._getHandle(e)),
                                                    !this.handle ||
                                                        (this._blurActiveElement(e),
                                                        this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
                                                        0))
                                                );
                                            },
                                            _blockFrames: function (e) {
                                                this.iframeBlocks = this.document.find(e).map(function () {
                                                    var e = t(this);
                                                    return t("<div>")
                                                        .css("position", "absolute")
                                                        .appendTo(e.parent())
                                                        .outerWidth(e.outerWidth())
                                                        .outerHeight(e.outerHeight())
                                                        .offset(e.offset())[0];
                                                });
                                            },
                                            _unblockFrames: function () {
                                                this.iframeBlocks &&
                                                    (this.iframeBlocks.remove(), delete this.iframeBlocks);
                                            },
                                            _blurActiveElement: function (e) {
                                                var i = t.ui.safeActiveElement(this.document[0]);
                                                t(e.target).closest(i).length || t.ui.safeBlur(i);
                                            },
                                            _mouseStart: function (e) {
                                                var i = this.options;
                                                return (
                                                    (this.helper = this._createHelper(e)),
                                                    this._addClass(this.helper, "ui-draggable-dragging"),
                                                    this._cacheHelperProportions(),
                                                    t.ui.ddmanager && (t.ui.ddmanager.current = this),
                                                    this._cacheMargins(),
                                                    (this.cssPosition = this.helper.css("position")),
                                                    (this.scrollParent = this.helper.scrollParent(!0)),
                                                    (this.offsetParent = this.helper.offsetParent()),
                                                    (this.hasFixedAncestor =
                                                        this.helper.parents().filter(function () {
                                                            return "fixed" === t(this).css("position");
                                                        }).length > 0),
                                                    (this.positionAbs = this.element.offset()),
                                                    this._refreshOffsets(e),
                                                    (this.originalPosition = this.position =
                                                        this._generatePosition(e, !1)),
                                                    (this.originalPageX = e.pageX),
                                                    (this.originalPageY = e.pageY),
                                                    i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                                                    this._setContainment(),
                                                    !1 === this._trigger("start", e)
                                                        ? (this._clear(), !1)
                                                        : (this._cacheHelperProportions(),
                                                          t.ui.ddmanager &&
                                                              !i.dropBehaviour &&
                                                              t.ui.ddmanager.prepareOffsets(this, e),
                                                          this._mouseDrag(e, !0),
                                                          t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                                                          !0)
                                                );
                                            },
                                            _refreshOffsets: function (t) {
                                                (this.offset = {
                                                    top: this.positionAbs.top - this.margins.top,
                                                    left: this.positionAbs.left - this.margins.left,
                                                    scroll: !1,
                                                    parent: this._getParentOffset(),
                                                    relative: this._getRelativeOffset(),
                                                }),
                                                    (this.offset.click = {
                                                        left: t.pageX - this.offset.left,
                                                        top: t.pageY - this.offset.top,
                                                    });
                                            },
                                            _mouseDrag: function (e, i) {
                                                if (
                                                    (this.hasFixedAncestor &&
                                                        (this.offset.parent = this._getParentOffset()),
                                                    (this.position = this._generatePosition(e, !0)),
                                                    (this.positionAbs = this._convertPositionTo("absolute")),
                                                    !i)
                                                ) {
                                                    var n = this._uiHash();
                                                    if (!1 === this._trigger("drag", e, n))
                                                        return this._mouseUp(new t.Event("mouseup", e)), !1;
                                                    this.position = n.position;
                                                }
                                                return (
                                                    (this.helper[0].style.left = this.position.left + "px"),
                                                    (this.helper[0].style.top = this.position.top + "px"),
                                                    t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                                                    !1
                                                );
                                            },
                                            _mouseStop: function (e) {
                                                var i = this,
                                                    n = !1;
                                                return (
                                                    t.ui.ddmanager &&
                                                        !this.options.dropBehaviour &&
                                                        (n = t.ui.ddmanager.drop(this, e)),
                                                    this.dropped && ((n = this.dropped), (this.dropped = !1)),
                                                    ("invalid" === this.options.revert && !n) ||
                                                    ("valid" === this.options.revert && n) ||
                                                    !0 === this.options.revert ||
                                                    (t.isFunction(this.options.revert) &&
                                                        this.options.revert.call(this.element, n))
                                                        ? t(this.helper).animate(
                                                              this.originalPosition,
                                                              parseInt(this.options.revertDuration, 10),
                                                              function () {
                                                                  !1 !== i._trigger("stop", e) && i._clear();
                                                              }
                                                          )
                                                        : !1 !== this._trigger("stop", e) && this._clear(),
                                                    !1
                                                );
                                            },
                                            _mouseUp: function (e) {
                                                return (
                                                    this._unblockFrames(),
                                                    t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
                                                    this.handleElement.is(e.target) && this.element.trigger("focus"),
                                                    t.ui.mouse.prototype._mouseUp.call(this, e)
                                                );
                                            },
                                            cancel: function () {
                                                return (
                                                    this.helper.is(".ui-draggable-dragging")
                                                        ? this._mouseUp(
                                                              new t.Event("mouseup", { target: this.element[0] })
                                                          )
                                                        : this._clear(),
                                                    this
                                                );
                                            },
                                            _getHandle: function (e) {
                                                return (
                                                    !this.options.handle ||
                                                    !!t(e.target).closest(this.element.find(this.options.handle)).length
                                                );
                                            },
                                            _setHandleClassName: function () {
                                                (this.handleElement = this.options.handle
                                                    ? this.element.find(this.options.handle)
                                                    : this.element),
                                                    this._addClass(this.handleElement, "ui-draggable-handle");
                                            },
                                            _removeHandleClassName: function () {
                                                this._removeClass(this.handleElement, "ui-draggable-handle");
                                            },
                                            _createHelper: function (e) {
                                                var i = this.options,
                                                    n = t.isFunction(i.helper),
                                                    o = n
                                                        ? t(i.helper.apply(this.element[0], [e]))
                                                        : "clone" === i.helper
                                                          ? this.element.clone().removeAttr("id")
                                                          : this.element;
                                                return (
                                                    o.parents("body").length ||
                                                        o.appendTo(
                                                            "parent" === i.appendTo
                                                                ? this.element[0].parentNode
                                                                : i.appendTo
                                                        ),
                                                    n && o[0] === this.element[0] && this._setPositionRelative(),
                                                    o[0] === this.element[0] ||
                                                        /(fixed|absolute)/.test(o.css("position")) ||
                                                        o.css("position", "absolute"),
                                                    o
                                                );
                                            },
                                            _setPositionRelative: function () {
                                                /^(?:r|a|f)/.test(this.element.css("position")) ||
                                                    (this.element[0].style.position = "relative");
                                            },
                                            _adjustOffsetFromHelper: function (e) {
                                                "string" == typeof e && (e = e.split(" ")),
                                                    t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                                                    "left" in e &&
                                                        (this.offset.click.left = e.left + this.margins.left),
                                                    "right" in e &&
                                                        (this.offset.click.left =
                                                            this.helperProportions.width - e.right + this.margins.left),
                                                    "top" in e && (this.offset.click.top = e.top + this.margins.top),
                                                    "bottom" in e &&
                                                        (this.offset.click.top =
                                                            this.helperProportions.height -
                                                            e.bottom +
                                                            this.margins.top);
                                            },
                                            _isRootNode: function (t) {
                                                return /(html|body)/i.test(t.tagName) || t === this.document[0];
                                            },
                                            _getParentOffset: function () {
                                                var e = this.offsetParent.offset(),
                                                    i = this.document[0];
                                                return (
                                                    "absolute" === this.cssPosition &&
                                                        this.scrollParent[0] !== i &&
                                                        t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                                                        ((e.left += this.scrollParent.scrollLeft()),
                                                        (e.top += this.scrollParent.scrollTop())),
                                                    this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
                                                    {
                                                        top:
                                                            e.top +
                                                            (parseInt(this.offsetParent.css("borderTopWidth"), 10) ||
                                                                0),
                                                        left:
                                                            e.left +
                                                            (parseInt(this.offsetParent.css("borderLeftWidth"), 10) ||
                                                                0),
                                                    }
                                                );
                                            },
                                            _getRelativeOffset: function () {
                                                if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                                                var t = this.element.position(),
                                                    e = this._isRootNode(this.scrollParent[0]);
                                                return {
                                                    top:
                                                        t.top -
                                                        (parseInt(this.helper.css("top"), 10) || 0) +
                                                        (e ? 0 : this.scrollParent.scrollTop()),
                                                    left:
                                                        t.left -
                                                        (parseInt(this.helper.css("left"), 10) || 0) +
                                                        (e ? 0 : this.scrollParent.scrollLeft()),
                                                };
                                            },
                                            _cacheMargins: function () {
                                                this.margins = {
                                                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                                                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                                                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                                                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                                                };
                                            },
                                            _cacheHelperProportions: function () {
                                                this.helperProportions = {
                                                    width: this.helper.outerWidth(),
                                                    height: this.helper.outerHeight(),
                                                };
                                            },
                                            _setContainment: function () {
                                                var e,
                                                    i,
                                                    n,
                                                    o = this.options,
                                                    s = this.document[0];
                                                (this.relativeContainer = null),
                                                    o.containment
                                                        ? "window" !== o.containment
                                                            ? "document" !== o.containment
                                                                ? o.containment.constructor !== Array
                                                                    ? ("parent" === o.containment &&
                                                                          (o.containment = this.helper[0].parentNode),
                                                                      (n = (i = t(o.containment))[0]) &&
                                                                          ((e = /(scroll|auto)/.test(
                                                                              i.css("overflow")
                                                                          )),
                                                                          (this.containment = [
                                                                              (parseInt(i.css("borderLeftWidth"), 10) ||
                                                                                  0) +
                                                                                  (parseInt(i.css("paddingLeft"), 10) ||
                                                                                      0),
                                                                              (parseInt(i.css("borderTopWidth"), 10) ||
                                                                                  0) +
                                                                                  (parseInt(i.css("paddingTop"), 10) ||
                                                                                      0),
                                                                              (e
                                                                                  ? Math.max(
                                                                                        n.scrollWidth,
                                                                                        n.offsetWidth
                                                                                    )
                                                                                  : n.offsetWidth) -
                                                                                  (parseInt(
                                                                                      i.css("borderRightWidth"),
                                                                                      10
                                                                                  ) || 0) -
                                                                                  (parseInt(
                                                                                      i.css("paddingRight"),
                                                                                      10
                                                                                  ) || 0) -
                                                                                  this.helperProportions.width -
                                                                                  this.margins.left -
                                                                                  this.margins.right,
                                                                              (e
                                                                                  ? Math.max(
                                                                                        n.scrollHeight,
                                                                                        n.offsetHeight
                                                                                    )
                                                                                  : n.offsetHeight) -
                                                                                  (parseInt(
                                                                                      i.css("borderBottomWidth"),
                                                                                      10
                                                                                  ) || 0) -
                                                                                  (parseInt(
                                                                                      i.css("paddingBottom"),
                                                                                      10
                                                                                  ) || 0) -
                                                                                  this.helperProportions.height -
                                                                                  this.margins.top -
                                                                                  this.margins.bottom,
                                                                          ]),
                                                                          (this.relativeContainer = i)))
                                                                    : (this.containment = o.containment)
                                                                : (this.containment = [
                                                                      0,
                                                                      0,
                                                                      t(s).width() -
                                                                          this.helperProportions.width -
                                                                          this.margins.left,
                                                                      (t(s).height() ||
                                                                          s.body.parentNode.scrollHeight) -
                                                                          this.helperProportions.height -
                                                                          this.margins.top,
                                                                  ])
                                                            : (this.containment = [
                                                                  t(window).scrollLeft() -
                                                                      this.offset.relative.left -
                                                                      this.offset.parent.left,
                                                                  t(window).scrollTop() -
                                                                      this.offset.relative.top -
                                                                      this.offset.parent.top,
                                                                  t(window).scrollLeft() +
                                                                      t(window).width() -
                                                                      this.helperProportions.width -
                                                                      this.margins.left,
                                                                  t(window).scrollTop() +
                                                                      (t(window).height() ||
                                                                          s.body.parentNode.scrollHeight) -
                                                                      this.helperProportions.height -
                                                                      this.margins.top,
                                                              ])
                                                        : (this.containment = null);
                                            },
                                            _convertPositionTo: function (t, e) {
                                                e || (e = this.position);
                                                var i = "absolute" === t ? 1 : -1,
                                                    n = this._isRootNode(this.scrollParent[0]);
                                                return {
                                                    top:
                                                        e.top +
                                                        this.offset.relative.top * i +
                                                        this.offset.parent.top * i -
                                                        ("fixed" === this.cssPosition
                                                            ? -this.offset.scroll.top
                                                            : n
                                                              ? 0
                                                              : this.offset.scroll.top) *
                                                            i,
                                                    left:
                                                        e.left +
                                                        this.offset.relative.left * i +
                                                        this.offset.parent.left * i -
                                                        ("fixed" === this.cssPosition
                                                            ? -this.offset.scroll.left
                                                            : n
                                                              ? 0
                                                              : this.offset.scroll.left) *
                                                            i,
                                                };
                                            },
                                            _generatePosition: function (t, e) {
                                                var i,
                                                    n,
                                                    o,
                                                    s,
                                                    r = this.options,
                                                    a = this._isRootNode(this.scrollParent[0]),
                                                    l = t.pageX,
                                                    c = t.pageY;
                                                return (
                                                    (a && this.offset.scroll) ||
                                                        (this.offset.scroll = {
                                                            top: this.scrollParent.scrollTop(),
                                                            left: this.scrollParent.scrollLeft(),
                                                        }),
                                                    e &&
                                                        (this.containment &&
                                                            (this.relativeContainer
                                                                ? ((n = this.relativeContainer.offset()),
                                                                  (i = [
                                                                      this.containment[0] + n.left,
                                                                      this.containment[1] + n.top,
                                                                      this.containment[2] + n.left,
                                                                      this.containment[3] + n.top,
                                                                  ]))
                                                                : (i = this.containment),
                                                            t.pageX - this.offset.click.left < i[0] &&
                                                                (l = i[0] + this.offset.click.left),
                                                            t.pageY - this.offset.click.top < i[1] &&
                                                                (c = i[1] + this.offset.click.top),
                                                            t.pageX - this.offset.click.left > i[2] &&
                                                                (l = i[2] + this.offset.click.left),
                                                            t.pageY - this.offset.click.top > i[3] &&
                                                                (c = i[3] + this.offset.click.top)),
                                                        r.grid &&
                                                            ((o = r.grid[1]
                                                                ? this.originalPageY +
                                                                  Math.round((c - this.originalPageY) / r.grid[1]) *
                                                                      r.grid[1]
                                                                : this.originalPageY),
                                                            (c = i
                                                                ? o - this.offset.click.top >= i[1] ||
                                                                  o - this.offset.click.top > i[3]
                                                                    ? o
                                                                    : o - this.offset.click.top >= i[1]
                                                                      ? o - r.grid[1]
                                                                      : o + r.grid[1]
                                                                : o),
                                                            (s = r.grid[0]
                                                                ? this.originalPageX +
                                                                  Math.round((l - this.originalPageX) / r.grid[0]) *
                                                                      r.grid[0]
                                                                : this.originalPageX),
                                                            (l = i
                                                                ? s - this.offset.click.left >= i[0] ||
                                                                  s - this.offset.click.left > i[2]
                                                                    ? s
                                                                    : s - this.offset.click.left >= i[0]
                                                                      ? s - r.grid[0]
                                                                      : s + r.grid[0]
                                                                : s)),
                                                        "y" === r.axis && (l = this.originalPageX),
                                                        "x" === r.axis && (c = this.originalPageY)),
                                                    {
                                                        top:
                                                            c -
                                                            this.offset.click.top -
                                                            this.offset.relative.top -
                                                            this.offset.parent.top +
                                                            ("fixed" === this.cssPosition
                                                                ? -this.offset.scroll.top
                                                                : a
                                                                  ? 0
                                                                  : this.offset.scroll.top),
                                                        left:
                                                            l -
                                                            this.offset.click.left -
                                                            this.offset.relative.left -
                                                            this.offset.parent.left +
                                                            ("fixed" === this.cssPosition
                                                                ? -this.offset.scroll.left
                                                                : a
                                                                  ? 0
                                                                  : this.offset.scroll.left),
                                                    }
                                                );
                                            },
                                            _clear: function () {
                                                this._removeClass(this.helper, "ui-draggable-dragging"),
                                                    this.helper[0] === this.element[0] ||
                                                        this.cancelHelperRemoval ||
                                                        this.helper.remove(),
                                                    (this.helper = null),
                                                    (this.cancelHelperRemoval = !1),
                                                    this.destroyOnClear && this.destroy();
                                            },
                                            _trigger: function (e, i, n) {
                                                return (
                                                    (n = n || this._uiHash()),
                                                    t.ui.plugin.call(this, e, [i, n, this], !0),
                                                    /^(drag|start|stop)/.test(e) &&
                                                        ((this.positionAbs = this._convertPositionTo("absolute")),
                                                        (n.offset = this.positionAbs)),
                                                    t.Widget.prototype._trigger.call(this, e, i, n)
                                                );
                                            },
                                            plugins: {},
                                            _uiHash: function () {
                                                return {
                                                    helper: this.helper,
                                                    position: this.position,
                                                    originalPosition: this.originalPosition,
                                                    offset: this.positionAbs,
                                                };
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "connectToSortable", {
                                            start: function (e, i, n) {
                                                var o = t.extend({}, i, { item: n.element });
                                                (n.sortables = []),
                                                    t(n.options.connectToSortable).each(function () {
                                                        var i = t(this).sortable("instance");
                                                        i &&
                                                            !i.options.disabled &&
                                                            (n.sortables.push(i),
                                                            i.refreshPositions(),
                                                            i._trigger("activate", e, o));
                                                    });
                                            },
                                            stop: function (e, i, n) {
                                                var o = t.extend({}, i, { item: n.element });
                                                (n.cancelHelperRemoval = !1),
                                                    t.each(n.sortables, function () {
                                                        var t = this;
                                                        t.isOver
                                                            ? ((t.isOver = 0),
                                                              (n.cancelHelperRemoval = !0),
                                                              (t.cancelHelperRemoval = !1),
                                                              (t._storedCSS = {
                                                                  position: t.placeholder.css("position"),
                                                                  top: t.placeholder.css("top"),
                                                                  left: t.placeholder.css("left"),
                                                              }),
                                                              t._mouseStop(e),
                                                              (t.options.helper = t.options._helper))
                                                            : ((t.cancelHelperRemoval = !0),
                                                              t._trigger("deactivate", e, o));
                                                    });
                                            },
                                            drag: function (e, i, n) {
                                                t.each(n.sortables, function () {
                                                    var o = !1,
                                                        s = this;
                                                    (s.positionAbs = n.positionAbs),
                                                        (s.helperProportions = n.helperProportions),
                                                        (s.offset.click = n.offset.click),
                                                        s._intersectsWith(s.containerCache) &&
                                                            ((o = !0),
                                                            t.each(n.sortables, function () {
                                                                return (
                                                                    (this.positionAbs = n.positionAbs),
                                                                    (this.helperProportions = n.helperProportions),
                                                                    (this.offset.click = n.offset.click),
                                                                    this !== s &&
                                                                        this._intersectsWith(this.containerCache) &&
                                                                        t.contains(s.element[0], this.element[0]) &&
                                                                        (o = !1),
                                                                    o
                                                                );
                                                            })),
                                                        o
                                                            ? (s.isOver ||
                                                                  ((s.isOver = 1),
                                                                  (n._parent = i.helper.parent()),
                                                                  (s.currentItem = i.helper
                                                                      .appendTo(s.element)
                                                                      .data("ui-sortable-item", !0)),
                                                                  (s.options._helper = s.options.helper),
                                                                  (s.options.helper = function () {
                                                                      return i.helper[0];
                                                                  }),
                                                                  (e.target = s.currentItem[0]),
                                                                  s._mouseCapture(e, !0),
                                                                  s._mouseStart(e, !0, !0),
                                                                  (s.offset.click.top = n.offset.click.top),
                                                                  (s.offset.click.left = n.offset.click.left),
                                                                  (s.offset.parent.left -=
                                                                      n.offset.parent.left - s.offset.parent.left),
                                                                  (s.offset.parent.top -=
                                                                      n.offset.parent.top - s.offset.parent.top),
                                                                  n._trigger("toSortable", e),
                                                                  (n.dropped = s.element),
                                                                  t.each(n.sortables, function () {
                                                                      this.refreshPositions();
                                                                  }),
                                                                  (n.currentItem = n.element),
                                                                  (s.fromOutside = n)),
                                                              s.currentItem &&
                                                                  (s._mouseDrag(e), (i.position = s.position)))
                                                            : s.isOver &&
                                                              ((s.isOver = 0),
                                                              (s.cancelHelperRemoval = !0),
                                                              (s.options._revert = s.options.revert),
                                                              (s.options.revert = !1),
                                                              s._trigger("out", e, s._uiHash(s)),
                                                              s._mouseStop(e, !0),
                                                              (s.options.revert = s.options._revert),
                                                              (s.options.helper = s.options._helper),
                                                              s.placeholder && s.placeholder.remove(),
                                                              i.helper.appendTo(n._parent),
                                                              n._refreshOffsets(e),
                                                              (i.position = n._generatePosition(e, !0)),
                                                              n._trigger("fromSortable", e),
                                                              (n.dropped = !1),
                                                              t.each(n.sortables, function () {
                                                                  this.refreshPositions();
                                                              }));
                                                });
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "cursor", {
                                            start: function (e, i, n) {
                                                var o = t("body"),
                                                    s = n.options;
                                                o.css("cursor") && (s._cursor = o.css("cursor")),
                                                    o.css("cursor", s.cursor);
                                            },
                                            stop: function (e, i, n) {
                                                var o = n.options;
                                                o._cursor && t("body").css("cursor", o._cursor);
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "opacity", {
                                            start: function (e, i, n) {
                                                var o = t(i.helper),
                                                    s = n.options;
                                                o.css("opacity") && (s._opacity = o.css("opacity")),
                                                    o.css("opacity", s.opacity);
                                            },
                                            stop: function (e, i, n) {
                                                var o = n.options;
                                                o._opacity && t(i.helper).css("opacity", o._opacity);
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "scroll", {
                                            start: function (t, e, i) {
                                                i.scrollParentNotHidden ||
                                                    (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                                                    i.scrollParentNotHidden[0] !== i.document[0] &&
                                                        "HTML" !== i.scrollParentNotHidden[0].tagName &&
                                                        (i.overflowOffset = i.scrollParentNotHidden.offset());
                                            },
                                            drag: function (e, i, n) {
                                                var o = n.options,
                                                    s = !1,
                                                    r = n.scrollParentNotHidden[0],
                                                    a = n.document[0];
                                                r !== a && "HTML" !== r.tagName
                                                    ? ((o.axis && "x" === o.axis) ||
                                                          (n.overflowOffset.top + r.offsetHeight - e.pageY <
                                                          o.scrollSensitivity
                                                              ? (r.scrollTop = s = r.scrollTop + o.scrollSpeed)
                                                              : e.pageY - n.overflowOffset.top < o.scrollSensitivity &&
                                                                (r.scrollTop = s = r.scrollTop - o.scrollSpeed)),
                                                      (o.axis && "y" === o.axis) ||
                                                          (n.overflowOffset.left + r.offsetWidth - e.pageX <
                                                          o.scrollSensitivity
                                                              ? (r.scrollLeft = s = r.scrollLeft + o.scrollSpeed)
                                                              : e.pageX - n.overflowOffset.left < o.scrollSensitivity &&
                                                                (r.scrollLeft = s = r.scrollLeft - o.scrollSpeed)))
                                                    : ((o.axis && "x" === o.axis) ||
                                                          (e.pageY - t(a).scrollTop() < o.scrollSensitivity
                                                              ? (s = t(a).scrollTop(t(a).scrollTop() - o.scrollSpeed))
                                                              : t(window).height() - (e.pageY - t(a).scrollTop()) <
                                                                    o.scrollSensitivity &&
                                                                (s = t(a).scrollTop(t(a).scrollTop() + o.scrollSpeed))),
                                                      (o.axis && "y" === o.axis) ||
                                                          (e.pageX - t(a).scrollLeft() < o.scrollSensitivity
                                                              ? (s = t(a).scrollLeft(t(a).scrollLeft() - o.scrollSpeed))
                                                              : t(window).width() - (e.pageX - t(a).scrollLeft()) <
                                                                    o.scrollSensitivity &&
                                                                (s = t(a).scrollLeft(
                                                                    t(a).scrollLeft() + o.scrollSpeed
                                                                )))),
                                                    !1 !== s &&
                                                        t.ui.ddmanager &&
                                                        !o.dropBehaviour &&
                                                        t.ui.ddmanager.prepareOffsets(n, e);
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "snap", {
                                            start: function (e, i, n) {
                                                var o = n.options;
                                                (n.snapElements = []),
                                                    t(
                                                        o.snap.constructor !== String
                                                            ? o.snap.items || ":data(ui-draggable)"
                                                            : o.snap
                                                    ).each(function () {
                                                        var e = t(this),
                                                            i = e.offset();
                                                        this !== n.element[0] &&
                                                            n.snapElements.push({
                                                                item: this,
                                                                width: e.outerWidth(),
                                                                height: e.outerHeight(),
                                                                top: i.top,
                                                                left: i.left,
                                                            });
                                                    });
                                            },
                                            drag: function (e, i, n) {
                                                var o,
                                                    s,
                                                    r,
                                                    a,
                                                    l,
                                                    c,
                                                    u,
                                                    h,
                                                    d,
                                                    p,
                                                    f = n.options,
                                                    g = f.snapTolerance,
                                                    m = i.offset.left,
                                                    v = m + n.helperProportions.width,
                                                    y = i.offset.top,
                                                    b = y + n.helperProportions.height;
                                                for (d = n.snapElements.length - 1; d >= 0; d--)
                                                    (c =
                                                        (l = n.snapElements[d].left - n.margins.left) +
                                                        n.snapElements[d].width),
                                                        (h =
                                                            (u = n.snapElements[d].top - n.margins.top) +
                                                            n.snapElements[d].height),
                                                        v < l - g ||
                                                        m > c + g ||
                                                        b < u - g ||
                                                        y > h + g ||
                                                        !t.contains(
                                                            n.snapElements[d].item.ownerDocument,
                                                            n.snapElements[d].item
                                                        )
                                                            ? (n.snapElements[d].snapping &&
                                                                  n.options.snap.release &&
                                                                  n.options.snap.release.call(
                                                                      n.element,
                                                                      e,
                                                                      t.extend(n._uiHash(), {
                                                                          snapItem: n.snapElements[d].item,
                                                                      })
                                                                  ),
                                                              (n.snapElements[d].snapping = !1))
                                                            : ("inner" !== f.snapMode &&
                                                                  ((o = Math.abs(u - b) <= g),
                                                                  (s = Math.abs(h - y) <= g),
                                                                  (r = Math.abs(l - v) <= g),
                                                                  (a = Math.abs(c - m) <= g),
                                                                  o &&
                                                                      (i.position.top = n._convertPositionTo(
                                                                          "relative",
                                                                          {
                                                                              top: u - n.helperProportions.height,
                                                                              left: 0,
                                                                          }
                                                                      ).top),
                                                                  s &&
                                                                      (i.position.top = n._convertPositionTo(
                                                                          "relative",
                                                                          { top: h, left: 0 }
                                                                      ).top),
                                                                  r &&
                                                                      (i.position.left = n._convertPositionTo(
                                                                          "relative",
                                                                          {
                                                                              top: 0,
                                                                              left: l - n.helperProportions.width,
                                                                          }
                                                                      ).left),
                                                                  a &&
                                                                      (i.position.left = n._convertPositionTo(
                                                                          "relative",
                                                                          { top: 0, left: c }
                                                                      ).left)),
                                                              (p = o || s || r || a),
                                                              "outer" !== f.snapMode &&
                                                                  ((o = Math.abs(u - y) <= g),
                                                                  (s = Math.abs(h - b) <= g),
                                                                  (r = Math.abs(l - m) <= g),
                                                                  (a = Math.abs(c - v) <= g),
                                                                  o &&
                                                                      (i.position.top = n._convertPositionTo(
                                                                          "relative",
                                                                          { top: u, left: 0 }
                                                                      ).top),
                                                                  s &&
                                                                      (i.position.top = n._convertPositionTo(
                                                                          "relative",
                                                                          {
                                                                              top: h - n.helperProportions.height,
                                                                              left: 0,
                                                                          }
                                                                      ).top),
                                                                  r &&
                                                                      (i.position.left = n._convertPositionTo(
                                                                          "relative",
                                                                          { top: 0, left: l }
                                                                      ).left),
                                                                  a &&
                                                                      (i.position.left = n._convertPositionTo(
                                                                          "relative",
                                                                          {
                                                                              top: 0,
                                                                              left: c - n.helperProportions.width,
                                                                          }
                                                                      ).left)),
                                                              !n.snapElements[d].snapping &&
                                                                  (o || s || r || a || p) &&
                                                                  n.options.snap.snap &&
                                                                  n.options.snap.snap.call(
                                                                      n.element,
                                                                      e,
                                                                      t.extend(n._uiHash(), {
                                                                          snapItem: n.snapElements[d].item,
                                                                      })
                                                                  ),
                                                              (n.snapElements[d].snapping = o || s || r || a || p));
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "stack", {
                                            start: function (e, i, n) {
                                                var o,
                                                    s = n.options,
                                                    r = t.makeArray(t(s.stack)).sort(function (e, i) {
                                                        return (
                                                            (parseInt(t(e).css("zIndex"), 10) || 0) -
                                                            (parseInt(t(i).css("zIndex"), 10) || 0)
                                                        );
                                                    });
                                                r.length &&
                                                    ((o = parseInt(t(r[0]).css("zIndex"), 10) || 0),
                                                    t(r).each(function (e) {
                                                        t(this).css("zIndex", o + e);
                                                    }),
                                                    this.css("zIndex", o + r.length));
                                            },
                                        }),
                                        t.ui.plugin.add("draggable", "zIndex", {
                                            start: function (e, i, n) {
                                                var o = t(i.helper),
                                                    s = n.options;
                                                o.css("zIndex") && (s._zIndex = o.css("zIndex")),
                                                    o.css("zIndex", s.zIndex);
                                            },
                                            stop: function (e, i, n) {
                                                var o = n.options;
                                                o._zIndex && t(i.helper).css("zIndex", o._zIndex);
                                            },
                                        }),
                                        t.ui.draggable
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                2848: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(9565), i(9539), i(2214)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    var e = !1;
                                    return (
                                        t(document).on("mouseup", function () {
                                            e = !1;
                                        }),
                                        t.widget("ui.mouse", {
                                            version: "1.12.1",
                                            options: {
                                                cancel: "input, textarea, button, select, option",
                                                distance: 1,
                                                delay: 0,
                                            },
                                            _mouseInit: function () {
                                                var e = this;
                                                this.element
                                                    .on("mousedown." + this.widgetName, function (t) {
                                                        return e._mouseDown(t);
                                                    })
                                                    .on("click." + this.widgetName, function (i) {
                                                        if (
                                                            !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
                                                        )
                                                            return (
                                                                t.removeData(
                                                                    i.target,
                                                                    e.widgetName + ".preventClickEvent"
                                                                ),
                                                                i.stopImmediatePropagation(),
                                                                !1
                                                            );
                                                    }),
                                                    (this.started = !1);
                                            },
                                            _mouseDestroy: function () {
                                                this.element.off("." + this.widgetName),
                                                    this._mouseMoveDelegate &&
                                                        this.document
                                                            .off(
                                                                "mousemove." + this.widgetName,
                                                                this._mouseMoveDelegate
                                                            )
                                                            .off("mouseup." + this.widgetName, this._mouseUpDelegate);
                                            },
                                            _mouseDown: function (i) {
                                                if (!e) {
                                                    (this._mouseMoved = !1),
                                                        this._mouseStarted && this._mouseUp(i),
                                                        (this._mouseDownEvent = i);
                                                    var n = this,
                                                        o = 1 === i.which,
                                                        s =
                                                            !(
                                                                "string" != typeof this.options.cancel ||
                                                                !i.target.nodeName
                                                            ) && t(i.target).closest(this.options.cancel).length;
                                                    return !(
                                                        o &&
                                                        !s &&
                                                        this._mouseCapture(i) &&
                                                        ((this.mouseDelayMet = !this.options.delay),
                                                        this.mouseDelayMet ||
                                                            (this._mouseDelayTimer = setTimeout(function () {
                                                                n.mouseDelayMet = !0;
                                                            }, this.options.delay)),
                                                        this._mouseDistanceMet(i) &&
                                                        this._mouseDelayMet(i) &&
                                                        ((this._mouseStarted = !1 !== this._mouseStart(i)),
                                                        !this._mouseStarted)
                                                            ? (i.preventDefault(), 0)
                                                            : (!0 ===
                                                                  t.data(
                                                                      i.target,
                                                                      this.widgetName + ".preventClickEvent"
                                                                  ) &&
                                                                  t.removeData(
                                                                      i.target,
                                                                      this.widgetName + ".preventClickEvent"
                                                                  ),
                                                              (this._mouseMoveDelegate = function (t) {
                                                                  return n._mouseMove(t);
                                                              }),
                                                              (this._mouseUpDelegate = function (t) {
                                                                  return n._mouseUp(t);
                                                              }),
                                                              this.document
                                                                  .on(
                                                                      "mousemove." + this.widgetName,
                                                                      this._mouseMoveDelegate
                                                                  )
                                                                  .on(
                                                                      "mouseup." + this.widgetName,
                                                                      this._mouseUpDelegate
                                                                  ),
                                                              i.preventDefault(),
                                                              (e = !0),
                                                              0))
                                                    );
                                                }
                                            },
                                            _mouseMove: function (e) {
                                                if (this._mouseMoved) {
                                                    if (
                                                        t.ui.ie &&
                                                        (!document.documentMode || document.documentMode < 9) &&
                                                        !e.button
                                                    )
                                                        return this._mouseUp(e);
                                                    if (!e.which)
                                                        if (
                                                            e.originalEvent.altKey ||
                                                            e.originalEvent.ctrlKey ||
                                                            e.originalEvent.metaKey ||
                                                            e.originalEvent.shiftKey
                                                        )
                                                            this.ignoreMissingWhich = !0;
                                                        else if (!this.ignoreMissingWhich) return this._mouseUp(e);
                                                }
                                                return (
                                                    (e.which || e.button) && (this._mouseMoved = !0),
                                                    this._mouseStarted
                                                        ? (this._mouseDrag(e), e.preventDefault())
                                                        : (this._mouseDistanceMet(e) &&
                                                              this._mouseDelayMet(e) &&
                                                              ((this._mouseStarted =
                                                                  !1 !== this._mouseStart(this._mouseDownEvent, e)),
                                                              this._mouseStarted
                                                                  ? this._mouseDrag(e)
                                                                  : this._mouseUp(e)),
                                                          !this._mouseStarted)
                                                );
                                            },
                                            _mouseUp: function (i) {
                                                this.document
                                                    .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                                                    .off("mouseup." + this.widgetName, this._mouseUpDelegate),
                                                    this._mouseStarted &&
                                                        ((this._mouseStarted = !1),
                                                        i.target === this._mouseDownEvent.target &&
                                                            t.data(
                                                                i.target,
                                                                this.widgetName + ".preventClickEvent",
                                                                !0
                                                            ),
                                                        this._mouseStop(i)),
                                                    this._mouseDelayTimer &&
                                                        (clearTimeout(this._mouseDelayTimer),
                                                        delete this._mouseDelayTimer),
                                                    (this.ignoreMissingWhich = !1),
                                                    (e = !1),
                                                    i.preventDefault();
                                            },
                                            _mouseDistanceMet: function (t) {
                                                return (
                                                    Math.max(
                                                        Math.abs(this._mouseDownEvent.pageX - t.pageX),
                                                        Math.abs(this._mouseDownEvent.pageY - t.pageY)
                                                    ) >= this.options.distance
                                                );
                                            },
                                            _mouseDelayMet: function () {
                                                return this.mouseDelayMet;
                                            },
                                            _mouseStart: function () {},
                                            _mouseDrag: function () {},
                                            _mouseStop: function () {},
                                            _mouseCapture: function () {
                                                return !0;
                                            },
                                        })
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                7816: function (t, e, i) {
                    var n, o, s;
                    (o = [i(585), i(2848), i(3200), i(1849), i(9539), i(2214)]),
                        void 0 ===
                            (s =
                                "function" ==
                                typeof (n = function (t) {
                                    return (
                                        t.widget("ui.resizable", t.ui.mouse, {
                                            version: "1.12.1",
                                            widgetEventPrefix: "resize",
                                            options: {
                                                alsoResize: !1,
                                                animate: !1,
                                                animateDuration: "slow",
                                                animateEasing: "swing",
                                                aspectRatio: !1,
                                                autoHide: !1,
                                                classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
                                                containment: !1,
                                                ghost: !1,
                                                grid: !1,
                                                handles: "e,s,se",
                                                helper: !1,
                                                maxHeight: null,
                                                maxWidth: null,
                                                minHeight: 10,
                                                minWidth: 10,
                                                zIndex: 90,
                                                resize: null,
                                                start: null,
                                                stop: null,
                                            },
                                            _num: function (t) {
                                                return parseFloat(t) || 0;
                                            },
                                            _isNumber: function (t) {
                                                return !isNaN(parseFloat(t));
                                            },
                                            _hasScroll: function (e, i) {
                                                if ("hidden" === t(e).css("overflow")) return !1;
                                                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                                                    o = !1;
                                                return e[n] > 0 || ((e[n] = 1), (o = e[n] > 0), (e[n] = 0), o);
                                            },
                                            _create: function () {
                                                var e,
                                                    i = this.options,
                                                    n = this;
                                                this._addClass("ui-resizable"),
                                                    t.extend(this, {
                                                        _aspectRatio: !!i.aspectRatio,
                                                        aspectRatio: i.aspectRatio,
                                                        originalElement: this.element,
                                                        _proportionallyResizeElements: [],
                                                        _helper:
                                                            i.helper || i.ghost || i.animate
                                                                ? i.helper || "ui-resizable-helper"
                                                                : null,
                                                    }),
                                                    this.element[0].nodeName.match(
                                                        /^(canvas|textarea|input|select|button|img)$/i
                                                    ) &&
                                                        (this.element.wrap(
                                                            t(
                                                                "<div class='ui-wrapper' style='overflow: hidden;'></div>"
                                                            ).css({
                                                                position: this.element.css("position"),
                                                                width: this.element.outerWidth(),
                                                                height: this.element.outerHeight(),
                                                                top: this.element.css("top"),
                                                                left: this.element.css("left"),
                                                            })
                                                        ),
                                                        (this.element = this.element
                                                            .parent()
                                                            .data("ui-resizable", this.element.resizable("instance"))),
                                                        (this.elementIsWrapper = !0),
                                                        (e = {
                                                            marginTop: this.originalElement.css("marginTop"),
                                                            marginRight: this.originalElement.css("marginRight"),
                                                            marginBottom: this.originalElement.css("marginBottom"),
                                                            marginLeft: this.originalElement.css("marginLeft"),
                                                        }),
                                                        this.element.css(e),
                                                        this.originalElement.css("margin", 0),
                                                        (this.originalResizeStyle = this.originalElement.css("resize")),
                                                        this.originalElement.css("resize", "none"),
                                                        this._proportionallyResizeElements.push(
                                                            this.originalElement.css({
                                                                position: "static",
                                                                zoom: 1,
                                                                display: "block",
                                                            })
                                                        ),
                                                        this.originalElement.css(e),
                                                        this._proportionallyResize()),
                                                    this._setupHandles(),
                                                    i.autoHide &&
                                                        t(this.element)
                                                            .on("mouseenter", function () {
                                                                i.disabled ||
                                                                    (n._removeClass("ui-resizable-autohide"),
                                                                    n._handles.show());
                                                            })
                                                            .on("mouseleave", function () {
                                                                i.disabled ||
                                                                    n.resizing ||
                                                                    (n._addClass("ui-resizable-autohide"),
                                                                    n._handles.hide());
                                                            }),
                                                    this._mouseInit();
                                            },
                                            _destroy: function () {
                                                this._mouseDestroy();
                                                var e,
                                                    i = function (e) {
                                                        t(e)
                                                            .removeData("resizable")
                                                            .removeData("ui-resizable")
                                                            .off(".resizable")
                                                            .find(".ui-resizable-handle")
                                                            .remove();
                                                    };
                                                return (
                                                    this.elementIsWrapper &&
                                                        (i(this.element),
                                                        (e = this.element),
                                                        this.originalElement
                                                            .css({
                                                                position: e.css("position"),
                                                                width: e.outerWidth(),
                                                                height: e.outerHeight(),
                                                                top: e.css("top"),
                                                                left: e.css("left"),
                                                            })
                                                            .insertAfter(e),
                                                        e.remove()),
                                                    this.originalElement.css("resize", this.originalResizeStyle),
                                                    i(this.originalElement),
                                                    this
                                                );
                                            },
                                            _setOption: function (t, e) {
                                                switch ((this._super(t, e), t)) {
                                                    case "handles":
                                                        this._removeHandles(), this._setupHandles();
                                                }
                                            },
                                            _setupHandles: function () {
                                                var e,
                                                    i,
                                                    n,
                                                    o,
                                                    s,
                                                    r = this.options,
                                                    a = this;
                                                if (
                                                    ((this.handles =
                                                        r.handles ||
                                                        (t(".ui-resizable-handle", this.element).length
                                                            ? {
                                                                  n: ".ui-resizable-n",
                                                                  e: ".ui-resizable-e",
                                                                  s: ".ui-resizable-s",
                                                                  w: ".ui-resizable-w",
                                                                  se: ".ui-resizable-se",
                                                                  sw: ".ui-resizable-sw",
                                                                  ne: ".ui-resizable-ne",
                                                                  nw: ".ui-resizable-nw",
                                                              }
                                                            : "e,s,se")),
                                                    (this._handles = t()),
                                                    this.handles.constructor === String)
                                                )
                                                    for (
                                                        "all" === this.handles &&
                                                            (this.handles = "n,e,s,w,se,sw,ne,nw"),
                                                            n = this.handles.split(","),
                                                            this.handles = {},
                                                            i = 0;
                                                        i < n.length;
                                                        i++
                                                    )
                                                        (o = "ui-resizable-" + (e = t.trim(n[i]))),
                                                            (s = t("<div>")),
                                                            this._addClass(s, "ui-resizable-handle " + o),
                                                            s.css({ zIndex: r.zIndex }),
                                                            (this.handles[e] = ".ui-resizable-" + e),
                                                            this.element.append(s);
                                                (this._renderAxis = function (e) {
                                                    var i, n, o, s;
                                                    for (i in ((e = e || this.element), this.handles))
                                                        this.handles[i].constructor === String
                                                            ? (this.handles[i] = this.element
                                                                  .children(this.handles[i])
                                                                  .first()
                                                                  .show())
                                                            : (this.handles[i].jquery || this.handles[i].nodeType) &&
                                                              ((this.handles[i] = t(this.handles[i])),
                                                              this._on(this.handles[i], { mousedown: a._mouseDown })),
                                                            this.elementIsWrapper &&
                                                                this.originalElement[0].nodeName.match(
                                                                    /^(textarea|input|select|button)$/i
                                                                ) &&
                                                                ((n = t(this.handles[i], this.element)),
                                                                (s = /sw|ne|nw|se|n|s/.test(i)
                                                                    ? n.outerHeight()
                                                                    : n.outerWidth()),
                                                                (o = [
                                                                    "padding",
                                                                    /ne|nw|n/.test(i)
                                                                        ? "Top"
                                                                        : /se|sw|s/.test(i)
                                                                          ? "Bottom"
                                                                          : /^e$/.test(i)
                                                                            ? "Right"
                                                                            : "Left",
                                                                ].join("")),
                                                                e.css(o, s),
                                                                this._proportionallyResize()),
                                                            (this._handles = this._handles.add(this.handles[i]));
                                                }),
                                                    this._renderAxis(this.element),
                                                    (this._handles = this._handles.add(
                                                        this.element.find(".ui-resizable-handle")
                                                    )),
                                                    this._handles.disableSelection(),
                                                    this._handles.on("mouseover", function () {
                                                        a.resizing ||
                                                            (this.className &&
                                                                (s = this.className.match(
                                                                    /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                                                                )),
                                                            (a.axis = s && s[1] ? s[1] : "se"));
                                                    }),
                                                    r.autoHide &&
                                                        (this._handles.hide(), this._addClass("ui-resizable-autohide"));
                                            },
                                            _removeHandles: function () {
                                                this._handles.remove();
                                            },
                                            _mouseCapture: function (e) {
                                                var i,
                                                    n,
                                                    o = !1;
                                                for (i in this.handles)
                                                    ((n = t(this.handles[i])[0]) === e.target ||
                                                        t.contains(n, e.target)) &&
                                                        (o = !0);
                                                return !this.options.disabled && o;
                                            },
                                            _mouseStart: function (e) {
                                                var i,
                                                    n,
                                                    o,
                                                    s = this.options,
                                                    r = this.element;
                                                return (
                                                    (this.resizing = !0),
                                                    this._renderProxy(),
                                                    (i = this._num(this.helper.css("left"))),
                                                    (n = this._num(this.helper.css("top"))),
                                                    s.containment &&
                                                        ((i += t(s.containment).scrollLeft() || 0),
                                                        (n += t(s.containment).scrollTop() || 0)),
                                                    (this.offset = this.helper.offset()),
                                                    (this.position = { left: i, top: n }),
                                                    (this.size = this._helper
                                                        ? { width: this.helper.width(), height: this.helper.height() }
                                                        : { width: r.width(), height: r.height() }),
                                                    (this.originalSize = this._helper
                                                        ? { width: r.outerWidth(), height: r.outerHeight() }
                                                        : { width: r.width(), height: r.height() }),
                                                    (this.sizeDiff = {
                                                        width: r.outerWidth() - r.width(),
                                                        height: r.outerHeight() - r.height(),
                                                    }),
                                                    (this.originalPosition = { left: i, top: n }),
                                                    (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
                                                    (this.aspectRatio =
                                                        "number" == typeof s.aspectRatio
                                                            ? s.aspectRatio
                                                            : this.originalSize.width / this.originalSize.height || 1),
                                                    (o = t(".ui-resizable-" + this.axis).css("cursor")),
                                                    t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o),
                                                    this._addClass("ui-resizable-resizing"),
                                                    this._propagate("start", e),
                                                    !0
                                                );
                                            },
                                            _mouseDrag: function (e) {
                                                var i,
                                                    n,
                                                    o = this.originalMousePosition,
                                                    s = this.axis,
                                                    r = e.pageX - o.left || 0,
                                                    a = e.pageY - o.top || 0,
                                                    l = this._change[s];
                                                return (
                                                    this._updatePrevProperties(),
                                                    !!l &&
                                                        ((i = l.apply(this, [e, r, a])),
                                                        this._updateVirtualBoundaries(e.shiftKey),
                                                        (this._aspectRatio || e.shiftKey) &&
                                                            (i = this._updateRatio(i, e)),
                                                        (i = this._respectSize(i, e)),
                                                        this._updateCache(i),
                                                        this._propagate("resize", e),
                                                        (n = this._applyChanges()),
                                                        !this._helper &&
                                                            this._proportionallyResizeElements.length &&
                                                            this._proportionallyResize(),
                                                        t.isEmptyObject(n) ||
                                                            (this._updatePrevProperties(),
                                                            this._trigger("resize", e, this.ui()),
                                                            this._applyChanges()),
                                                        !1)
                                                );
                                            },
                                            _mouseStop: function (e) {
                                                this.resizing = !1;
                                                var i,
                                                    n,
                                                    o,
                                                    s,
                                                    r,
                                                    a,
                                                    l,
                                                    c = this.options,
                                                    u = this;
                                                return (
                                                    this._helper &&
                                                        ((o =
                                                            (n =
                                                                (i = this._proportionallyResizeElements).length &&
                                                                /textarea/i.test(i[0].nodeName)) &&
                                                            this._hasScroll(i[0], "left")
                                                                ? 0
                                                                : u.sizeDiff.height),
                                                        (s = n ? 0 : u.sizeDiff.width),
                                                        (r = {
                                                            width: u.helper.width() - s,
                                                            height: u.helper.height() - o,
                                                        }),
                                                        (a =
                                                            parseFloat(u.element.css("left")) +
                                                                (u.position.left - u.originalPosition.left) || null),
                                                        (l =
                                                            parseFloat(u.element.css("top")) +
                                                                (u.position.top - u.originalPosition.top) || null),
                                                        c.animate || this.element.css(t.extend(r, { top: l, left: a })),
                                                        u.helper.height(u.size.height),
                                                        u.helper.width(u.size.width),
                                                        this._helper && !c.animate && this._proportionallyResize()),
                                                    t("body").css("cursor", "auto"),
                                                    this._removeClass("ui-resizable-resizing"),
                                                    this._propagate("stop", e),
                                                    this._helper && this.helper.remove(),
                                                    !1
                                                );
                                            },
                                            _updatePrevProperties: function () {
                                                (this.prevPosition = {
                                                    top: this.position.top,
                                                    left: this.position.left,
                                                }),
                                                    (this.prevSize = {
                                                        width: this.size.width,
                                                        height: this.size.height,
                                                    });
                                            },
                                            _applyChanges: function () {
                                                var t = {};
                                                return (
                                                    this.position.top !== this.prevPosition.top &&
                                                        (t.top = this.position.top + "px"),
                                                    this.position.left !== this.prevPosition.left &&
                                                        (t.left = this.position.left + "px"),
                                                    this.size.width !== this.prevSize.width &&
                                                        (t.width = this.size.width + "px"),
                                                    this.size.height !== this.prevSize.height &&
                                                        (t.height = this.size.height + "px"),
                                                    this.helper.css(t),
                                                    t
                                                );
                                            },
                                            _updateVirtualBoundaries: function (t) {
                                                var e,
                                                    i,
                                                    n,
                                                    o,
                                                    s,
                                                    r = this.options;
                                                (s = {
                                                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                                                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                                                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                                                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0,
                                                }),
                                                    (this._aspectRatio || t) &&
                                                        ((e = s.minHeight * this.aspectRatio),
                                                        (n = s.minWidth / this.aspectRatio),
                                                        (i = s.maxHeight * this.aspectRatio),
                                                        (o = s.maxWidth / this.aspectRatio),
                                                        e > s.minWidth && (s.minWidth = e),
                                                        n > s.minHeight && (s.minHeight = n),
                                                        i < s.maxWidth && (s.maxWidth = i),
                                                        o < s.maxHeight && (s.maxHeight = o)),
                                                    (this._vBoundaries = s);
                                            },
                                            _updateCache: function (t) {
                                                (this.offset = this.helper.offset()),
                                                    this._isNumber(t.left) && (this.position.left = t.left),
                                                    this._isNumber(t.top) && (this.position.top = t.top),
                                                    this._isNumber(t.height) && (this.size.height = t.height),
                                                    this._isNumber(t.width) && (this.size.width = t.width);
                                            },
                                            _updateRatio: function (t) {
                                                var e = this.position,
                                                    i = this.size,
                                                    n = this.axis;
                                                return (
                                                    this._isNumber(t.height)
                                                        ? (t.width = t.height * this.aspectRatio)
                                                        : this._isNumber(t.width) &&
                                                          (t.height = t.width / this.aspectRatio),
                                                    "sw" === n &&
                                                        ((t.left = e.left + (i.width - t.width)), (t.top = null)),
                                                    "nw" === n &&
                                                        ((t.top = e.top + (i.height - t.height)),
                                                        (t.left = e.left + (i.width - t.width))),
                                                    t
                                                );
                                            },
                                            _respectSize: function (t) {
                                                var e = this._vBoundaries,
                                                    i = this.axis,
                                                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                                                    o =
                                                        this._isNumber(t.height) &&
                                                        e.maxHeight &&
                                                        e.maxHeight < t.height,
                                                    s = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                                                    r =
                                                        this._isNumber(t.height) &&
                                                        e.minHeight &&
                                                        e.minHeight > t.height,
                                                    a = this.originalPosition.left + this.originalSize.width,
                                                    l = this.originalPosition.top + this.originalSize.height,
                                                    c = /sw|nw|w/.test(i),
                                                    u = /nw|ne|n/.test(i);
                                                return (
                                                    s && (t.width = e.minWidth),
                                                    r && (t.height = e.minHeight),
                                                    n && (t.width = e.maxWidth),
                                                    o && (t.height = e.maxHeight),
                                                    s && c && (t.left = a - e.minWidth),
                                                    n && c && (t.left = a - e.maxWidth),
                                                    r && u && (t.top = l - e.minHeight),
                                                    o && u && (t.top = l - e.maxHeight),
                                                    t.width || t.height || t.left || !t.top
                                                        ? t.width || t.height || t.top || !t.left || (t.left = null)
                                                        : (t.top = null),
                                                    t
                                                );
                                            },
                                            _getPaddingPlusBorderDimensions: function (t) {
                                                for (
                                                    var e = 0,
                                                        i = [],
                                                        n = [
                                                            t.css("borderTopWidth"),
                                                            t.css("borderRightWidth"),
                                                            t.css("borderBottomWidth"),
                                                            t.css("borderLeftWidth"),
                                                        ],
                                                        o = [
                                                            t.css("paddingTop"),
                                                            t.css("paddingRight"),
                                                            t.css("paddingBottom"),
                                                            t.css("paddingLeft"),
                                                        ];
                                                    e < 4;
                                                    e++
                                                )
                                                    (i[e] = parseFloat(n[e]) || 0), (i[e] += parseFloat(o[e]) || 0);
                                                return { height: i[0] + i[2], width: i[1] + i[3] };
                                            },
                                            _proportionallyResize: function () {
                                                if (this._proportionallyResizeElements.length)
                                                    for (
                                                        var t, e = 0, i = this.helper || this.element;
                                                        e < this._proportionallyResizeElements.length;
                                                        e++
                                                    )
                                                        (t = this._proportionallyResizeElements[e]),
                                                            this.outerDimensions ||
                                                                (this.outerDimensions =
                                                                    this._getPaddingPlusBorderDimensions(t)),
                                                            t.css({
                                                                height: i.height() - this.outerDimensions.height || 0,
                                                                width: i.width() - this.outerDimensions.width || 0,
                                                            });
                                            },
                                            _renderProxy: function () {
                                                var e = this.element,
                                                    i = this.options;
                                                (this.elementOffset = e.offset()),
                                                    this._helper
                                                        ? ((this.helper =
                                                              this.helper || t("<div style='overflow:hidden;'></div>")),
                                                          this._addClass(this.helper, this._helper),
                                                          this.helper.css({
                                                              width: this.element.outerWidth(),
                                                              height: this.element.outerHeight(),
                                                              position: "absolute",
                                                              left: this.elementOffset.left + "px",
                                                              top: this.elementOffset.top + "px",
                                                              zIndex: ++i.zIndex,
                                                          }),
                                                          this.helper.appendTo("body").disableSelection())
                                                        : (this.helper = this.element);
                                            },
                                            _change: {
                                                e: function (t, e) {
                                                    return { width: this.originalSize.width + e };
                                                },
                                                w: function (t, e) {
                                                    var i = this.originalSize;
                                                    return { left: this.originalPosition.left + e, width: i.width - e };
                                                },
                                                n: function (t, e, i) {
                                                    var n = this.originalSize;
                                                    return { top: this.originalPosition.top + i, height: n.height - i };
                                                },
                                                s: function (t, e, i) {
                                                    return { height: this.originalSize.height + i };
                                                },
                                                se: function (e, i, n) {
                                                    return t.extend(
                                                        this._change.s.apply(this, arguments),
                                                        this._change.e.apply(this, [e, i, n])
                                                    );
                                                },
                                                sw: function (e, i, n) {
                                                    return t.extend(
                                                        this._change.s.apply(this, arguments),
                                                        this._change.w.apply(this, [e, i, n])
                                                    );
                                                },
                                                ne: function (e, i, n) {
                                                    return t.extend(
                                                        this._change.n.apply(this, arguments),
                                                        this._change.e.apply(this, [e, i, n])
                                                    );
                                                },
                                                nw: function (e, i, n) {
                                                    return t.extend(
                                                        this._change.n.apply(this, arguments),
                                                        this._change.w.apply(this, [e, i, n])
                                                    );
                                                },
                                            },
                                            _propagate: function (e, i) {
                                                t.ui.plugin.call(this, e, [i, this.ui()]),
                                                    "resize" !== e && this._trigger(e, i, this.ui());
                                            },
                                            plugins: {},
                                            ui: function () {
                                                return {
                                                    originalElement: this.originalElement,
                                                    element: this.element,
                                                    helper: this.helper,
                                                    position: this.position,
                                                    size: this.size,
                                                    originalSize: this.originalSize,
                                                    originalPosition: this.originalPosition,
                                                };
                                            },
                                        }),
                                        t.ui.plugin.add("resizable", "animate", {
                                            stop: function (e) {
                                                var i = t(this).resizable("instance"),
                                                    n = i.options,
                                                    o = i._proportionallyResizeElements,
                                                    s = o.length && /textarea/i.test(o[0].nodeName),
                                                    r = s && i._hasScroll(o[0], "left") ? 0 : i.sizeDiff.height,
                                                    a = s ? 0 : i.sizeDiff.width,
                                                    l = { width: i.size.width - a, height: i.size.height - r },
                                                    c =
                                                        parseFloat(i.element.css("left")) +
                                                            (i.position.left - i.originalPosition.left) || null,
                                                    u =
                                                        parseFloat(i.element.css("top")) +
                                                            (i.position.top - i.originalPosition.top) || null;
                                                i.element.animate(t.extend(l, u && c ? { top: u, left: c } : {}), {
                                                    duration: n.animateDuration,
                                                    easing: n.animateEasing,
                                                    step: function () {
                                                        var n = {
                                                            width: parseFloat(i.element.css("width")),
                                                            height: parseFloat(i.element.css("height")),
                                                            top: parseFloat(i.element.css("top")),
                                                            left: parseFloat(i.element.css("left")),
                                                        };
                                                        o &&
                                                            o.length &&
                                                            t(o[0]).css({ width: n.width, height: n.height }),
                                                            i._updateCache(n),
                                                            i._propagate("resize", e);
                                                    },
                                                });
                                            },
                                        }),
                                        t.ui.plugin.add("resizable", "containment", {
                                            start: function () {
                                                var e,
                                                    i,
                                                    n,
                                                    o,
                                                    s,
                                                    r,
                                                    a,
                                                    l = t(this).resizable("instance"),
                                                    c = l.options,
                                                    u = l.element,
                                                    h = c.containment,
                                                    d =
                                                        h instanceof t
                                                            ? h.get(0)
                                                            : /parent/.test(h)
                                                              ? u.parent().get(0)
                                                              : h;
                                                d &&
                                                    ((l.containerElement = t(d)),
                                                    /document/.test(h) || h === document
                                                        ? ((l.containerOffset = { left: 0, top: 0 }),
                                                          (l.containerPosition = { left: 0, top: 0 }),
                                                          (l.parentData = {
                                                              element: t(document),
                                                              left: 0,
                                                              top: 0,
                                                              width: t(document).width(),
                                                              height:
                                                                  t(document).height() ||
                                                                  document.body.parentNode.scrollHeight,
                                                          }))
                                                        : ((e = t(d)),
                                                          (i = []),
                                                          t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                                                              i[t] = l._num(e.css("padding" + n));
                                                          }),
                                                          (l.containerOffset = e.offset()),
                                                          (l.containerPosition = e.position()),
                                                          (l.containerSize = {
                                                              height: e.innerHeight() - i[3],
                                                              width: e.innerWidth() - i[1],
                                                          }),
                                                          (n = l.containerOffset),
                                                          (o = l.containerSize.height),
                                                          (s = l.containerSize.width),
                                                          (r = l._hasScroll(d, "left") ? d.scrollWidth : s),
                                                          (a = l._hasScroll(d) ? d.scrollHeight : o),
                                                          (l.parentData = {
                                                              element: d,
                                                              left: n.left,
                                                              top: n.top,
                                                              width: r,
                                                              height: a,
                                                          })));
                                            },
                                            resize: function (e) {
                                                var i,
                                                    n,
                                                    o,
                                                    s,
                                                    r = t(this).resizable("instance"),
                                                    a = r.options,
                                                    l = r.containerOffset,
                                                    c = r.position,
                                                    u = r._aspectRatio || e.shiftKey,
                                                    h = { top: 0, left: 0 },
                                                    d = r.containerElement,
                                                    p = !0;
                                                d[0] !== document && /static/.test(d.css("position")) && (h = l),
                                                    c.left < (r._helper ? l.left : 0) &&
                                                        ((r.size.width =
                                                            r.size.width +
                                                            (r._helper
                                                                ? r.position.left - l.left
                                                                : r.position.left - h.left)),
                                                        u && ((r.size.height = r.size.width / r.aspectRatio), (p = !1)),
                                                        (r.position.left = a.helper ? l.left : 0)),
                                                    c.top < (r._helper ? l.top : 0) &&
                                                        ((r.size.height =
                                                            r.size.height +
                                                            (r._helper ? r.position.top - l.top : r.position.top)),
                                                        u && ((r.size.width = r.size.height * r.aspectRatio), (p = !1)),
                                                        (r.position.top = r._helper ? l.top : 0)),
                                                    (o = r.containerElement.get(0) === r.element.parent().get(0)),
                                                    (s = /relative|absolute/.test(r.containerElement.css("position"))),
                                                    o && s
                                                        ? ((r.offset.left = r.parentData.left + r.position.left),
                                                          (r.offset.top = r.parentData.top + r.position.top))
                                                        : ((r.offset.left = r.element.offset().left),
                                                          (r.offset.top = r.element.offset().top)),
                                                    (i = Math.abs(
                                                        r.sizeDiff.width +
                                                            (r._helper
                                                                ? r.offset.left - h.left
                                                                : r.offset.left - l.left)
                                                    )),
                                                    (n = Math.abs(
                                                        r.sizeDiff.height +
                                                            (r._helper ? r.offset.top - h.top : r.offset.top - l.top)
                                                    )),
                                                    i + r.size.width >= r.parentData.width &&
                                                        ((r.size.width = r.parentData.width - i),
                                                        u &&
                                                            ((r.size.height = r.size.width / r.aspectRatio), (p = !1))),
                                                    n + r.size.height >= r.parentData.height &&
                                                        ((r.size.height = r.parentData.height - n),
                                                        u &&
                                                            ((r.size.width = r.size.height * r.aspectRatio), (p = !1))),
                                                    p ||
                                                        ((r.position.left = r.prevPosition.left),
                                                        (r.position.top = r.prevPosition.top),
                                                        (r.size.width = r.prevSize.width),
                                                        (r.size.height = r.prevSize.height));
                                            },
                                            stop: function () {
                                                var e = t(this).resizable("instance"),
                                                    i = e.options,
                                                    n = e.containerOffset,
                                                    o = e.containerPosition,
                                                    s = e.containerElement,
                                                    r = t(e.helper),
                                                    a = r.offset(),
                                                    l = r.outerWidth() - e.sizeDiff.width,
                                                    c = r.outerHeight() - e.sizeDiff.height;
                                                e._helper &&
                                                    !i.animate &&
                                                    /relative/.test(s.css("position")) &&
                                                    t(this).css({
                                                        left: a.left - o.left - n.left,
                                                        width: l,
                                                        height: c,
                                                    }),
                                                    e._helper &&
                                                        !i.animate &&
                                                        /static/.test(s.css("position")) &&
                                                        t(this).css({
                                                            left: a.left - o.left - n.left,
                                                            width: l,
                                                            height: c,
                                                        });
                                            },
                                        }),
                                        t.ui.plugin.add("resizable", "alsoResize", {
                                            start: function () {
                                                var e = t(this).resizable("instance").options;
                                                t(e.alsoResize).each(function () {
                                                    var e = t(this);
                                                    e.data("ui-resizable-alsoresize", {
                                                        width: parseFloat(e.width()),
                                                        height: parseFloat(e.height()),
                                                        left: parseFloat(e.css("left")),
                                                        top: parseFloat(e.css("top")),
                                                    });
                                                });
                                            },
                                            resize: function (e, i) {
                                                var n = t(this).resizable("instance"),
                                                    o = n.options,
                                                    s = n.originalSize,
                                                    r = n.originalPosition,
                                                    a = {
                                                        height: n.size.height - s.height || 0,
                                                        width: n.size.width - s.width || 0,
                                                        top: n.position.top - r.top || 0,
                                                        left: n.position.left - r.left || 0,
                                                    };
                                                t(o.alsoResize).each(function () {
                                                    var e = t(this),
                                                        n = t(this).data("ui-resizable-alsoresize"),
                                                        o = {},
                                                        s = e.parents(i.originalElement[0]).length
                                                            ? ["width", "height"]
                                                            : ["width", "height", "top", "left"];
                                                    t.each(s, function (t, e) {
                                                        var i = (n[e] || 0) + (a[e] || 0);
                                                        i && i >= 0 && (o[e] = i || null);
                                                    }),
                                                        e.css(o);
                                                });
                                            },
                                            stop: function () {
                                                t(this).removeData("ui-resizable-alsoresize");
                                            },
                                        }),
                                        t.ui.plugin.add("resizable", "ghost", {
                                            start: function () {
                                                var e = t(this).resizable("instance"),
                                                    i = e.size;
                                                (e.ghost = e.originalElement.clone()),
                                                    e.ghost.css({
                                                        opacity: 0.25,
                                                        display: "block",
                                                        position: "relative",
                                                        height: i.height,
                                                        width: i.width,
                                                        margin: 0,
                                                        left: 0,
                                                        top: 0,
                                                    }),
                                                    e._addClass(e.ghost, "ui-resizable-ghost"),
                                                    !1 !== t.uiBackCompat &&
                                                        "string" == typeof e.options.ghost &&
                                                        e.ghost.addClass(this.options.ghost),
                                                    e.ghost.appendTo(e.helper);
                                            },
                                            resize: function () {
                                                var e = t(this).resizable("instance");
                                                e.ghost &&
                                                    e.ghost.css({
                                                        position: "relative",
                                                        height: e.size.height,
                                                        width: e.size.width,
                                                    });
                                            },
                                            stop: function () {
                                                var e = t(this).resizable("instance");
                                                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
                                            },
                                        }),
                                        t.ui.plugin.add("resizable", "grid", {
                                            resize: function () {
                                                var e,
                                                    i = t(this).resizable("instance"),
                                                    n = i.options,
                                                    o = i.size,
                                                    s = i.originalSize,
                                                    r = i.originalPosition,
                                                    a = i.axis,
                                                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                                                    c = l[0] || 1,
                                                    u = l[1] || 1,
                                                    h = Math.round((o.width - s.width) / c) * c,
                                                    d = Math.round((o.height - s.height) / u) * u,
                                                    p = s.width + h,
                                                    f = s.height + d,
                                                    g = n.maxWidth && n.maxWidth < p,
                                                    m = n.maxHeight && n.maxHeight < f,
                                                    v = n.minWidth && n.minWidth > p,
                                                    y = n.minHeight && n.minHeight > f;
                                                (n.grid = l),
                                                    v && (p += c),
                                                    y && (f += u),
                                                    g && (p -= c),
                                                    m && (f -= u),
                                                    /^(se|s|e)$/.test(a)
                                                        ? ((i.size.width = p), (i.size.height = f))
                                                        : /^(ne)$/.test(a)
                                                          ? ((i.size.width = p),
                                                            (i.size.height = f),
                                                            (i.position.top = r.top - d))
                                                          : /^(sw)$/.test(a)
                                                            ? ((i.size.width = p),
                                                              (i.size.height = f),
                                                              (i.position.left = r.left - h))
                                                            : ((f - u <= 0 || p - c <= 0) &&
                                                                  (e = i._getPaddingPlusBorderDimensions(this)),
                                                              f - u > 0
                                                                  ? ((i.size.height = f), (i.position.top = r.top - d))
                                                                  : ((f = u - e.height),
                                                                    (i.size.height = f),
                                                                    (i.position.top = r.top + s.height - f)),
                                                              p - c > 0
                                                                  ? ((i.size.width = p), (i.position.left = r.left - h))
                                                                  : ((p = c - e.width),
                                                                    (i.size.width = p),
                                                                    (i.position.left = r.left + s.width - p)));
                                            },
                                        }),
                                        t.ui.resizable
                                    );
                                })
                                    ? n.apply(e, o)
                                    : n) || (t.exports = s);
                },
                585: function (t, e) {
                    var i;
                    !(function (e, i) {
                        "use strict";
                        "object" == typeof t.exports
                            ? (t.exports = e.document
                                  ? i(e, !0)
                                  : function (t) {
                                        if (!t.document) throw new Error("jQuery requires a window with a document");
                                        return i(t);
                                    })
                            : i(e);
                    })("undefined" != typeof window ? window : this, function (n, o) {
                        "use strict";
                        var s = [],
                            r = Object.getPrototypeOf,
                            a = s.slice,
                            l = s.flat
                                ? function (t) {
                                      return s.flat.call(t);
                                  }
                                : function (t) {
                                      return s.concat.apply([], t);
                                  },
                            c = s.push,
                            u = s.indexOf,
                            h = {},
                            d = h.toString,
                            p = h.hasOwnProperty,
                            f = p.toString,
                            g = f.call(Object),
                            m = {},
                            v = function (t) {
                                return (
                                    "function" == typeof t &&
                                    "number" != typeof t.nodeType &&
                                    "function" != typeof t.item
                                );
                            },
                            y = function (t) {
                                return null != t && t === t.window;
                            },
                            b = n.document,
                            _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
                        function w(t, e, i) {
                            var n,
                                o,
                                s = (i = i || b).createElement("script");
                            if (((s.text = t), e))
                                for (n in _)
                                    (o = e[n] || (e.getAttribute && e.getAttribute(n))) && s.setAttribute(n, o);
                            i.head.appendChild(s).parentNode.removeChild(s);
                        }
                        function x(t) {
                            return null == t
                                ? t + ""
                                : "object" == typeof t || "function" == typeof t
                                  ? h[d.call(t)] || "object"
                                  : typeof t;
                        }
                        var k = "3.6.0",
                            D = function (t, e) {
                                return new D.fn.init(t, e);
                            };
                        function C(t) {
                            var e = !!t && "length" in t && t.length,
                                i = x(t);
                            return (
                                !v(t) &&
                                !y(t) &&
                                ("array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t))
                            );
                        }
                        (D.fn = D.prototype =
                            {
                                jquery: k,
                                constructor: D,
                                length: 0,
                                toArray: function () {
                                    return a.call(this);
                                },
                                get: function (t) {
                                    return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
                                },
                                pushStack: function (t) {
                                    var e = D.merge(this.constructor(), t);
                                    return (e.prevObject = this), e;
                                },
                                each: function (t) {
                                    return D.each(this, t);
                                },
                                map: function (t) {
                                    return this.pushStack(
                                        D.map(this, function (e, i) {
                                            return t.call(e, i, e);
                                        })
                                    );
                                },
                                slice: function () {
                                    return this.pushStack(a.apply(this, arguments));
                                },
                                first: function () {
                                    return this.eq(0);
                                },
                                last: function () {
                                    return this.eq(-1);
                                },
                                even: function () {
                                    return this.pushStack(
                                        D.grep(this, function (t, e) {
                                            return (e + 1) % 2;
                                        })
                                    );
                                },
                                odd: function () {
                                    return this.pushStack(
                                        D.grep(this, function (t, e) {
                                            return e % 2;
                                        })
                                    );
                                },
                                eq: function (t) {
                                    var e = this.length,
                                        i = +t + (t < 0 ? e : 0);
                                    return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
                                },
                                end: function () {
                                    return this.prevObject || this.constructor();
                                },
                                push: c,
                                sort: s.sort,
                                splice: s.splice,
                            }),
                            (D.extend = D.fn.extend =
                                function () {
                                    var t,
                                        e,
                                        i,
                                        n,
                                        o,
                                        s,
                                        r = arguments[0] || {},
                                        a = 1,
                                        l = arguments.length,
                                        c = !1;
                                    for (
                                        "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
                                            "object" == typeof r || v(r) || (r = {}),
                                            a === l && ((r = this), a--);
                                        a < l;
                                        a++
                                    )
                                        if (null != (t = arguments[a]))
                                            for (e in t)
                                                (n = t[e]),
                                                    "__proto__" !== e &&
                                                        r !== n &&
                                                        (c && n && (D.isPlainObject(n) || (o = Array.isArray(n)))
                                                            ? ((i = r[e]),
                                                              (s =
                                                                  o && !Array.isArray(i)
                                                                      ? []
                                                                      : o || D.isPlainObject(i)
                                                                        ? i
                                                                        : {}),
                                                              (o = !1),
                                                              (r[e] = D.extend(c, s, n)))
                                                            : void 0 !== n && (r[e] = n));
                                    return r;
                                }),
                            D.extend({
                                expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                                isReady: !0,
                                error: function (t) {
                                    throw new Error(t);
                                },
                                noop: function () {},
                                isPlainObject: function (t) {
                                    var e, i;
                                    return (
                                        !(!t || "[object Object]" !== d.call(t)) &&
                                        (!(e = r(t)) ||
                                            ("function" == typeof (i = p.call(e, "constructor") && e.constructor) &&
                                                f.call(i) === g))
                                    );
                                },
                                isEmptyObject: function (t) {
                                    var e;
                                    for (e in t) return !1;
                                    return !0;
                                },
                                globalEval: function (t, e, i) {
                                    w(t, { nonce: e && e.nonce }, i);
                                },
                                each: function (t, e) {
                                    var i,
                                        n = 0;
                                    if (C(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                                    else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
                                    return t;
                                },
                                makeArray: function (t, e) {
                                    var i = e || [];
                                    return (
                                        null != t &&
                                            (C(Object(t)) ? D.merge(i, "string" == typeof t ? [t] : t) : c.call(i, t)),
                                        i
                                    );
                                },
                                inArray: function (t, e, i) {
                                    return null == e ? -1 : u.call(e, t, i);
                                },
                                merge: function (t, e) {
                                    for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                                    return (t.length = o), t;
                                },
                                grep: function (t, e, i) {
                                    for (var n = [], o = 0, s = t.length, r = !i; o < s; o++)
                                        !e(t[o], o) !== r && n.push(t[o]);
                                    return n;
                                },
                                map: function (t, e, i) {
                                    var n,
                                        o,
                                        s = 0,
                                        r = [];
                                    if (C(t)) for (n = t.length; s < n; s++) null != (o = e(t[s], s, i)) && r.push(o);
                                    else for (s in t) null != (o = e(t[s], s, i)) && r.push(o);
                                    return l(r);
                                },
                                guid: 1,
                                support: m,
                            }),
                            "function" == typeof Symbol && (D.fn[Symbol.iterator] = s[Symbol.iterator]),
                            D.each(
                                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
                                function (t, e) {
                                    h["[object " + e + "]"] = e.toLowerCase();
                                }
                            );
                        var T = (function (t) {
                            var e,
                                i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                l,
                                c,
                                u,
                                h,
                                d,
                                p,
                                f,
                                g,
                                m,
                                v,
                                y,
                                b,
                                _ = "sizzle" + 1 * new Date(),
                                w = t.document,
                                x = 0,
                                k = 0,
                                D = lt(),
                                C = lt(),
                                T = lt(),
                                S = lt(),
                                E = function (t, e) {
                                    return t === e && (h = !0), 0;
                                },
                                A = {}.hasOwnProperty,
                                N = [],
                                M = N.pop,
                                P = N.push,
                                I = N.push,
                                z = N.slice,
                                H = function (t, e) {
                                    for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                                    return -1;
                                },
                                O =
                                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                L = "[\\x20\\t\\r\\n\\f]",
                                j = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                R =
                                    "\\[[\\x20\\t\\r\\n\\f]*(" +
                                    j +
                                    ")(?:" +
                                    L +
                                    "*([*^$|!~]?=)" +
                                    L +
                                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                                    j +
                                    "))|)" +
                                    L +
                                    "*\\]",
                                W =
                                    ":(" +
                                    j +
                                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                                    R +
                                    ")*)|.*)\\)|)",
                                F = new RegExp(L + "+", "g"),
                                q = new RegExp(
                                    "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                                    "g"
                                ),
                                Y = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                                B = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                                U = new RegExp(L + "|>"),
                                $ = new RegExp(W),
                                K = new RegExp("^" + j + "$"),
                                X = {
                                    ID: new RegExp("^#(" + j + ")"),
                                    CLASS: new RegExp("^\\.(" + j + ")"),
                                    TAG: new RegExp("^(" + j + "|[*])"),
                                    ATTR: new RegExp("^" + R),
                                    PSEUDO: new RegExp("^" + W),
                                    CHILD: new RegExp(
                                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                                        "i"
                                    ),
                                    bool: new RegExp("^(?:" + O + ")$", "i"),
                                    needsContext: new RegExp(
                                        "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                                        "i"
                                    ),
                                },
                                V = /HTML$/i,
                                G = /^(?:input|select|textarea|button)$/i,
                                J = /^h\d$/i,
                                Q = /^[^{]+\{\s*\[native \w/,
                                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                tt = /[+~]/,
                                et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                                it = function (t, e) {
                                    var i = "0x" + t.slice(1) - 65536;
                                    return (
                                        e ||
                                        (i < 0
                                            ? String.fromCharCode(i + 65536)
                                            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
                                    );
                                },
                                nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                ot = function (t, e) {
                                    return e
                                        ? "\0" === t
                                            ? "�"
                                            : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " "
                                        : "\\" + t;
                                },
                                st = function () {
                                    d();
                                },
                                rt = _t(
                                    function (t) {
                                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                                    },
                                    { dir: "parentNode", next: "legend" }
                                );
                            try {
                                I.apply((N = z.call(w.childNodes)), w.childNodes), N[w.childNodes.length].nodeType;
                            } catch (t) {
                                I = {
                                    apply: N.length
                                        ? function (t, e) {
                                              P.apply(t, z.call(e));
                                          }
                                        : function (t, e) {
                                              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                                              t.length = i - 1;
                                          },
                                };
                            }
                            function at(t, e, n, o) {
                                var s,
                                    a,
                                    c,
                                    u,
                                    h,
                                    f,
                                    v,
                                    y = e && e.ownerDocument,
                                    w = e ? e.nodeType : 9;
                                if (((n = n || []), "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w)))
                                    return n;
                                if (!o && (d(e), (e = e || p), g)) {
                                    if (11 !== w && (h = Z.exec(t)))
                                        if ((s = h[1])) {
                                            if (9 === w) {
                                                if (!(c = e.getElementById(s))) return n;
                                                if (c.id === s) return n.push(c), n;
                                            } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s)
                                                return n.push(c), n;
                                        } else {
                                            if (h[2]) return I.apply(n, e.getElementsByTagName(t)), n;
                                            if ((s = h[3]) && i.getElementsByClassName && e.getElementsByClassName)
                                                return I.apply(n, e.getElementsByClassName(s)), n;
                                        }
                                    if (
                                        i.qsa &&
                                        !S[t + " "] &&
                                        (!m || !m.test(t)) &&
                                        (1 !== w || "object" !== e.nodeName.toLowerCase())
                                    ) {
                                        if (((v = t), (y = e), 1 === w && (U.test(t) || B.test(t)))) {
                                            for (
                                                ((y = (tt.test(t) && vt(e.parentNode)) || e) === e && i.scope) ||
                                                    ((u = e.getAttribute("id"))
                                                        ? (u = u.replace(nt, ot))
                                                        : e.setAttribute("id", (u = _))),
                                                    a = (f = r(t)).length;
                                                a--;

                                            )
                                                f[a] = (u ? "#" + u : ":scope") + " " + bt(f[a]);
                                            v = f.join(",");
                                        }
                                        try {
                                            return I.apply(n, y.querySelectorAll(v)), n;
                                        } catch (e) {
                                            S(t, !0);
                                        } finally {
                                            u === _ && e.removeAttribute("id");
                                        }
                                    }
                                }
                                return l(t.replace(q, "$1"), e, n, o);
                            }
                            function lt() {
                                var t = [];
                                return function e(i, o) {
                                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], (e[i + " "] = o);
                                };
                            }
                            function ct(t) {
                                return (t[_] = !0), t;
                            }
                            function ut(t) {
                                var e = p.createElement("fieldset");
                                try {
                                    return !!t(e);
                                } catch (t) {
                                    return !1;
                                } finally {
                                    e.parentNode && e.parentNode.removeChild(e), (e = null);
                                }
                            }
                            function ht(t, e) {
                                for (var i = t.split("|"), o = i.length; o--; ) n.attrHandle[i[o]] = e;
                            }
                            function dt(t, e) {
                                var i = e && t,
                                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                                if (n) return n;
                                if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
                                return t ? 1 : -1;
                            }
                            function pt(t) {
                                return function (e) {
                                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                                };
                            }
                            function ft(t) {
                                return function (e) {
                                    var i = e.nodeName.toLowerCase();
                                    return ("input" === i || "button" === i) && e.type === t;
                                };
                            }
                            function gt(t) {
                                return function (e) {
                                    return "form" in e
                                        ? e.parentNode && !1 === e.disabled
                                            ? "label" in e
                                                ? "label" in e.parentNode
                                                    ? e.parentNode.disabled === t
                                                    : e.disabled === t
                                                : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
                                            : e.disabled === t
                                        : "label" in e && e.disabled === t;
                                };
                            }
                            function mt(t) {
                                return ct(function (e) {
                                    return (
                                        (e = +e),
                                        ct(function (i, n) {
                                            for (var o, s = t([], i.length, e), r = s.length; r--; )
                                                i[(o = s[r])] && (i[o] = !(n[o] = i[o]));
                                        })
                                    );
                                });
                            }
                            function vt(t) {
                                return t && void 0 !== t.getElementsByTagName && t;
                            }
                            for (e in ((i = at.support = {}),
                            (s = at.isXML =
                                function (t) {
                                    var e = t && t.namespaceURI,
                                        i = t && (t.ownerDocument || t).documentElement;
                                    return !V.test(e || (i && i.nodeName) || "HTML");
                                }),
                            (d = at.setDocument =
                                function (t) {
                                    var e,
                                        o,
                                        r = t ? t.ownerDocument || t : w;
                                    return r != p && 9 === r.nodeType && r.documentElement
                                        ? ((f = (p = r).documentElement),
                                          (g = !s(p)),
                                          w != p &&
                                              (o = p.defaultView) &&
                                              o.top !== o &&
                                              (o.addEventListener
                                                  ? o.addEventListener("unload", st, !1)
                                                  : o.attachEvent && o.attachEvent("onunload", st)),
                                          (i.scope = ut(function (t) {
                                              return (
                                                  f.appendChild(t).appendChild(p.createElement("div")),
                                                  void 0 !== t.querySelectorAll &&
                                                      !t.querySelectorAll(":scope fieldset div").length
                                              );
                                          })),
                                          (i.attributes = ut(function (t) {
                                              return (t.className = "i"), !t.getAttribute("className");
                                          })),
                                          (i.getElementsByTagName = ut(function (t) {
                                              return (
                                                  t.appendChild(p.createComment("")),
                                                  !t.getElementsByTagName("*").length
                                              );
                                          })),
                                          (i.getElementsByClassName = Q.test(p.getElementsByClassName)),
                                          (i.getById = ut(function (t) {
                                              return (
                                                  (f.appendChild(t).id = _),
                                                  !p.getElementsByName || !p.getElementsByName(_).length
                                              );
                                          })),
                                          i.getById
                                              ? ((n.filter.ID = function (t) {
                                                    var e = t.replace(et, it);
                                                    return function (t) {
                                                        return t.getAttribute("id") === e;
                                                    };
                                                }),
                                                (n.find.ID = function (t, e) {
                                                    if (void 0 !== e.getElementById && g) {
                                                        var i = e.getElementById(t);
                                                        return i ? [i] : [];
                                                    }
                                                }))
                                              : ((n.filter.ID = function (t) {
                                                    var e = t.replace(et, it);
                                                    return function (t) {
                                                        var i =
                                                            void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                                        return i && i.value === e;
                                                    };
                                                }),
                                                (n.find.ID = function (t, e) {
                                                    if (void 0 !== e.getElementById && g) {
                                                        var i,
                                                            n,
                                                            o,
                                                            s = e.getElementById(t);
                                                        if (s) {
                                                            if ((i = s.getAttributeNode("id")) && i.value === t)
                                                                return [s];
                                                            for (o = e.getElementsByName(t), n = 0; (s = o[n++]); )
                                                                if ((i = s.getAttributeNode("id")) && i.value === t)
                                                                    return [s];
                                                        }
                                                        return [];
                                                    }
                                                })),
                                          (n.find.TAG = i.getElementsByTagName
                                              ? function (t, e) {
                                                    return void 0 !== e.getElementsByTagName
                                                        ? e.getElementsByTagName(t)
                                                        : i.qsa
                                                          ? e.querySelectorAll(t)
                                                          : void 0;
                                                }
                                              : function (t, e) {
                                                    var i,
                                                        n = [],
                                                        o = 0,
                                                        s = e.getElementsByTagName(t);
                                                    if ("*" === t) {
                                                        for (; (i = s[o++]); ) 1 === i.nodeType && n.push(i);
                                                        return n;
                                                    }
                                                    return s;
                                                }),
                                          (n.find.CLASS =
                                              i.getElementsByClassName &&
                                              function (t, e) {
                                                  if (void 0 !== e.getElementsByClassName && g)
                                                      return e.getElementsByClassName(t);
                                              }),
                                          (v = []),
                                          (m = []),
                                          (i.qsa = Q.test(p.querySelectorAll)) &&
                                              (ut(function (t) {
                                                  var e;
                                                  (f.appendChild(t).innerHTML =
                                                      "<a id='" +
                                                      _ +
                                                      "'></a><select id='" +
                                                      _ +
                                                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                      t.querySelectorAll("[msallowcapture^='']").length &&
                                                          m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                                      t.querySelectorAll("[selected]").length ||
                                                          m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + O + ")"),
                                                      t.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                                                      (e = p.createElement("input")).setAttribute("name", ""),
                                                      t.appendChild(e),
                                                      t.querySelectorAll("[name='']").length ||
                                                          m.push(
                                                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                                                          ),
                                                      t.querySelectorAll(":checked").length || m.push(":checked"),
                                                      t.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"),
                                                      t.querySelectorAll("\\\f"),
                                                      m.push("[\\r\\n\\f]");
                                              }),
                                              ut(function (t) {
                                                  t.innerHTML =
                                                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                  var e = p.createElement("input");
                                                  e.setAttribute("type", "hidden"),
                                                      t.appendChild(e).setAttribute("name", "D"),
                                                      t.querySelectorAll("[name=d]").length &&
                                                          m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                                      2 !== t.querySelectorAll(":enabled").length &&
                                                          m.push(":enabled", ":disabled"),
                                                      (f.appendChild(t).disabled = !0),
                                                      2 !== t.querySelectorAll(":disabled").length &&
                                                          m.push(":enabled", ":disabled"),
                                                      t.querySelectorAll("*,:x"),
                                                      m.push(",.*:");
                                              })),
                                          (i.matchesSelector = Q.test(
                                              (y =
                                                  f.matches ||
                                                  f.webkitMatchesSelector ||
                                                  f.mozMatchesSelector ||
                                                  f.oMatchesSelector ||
                                                  f.msMatchesSelector)
                                          )) &&
                                              ut(function (t) {
                                                  (i.disconnectedMatch = y.call(t, "*")),
                                                      y.call(t, "[s!='']:x"),
                                                      v.push("!=", W);
                                              }),
                                          (m = m.length && new RegExp(m.join("|"))),
                                          (v = v.length && new RegExp(v.join("|"))),
                                          (e = Q.test(f.compareDocumentPosition)),
                                          (b =
                                              e || Q.test(f.contains)
                                                  ? function (t, e) {
                                                        var i = 9 === t.nodeType ? t.documentElement : t,
                                                            n = e && e.parentNode;
                                                        return (
                                                            t === n ||
                                                            !(
                                                                !n ||
                                                                1 !== n.nodeType ||
                                                                !(i.contains
                                                                    ? i.contains(n)
                                                                    : t.compareDocumentPosition &&
                                                                      16 & t.compareDocumentPosition(n))
                                                            )
                                                        );
                                                    }
                                                  : function (t, e) {
                                                        if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                                        return !1;
                                                    }),
                                          (E = e
                                              ? function (t, e) {
                                                    if (t === e) return (h = !0), 0;
                                                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                                    return (
                                                        n ||
                                                        (1 &
                                                            (n =
                                                                (t.ownerDocument || t) == (e.ownerDocument || e)
                                                                    ? t.compareDocumentPosition(e)
                                                                    : 1) ||
                                                        (!i.sortDetached && e.compareDocumentPosition(t) === n)
                                                            ? t == p || (t.ownerDocument == w && b(w, t))
                                                                ? -1
                                                                : e == p || (e.ownerDocument == w && b(w, e))
                                                                  ? 1
                                                                  : u
                                                                    ? H(u, t) - H(u, e)
                                                                    : 0
                                                            : 4 & n
                                                              ? -1
                                                              : 1)
                                                    );
                                                }
                                              : function (t, e) {
                                                    if (t === e) return (h = !0), 0;
                                                    var i,
                                                        n = 0,
                                                        o = t.parentNode,
                                                        s = e.parentNode,
                                                        r = [t],
                                                        a = [e];
                                                    if (!o || !s)
                                                        return t == p
                                                            ? -1
                                                            : e == p
                                                              ? 1
                                                              : o
                                                                ? -1
                                                                : s
                                                                  ? 1
                                                                  : u
                                                                    ? H(u, t) - H(u, e)
                                                                    : 0;
                                                    if (o === s) return dt(t, e);
                                                    for (i = t; (i = i.parentNode); ) r.unshift(i);
                                                    for (i = e; (i = i.parentNode); ) a.unshift(i);
                                                    for (; r[n] === a[n]; ) n++;
                                                    return n ? dt(r[n], a[n]) : r[n] == w ? -1 : a[n] == w ? 1 : 0;
                                                }),
                                          p)
                                        : p;
                                }),
                            (at.matches = function (t, e) {
                                return at(t, null, null, e);
                            }),
                            (at.matchesSelector = function (t, e) {
                                if (
                                    (d(t),
                                    i.matchesSelector && g && !S[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e)))
                                )
                                    try {
                                        var n = y.call(t, e);
                                        if (n || i.disconnectedMatch || (t.document && 11 !== t.document.nodeType))
                                            return n;
                                    } catch (t) {
                                        S(e, !0);
                                    }
                                return at(e, p, null, [t]).length > 0;
                            }),
                            (at.contains = function (t, e) {
                                return (t.ownerDocument || t) != p && d(t), b(t, e);
                            }),
                            (at.attr = function (t, e) {
                                (t.ownerDocument || t) != p && d(t);
                                var o = n.attrHandle[e.toLowerCase()],
                                    s = o && A.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                                return void 0 !== s
                                    ? s
                                    : i.attributes || !g
                                      ? t.getAttribute(e)
                                      : (s = t.getAttributeNode(e)) && s.specified
                                        ? s.value
                                        : null;
                            }),
                            (at.escape = function (t) {
                                return (t + "").replace(nt, ot);
                            }),
                            (at.error = function (t) {
                                throw new Error("Syntax error, unrecognized expression: " + t);
                            }),
                            (at.uniqueSort = function (t) {
                                var e,
                                    n = [],
                                    o = 0,
                                    s = 0;
                                if (((h = !i.detectDuplicates), (u = !i.sortStable && t.slice(0)), t.sort(E), h)) {
                                    for (; (e = t[s++]); ) e === t[s] && (o = n.push(s));
                                    for (; o--; ) t.splice(n[o], 1);
                                }
                                return (u = null), t;
                            }),
                            (o = at.getText =
                                function (t) {
                                    var e,
                                        i = "",
                                        n = 0,
                                        s = t.nodeType;
                                    if (s) {
                                        if (1 === s || 9 === s || 11 === s) {
                                            if ("string" == typeof t.textContent) return t.textContent;
                                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t);
                                        } else if (3 === s || 4 === s) return t.nodeValue;
                                    } else for (; (e = t[n++]); ) i += o(e);
                                    return i;
                                }),
                            ((n = at.selectors =
                                {
                                    cacheLength: 50,
                                    createPseudo: ct,
                                    match: X,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": { dir: "parentNode", first: !0 },
                                        " ": { dir: "parentNode" },
                                        "+": { dir: "previousSibling", first: !0 },
                                        "~": { dir: "previousSibling" },
                                    },
                                    preFilter: {
                                        ATTR: function (t) {
                                            return (
                                                (t[1] = t[1].replace(et, it)),
                                                (t[3] = (t[3] || t[4] || t[5] || "").replace(et, it)),
                                                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                                t.slice(0, 4)
                                            );
                                        },
                                        CHILD: function (t) {
                                            return (
                                                (t[1] = t[1].toLowerCase()),
                                                "nth" === t[1].slice(0, 3)
                                                    ? (t[3] || at.error(t[0]),
                                                      (t[4] = +(t[4]
                                                          ? t[5] + (t[6] || 1)
                                                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                                                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                                                    : t[3] && at.error(t[0]),
                                                t
                                            );
                                        },
                                        PSEUDO: function (t) {
                                            var e,
                                                i = !t[6] && t[2];
                                            return X.CHILD.test(t[0])
                                                ? null
                                                : (t[3]
                                                      ? (t[2] = t[4] || t[5] || "")
                                                      : i &&
                                                        $.test(i) &&
                                                        (e = r(i, !0)) &&
                                                        (e = i.indexOf(")", i.length - e) - i.length) &&
                                                        ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                                                  t.slice(0, 3));
                                        },
                                    },
                                    filter: {
                                        TAG: function (t) {
                                            var e = t.replace(et, it).toLowerCase();
                                            return "*" === t
                                                ? function () {
                                                      return !0;
                                                  }
                                                : function (t) {
                                                      return t.nodeName && t.nodeName.toLowerCase() === e;
                                                  };
                                        },
                                        CLASS: function (t) {
                                            var e = D[t + " "];
                                            return (
                                                e ||
                                                ((e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + L + "|$)")) &&
                                                    D(t, function (t) {
                                                        return e.test(
                                                            ("string" == typeof t.className && t.className) ||
                                                                (void 0 !== t.getAttribute &&
                                                                    t.getAttribute("class")) ||
                                                                ""
                                                        );
                                                    }))
                                            );
                                        },
                                        ATTR: function (t, e, i) {
                                            return function (n) {
                                                var o = at.attr(n, t);
                                                return null == o
                                                    ? "!=" === e
                                                    : !e ||
                                                          ((o += ""),
                                                          "=" === e
                                                              ? o === i
                                                              : "!=" === e
                                                                ? o !== i
                                                                : "^=" === e
                                                                  ? i && 0 === o.indexOf(i)
                                                                  : "*=" === e
                                                                    ? i && o.indexOf(i) > -1
                                                                    : "$=" === e
                                                                      ? i && o.slice(-i.length) === i
                                                                      : "~=" === e
                                                                        ? (" " + o.replace(F, " ") + " ").indexOf(i) >
                                                                          -1
                                                                        : "|=" === e &&
                                                                          (o === i ||
                                                                              o.slice(0, i.length + 1) === i + "-"));
                                            };
                                        },
                                        CHILD: function (t, e, i, n, o) {
                                            var s = "nth" !== t.slice(0, 3),
                                                r = "last" !== t.slice(-4),
                                                a = "of-type" === e;
                                            return 1 === n && 0 === o
                                                ? function (t) {
                                                      return !!t.parentNode;
                                                  }
                                                : function (e, i, l) {
                                                      var c,
                                                          u,
                                                          h,
                                                          d,
                                                          p,
                                                          f,
                                                          g = s !== r ? "nextSibling" : "previousSibling",
                                                          m = e.parentNode,
                                                          v = a && e.nodeName.toLowerCase(),
                                                          y = !l && !a,
                                                          b = !1;
                                                      if (m) {
                                                          if (s) {
                                                              for (; g; ) {
                                                                  for (d = e; (d = d[g]); )
                                                                      if (
                                                                          a
                                                                              ? d.nodeName.toLowerCase() === v
                                                                              : 1 === d.nodeType
                                                                      )
                                                                          return !1;
                                                                  f = g = "only" === t && !f && "nextSibling";
                                                              }
                                                              return !0;
                                                          }
                                                          if (((f = [r ? m.firstChild : m.lastChild]), r && y)) {
                                                              for (
                                                                  b =
                                                                      (p =
                                                                          (c =
                                                                              (u =
                                                                                  (h = (d = m)[_] || (d[_] = {}))[
                                                                                      d.uniqueID
                                                                                  ] || (h[d.uniqueID] = {}))[t] ||
                                                                              [])[0] === x && c[1]) && c[2],
                                                                      d = p && m.childNodes[p];
                                                                  (d = (++p && d && d[g]) || (b = p = 0) || f.pop());

                                                              )
                                                                  if (1 === d.nodeType && ++b && d === e) {
                                                                      u[t] = [x, p, b];
                                                                      break;
                                                                  }
                                                          } else if (
                                                              (y &&
                                                                  (b = p =
                                                                      (c =
                                                                          (u =
                                                                              (h = (d = e)[_] || (d[_] = {}))[
                                                                                  d.uniqueID
                                                                              ] || (h[d.uniqueID] = {}))[t] ||
                                                                          [])[0] === x && c[1]),
                                                              !1 === b)
                                                          )
                                                              for (
                                                                  ;
                                                                  (d = (++p && d && d[g]) || (b = p = 0) || f.pop()) &&
                                                                  ((a
                                                                      ? d.nodeName.toLowerCase() !== v
                                                                      : 1 !== d.nodeType) ||
                                                                      !++b ||
                                                                      (y &&
                                                                          ((u =
                                                                              (h = d[_] || (d[_] = {}))[d.uniqueID] ||
                                                                              (h[d.uniqueID] = {}))[t] = [x, b]),
                                                                      d !== e));

                                                              );
                                                          return (b -= o) === n || (b % n == 0 && b / n >= 0);
                                                      }
                                                  };
                                        },
                                        PSEUDO: function (t, e) {
                                            var i,
                                                o =
                                                    n.pseudos[t] ||
                                                    n.setFilters[t.toLowerCase()] ||
                                                    at.error("unsupported pseudo: " + t);
                                            return o[_]
                                                ? o(e)
                                                : o.length > 1
                                                  ? ((i = [t, t, "", e]),
                                                    n.setFilters.hasOwnProperty(t.toLowerCase())
                                                        ? ct(function (t, i) {
                                                              for (var n, s = o(t, e), r = s.length; r--; )
                                                                  t[(n = H(t, s[r]))] = !(i[n] = s[r]);
                                                          })
                                                        : function (t) {
                                                              return o(t, 0, i);
                                                          })
                                                  : o;
                                        },
                                    },
                                    pseudos: {
                                        not: ct(function (t) {
                                            var e = [],
                                                i = [],
                                                n = a(t.replace(q, "$1"));
                                            return n[_]
                                                ? ct(function (t, e, i, o) {
                                                      for (var s, r = n(t, null, o, []), a = t.length; a--; )
                                                          (s = r[a]) && (t[a] = !(e[a] = s));
                                                  })
                                                : function (t, o, s) {
                                                      return (e[0] = t), n(e, null, s, i), (e[0] = null), !i.pop();
                                                  };
                                        }),
                                        has: ct(function (t) {
                                            return function (e) {
                                                return at(t, e).length > 0;
                                            };
                                        }),
                                        contains: ct(function (t) {
                                            return (
                                                (t = t.replace(et, it)),
                                                function (e) {
                                                    return (e.textContent || o(e)).indexOf(t) > -1;
                                                }
                                            );
                                        }),
                                        lang: ct(function (t) {
                                            return (
                                                K.test(t || "") || at.error("unsupported lang: " + t),
                                                (t = t.replace(et, it).toLowerCase()),
                                                function (e) {
                                                    var i;
                                                    do {
                                                        if (
                                                            (i = g
                                                                ? e.lang
                                                                : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                                        )
                                                            return (
                                                                (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                                            );
                                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                                    return !1;
                                                }
                                            );
                                        }),
                                        target: function (e) {
                                            var i = t.location && t.location.hash;
                                            return i && i.slice(1) === e.id;
                                        },
                                        root: function (t) {
                                            return t === f;
                                        },
                                        focus: function (t) {
                                            return (
                                                t === p.activeElement &&
                                                (!p.hasFocus || p.hasFocus()) &&
                                                !!(t.type || t.href || ~t.tabIndex)
                                            );
                                        },
                                        enabled: gt(!1),
                                        disabled: gt(!0),
                                        checked: function (t) {
                                            var e = t.nodeName.toLowerCase();
                                            return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                                        },
                                        selected: function (t) {
                                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                                        },
                                        empty: function (t) {
                                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                                            return !0;
                                        },
                                        parent: function (t) {
                                            return !n.pseudos.empty(t);
                                        },
                                        header: function (t) {
                                            return J.test(t.nodeName);
                                        },
                                        input: function (t) {
                                            return G.test(t.nodeName);
                                        },
                                        button: function (t) {
                                            var e = t.nodeName.toLowerCase();
                                            return ("input" === e && "button" === t.type) || "button" === e;
                                        },
                                        text: function (t) {
                                            var e;
                                            return (
                                                "input" === t.nodeName.toLowerCase() &&
                                                "text" === t.type &&
                                                (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                            );
                                        },
                                        first: mt(function () {
                                            return [0];
                                        }),
                                        last: mt(function (t, e) {
                                            return [e - 1];
                                        }),
                                        eq: mt(function (t, e, i) {
                                            return [i < 0 ? i + e : i];
                                        }),
                                        even: mt(function (t, e) {
                                            for (var i = 0; i < e; i += 2) t.push(i);
                                            return t;
                                        }),
                                        odd: mt(function (t, e) {
                                            for (var i = 1; i < e; i += 2) t.push(i);
                                            return t;
                                        }),
                                        lt: mt(function (t, e, i) {
                                            for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0; ) t.push(n);
                                            return t;
                                        }),
                                        gt: mt(function (t, e, i) {
                                            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                                            return t;
                                        }),
                                    },
                                }).pseudos.nth = n.pseudos.eq),
                            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                                n.pseudos[e] = pt(e);
                            for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ft(e);
                            function yt() {}
                            function bt(t) {
                                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                                return n;
                            }
                            function _t(t, e, i) {
                                var n = e.dir,
                                    o = e.next,
                                    s = o || n,
                                    r = i && "parentNode" === s,
                                    a = k++;
                                return e.first
                                    ? function (e, i, o) {
                                          for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, o);
                                          return !1;
                                      }
                                    : function (e, i, l) {
                                          var c,
                                              u,
                                              h,
                                              d = [x, a];
                                          if (l) {
                                              for (; (e = e[n]); ) if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
                                          } else
                                              for (; (e = e[n]); )
                                                  if (1 === e.nodeType || r)
                                                      if (
                                                          ((u =
                                                              (h = e[_] || (e[_] = {}))[e.uniqueID] ||
                                                              (h[e.uniqueID] = {})),
                                                          o && o === e.nodeName.toLowerCase())
                                                      )
                                                          e = e[n] || e;
                                                      else {
                                                          if ((c = u[s]) && c[0] === x && c[1] === a)
                                                              return (d[2] = c[2]);
                                                          if (((u[s] = d), (d[2] = t(e, i, l)))) return !0;
                                                      }
                                          return !1;
                                      };
                            }
                            function wt(t) {
                                return t.length > 1
                                    ? function (e, i, n) {
                                          for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1;
                                          return !0;
                                      }
                                    : t[0];
                            }
                            function xt(t, e, i, n, o) {
                                for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)
                                    (s = t[a]) && ((i && !i(s, n, o)) || (r.push(s), c && e.push(a)));
                                return r;
                            }
                            function kt(t, e, i, n, o, s) {
                                return (
                                    n && !n[_] && (n = kt(n)),
                                    o && !o[_] && (o = kt(o, s)),
                                    ct(function (s, r, a, l) {
                                        var c,
                                            u,
                                            h,
                                            d = [],
                                            p = [],
                                            f = r.length,
                                            g =
                                                s ||
                                                (function (t, e, i) {
                                                    for (var n = 0, o = e.length; n < o; n++) at(t, e[n], i);
                                                    return i;
                                                })(e || "*", a.nodeType ? [a] : a, []),
                                            m = !t || (!s && e) ? g : xt(g, d, t, a, l),
                                            v = i ? (o || (s ? t : f || n) ? [] : r) : m;
                                        if ((i && i(m, v, a, l), n))
                                            for (c = xt(v, p), n(c, [], a, l), u = c.length; u--; )
                                                (h = c[u]) && (v[p[u]] = !(m[p[u]] = h));
                                        if (s) {
                                            if (o || t) {
                                                if (o) {
                                                    for (c = [], u = v.length; u--; ) (h = v[u]) && c.push((m[u] = h));
                                                    o(null, (v = []), c, l);
                                                }
                                                for (u = v.length; u--; )
                                                    (h = v[u]) && (c = o ? H(s, h) : d[u]) > -1 && (s[c] = !(r[c] = h));
                                            }
                                        } else
                                            (v = xt(v === r ? v.splice(f, v.length) : v)),
                                                o ? o(null, r, v, l) : I.apply(r, v);
                                    })
                                );
                            }
                            function Dt(t) {
                                for (
                                    var e,
                                        i,
                                        o,
                                        s = t.length,
                                        r = n.relative[t[0].type],
                                        a = r || n.relative[" "],
                                        l = r ? 1 : 0,
                                        u = _t(
                                            function (t) {
                                                return t === e;
                                            },
                                            a,
                                            !0
                                        ),
                                        h = _t(
                                            function (t) {
                                                return H(e, t) > -1;
                                            },
                                            a,
                                            !0
                                        ),
                                        d = [
                                            function (t, i, n) {
                                                var o =
                                                    (!r && (n || i !== c)) ||
                                                    ((e = i).nodeType ? u(t, i, n) : h(t, i, n));
                                                return (e = null), o;
                                            },
                                        ];
                                    l < s;
                                    l++
                                )
                                    if ((i = n.relative[t[l].type])) d = [_t(wt(d), i)];
                                    else {
                                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[_]) {
                                            for (o = ++l; o < s && !n.relative[t[o].type]; o++);
                                            return kt(
                                                l > 1 && wt(d),
                                                l > 1 &&
                                                    bt(
                                                        t
                                                            .slice(0, l - 1)
                                                            .concat({ value: " " === t[l - 2].type ? "*" : "" })
                                                    ).replace(q, "$1"),
                                                i,
                                                l < o && Dt(t.slice(l, o)),
                                                o < s && Dt((t = t.slice(o))),
                                                o < s && bt(t)
                                            );
                                        }
                                        d.push(i);
                                    }
                                return wt(d);
                            }
                            return (
                                (yt.prototype = n.filters = n.pseudos),
                                (n.setFilters = new yt()),
                                (r = at.tokenize =
                                    function (t, e) {
                                        var i,
                                            o,
                                            s,
                                            r,
                                            a,
                                            l,
                                            c,
                                            u = C[t + " "];
                                        if (u) return e ? 0 : u.slice(0);
                                        for (a = t, l = [], c = n.preFilter; a; ) {
                                            for (r in ((i && !(o = Y.exec(a))) ||
                                                (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                                            (i = !1),
                                            (o = B.exec(a)) &&
                                                ((i = o.shift()),
                                                s.push({ value: i, type: o[0].replace(q, " ") }),
                                                (a = a.slice(i.length))),
                                            n.filter))
                                                !(o = X[r].exec(a)) ||
                                                    (c[r] && !(o = c[r](o))) ||
                                                    ((i = o.shift()),
                                                    s.push({ value: i, type: r, matches: o }),
                                                    (a = a.slice(i.length)));
                                            if (!i) break;
                                        }
                                        return e ? a.length : a ? at.error(t) : C(t, l).slice(0);
                                    }),
                                (a = at.compile =
                                    function (t, e) {
                                        var i,
                                            o = [],
                                            s = [],
                                            a = T[t + " "];
                                        if (!a) {
                                            for (e || (e = r(t)), i = e.length; i--; )
                                                (a = Dt(e[i]))[_] ? o.push(a) : s.push(a);
                                            (a = T(
                                                t,
                                                (function (t, e) {
                                                    var i = e.length > 0,
                                                        o = t.length > 0,
                                                        s = function (s, r, a, l, u) {
                                                            var h,
                                                                f,
                                                                m,
                                                                v = 0,
                                                                y = "0",
                                                                b = s && [],
                                                                _ = [],
                                                                w = c,
                                                                k = s || (o && n.find.TAG("*", u)),
                                                                D = (x += null == w ? 1 : Math.random() || 0.1),
                                                                C = k.length;
                                                            for (
                                                                u && (c = r == p || r || u);
                                                                y !== C && null != (h = k[y]);
                                                                y++
                                                            ) {
                                                                if (o && h) {
                                                                    for (
                                                                        f = 0,
                                                                            r ||
                                                                                h.ownerDocument == p ||
                                                                                (d(h), (a = !g));
                                                                        (m = t[f++]);

                                                                    )
                                                                        if (m(h, r || p, a)) {
                                                                            l.push(h);
                                                                            break;
                                                                        }
                                                                    u && (x = D);
                                                                }
                                                                i && ((h = !m && h) && v--, s && b.push(h));
                                                            }
                                                            if (((v += y), i && y !== v)) {
                                                                for (f = 0; (m = e[f++]); ) m(b, _, r, a);
                                                                if (s) {
                                                                    if (v > 0)
                                                                        for (; y--; )
                                                                            b[y] || _[y] || (_[y] = M.call(l));
                                                                    _ = xt(_);
                                                                }
                                                                I.apply(l, _),
                                                                    u &&
                                                                        !s &&
                                                                        _.length > 0 &&
                                                                        v + e.length > 1 &&
                                                                        at.uniqueSort(l);
                                                            }
                                                            return u && ((x = D), (c = w)), b;
                                                        };
                                                    return i ? ct(s) : s;
                                                })(s, o)
                                            )).selector = t;
                                        }
                                        return a;
                                    }),
                                (l = at.select =
                                    function (t, e, i, o) {
                                        var s,
                                            l,
                                            c,
                                            u,
                                            h,
                                            d = "function" == typeof t && t,
                                            p = !o && r((t = d.selector || t));
                                        if (((i = i || []), 1 === p.length)) {
                                            if (
                                                (l = p[0] = p[0].slice(0)).length > 2 &&
                                                "ID" === (c = l[0]).type &&
                                                9 === e.nodeType &&
                                                g &&
                                                n.relative[l[1].type]
                                            ) {
                                                if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0]))
                                                    return i;
                                                d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                                            }
                                            for (
                                                s = X.needsContext.test(t) ? 0 : l.length;
                                                s-- && ((c = l[s]), !n.relative[(u = c.type)]);

                                            )
                                                if (
                                                    (h = n.find[u]) &&
                                                    (o = h(
                                                        c.matches[0].replace(et, it),
                                                        (tt.test(l[0].type) && vt(e.parentNode)) || e
                                                    ))
                                                ) {
                                                    if ((l.splice(s, 1), !(t = o.length && bt(l))))
                                                        return I.apply(i, o), i;
                                                    break;
                                                }
                                        }
                                        return (
                                            (d || a(t, p))(o, e, !g, i, !e || (tt.test(t) && vt(e.parentNode)) || e), i
                                        );
                                    }),
                                (i.sortStable = _.split("").sort(E).join("") === _),
                                (i.detectDuplicates = !!h),
                                d(),
                                (i.sortDetached = ut(function (t) {
                                    return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
                                })),
                                ut(function (t) {
                                    return (
                                        (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href")
                                    );
                                }) ||
                                    ht("type|href|height|width", function (t, e, i) {
                                        if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                                    }),
                                (i.attributes &&
                                    ut(function (t) {
                                        return (
                                            (t.innerHTML = "<input/>"),
                                            t.firstChild.setAttribute("value", ""),
                                            "" === t.firstChild.getAttribute("value")
                                        );
                                    })) ||
                                    ht("value", function (t, e, i) {
                                        if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                                    }),
                                ut(function (t) {
                                    return null == t.getAttribute("disabled");
                                }) ||
                                    ht(O, function (t, e, i) {
                                        var n;
                                        if (!i)
                                            return !0 === t[e]
                                                ? e.toLowerCase()
                                                : (n = t.getAttributeNode(e)) && n.specified
                                                  ? n.value
                                                  : null;
                                    }),
                                at
                            );
                        })(n);
                        (D.find = T),
                            (D.expr = T.selectors),
                            (D.expr[":"] = D.expr.pseudos),
                            (D.uniqueSort = D.unique = T.uniqueSort),
                            (D.text = T.getText),
                            (D.isXMLDoc = T.isXML),
                            (D.contains = T.contains),
                            (D.escapeSelector = T.escape);
                        var S = function (t, e, i) {
                                for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                                    if (1 === t.nodeType) {
                                        if (o && D(t).is(i)) break;
                                        n.push(t);
                                    }
                                return n;
                            },
                            E = function (t, e) {
                                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                                return i;
                            },
                            A = D.expr.match.needsContext;
                        function N(t, e) {
                            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                        }
                        var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                        function P(t, e, i) {
                            return v(e)
                                ? D.grep(t, function (t, n) {
                                      return !!e.call(t, n, t) !== i;
                                  })
                                : e.nodeType
                                  ? D.grep(t, function (t) {
                                        return (t === e) !== i;
                                    })
                                  : "string" != typeof e
                                    ? D.grep(t, function (t) {
                                          return u.call(e, t) > -1 !== i;
                                      })
                                    : D.filter(e, t, i);
                        }
                        (D.filter = function (t, e, i) {
                            var n = e[0];
                            return (
                                i && (t = ":not(" + t + ")"),
                                1 === e.length && 1 === n.nodeType
                                    ? D.find.matchesSelector(n, t)
                                        ? [n]
                                        : []
                                    : D.find.matches(
                                          t,
                                          D.grep(e, function (t) {
                                              return 1 === t.nodeType;
                                          })
                                      )
                            );
                        }),
                            D.fn.extend({
                                find: function (t) {
                                    var e,
                                        i,
                                        n = this.length,
                                        o = this;
                                    if ("string" != typeof t)
                                        return this.pushStack(
                                            D(t).filter(function () {
                                                for (e = 0; e < n; e++) if (D.contains(o[e], this)) return !0;
                                            })
                                        );
                                    for (i = this.pushStack([]), e = 0; e < n; e++) D.find(t, o[e], i);
                                    return n > 1 ? D.uniqueSort(i) : i;
                                },
                                filter: function (t) {
                                    return this.pushStack(P(this, t || [], !1));
                                },
                                not: function (t) {
                                    return this.pushStack(P(this, t || [], !0));
                                },
                                is: function (t) {
                                    return !!P(this, "string" == typeof t && A.test(t) ? D(t) : t || [], !1).length;
                                },
                            });
                        var I,
                            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                        ((D.fn.init = function (t, e, i) {
                            var n, o;
                            if (!t) return this;
                            if (((i = i || I), "string" == typeof t)) {
                                if (
                                    !(n =
                                        "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                                            ? [null, t, null]
                                            : z.exec(t)) ||
                                    (!n[1] && e)
                                )
                                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                                if (n[1]) {
                                    if (
                                        ((e = e instanceof D ? e[0] : e),
                                        D.merge(
                                            this,
                                            D.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : b, !0)
                                        ),
                                        M.test(n[1]) && D.isPlainObject(e))
                                    )
                                        for (n in e) v(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                                    return this;
                                }
                                return (o = b.getElementById(n[2])) && ((this[0] = o), (this.length = 1)), this;
                            }
                            return t.nodeType
                                ? ((this[0] = t), (this.length = 1), this)
                                : v(t)
                                  ? void 0 !== i.ready
                                      ? i.ready(t)
                                      : t(D)
                                  : D.makeArray(t, this);
                        }).prototype = D.fn),
                            (I = D(b));
                        var H = /^(?:parents|prev(?:Until|All))/,
                            O = { children: !0, contents: !0, next: !0, prev: !0 };
                        function L(t, e) {
                            for (; (t = t[e]) && 1 !== t.nodeType; );
                            return t;
                        }
                        D.fn.extend({
                            has: function (t) {
                                var e = D(t, this),
                                    i = e.length;
                                return this.filter(function () {
                                    for (var t = 0; t < i; t++) if (D.contains(this, e[t])) return !0;
                                });
                            },
                            closest: function (t, e) {
                                var i,
                                    n = 0,
                                    o = this.length,
                                    s = [],
                                    r = "string" != typeof t && D(t);
                                if (!A.test(t))
                                    for (; n < o; n++)
                                        for (i = this[n]; i && i !== e; i = i.parentNode)
                                            if (
                                                i.nodeType < 11 &&
                                                (r ? r.index(i) > -1 : 1 === i.nodeType && D.find.matchesSelector(i, t))
                                            ) {
                                                s.push(i);
                                                break;
                                            }
                                return this.pushStack(s.length > 1 ? D.uniqueSort(s) : s);
                            },
                            index: function (t) {
                                return t
                                    ? "string" == typeof t
                                        ? u.call(D(t), this[0])
                                        : u.call(this, t.jquery ? t[0] : t)
                                    : this[0] && this[0].parentNode
                                      ? this.first().prevAll().length
                                      : -1;
                            },
                            add: function (t, e) {
                                return this.pushStack(D.uniqueSort(D.merge(this.get(), D(t, e))));
                            },
                            addBack: function (t) {
                                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                            },
                        }),
                            D.each(
                                {
                                    parent: function (t) {
                                        var e = t.parentNode;
                                        return e && 11 !== e.nodeType ? e : null;
                                    },
                                    parents: function (t) {
                                        return S(t, "parentNode");
                                    },
                                    parentsUntil: function (t, e, i) {
                                        return S(t, "parentNode", i);
                                    },
                                    next: function (t) {
                                        return L(t, "nextSibling");
                                    },
                                    prev: function (t) {
                                        return L(t, "previousSibling");
                                    },
                                    nextAll: function (t) {
                                        return S(t, "nextSibling");
                                    },
                                    prevAll: function (t) {
                                        return S(t, "previousSibling");
                                    },
                                    nextUntil: function (t, e, i) {
                                        return S(t, "nextSibling", i);
                                    },
                                    prevUntil: function (t, e, i) {
                                        return S(t, "previousSibling", i);
                                    },
                                    siblings: function (t) {
                                        return E((t.parentNode || {}).firstChild, t);
                                    },
                                    children: function (t) {
                                        return E(t.firstChild);
                                    },
                                    contents: function (t) {
                                        return null != t.contentDocument && r(t.contentDocument)
                                            ? t.contentDocument
                                            : (N(t, "template") && (t = t.content || t), D.merge([], t.childNodes));
                                    },
                                },
                                function (t, e) {
                                    D.fn[t] = function (i, n) {
                                        var o = D.map(this, e, i);
                                        return (
                                            "Until" !== t.slice(-5) && (n = i),
                                            n && "string" == typeof n && (o = D.filter(n, o)),
                                            this.length > 1 && (O[t] || D.uniqueSort(o), H.test(t) && o.reverse()),
                                            this.pushStack(o)
                                        );
                                    };
                                }
                            );
                        var j = /[^\x20\t\r\n\f]+/g;
                        function R(t) {
                            return t;
                        }
                        function W(t) {
                            throw t;
                        }
                        function F(t, e, i, n) {
                            var o;
                            try {
                                t && v((o = t.promise))
                                    ? o.call(t).done(e).fail(i)
                                    : t && v((o = t.then))
                                      ? o.call(t, e, i)
                                      : e.apply(void 0, [t].slice(n));
                            } catch (t) {
                                i.apply(void 0, [t]);
                            }
                        }
                        (D.Callbacks = function (t) {
                            t =
                                "string" == typeof t
                                    ? (function (t) {
                                          var e = {};
                                          return (
                                              D.each(t.match(j) || [], function (t, i) {
                                                  e[i] = !0;
                                              }),
                                              e
                                          );
                                      })(t)
                                    : D.extend({}, t);
                            var e,
                                i,
                                n,
                                o,
                                s = [],
                                r = [],
                                a = -1,
                                l = function () {
                                    for (o = o || t.once, n = e = !0; r.length; a = -1)
                                        for (i = r.shift(); ++a < s.length; )
                                            !1 === s[a].apply(i[0], i[1]) &&
                                                t.stopOnFalse &&
                                                ((a = s.length), (i = !1));
                                    t.memory || (i = !1), (e = !1), o && (s = i ? [] : "");
                                },
                                c = {
                                    add: function () {
                                        return (
                                            s &&
                                                (i && !e && ((a = s.length - 1), r.push(i)),
                                                (function e(i) {
                                                    D.each(i, function (i, n) {
                                                        v(n)
                                                            ? (t.unique && c.has(n)) || s.push(n)
                                                            : n && n.length && "string" !== x(n) && e(n);
                                                    });
                                                })(arguments),
                                                i && !e && l()),
                                            this
                                        );
                                    },
                                    remove: function () {
                                        return (
                                            D.each(arguments, function (t, e) {
                                                for (var i; (i = D.inArray(e, s, i)) > -1; )
                                                    s.splice(i, 1), i <= a && a--;
                                            }),
                                            this
                                        );
                                    },
                                    has: function (t) {
                                        return t ? D.inArray(t, s) > -1 : s.length > 0;
                                    },
                                    empty: function () {
                                        return s && (s = []), this;
                                    },
                                    disable: function () {
                                        return (o = r = []), (s = i = ""), this;
                                    },
                                    disabled: function () {
                                        return !s;
                                    },
                                    lock: function () {
                                        return (o = r = []), i || e || (s = i = ""), this;
                                    },
                                    locked: function () {
                                        return !!o;
                                    },
                                    fireWith: function (t, i) {
                                        return (
                                            o || ((i = [t, (i = i || []).slice ? i.slice() : i]), r.push(i), e || l()),
                                            this
                                        );
                                    },
                                    fire: function () {
                                        return c.fireWith(this, arguments), this;
                                    },
                                    fired: function () {
                                        return !!n;
                                    },
                                };
                            return c;
                        }),
                            D.extend({
                                Deferred: function (t) {
                                    var e = [
                                            ["notify", "progress", D.Callbacks("memory"), D.Callbacks("memory"), 2],
                                            [
                                                "resolve",
                                                "done",
                                                D.Callbacks("once memory"),
                                                D.Callbacks("once memory"),
                                                0,
                                                "resolved",
                                            ],
                                            [
                                                "reject",
                                                "fail",
                                                D.Callbacks("once memory"),
                                                D.Callbacks("once memory"),
                                                1,
                                                "rejected",
                                            ],
                                        ],
                                        i = "pending",
                                        o = {
                                            state: function () {
                                                return i;
                                            },
                                            always: function () {
                                                return s.done(arguments).fail(arguments), this;
                                            },
                                            catch: function (t) {
                                                return o.then(null, t);
                                            },
                                            pipe: function () {
                                                var t = arguments;
                                                return D.Deferred(function (i) {
                                                    D.each(e, function (e, n) {
                                                        var o = v(t[n[4]]) && t[n[4]];
                                                        s[n[1]](function () {
                                                            var t = o && o.apply(this, arguments);
                                                            t && v(t.promise)
                                                                ? t
                                                                      .promise()
                                                                      .progress(i.notify)
                                                                      .done(i.resolve)
                                                                      .fail(i.reject)
                                                                : i[n[0] + "With"](this, o ? [t] : arguments);
                                                        });
                                                    }),
                                                        (t = null);
                                                }).promise();
                                            },
                                            then: function (t, i, o) {
                                                var s = 0;
                                                function r(t, e, i, o) {
                                                    return function () {
                                                        var a = this,
                                                            l = arguments,
                                                            c = function () {
                                                                var n, c;
                                                                if (!(t < s)) {
                                                                    if ((n = i.apply(a, l)) === e.promise())
                                                                        throw new TypeError("Thenable self-resolution");
                                                                    (c =
                                                                        n &&
                                                                        ("object" == typeof n ||
                                                                            "function" == typeof n) &&
                                                                        n.then),
                                                                        v(c)
                                                                            ? o
                                                                                ? c.call(
                                                                                      n,
                                                                                      r(s, e, R, o),
                                                                                      r(s, e, W, o)
                                                                                  )
                                                                                : (s++,
                                                                                  c.call(
                                                                                      n,
                                                                                      r(s, e, R, o),
                                                                                      r(s, e, W, o),
                                                                                      r(s, e, R, e.notifyWith)
                                                                                  ))
                                                                            : (i !== R && ((a = void 0), (l = [n])),
                                                                              (o || e.resolveWith)(a, l));
                                                                }
                                                            },
                                                            u = o
                                                                ? c
                                                                : function () {
                                                                      try {
                                                                          c();
                                                                      } catch (n) {
                                                                          D.Deferred.exceptionHook &&
                                                                              D.Deferred.exceptionHook(n, u.stackTrace),
                                                                              t + 1 >= s &&
                                                                                  (i !== W && ((a = void 0), (l = [n])),
                                                                                  e.rejectWith(a, l));
                                                                      }
                                                                  };
                                                        t
                                                            ? u()
                                                            : (D.Deferred.getStackHook &&
                                                                  (u.stackTrace = D.Deferred.getStackHook()),
                                                              n.setTimeout(u));
                                                    };
                                                }
                                                return D.Deferred(function (n) {
                                                    e[0][3].add(r(0, n, v(o) ? o : R, n.notifyWith)),
                                                        e[1][3].add(r(0, n, v(t) ? t : R)),
                                                        e[2][3].add(r(0, n, v(i) ? i : W));
                                                }).promise();
                                            },
                                            promise: function (t) {
                                                return null != t ? D.extend(t, o) : o;
                                            },
                                        },
                                        s = {};
                                    return (
                                        D.each(e, function (t, n) {
                                            var r = n[2],
                                                a = n[5];
                                            (o[n[1]] = r.add),
                                                a &&
                                                    r.add(
                                                        function () {
                                                            i = a;
                                                        },
                                                        e[3 - t][2].disable,
                                                        e[3 - t][3].disable,
                                                        e[0][2].lock,
                                                        e[0][3].lock
                                                    ),
                                                r.add(n[3].fire),
                                                (s[n[0]] = function () {
                                                    return (
                                                        s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                                                    );
                                                }),
                                                (s[n[0] + "With"] = r.fireWith);
                                        }),
                                        o.promise(s),
                                        t && t.call(s, s),
                                        s
                                    );
                                },
                                when: function (t) {
                                    var e = arguments.length,
                                        i = e,
                                        n = Array(i),
                                        o = a.call(arguments),
                                        s = D.Deferred(),
                                        r = function (t) {
                                            return function (i) {
                                                (n[t] = this),
                                                    (o[t] = arguments.length > 1 ? a.call(arguments) : i),
                                                    --e || s.resolveWith(n, o);
                                            };
                                        };
                                    if (
                                        e <= 1 &&
                                        (F(t, s.done(r(i)).resolve, s.reject, !e),
                                        "pending" === s.state() || v(o[i] && o[i].then))
                                    )
                                        return s.then();
                                    for (; i--; ) F(o[i], r(i), s.reject);
                                    return s.promise();
                                },
                            });
                        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                        (D.Deferred.exceptionHook = function (t, e) {
                            n.console &&
                                n.console.warn &&
                                t &&
                                q.test(t.name) &&
                                n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
                        }),
                            (D.readyException = function (t) {
                                n.setTimeout(function () {
                                    throw t;
                                });
                            });
                        var Y = D.Deferred();
                        function B() {
                            b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), D.ready();
                        }
                        (D.fn.ready = function (t) {
                            return (
                                Y.then(t).catch(function (t) {
                                    D.readyException(t);
                                }),
                                this
                            );
                        }),
                            D.extend({
                                isReady: !1,
                                readyWait: 1,
                                ready: function (t) {
                                    (!0 === t ? --D.readyWait : D.isReady) ||
                                        ((D.isReady = !0), (!0 !== t && --D.readyWait > 0) || Y.resolveWith(b, [D]));
                                },
                            }),
                            (D.ready.then = Y.then),
                            "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll)
                                ? n.setTimeout(D.ready)
                                : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
                        var U = function (t, e, i, n, o, s, r) {
                                var a = 0,
                                    l = t.length,
                                    c = null == i;
                                if ("object" === x(i)) for (a in ((o = !0), i)) U(t, e, a, i[a], !0, s, r);
                                else if (
                                    void 0 !== n &&
                                    ((o = !0),
                                    v(n) || (r = !0),
                                    c &&
                                        (r
                                            ? (e.call(t, n), (e = null))
                                            : ((c = e),
                                              (e = function (t, e, i) {
                                                  return c.call(D(t), i);
                                              }))),
                                    e)
                                )
                                    for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                                return o ? t : c ? e.call(t) : l ? e(t[0], i) : s;
                            },
                            $ = /^-ms-/,
                            K = /-([a-z])/g;
                        function X(t, e) {
                            return e.toUpperCase();
                        }
                        function V(t) {
                            return t.replace($, "ms-").replace(K, X);
                        }
                        var G = function (t) {
                            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
                        };
                        function J() {
                            this.expando = D.expando + J.uid++;
                        }
                        (J.uid = 1),
                            (J.prototype = {
                                cache: function (t) {
                                    var e = t[this.expando];
                                    return (
                                        e ||
                                            ((e = {}),
                                            G(t) &&
                                                (t.nodeType
                                                    ? (t[this.expando] = e)
                                                    : Object.defineProperty(t, this.expando, {
                                                          value: e,
                                                          configurable: !0,
                                                      }))),
                                        e
                                    );
                                },
                                set: function (t, e, i) {
                                    var n,
                                        o = this.cache(t);
                                    if ("string" == typeof e) o[V(e)] = i;
                                    else for (n in e) o[V(n)] = e[n];
                                    return o;
                                },
                                get: function (t, e) {
                                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)];
                                },
                                access: function (t, e, i) {
                                    return void 0 === e || (e && "string" == typeof e && void 0 === i)
                                        ? this.get(t, e)
                                        : (this.set(t, e, i), void 0 !== i ? i : e);
                                },
                                remove: function (t, e) {
                                    var i,
                                        n = t[this.expando];
                                    if (void 0 !== n) {
                                        if (void 0 !== e) {
                                            i = (e = Array.isArray(e)
                                                ? e.map(V)
                                                : (e = V(e)) in n
                                                  ? [e]
                                                  : e.match(j) || []).length;
                                            for (; i--; ) delete n[e[i]];
                                        }
                                        (void 0 === e || D.isEmptyObject(n)) &&
                                            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                                    }
                                },
                                hasData: function (t) {
                                    var e = t[this.expando];
                                    return void 0 !== e && !D.isEmptyObject(e);
                                },
                            });
                        var Q = new J(),
                            Z = new J(),
                            tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            et = /[A-Z]/g;
                        function it(t, e, i) {
                            var n;
                            if (void 0 === i && 1 === t.nodeType)
                                if (
                                    ((n = "data-" + e.replace(et, "-$&").toLowerCase()),
                                    "string" == typeof (i = t.getAttribute(n)))
                                ) {
                                    try {
                                        i = (function (t) {
                                            return (
                                                "true" === t ||
                                                ("false" !== t &&
                                                    ("null" === t
                                                        ? null
                                                        : t === +t + ""
                                                          ? +t
                                                          : tt.test(t)
                                                            ? JSON.parse(t)
                                                            : t))
                                            );
                                        })(i);
                                    } catch (t) {}
                                    Z.set(t, e, i);
                                } else i = void 0;
                            return i;
                        }
                        D.extend({
                            hasData: function (t) {
                                return Z.hasData(t) || Q.hasData(t);
                            },
                            data: function (t, e, i) {
                                return Z.access(t, e, i);
                            },
                            removeData: function (t, e) {
                                Z.remove(t, e);
                            },
                            _data: function (t, e, i) {
                                return Q.access(t, e, i);
                            },
                            _removeData: function (t, e) {
                                Q.remove(t, e);
                            },
                        }),
                            D.fn.extend({
                                data: function (t, e) {
                                    var i,
                                        n,
                                        o,
                                        s = this[0],
                                        r = s && s.attributes;
                                    if (void 0 === t) {
                                        if (
                                            this.length &&
                                            ((o = Z.get(s)), 1 === s.nodeType && !Q.get(s, "hasDataAttrs"))
                                        ) {
                                            for (i = r.length; i--; )
                                                r[i] &&
                                                    0 === (n = r[i].name).indexOf("data-") &&
                                                    ((n = V(n.slice(5))), it(s, n, o[n]));
                                            Q.set(s, "hasDataAttrs", !0);
                                        }
                                        return o;
                                    }
                                    return "object" == typeof t
                                        ? this.each(function () {
                                              Z.set(this, t);
                                          })
                                        : U(
                                              this,
                                              function (e) {
                                                  var i;
                                                  if (s && void 0 === e)
                                                      return void 0 !== (i = Z.get(s, t)) || void 0 !== (i = it(s, t))
                                                          ? i
                                                          : void 0;
                                                  this.each(function () {
                                                      Z.set(this, t, e);
                                                  });
                                              },
                                              null,
                                              e,
                                              arguments.length > 1,
                                              null,
                                              !0
                                          );
                                },
                                removeData: function (t) {
                                    return this.each(function () {
                                        Z.remove(this, t);
                                    });
                                },
                            }),
                            D.extend({
                                queue: function (t, e, i) {
                                    var n;
                                    if (t)
                                        return (
                                            (e = (e || "fx") + "queue"),
                                            (n = Q.get(t, e)),
                                            i &&
                                                (!n || Array.isArray(i)
                                                    ? (n = Q.access(t, e, D.makeArray(i)))
                                                    : n.push(i)),
                                            n || []
                                        );
                                },
                                dequeue: function (t, e) {
                                    e = e || "fx";
                                    var i = D.queue(t, e),
                                        n = i.length,
                                        o = i.shift(),
                                        s = D._queueHooks(t, e);
                                    "inprogress" === o && ((o = i.shift()), n--),
                                        o &&
                                            ("fx" === e && i.unshift("inprogress"),
                                            delete s.stop,
                                            o.call(
                                                t,
                                                function () {
                                                    D.dequeue(t, e);
                                                },
                                                s
                                            )),
                                        !n && s && s.empty.fire();
                                },
                                _queueHooks: function (t, e) {
                                    var i = e + "queueHooks";
                                    return (
                                        Q.get(t, i) ||
                                        Q.access(t, i, {
                                            empty: D.Callbacks("once memory").add(function () {
                                                Q.remove(t, [e + "queue", i]);
                                            }),
                                        })
                                    );
                                },
                            }),
                            D.fn.extend({
                                queue: function (t, e) {
                                    var i = 2;
                                    return (
                                        "string" != typeof t && ((e = t), (t = "fx"), i--),
                                        arguments.length < i
                                            ? D.queue(this[0], t)
                                            : void 0 === e
                                              ? this
                                              : this.each(function () {
                                                    var i = D.queue(this, t, e);
                                                    D._queueHooks(this, t),
                                                        "fx" === t && "inprogress" !== i[0] && D.dequeue(this, t);
                                                })
                                    );
                                },
                                dequeue: function (t) {
                                    return this.each(function () {
                                        D.dequeue(this, t);
                                    });
                                },
                                clearQueue: function (t) {
                                    return this.queue(t || "fx", []);
                                },
                                promise: function (t, e) {
                                    var i,
                                        n = 1,
                                        o = D.Deferred(),
                                        s = this,
                                        r = this.length,
                                        a = function () {
                                            --n || o.resolveWith(s, [s]);
                                        };
                                    for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; r--; )
                                        (i = Q.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                                    return a(), o.promise(e);
                                },
                            });
                        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
                            st = ["Top", "Right", "Bottom", "Left"],
                            rt = b.documentElement,
                            at = function (t) {
                                return D.contains(t.ownerDocument, t);
                            },
                            lt = { composed: !0 };
                        rt.getRootNode &&
                            (at = function (t) {
                                return D.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument;
                            });
                        var ct = function (t, e) {
                            return (
                                "none" === (t = e || t).style.display ||
                                ("" === t.style.display && at(t) && "none" === D.css(t, "display"))
                            );
                        };
                        function ut(t, e, i, n) {
                            var o,
                                s,
                                r = 20,
                                a = n
                                    ? function () {
                                          return n.cur();
                                      }
                                    : function () {
                                          return D.css(t, e, "");
                                      },
                                l = a(),
                                c = (i && i[3]) || (D.cssNumber[e] ? "" : "px"),
                                u = t.nodeType && (D.cssNumber[e] || ("px" !== c && +l)) && ot.exec(D.css(t, e));
                            if (u && u[3] !== c) {
                                for (l /= 2, c = c || u[3], u = +l || 1; r--; )
                                    D.style(t, e, u + c),
                                        (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
                                        (u /= s);
                                (u *= 2), D.style(t, e, u + c), (i = i || []);
                            }
                            return (
                                i &&
                                    ((u = +u || +l || 0),
                                    (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
                                    n && ((n.unit = c), (n.start = u), (n.end = o))),
                                o
                            );
                        }
                        var ht = {};
                        function dt(t) {
                            var e,
                                i = t.ownerDocument,
                                n = t.nodeName,
                                o = ht[n];
                            return (
                                o ||
                                ((e = i.body.appendChild(i.createElement(n))),
                                (o = D.css(e, "display")),
                                e.parentNode.removeChild(e),
                                "none" === o && (o = "block"),
                                (ht[n] = o),
                                o)
                            );
                        }
                        function pt(t, e) {
                            for (var i, n, o = [], s = 0, r = t.length; s < r; s++)
                                (n = t[s]).style &&
                                    ((i = n.style.display),
                                    e
                                        ? ("none" === i &&
                                              ((o[s] = Q.get(n, "display") || null), o[s] || (n.style.display = "")),
                                          "" === n.style.display && ct(n) && (o[s] = dt(n)))
                                        : "none" !== i && ((o[s] = "none"), Q.set(n, "display", i)));
                            for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
                            return t;
                        }
                        D.fn.extend({
                            show: function () {
                                return pt(this, !0);
                            },
                            hide: function () {
                                return pt(this);
                            },
                            toggle: function (t) {
                                return "boolean" == typeof t
                                    ? t
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                          ct(this) ? D(this).show() : D(this).hide();
                                      });
                            },
                        });
                        var ft,
                            gt,
                            mt = /^(?:checkbox|radio)$/i,
                            vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                            yt = /^$|^module$|\/(?:java|ecma)script/i;
                        (ft = b.createDocumentFragment().appendChild(b.createElement("div"))),
                            (gt = b.createElement("input")).setAttribute("type", "radio"),
                            gt.setAttribute("checked", "checked"),
                            gt.setAttribute("name", "t"),
                            ft.appendChild(gt),
                            (m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
                            (ft.innerHTML = "<textarea>x</textarea>"),
                            (m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue),
                            (ft.innerHTML = "<option></option>"),
                            (m.option = !!ft.lastChild);
                        var bt = {
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""],
                        };
                        function _t(t, e) {
                            var i;
                            return (
                                (i =
                                    void 0 !== t.getElementsByTagName
                                        ? t.getElementsByTagName(e || "*")
                                        : void 0 !== t.querySelectorAll
                                          ? t.querySelectorAll(e || "*")
                                          : []),
                                void 0 === e || (e && N(t, e)) ? D.merge([t], i) : i
                            );
                        }
                        function wt(t, e) {
                            for (var i = 0, n = t.length; i < n; i++)
                                Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"));
                        }
                        (bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead),
                            (bt.th = bt.td),
                            m.option || (bt.optgroup = bt.option = [1, "<select multiple='multiple'>", "</select>"]);
                        var xt = /<|&#?\w+;/;
                        function kt(t, e, i, n, o) {
                            for (
                                var s, r, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length;
                                p < f;
                                p++
                            )
                                if ((s = t[p]) || 0 === s)
                                    if ("object" === x(s)) D.merge(d, s.nodeType ? [s] : s);
                                    else if (xt.test(s)) {
                                        for (
                                            r = r || h.appendChild(e.createElement("div")),
                                                a = (vt.exec(s) || ["", ""])[1].toLowerCase(),
                                                l = bt[a] || bt._default,
                                                r.innerHTML = l[1] + D.htmlPrefilter(s) + l[2],
                                                u = l[0];
                                            u--;

                                        )
                                            r = r.lastChild;
                                        D.merge(d, r.childNodes), ((r = h.firstChild).textContent = "");
                                    } else d.push(e.createTextNode(s));
                            for (h.textContent = "", p = 0; (s = d[p++]); )
                                if (n && D.inArray(s, n) > -1) o && o.push(s);
                                else if (((c = at(s)), (r = _t(h.appendChild(s), "script")), c && wt(r), i))
                                    for (u = 0; (s = r[u++]); ) yt.test(s.type || "") && i.push(s);
                            return h;
                        }
                        var Dt = /^([^.]*)(?:\.(.+)|)/;
                        function Ct() {
                            return !0;
                        }
                        function Tt() {
                            return !1;
                        }
                        function St(t, e) {
                            return (
                                (t ===
                                    (function () {
                                        try {
                                            return b.activeElement;
                                        } catch (t) {}
                                    })()) ==
                                ("focus" === e)
                            );
                        }
                        function Et(t, e, i, n, o, s) {
                            var r, a;
                            if ("object" == typeof e) {
                                for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
                                    Et(t, a, i, n, e[a], s);
                                return t;
                            }
                            if (
                                (null == n && null == o
                                    ? ((o = i), (n = i = void 0))
                                    : null == o &&
                                      ("string" == typeof i
                                          ? ((o = n), (n = void 0))
                                          : ((o = n), (n = i), (i = void 0))),
                                !1 === o)
                            )
                                o = Tt;
                            else if (!o) return t;
                            return (
                                1 === s &&
                                    ((r = o),
                                    ((o = function (t) {
                                        return D().off(t), r.apply(this, arguments);
                                    }).guid = r.guid || (r.guid = D.guid++))),
                                t.each(function () {
                                    D.event.add(this, e, o, n, i);
                                })
                            );
                        }
                        function At(t, e, i) {
                            i
                                ? (Q.set(t, e, !1),
                                  D.event.add(t, e, {
                                      namespace: !1,
                                      handler: function (t) {
                                          var n,
                                              o,
                                              s = Q.get(this, e);
                                          if (1 & t.isTrigger && this[e]) {
                                              if (s.length)
                                                  (D.event.special[e] || {}).delegateType && t.stopPropagation();
                                              else if (
                                                  ((s = a.call(arguments)),
                                                  Q.set(this, e, s),
                                                  (n = i(this, e)),
                                                  this[e](),
                                                  s !== (o = Q.get(this, e)) || n ? Q.set(this, e, !1) : (o = {}),
                                                  s !== o)
                                              )
                                                  return t.stopImmediatePropagation(), t.preventDefault(), o && o.value;
                                          } else
                                              s.length &&
                                                  (Q.set(this, e, {
                                                      value: D.event.trigger(
                                                          D.extend(s[0], D.Event.prototype),
                                                          s.slice(1),
                                                          this
                                                      ),
                                                  }),
                                                  t.stopImmediatePropagation());
                                      },
                                  }))
                                : void 0 === Q.get(t, e) && D.event.add(t, e, Ct);
                        }
                        (D.event = {
                            global: {},
                            add: function (t, e, i, n, o) {
                                var s,
                                    r,
                                    a,
                                    l,
                                    c,
                                    u,
                                    h,
                                    d,
                                    p,
                                    f,
                                    g,
                                    m = Q.get(t);
                                if (G(t))
                                    for (
                                        i.handler && ((i = (s = i).handler), (o = s.selector)),
                                            o && D.find.matchesSelector(rt, o),
                                            i.guid || (i.guid = D.guid++),
                                            (l = m.events) || (l = m.events = Object.create(null)),
                                            (r = m.handle) ||
                                                (r = m.handle =
                                                    function (e) {
                                                        return void 0 !== D && D.event.triggered !== e.type
                                                            ? D.event.dispatch.apply(t, arguments)
                                                            : void 0;
                                                    }),
                                            c = (e = (e || "").match(j) || [""]).length;
                                        c--;

                                    )
                                        (p = g = (a = Dt.exec(e[c]) || [])[1]),
                                            (f = (a[2] || "").split(".").sort()),
                                            p &&
                                                ((h = D.event.special[p] || {}),
                                                (p = (o ? h.delegateType : h.bindType) || p),
                                                (h = D.event.special[p] || {}),
                                                (u = D.extend(
                                                    {
                                                        type: p,
                                                        origType: g,
                                                        data: n,
                                                        handler: i,
                                                        guid: i.guid,
                                                        selector: o,
                                                        needsContext: o && D.expr.match.needsContext.test(o),
                                                        namespace: f.join("."),
                                                    },
                                                    s
                                                )),
                                                (d = l[p]) ||
                                                    (((d = l[p] = []).delegateCount = 0),
                                                    (h.setup && !1 !== h.setup.call(t, n, f, r)) ||
                                                        (t.addEventListener && t.addEventListener(p, r))),
                                                h.add &&
                                                    (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
                                                o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                                                (D.event.global[p] = !0));
                            },
                            remove: function (t, e, i, n, o) {
                                var s,
                                    r,
                                    a,
                                    l,
                                    c,
                                    u,
                                    h,
                                    d,
                                    p,
                                    f,
                                    g,
                                    m = Q.hasData(t) && Q.get(t);
                                if (m && (l = m.events)) {
                                    for (c = (e = (e || "").match(j) || [""]).length; c--; )
                                        if (
                                            ((p = g = (a = Dt.exec(e[c]) || [])[1]),
                                            (f = (a[2] || "").split(".").sort()),
                                            p)
                                        ) {
                                            for (
                                                h = D.event.special[p] || {},
                                                    d = l[(p = (n ? h.delegateType : h.bindType) || p)] || [],
                                                    a =
                                                        a[2] &&
                                                        new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                                    r = s = d.length;
                                                s--;

                                            )
                                                (u = d[s]),
                                                    (!o && g !== u.origType) ||
                                                        (i && i.guid !== u.guid) ||
                                                        (a && !a.test(u.namespace)) ||
                                                        (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                                                        (d.splice(s, 1),
                                                        u.selector && d.delegateCount--,
                                                        h.remove && h.remove.call(t, u));
                                            r &&
                                                !d.length &&
                                                ((h.teardown && !1 !== h.teardown.call(t, f, m.handle)) ||
                                                    D.removeEvent(t, p, m.handle),
                                                delete l[p]);
                                        } else for (p in l) D.event.remove(t, p + e[c], i, n, !0);
                                    D.isEmptyObject(l) && Q.remove(t, "handle events");
                                }
                            },
                            dispatch: function (t) {
                                var e,
                                    i,
                                    n,
                                    o,
                                    s,
                                    r,
                                    a = new Array(arguments.length),
                                    l = D.event.fix(t),
                                    c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                                    u = D.event.special[l.type] || {};
                                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                                if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                                    for (
                                        r = D.event.handlers.call(this, l, c), e = 0;
                                        (o = r[e++]) && !l.isPropagationStopped();

                                    )
                                        for (
                                            l.currentTarget = o.elem, i = 0;
                                            (s = o.handlers[i++]) && !l.isImmediatePropagationStopped();

                                        )
                                            (l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace)) ||
                                                ((l.handleObj = s),
                                                (l.data = s.data),
                                                void 0 !==
                                                    (n = (
                                                        (D.event.special[s.origType] || {}).handle || s.handler
                                                    ).apply(o.elem, a)) &&
                                                    !1 === (l.result = n) &&
                                                    (l.preventDefault(), l.stopPropagation()));
                                    return u.postDispatch && u.postDispatch.call(this, l), l.result;
                                }
                            },
                            handlers: function (t, e) {
                                var i,
                                    n,
                                    o,
                                    s,
                                    r,
                                    a = [],
                                    l = e.delegateCount,
                                    c = t.target;
                                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                                    for (; c !== this; c = c.parentNode || this)
                                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                            for (s = [], r = {}, i = 0; i < l; i++)
                                                void 0 === r[(o = (n = e[i]).selector + " ")] &&
                                                    (r[o] = n.needsContext
                                                        ? D(o, this).index(c) > -1
                                                        : D.find(o, this, null, [c]).length),
                                                    r[o] && s.push(n);
                                            s.length && a.push({ elem: c, handlers: s });
                                        }
                                return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
                            },
                            addProp: function (t, e) {
                                Object.defineProperty(D.Event.prototype, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: v(e)
                                        ? function () {
                                              if (this.originalEvent) return e(this.originalEvent);
                                          }
                                        : function () {
                                              if (this.originalEvent) return this.originalEvent[t];
                                          },
                                    set: function (e) {
                                        Object.defineProperty(this, t, {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: e,
                                        });
                                    },
                                });
                            },
                            fix: function (t) {
                                return t[D.expando] ? t : new D.Event(t);
                            },
                            special: {
                                load: { noBubble: !0 },
                                click: {
                                    setup: function (t) {
                                        var e = this || t;
                                        return mt.test(e.type) && e.click && N(e, "input") && At(e, "click", Ct), !1;
                                    },
                                    trigger: function (t) {
                                        var e = this || t;
                                        return mt.test(e.type) && e.click && N(e, "input") && At(e, "click"), !0;
                                    },
                                    _default: function (t) {
                                        var e = t.target;
                                        return (
                                            (mt.test(e.type) && e.click && N(e, "input") && Q.get(e, "click")) ||
                                            N(e, "a")
                                        );
                                    },
                                },
                                beforeunload: {
                                    postDispatch: function (t) {
                                        void 0 !== t.result &&
                                            t.originalEvent &&
                                            (t.originalEvent.returnValue = t.result);
                                    },
                                },
                            },
                        }),
                            (D.removeEvent = function (t, e, i) {
                                t.removeEventListener && t.removeEventListener(e, i);
                            }),
                            (D.Event = function (t, e) {
                                if (!(this instanceof D.Event)) return new D.Event(t, e);
                                t && t.type
                                    ? ((this.originalEvent = t),
                                      (this.type = t.type),
                                      (this.isDefaultPrevented =
                                          t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue)
                                              ? Ct
                                              : Tt),
                                      (this.target =
                                          t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                                      (this.currentTarget = t.currentTarget),
                                      (this.relatedTarget = t.relatedTarget))
                                    : (this.type = t),
                                    e && D.extend(this, e),
                                    (this.timeStamp = (t && t.timeStamp) || Date.now()),
                                    (this[D.expando] = !0);
                            }),
                            (D.Event.prototype = {
                                constructor: D.Event,
                                isDefaultPrevented: Tt,
                                isPropagationStopped: Tt,
                                isImmediatePropagationStopped: Tt,
                                isSimulated: !1,
                                preventDefault: function () {
                                    var t = this.originalEvent;
                                    (this.isDefaultPrevented = Ct), t && !this.isSimulated && t.preventDefault();
                                },
                                stopPropagation: function () {
                                    var t = this.originalEvent;
                                    (this.isPropagationStopped = Ct), t && !this.isSimulated && t.stopPropagation();
                                },
                                stopImmediatePropagation: function () {
                                    var t = this.originalEvent;
                                    (this.isImmediatePropagationStopped = Ct),
                                        t && !this.isSimulated && t.stopImmediatePropagation(),
                                        this.stopPropagation();
                                },
                            }),
                            D.each(
                                {
                                    altKey: !0,
                                    bubbles: !0,
                                    cancelable: !0,
                                    changedTouches: !0,
                                    ctrlKey: !0,
                                    detail: !0,
                                    eventPhase: !0,
                                    metaKey: !0,
                                    pageX: !0,
                                    pageY: !0,
                                    shiftKey: !0,
                                    view: !0,
                                    char: !0,
                                    code: !0,
                                    charCode: !0,
                                    key: !0,
                                    keyCode: !0,
                                    button: !0,
                                    buttons: !0,
                                    clientX: !0,
                                    clientY: !0,
                                    offsetX: !0,
                                    offsetY: !0,
                                    pointerId: !0,
                                    pointerType: !0,
                                    screenX: !0,
                                    screenY: !0,
                                    targetTouches: !0,
                                    toElement: !0,
                                    touches: !0,
                                    which: !0,
                                },
                                D.event.addProp
                            ),
                            D.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                                D.event.special[t] = {
                                    setup: function () {
                                        return At(this, t, St), !1;
                                    },
                                    trigger: function () {
                                        return At(this, t), !0;
                                    },
                                    _default: function () {
                                        return !0;
                                    },
                                    delegateType: e,
                                };
                            }),
                            D.each(
                                {
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout",
                                },
                                function (t, e) {
                                    D.event.special[t] = {
                                        delegateType: e,
                                        bindType: e,
                                        handle: function (t) {
                                            var i,
                                                n = this,
                                                o = t.relatedTarget,
                                                s = t.handleObj;
                                            return (
                                                (o && (o === n || D.contains(n, o))) ||
                                                    ((t.type = s.origType),
                                                    (i = s.handler.apply(this, arguments)),
                                                    (t.type = e)),
                                                i
                                            );
                                        },
                                    };
                                }
                            ),
                            D.fn.extend({
                                on: function (t, e, i, n) {
                                    return Et(this, t, e, i, n);
                                },
                                one: function (t, e, i, n) {
                                    return Et(this, t, e, i, n, 1);
                                },
                                off: function (t, e, i) {
                                    var n, o;
                                    if (t && t.preventDefault && t.handleObj)
                                        return (
                                            (n = t.handleObj),
                                            D(t.delegateTarget).off(
                                                n.namespace ? n.origType + "." + n.namespace : n.origType,
                                                n.selector,
                                                n.handler
                                            ),
                                            this
                                        );
                                    if ("object" == typeof t) {
                                        for (o in t) this.off(o, e, t[o]);
                                        return this;
                                    }
                                    return (
                                        (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
                                        !1 === i && (i = Tt),
                                        this.each(function () {
                                            D.event.remove(this, t, i, e);
                                        })
                                    );
                                },
                            });
                        var Nt = /<script|<style|<link/i,
                            Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                        function It(t, e) {
                            return (
                                (N(t, "table") &&
                                    N(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                                    D(t).children("tbody")[0]) ||
                                t
                            );
                        }
                        function zt(t) {
                            return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
                        }
                        function Ht(t) {
                            return (
                                "true/" === (t.type || "").slice(0, 5)
                                    ? (t.type = t.type.slice(5))
                                    : t.removeAttribute("type"),
                                t
                            );
                        }
                        function Ot(t, e) {
                            var i, n, o, s, r, a;
                            if (1 === e.nodeType) {
                                if (Q.hasData(t) && (a = Q.get(t).events))
                                    for (o in (Q.remove(e, "handle events"), a))
                                        for (i = 0, n = a[o].length; i < n; i++) D.event.add(e, o, a[o][i]);
                                Z.hasData(t) && ((s = Z.access(t)), (r = D.extend({}, s)), Z.set(e, r));
                            }
                        }
                        function Lt(t, e) {
                            var i = e.nodeName.toLowerCase();
                            "input" === i && mt.test(t.type)
                                ? (e.checked = t.checked)
                                : ("input" !== i && "textarea" !== i) || (e.defaultValue = t.defaultValue);
                        }
                        function jt(t, e, i, n) {
                            e = l(e);
                            var o,
                                s,
                                r,
                                a,
                                c,
                                u,
                                h = 0,
                                d = t.length,
                                p = d - 1,
                                f = e[0],
                                g = v(f);
                            if (g || (d > 1 && "string" == typeof f && !m.checkClone && Mt.test(f)))
                                return t.each(function (o) {
                                    var s = t.eq(o);
                                    g && (e[0] = f.call(this, o, s.html())), jt(s, e, i, n);
                                });
                            if (
                                d &&
                                ((s = (o = kt(e, t[0].ownerDocument, !1, t, n)).firstChild),
                                1 === o.childNodes.length && (o = s),
                                s || n)
                            ) {
                                for (a = (r = D.map(_t(o, "script"), zt)).length; h < d; h++)
                                    (c = o),
                                        h !== p && ((c = D.clone(c, !0, !0)), a && D.merge(r, _t(c, "script"))),
                                        i.call(t[h], c, h);
                                if (a)
                                    for (u = r[r.length - 1].ownerDocument, D.map(r, Ht), h = 0; h < a; h++)
                                        (c = r[h]),
                                            yt.test(c.type || "") &&
                                                !Q.access(c, "globalEval") &&
                                                D.contains(u, c) &&
                                                (c.src && "module" !== (c.type || "").toLowerCase()
                                                    ? D._evalUrl &&
                                                      !c.noModule &&
                                                      D._evalUrl(
                                                          c.src,
                                                          { nonce: c.nonce || c.getAttribute("nonce") },
                                                          u
                                                      )
                                                    : w(c.textContent.replace(Pt, ""), c, u));
                            }
                            return t;
                        }
                        function Rt(t, e, i) {
                            for (var n, o = e ? D.filter(e, t) : t, s = 0; null != (n = o[s]); s++)
                                i || 1 !== n.nodeType || D.cleanData(_t(n)),
                                    n.parentNode && (i && at(n) && wt(_t(n, "script")), n.parentNode.removeChild(n));
                            return t;
                        }
                        D.extend({
                            htmlPrefilter: function (t) {
                                return t;
                            },
                            clone: function (t, e, i) {
                                var n,
                                    o,
                                    s,
                                    r,
                                    a = t.cloneNode(!0),
                                    l = at(t);
                                if (!(m.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || D.isXMLDoc(t)))
                                    for (r = _t(a), n = 0, o = (s = _t(t)).length; n < o; n++) Lt(s[n], r[n]);
                                if (e)
                                    if (i)
                                        for (s = s || _t(t), r = r || _t(a), n = 0, o = s.length; n < o; n++)
                                            Ot(s[n], r[n]);
                                    else Ot(t, a);
                                return (r = _t(a, "script")).length > 0 && wt(r, !l && _t(t, "script")), a;
                            },
                            cleanData: function (t) {
                                for (var e, i, n, o = D.event.special, s = 0; void 0 !== (i = t[s]); s++)
                                    if (G(i)) {
                                        if ((e = i[Q.expando])) {
                                            if (e.events)
                                                for (n in e.events)
                                                    o[n] ? D.event.remove(i, n) : D.removeEvent(i, n, e.handle);
                                            i[Q.expando] = void 0;
                                        }
                                        i[Z.expando] && (i[Z.expando] = void 0);
                                    }
                            },
                        }),
                            D.fn.extend({
                                detach: function (t) {
                                    return Rt(this, t, !0);
                                },
                                remove: function (t) {
                                    return Rt(this, t);
                                },
                                text: function (t) {
                                    return U(
                                        this,
                                        function (t) {
                                            return void 0 === t
                                                ? D.text(this)
                                                : this.empty().each(function () {
                                                      (1 !== this.nodeType &&
                                                          11 !== this.nodeType &&
                                                          9 !== this.nodeType) ||
                                                          (this.textContent = t);
                                                  });
                                        },
                                        null,
                                        t,
                                        arguments.length
                                    );
                                },
                                append: function () {
                                    return jt(this, arguments, function (t) {
                                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                                            It(this, t).appendChild(t);
                                    });
                                },
                                prepend: function () {
                                    return jt(this, arguments, function (t) {
                                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                            var e = It(this, t);
                                            e.insertBefore(t, e.firstChild);
                                        }
                                    });
                                },
                                before: function () {
                                    return jt(this, arguments, function (t) {
                                        this.parentNode && this.parentNode.insertBefore(t, this);
                                    });
                                },
                                after: function () {
                                    return jt(this, arguments, function (t) {
                                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                                    });
                                },
                                empty: function () {
                                    for (var t, e = 0; null != (t = this[e]); e++)
                                        1 === t.nodeType && (D.cleanData(_t(t, !1)), (t.textContent = ""));
                                    return this;
                                },
                                clone: function (t, e) {
                                    return (
                                        (t = null != t && t),
                                        (e = null == e ? t : e),
                                        this.map(function () {
                                            return D.clone(this, t, e);
                                        })
                                    );
                                },
                                html: function (t) {
                                    return U(
                                        this,
                                        function (t) {
                                            var e = this[0] || {},
                                                i = 0,
                                                n = this.length;
                                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                            if (
                                                "string" == typeof t &&
                                                !Nt.test(t) &&
                                                !bt[(vt.exec(t) || ["", ""])[1].toLowerCase()]
                                            ) {
                                                t = D.htmlPrefilter(t);
                                                try {
                                                    for (; i < n; i++)
                                                        1 === (e = this[i] || {}).nodeType &&
                                                            (D.cleanData(_t(e, !1)), (e.innerHTML = t));
                                                    e = 0;
                                                } catch (t) {}
                                            }
                                            e && this.empty().append(t);
                                        },
                                        null,
                                        t,
                                        arguments.length
                                    );
                                },
                                replaceWith: function () {
                                    var t = [];
                                    return jt(
                                        this,
                                        arguments,
                                        function (e) {
                                            var i = this.parentNode;
                                            D.inArray(this, t) < 0 &&
                                                (D.cleanData(_t(this)), i && i.replaceChild(e, this));
                                        },
                                        t
                                    );
                                },
                            }),
                            D.each(
                                {
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith",
                                },
                                function (t, e) {
                                    D.fn[t] = function (t) {
                                        for (var i, n = [], o = D(t), s = o.length - 1, r = 0; r <= s; r++)
                                            (i = r === s ? this : this.clone(!0)), D(o[r])[e](i), c.apply(n, i.get());
                                        return this.pushStack(n);
                                    };
                                }
                            );
                        var Wt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
                            Ft = function (t) {
                                var e = t.ownerDocument.defaultView;
                                return (e && e.opener) || (e = n), e.getComputedStyle(t);
                            },
                            qt = function (t, e, i) {
                                var n,
                                    o,
                                    s = {};
                                for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
                                for (o in ((n = i.call(t)), e)) t.style[o] = s[o];
                                return n;
                            },
                            Yt = new RegExp(st.join("|"), "i");
                        function Bt(t, e, i) {
                            var n,
                                o,
                                s,
                                r,
                                a = t.style;
                            return (
                                (i = i || Ft(t)) &&
                                    ("" !== (r = i.getPropertyValue(e) || i[e]) || at(t) || (r = D.style(t, e)),
                                    !m.pixelBoxStyles() &&
                                        Wt.test(r) &&
                                        Yt.test(e) &&
                                        ((n = a.width),
                                        (o = a.minWidth),
                                        (s = a.maxWidth),
                                        (a.minWidth = a.maxWidth = a.width = r),
                                        (r = i.width),
                                        (a.width = n),
                                        (a.minWidth = o),
                                        (a.maxWidth = s))),
                                void 0 !== r ? r + "" : r
                            );
                        }
                        function Ut(t, e) {
                            return {
                                get: function () {
                                    if (!t()) return (this.get = e).apply(this, arguments);
                                    delete this.get;
                                },
                            };
                        }
                        !(function () {
                            function t() {
                                if (u) {
                                    (c.style.cssText =
                                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                        (u.style.cssText =
                                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                        rt.appendChild(c).appendChild(u);
                                    var t = n.getComputedStyle(u);
                                    (i = "1%" !== t.top),
                                        (l = 12 === e(t.marginLeft)),
                                        (u.style.right = "60%"),
                                        (r = 36 === e(t.right)),
                                        (o = 36 === e(t.width)),
                                        (u.style.position = "absolute"),
                                        (s = 12 === e(u.offsetWidth / 3)),
                                        rt.removeChild(c),
                                        (u = null);
                                }
                            }
                            function e(t) {
                                return Math.round(parseFloat(t));
                            }
                            var i,
                                o,
                                s,
                                r,
                                a,
                                l,
                                c = b.createElement("div"),
                                u = b.createElement("div");
                            u.style &&
                                ((u.style.backgroundClip = "content-box"),
                                (u.cloneNode(!0).style.backgroundClip = ""),
                                (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
                                D.extend(m, {
                                    boxSizingReliable: function () {
                                        return t(), o;
                                    },
                                    pixelBoxStyles: function () {
                                        return t(), r;
                                    },
                                    pixelPosition: function () {
                                        return t(), i;
                                    },
                                    reliableMarginLeft: function () {
                                        return t(), l;
                                    },
                                    scrollboxSize: function () {
                                        return t(), s;
                                    },
                                    reliableTrDimensions: function () {
                                        var t, e, i, o;
                                        return (
                                            null == a &&
                                                ((t = b.createElement("table")),
                                                (e = b.createElement("tr")),
                                                (i = b.createElement("div")),
                                                (t.style.cssText =
                                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                                (e.style.cssText = "border:1px solid"),
                                                (e.style.height = "1px"),
                                                (i.style.height = "9px"),
                                                (i.style.display = "block"),
                                                rt.appendChild(t).appendChild(e).appendChild(i),
                                                (o = n.getComputedStyle(e)),
                                                (a =
                                                    parseInt(o.height, 10) +
                                                        parseInt(o.borderTopWidth, 10) +
                                                        parseInt(o.borderBottomWidth, 10) ===
                                                    e.offsetHeight),
                                                rt.removeChild(t)),
                                            a
                                        );
                                    },
                                }));
                        })();
                        var $t = ["Webkit", "Moz", "ms"],
                            Kt = b.createElement("div").style,
                            Xt = {};
                        function Vt(t) {
                            var e = D.cssProps[t] || Xt[t];
                            return (
                                e ||
                                (t in Kt
                                    ? t
                                    : (Xt[t] =
                                          (function (t) {
                                              for (var e = t[0].toUpperCase() + t.slice(1), i = $t.length; i--; )
                                                  if ((t = $t[i] + e) in Kt) return t;
                                          })(t) || t))
                            );
                        }
                        var Gt = /^(none|table(?!-c[ea]).+)/,
                            Jt = /^--/,
                            Qt = { position: "absolute", visibility: "hidden", display: "block" },
                            Zt = { letterSpacing: "0", fontWeight: "400" };
                        function te(t, e, i) {
                            var n = ot.exec(e);
                            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
                        }
                        function ee(t, e, i, n, o, s) {
                            var r = "width" === e ? 1 : 0,
                                a = 0,
                                l = 0;
                            if (i === (n ? "border" : "content")) return 0;
                            for (; r < 4; r += 2)
                                "margin" === i && (l += D.css(t, i + st[r], !0, o)),
                                    n
                                        ? ("content" === i && (l -= D.css(t, "padding" + st[r], !0, o)),
                                          "margin" !== i && (l -= D.css(t, "border" + st[r] + "Width", !0, o)))
                                        : ((l += D.css(t, "padding" + st[r], !0, o)),
                                          "padding" !== i
                                              ? (l += D.css(t, "border" + st[r] + "Width", !0, o))
                                              : (a += D.css(t, "border" + st[r] + "Width", !0, o)));
                            return (
                                !n &&
                                    s >= 0 &&
                                    (l +=
                                        Math.max(
                                            0,
                                            Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5)
                                        ) || 0),
                                l
                            );
                        }
                        function ie(t, e, i) {
                            var n = Ft(t),
                                o = (!m.boxSizingReliable() || i) && "border-box" === D.css(t, "boxSizing", !1, n),
                                s = o,
                                r = Bt(t, e, n),
                                a = "offset" + e[0].toUpperCase() + e.slice(1);
                            if (Wt.test(r)) {
                                if (!i) return r;
                                r = "auto";
                            }
                            return (
                                ((!m.boxSizingReliable() && o) ||
                                    (!m.reliableTrDimensions() && N(t, "tr")) ||
                                    "auto" === r ||
                                    (!parseFloat(r) && "inline" === D.css(t, "display", !1, n))) &&
                                    t.getClientRects().length &&
                                    ((o = "border-box" === D.css(t, "boxSizing", !1, n)), (s = a in t) && (r = t[a])),
                                (r = parseFloat(r) || 0) + ee(t, e, i || (o ? "border" : "content"), s, n, r) + "px"
                            );
                        }
                        function ne(t, e, i, n, o) {
                            return new ne.prototype.init(t, e, i, n, o);
                        }
                        D.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (t, e) {
                                        if (e) {
                                            var i = Bt(t, "opacity");
                                            return "" === i ? "1" : i;
                                        }
                                    },
                                },
                            },
                            cssNumber: {
                                animationIterationCount: !0,
                                columnCount: !0,
                                fillOpacity: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                gridArea: !0,
                                gridColumn: !0,
                                gridColumnEnd: !0,
                                gridColumnStart: !0,
                                gridRow: !0,
                                gridRowEnd: !0,
                                gridRowStart: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0,
                            },
                            cssProps: {},
                            style: function (t, e, i, n) {
                                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                    var o,
                                        s,
                                        r,
                                        a = V(e),
                                        l = Jt.test(e),
                                        c = t.style;
                                    if ((l || (e = Vt(a)), (r = D.cssHooks[e] || D.cssHooks[a]), void 0 === i))
                                        return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : c[e];
                                    "string" === (s = typeof i) &&
                                        (o = ot.exec(i)) &&
                                        o[1] &&
                                        ((i = ut(t, e, o)), (s = "number")),
                                        null != i &&
                                            i == i &&
                                            ("number" !== s || l || (i += (o && o[3]) || (D.cssNumber[a] ? "" : "px")),
                                            m.clearCloneStyle ||
                                                "" !== i ||
                                                0 !== e.indexOf("background") ||
                                                (c[e] = "inherit"),
                                            (r && "set" in r && void 0 === (i = r.set(t, i, n))) ||
                                                (l ? c.setProperty(e, i) : (c[e] = i)));
                                }
                            },
                            css: function (t, e, i, n) {
                                var o,
                                    s,
                                    r,
                                    a = V(e);
                                return (
                                    Jt.test(e) || (e = Vt(a)),
                                    (r = D.cssHooks[e] || D.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)),
                                    void 0 === o && (o = Bt(t, e, n)),
                                    "normal" === o && e in Zt && (o = Zt[e]),
                                    "" === i || i ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o) : o
                                );
                            },
                        }),
                            D.each(["height", "width"], function (t, e) {
                                D.cssHooks[e] = {
                                    get: function (t, i, n) {
                                        if (i)
                                            return !Gt.test(D.css(t, "display")) ||
                                                (t.getClientRects().length && t.getBoundingClientRect().width)
                                                ? ie(t, e, n)
                                                : qt(t, Qt, function () {
                                                      return ie(t, e, n);
                                                  });
                                    },
                                    set: function (t, i, n) {
                                        var o,
                                            s = Ft(t),
                                            r = !m.scrollboxSize() && "absolute" === s.position,
                                            a = (r || n) && "border-box" === D.css(t, "boxSizing", !1, s),
                                            l = n ? ee(t, e, n, a, s) : 0;
                                        return (
                                            a &&
                                                r &&
                                                (l -= Math.ceil(
                                                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                                                        parseFloat(s[e]) -
                                                        ee(t, e, "border", !1, s) -
                                                        0.5
                                                )),
                                            l &&
                                                (o = ot.exec(i)) &&
                                                "px" !== (o[3] || "px") &&
                                                ((t.style[e] = i), (i = D.css(t, e))),
                                            te(0, i, l)
                                        );
                                    },
                                };
                            }),
                            (D.cssHooks.marginLeft = Ut(m.reliableMarginLeft, function (t, e) {
                                if (e)
                                    return (
                                        (parseFloat(Bt(t, "marginLeft")) ||
                                            t.getBoundingClientRect().left -
                                                qt(t, { marginLeft: 0 }, function () {
                                                    return t.getBoundingClientRect().left;
                                                })) + "px"
                                    );
                            })),
                            D.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                                (D.cssHooks[t + e] = {
                                    expand: function (i) {
                                        for (
                                            var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i];
                                            n < 4;
                                            n++
                                        )
                                            o[t + st[n] + e] = s[n] || s[n - 2] || s[0];
                                        return o;
                                    },
                                }),
                                    "margin" !== t && (D.cssHooks[t + e].set = te);
                            }),
                            D.fn.extend({
                                css: function (t, e) {
                                    return U(
                                        this,
                                        function (t, e, i) {
                                            var n,
                                                o,
                                                s = {},
                                                r = 0;
                                            if (Array.isArray(e)) {
                                                for (n = Ft(t), o = e.length; r < o; r++)
                                                    s[e[r]] = D.css(t, e[r], !1, n);
                                                return s;
                                            }
                                            return void 0 !== i ? D.style(t, e, i) : D.css(t, e);
                                        },
                                        t,
                                        e,
                                        arguments.length > 1
                                    );
                                },
                            }),
                            (D.Tween = ne),
                            (ne.prototype = {
                                constructor: ne,
                                init: function (t, e, i, n, o, s) {
                                    (this.elem = t),
                                        (this.prop = i),
                                        (this.easing = o || D.easing._default),
                                        (this.options = e),
                                        (this.start = this.now = this.cur()),
                                        (this.end = n),
                                        (this.unit = s || (D.cssNumber[i] ? "" : "px"));
                                },
                                cur: function () {
                                    var t = ne.propHooks[this.prop];
                                    return t && t.get ? t.get(this) : ne.propHooks._default.get(this);
                                },
                                run: function (t) {
                                    var e,
                                        i = ne.propHooks[this.prop];
                                    return (
                                        this.options.duration
                                            ? (this.pos = e =
                                                  D.easing[this.easing](
                                                      t,
                                                      this.options.duration * t,
                                                      0,
                                                      1,
                                                      this.options.duration
                                                  ))
                                            : (this.pos = e = t),
                                        (this.now = (this.end - this.start) * e + this.start),
                                        this.options.step && this.options.step.call(this.elem, this.now, this),
                                        i && i.set ? i.set(this) : ne.propHooks._default.set(this),
                                        this
                                    );
                                },
                            }),
                            (ne.prototype.init.prototype = ne.prototype),
                            (ne.propHooks = {
                                _default: {
                                    get: function (t) {
                                        var e;
                                        return 1 !== t.elem.nodeType ||
                                            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                                            ? t.elem[t.prop]
                                            : (e = D.css(t.elem, t.prop, "")) && "auto" !== e
                                              ? e
                                              : 0;
                                    },
                                    set: function (t) {
                                        D.fx.step[t.prop]
                                            ? D.fx.step[t.prop](t)
                                            : 1 !== t.elem.nodeType ||
                                                (!D.cssHooks[t.prop] && null == t.elem.style[Vt(t.prop)])
                                              ? (t.elem[t.prop] = t.now)
                                              : D.style(t.elem, t.prop, t.now + t.unit);
                                    },
                                },
                            }),
                            (ne.propHooks.scrollTop = ne.propHooks.scrollLeft =
                                {
                                    set: function (t) {
                                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                                    },
                                }),
                            (D.easing = {
                                linear: function (t) {
                                    return t;
                                },
                                swing: function (t) {
                                    return 0.5 - Math.cos(t * Math.PI) / 2;
                                },
                                _default: "swing",
                            }),
                            (D.fx = ne.prototype.init),
                            (D.fx.step = {});
                        var oe,
                            se,
                            re = /^(?:toggle|show|hide)$/,
                            ae = /queueHooks$/;
                        function le() {
                            se &&
                                (!1 === b.hidden && n.requestAnimationFrame
                                    ? n.requestAnimationFrame(le)
                                    : n.setTimeout(le, D.fx.interval),
                                D.fx.tick());
                        }
                        function ce() {
                            return (
                                n.setTimeout(function () {
                                    oe = void 0;
                                }),
                                (oe = Date.now())
                            );
                        }
                        function ue(t, e) {
                            var i,
                                n = 0,
                                o = { height: t };
                            for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = st[n])] = o["padding" + i] = t;
                            return e && (o.opacity = o.width = t), o;
                        }
                        function he(t, e, i) {
                            for (
                                var n, o = (de.tweeners[e] || []).concat(de.tweeners["*"]), s = 0, r = o.length;
                                s < r;
                                s++
                            )
                                if ((n = o[s].call(i, e, t))) return n;
                        }
                        function de(t, e, i) {
                            var n,
                                o,
                                s = 0,
                                r = de.prefilters.length,
                                a = D.Deferred().always(function () {
                                    delete l.elem;
                                }),
                                l = function () {
                                    if (o) return !1;
                                    for (
                                        var e = oe || ce(),
                                            i = Math.max(0, c.startTime + c.duration - e),
                                            n = 1 - (i / c.duration || 0),
                                            s = 0,
                                            r = c.tweens.length;
                                        s < r;
                                        s++
                                    )
                                        c.tweens[s].run(n);
                                    return (
                                        a.notifyWith(t, [c, n, i]),
                                        n < 1 && r ? i : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                                    );
                                },
                                c = a.promise({
                                    elem: t,
                                    props: D.extend({}, e),
                                    opts: D.extend(!0, { specialEasing: {}, easing: D.easing._default }, i),
                                    originalProperties: e,
                                    originalOptions: i,
                                    startTime: oe || ce(),
                                    duration: i.duration,
                                    tweens: [],
                                    createTween: function (e, i) {
                                        var n = D.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                                        return c.tweens.push(n), n;
                                    },
                                    stop: function (e) {
                                        var i = 0,
                                            n = e ? c.tweens.length : 0;
                                        if (o) return this;
                                        for (o = !0; i < n; i++) c.tweens[i].run(1);
                                        return (
                                            e
                                                ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                                                : a.rejectWith(t, [c, e]),
                                            this
                                        );
                                    },
                                }),
                                u = c.props;
                            for (
                                !(function (t, e) {
                                    var i, n, o, s, r;
                                    for (i in t)
                                        if (
                                            ((o = e[(n = V(i))]),
                                            (s = t[i]),
                                            Array.isArray(s) && ((o = s[1]), (s = t[i] = s[0])),
                                            i !== n && ((t[n] = s), delete t[i]),
                                            (r = D.cssHooks[n]) && ("expand" in r))
                                        )
                                            for (i in ((s = r.expand(s)), delete t[n], s))
                                                (i in t) || ((t[i] = s[i]), (e[i] = o));
                                        else e[n] = o;
                                })(u, c.opts.specialEasing);
                                s < r;
                                s++
                            )
                                if ((n = de.prefilters[s].call(c, t, u, c.opts)))
                                    return v(n.stop) && (D._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                            return (
                                D.map(u, he, c),
                                v(c.opts.start) && c.opts.start.call(t, c),
                                c
                                    .progress(c.opts.progress)
                                    .done(c.opts.done, c.opts.complete)
                                    .fail(c.opts.fail)
                                    .always(c.opts.always),
                                D.fx.timer(D.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
                                c
                            );
                        }
                        (D.Animation = D.extend(de, {
                            tweeners: {
                                "*": [
                                    function (t, e) {
                                        var i = this.createTween(t, e);
                                        return ut(i.elem, t, ot.exec(e), i), i;
                                    },
                                ],
                            },
                            tweener: function (t, e) {
                                v(t) ? ((e = t), (t = ["*"])) : (t = t.match(j));
                                for (var i, n = 0, o = t.length; n < o; n++)
                                    (i = t[n]), (de.tweeners[i] = de.tweeners[i] || []), de.tweeners[i].unshift(e);
                            },
                            prefilters: [
                                function (t, e, i) {
                                    var n,
                                        o,
                                        s,
                                        r,
                                        a,
                                        l,
                                        c,
                                        u,
                                        h = "width" in e || "height" in e,
                                        d = this,
                                        p = {},
                                        f = t.style,
                                        g = t.nodeType && ct(t),
                                        m = Q.get(t, "fxshow");
                                    for (n in (i.queue ||
                                        (null == (r = D._queueHooks(t, "fx")).unqueued &&
                                            ((r.unqueued = 0),
                                            (a = r.empty.fire),
                                            (r.empty.fire = function () {
                                                r.unqueued || a();
                                            })),
                                        r.unqueued++,
                                        d.always(function () {
                                            d.always(function () {
                                                r.unqueued--, D.queue(t, "fx").length || r.empty.fire();
                                            });
                                        })),
                                    e))
                                        if (((o = e[n]), re.test(o))) {
                                            if ((delete e[n], (s = s || "toggle" === o), o === (g ? "hide" : "show"))) {
                                                if ("show" !== o || !m || void 0 === m[n]) continue;
                                                g = !0;
                                            }
                                            p[n] = (m && m[n]) || D.style(t, n);
                                        }
                                    if ((l = !D.isEmptyObject(e)) || !D.isEmptyObject(p))
                                        for (n in (h &&
                                            1 === t.nodeType &&
                                            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                            null == (c = m && m.display) && (c = Q.get(t, "display")),
                                            "none" === (u = D.css(t, "display")) &&
                                                (c
                                                    ? (u = c)
                                                    : (pt([t], !0),
                                                      (c = t.style.display || c),
                                                      (u = D.css(t, "display")),
                                                      pt([t]))),
                                            ("inline" === u || ("inline-block" === u && null != c)) &&
                                                "none" === D.css(t, "float") &&
                                                (l ||
                                                    (d.done(function () {
                                                        f.display = c;
                                                    }),
                                                    null == c && ((u = f.display), (c = "none" === u ? "" : u))),
                                                (f.display = "inline-block"))),
                                        i.overflow &&
                                            ((f.overflow = "hidden"),
                                            d.always(function () {
                                                (f.overflow = i.overflow[0]),
                                                    (f.overflowX = i.overflow[1]),
                                                    (f.overflowY = i.overflow[2]);
                                            })),
                                        (l = !1),
                                        p))
                                            l ||
                                                (m
                                                    ? "hidden" in m && (g = m.hidden)
                                                    : (m = Q.access(t, "fxshow", { display: c })),
                                                s && (m.hidden = !g),
                                                g && pt([t], !0),
                                                d.done(function () {
                                                    for (n in (g || pt([t]), Q.remove(t, "fxshow"), p))
                                                        D.style(t, n, p[n]);
                                                })),
                                                (l = he(g ? m[n] : 0, n, d)),
                                                n in m || ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
                                },
                            ],
                            prefilter: function (t, e) {
                                e ? de.prefilters.unshift(t) : de.prefilters.push(t);
                            },
                        })),
                            (D.speed = function (t, e, i) {
                                var n =
                                    t && "object" == typeof t
                                        ? D.extend({}, t)
                                        : {
                                              complete: i || (!i && e) || (v(t) && t),
                                              duration: t,
                                              easing: (i && e) || (e && !v(e) && e),
                                          };
                                return (
                                    D.fx.off
                                        ? (n.duration = 0)
                                        : "number" != typeof n.duration &&
                                          (n.duration in D.fx.speeds
                                              ? (n.duration = D.fx.speeds[n.duration])
                                              : (n.duration = D.fx.speeds._default)),
                                    (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                                    (n.old = n.complete),
                                    (n.complete = function () {
                                        v(n.old) && n.old.call(this), n.queue && D.dequeue(this, n.queue);
                                    }),
                                    n
                                );
                            }),
                            D.fn.extend({
                                fadeTo: function (t, e, i, n) {
                                    return this.filter(ct)
                                        .css("opacity", 0)
                                        .show()
                                        .end()
                                        .animate({ opacity: e }, t, i, n);
                                },
                                animate: function (t, e, i, n) {
                                    var o = D.isEmptyObject(t),
                                        s = D.speed(e, i, n),
                                        r = function () {
                                            var e = de(this, D.extend({}, t), s);
                                            (o || Q.get(this, "finish")) && e.stop(!0);
                                        };
                                    return (r.finish = r), o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
                                },
                                stop: function (t, e, i) {
                                    var n = function (t) {
                                        var e = t.stop;
                                        delete t.stop, e(i);
                                    };
                                    return (
                                        "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                                        e && this.queue(t || "fx", []),
                                        this.each(function () {
                                            var e = !0,
                                                o = null != t && t + "queueHooks",
                                                s = D.timers,
                                                r = Q.get(this);
                                            if (o) r[o] && r[o].stop && n(r[o]);
                                            else for (o in r) r[o] && r[o].stop && ae.test(o) && n(r[o]);
                                            for (o = s.length; o--; )
                                                s[o].elem !== this ||
                                                    (null != t && s[o].queue !== t) ||
                                                    (s[o].anim.stop(i), (e = !1), s.splice(o, 1));
                                            (!e && i) || D.dequeue(this, t);
                                        })
                                    );
                                },
                                finish: function (t) {
                                    return (
                                        !1 !== t && (t = t || "fx"),
                                        this.each(function () {
                                            var e,
                                                i = Q.get(this),
                                                n = i[t + "queue"],
                                                o = i[t + "queueHooks"],
                                                s = D.timers,
                                                r = n ? n.length : 0;
                                            for (
                                                i.finish = !0,
                                                    D.queue(this, t, []),
                                                    o && o.stop && o.stop.call(this, !0),
                                                    e = s.length;
                                                e--;

                                            )
                                                s[e].elem === this &&
                                                    s[e].queue === t &&
                                                    (s[e].anim.stop(!0), s.splice(e, 1));
                                            for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                            delete i.finish;
                                        })
                                    );
                                },
                            }),
                            D.each(["toggle", "show", "hide"], function (t, e) {
                                var i = D.fn[e];
                                D.fn[e] = function (t, n, o) {
                                    return null == t || "boolean" == typeof t
                                        ? i.apply(this, arguments)
                                        : this.animate(ue(e, !0), t, n, o);
                                };
                            }),
                            D.each(
                                {
                                    slideDown: ue("show"),
                                    slideUp: ue("hide"),
                                    slideToggle: ue("toggle"),
                                    fadeIn: { opacity: "show" },
                                    fadeOut: { opacity: "hide" },
                                    fadeToggle: { opacity: "toggle" },
                                },
                                function (t, e) {
                                    D.fn[t] = function (t, i, n) {
                                        return this.animate(e, t, i, n);
                                    };
                                }
                            ),
                            (D.timers = []),
                            (D.fx.tick = function () {
                                var t,
                                    e = 0,
                                    i = D.timers;
                                for (oe = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
                                i.length || D.fx.stop(), (oe = void 0);
                            }),
                            (D.fx.timer = function (t) {
                                D.timers.push(t), D.fx.start();
                            }),
                            (D.fx.interval = 13),
                            (D.fx.start = function () {
                                se || ((se = !0), le());
                            }),
                            (D.fx.stop = function () {
                                se = null;
                            }),
                            (D.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                            (D.fn.delay = function (t, e) {
                                return (
                                    (t = (D.fx && D.fx.speeds[t]) || t),
                                    (e = e || "fx"),
                                    this.queue(e, function (e, i) {
                                        var o = n.setTimeout(e, t);
                                        i.stop = function () {
                                            n.clearTimeout(o);
                                        };
                                    })
                                );
                            }),
                            (function () {
                                var t = b.createElement("input"),
                                    e = b.createElement("select").appendChild(b.createElement("option"));
                                (t.type = "checkbox"),
                                    (m.checkOn = "" !== t.value),
                                    (m.optSelected = e.selected),
                                    ((t = b.createElement("input")).value = "t"),
                                    (t.type = "radio"),
                                    (m.radioValue = "t" === t.value);
                            })();
                        var pe,
                            fe = D.expr.attrHandle;
                        D.fn.extend({
                            attr: function (t, e) {
                                return U(this, D.attr, t, e, arguments.length > 1);
                            },
                            removeAttr: function (t) {
                                return this.each(function () {
                                    D.removeAttr(this, t);
                                });
                            },
                        }),
                            D.extend({
                                attr: function (t, e, i) {
                                    var n,
                                        o,
                                        s = t.nodeType;
                                    if (3 !== s && 8 !== s && 2 !== s)
                                        return void 0 === t.getAttribute
                                            ? D.prop(t, e, i)
                                            : ((1 === s && D.isXMLDoc(t)) ||
                                                  (o =
                                                      D.attrHooks[e.toLowerCase()] ||
                                                      (D.expr.match.bool.test(e) ? pe : void 0)),
                                              void 0 !== i
                                                  ? null === i
                                                      ? void D.removeAttr(t, e)
                                                      : o && "set" in o && void 0 !== (n = o.set(t, i, e))
                                                        ? n
                                                        : (t.setAttribute(e, i + ""), i)
                                                  : o && "get" in o && null !== (n = o.get(t, e))
                                                    ? n
                                                    : null == (n = D.find.attr(t, e))
                                                      ? void 0
                                                      : n);
                                },
                                attrHooks: {
                                    type: {
                                        set: function (t, e) {
                                            if (!m.radioValue && "radio" === e && N(t, "input")) {
                                                var i = t.value;
                                                return t.setAttribute("type", e), i && (t.value = i), e;
                                            }
                                        },
                                    },
                                },
                                removeAttr: function (t, e) {
                                    var i,
                                        n = 0,
                                        o = e && e.match(j);
                                    if (o && 1 === t.nodeType) for (; (i = o[n++]); ) t.removeAttribute(i);
                                },
                            }),
                            (pe = {
                                set: function (t, e, i) {
                                    return !1 === e ? D.removeAttr(t, i) : t.setAttribute(i, i), i;
                                },
                            }),
                            D.each(D.expr.match.bool.source.match(/\w+/g), function (t, e) {
                                var i = fe[e] || D.find.attr;
                                fe[e] = function (t, e, n) {
                                    var o,
                                        s,
                                        r = e.toLowerCase();
                                    return (
                                        n ||
                                            ((s = fe[r]),
                                            (fe[r] = o),
                                            (o = null != i(t, e, n) ? r : null),
                                            (fe[r] = s)),
                                        o
                                    );
                                };
                            });
                        var ge = /^(?:input|select|textarea|button)$/i,
                            me = /^(?:a|area)$/i;
                        function ve(t) {
                            return (t.match(j) || []).join(" ");
                        }
                        function ye(t) {
                            return (t.getAttribute && t.getAttribute("class")) || "";
                        }
                        function be(t) {
                            return Array.isArray(t) ? t : ("string" == typeof t && t.match(j)) || [];
                        }
                        D.fn.extend({
                            prop: function (t, e) {
                                return U(this, D.prop, t, e, arguments.length > 1);
                            },
                            removeProp: function (t) {
                                return this.each(function () {
                                    delete this[D.propFix[t] || t];
                                });
                            },
                        }),
                            D.extend({
                                prop: function (t, e, i) {
                                    var n,
                                        o,
                                        s = t.nodeType;
                                    if (3 !== s && 8 !== s && 2 !== s)
                                        return (
                                            (1 === s && D.isXMLDoc(t)) ||
                                                ((e = D.propFix[e] || e), (o = D.propHooks[e])),
                                            void 0 !== i
                                                ? o && "set" in o && void 0 !== (n = o.set(t, i, e))
                                                    ? n
                                                    : (t[e] = i)
                                                : o && "get" in o && null !== (n = o.get(t, e))
                                                  ? n
                                                  : t[e]
                                        );
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function (t) {
                                            var e = D.find.attr(t, "tabindex");
                                            return e
                                                ? parseInt(e, 10)
                                                : ge.test(t.nodeName) || (me.test(t.nodeName) && t.href)
                                                  ? 0
                                                  : -1;
                                        },
                                    },
                                },
                                propFix: { for: "htmlFor", class: "className" },
                            }),
                            m.optSelected ||
                                (D.propHooks.selected = {
                                    get: function (t) {
                                        var e = t.parentNode;
                                        return e && e.parentNode && e.parentNode.selectedIndex, null;
                                    },
                                    set: function (t) {
                                        var e = t.parentNode;
                                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                                    },
                                }),
                            D.each(
                                [
                                    "tabIndex",
                                    "readOnly",
                                    "maxLength",
                                    "cellSpacing",
                                    "cellPadding",
                                    "rowSpan",
                                    "colSpan",
                                    "useMap",
                                    "frameBorder",
                                    "contentEditable",
                                ],
                                function () {
                                    D.propFix[this.toLowerCase()] = this;
                                }
                            ),
                            D.fn.extend({
                                addClass: function (t) {
                                    var e,
                                        i,
                                        n,
                                        o,
                                        s,
                                        r,
                                        a,
                                        l = 0;
                                    if (v(t))
                                        return this.each(function (e) {
                                            D(this).addClass(t.call(this, e, ye(this)));
                                        });
                                    if ((e = be(t)).length)
                                        for (; (i = this[l++]); )
                                            if (((o = ye(i)), (n = 1 === i.nodeType && " " + ve(o) + " "))) {
                                                for (r = 0; (s = e[r++]); )
                                                    n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                                o !== (a = ve(n)) && i.setAttribute("class", a);
                                            }
                                    return this;
                                },
                                removeClass: function (t) {
                                    var e,
                                        i,
                                        n,
                                        o,
                                        s,
                                        r,
                                        a,
                                        l = 0;
                                    if (v(t))
                                        return this.each(function (e) {
                                            D(this).removeClass(t.call(this, e, ye(this)));
                                        });
                                    if (!arguments.length) return this.attr("class", "");
                                    if ((e = be(t)).length)
                                        for (; (i = this[l++]); )
                                            if (((o = ye(i)), (n = 1 === i.nodeType && " " + ve(o) + " "))) {
                                                for (r = 0; (s = e[r++]); )
                                                    for (; n.indexOf(" " + s + " ") > -1; )
                                                        n = n.replace(" " + s + " ", " ");
                                                o !== (a = ve(n)) && i.setAttribute("class", a);
                                            }
                                    return this;
                                },
                                toggleClass: function (t, e) {
                                    var i = typeof t,
                                        n = "string" === i || Array.isArray(t);
                                    return "boolean" == typeof e && n
                                        ? e
                                            ? this.addClass(t)
                                            : this.removeClass(t)
                                        : v(t)
                                          ? this.each(function (i) {
                                                D(this).toggleClass(t.call(this, i, ye(this), e), e);
                                            })
                                          : this.each(function () {
                                                var e, o, s, r;
                                                if (n)
                                                    for (o = 0, s = D(this), r = be(t); (e = r[o++]); )
                                                        s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                                                else
                                                    (void 0 !== t && "boolean" !== i) ||
                                                        ((e = ye(this)) && Q.set(this, "__className__", e),
                                                        this.setAttribute &&
                                                            this.setAttribute(
                                                                "class",
                                                                e || !1 === t ? "" : Q.get(this, "__className__") || ""
                                                            ));
                                            });
                                },
                                hasClass: function (t) {
                                    var e,
                                        i,
                                        n = 0;
                                    for (e = " " + t + " "; (i = this[n++]); )
                                        if (1 === i.nodeType && (" " + ve(ye(i)) + " ").indexOf(e) > -1) return !0;
                                    return !1;
                                },
                            });
                        var _e = /\r/g;
                        D.fn.extend({
                            val: function (t) {
                                var e,
                                    i,
                                    n,
                                    o = this[0];
                                return arguments.length
                                    ? ((n = v(t)),
                                      this.each(function (i) {
                                          var o;
                                          1 === this.nodeType &&
                                              (null == (o = n ? t.call(this, i, D(this).val()) : t)
                                                  ? (o = "")
                                                  : "number" == typeof o
                                                    ? (o += "")
                                                    : Array.isArray(o) &&
                                                      (o = D.map(o, function (t) {
                                                          return null == t ? "" : t + "";
                                                      })),
                                              ((e = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) &&
                                                  "set" in e &&
                                                  void 0 !== e.set(this, o, "value")) ||
                                                  (this.value = o));
                                      }))
                                    : o
                                      ? (e = D.valHooks[o.type] || D.valHooks[o.nodeName.toLowerCase()]) &&
                                        "get" in e &&
                                        void 0 !== (i = e.get(o, "value"))
                                          ? i
                                          : "string" == typeof (i = o.value)
                                            ? i.replace(_e, "")
                                            : null == i
                                              ? ""
                                              : i
                                      : void 0;
                            },
                        }),
                            D.extend({
                                valHooks: {
                                    option: {
                                        get: function (t) {
                                            var e = D.find.attr(t, "value");
                                            return null != e ? e : ve(D.text(t));
                                        },
                                    },
                                    select: {
                                        get: function (t) {
                                            var e,
                                                i,
                                                n,
                                                o = t.options,
                                                s = t.selectedIndex,
                                                r = "select-one" === t.type,
                                                a = r ? null : [],
                                                l = r ? s + 1 : o.length;
                                            for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                                                if (
                                                    ((i = o[n]).selected || n === s) &&
                                                    !i.disabled &&
                                                    (!i.parentNode.disabled || !N(i.parentNode, "optgroup"))
                                                ) {
                                                    if (((e = D(i).val()), r)) return e;
                                                    a.push(e);
                                                }
                                            return a;
                                        },
                                        set: function (t, e) {
                                            for (var i, n, o = t.options, s = D.makeArray(e), r = o.length; r--; )
                                                ((n = o[r]).selected = D.inArray(D.valHooks.option.get(n), s) > -1) &&
                                                    (i = !0);
                                            return i || (t.selectedIndex = -1), s;
                                        },
                                    },
                                },
                            }),
                            D.each(["radio", "checkbox"], function () {
                                (D.valHooks[this] = {
                                    set: function (t, e) {
                                        if (Array.isArray(e)) return (t.checked = D.inArray(D(t).val(), e) > -1);
                                    },
                                }),
                                    m.checkOn ||
                                        (D.valHooks[this].get = function (t) {
                                            return null === t.getAttribute("value") ? "on" : t.value;
                                        });
                            }),
                            (m.focusin = "onfocusin" in n);
                        var we = /^(?:focusinfocus|focusoutblur)$/,
                            xe = function (t) {
                                t.stopPropagation();
                            };
                        D.extend(D.event, {
                            trigger: function (t, e, i, o) {
                                var s,
                                    r,
                                    a,
                                    l,
                                    c,
                                    u,
                                    h,
                                    d,
                                    f = [i || b],
                                    g = p.call(t, "type") ? t.type : t,
                                    m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                                if (
                                    ((r = d = a = i = i || b),
                                    3 !== i.nodeType &&
                                        8 !== i.nodeType &&
                                        !we.test(g + D.event.triggered) &&
                                        (g.indexOf(".") > -1 && ((m = g.split(".")), (g = m.shift()), m.sort()),
                                        (c = g.indexOf(":") < 0 && "on" + g),
                                        ((t = t[D.expando] ? t : new D.Event(g, "object" == typeof t && t)).isTrigger =
                                            o ? 2 : 3),
                                        (t.namespace = m.join(".")),
                                        (t.rnamespace = t.namespace
                                            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                                            : null),
                                        (t.result = void 0),
                                        t.target || (t.target = i),
                                        (e = null == e ? [t] : D.makeArray(e, [t])),
                                        (h = D.event.special[g] || {}),
                                        o || !h.trigger || !1 !== h.trigger.apply(i, e)))
                                ) {
                                    if (!o && !h.noBubble && !y(i)) {
                                        for (
                                            l = h.delegateType || g, we.test(l + g) || (r = r.parentNode);
                                            r;
                                            r = r.parentNode
                                        )
                                            f.push(r), (a = r);
                                        a === (i.ownerDocument || b) && f.push(a.defaultView || a.parentWindow || n);
                                    }
                                    for (s = 0; (r = f[s++]) && !t.isPropagationStopped(); )
                                        (d = r),
                                            (t.type = s > 1 ? l : h.bindType || g),
                                            (u =
                                                (Q.get(r, "events") || Object.create(null))[t.type] &&
                                                Q.get(r, "handle")) && u.apply(r, e),
                                            (u = c && r[c]) &&
                                                u.apply &&
                                                G(r) &&
                                                ((t.result = u.apply(r, e)), !1 === t.result && t.preventDefault());
                                    return (
                                        (t.type = g),
                                        o ||
                                            t.isDefaultPrevented() ||
                                            (h._default && !1 !== h._default.apply(f.pop(), e)) ||
                                            !G(i) ||
                                            (c &&
                                                v(i[g]) &&
                                                !y(i) &&
                                                ((a = i[c]) && (i[c] = null),
                                                (D.event.triggered = g),
                                                t.isPropagationStopped() && d.addEventListener(g, xe),
                                                i[g](),
                                                t.isPropagationStopped() && d.removeEventListener(g, xe),
                                                (D.event.triggered = void 0),
                                                a && (i[c] = a))),
                                        t.result
                                    );
                                }
                            },
                            simulate: function (t, e, i) {
                                var n = D.extend(new D.Event(), i, { type: t, isSimulated: !0 });
                                D.event.trigger(n, null, e);
                            },
                        }),
                            D.fn.extend({
                                trigger: function (t, e) {
                                    return this.each(function () {
                                        D.event.trigger(t, e, this);
                                    });
                                },
                                triggerHandler: function (t, e) {
                                    var i = this[0];
                                    if (i) return D.event.trigger(t, e, i, !0);
                                },
                            }),
                            m.focusin ||
                                D.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                                    var i = function (t) {
                                        D.event.simulate(e, t.target, D.event.fix(t));
                                    };
                                    D.event.special[e] = {
                                        setup: function () {
                                            var n = this.ownerDocument || this.document || this,
                                                o = Q.access(n, e);
                                            o || n.addEventListener(t, i, !0), Q.access(n, e, (o || 0) + 1);
                                        },
                                        teardown: function () {
                                            var n = this.ownerDocument || this.document || this,
                                                o = Q.access(n, e) - 1;
                                            o ? Q.access(n, e, o) : (n.removeEventListener(t, i, !0), Q.remove(n, e));
                                        },
                                    };
                                });
                        var ke = n.location,
                            De = { guid: Date.now() },
                            Ce = /\?/;
                        D.parseXML = function (t) {
                            var e, i;
                            if (!t || "string" != typeof t) return null;
                            try {
                                e = new n.DOMParser().parseFromString(t, "text/xml");
                            } catch (t) {}
                            return (
                                (i = e && e.getElementsByTagName("parsererror")[0]),
                                (e && !i) ||
                                    D.error(
                                        "Invalid XML: " +
                                            (i
                                                ? D.map(i.childNodes, function (t) {
                                                      return t.textContent;
                                                  }).join("\n")
                                                : t)
                                    ),
                                e
                            );
                        };
                        var Te = /\[\]$/,
                            Se = /\r?\n/g,
                            Ee = /^(?:submit|button|image|reset|file)$/i,
                            Ae = /^(?:input|select|textarea|keygen)/i;
                        function Ne(t, e, i, n) {
                            var o;
                            if (Array.isArray(e))
                                D.each(e, function (e, o) {
                                    i || Te.test(t)
                                        ? n(t, o)
                                        : Ne(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n);
                                });
                            else if (i || "object" !== x(e)) n(t, e);
                            else for (o in e) Ne(t + "[" + o + "]", e[o], i, n);
                        }
                        (D.param = function (t, e) {
                            var i,
                                n = [],
                                o = function (t, e) {
                                    var i = v(e) ? e() : e;
                                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
                                };
                            if (null == t) return "";
                            if (Array.isArray(t) || (t.jquery && !D.isPlainObject(t)))
                                D.each(t, function () {
                                    o(this.name, this.value);
                                });
                            else for (i in t) Ne(i, t[i], e, o);
                            return n.join("&");
                        }),
                            D.fn.extend({
                                serialize: function () {
                                    return D.param(this.serializeArray());
                                },
                                serializeArray: function () {
                                    return this.map(function () {
                                        var t = D.prop(this, "elements");
                                        return t ? D.makeArray(t) : this;
                                    })
                                        .filter(function () {
                                            var t = this.type;
                                            return (
                                                this.name &&
                                                !D(this).is(":disabled") &&
                                                Ae.test(this.nodeName) &&
                                                !Ee.test(t) &&
                                                (this.checked || !mt.test(t))
                                            );
                                        })
                                        .map(function (t, e) {
                                            var i = D(this).val();
                                            return null == i
                                                ? null
                                                : Array.isArray(i)
                                                  ? D.map(i, function (t) {
                                                        return { name: e.name, value: t.replace(Se, "\r\n") };
                                                    })
                                                  : { name: e.name, value: i.replace(Se, "\r\n") };
                                        })
                                        .get();
                                },
                            });
                        var Me = /%20/g,
                            Pe = /#.*$/,
                            Ie = /([?&])_=[^&]*/,
                            ze = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            He = /^(?:GET|HEAD)$/,
                            Oe = /^\/\//,
                            Le = {},
                            je = {},
                            Re = "*/".concat("*"),
                            We = b.createElement("a");
                        function Fe(t) {
                            return function (e, i) {
                                "string" != typeof e && ((i = e), (e = "*"));
                                var n,
                                    o = 0,
                                    s = e.toLowerCase().match(j) || [];
                                if (v(i))
                                    for (; (n = s[o++]); )
                                        "+" === n[0]
                                            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
                                            : (t[n] = t[n] || []).push(i);
                            };
                        }
                        function qe(t, e, i, n) {
                            var o = {},
                                s = t === je;
                            function r(a) {
                                var l;
                                return (
                                    (o[a] = !0),
                                    D.each(t[a] || [], function (t, a) {
                                        var c = a(e, i, n);
                                        return "string" != typeof c || s || o[c]
                                            ? s
                                                ? !(l = c)
                                                : void 0
                                            : (e.dataTypes.unshift(c), r(c), !1);
                                    }),
                                    l
                                );
                            }
                            return r(e.dataTypes[0]) || (!o["*"] && r("*"));
                        }
                        function Ye(t, e) {
                            var i,
                                n,
                                o = D.ajaxSettings.flatOptions || {};
                            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
                            return n && D.extend(!0, t, n), t;
                        }
                        (We.href = ke.href),
                            D.extend({
                                active: 0,
                                lastModified: {},
                                etag: {},
                                ajaxSettings: {
                                    url: ke.href,
                                    type: "GET",
                                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                        ke.protocol
                                    ),
                                    global: !0,
                                    processData: !0,
                                    async: !0,
                                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                    accepts: {
                                        "*": Re,
                                        text: "text/plain",
                                        html: "text/html",
                                        xml: "application/xml, text/xml",
                                        json: "application/json, text/javascript",
                                    },
                                    contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                    responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                    converters: {
                                        "* text": String,
                                        "text html": !0,
                                        "text json": JSON.parse,
                                        "text xml": D.parseXML,
                                    },
                                    flatOptions: { url: !0, context: !0 },
                                },
                                ajaxSetup: function (t, e) {
                                    return e ? Ye(Ye(t, D.ajaxSettings), e) : Ye(D.ajaxSettings, t);
                                },
                                ajaxPrefilter: Fe(Le),
                                ajaxTransport: Fe(je),
                                ajax: function (t, e) {
                                    "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                                    var i,
                                        o,
                                        s,
                                        r,
                                        a,
                                        l,
                                        c,
                                        u,
                                        h,
                                        d,
                                        p = D.ajaxSetup({}, e),
                                        f = p.context || p,
                                        g = p.context && (f.nodeType || f.jquery) ? D(f) : D.event,
                                        m = D.Deferred(),
                                        v = D.Callbacks("once memory"),
                                        y = p.statusCode || {},
                                        _ = {},
                                        w = {},
                                        x = "canceled",
                                        k = {
                                            readyState: 0,
                                            getResponseHeader: function (t) {
                                                var e;
                                                if (c) {
                                                    if (!r)
                                                        for (r = {}; (e = ze.exec(s)); )
                                                            r[e[1].toLowerCase() + " "] = (
                                                                r[e[1].toLowerCase() + " "] || []
                                                            ).concat(e[2]);
                                                    e = r[t.toLowerCase() + " "];
                                                }
                                                return null == e ? null : e.join(", ");
                                            },
                                            getAllResponseHeaders: function () {
                                                return c ? s : null;
                                            },
                                            setRequestHeader: function (t, e) {
                                                return (
                                                    null == c &&
                                                        ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                                                        (_[t] = e)),
                                                    this
                                                );
                                            },
                                            overrideMimeType: function (t) {
                                                return null == c && (p.mimeType = t), this;
                                            },
                                            statusCode: function (t) {
                                                var e;
                                                if (t)
                                                    if (c) k.always(t[k.status]);
                                                    else for (e in t) y[e] = [y[e], t[e]];
                                                return this;
                                            },
                                            abort: function (t) {
                                                var e = t || x;
                                                return i && i.abort(e), C(0, e), this;
                                            },
                                        };
                                    if (
                                        (m.promise(k),
                                        (p.url = ((t || p.url || ke.href) + "").replace(Oe, ke.protocol + "//")),
                                        (p.type = e.method || e.type || p.method || p.type),
                                        (p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""]),
                                        null == p.crossDomain)
                                    ) {
                                        l = b.createElement("a");
                                        try {
                                            (l.href = p.url),
                                                (l.href = l.href),
                                                (p.crossDomain =
                                                    We.protocol + "//" + We.host != l.protocol + "//" + l.host);
                                        } catch (t) {
                                            p.crossDomain = !0;
                                        }
                                    }
                                    if (
                                        (p.data &&
                                            p.processData &&
                                            "string" != typeof p.data &&
                                            (p.data = D.param(p.data, p.traditional)),
                                        qe(Le, p, e, k),
                                        c)
                                    )
                                        return k;
                                    for (h in ((u = D.event && p.global) &&
                                        0 == D.active++ &&
                                        D.event.trigger("ajaxStart"),
                                    (p.type = p.type.toUpperCase()),
                                    (p.hasContent = !He.test(p.type)),
                                    (o = p.url.replace(Pe, "")),
                                    p.hasContent
                                        ? p.data &&
                                          p.processData &&
                                          0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                                          (p.data = p.data.replace(Me, "+"))
                                        : ((d = p.url.slice(o.length)),
                                          p.data &&
                                              (p.processData || "string" == typeof p.data) &&
                                              ((o += (Ce.test(o) ? "&" : "?") + p.data), delete p.data),
                                          !1 === p.cache &&
                                              ((o = o.replace(Ie, "$1")),
                                              (d = (Ce.test(o) ? "&" : "?") + "_=" + De.guid++ + d)),
                                          (p.url = o + d)),
                                    p.ifModified &&
                                        (D.lastModified[o] &&
                                            k.setRequestHeader("If-Modified-Since", D.lastModified[o]),
                                        D.etag[o] && k.setRequestHeader("If-None-Match", D.etag[o])),
                                    ((p.data && p.hasContent && !1 !== p.contentType) || e.contentType) &&
                                        k.setRequestHeader("Content-Type", p.contentType),
                                    k.setRequestHeader(
                                        "Accept",
                                        p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                                            ? p.accepts[p.dataTypes[0]] +
                                                  ("*" !== p.dataTypes[0] ? ", " + Re + "; q=0.01" : "")
                                            : p.accepts["*"]
                                    ),
                                    p.headers))
                                        k.setRequestHeader(h, p.headers[h]);
                                    if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || c)) return k.abort();
                                    if (
                                        ((x = "abort"),
                                        v.add(p.complete),
                                        k.done(p.success),
                                        k.fail(p.error),
                                        (i = qe(je, p, e, k)))
                                    ) {
                                        if (((k.readyState = 1), u && g.trigger("ajaxSend", [k, p]), c)) return k;
                                        p.async &&
                                            p.timeout > 0 &&
                                            (a = n.setTimeout(function () {
                                                k.abort("timeout");
                                            }, p.timeout));
                                        try {
                                            (c = !1), i.send(_, C);
                                        } catch (t) {
                                            if (c) throw t;
                                            C(-1, t);
                                        }
                                    } else C(-1, "No Transport");
                                    function C(t, e, r, l) {
                                        var h,
                                            d,
                                            b,
                                            _,
                                            w,
                                            x = e;
                                        c ||
                                            ((c = !0),
                                            a && n.clearTimeout(a),
                                            (i = void 0),
                                            (s = l || ""),
                                            (k.readyState = t > 0 ? 4 : 0),
                                            (h = (t >= 200 && t < 300) || 304 === t),
                                            r &&
                                                (_ = (function (t, e, i) {
                                                    for (
                                                        var n, o, s, r, a = t.contents, l = t.dataTypes;
                                                        "*" === l[0];

                                                    )
                                                        l.shift(),
                                                            void 0 === n &&
                                                                (n = t.mimeType || e.getResponseHeader("Content-Type"));
                                                    if (n)
                                                        for (o in a)
                                                            if (a[o] && a[o].test(n)) {
                                                                l.unshift(o);
                                                                break;
                                                            }
                                                    if (l[0] in i) s = l[0];
                                                    else {
                                                        for (o in i) {
                                                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                                                s = o;
                                                                break;
                                                            }
                                                            r || (r = o);
                                                        }
                                                        s = s || r;
                                                    }
                                                    if (s) return s !== l[0] && l.unshift(s), i[s];
                                                })(p, k, r)),
                                            !h &&
                                                D.inArray("script", p.dataTypes) > -1 &&
                                                D.inArray("json", p.dataTypes) < 0 &&
                                                (p.converters["text script"] = function () {}),
                                            (_ = (function (t, e, i, n) {
                                                var o,
                                                    s,
                                                    r,
                                                    a,
                                                    l,
                                                    c = {},
                                                    u = t.dataTypes.slice();
                                                if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                                                for (s = u.shift(); s; )
                                                    if (
                                                        (t.responseFields[s] && (i[t.responseFields[s]] = e),
                                                        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                                                        (l = s),
                                                        (s = u.shift()))
                                                    )
                                                        if ("*" === s) s = l;
                                                        else if ("*" !== l && l !== s) {
                                                            if (!(r = c[l + " " + s] || c["* " + s]))
                                                                for (o in c)
                                                                    if (
                                                                        (a = o.split(" "))[1] === s &&
                                                                        (r = c[l + " " + a[0]] || c["* " + a[0]])
                                                                    ) {
                                                                        !0 === r
                                                                            ? (r = c[o])
                                                                            : !0 !== c[o] &&
                                                                              ((s = a[0]), u.unshift(a[1]));
                                                                        break;
                                                                    }
                                                            if (!0 !== r)
                                                                if (r && t.throws) e = r(e);
                                                                else
                                                                    try {
                                                                        e = r(e);
                                                                    } catch (t) {
                                                                        return {
                                                                            state: "parsererror",
                                                                            error: r
                                                                                ? t
                                                                                : "No conversion from " +
                                                                                  l +
                                                                                  " to " +
                                                                                  s,
                                                                        };
                                                                    }
                                                        }
                                                return { state: "success", data: e };
                                            })(p, _, k, h)),
                                            h
                                                ? (p.ifModified &&
                                                      ((w = k.getResponseHeader("Last-Modified")) &&
                                                          (D.lastModified[o] = w),
                                                      (w = k.getResponseHeader("etag")) && (D.etag[o] = w)),
                                                  204 === t || "HEAD" === p.type
                                                      ? (x = "nocontent")
                                                      : 304 === t
                                                        ? (x = "notmodified")
                                                        : ((x = _.state), (d = _.data), (h = !(b = _.error))))
                                                : ((b = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                                            (k.status = t),
                                            (k.statusText = (e || x) + ""),
                                            h ? m.resolveWith(f, [d, x, k]) : m.rejectWith(f, [k, x, b]),
                                            k.statusCode(y),
                                            (y = void 0),
                                            u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [k, p, h ? d : b]),
                                            v.fireWith(f, [k, x]),
                                            u &&
                                                (g.trigger("ajaxComplete", [k, p]),
                                                --D.active || D.event.trigger("ajaxStop")));
                                    }
                                    return k;
                                },
                                getJSON: function (t, e, i) {
                                    return D.get(t, e, i, "json");
                                },
                                getScript: function (t, e) {
                                    return D.get(t, void 0, e, "script");
                                },
                            }),
                            D.each(["get", "post"], function (t, e) {
                                D[e] = function (t, i, n, o) {
                                    return (
                                        v(i) && ((o = o || n), (n = i), (i = void 0)),
                                        D.ajax(
                                            D.extend(
                                                { url: t, type: e, dataType: o, data: i, success: n },
                                                D.isPlainObject(t) && t
                                            )
                                        )
                                    );
                                };
                            }),
                            D.ajaxPrefilter(function (t) {
                                var e;
                                for (e in t.headers)
                                    "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
                            }),
                            (D._evalUrl = function (t, e, i) {
                                return D.ajax({
                                    url: t,
                                    type: "GET",
                                    dataType: "script",
                                    cache: !0,
                                    async: !1,
                                    global: !1,
                                    converters: { "text script": function () {} },
                                    dataFilter: function (t) {
                                        D.globalEval(t, e, i);
                                    },
                                });
                            }),
                            D.fn.extend({
                                wrapAll: function (t) {
                                    var e;
                                    return (
                                        this[0] &&
                                            (v(t) && (t = t.call(this[0])),
                                            (e = D(t, this[0].ownerDocument).eq(0).clone(!0)),
                                            this[0].parentNode && e.insertBefore(this[0]),
                                            e
                                                .map(function () {
                                                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                                    return t;
                                                })
                                                .append(this)),
                                        this
                                    );
                                },
                                wrapInner: function (t) {
                                    return v(t)
                                        ? this.each(function (e) {
                                              D(this).wrapInner(t.call(this, e));
                                          })
                                        : this.each(function () {
                                              var e = D(this),
                                                  i = e.contents();
                                              i.length ? i.wrapAll(t) : e.append(t);
                                          });
                                },
                                wrap: function (t) {
                                    var e = v(t);
                                    return this.each(function (i) {
                                        D(this).wrapAll(e ? t.call(this, i) : t);
                                    });
                                },
                                unwrap: function (t) {
                                    return (
                                        this.parent(t)
                                            .not("body")
                                            .each(function () {
                                                D(this).replaceWith(this.childNodes);
                                            }),
                                        this
                                    );
                                },
                            }),
                            (D.expr.pseudos.hidden = function (t) {
                                return !D.expr.pseudos.visible(t);
                            }),
                            (D.expr.pseudos.visible = function (t) {
                                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
                            }),
                            (D.ajaxSettings.xhr = function () {
                                try {
                                    return new n.XMLHttpRequest();
                                } catch (t) {}
                            });
                        var Be = { 0: 200, 1223: 204 },
                            Ue = D.ajaxSettings.xhr();
                        (m.cors = !!Ue && "withCredentials" in Ue),
                            (m.ajax = Ue = !!Ue),
                            D.ajaxTransport(function (t) {
                                var e, i;
                                if (m.cors || (Ue && !t.crossDomain))
                                    return {
                                        send: function (o, s) {
                                            var r,
                                                a = t.xhr();
                                            if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                                                for (r in t.xhrFields) a[r] = t.xhrFields[r];
                                            for (r in (t.mimeType &&
                                                a.overrideMimeType &&
                                                a.overrideMimeType(t.mimeType),
                                            t.crossDomain ||
                                                o["X-Requested-With"] ||
                                                (o["X-Requested-With"] = "XMLHttpRequest"),
                                            o))
                                                a.setRequestHeader(r, o[r]);
                                            (e = function (t) {
                                                return function () {
                                                    e &&
                                                        ((e =
                                                            i =
                                                            a.onload =
                                                            a.onerror =
                                                            a.onabort =
                                                            a.ontimeout =
                                                            a.onreadystatechange =
                                                                null),
                                                        "abort" === t
                                                            ? a.abort()
                                                            : "error" === t
                                                              ? "number" != typeof a.status
                                                                  ? s(0, "error")
                                                                  : s(a.status, a.statusText)
                                                              : s(
                                                                    Be[a.status] || a.status,
                                                                    a.statusText,
                                                                    "text" !== (a.responseType || "text") ||
                                                                        "string" != typeof a.responseText
                                                                        ? { binary: a.response }
                                                                        : { text: a.responseText },
                                                                    a.getAllResponseHeaders()
                                                                ));
                                                };
                                            }),
                                                (a.onload = e()),
                                                (i = a.onerror = a.ontimeout = e("error")),
                                                void 0 !== a.onabort
                                                    ? (a.onabort = i)
                                                    : (a.onreadystatechange = function () {
                                                          4 === a.readyState &&
                                                              n.setTimeout(function () {
                                                                  e && i();
                                                              });
                                                      }),
                                                (e = e("abort"));
                                            try {
                                                a.send((t.hasContent && t.data) || null);
                                            } catch (t) {
                                                if (e) throw t;
                                            }
                                        },
                                        abort: function () {
                                            e && e();
                                        },
                                    };
                            }),
                            D.ajaxPrefilter(function (t) {
                                t.crossDomain && (t.contents.script = !1);
                            }),
                            D.ajaxSetup({
                                accepts: {
                                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                                },
                                contents: { script: /\b(?:java|ecma)script\b/ },
                                converters: {
                                    "text script": function (t) {
                                        return D.globalEval(t), t;
                                    },
                                },
                            }),
                            D.ajaxPrefilter("script", function (t) {
                                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
                            }),
                            D.ajaxTransport("script", function (t) {
                                var e, i;
                                if (t.crossDomain || t.scriptAttrs)
                                    return {
                                        send: function (n, o) {
                                            (e = D("<script>")
                                                .attr(t.scriptAttrs || {})
                                                .prop({ charset: t.scriptCharset, src: t.url })
                                                .on(
                                                    "load error",
                                                    (i = function (t) {
                                                        e.remove(),
                                                            (i = null),
                                                            t && o("error" === t.type ? 404 : 200, t.type);
                                                    })
                                                )),
                                                b.head.appendChild(e[0]);
                                        },
                                        abort: function () {
                                            i && i();
                                        },
                                    };
                            });
                        var $e,
                            Ke = [],
                            Xe = /(=)\?(?=&|$)|\?\?/;
                        D.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var t = Ke.pop() || D.expando + "_" + De.guid++;
                                return (this[t] = !0), t;
                            },
                        }),
                            D.ajaxPrefilter("json jsonp", function (t, e, i) {
                                var o,
                                    s,
                                    r,
                                    a =
                                        !1 !== t.jsonp &&
                                        (Xe.test(t.url)
                                            ? "url"
                                            : "string" == typeof t.data &&
                                              0 ===
                                                  (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                                              Xe.test(t.data) &&
                                              "data");
                                if (a || "jsonp" === t.dataTypes[0])
                                    return (
                                        (o = t.jsonpCallback =
                                            v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                        a
                                            ? (t[a] = t[a].replace(Xe, "$1" + o))
                                            : !1 !== t.jsonp &&
                                              (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                                        (t.converters["script json"] = function () {
                                            return r || D.error(o + " was not called"), r[0];
                                        }),
                                        (t.dataTypes[0] = "json"),
                                        (s = n[o]),
                                        (n[o] = function () {
                                            r = arguments;
                                        }),
                                        i.always(function () {
                                            void 0 === s ? D(n).removeProp(o) : (n[o] = s),
                                                t[o] && ((t.jsonpCallback = e.jsonpCallback), Ke.push(o)),
                                                r && v(s) && s(r[0]),
                                                (r = s = void 0);
                                        }),
                                        "script"
                                    );
                            }),
                            (m.createHTMLDocument =
                                ((($e = b.implementation.createHTMLDocument("").body).innerHTML =
                                    "<form></form><form></form>"),
                                2 === $e.childNodes.length)),
                            (D.parseHTML = function (t, e, i) {
                                return "string" != typeof t
                                    ? []
                                    : ("boolean" == typeof e && ((i = e), (e = !1)),
                                      e ||
                                          (m.createHTMLDocument
                                              ? (((n = (e = b.implementation.createHTMLDocument("")).createElement(
                                                    "base"
                                                )).href = b.location.href),
                                                e.head.appendChild(n))
                                              : (e = b)),
                                      (s = !i && []),
                                      (o = M.exec(t))
                                          ? [e.createElement(o[1])]
                                          : ((o = kt([t], e, s)),
                                            s && s.length && D(s).remove(),
                                            D.merge([], o.childNodes)));
                                var n, o, s;
                            }),
                            (D.fn.load = function (t, e, i) {
                                var n,
                                    o,
                                    s,
                                    r = this,
                                    a = t.indexOf(" ");
                                return (
                                    a > -1 && ((n = ve(t.slice(a))), (t = t.slice(0, a))),
                                    v(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
                                    r.length > 0 &&
                                        D.ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                                            .done(function (t) {
                                                (s = arguments),
                                                    r.html(n ? D("<div>").append(D.parseHTML(t)).find(n) : t);
                                            })
                                            .always(
                                                i &&
                                                    function (t, e) {
                                                        r.each(function () {
                                                            i.apply(this, s || [t.responseText, e, t]);
                                                        });
                                                    }
                                            ),
                                    this
                                );
                            }),
                            (D.expr.pseudos.animated = function (t) {
                                return D.grep(D.timers, function (e) {
                                    return t === e.elem;
                                }).length;
                            }),
                            (D.offset = {
                                setOffset: function (t, e, i) {
                                    var n,
                                        o,
                                        s,
                                        r,
                                        a,
                                        l,
                                        c = D.css(t, "position"),
                                        u = D(t),
                                        h = {};
                                    "static" === c && (t.style.position = "relative"),
                                        (a = u.offset()),
                                        (s = D.css(t, "top")),
                                        (l = D.css(t, "left")),
                                        ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1
                                            ? ((r = (n = u.position()).top), (o = n.left))
                                            : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
                                        v(e) && (e = e.call(t, i, D.extend({}, a))),
                                        null != e.top && (h.top = e.top - a.top + r),
                                        null != e.left && (h.left = e.left - a.left + o),
                                        "using" in e ? e.using.call(t, h) : u.css(h);
                                },
                            }),
                            D.fn.extend({
                                offset: function (t) {
                                    if (arguments.length)
                                        return void 0 === t
                                            ? this
                                            : this.each(function (e) {
                                                  D.offset.setOffset(this, t, e);
                                              });
                                    var e,
                                        i,
                                        n = this[0];
                                    return n
                                        ? n.getClientRects().length
                                            ? ((e = n.getBoundingClientRect()),
                                              (i = n.ownerDocument.defaultView),
                                              { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
                                            : { top: 0, left: 0 }
                                        : void 0;
                                },
                                position: function () {
                                    if (this[0]) {
                                        var t,
                                            e,
                                            i,
                                            n = this[0],
                                            o = { top: 0, left: 0 };
                                        if ("fixed" === D.css(n, "position")) e = n.getBoundingClientRect();
                                        else {
                                            for (
                                                e = this.offset(),
                                                    i = n.ownerDocument,
                                                    t = n.offsetParent || i.documentElement;
                                                t &&
                                                (t === i.body || t === i.documentElement) &&
                                                "static" === D.css(t, "position");

                                            )
                                                t = t.parentNode;
                                            t &&
                                                t !== n &&
                                                1 === t.nodeType &&
                                                (((o = D(t).offset()).top += D.css(t, "borderTopWidth", !0)),
                                                (o.left += D.css(t, "borderLeftWidth", !0)));
                                        }
                                        return {
                                            top: e.top - o.top - D.css(n, "marginTop", !0),
                                            left: e.left - o.left - D.css(n, "marginLeft", !0),
                                        };
                                    }
                                },
                                offsetParent: function () {
                                    return this.map(function () {
                                        for (var t = this.offsetParent; t && "static" === D.css(t, "position"); )
                                            t = t.offsetParent;
                                        return t || rt;
                                    });
                                },
                            }),
                            D.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                                var i = "pageYOffset" === e;
                                D.fn[t] = function (n) {
                                    return U(
                                        this,
                                        function (t, n, o) {
                                            var s;
                                            if (
                                                (y(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView), void 0 === o)
                                            )
                                                return s ? s[e] : t[n];
                                            s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : (t[n] = o);
                                        },
                                        t,
                                        n,
                                        arguments.length
                                    );
                                };
                            }),
                            D.each(["top", "left"], function (t, e) {
                                D.cssHooks[e] = Ut(m.pixelPosition, function (t, i) {
                                    if (i) return (i = Bt(t, e)), Wt.test(i) ? D(t).position()[e] + "px" : i;
                                });
                            }),
                            D.each({ Height: "height", Width: "width" }, function (t, e) {
                                D.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                                    D.fn[n] = function (o, s) {
                                        var r = arguments.length && (i || "boolean" != typeof o),
                                            a = i || (!0 === o || !0 === s ? "margin" : "border");
                                        return U(
                                            this,
                                            function (e, i, o) {
                                                var s;
                                                return y(e)
                                                    ? 0 === n.indexOf("outer")
                                                        ? e["inner" + t]
                                                        : e.document.documentElement["client" + t]
                                                    : 9 === e.nodeType
                                                      ? ((s = e.documentElement),
                                                        Math.max(
                                                            e.body["scroll" + t],
                                                            s["scroll" + t],
                                                            e.body["offset" + t],
                                                            s["offset" + t],
                                                            s["client" + t]
                                                        ))
                                                      : void 0 === o
                                                        ? D.css(e, i, a)
                                                        : D.style(e, i, o, a);
                                            },
                                            e,
                                            r ? o : void 0,
                                            r
                                        );
                                    };
                                });
                            }),
                            D.each(
                                ["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                                function (t, e) {
                                    D.fn[e] = function (t) {
                                        return this.on(e, t);
                                    };
                                }
                            ),
                            D.fn.extend({
                                bind: function (t, e, i) {
                                    return this.on(t, null, e, i);
                                },
                                unbind: function (t, e) {
                                    return this.off(t, null, e);
                                },
                                delegate: function (t, e, i, n) {
                                    return this.on(e, t, i, n);
                                },
                                undelegate: function (t, e, i) {
                                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
                                },
                                hover: function (t, e) {
                                    return this.mouseenter(t).mouseleave(e || t);
                                },
                            }),
                            D.each(
                                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                                    " "
                                ),
                                function (t, e) {
                                    D.fn[e] = function (t, i) {
                                        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
                                    };
                                }
                            );
                        var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                        (D.proxy = function (t, e) {
                            var i, n, o;
                            if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), v(t)))
                                return (
                                    (n = a.call(arguments, 2)),
                                    ((o = function () {
                                        return t.apply(e || this, n.concat(a.call(arguments)));
                                    }).guid = t.guid =
                                        t.guid || D.guid++),
                                    o
                                );
                        }),
                            (D.holdReady = function (t) {
                                t ? D.readyWait++ : D.ready(!0);
                            }),
                            (D.isArray = Array.isArray),
                            (D.parseJSON = JSON.parse),
                            (D.nodeName = N),
                            (D.isFunction = v),
                            (D.isWindow = y),
                            (D.camelCase = V),
                            (D.type = x),
                            (D.now = Date.now),
                            (D.isNumeric = function (t) {
                                var e = D.type(t);
                                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
                            }),
                            (D.trim = function (t) {
                                return null == t ? "" : (t + "").replace(Ve, "");
                            }),
                            void 0 ===
                                (i = function () {
                                    return D;
                                }.apply(e, [])) || (t.exports = i);
                        var Ge = n.jQuery,
                            Je = n.$;
                        return (
                            (D.noConflict = function (t) {
                                return n.$ === D && (n.$ = Je), t && n.jQuery === D && (n.jQuery = Ge), D;
                            }),
                            void 0 === o && (n.jQuery = n.$ = D),
                            D
                        );
                    });
                },
                5174: function (t) {
                    var e = (function (t) {
                        "use strict";
                        var e,
                            i = Object.prototype,
                            n = i.hasOwnProperty,
                            o = "function" == typeof Symbol ? Symbol : {},
                            s = o.iterator || "@@iterator",
                            r = o.asyncIterator || "@@asyncIterator",
                            a = o.toStringTag || "@@toStringTag";
                        function l(t, e, i) {
                            return (
                                Object.defineProperty(t, e, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                }),
                                t[e]
                            );
                        }
                        try {
                            l({}, "");
                        } catch (t) {
                            l = function (t, e, i) {
                                return (t[e] = i);
                            };
                        }
                        function c(t, e, i, n) {
                            var o = e && e.prototype instanceof m ? e : m,
                                s = Object.create(o.prototype),
                                r = new E(n || []);
                            return (
                                (s._invoke = (function (t, e, i) {
                                    var n = h;
                                    return function (o, s) {
                                        if (n === p) throw new Error("Generator is already running");
                                        if (n === f) {
                                            if ("throw" === o) throw s;
                                            return N();
                                        }
                                        for (i.method = o, i.arg = s; ; ) {
                                            var r = i.delegate;
                                            if (r) {
                                                var a = C(r, i);
                                                if (a) {
                                                    if (a === g) continue;
                                                    return a;
                                                }
                                            }
                                            if ("next" === i.method) i.sent = i._sent = i.arg;
                                            else if ("throw" === i.method) {
                                                if (n === h) throw ((n = f), i.arg);
                                                i.dispatchException(i.arg);
                                            } else "return" === i.method && i.abrupt("return", i.arg);
                                            n = p;
                                            var l = u(t, e, i);
                                            if ("normal" === l.type) {
                                                if (((n = i.done ? f : d), l.arg === g)) continue;
                                                return { value: l.arg, done: i.done };
                                            }
                                            "throw" === l.type && ((n = f), (i.method = "throw"), (i.arg = l.arg));
                                        }
                                    };
                                })(t, i, r)),
                                s
                            );
                        }
                        function u(t, e, i) {
                            try {
                                return { type: "normal", arg: t.call(e, i) };
                            } catch (t) {
                                return { type: "throw", arg: t };
                            }
                        }
                        t.wrap = c;
                        var h = "suspendedStart",
                            d = "suspendedYield",
                            p = "executing",
                            f = "completed",
                            g = {};
                        function m() {}
                        function v() {}
                        function y() {}
                        var b = {};
                        b[s] = function () {
                            return this;
                        };
                        var _ = Object.getPrototypeOf,
                            w = _ && _(_(A([])));
                        w && w !== i && n.call(w, s) && (b = w);
                        var x = (y.prototype = m.prototype = Object.create(b));
                        function k(t) {
                            ["next", "throw", "return"].forEach(function (e) {
                                l(t, e, function (t) {
                                    return this._invoke(e, t);
                                });
                            });
                        }
                        function D(t, e) {
                            function i(o, s, r, a) {
                                var l = u(t[o], t, s);
                                if ("throw" !== l.type) {
                                    var c = l.arg,
                                        h = c.value;
                                    return h && "object" == typeof h && n.call(h, "__await")
                                        ? e.resolve(h.__await).then(
                                              function (t) {
                                                  i("next", t, r, a);
                                              },
                                              function (t) {
                                                  i("throw", t, r, a);
                                              }
                                          )
                                        : e.resolve(h).then(
                                              function (t) {
                                                  (c.value = t), r(c);
                                              },
                                              function (t) {
                                                  return i("throw", t, r, a);
                                              }
                                          );
                                }
                                a(l.arg);
                            }
                            var o;
                            this._invoke = function (t, n) {
                                function s() {
                                    return new e(function (e, o) {
                                        i(t, n, e, o);
                                    });
                                }
                                return (o = o ? o.then(s, s) : s());
                            };
                        }
                        function C(t, i) {
                            var n = t.iterator[i.method];
                            if (n === e) {
                                if (((i.delegate = null), "throw" === i.method)) {
                                    if (
                                        t.iterator.return &&
                                        ((i.method = "return"), (i.arg = e), C(t, i), "throw" === i.method)
                                    )
                                        return g;
                                    (i.method = "throw"),
                                        (i.arg = new TypeError("The iterator does not provide a 'throw' method"));
                                }
                                return g;
                            }
                            var o = u(n, t.iterator, i.arg);
                            if ("throw" === o.type)
                                return (i.method = "throw"), (i.arg = o.arg), (i.delegate = null), g;
                            var s = o.arg;
                            return s
                                ? s.done
                                    ? ((i[t.resultName] = s.value),
                                      (i.next = t.nextLoc),
                                      "return" !== i.method && ((i.method = "next"), (i.arg = e)),
                                      (i.delegate = null),
                                      g)
                                    : s
                                : ((i.method = "throw"),
                                  (i.arg = new TypeError("iterator result is not an object")),
                                  (i.delegate = null),
                                  g);
                        }
                        function T(t) {
                            var e = { tryLoc: t[0] };
                            1 in t && (e.catchLoc = t[1]),
                                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                                this.tryEntries.push(e);
                        }
                        function S(t) {
                            var e = t.completion || {};
                            (e.type = "normal"), delete e.arg, (t.completion = e);
                        }
                        function E(t) {
                            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(T, this), this.reset(!0);
                        }
                        function A(t) {
                            if (t) {
                                var i = t[s];
                                if (i) return i.call(t);
                                if ("function" == typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var o = -1,
                                        r = function i() {
                                            for (; ++o < t.length; )
                                                if (n.call(t, o)) return (i.value = t[o]), (i.done = !1), i;
                                            return (i.value = e), (i.done = !0), i;
                                        };
                                    return (r.next = r);
                                }
                            }
                            return { next: N };
                        }
                        function N() {
                            return { value: e, done: !0 };
                        }
                        return (
                            (v.prototype = x.constructor = y),
                            (y.constructor = v),
                            (v.displayName = l(y, a, "GeneratorFunction")),
                            (t.isGeneratorFunction = function (t) {
                                var e = "function" == typeof t && t.constructor;
                                return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
                            }),
                            (t.mark = function (t) {
                                return (
                                    Object.setPrototypeOf
                                        ? Object.setPrototypeOf(t, y)
                                        : ((t.__proto__ = y), l(t, a, "GeneratorFunction")),
                                    (t.prototype = Object.create(x)),
                                    t
                                );
                            }),
                            (t.awrap = function (t) {
                                return { __await: t };
                            }),
                            k(D.prototype),
                            (D.prototype[r] = function () {
                                return this;
                            }),
                            (t.AsyncIterator = D),
                            (t.async = function (e, i, n, o, s) {
                                void 0 === s && (s = Promise);
                                var r = new D(c(e, i, n, o), s);
                                return t.isGeneratorFunction(i)
                                    ? r
                                    : r.next().then(function (t) {
                                          return t.done ? t.value : r.next();
                                      });
                            }),
                            k(x),
                            l(x, a, "Generator"),
                            (x[s] = function () {
                                return this;
                            }),
                            (x.toString = function () {
                                return "[object Generator]";
                            }),
                            (t.keys = function (t) {
                                var e = [];
                                for (var i in t) e.push(i);
                                return (
                                    e.reverse(),
                                    function i() {
                                        for (; e.length; ) {
                                            var n = e.pop();
                                            if (n in t) return (i.value = n), (i.done = !1), i;
                                        }
                                        return (i.done = !0), i;
                                    }
                                );
                            }),
                            (t.values = A),
                            (E.prototype = {
                                constructor: E,
                                reset: function (t) {
                                    if (
                                        ((this.prev = 0),
                                        (this.next = 0),
                                        (this.sent = this._sent = e),
                                        (this.done = !1),
                                        (this.delegate = null),
                                        (this.method = "next"),
                                        (this.arg = e),
                                        this.tryEntries.forEach(S),
                                        !t)
                                    )
                                        for (var i in this)
                                            "t" === i.charAt(0) &&
                                                n.call(this, i) &&
                                                !isNaN(+i.slice(1)) &&
                                                (this[i] = e);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var t = this.tryEntries[0].completion;
                                    if ("throw" === t.type) throw t.arg;
                                    return this.rval;
                                },
                                dispatchException: function (t) {
                                    if (this.done) throw t;
                                    var i = this;
                                    function o(n, o) {
                                        return (
                                            (a.type = "throw"),
                                            (a.arg = t),
                                            (i.next = n),
                                            o && ((i.method = "next"), (i.arg = e)),
                                            !!o
                                        );
                                    }
                                    for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                        var r = this.tryEntries[s],
                                            a = r.completion;
                                        if ("root" === r.tryLoc) return o("end");
                                        if (r.tryLoc <= this.prev) {
                                            var l = n.call(r, "catchLoc"),
                                                c = n.call(r, "finallyLoc");
                                            if (l && c) {
                                                if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                                                if (this.prev < r.finallyLoc) return o(r.finallyLoc);
                                            } else if (l) {
                                                if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                                            } else {
                                                if (!c) throw new Error("try statement without catch or finally");
                                                if (this.prev < r.finallyLoc) return o(r.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (t, e) {
                                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                        var o = this.tryEntries[i];
                                        if (
                                            o.tryLoc <= this.prev &&
                                            n.call(o, "finallyLoc") &&
                                            this.prev < o.finallyLoc
                                        ) {
                                            var s = o;
                                            break;
                                        }
                                    }
                                    s &&
                                        ("break" === t || "continue" === t) &&
                                        s.tryLoc <= e &&
                                        e <= s.finallyLoc &&
                                        (s = null);
                                    var r = s ? s.completion : {};
                                    return (
                                        (r.type = t),
                                        (r.arg = e),
                                        s ? ((this.method = "next"), (this.next = s.finallyLoc), g) : this.complete(r)
                                    );
                                },
                                complete: function (t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return (
                                        "break" === t.type || "continue" === t.type
                                            ? (this.next = t.arg)
                                            : "return" === t.type
                                              ? ((this.rval = this.arg = t.arg),
                                                (this.method = "return"),
                                                (this.next = "end"))
                                              : "normal" === t.type && e && (this.next = e),
                                        g
                                    );
                                },
                                finish: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var i = this.tryEntries[e];
                                        if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), S(i), g;
                                    }
                                },
                                catch: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var i = this.tryEntries[e];
                                        if (i.tryLoc === t) {
                                            var n = i.completion;
                                            if ("throw" === n.type) {
                                                var o = n.arg;
                                                S(i);
                                            }
                                            return o;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (t, i, n) {
                                    return (
                                        (this.delegate = { iterator: A(t), resultName: i, nextLoc: n }),
                                        "next" === this.method && (this.arg = e),
                                        g
                                    );
                                },
                            }),
                            t
                        );
                    })(t.exports);
                    try {
                        regeneratorRuntime = e;
                    } catch (t) {
                        Function("r", "regeneratorRuntime = r")(e);
                    }
                },
            },
            e = {};
        function i(n) {
            var o = e[n];
            if (void 0 !== o) return o.exports;
            var s = (e[n] = { exports: {} });
            return t[n].call(s.exports, s, s.exports, i), s.exports;
        }
        (i.amdO = {}),
            (i.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return i.d(e, { a: e }), e;
            }),
            (i.d = function (t, e) {
                for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
            }),
            (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (i.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            });
        var n = {};
        !(function () {
            "use strict";
            function t(t, e, i, n, o, s, r) {
                try {
                    var a = t[s](r),
                        l = a.value;
                } catch (t) {
                    return void i(t);
                }
                a.done ? e(l) : Promise.resolve(l).then(n, o);
            }
            function e(e) {
                return function () {
                    var i = this,
                        n = arguments;
                    return new Promise(function (o, s) {
                        var r = e.apply(i, n);
                        function a(e) {
                            t(r, o, s, a, l, "next", e);
                        }
                        function l(e) {
                            t(r, o, s, a, l, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            function o(t) {
                return (o =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          })(t);
            }
            i.r(n),
                i.d(n, {
                    switchCountry: function () {
                        return g;
                    },
                });
            var s,
                a,
                c = i(548),
                u = i.n(c),
                h = i(585),
                d = i.n(h),
                p = d();
            function f(t) {
                var e,
                    i = 0;
                for (e in t) t.hasOwnProperty(e) && i++;
                return i;
            }
            function g(t) {
                var e = window.location.pathname + window.location.search + window.location.hash;
                e.match(/^\/[a-z]{2}\//) && (e = e.substr(3)), (window.location.href = "/".concat(t).concat(e));
            }
            function m(t, e) {
                return v.apply(this, arguments);
            }
            function v() {
                return (v = e(
                    u().mark(function t(e, i) {
                        var n, o;
                        return u().wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (t.next = 2),
                                            fetch(e, {
                                                method: "POST",
                                                body: i.toString(),
                                                headers: {
                                                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                                                },
                                            })
                                        );
                                    case 2:
                                        if ((n = t.sent).ok) {
                                            t.next = 5;
                                            break;
                                        }
                                        throw "Unknown error. Please try again.";
                                    case 5:
                                        return (t.next = 7), n.json();
                                    case 7:
                                        if ((o = t.sent)) {
                                            t.next = 10;
                                            break;
                                        }
                                        throw "Unknown error. Please try again.";
                                    case 10:
                                        if (!o.errors) {
                                            t.next = 12;
                                            break;
                                        }
                                        throw Object.values(o.errors).join(". ");
                                    case 12:
                                        return t.abrupt("return", o);
                                    case 13:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
            function y(t) {
                return b.apply(this, arguments);
            }
            function b() {
                return (b = e(
                    u().mark(function t(e) {
                        var i, n;
                        return u().wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (i = new URLSearchParams({ tag: e })),
                                            "/api/follow-tag.php",
                                            (t.next = 4),
                                            m("/api/follow-tag.php", i)
                                        );
                                    case 4:
                                        return (n = t.sent), t.abrupt("return", n);
                                    case 6:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
            function _(t) {
                return w.apply(this, arguments);
            }
            function w() {
                return (w = e(
                    u().mark(function t(e) {
                        var i, n;
                        return u().wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            (i = new URLSearchParams({ tag: e })),
                                            "/api/unfollow-tag.php",
                                            (t.next = 4),
                                            m("/api/unfollow-tag.php", i)
                                        );
                                    case 4:
                                        return (n = t.sent), t.abrupt("return", n);
                                    case 6:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
            i(6734),
                i(874),
                (window.$ = d()),
                (window.jQuery = d()),
                d()(document).ready(function () {
                    "placeholder" in document.createElement("input") ||
                        (d()("input[placeholder], textarea[placeholder]")
                            .blur(function () {
                                "" === d()(this).val() || d()(this).val() === d()(this).attr("placeholder")
                                    ? (d()(this).addClass("empty"), d()(this).val(d()(this).attr("placeholder")))
                                    : d()(this).removeClass("empty");
                            })
                            .blur()
                            .focus(function () {
                                d()(this).hasClass("empty") && (d()(this).val(""), d()(this).removeClass("empty"));
                            }),
                        d()("form").each(function () {
                            d()(this).find("input[placeholder], textarea[placeholder]").length &&
                                d()(this).submit(function () {
                                    d()(this).find("input[placeholder].empty, textarea[placeholder].empty").val("");
                                });
                        }));
                }),
                ((s = p).fn.validate = function (t) {
                    return s(this).length
                        ? ((t = s.extend({ selector: null }, t)),
                          s(this).on("submit", t.selector, function (t) {
                              for (var e = s(this).find("input,select,textarea"), i = 0; i < e.length; i += 1) {
                                  var n = s(e[i]),
                                      o = n.attr("title");
                                  if (void 0 === o)
                                      if (void 0 === (o = n.attr("name"))) {
                                          var r = n.prev("label");
                                          if (r.length) o = r.text();
                                          else {
                                              var a = n.closest("label");
                                              a.length && (o = a.find("span").text());
                                          }
                                      } else o = o.charAt(0).toUpperCase() + o.slice(1);
                                  if (n.hasClass("required")) {
                                      if ("" === s.trim(n.val()))
                                          return (
                                              alert("".concat(o, " is required.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if ("checkbox" === n.attr("type") && !n.is(":checked"))
                                          return (
                                              alert("You have to agree that '".concat(o, "'")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                  }
                                  if ("" !== s.trim(n.val())) {
                                      if (n.hasClass("integer") && !String(n.val()).match(/^[0-9+-]+$/))
                                          return (
                                              alert("".concat(o, " must be an integer.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (n.hasClass("integers") && !String(n.val()).match(/^(\s?[0-9+-]+\s?)+$/))
                                          return (
                                              alert("".concat(o, " must be an integer.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (n.hasClass("number") && parseFloat(n.val()).isNaN())
                                          return (
                                              alert("".concat(o, " must be a number.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (
                                          n.hasClass("email") &&
                                          !String(n.val()).match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
                                      )
                                          return (
                                              alert("".concat(o, " is invalid.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (
                                          n.hasClass("username") &&
                                          !String(n.val()).match(/^[a-zA-Z0-9][a-zA-Z0-9._-]+[a-zA-Z0-9]$/)
                                      )
                                          return (
                                              alert("".concat(o, " is invalid.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (
                                          n.hasClass("usernames") &&
                                          !String(n.val()).match(/^(\s?[a-zA-Z0-9][a-zA-Z0-9._-]+[a-zA-Z0-9]\s?)+$/)
                                      )
                                          return (
                                              alert("".concat(o, " is invalid.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (n.hasClass("password") && n.val().length < 6)
                                          return (
                                              alert("".concat(o, " must have at least 6 characters.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (
                                          n.hasClass("url") &&
                                          !String(n.val()).match(
                                              /^((ftp|https?):\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+(:[0-9]+)?(\/.*)?$/i
                                          )
                                      )
                                          return (
                                              alert("".concat(o, " is not a valid URL.")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      if (n.hasClass("error")) {
                                          var l = n.attr("error");
                                          return (
                                              void 0 !== l && 0 !== l.length
                                                  ? alert(l)
                                                  : alert("Please re-enter ".concat(o, ".")),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                      }
                                  }
                                  if (n.is("[match]")) {
                                      var c = e.filter("[name=".concat(n.attr("match"), "]"));
                                      if (n.val() !== c.val())
                                          return (
                                              alert("".concat(o, " must be the same as ").concat(c.attr("title"))),
                                              e.blur(),
                                              n.focus(),
                                              t.stopImmediatePropagation(),
                                              !1
                                          );
                                  }
                                  if (
                                      n.is("[check_min]") &&
                                      e.filter("[name='".concat(n.attr("name"), "']:checked")).length <
                                          n.attr("check_min")
                                  )
                                      return (
                                          alert("Please select at least ".concat(n.attr("check_min"), " ").concat(o)),
                                          e.blur(),
                                          n.focus(),
                                          t.stopImmediatePropagation(),
                                          !1
                                      );
                              }
                          }),
                          s(this))
                        : s(this);
                }),
                d()(document).ready(function () {
                    d()("body").validate({ selector: "form" });
                }),
                (function (t) {
                    t.fn.showError = function (e) {
                        var i = t(this);
                        if (!i.length) return i;
                        return (
                            (e = t.extend({}, e)),
                            i.each(function () {
                                var i = t('<div class="error" />').html(e.message);
                                t(this).after(i);
                            }),
                            i
                        );
                    };
                })(p),
                (a = function (t) {
                    var e = /\+/g;
                    function i(t) {
                        return t;
                    }
                    function n(t) {
                        return decodeURIComponent(t.replace(e, " "));
                    }
                    function o(t) {
                        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                        try {
                            return s.json ? JSON.parse(t) : t;
                        } catch (t) {}
                    }
                    var s = (t.cookie = function (e, r, a) {
                        if (void 0 !== r) {
                            if ("number" == typeof (a = t.extend({}, s.defaults, a)).expires) {
                                var l = a.expires,
                                    c = (a.expires = new Date());
                                c.setDate(c.getDate() + l);
                            }
                            return (
                                (r = s.json ? JSON.stringify(r) : String(r)),
                                (document.cookie = [
                                    s.raw ? e : encodeURIComponent(e),
                                    "=",
                                    s.raw ? r : encodeURIComponent(r),
                                    a.expires ? "; expires=".concat(a.expires.toUTCString()) : "",
                                    a.path ? "; path=".concat(a.path) : "",
                                    a.domain ? "; domain=".concat(a.domain) : "",
                                    a.secure ? "; secure" : "",
                                ].join(""))
                            );
                        }
                        for (
                            var u = s.raw ? i : n,
                                h = document.cookie.split("; "),
                                d = e ? void 0 : {},
                                p = 0,
                                f = h.length;
                            p < f;
                            p++
                        ) {
                            var g = h[p].split("="),
                                m = u(g.shift()),
                                v = u(g.join("="));
                            if (e && e === m) {
                                d = o(v);
                                break;
                            }
                            e || (d[m] = o(v));
                        }
                        return d;
                    });
                    (s.defaults = {}),
                        (t.removeCookie = function (e, i) {
                            return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, i, { expires: -1 })), !0);
                        });
                }),
                "function" == typeof define && i.amdO ? define(["jquery"], a) : a(p),
                d()(document).ready(function () {
                    if (
                        (d().cookie("error") && (alert(d().cookie("error")), d().removeCookie("error")),
                        d().cookie("notice") && (d().toast(d().cookie("notice")), d().removeCookie("notice")),
                        void 0 === d().cookie("tz_offset"))
                    ) {
                        var t = new Date();
                        //d().post("/api/set-tz.php", { tz_offset: 60 * -t.getTimezoneOffset() });
                    }
                }),
                (function (t) {
                    t.fn.uploader = function (e) {
                        function i(e) {
                            t.ajax({
                                dataType: "json",
                                url: "/upload?id=".concat(e),
                                success: function (e) {
                                    var o = t("div.uploader[key=".concat(e.key, "]"));
                                    if (e.done);
                                    else if (e.empty)
                                        setTimeout(function () {
                                            i(e.key);
                                        }, 100);
                                    else if (e.cancel_upload) n(e.key);
                                    else if (e.error) n(e.key), alert(e.error);
                                    else {
                                        var s = Math.round((e.current / e.total) * 100);
                                        o.find("div.text").html("".concat(s, "%")),
                                            o.find("div.bar").css("width", "".concat(s, "%")),
                                            setTimeout(function () {
                                                i(e.key);
                                            }, 100);
                                    }
                                },
                            });
                        }
                        function n(e) {
                            var i = t("div.uploader[key=".concat(e, "]"));
                            i.find("div.progress").remove();
                            var n = i.find("input[type=file]");
                            n.replaceWith(n.clone(!0)),
                                void 0 === window.frames["upload_".concat(e)].stop
                                    ? window.frames["upload_".concat(e)].document.execCommand("stop")
                                    : window.frames["upload_".concat(e)].stop();
                        }
                        return (
                            (e = t.extend({}, e)),
                            t(this).each(function () {
                                var o = t(this).closest("form"),
                                    s = o.find("input[name=APC_UPLOAD_PROGRESS]").val();
                                t("<iframe frameborder='0' style='width:0px; height:0px;' />")
                                    .attr("id", "upload_".concat(s))
                                    .attr("name", "upload_".concat(s))
                                    .on("load", function () {
                                        if ("" === t(this).contents().find("body").text());
                                        else {
                                            var i;
                                            try {
                                                i = t.parseJSON(t(this).contents().find("body").text());
                                            } catch (t) {
                                                return;
                                            }
                                            if (i.error) alert(i.error);
                                            else if (i.done) {
                                                var n = t("div.uploader[key=".concat(i.key, "]"));
                                                n.find("div.text").html("Saved"),
                                                    n.find("a.cancel").remove(),
                                                    n.find("div.bar").css("width", "100%"),
                                                    setTimeout(function () {
                                                        n.find("div.progress").remove();
                                                    }, 3e3);
                                                var o = n.find("input[type=file]");
                                                o.replaceWith(o.clone(!0)),
                                                    void 0 === e.callback
                                                        ? t("#pic_".concat(i.key)).attr("src", i.image)
                                                        : e.callback(i);
                                            }
                                        }
                                    })
                                    .insertAfter(o),
                                    o.attr("target", "upload_".concat(s)),
                                    t(this)
                                        .find("input[type=file]")
                                        .change(function () {
                                            t(this).closest("form").submit();
                                        }),
                                    o.submit(function () {
                                        var e = t(this).find("div.uploader");
                                        e.append(
                                            '<div class="progress"><div class="bar" style="width:0px"></div><div class="text">0%</div><a href="#" class="cancel">Cancel</a></div>'
                                        ),
                                            e.find("a.cancel").click(function () {
                                                return n(t(this).closest("div.uploader").attr("key")), !1;
                                            }),
                                            setTimeout(function () {
                                                i(e.attr("key"));
                                            }, 200);
                                    });
                            }),
                            t(this)
                        );
                    };
                })(p),
                (function (t) {
                    t.fn.dirty = function () {
                        var e = !1;
                        return (
                            t(this)
                                .find("input,textarea,select")
                                .change(function () {
                                    e = !0;
                                }),
                            t(this).submit(function () {
                                e = !1;
                            }),
                            (window.onbeforeunload = function () {
                                if (e) return "You haven't saved your changes.";
                            }),
                            t(this)
                        );
                    };
                })(p),
                (function (t) {
                    t.fn.maxlength = function () {
                        function e() {
                            var e = parseInt(t(this).attr("maxlength"), 10);
                            t(this).val().length > e && t(this).val(t(this).val().substring(0, e));
                            var i = t(this).attr("count");
                            i && t("#".concat(i)).html(e - t(this).val().length);
                        }
                        return t(this).keyup(e).keydown(e).blur(e), t(this).blur(), t(this);
                    };
                })(p),
                (function (t) {
                    var e;
                    (e = ["assets/loading.gif"]),
                        d()(e).each(function () {
                            d()("<img />")[0].src = this;
                        }),
                        (t.fn.ajaxValidate = function (e) {
                            var i = t(this);
                            if (!i.length) return i;
                            e = t.extend({}, e);
                            t(this).after('<div class="validation" />'),
                                t(this).change(function () {
                                    t(this)
                                        .removeClass("error")
                                        .removeAttr("error")
                                        .next(".validation")
                                        .removeClass("ok")
                                        .removeClass("error")
                                        .addClass("loading")
                                        .html('<span class="message">Validating...</span>');
                                    var e = {};
                                    (e[t(this).attr("name")] = t(this).val()),
                                        t(this).attr("id") || t(this).attr("id", "input_".concat(new Date().getTime())),
                                        (e.input_id = t(this).attr("id")),
                                        t.ajax({
                                            type: "POST",
                                            url: t(this).attr("validate"),
                                            data: e,
                                            dataType: "json",
                                            success: function (e) {
                                                e.error
                                                    ? t("#".concat(e.input_id))
                                                          .addClass("error")
                                                          .attr("error", e.error)
                                                          .next(".validation")
                                                          .removeClass("loading")
                                                          .addClass("error")
                                                          .html("")
                                                          .append(t('<span class="message" />').text(e.error))
                                                    : t("#".concat(e.input_id))
                                                          .removeClass("error")
                                                          .removeAttr("error")
                                                          .next(".validation")
                                                          .removeClass("loading")
                                                          .addClass("ok")
                                                          .html("");
                                            },
                                            error: function (t) {
                                                console.log(t), console.log(t.responseText);
                                            },
                                            complete: function (t, e) {
                                                e;
                                            },
                                        });
                                });
                        }),
                        (t.fn.ajaxValidationError = function (e, i) {
                            var n = t(this);
                            if (!n.length) return n;
                            i = t.extend({}, i);
                            for (var o in e) {
                                var s = t(this).find("input[name='".concat(o, "']"));
                                s.length &&
                                    s
                                        .addClass("error")
                                        .attr("error", e[o])
                                        .next(".validation")
                                        .addClass("error")
                                        .html("")
                                        .append(t('<span class="message" />').text(e[o]));
                            }
                        });
                })(p),
                d()(document).ready(function () {
                    d()("input[validate]").ajaxValidate();
                }),
                (function (t) {
                    t.fn.tsort = function (e) {
                        var i = t(this);
                        if (!i.length) return i;
                        e = t.extend({ skip_last: 0 }, e);
                        function n(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t);
                        }
                        t(this).each(function () {
                            var i = t(this).find("tr:first").addClass("tsort_header").find("th,td"),
                                o = 0;
                            i.each(function () {
                                t(this).attr("col", o),
                                    (o += t(this).attr("colspan") ? parseInt(t(this).attr("colspan")) : 1);
                            });
                            var s = t(this).find("tr");
                            for (o = 1; o < s.length - e.skip_last; o++) t(s[o]).addClass("tsort_item").attr("row", o);
                            i.not(".no_sort")
                                .addClass("sortable")
                                .click(function () {
                                    var e = "asc";
                                    t(this).hasClass("sort") && t(this).hasClass("asc") && (e = "des");
                                    var i = t(this).closest("tr.tsort_header");
                                    i.find("th,td").removeClass("sort").removeClass("asc").removeClass("des"),
                                        t(this).addClass("sort").addClass(e);
                                    var o = t(this).closest("table").find("tr.tsort_item"),
                                        s = o.clone(!0),
                                        r = t(this).attr("col");
                                    s.sort(
                                        (function (e, i) {
                                            return (
                                                (e = parseInt(e)),
                                                (i = "asc" === i ? 1 : -1),
                                                function (o, s) {
                                                    var r = t(t(o).find("td")[e]).html().toLowerCase(),
                                                        a = t(t(s).find("td")[e]).html().toLowerCase();
                                                    return (
                                                        n(r) && n(a) && ((r = parseFloat(r)), (a = parseFloat(a))),
                                                        r < a
                                                            ? -i
                                                            : r > a
                                                              ? i
                                                              : parseInt(t(o).attr("row")) < parseInt(t(s).attr("row"))
                                                                ? -1
                                                                : 1
                                                    );
                                                }
                                            );
                                        })(r, e)
                                    );
                                    var a = 1;
                                    s.each(function () {
                                        t(this).attr("row", a), a++;
                                    }),
                                        o.remove(),
                                        s.insertAfter(i);
                                });
                        });
                    };
                })(p),
                (function (t) {
                    t.fn.dropdown = function (e) {
                        var i = t(this);
                        if (!i.length) return i;
                        e = t.extend({}, e);
                        t(this).each(function () {
                            var e = t(this);
                            t(document).click(function () {
                                e.hasClass("no_close") ? e.removeClass("no_close") : e.removeClass("open");
                            });
                        }),
                            t(this)
                                .find("a.arrow-down, > input:first-child")
                                .click(function (e) {
                                    var i = t(this).closest("div.dropdown");
                                    i.toggleClass("open"), i.hasClass("open") ? i.addClass("no_close") : t(this).blur();
                                }),
                            t(this)
                                .find("> input:first-child")
                                .focus(function () {
                                    t(this).blur();
                                }),
                            t(this)
                                .find("a.item")
                                .click(function () {
                                    var e = t(this).closest("div.dropdown");
                                    e.find("div.drop");
                                    return (
                                        e.find("> input:first-child").val(t(this).text()).blur(),
                                        e.removeClass("open"),
                                        !1
                                    );
                                }),
                            t(this)
                                .find("a.add")
                                .click(function () {
                                    var e = t(this).closest(".dropdown");
                                    return (
                                        e.find("> input:first-child").val(e.find("input[name=add]").val()).blur(),
                                        e.removeClass("open"),
                                        !1
                                    );
                                }),
                            t(this)
                                .find("input[name=add]")
                                .click(function () {
                                    return !1;
                                })
                                .keypress(function (e) {
                                    if (13 === e.which)
                                        return t(this).blur().closest("div.dropdown").find("a.add").click(), !1;
                                });
                    };
                })(p),
                (function (t) {
                    t.fn.ajaxified = function (e) {
                        var i = t(this);
                        if (!i.length) return i;
                        e = t.extend({}, e);
                        t(this).each(function () {
                            t(this).data("opt", e);
                        }),
                            t(this).submit(function () {
                                if (t(this).hasClass("submitting")) return !1;
                                t(this).addClass("submitting");
                                var e = t(this).serialize();
                                return (
                                    (e += e.length ? "&json=1" : "json=1"),
                                    t.ajax({
                                        type: "POST",
                                        url: t(this).attr("action"),
                                        data: e,
                                        dataType: "json",
                                        success: (function (t) {
                                            return function (e, i, n) {
                                                if (e.error) alert(e.error);
                                                else {
                                                    var o = t.data("opt");
                                                    o.success && o.success.call(t[0], e);
                                                }
                                            };
                                        })(t(this)),
                                        error: function (t, e, i) {
                                            console.log(t), console.log(t.responseText);
                                        },
                                        complete: (function (t) {
                                            return function (e, i) {
                                                t.removeClass("submitting");
                                            };
                                        })(t(this)),
                                    }),
                                    !1
                                );
                            });
                    };
                })(p),
                (function (t) {
                    t(document).on("click", "div.editable", function () {
                        t(this).hasClass("editing") || t(this).data("value", t(this).text());
                    }),
                        t(document).on("keydown", "div.editable", function (e) {
                            switch (e.which) {
                                case 27:
                                    t(this).text(t(this).data("value")), t(this).blur();
                                    break;
                                case 13:
                                    t(this).blur();
                            }
                        }),
                        t(document).on("blur", "div.editable", function () {
                            if ((t(this).removeClass("editing"), t(this).data("value") !== t(this).text())) {
                                t(this).addClass("saving");
                                var e = t(this).data("opt");
                                if (e.data) var i = e.data;
                                else i = {};
                                (i.json = 1),
                                    (i[e.field] = t(this).text()),
                                    t.ajax({
                                        type: "POST",
                                        url: e.url,
                                        data: i,
                                        dataType: "json",
                                        success: function () {
                                            var e = t(this);
                                            return function (t, i, n) {
                                                if (t.error) e.text(e.data("value")), alert(t.error);
                                                else {
                                                    var o = e.data("opt");
                                                    o.success && o.success.call(e[0], t);
                                                }
                                            };
                                        }.call(this),
                                        error: function (t, e, i) {
                                            console.log(t), console.log(t.responseText);
                                        },
                                        complete: function () {
                                            var e = t(this);
                                            return function (t, i) {
                                                e.removeClass("saving");
                                            };
                                        }.call(this),
                                    });
                            }
                        }),
                        (t.fn.editable = function (e) {
                            var i = t(this);
                            if (!i.length) return i;
                            e = t.extend({ url: "" }, e);
                            i.wrapInner('<div class="editable" contentEditable="true" />'),
                                i.find("div.editable").each(function () {
                                    t(this).data("opt", e);
                                });
                        });
                })(p),
                (function (t) {
                    (t.fn.getCursorPosition = function () {
                        return 0 === t(this).length ? -1 : t(this).getSelectionEnd();
                    }),
                        (t.fn.setCursorPosition = function (e) {
                            return 0 === t(this).length ? t(this) : t(this).setSelection(e, e);
                        }),
                        (t.fn.getSelection = function () {
                            if (0 === t(this).length) return -1;
                            var e = t(this).getSelectionStart(),
                                i = t(this).getSelectionEnd();
                            return t(this)[0].value.substring(e, i);
                        }),
                        (t.fn.getSelectionStart = function () {
                            if (0 === t(this).length) return -1;
                            var e = t(this)[0],
                                i = e.value.length;
                            if (void 0 !== e.selectionStart) i = e.selectionStart;
                            else if (e.createTextRange) {
                                var n = document.selection.createRange().duplicate();
                                n.moveEnd("character", e.value.length),
                                    (i = "" === n.text ? e.value.length : e.value.lastIndexOf(n.text));
                            }
                            return i;
                        }),
                        (t.fn.getSelectionEnd = function () {
                            if (0 === t(this).length) return -1;
                            var e = t(this)[0],
                                i = e.value.length;
                            if (void 0 !== e.selectionEnd) i = e.selectionEnd;
                            else if (e.createTextRange) {
                                var n = document.selection.createRange().duplicate();
                                if ((n.moveStart("character", -e.value.length), "" === n.text)) i = e.value.length;
                                else {
                                    for (; e.value.slice(0, n.text.length) !== n.text; ) n.moveStart("character", 1);
                                    i = n.text.length;
                                }
                            }
                            return i;
                        }),
                        (t.fn.setSelection = function (e, i) {
                            if (0 === t(this).length) return t(this);
                            var n = t(this)[0];
                            if (n.createTextRange) {
                                var o = n.createTextRange();
                                o.collapse(!0), o.moveEnd("character", i), o.moveStart("character", e), o.select();
                            } else n.setSelectionRange && (n.focus(), n.setSelectionRange(e, i));
                            return this;
                        });
                })(p),
                (window.object_size = f),
                (function (t) {
                    t.fn.mention = function (e) {
                        if (!t(this).length) return t(this);
                        e = t.extend({ selector: null }, e);
                        t(this).on("keyup click", e.selector, function (e) {
                            var n = t(this).getCursorPosition(),
                                o =
                                    ((l = /\S+$/.exec(this.value.slice(0, n))) ? l : "") +
                                    ((r = /^\S+/.exec(this.value.slice(n))) ? r : ""),
                                s = t(this).closest("div.comment");
                            function a(e) {
                                var i = t(this).closest("div.comment").find("div.mention div.loading");
                                for (key in e) {
                                    var n = e[key];
                                    t("<a />")
                                        .addClass("item")
                                        .attr("tag", "@".concat(n.username))
                                        .attr("href", "#")
                                        .html("@".concat(n.username))
                                        .prepend(t("<img />").addClass("avatar").attr("src", n.photo_url))
                                        .insertBefore(i);
                                }
                            }
                            if ("@" === o[0]) {
                                var c = s.find("div.mention");
                                c.find("div.error").remove(), c.show();
                                var u = o.slice(1).toLowerCase();
                                u !== c.attr("q") &&
                                    (c.attr("q", u),
                                    c.find("a.item").remove(),
                                    i[u]
                                        ? a.call(this, i[u])
                                        : (c.find("div.loading").show(),
                                          t.ajax({
                                              type: "GET",
                                              url: "/api/",
                                              data: { action: "search_connections", q: u },
                                              dataType: "json",
                                              success: (function (e) {
                                                  return function (n, o, s) {
                                                      var r = e.find("div.mention");
                                                      n.error
                                                          ? t("<div />")
                                                                .addClass("error")
                                                                .html(n.error)
                                                                .insertBefore(e.find("div.mention div.loading"))
                                                          : ((i[n.q] = n.connections),
                                                            r.attr("q") === n.q &&
                                                                (0 === f(n.connections)
                                                                    ? e.find("div.mention").hide()
                                                                    : a.call(e.find("div.mention")[0], n.connections)));
                                                  };
                                              })(s),
                                              error: (function (e) {
                                                  return function (i, n, o) {
                                                      console.log(i),
                                                          console.log(i.responseText),
                                                          t("<div />")
                                                              .addClass("error")
                                                              .html("Page error.")
                                                              .insertBefore(e.find("div.loading"));
                                                  };
                                              })(c),
                                              complete: (function (t, e) {
                                                  return function (i, n) {
                                                      t.attr("q") === e && t.find("div.loading").hide();
                                                  };
                                              })(c, u),
                                          })));
                            } else s.find("div.mention").hide();
                        }),
                            t("body").on("click", "div.mention a.item", function () {
                                var e = t(this).closest("div.comment"),
                                    i = e.find("textarea[name=comment]").focus(),
                                    n = i.getCursorPosition(),
                                    o = /\S+$/.exec(i.val().slice(0, n)),
                                    s = n - (o = o ? "".concat(o) : "").length,
                                    r = /^\S+/.exec(i.val().slice(n)),
                                    a = n + (r = r ? "".concat(r) : "").length;
                                return (
                                    i.val(i.val().slice(0, s) + t(this).attr("tag") + i.val().slice(a)),
                                    i.setCursorPosition(s + t(this).attr("tag").length),
                                    e.find("div.mention").hide(),
                                    !1
                                );
                            });
                        var i = {};
                        return t(this);
                    };
                })(p),
                (function (t) {
                    t.fn.multiselect = function (e) {
                        if (!t(this).length) return t(this);
                        e = t.extend({}, e);
                        t(this).on("click", "a.item", function () {
                            return (
                                t(this).hasClass("checked")
                                    ? (t(this).removeClass("checked"),
                                      t(this).find("input[type=checkbox]").removeAttr("checked"))
                                    : (t(this).addClass("checked"),
                                      t(this).find("input[type=checkbox]").attr("checked", "checked")),
                                !1
                            );
                        }),
                            t(this).on("click", "a.item.all", function () {
                                return (
                                    t(this).hasClass("checked")
                                        ? t(this)
                                              .closest("fieldset")
                                              .find("a.item")
                                              .addClass("checked")
                                              .find("input[type=checkbox")
                                              .attr("checked", "checked")
                                        : t(this)
                                              .closest("fieldset")
                                              .find("a.item")
                                              .removeClass("checked")
                                              .find("input[type=checkbox")
                                              .removeAttr("checked"),
                                    !1
                                );
                            });
                    };
                })(p),
                d()(document).ready(function () {
                    d()("input.date").datepicker({
                        changeMonth: !0,
                        changeYear: !0,
                        dateFormat: "yy-mm-dd",
                        yearRange: "-100:+0",
                    }),
                        d()("a[track],button[track]").click(function (t) {
                            d().post("/view-tracker", {
                                page: ""
                                    .concat(window.location.pathname + window.location.search, "#")
                                    .concat(d()(this).attr("track")),
                                referrer: document.referrer,
                            });
                        });
                }),
                (window.UpdateForm = function (t, e) {
                    var i = d()("#".concat(t));
                    for (var n in e)
                        i.find("input,textarea").filter("[name=".concat(n, "]")).val(e[n]).removeClass("empty"),
                            i.find("a.input[name=".concat(n, "]")).text(e[n]).removeClass("empty");
                }),
                (window.SubmitForm = function (t) {
                    d()("#".concat(t)).submit();
                }),
                (function (t, e, i, n) {
                    var o = t(e);
                    (t.fn.lazyload = function (s) {
                        var r,
                            a = this,
                            l = {
                                threshold: 0,
                                failure_limit: 0,
                                event: "scroll",
                                effect: "show",
                                container: e,
                                data_attribute: "original",
                                skip_invisible: !0,
                                appear: null,
                                load: null,
                                placeholder:
                                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
                            };
                        function c() {
                            var e = 0;
                            a.each(function () {
                                var i = t(this);
                                if (!l.skip_invisible || i.is(":visible"))
                                    if (t.abovethetop(this, l) || t.leftofbegin(this, l));
                                    else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
                                        if (++e > l.failure_limit) return !1;
                                    } else i.trigger("appear"), (e = 0);
                            });
                        }
                        return (
                            s &&
                                (n !== s.failurelimit && ((s.failure_limit = s.failurelimit), delete s.failurelimit),
                                n !== s.effectspeed && ((s.effect_speed = s.effectspeed), delete s.effectspeed),
                                t.extend(l, s)),
                            (r = l.container === n || l.container === e ? o : t(l.container)),
                            0 === l.event.indexOf("scroll") &&
                                r.bind(l.event, function () {
                                    return c();
                                }),
                            this.each(function () {
                                var e = this,
                                    i = t(e);
                                (e.loaded = !1),
                                    (i.attr("src") !== n && !1 !== i.attr("src")) ||
                                        (i.is("img") && i.attr("src", l.placeholder)),
                                    i.one("appear", function () {
                                        if (!this.loaded) {
                                            if (l.appear) {
                                                var n = a.length;
                                                l.appear.call(e, n, l);
                                            }
                                            t("<img />")
                                                .bind("load", function () {
                                                    var n = i.attr("data-".concat(l.data_attribute));
                                                    i.hide(),
                                                        i.is("img")
                                                            ? i.attr("src", n)
                                                            : i.css("background-image", "url('".concat(n, "')")),
                                                        i[l.effect](l.effect_speed),
                                                        (e.loaded = !0);
                                                    var o = t.grep(a, function (t) {
                                                        return !t.loaded;
                                                    });
                                                    if (((a = t(o)), l.load)) {
                                                        var s = a.length;
                                                        l.load.call(e, s, l);
                                                    }
                                                })
                                                .attr("src", i.attr("data-".concat(l.data_attribute)));
                                        }
                                    }),
                                    0 !== l.event.indexOf("scroll") &&
                                        i.bind(l.event, function () {
                                            e.loaded || i.trigger("appear");
                                        });
                            }),
                            o.bind("resize", function () {
                                c();
                            }),
                            /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
                                o.bind("pageshow", function (e) {
                                    e.originalEvent &&
                                        e.originalEvent.persisted &&
                                        a.each(function () {
                                            t(this).trigger("appear");
                                        });
                                }),
                            t(i).ready(function () {
                                c();
                            }),
                            this
                        );
                    }),
                        (t.belowthefold = function (i, s) {
                            return (
                                (s.container === n || s.container === e
                                    ? (e.innerHeight ? e.innerHeight : o.height()) + o.scrollTop()
                                    : t(s.container).offset().top + t(s.container).height()) <=
                                t(i).offset().top - s.threshold
                            );
                        }),
                        (t.rightoffold = function (i, s) {
                            return (
                                (s.container === n || s.container === e
                                    ? o.width() + o.scrollLeft()
                                    : t(s.container).offset().left + t(s.container).width()) <=
                                t(i).offset().left - s.threshold
                            );
                        }),
                        (t.abovethetop = function (i, s) {
                            return (
                                (s.container === n || s.container === e
                                    ? o.scrollTop()
                                    : t(s.container).offset().top) >=
                                t(i).offset().top + s.threshold + t(i).height()
                            );
                        }),
                        (t.leftofbegin = function (i, s) {
                            return (
                                (s.container === n || s.container === e
                                    ? o.scrollLeft()
                                    : t(s.container).offset().left) >=
                                t(i).offset().left + s.threshold + t(i).width()
                            );
                        }),
                        (t.inviewport = function (e, i) {
                            return !(
                                t.rightoffold(e, i) ||
                                t.leftofbegin(e, i) ||
                                t.belowthefold(e, i) ||
                                t.abovethetop(e, i)
                            );
                        }),
                        t.extend(t.expr[":"], {
                            "below-the-fold": function (e) {
                                return t.belowthefold(e, { threshold: 0 });
                            },
                            "above-the-top": function (e) {
                                return !t.belowthefold(e, { threshold: 0 });
                            },
                            "right-of-screen": function (e) {
                                return t.rightoffold(e, { threshold: 0 });
                            },
                            "left-of-screen": function (e) {
                                return !t.rightoffold(e, { threshold: 0 });
                            },
                            "in-viewport": function (e) {
                                return t.inviewport(e, { threshold: 0 });
                            },
                            "above-the-fold": function (e) {
                                return !t.belowthefold(e, { threshold: 0 });
                            },
                            "right-of-fold": function (e) {
                                return t.rightoffold(e, { threshold: 0 });
                            },
                            "left-of-fold": function (e) {
                                return !t.rightoffold(e, { threshold: 0 });
                            },
                        });
                })(p, window, document),
                (window.track = function (t, e) {
                    var i,
                        n = d()("<a>", { href: t })[0],
                        o = n.pathname + n.search + e;
                    (i = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")).open(
                        "POST",
                        "/view-tracker",
                        !0
                    ),
                        i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                        i.send(
                            "page="
                                .concat(encodeURIComponent(o), "&referrer=")
                                .concat(encodeURIComponent(window.location.pathname + window.location.search))
                        ),
                        ga("send", "pageview", o);
                }),
                (window.showErrors = function (t) {
                    alert(
                        Object.keys(t)
                            .map(function (e) {
                                return t[e];
                            })
                            .join(". ")
                    );
                }),
                d()(document).ready(function () {
                    d()("img.lazy").lazyload({ threshold: 300 });
                }),
                d()(document).ready(function () {
                    d()("table.records a.icon.delete").click(function () {
                        var t = d()(this).closest("tr");
                        t.addClass("deleting");
                        var e = t.closest("table.records"),
                            i = e.attr("delete") ? e.attr("delete") : "Confirm deleting this row?";
                        if (!confirm(i)) return t.removeClass("deleting"), !1;
                        d()("#loading").length ||
                            d()('<div id="loading">Loading...</div>').dialog({
                                autoOpen: !1,
                                modal: !0,
                                dialogClass: "no_title_close",
                                resizable: !1,
                                width: "auto",
                                height: "auto",
                                minHeight: 0,
                                closeOnEscape: !1,
                            }),
                            d()("#loading").dialog("open");
                        var n = { action: "delete" },
                            o = d()(this).closest("table.records").attr("key"),
                            s = t.attr("idx");
                        return (
                            (n[o] = s),
                            d().ajax({
                                type: "POST",
                                url: "",
                                data: n,
                                dataType: "json",
                                success: function (t, e, i) {
                                    if (t.error) alert(t.error);
                                    else {
                                        d()("table.records tr[idx=".concat(t[o], "]")).remove();
                                        for (var n = d()("table.records tr[idx]"), s = 0; s < n.length; s++)
                                            d()(n[s])
                                                .removeClass("odd")
                                                .removeClass("even")
                                                .addClass(s % 2 ? "even" : "odd");
                                    }
                                },
                                error: function (t, e, i) {
                                    console.log(t), alert(t.responseText);
                                },
                                complete: function (t, e) {
                                    d()("#loading").dialog("close"),
                                        d()("table.records tr[idx].deleting").removeClass("deleting");
                                },
                            }),
                            !1
                        );
                    });
                }),
                "function" != typeof Object.create &&
                    (Object.create = function (t) {
                        function e() {}
                        return (e.prototype = t), new e();
                    }),
                (function (t, e, i, n) {
                    var s = {
                        _positionClasses: [
                            "bottom-left",
                            "bottom-right",
                            "top-right",
                            "top-left",
                            "bottom-center",
                            "top-center",
                            "mid-center",
                        ],
                        _defaultIcons: ["success", "error", "info", "warning"],
                        init: function (e, i) {
                            this.prepareOptions(e, t.toast.options), this.process();
                        },
                        prepareOptions: function (e, i) {
                            var n = {};
                            "string" == typeof e || e instanceof Array ? (n.text = e) : (n = e),
                                (this.options = t.extend({}, i, n));
                        },
                        process: function () {
                            this.setup(), this.addToDom(), this.position(), this.bindToast(), this.animate();
                        },
                        setup: function () {
                            var e = "";
                            if (
                                ((this._toastEl = this._toastEl || t("<div></div>", { class: "jq-toast-single" })),
                                (e += '<span class="jq-toast-loader"></span>'),
                                this.options.allowToastClose && (e += '<span class="close-jq-toast-single">×</span>'),
                                this.options.text instanceof Array)
                            ) {
                                this.options.heading &&
                                    (e += '<h2 class="jq-toast-heading">'.concat(this.options.heading, "</h2>")),
                                    (e += '<ul class="jq-toast-ul">');
                                for (var i = 0; i < this.options.text.length; i++)
                                    e += '<li class="jq-toast-li" id="jq-toast-item-'
                                        .concat(i, '">')
                                        .concat(this.options.text[i], "</li>");
                                e += "</ul>";
                            } else
                                this.options.heading &&
                                    (e += '<h2 class="jq-toast-heading">'.concat(this.options.heading, "</h2>")),
                                    (e += this.options.text);
                            this._toastEl.html(e),
                                !1 !== this.options.bgColor &&
                                    this._toastEl.css("background-color", this.options.bgColor),
                                !1 !== this.options.textColor && this._toastEl.css("color", this.options.textColor),
                                this.options.textAlign && this._toastEl.css("text-align", this.options.textAlign),
                                !1 !== this.options.icon &&
                                    (this._toastEl.addClass("jq-has-icon"),
                                    -1 !== t.inArray(this.options.icon, this._defaultIcons) &&
                                        this._toastEl.addClass("jq-icon-".concat(this.options.icon)));
                        },
                        position: function () {
                            "string" == typeof this.options.position &&
                            -1 !== t.inArray(this.options.position, this._positionClasses)
                                ? "bottom-center" === this.options.position
                                    ? this._container.css({
                                          left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                                          bottom: 60,
                                      })
                                    : "top-center" === this.options.position
                                      ? this._container.css({
                                            left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                                            top: 20,
                                        })
                                      : "mid-center" === this.options.position
                                        ? this._container.css({
                                              left: t(e).outerWidth() / 2 - this._container.outerWidth() / 2,
                                              top: t(e).outerHeight() / 2 - this._container.outerHeight() / 2,
                                          })
                                        : this._container.addClass(this.options.position)
                                : "object" === o(this.options.position)
                                  ? this._container.css({
                                        top: this.options.position.top ? this.options.position.top : "auto",
                                        bottom: this.options.position.bottom ? this.options.position.bottom : "auto",
                                        left: this.options.position.left ? this.options.position.left : "auto",
                                        right: this.options.position.right ? this.options.position.right : "auto",
                                    })
                                  : this._container.addClass("bottom-left");
                        },
                        bindToast: function () {
                            var t = this;
                            this._toastEl.on("afterShown", function () {
                                t.processLoader();
                            }),
                                this._toastEl.find(".close-jq-toast-single").on("click", function (e) {
                                    e.preventDefault(),
                                        "fade" === t.options.showHideTransition
                                            ? (t._toastEl.trigger("beforeHide"),
                                              t._toastEl.fadeOut(function () {
                                                  t._toastEl.trigger("afterHidden");
                                              }))
                                            : "slide" === t.options.showHideTransition
                                              ? (t._toastEl.trigger("beforeHide"),
                                                t._toastEl.slideUp(function () {
                                                    t._toastEl.trigger("afterHidden");
                                                }))
                                              : (t._toastEl.trigger("beforeHide"),
                                                t._toastEl.hide(function () {
                                                    t._toastEl.trigger("afterHidden");
                                                }));
                                }),
                                "function" == typeof this.options.beforeShow &&
                                    this._toastEl.on("beforeShow", function () {
                                        t.options.beforeShow(t._toastEl);
                                    }),
                                "function" == typeof this.options.afterShown &&
                                    this._toastEl.on("afterShown", function () {
                                        t.options.afterShown(t._toastEl);
                                    }),
                                "function" == typeof this.options.beforeHide &&
                                    this._toastEl.on("beforeHide", function () {
                                        t.options.beforeHide(t._toastEl);
                                    }),
                                "function" == typeof this.options.afterHidden &&
                                    this._toastEl.on("afterHidden", function () {
                                        t.options.afterHidden(t._toastEl);
                                    }),
                                "function" == typeof this.options.onClick &&
                                    this._toastEl.on("click", function () {
                                        t.options.onClick(t._toastEl);
                                    });
                        },
                        addToDom: function () {
                            var e = t(".jq-toast-wrap");
                            if (
                                (0 === e.length
                                    ? ((e = t("<div></div>", { class: "jq-toast-wrap" })), t("body").append(e))
                                    : (this.options.stack && !isNaN(parseInt(this.options.stack, 10))) || e.empty(),
                                e.find(".jq-toast-single:hidden").remove(),
                                e.append(this._toastEl),
                                this.options.stack && !isNaN(parseInt(this.options.stack), 10))
                            ) {
                                var i = e.find(".jq-toast-single").length - this.options.stack;
                                i > 0 && t(".jq-toast-wrap").find(".jq-toast-single").slice(0, i).remove();
                            }
                            this._container = e;
                        },
                        canAutoHide: function () {
                            return !1 !== this.options.hideAfter && !isNaN(parseInt(this.options.hideAfter, 10));
                        },
                        processLoader: function () {
                            if (!this.canAutoHide() || !1 === this.options.loader) return !1;
                            var t = this._toastEl.find(".jq-toast-loader"),
                                e = "".concat((this.options.hideAfter - 400) / 1e3, "s"),
                                i = this.options.loaderBg,
                                n = t.attr("style") || "";
                            (n = n.substring(0, n.indexOf("-webkit-transition"))),
                                (n += "-webkit-transition: width "
                                    .concat(e, " ease-in;                       -o-transition: width ")
                                    .concat(e, " ease-in;                       transition: width ")
                                    .concat(e, " ease-in;                       background-color: ")
                                    .concat(i, ";")),
                                t.attr("style", n).addClass("jq-toast-loaded");
                        },
                        animate: function () {
                            var t = this;
                            if (
                                (this._toastEl.hide(),
                                this._toastEl.trigger("beforeShow"),
                                "fade" === this.options.showHideTransition.toLowerCase()
                                    ? this._toastEl.fadeIn(function () {
                                          t._toastEl.trigger("afterShown");
                                      })
                                    : "slide" === this.options.showHideTransition.toLowerCase()
                                      ? this._toastEl.slideDown(function () {
                                            t._toastEl.trigger("afterShown");
                                        })
                                      : this._toastEl.show(function () {
                                            t._toastEl.trigger("afterShown");
                                        }),
                                this.canAutoHide())
                            ) {
                                t = this;
                                e.setTimeout(function () {
                                    "fade" === t.options.showHideTransition.toLowerCase()
                                        ? (t._toastEl.trigger("beforeHide"),
                                          t._toastEl.fadeOut(function () {
                                              t._toastEl.trigger("afterHidden");
                                          }))
                                        : "slide" === t.options.showHideTransition.toLowerCase()
                                          ? (t._toastEl.trigger("beforeHide"),
                                            t._toastEl.slideUp(function () {
                                                t._toastEl.trigger("afterHidden");
                                            }))
                                          : (t._toastEl.trigger("beforeHide"),
                                            t._toastEl.hide(function () {
                                                t._toastEl.trigger("afterHidden");
                                            }));
                                }, this.options.hideAfter);
                            }
                        },
                        reset: function (e) {
                            "all" === e ? t(".jq-toast-wrap").remove() : this._toastEl.remove();
                        },
                        update: function (t) {
                            this.prepareOptions(t, this.options), this.setup(), this.bindToast();
                        },
                        close: function () {
                            this._toastEl.find(".close-jq-toast-single").click();
                        },
                    };
                    (t.toast = function (t) {
                        var e = Object.create(s);
                        return (
                            e.init(t, this),
                            {
                                reset: function (t) {
                                    e.reset(t);
                                },
                                update: function (t) {
                                    e.update(t);
                                },
                                close: function () {
                                    e.close();
                                },
                            }
                        );
                    }),
                        (t.toast.options = {
                            text: "",
                            heading: "",
                            showHideTransition: "fade",
                            allowToastClose: !1,
                            hideAfter: 5e3,
                            loader: !1,
                            loaderBg: "#9EC600",
                            stack: 5,
                            position: "bottom-center",
                            bgColor: !1,
                            textColor: !1,
                            textAlign: "center",
                            icon: !1,
                            beforeShow: function () {},
                            afterShown: function () {},
                            beforeHide: function () {},
                            afterHidden: function () {},
                            onClick: function () {},
                        });
                })(p, window, document),
                (window.redirectWithPost = function (t) {
                    d()("<form />")
                        .attr("method", "post")
                        .attr("action", t)
                        .append(d()('<input type="hidden" name="redirect" value="1" />'))
                        .appendTo("body")
                        .submit();
                }),
                (window.implode = function (t, e) {
                    var i,
                        n = "";
                    for (i in e) e.hasOwnProperty(i) && ("" !== n && (n += t), (n += e[i]));
                    return n;
                }),
                (window.postWithForm = function (t, e, i) {
                    void 0 === i && (i = "body"), d()(i).addClass("loading");
                    var n = d()("<form />").attr("method", "post").attr("action", t);
                    for (var o in e) {
                        var s = d()('<input type="hidden" />').attr("name", o).val(e[o]);
                        n.append(s);
                    }
                    n.appendTo("body").submit();
                }),
                d()(document).ready(function () {
                    d()("form[csrf_token]").each(function () {
                        d()(this).append(
                            d()('<input type="hidden" />').attr("name", "csrf_token").val(d()(this).attr("csrf_token"))
                        );
                    });
                }),
                d()(function () {
                    d()(".country .close").click(function () {
                        return (
                            d()("#h ul.link div.dropdown.country").css("display", "none"),
                            d().cookie("disable_zone_suggestion", 1, { expires: 365, path: "/" }),
                            !1
                        );
                    });
                }),
                window.isMobile ||
                    d()(function () {
                        var t = d()("#psignin").dialog({
                                modal: !0,
                                dialogClass: "no_title",
                                closeOnEscape: !0,
                                autoOpen: !1,
                                width: "480px",
                                resizable: !1,
                            }),
                            e = d()("#psignup").dialog({
                                modal: !0,
                                dialogClass: "no_title",
                                closeOnEscape: !0,
                                autoOpen: !1,
                                width: "480px",
                                resizable: !1,
                            });
                        d()("#h a.signin").click(function () {
                            return (
                                t.dialog("open"),
                                d()(".ui-widget-overlay").click(function () {
                                    t.dialog("close");
                                }),
                                !1
                            );
                        }),
                            d()("#h a.signup").click(function () {
                                return (
                                    e.dialog("open"),
                                    d()(".ui-widget-overlay").click(function () {
                                        e.dialog("close");
                                    }),
                                    !1
                                );
                            });
                    }),
                window.isMobile &&
                    (d()(function () {
                        d()("input[type=text], input[type=password], textarea")
                            .focus(function () {
                                d()("#h, #f").hide();
                            })
                            .blur(function () {
                                d()("#h, #f").show();
                            }),
                            d()(
                                "#h ul.link a.more.profile, #h ul.link li.more a.more, #h ul.link.browse a.more, #h ul.link li.more a.show-zone-switching"
                            ).click(function () {
                                var t = d()(this).closest("li");
                                return (
                                    t.hasClass("open")
                                        ? t.removeClass("open")
                                        : (d()(
                                              "#h ul.link a.more.profile, #h ul.link li.more a.more, #h ul.link.browse a.more"
                                          )
                                              .closest("li")
                                              .removeClass("open"),
                                          t.addClass("open")),
                                    !1
                                );
                            });
                    }),
                    d()(function () {
                        var t = d()(window).scrollTop();
                        d()(window).scroll(function () {
                            var e = d()(this).scrollTop(),
                                i = e - t;
                            t = e;
                            var n = d()("#h"),
                                o = parseInt(n.css("top"));
                            (o -= i) < -n.height() && (o = -n.height()),
                                o > 0 && (o = 0),
                                n.css("top", "".concat(o, "px"));
                        });
                    })),
                d()(function () {
                    d()(document).on(
                        "click",
                        "button.icon-save",
                        e(
                            u().mark(function t() {
                                var e, i, n, o, s, r, a, l, c, h, p;
                                return u().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (!(e = d()(this)).hasClass("signin")) {
                                                        t.next = 5;
                                                        break;
                                                    }
                                                    return (
                                                        (i = e.attr("href")),
                                                        (window.location.href = i),
                                                        t.abrupt("return")
                                                    );
                                                case 5:
                                                    if (
                                                        ((n = e.hasClass("saved")),
                                                        (o = e.attr("product_id")),
                                                        (s = d()("button.icon-save[product_id=".concat(o, "]"))),
                                                        !n)
                                                    ) {
                                                        t.next = 18;
                                                        break;
                                                    }
                                                    return (
                                                        (r = e.attr("save_id")),
                                                        s.removeClass("saved"),
                                                        (a = new URLSearchParams({ save_id: r, action: "unsave" })),
                                                        (t.next = 14),
                                                        fetch("/api/save.php", {
                                                            method: "POST",
                                                            body: a.toString(),
                                                            headers: {
                                                                "Content-Type":
                                                                    "application/x-www-form-urlencoded; charset=utf-8",
                                                            },
                                                        })
                                                    );
                                                case 14:
                                                    t.sent.ok || s.addClass("saved"), (t.next = 32);
                                                    break;
                                                case 18:
                                                    return (
                                                        s.addClass("saved"),
                                                        (l = e.attr("product_id")),
                                                        (c = new URLSearchParams({ action: "save", product_id: l })),
                                                        (t.next = 23),
                                                        fetch("/api/save.php", {
                                                            method: "POST",
                                                            body: c.toString(),
                                                            headers: {
                                                                "Content-Type":
                                                                    "application/x-www-form-urlencoded; charset=utf-8",
                                                            },
                                                        })
                                                    );
                                                case 23:
                                                    if ((h = t.sent).ok) {
                                                        t.next = 28;
                                                        break;
                                                    }
                                                    s.removeClass("saved"), (t.next = 32);
                                                    break;
                                                case 28:
                                                    return (t.next = 30), h.json();
                                                case 30:
                                                    (p = t.sent), s.attr("save_id", p.save_id);
                                                case 32:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this
                                );
                            })
                        )
                    );
                }),
                d()(function () {
                    d()(document).on(
                        "click",
                        "button.favorite[tag]",
                        e(
                            u().mark(function t() {
                                var e, i, n, o, s, r;
                                return u().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (((e = d()(this)), !e.hasClass("signin"))) {
                                                        t.next = 8;
                                                        break;
                                                    }
                                                    return (
                                                        (i =
                                                            window.location.pathname +
                                                            window.location.search +
                                                            window.location.hash),
                                                        (n = new URLSearchParams({ ret: i })),
                                                        (o = "/signin?" + n.toString()),
                                                        (window.location.href = o),
                                                        t.abrupt("return", !1)
                                                    );
                                                case 8:
                                                    if (((s = e.hasClass("is-favorite")), (r = e.attr("tag")), !s)) {
                                                        t.next = 23;
                                                        break;
                                                    }
                                                    return (
                                                        e.removeClass("is-favorite"), (t.prev = 12), (t.next = 15), _(r)
                                                    );
                                                case 15:
                                                    t.next = 21;
                                                    break;
                                                case 17:
                                                    (t.prev = 17),
                                                        (t.t0 = t.catch(12)),
                                                        alert(t.t0),
                                                        e.addClass("is-favorite");
                                                case 21:
                                                    t.next = 33;
                                                    break;
                                                case 23:
                                                    return (
                                                        e.addClass("is-favorite"), (t.prev = 24), (t.next = 27), y(r)
                                                    );
                                                case 27:
                                                    t.next = 33;
                                                    break;
                                                case 29:
                                                    (t.prev = 29),
                                                        (t.t1 = t.catch(24)),
                                                        alert(t.t1),
                                                        e.removeClass("is-favorite");
                                                case 33:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this,
                                    [
                                        [12, 17],
                                        [24, 29],
                                    ]
                                );
                            })
                        )
                    );
                });
        })(),
            (main = n);
    })();
}