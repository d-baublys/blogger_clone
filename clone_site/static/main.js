(function() {
    function q(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    function n(a) {
        return "string" == typeof a
    }
    function v(a, b) {
        return a.indexOf(b)
    }
    function w(a, b, c) {
        for (var d = a.length, f = n(a) ? a.split("") : a, e = 0; e < d; e++)
            e in f && b.call(c, f[e], e, a)
    }
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
                    k = 0 <= v(f.split(/\s+/), b);
                k && (c[d++] = g)
            }
            c.length = d;
            return c
        }
        return a
    }
    function I(a, b, c, d, f) {
        a.addEventListener && a.addEventListener(b, c, d);
    }
    function Q(a, b) {
        a.classList ? a.classList.add(b) : Wa(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function R(a, b) {
        a.classList ? a.classList.remove(b) : Wa(a, b) && (a.className = fa(Va(a), function(a) {
            return a != b
        }).join(" "))
    }
    function Wa(a, b) {
        var c;
        a.classList ? c = a.classList.contains(b) : (c = Va(a),
        c = 0 <= v(c, b));
        return c
    }
    function Va(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return n(a) && a.match(/\S+/g) || []
    }
    function J(a, b, c) {
        return setTimeout(function() {
            return a.call(c)
        }, b)
    }
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
            Wa(this.o[b], "active") && (a = b);
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
        Q(c, "active");
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
    (new gb).a();
}());
