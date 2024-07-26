Date.now = Date.now || (() => +new Date());

(() => {
    let lastTime = 0;
    const vendors = ["ms", "moz", "webkit", "o"];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[`{vendors[x]}RequestAnimationFrame`];
        window.cancelAnimationFrame = window[`{vendors[x]}CancelAnimationFrame`] || window[`{vendors[x]}CancelRequestAnimationFrame`]
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = (callback) => {
            const currTime = (new Date).getTime();
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(() => {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        }
        ;
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = (id) => {
            clearTimeout(id)
        };
    }
)();

window.tcYoutubeApiInitiated = false;
window.onYouTubeIframeAPIReady = () => {
    window.tcYoutubeApiInitiated = true;
    const event = new Event("TCYoutubeReady", {
        bubbles: true,
        cancelable: false
    })
    window.dispatchEvent(event)
};

(function() {
    var scrollHandler, windowReference = this;

    function getType(a) {
        if (a === null) return "null";
        
        var type = typeof a;
        
        if (type === "object") {
            if (Array.isArray(a)) return "array";
            if (a instanceof Object) return type;

            const toString = Object.prototype.toString.call(a);

            if (toString === "[object Window]") return "object";
            if (toString === "[object Array]") return "array";
            if (toString === "[object Function]") return "function"
            } else if ("function" == type && "undefined" == typeof a.call)
                return "object";
        return type;
    }

    function aa(a) {
        var b = getType(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function stringCheck(a) {
        return "string" == typeof a
    }
    function p(a) {
        return "number" == typeof a
    }
    function ba(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function da(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function q(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return q.apply(null, arguments)
    }
    ;function r(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.X = !1
    }
    r.prototype.stopPropagation = function() {
        this.X = !0
    }
    ;
    r.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var t;
    
    var parseVersion = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    function compareValues(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var functionForEach = Array.prototype.indexOf ? function(array, searchElement, fromIndex) {
        return Array.prototype.indexOf.call(array, searchElement, fromIndex)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (stringCheck(a))
            return stringCheck(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , forEachElement = Array.prototype.forEach ? function(array, callback, thisArg) {
        Array.prototype.forEach.call(array, callback, thisArg)
    }
    : function(a, b, c) {
        for (var d = a.length, f = stringCheck(a) ? a.split("") : a, e = 0; e < d; e++)
            e in f && b.call(c, f[e], e, a)
    }
      , fa = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, f = [], e = 0, g = stringCheck(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in g) {
                var W = g[k];
                b.call(c, W, k, a) && (f[e++] = W)
            }
        return f
    }
    ;
    function ha(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function ia(a, b) {
        a.sort(b || ja)
    }
    function ja(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    
    var navigatorUserAgent;
    a: {
            var navigatorObject = windowReference.navigator;
            if (navigatorObject) {
                var userAgentString = navigatorObject.userAgent;
                if (userAgentString) {
                    navigatorUserAgent = userAgentString;
                    break a
                }
            }
        }
        navigatorUserAgent = ""
    
    function ma(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    ;function y(a) {
        y[" "](a);
        return a
    }
    y[" "] = function() {}
    ;
    function compareVersion(version, comparisonFunction) {
        var versionCache = versionCacheMap;
        return Object.prototype.hasOwnProperty.call(versionCache, version) ? versionCache[version] : versionCache[version] = comparisonFunction(version)
    };
    
    var isOpera = -1 != navigatorUserAgent.indexOf("Opera")
      , isTrident = -1 != navigatorUserAgent.indexOf("Trident") || -1 != navigatorUserAgent.indexOf("MSIE")
      , isEdge = -1 != navigatorUserAgent.indexOf("Edge")
      , isGecko = -1 != navigatorUserAgent.indexOf("Gecko") && !(-1 != navigatorUserAgent.toLowerCase().indexOf("webkit") && -1 == navigatorUserAgent.indexOf("Edge")) && !(-1 != navigatorUserAgent.indexOf("Trident") || -1 != navigatorUserAgent.indexOf("MSIE")) && -1 == navigatorUserAgent.indexOf("Edge")
      , isWebKit = -1 != navigatorUserAgent.toLowerCase().indexOf("webkit") && -1 == navigatorUserAgent.indexOf("Edge");
    
    function placeholder2() {
        var a = windowReference.document;
        return a ? a.documentMode : void 0
    }
    var placeholder1;
    a: {
        var D = ""
          , E = function() {
            var a = navigatorUserAgent;
            if (isGecko)
                return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (isEdge)
                return /Edge\/([\d\.]+)/.exec(a);
            if (isTrident)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (isWebKit)
                return /WebKit\/(\S+)/.exec(a);
            if (isOpera)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        E && (D = E ? E[1] : "");
        if (isTrident) {
            var sa = placeholder2();
            if (null != sa && sa > parseFloat(D)) {
                placeholder1 = String(sa);
                break a
            }
        }
        placeholder1 = D
    }

    var versionCacheMap = {};

    function checkVersion(version) {
        return compareVersion(version, function() {
            for (var comparison = 0, userAgentVersion = parseVersion(String(placeholder1)).split("."), specifiedVersion = parseVersion(String(version)).split("."), f = Math.max(userAgentVersion.length, specifiedVersion.length), i = 0; 0 == comparison && i < f; i++) {
                var userAgentPart = userAgentVersion[i] || ""
                  , specifiedPart = specifiedVersion[i] || "";
                do {
                    userAgentPart = /(\d*)(\D*)(.*)/.exec(userAgentPart) || ["", "", "", ""];
                    specifiedPart = /(\d*)(\D*)(.*)/.exec(specifiedPart) || ["", "", "", ""];
                    if (0 == userAgentPart[0].length && 0 == specifiedPart[0].length)
                        break;
                    comparison = compareValues(0 == userAgentPart[1].length ? 0 : parseInt(userAgentPart[1], 10), 0 == specifiedPart[1].length ? 0 : parseInt(specifiedPart[1], 10)) || compareValues(0 == userAgentPart[2].length, 0 == specifiedPart[2].length) || compareValues(userAgentPart[2], specifiedPart[2]);
                    userAgentPart = userAgentPart[3];
                    specifiedPart = specifiedPart[3]
                } while (0 == comparison)
            }
            return 0 <= comparison
        })
    }
    var ta = windowReference.document
      , ua = ta && isTrident ? placeholder2() || ("CSS1Compat" == ta.compatMode ? parseInt(placeholder1, 10) : 5) : void 0;
    var va = !isTrident || 9 <= Number(ua)
      , wa = isTrident && !checkVersion("9");
    !isWebKit || checkVersion("528");
    isGecko && checkVersion("1.9b") || isTrident && checkVersion("8") || isOpera && checkVersion("9.5") || isWebKit && checkVersion("528");
    isGecko && !checkVersion("8") || isTrident && checkVersion("9");
    function G(a, b) {
        r.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.v = this.state = null;
        a && this.a(a, b)
    }
    (function() {
        function a() {}
        a.prototype = r.prototype;
        G.pa = r.prototype;
        G.prototype = new a;
        G.prototype.constructor = G;
        G.Fa = function(a, c, d) {
            for (var b = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                b[e - 2] = arguments[e];
            return r.prototype[c].apply(a, b)
        }
    }
    )();
    G.prototype.a = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var f = a.relatedTarget;
        if (f) {
            if (isGecko) {
                var e;
                a: {
                    try {
                        y(f.nodeName);
                        e = !0;
                        break a
                    } catch (g) {}
                    e = !1
                }
                e || (f = null)
            }
        } else
            "mouseover" == c ? f = a.fromElement : "mouseout" == c && (f = a.toElement);
        this.relatedTarget = f;
        null === d ? (this.offsetX = isWebKit || void 0 !== a.offsetX ? a.offsetX : a.layerX,
        this.offsetY = isWebKit || void 0 !== a.offsetY ? a.offsetY : a.layerY,
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.v = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    G.prototype.stopPropagation = function() {
        G.pa.stopPropagation.call(this);
        this.v.stopPropagation ? this.v.stopPropagation() : this.v.cancelBubble = !0
    }
    ;
    G.prototype.preventDefault = function() {
        G.pa.preventDefault.call(this);
        var a = this.v;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        wa)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var xa = "closure_listenable_" + (1E6 * Math.random() | 0)
      , ya = 0;
    function za(a, b, c, d, f) {
        this.listener = a;
        this.I = null;
        this.src = b;
        this.type = c;
        this.F = !!d;
        this.P = f;
        this.key = ++ya;
        this.w = this.M = !1
    }
    function Aa(a) {
        a.w = !0;
        a.listener = null;
        a.I = null;
        a.src = null;
        a.P = null
    }
    ;function H(a) {
        this.src = a;
        this.b = {};
        this.K = 0
    }
    H.prototype.add = function(a, b, c, d, f) {
        var e = a.toString();
        a = this.b[e];
        a || (a = this.b[e] = [],
        this.K++);
        var g = Ba(a, b, d, f);
        -1 < g ? (b = a[g],
        c || (b.M = !1)) : (b = new za(b,this.src,e,!!d,f),
        b.M = c,
        a.push(b));
        return b
    }
    ;
    H.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.b))
            return !1;
        var f = this.b[a];
        b = Ba(f, b, c, d);
        return -1 < b ? (Aa(f[b]),
        Array.prototype.splice.call(f, b, 1),
        0 == f.length && (delete this.b[a],
        this.K--),
        !0) : !1
    }
    ;
    function Ca(a, b) {
        var c = b.type;
        if (c in a.b) {
            var d = a.b[c], f = functionForEach(d, b), e;
            (e = 0 <= f) && Array.prototype.splice.call(d, f, 1);
            e && (Aa(b),
            0 == a.b[c].length && (delete a.b[c],
            a.K--))
        }
    }
    H.prototype.hasListener = function(a, b) {
        var c = void 0 !== a
          , d = c ? a.toString() : ""
          , f = void 0 !== b;
        return ma(this.b, function(a) {
            for (var e = 0; e < a.length; ++e)
                if (!(c && a[e].type != d || f && a[e].F != b))
                    return !0;
            return !1
        })
    }
    ;
    function Ba(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var e = a[f];
            if (!e.w && e.listener == b && e.F == !!c && e.P == d)
                return f
        }
        return -1
    }
    ;var Da = "closure_lm_" + (1E6 * Math.random() | 0)
      , Ea = {}
      , Fa = 0;
    function I(a, b, c, d, f) {
        if ("array" == getType(b))
            for (var e = 0; e < b.length; e++)
                I(a, b[e], c, d, f);
        else if (c = Ga(c),
        a && a[xa])
            a.ta.add(String(b), c, !1, d, f);
        else {
            if (!b)
                throw Error("Invalid event type");
            var e = !!d
              , g = Ha(a);
            g || (a[Da] = g = new H(a));
            c = g.add(b, c, !1, d, f);
            if (!c.I) {
                d = Ia();
                c.I = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener)
                    a.addEventListener(b.toString(), d, e);
                else if (a.attachEvent)
                    a.attachEvent(Ja(b.toString()), d);
                else
                    throw Error("addEventListener and attachEvent are unavailable.");
                Fa++
            }
        }
    }
    function Ia() {
        var a = Ka
          , b = va ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function Ja(a) {
        return a in Ea ? Ea[a] : Ea[a] = "on" + a
    }
    function La(a, b, c, d) {
        var f = !0;
        if (a = Ha(a))
            if (b = a.b[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var e = b[a];
                    e && e.F == c && !e.w && (e = Ma(e, d),
                    f = f && !1 !== e)
                }
        return f
    }
    function Ma(a, b) {
        var c = a.listener
          , d = a.P || a.src;
        if (a.M && !p(a) && a && !a.w) {
            var f = a.src;
            if (f && f[xa])
                Ca(f.ta, a);
            else {
                var e = a.type
                  , g = a.I;
                f.removeEventListener ? f.removeEventListener(e, g, a.F) : f.detachEvent && f.detachEvent(Ja(e), g);
                Fa--;
                (e = Ha(f)) ? (Ca(e, a),
                0 == e.K && (e.src = null,
                f[Da] = null)) : Aa(a)
            }
        }
        return c.call(d, b)
    }
    function Ka(a, b) {
        if (a.w)
            return !0;
        if (!va) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = windowReference, f; f = c.shift(); )
                        if (null != d[f])
                            d = d[f];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
            f = c;
            c = new G(f,this);
            d = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == f.keyCode)
                        try {
                            f.keyCode = -1;
                            break a
                        } catch (W) {
                            e = !0
                        }
                    if (e || void 0 == f.returnValue)
                        f.returnValue = !0
                }
                f = [];
                for (e = c.currentTarget; e; e = e.parentNode)
                    f.push(e);
                for (var e = a.type, g = f.length - 1; !c.X && 0 <= g; g--) {
                    c.currentTarget = f[g];
                    var k = La(f[g], e, !0, c)
                      , d = d && k
                }
                for (g = 0; !c.X && g < f.length; g++)
                    c.currentTarget = f[g],
                    k = La(f[g], e, !1, c),
                    d = d && k
            }
            return d
        }
        return Ma(a, new G(b,this))
    }
    function Ha(a) {
        a = a[Da];
        return a instanceof H ? a : null
    }
    var Na = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Ga(a) {
        if ("function" == getType(a))
            return a;
        a[Na] || (a[Na] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Na]
    }
    ;function J(a, b, c) {
        if ("function" == getType(a))
            c && (a = q(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = q(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : windowReference.setTimeout(a, b || 0)
    }
    ;!isGecko && !isTrident || isTrident && 9 <= Number(ua) || isGecko && checkVersion("1.9.1");
    isTrident && checkVersion("9");

    function Point(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    scrollHandler = Point.prototype;
    scrollHandler.clone = function() {
        return new Point(this.x,this.y)
    }
    ;
    scrollHandler.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    }
    ;
    scrollHandler.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    scrollHandler.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    scrollHandler.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    scrollHandler.translate = function(a, b) {
        a instanceof Point ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        p(b) && (this.y += b));
        return this
    }
    ;
    scrollHandler.scale = function(a, b) {
        var c = p(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    function L(a, b) {
        this.width = a;
        this.height = b
    }
    scrollHandler = L.prototype;
    scrollHandler.clone = function() {
        return new L(this.width,this.height)
    }
    ;
    scrollHandler.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    }
    ;
    scrollHandler.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    scrollHandler.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    scrollHandler.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    scrollHandler.scale = function(a, b) {
        var c = p(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    function M(a) {
        var b = document;
        return b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : Oa("*", a, void 0)
    }
    function N(a) {
        var b = document;
        return (b.getElementsByClassName ? b.getElementsByClassName(a)[0] : b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : Oa("*", a, void 0)[0]) || null
    }
    function Oa(a, b, c) {
        var d = document;
        c = c || d;
        var f = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (f || b))
            return c.querySelectorAll(f + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            a = c.getElementsByClassName(b);
            if (f) {
                c = {};
                for (var e = d = 0, g; g = a[e]; e++)
                    f == g.nodeName && (c[d++] = g);
                c.length = d;
                return c
            }
            return a
        }
        a = c.getElementsByTagName(f || "*");
        if (b) {
            c = {};
            for (e = d = 0; g = a[e]; e++) {
                var f = g.className, k;
                if (k = "function" == typeof f.split)
                    k = 0 <= functionForEach(f.split(/\s+/), b);
                k && (c[d++] = g)
            }
            c.length = d;
            return c
        }
        return a
    }
    function Pa() {
        var a = window.document
          , a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new L(a.clientWidth,a.clientHeight)
    }
    function getScrollPosition(element) {
        var scrollElement = element.scrollingElement ? element.scrollingElement : isWebKit || "CSS1Compat" != element.compatMode ? element.body || element.documentElement : element.documentElement;
        element = element.parentWindow || element.defaultView;
        return isTrident && checkVersion("10") && element.pageYOffset != scrollElement.scrollTop ? new Point(scrollElement.scrollLeft,scrollElement.scrollTop) : new Point(element.pageXOffset || scrollElement.scrollLeft,element.pageYOffset || scrollElement.scrollTop)
    }
    function Ra(a, b, c) {
        function d(c) {
            c && b.appendChild(stringCheck(c) ? a.createTextNode(c) : c)
        }
        for (var f = 1; f < c.length; f++) {
            var e = c[f];
            if (!aa(e) || ba(e) && 0 < e.nodeType)
                d(e);
            else {
                var g;
                a: {
                    if (e && "number" == typeof e.length) {
                        if (ba(e)) {
                            g = "function" == typeof e.item || "string" == typeof e.item;
                            break a
                        }
                        if ("function" == getType(e)) {
                            g = "function" == typeof e.item;
                            break a
                        }
                    }
                    g = !1
                }
                forEachElement(g ? ha(e) : e, d)
            }
        }
    }
    function Sa(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function getDocument(element) {
        return 9 == element.nodeType ? element : element.ownerDocument || element.document
    }
    function Ta(a, b) {
        var c = [];
        return Ua(a, b, c, !0) ? c[0] : void 0
    }
    function Ua(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                d) || Ua(a, b, c, d))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    function P(a) {
        this.u = a || windowReference.document || document
    }
    scrollHandler = P.prototype;
    scrollHandler.getElementsByTagName = function(a, b) {
        return (b || this.u).getElementsByTagName(a)
    }
    ;
    scrollHandler.createElement = function(a) {
        return this.u.createElement(String(a))
    }
    ;
    scrollHandler.createTextNode = function(a) {
        return this.u.createTextNode(String(a))
    }
    ;
    scrollHandler.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    scrollHandler.append = function(a, b) {
        Ra(getDocument(a), a, arguments)
    }
    ;
    scrollHandler.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    scrollHandler.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    scrollHandler.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    function elementClasses(element) {
        if (element.classList)
            return element.classList;
        element = element.className;
        return stringCheck(element) && element.match(/\S+/g) || []
    }
    function hasClass(element, className) {
        var c;
        element.classList ? c = element.classList.contains(className) : (c = elementClasses(element),
        c = 0 <= functionForEach(c, className));
        return c
    }
    function addClass(element, className) {
        element.classList ? element.classList.add(className) : hasClass(element, className) || (element.className += 0 < element.className.length ? " " + className : className)
    }
    function R(a, b) {
        a.classList ? a.classList.remove(b) : hasClass(a, b) && (a.className = fa(elementClasses(a), function(a) {
            return a != b
        }).join(" "))
    }
    ;function Xa(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        isTrident && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function getStyles(element) {
        var computedStyleFn = getElementComputedStyle, computedStyle;
        a: {
            computedStyle = getDocument(element);
            if (computedStyle.defaultView && computedStyle.defaultView.getComputedStyle && (computedStyle = computedStyle.defaultView.getComputedStyle(element, null))) {
                computedStyle = computedStyle.display || computedStyle.getPropertyValue("display") || "";
                break a
            }
            computedStyle = ""
        }
        if ("none" != (computedStyle || (element.currentStyle ? element.currentStyle.display : null) || element.style && element.style.display))
            return computedStyleFn(element);
        computedStyle = element.style;
        var display = computedStyle.display
          , visibility = computedStyle.visibility
          , position = computedStyle.position;
        computedStyle.visibility = "hidden";
        computedStyle.position = "absolute";
        computedStyle.display = "inline";
        element = computedStyleFn(element);
        computedStyle.display = display;
        computedStyle.position = position;
        computedStyle.visibility = visibility;
        return element
    }
    function getElementComputedStyle(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = isWebKit && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Xa(a),
        new L(a.right - a.left,a.bottom - a.top)) : new L(b,c)
    }
    ;var $a = !isTrident;
    function S() {
        this.B = this.s = null
    }
    S.prototype.za = function() {
        addClass(this.s, "no-scrolling")
    }
    ;
    S.prototype.m = function() {
        this.B && this.B && (windowReference.clearTimeout(this.B),
        this.B = null);
        R(this.s, "no-scrolling");
        this.B = J(this.za, 200, this)
    }
    ;
    S.prototype.a = function() {
        this.s = document.body;
        I(window, "scroll", this.m, !1, this)
    }
    ;
    function T() {
        this.s = document.body;
        this.ca = this.i = this.D = this.$ = -1;
        this.H = null;
        this.Z = -1;
        this.j = !1;
        this.aa();
        I(window, "resize", this.aa, !1, this);
        ab(this, getWindowScrollOffset(), this.i, 800, bb)
    }
    var bb = "toaster_ease_in_out"
      , cb = {
        Aa: "toaster_ease_in",
        Da: "toaster_ease_out",
        Ba: bb,
        Ca: "toaster_linear"
    };
    function ab(a, b, c, d, f) {
        a.C = null === b || "undefined" === typeof b ? getWindowScrollOffset() : b;
        a.N = null === c || "undefined" === typeof c ? a.i : c;
        a.C = Math.min(Math.max(a.C, 0), a.i);
        a.N = Math.min(Math.max(a.N, 0), a.i);
        a.ca = d || 800;
        a.H = f || "toaster_ease_out";
        a: {
            for (var e in cb)
                if (cb[e] == a.H) {
                    b = !0;
                    break a
                }
            b = !1
        }
        b || (a.H = "toaster_ease_out")
    }
    T.prototype.aa = function() {
        this.$ = getStyles(this.s).height;
        this.D = Pa().height;
        this.i = this.$ - this.D
    }
    ;
    T.prototype.ja = function() {
        this.j || requestAnimationFrame(q(this.ja, this));
        var a;
        a = (Date.now() - this.Z) / this.ca;
        switch (this.H) {
        case "toaster_ease_in":
            a = Math.pow(a, 3);
            break;
        case bb:
            a = 3 * a * a - 2 * a * a * a;
            break;
        case "toaster_linear":
            break;
        default:
            a = 1 - Math.pow(1 - a, 3)
        }
        1 <= a && (this.j = !0);
        a = this.C + (this.N - this.C) * a;
        a > this.i && (a = this.i);
        db(a)
    }
    ;
    T.prototype.play = function() {
        this.Z = Date.now();
        db(this.C);
        this.j = !1;
        requestAnimationFrame(q(this.ja, this))
    }
    ;
    function db(a) {
        window.scrollTo ? window.scrollTo(0, a) : window.scroll && window.scroll(0, a)
    }
    function getWindowScrollOffset() {
        return window.scrollY || document.body.scrollTop || document.documentElement.scrollTop || getScrollPosition(document).y
    }
    function V() {
        this.ka = new T;
        this.fa = this.ia = null;
        this.ea = 0
    }
    V.prototype.f = function(a) {
        var b;
        b = a.currentTarget.hash;
        var c = RegExp, d;
        d = "#".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
        c = new c(d,"");
        b = b.replace(c, "");
        c = document;
        if (b = stringCheck(b) ? c.getElementById(b) : b)
            a.preventDefault(),
            c = getDocument(b),
            a = new Point(0,0),
            d = c ? getDocument(c) : document,
            d = !isTrident || 9 <= Number(ua) || "CSS1Compat" == (d ? new P(getDocument(d)) : t || (t = new P)).u.compatMode ? d.documentElement : d.body,
            b != d && (b = Xa(b),
            c = getScrollPosition((c ? new P(getDocument(c)) : t || (t = new P)).u),
            a.x = b.left + c.x,
            a.y = b.top + c.y),
            ab(this.ka, null, a.y - this.ea, this.Ea, null),
            this.ka.play()
    }
    ;
    V.prototype.L = function() {
        forEachElement(this.ia, function(a) {
            I(a, "click", this.f, !1, this)
        }, this)
    }
    ;
    V.prototype.a = function() {
        this.ia = M("js-scroll-to");
        this.fa = N("header");
        this.ea = getStyles(this.fa).height;
        this.L()
    }
    ;
    function X(a, b) {
        this.da = a;
        this.A = b;
        this.l = !1;
        this.c = 0
    }
    X.prototype.m = function() {
        this.c = getWindowScrollOffset();
        eb(this)
    }
    ;
    X.prototype.va = function() {
        this.A = this.A;
        eb(this)
    }
    ;
    function eb(a) {
        a.l && a.c >= a.A || !a.l && a.c <= a.A || (a.c >= a.A ? a.l || (a.l = !0,
        addClass(a.da, "header--sticky")) : a.l && (a.l = !1,
        R(a.da, "header--sticky")))
    }
    X.prototype.L = function() {
        I(window, "scroll", this.m, !1, this);
        I(window, "resize", this.va, !1, this)
    }
    ;
    X.prototype.a = function() {
        eb(this);
        this.L()
    }
    ;
    function fb() {
        this.c = 0;
        this.scrollHandlers = [];
        this.D = -1;
        this.j = !1
    }
    scrollHandler = fb.prototype;
    scrollHandler.a = function() {
        this.D = Pa().height;
        this.scrollHandlers = M("section");
        this.h();
        J(q(function() {
            this.m()
        }, this), 1500)
    }
    ;
    scrollHandler.h = function() {
        I(window, "scroll", this.m, !1, this);
        I(window, "resize", this.wa, !1, this)
    }
    ;
    scrollHandler.wa = function() {
        this.D = Pa().height
    }
    ;
    scrollHandler.m = function() {
        this.j || requestAnimationFrame(q(this.ya, this));
        this.j = !0
    }
    ;
    scrollHandler.onScroll = function() {
        this.isScrolling = false;
        this.scrollOffset = getWindowScrollOffset();
        forEachElement(this.scrollHandlers, function(element) {
            this.scrollOffset >= element.offsetTop - 0.9 * getStyles(element).height &&
            this.scrollOffset < element.offsetTop &&
            this.scrollOffset && addClass(element, "active") > 0
        }, this)
    };

    function gb() {
        this.o = [];
        this.ba = null;
        this.id = "";
        this.G = this.J = 0;
        this.ua = 7E3;
        this.qa = 0;
        this.W = null
    }
    gb.prototype.a = function() {
        this.o = M("js-theme");
        this.ba = N("ga-hero-cta");
        this.J = this.o.length;
        this.G = 0;
        this.qa = this.ua / this.J;
        if (!this.o)
            return console.log("Error: No hero themes found");
        for (var a = 0, b = 0, c = this.o.length; b < c; b++)
            hasClass(this.o[b], "active") && (a = b);
        this.h();
        hb(this, a)
    }
    ;
    gb.prototype.h = function() {
        I(this.ba, "click", function(a) {
            a.preventDefault();
            ib(this.id, a)
        }, !1, this)
    }
    ;
    function hb(a, b) {
        a.W && R(a.W, "active");
        b = b >= a.J ? 0 : b;
        var c = a.o[b];
        0 === b ? a.id = "Hero Family (Green): Create your blog" : 1 === b ? a.id = "Hero Tech (Blue): Create your blog" : 2 === b && (a.id = "Hero Cooking (Red): Create your blog");
        addClass(c, "active");
        a.W = c;
        a.G++;
        c = a.qa;
        a.G === a.J && (c = 1E4,
        a.G = 0);
        J(q(function() {
            hb(this, b + 1)
        }, a), c)
    }
    function ib(a, b) {
        ga("send", "event", a, "Click");
        J(function() {
            window.location.href = b.currentTarget.href
        }, 1E3)
    }
    function Y() {
        this.g = null
    }
    Y.prototype.a = function() {
        this.g = N("js-language-switch");
        jb(this);
        this.h()
    }
    ;
    Y.prototype.h = function() {
        I(this.g, "change", this.sa, !1, this)
    }
    ;
    function kb(a) {
        return Ta(a.g, function(a) {
            if ("OPTION" === a.nodeName)
                return !!a.selected
        })
    }
    function jb(a) {
        var b = ha(Oa("OPTION", null, a.g));
        ia(b, function(a, b) {
            var c = String(a.text).toLowerCase()
              , d = String(b.text).toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        });
        var c = kb(a) || b[0];
        Sa(a.g);
        for (var d = 0, f = b.length; d < f; d++) {
            var e = b[d];
            e.selected = c.value === e.value ? !0 : !1;
            a.g.appendChild(e)
        }
    }
    Y.prototype.sa = function(a) {
        var b = this.g.options[this.g.selectedIndex].textContent.trim();
        a && (b && this.Y("Language Toggler: Navigating to: " + b),
        a.target.value && J(function() {
            window.location.href = a.target.value
        }, 50))
    }
    ;
    Y.prototype.Y = function(a) {
        ga("send", "event", a, "Click")
    }
    ;
    function Z() {
        this.V = this.U = this.T = this.R = this.S = null;
        this.O = M(lb)
    }
    var lb = "ga-footer";
    Z.prototype.a = function() {
        this.S = N("ga-header-logo");
        this.R = N("ga-header-cta");
        this.T = N("ga-header-sign-in");
        this.V = N("ga-map-cta");
        this.U = N("ga-language-switch");
        this.O = M(lb);
        this.h()
    }
    ;
    Z.prototype.h = function() {
        var a = this;
        this.S && I(this.S, "click", function(b) {
            b.preventDefault();
            a.f(b, "Header: Logo", "link")
        });
        this.T && I(this.T, "click", function(b) {
            b.preventDefault();
            a.f(b, "Header: Sign in", "link")
        });
        this.R && I(this.R, "click", function(b) {
            b.preventDefault();
            a.f(b, "Header: Create your blog", "link")
        });
        this.V && I(this.V, "click", function(b) {
            b.preventDefault();
            a.f(b, "Closing module: Create your blog", "link")
        });
        this.U && I(this.U, "click", function(b) {
            b.preventDefault();
            a.f(b, "Language Toggler: Opened", "")
        });
        this.O && forEachElement(this.O, function(b) {
            I(b, "click", function(c) {
                c.preventDefault();
                var d = "Footer " + ($a && b.dataset ? "track"in b.dataset ? b.dataset.track : null : b.getAttribute("data-" + "track".replace(/([A-Z])/g, "-$1").toLowerCase()));
                a.f(c, d, "link")
            })
        })
    }
    ;
    Z.prototype.f = function(a, b, c) {
        this.Y(b);
        "link" === c && J(function() {
            window.location.href = a.currentTarget.href
        }, 1E3)
    }
    ;
    Z.prototype.Y = function(a) {
        ga("send", "event", a, "Click")
    }
    ;
    function mb() {
        this.ha = this.ma = this.ga = this.oa = this.ra = this.la = null
    }
    mb.prototype.a = function() {
        R(document.documentElement, "no-js");
        this.la = new S;
        this.la.a();
        this.ra = new Z;
        this.ra.a();
        this.xa = new V;
        this.xa.a();
        var a = N("header");
        a && (this.oa = new X(a,64),
        this.oa.a());
        N("hero") && (this.ga = new gb,
        this.ga.a());
        this.ma = new fb;
        this.ma.a();
        N("js-language-switch") && (this.ha = new Y,
        this.ha.a())
    }
    ;
    (new mb).a();
}());
