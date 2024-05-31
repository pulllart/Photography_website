/*!
 * DrawSVGPlugin 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
function distributeByPosition(t) {
    var e, n = t.ease && gsap.parseEase(t.ease),
        r = t.from || 0,
        i = t.base || 0,
        o = t.axis,
        s = {
            center: .5,
            end: 1,
            edges: .5
        } [r] || 0;
    return function (a, u, l) {
        var c, f, h, p, d, D, g, _, m, v, y, x = l.length;
        if (!e) {
            for (e = [],
                _ = v = -(g = m = 1 / 0),
                y = [],
                D = 0; D < x; D++)
                (h = ((d = l[D].getBoundingClientRect()).left + d.right) / 2) < g && (g = h),
                h > _ && (_ = h),
                (p = (d.top + d.bottom) / 2) < m && (m = p),
                p > v && (v = p),
                y[D] = {
                    x: h,
                    y: p
                };
            for (c = isNaN(r) ? g + (_ - g) * s : y[r].x || 0,
                f = isNaN(r) ? m + (v - m) * s : y[r].y || 0,
                _ = 0,
                g = 1 / 0,
                D = 0; D < x; D++)
                h = y[D].x - c,
                p = f - y[D].y,
                e[D] = d = o ? Math.abs("y" === o ? p : h) : Math.sqrt(h * h + p * p),
                d > _ && (_ = d),
                d < g && (g = d);
            e.max = _ - g,
                e.min = g,
                e.v = x = (t.amount || t.each * x || 0) * ("edges" === r ? -1 : 1),
                e.b = x < 0 ? i - x : i
        }
        return x = (e[a] - e.min) / e.max,
            e.b + (n ? n(x) : x) * e.v
    }
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e() {
        return "undefined" != typeof window
    }

    function n() {
        return p || e() && (p = window.gsap) && p.registerPlugin && p
    }

    function r(t) {
        return Math.round(1e4 * t) / 1e4
    }

    function i(t) {
        return parseFloat(t) || 0
    }

    function o(t, e) {
        var n = i(t);
        return ~t.indexOf("%") ? n / 100 * e : n
    }

    function s(t, e) {
        return i(t.getAttribute(e))
    }

    function a(t, e, n, r, o, s) {
        return b(Math.pow((i(n) - i(t)) * o, 2) + Math.pow((i(r) - i(e)) * s, 2))
    }

    function u(t) {
        return console.warn(t)
    }

    function l(t) {
        return "non-scaling-stroke" === t.getAttribute("vector-effect")
    }

    function c(t) {
        if (!(t = d(t)[0]))
            return 0;
        var e, n, i, o, c, f, h, p = t.tagName.toLowerCase(),
            D = t.style,
            g = 1,
            _ = 1;
        l(t) && (_ = t.getScreenCTM(),
            g = b(_.a * _.a + _.b * _.b),
            _ = b(_.d * _.d + _.c * _.c));
        try {
            n = t.getBBox()
        } catch (t) {
            u("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var v = n || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            y = v.x,
            F = v.y,
            E = v.width,
            w = v.height;
        if (n && (E || w) || !C[p] || (E = s(t, C[p][0]),
                w = s(t, C[p][1]),
                "rect" !== p && "line" !== p && (E *= 2,
                    w *= 2),
                "line" === p && (y = s(t, "x1"),
                    F = s(t, "y1"),
                    E = Math.abs(E - y),
                    w = Math.abs(w - F))),
            "path" === p)
            o = D.strokeDasharray,
            D.strokeDasharray = "none",
            e = t.getTotalLength() || 0,
            r(g) !== r(_) && !m && (m = 1) && u("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            e *= (g + _) / 2,
            D.strokeDasharray = o;
        else if ("rect" === p)
            e = 2 * E * g + 2 * w * _;
        else if ("line" === p)
            e = a(y, F, y + E, F + w, g, _);
        else if ("polyline" === p || "polygon" === p)
            for (i = t.getAttribute("points").match(x) || [],
                "polygon" === p && i.push(i[0], i[1]),
                e = 0,
                c = 2; c < i.length; c += 2)
                e += a(i[c - 2], i[c - 1], i[c], i[c + 1], g, _) || 0;
        else
            "circle" !== p && "ellipse" !== p || (f = E / 2 * g,
                h = w / 2 * _,
                e = Math.PI * (3 * (f + h) - b((3 * f + h) * (f + 3 * h))));
        return e || 0
    }

    function f(t, e) {
        if (!(t = d(t)[0]))
            return [0, 0];
        e = e || c(t) + 1;
        var n = D.getComputedStyle(t),
            r = n.strokeDasharray || "",
            o = i(n.strokeDashoffset),
            s = r.indexOf(",");
        return s < 0 && (s = r.indexOf(" ")),
            e < (r = s < 0 ? e : i(r.substr(0, s))) && (r = e),
            [-o || 0, r - o || 0]
    }

    function h() {
        e() && (D = window,
            _ = p = n(),
            d = p.utils.toArray,
            v = p.core.getStyleSaver,
            y = p.core.reverting || function () {},
            g = -1 !== ((D.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    var p, d, D, g, _, m, v, y, x = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        C = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        b = Math.sqrt,
        F = {
            version: "3.12.2",
            name: "drawSVG",
            register: function (t) {
                p = t,
                    h()
            },
            init: function (t, e, n) {
                if (!t.getBBox)
                    return !1;
                _ || h();
                var s, a, u, p = c(t);
                return this.styles = v && v(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit"),
                    this.tween = n,
                    this._style = t.style,
                    this._target = t,
                    e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0",
                    a = function (t, e, n) {
                        var r, i, s = t.indexOf(" ");
                        return i = s < 0 ? (r = void 0 !== n ? n + "" : t,
                                t) : (r = t.substr(0, s),
                                t.substr(s + 1)),
                            r = o(r, e),
                            (i = o(i, e)) < r ? [i, r] : [r, i]
                    }(e, p, (s = f(t, p))[0]),
                    this._length = r(p),
                    this._dash = r(s[1] - s[0]),
                    this._offset = r(-s[0]),
                    this._dashPT = this.add(this, "_dash", this._dash, r(a[1] - a[0]), 0, 0, 0, 0, 0, 1),
                    this._offsetPT = this.add(this, "_offset", this._offset, r(-a[0]), 0, 0, 0, 0, 0, 1),
                    g && (u = D.getComputedStyle(t)).strokeLinecap !== u.strokeLinejoin && (a = i(u.strokeMiterlimit),
                        this.add(t.style, "strokeMiterlimit", a, a + .01)),
                    this._live = l(t) || ~(e + "").indexOf("live"),
                    this._nowrap = ~(e + "").indexOf("nowrap"),
                    this._props.push("drawSVG"),
                    1
            },
            render: function (t, e) {
                if (e.tween._time || !y()) {
                    var n, r, i, o, s = e._pt,
                        a = e._style;
                    if (s) {
                        for (e._live && (n = c(e._target)) !== e._length && (r = n / e._length,
                                e._length = n,
                                e._offsetPT && (e._offsetPT.s *= r,
                                    e._offsetPT.c *= r),
                                e._dashPT ? (e._dashPT.s *= r,
                                    e._dashPT.c *= r) : e._dash *= r); s;)
                            s.r(t, s.d),
                            s = s._next;
                        i = e._dash || t && 1 !== t && 1e-4 || 0,
                            n = e._length - i + .1,
                            o = e._offset,
                            i && o && i + Math.abs(o % e._length) > e._length - .2 && (o += o < 0 ? .1 : -.1) && (n += .1),
                            a.strokeDashoffset = i ? o : o + .001,
                            a.strokeDasharray = n < .2 ? "none" : i ? i + "px," + (e._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                    }
                } else
                    e.styles.revert()
            },
            getLength: c,
            getPosition: f
        };
    n() && p.registerPlugin(F),
        t.DrawSVGPlugin = F,
        t.default = F,
        "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete t.default
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t) {
        return "string" == typeof t
    }
    var n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        r = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        i = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        o = /(^[#\.][a-z]|[a-y][a-z])/i,
        s = Math.PI / 180,
        a = Math.sin,
        u = Math.cos,
        l = Math.abs,
        c = Math.sqrt,
        f = function (t) {
            return "number" == typeof t
        },
        h = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        };

    function p(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2)
            e = t[n],
            t[n] = t[n + 1],
            t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var d = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function D(t, e) {
        var n, i, o, s, a, u, l, c, f, h, p, D, g, v, y, x, C, b, F, E, w, T, A = t.tagName.toLowerCase(),
            M = .552284749831;
        return "path" !== A && t.getBBox ? (u = function (t, e) {
                var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    i = [].slice.call(t.attributes),
                    o = i.length;
                for (e = "," + e + ","; - 1 < --o;)
                    n = i[o].nodeName.toLowerCase(),
                    e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[o].nodeValue);
                return r
            }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
            T = function (t, e) {
                for (var n = e ? e.split(",") : [], r = {}, i = n.length; - 1 < --i;)
                    r[n[i]] = +t.getAttribute(n[i]) || 0;
                return r
            }(t, d[A]),
            "rect" === A ? (s = T.rx,
                a = T.ry || s,
                i = T.x,
                o = T.y,
                h = T.width - 2 * s,
                p = T.height - 2 * a,
                n = s || a ? "M" + (x = (v = (g = i + s) + h) + s) + "," + (b = o + a) + " V" + (F = b + p) + " C" + [x, E = F + a * M, y = v + s * M, w = F + a, v, w, v - (v - g) / 3, w, g + (v - g) / 3, w, g, w, D = i + s * (1 - M), w, i, E, i, F, i, F - (F - b) / 3, i, b + (F - b) / 3, i, b, i, C = o + a * (1 - M), D, o, g, o, g + (v - g) / 3, o, v - (v - g) / 3, o, v, o, y, o, x, C, x, b].join(",") + "z" : "M" + (i + h) + "," + o + " v" + p + " h" + -h + " v" + -p + " h" + h + "z") : "circle" === A || "ellipse" === A ? (c = "circle" === A ? (s = a = T.r) * M : (s = T.rx,
                    (a = T.ry) * M),
                n = "M" + ((i = T.cx) + s) + "," + (o = T.cy) + " C" + [i + s, o + c, i + (l = s * M), o + a, i, o + a, i - l, o + a, i - s, o + c, i - s, o, i - s, o - c, i - l, o - a, i, o - a, i + l, o - a, i + s, o - c, i + s, o].join(",") + "z") : "line" === A ? n = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2 : "polyline" !== A && "polygon" !== A || (n = "M" + (i = (f = (t.getAttribute("points") + "").match(r) || []).shift()) + "," + (o = f.shift()) + " L" + f.join(","),
                "polygon" === A && (n += "," + i + "," + o + "z")),
            u.setAttribute("d", m(u._gsRawPath = _(n))),
            e && t.parentNode && (t.parentNode.insertBefore(u, t),
                t.parentNode.removeChild(t)),
            u) : t
    }

    function g(t, e, n, r, i, o, f, h, p) {
        if (t !== h || e !== p) {
            n = l(n),
                r = l(r);
            var d = i % 360 * s,
                D = u(d),
                g = a(d),
                _ = Math.PI,
                m = 2 * _,
                v = (t - h) / 2,
                y = (e - p) / 2,
                x = D * v + g * y,
                C = -g * v + D * y,
                b = x * x,
                F = C * C,
                E = b / (n * n) + F / (r * r);
            1 < E && (n = c(E) * n,
                r = c(E) * r);
            var w = n * n,
                T = r * r,
                A = (w * T - w * F - T * b) / (w * F + T * b);
            A < 0 && (A = 0);
            var M = (o === f ? -1 : 1) * c(A),
                k = n * C / r * M,
                S = -r * x / n * M,
                O = D * k - g * S + (t + h) / 2,
                P = g * k + D * S + (e + p) / 2,
                B = (x - k) / n,
                R = (C - S) / r,
                N = (-x - k) / n,
                z = (-C - S) / r,
                L = B * B + R * R,
                I = (R < 0 ? -1 : 1) * Math.acos(B / c(L)),
                Y = (B * z - R * N < 0 ? -1 : 1) * Math.acos((B * N + R * z) / c(L * (N * N + z * z)));
            isNaN(Y) && (Y = _),
                !f && 0 < Y ? Y -= m : f && Y < 0 && (Y += m),
                I %= m,
                Y %= m;
            var X, j = Math.ceil(l(Y) / (m / 4)),
                V = [],
                H = Y / j,
                U = 4 / 3 * a(H / 2) / (1 + u(H / 2)),
                W = D * n,
                q = g * n,
                G = g * -r,
                K = D * r;
            for (X = 0; X < j; X++)
                x = u(i = I + X * H),
                C = a(i),
                B = u(i += H),
                R = a(i),
                V.push(x - U * C, C + U * x, B + U * R, R - U * B, B, R);
            for (X = 0; X < V.length; X += 2)
                x = V[X],
                C = V[X + 1],
                V[X] = x * W + C * G + O,
                V[X + 1] = x * q + C * K + P;
            return V[X - 2] = h,
                V[X - 1] = p,
                V
        }
    }

    function _(t) {
        function e(t, e, n, r) {
            d = (n - t) / 3,
                D = (r - e) / 3,
                f.push(t + d, e + D, n - d, r - D, n, r)
        }
        var r, o, s, a, u, c, f, h, p, d, D, _, m, v, y, x = (t + "").replace(i, (function (t) {
                var e = +t;
                return e < 1e-4 && -1e-4 < e ? 0 : e
            })).match(n) || [],
            C = [],
            b = 0,
            F = 0,
            E = x.length,
            w = 0,
            T = "ERROR: malformed path: " + t;
        if (!t || !isNaN(x[0]) || isNaN(x[1]))
            return console.log(T),
                C;
        for (r = 0; r < E; r++)
            if (m = u,
                isNaN(x[r]) ? c = (u = x[r].toUpperCase()) !== x[r] : r--,
                s = +x[r + 1],
                a = +x[r + 2],
                c && (s += b,
                    a += F),
                r || (h = s,
                    p = a),
                "M" === u)
                f && (f.length < 8 ? --C.length : w += f.length),
                b = h = s,
                F = p = a,
                f = [s, a],
                C.push(f),
                r += 2,
                u = "L";
            else if ("C" === u)
            c || (b = F = 0),
            (f = f || [0, 0]).push(s, a, b + 1 * x[r + 3], F + 1 * x[r + 4], b += 1 * x[r + 5], F += 1 * x[r + 6]),
            r += 6;
        else if ("S" === u)
            d = b,
            D = F,
            "C" !== m && "S" !== m || (d += b - f[f.length - 4],
                D += F - f[f.length - 3]),
            c || (b = F = 0),
            f.push(d, D, s, a, b += 1 * x[r + 3], F += 1 * x[r + 4]),
            r += 4;
        else if ("Q" === u)
            d = b + 2 / 3 * (s - b),
            D = F + 2 / 3 * (a - F),
            c || (b = F = 0),
            b += 1 * x[r + 3],
            F += 1 * x[r + 4],
            f.push(d, D, b + 2 / 3 * (s - b), F + 2 / 3 * (a - F), b, F),
            r += 4;
        else if ("T" === u)
            d = b - f[f.length - 4],
            D = F - f[f.length - 3],
            f.push(b + d, F + D, s + 2 / 3 * (b + 1.5 * d - s), a + 2 / 3 * (F + 1.5 * D - a), b = s, F = a),
            r += 2;
        else if ("H" === u)
            e(b, F, b = s, F),
            r += 1;
        else if ("V" === u)
            e(b, F, b, F = s + (c ? F - b : 0)),
            r += 1;
        else if ("L" === u || "Z" === u)
            "Z" === u && (s = h,
                a = p,
                f.closed = !0),
            ("L" === u || .5 < l(b - s) || .5 < l(F - a)) && (e(b, F, s, a),
                "L" === u && (r += 2)),
            b = s,
            F = a;
        else if ("A" === u) {
            if (v = x[r + 4],
                y = x[r + 5],
                d = x[r + 6],
                D = x[r + 7],
                o = 7,
                1 < v.length && (v.length < 3 ? (D = d,
                        d = y,
                        o--) : (D = y,
                        d = v.substr(2),
                        o -= 2),
                    y = v.charAt(1),
                    v = v.charAt(0)),
                _ = g(b, F, +x[r + 1], +x[r + 2], +x[r + 3], +v, +y, (c ? b : 0) + 1 * d, (c ? F : 0) + 1 * D),
                r += o,
                _)
                for (o = 0; o < _.length; o++)
                    f.push(_[o]);
            b = f[f.length - 2],
                F = f[f.length - 1]
        } else
            console.log(T);
        return (r = f.length) < 6 ? (C.pop(),
                r = 0) : f[0] === f[r - 2] && f[1] === f[r - 1] && (f.closed = !0),
            C.totalPoints = w + r,
            C
    }

    function m(t) {
        f(t[0]) && (t = [t]);
        var e, n, r, i, o = "",
            s = t.length;
        for (n = 0; n < s; n++) {
            for (i = t[n],
                o += "M" + h(i[0]) + "," + h(i[1]) + " C",
                e = i.length,
                r = 2; r < e; r++)
                o += h(i[r++]) + "," + h(i[r++]) + " " + h(i[r++]) + "," + h(i[r++]) + " " + h(i[r++]) + "," + h(i[r]) + " ";
            i.closed && (o += "z")
        }
        return o
    }

    function v() {
        return X || "undefined" != typeof window && (X = window.gsap) && X.registerPlugin && X
    }

    function y(t) {
        return "function" == typeof t
    }

    function x(t) {
        return console && console.warn(t)
    }

    function C(t) {
        var e, n = t.length,
            r = 0,
            i = 0;
        for (e = 0; e < n; e++)
            r += t[e++],
            i += t[e];
        return [r / (n / 2), i / (n / 2)]
    }

    function b(t) {
        var e, n, r, i = t.length,
            o = t[0],
            s = o,
            a = t[1],
            u = a;
        for (r = 6; r < i; r += 6)
            o < (e = t[r]) ? o = e : e < s && (s = e),
            a < (n = t[r + 1]) ? a = n : n < u && (u = n);
        return t.centerX = (o + s) / 2,
            t.centerY = (a + u) / 2,
            t.size = (o - s) * (a - u)
    }

    function F(t, e) {
        void 0 === e && (e = 3);
        for (var n, r, i, o, s, a, u, l, c, f, h, p, d, D, g, _, m = t.length, v = t[0][0], y = v, x = t[0][1], C = x, b = 1 / e; - 1 < --m;)
            for (n = (s = t[m]).length,
                o = 6; o < n; o += 6)
                for (c = s[o],
                    f = s[o + 1],
                    h = s[o + 2] - c,
                    D = s[o + 3] - f,
                    p = s[o + 4] - c,
                    g = s[o + 5] - f,
                    d = s[o + 6] - c,
                    _ = s[o + 7] - f,
                    a = e; - 1 < --a;)
                    v < (r = ((u = b * a) * u * d + 3 * (l = 1 - u) * (u * p + l * h)) * u + c) ? v = r : r < y && (y = r),
                    x < (i = (u * u * _ + 3 * l * (u * g + l * D)) * u + f) ? x = i : i < C && (C = i);
        return t.centerX = (v + y) / 2,
            t.centerY = (x + C) / 2,
            t.left = y,
            t.width = v - y,
            t.top = C,
            t.height = x - C,
            t.size = (v - y) * (x - C)
    }

    function E(t, e) {
        return e.length - t.length
    }

    function w(t, e) {
        var n = t.size || b(t),
            r = e.size || b(e);
        return Math.abs(r - n) < (n + r) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : r - n
    }

    function T(t, e) {
        var n, r, i = t.slice(0),
            o = t.length,
            s = o - 2;
        for (e |= 0,
            n = 0; n < o; n++)
            r = (n + e) % s,
            t[n++] = i[r],
            t[n] = i[1 + r]
    }

    function A(t, e, n, r, i) {
        var o, s, a, u, l = t.length,
            c = 0,
            f = l - 2;
        for (n *= 6,
            s = 0; s < l; s += 6)
            u = t[o = (s + n) % f] - (e[s] - r),
            a = t[1 + o] - (e[s + 1] - i),
            c += K(a * a + u * u);
        return c
    }

    function M(t, e, n) {
        var r, i, o, s = t.length,
            a = C(t),
            u = C(e),
            l = u[0] - a[0],
            c = u[1] - a[1],
            f = A(t, e, 0, l, c),
            h = 0;
        for (o = 6; o < s; o += 6)
            (i = A(t, e, o / 6, l, c)) < f && (f = i,
                h = o);
        if (n)
            for (p(r = t.slice(0)),
                o = 6; o < s; o += 6)
                (i = A(r, e, o / 6, l, c)) < f && (f = i,
                    h = -o);
        return h / 6
    }

    function k(t, e, n) {
        for (var r, i, o, s, a, u, l = t.length, c = 1e20, f = 0, h = 0; - 1 < --l;)
            for (u = (r = t[l]).length,
                a = 0; a < u; a += 6)
                i = r[a] - e,
                o = r[a + 1] - n,
                (s = K(i * i + o * o)) < c && (c = s,
                    f = r[a],
                    h = r[a + 1]);
        return [f, h]
    }

    function S(t, e, n, r, i, o) {
        var s, a, u, l, c = e.length,
            f = 0,
            h = Math.min(t.size || b(t), e[n].size || b(e[n])) * r,
            p = 1e20,
            d = t.centerX + i,
            D = t.centerY + o;
        for (s = n; s < c && !((e[s].size || b(e[s])) < h); s++)
            a = e[s].centerX - d,
            u = e[s].centerY - D,
            (l = K(a * a + u * u)) < p && (f = s,
                p = l);
        return l = e[f],
            e.splice(f, 1),
            l
    }

    function O(t, e) {
        var n, r, i, o, s, a, u, l, c, f, h, p, d, D, g = 0,
            _ = t.length,
            m = e / ((_ - 2) / 6);
        for (d = 2; d < _; d += 6)
            for (g += m; .999999 < g;)
                n = t[d - 2],
                r = t[d - 1],
                i = t[d],
                o = t[d + 1],
                s = t[d + 2],
                a = t[d + 3],
                u = t[d + 4],
                l = t[d + 5],
                c = n + (i - n) * (D = 1 / ((Math.floor(g) || 1) + 1)),
                c += ((h = i + (s - i) * D) - c) * D,
                h += (s + (u - s) * D - h) * D,
                f = r + (o - r) * D,
                f += ((p = o + (a - o) * D) - f) * D,
                p += (a + (l - a) * D - p) * D,
                t.splice(d, 4, n + (i - n) * D, r + (o - r) * D, c, f, c + (h - c) * D, f + (p - f) * D, h, p, s + (u - s) * D, a + (l - a) * D),
                d += 6,
                _ += 6,
                g--;
        return t
    }

    function P(t, e, n, r, i) {
        var o, s, a, u, l, c, f, h = e.length - t.length,
            d = 0 < h ? e : t,
            D = 0 < h ? t : e,
            g = 0,
            _ = "complexity" === r ? E : w,
            m = "position" === r ? 0 : "number" == typeof r ? r : .8,
            v = D.length,
            y = "object" == typeof n && n.push ? n.slice(0) : [n],
            C = "reverse" === y[0] || y[0] < 0,
            A = "log" === n;
        if (D[0]) {
            if (1 < d.length && (t.sort(_),
                    e.sort(_),
                    d.size || F(d),
                    D.size || F(D),
                    c = d.centerX - D.centerX,
                    f = d.centerY - D.centerY,
                    _ === w))
                for (v = 0; v < D.length; v++)
                    d.splice(v, 0, S(D[v], d, v, m, c, f));
            if (h)
                for (h < 0 && (h = -h),
                    d[0].length > D[0].length && O(D[0], (d[0].length - D[0].length) / 6 | 0),
                    v = D.length; g < h;)
                    d[v].size || b(d[v]),
                    u = (a = k(D, d[v].centerX, d[v].centerY))[0],
                    l = a[1],
                    D[v++] = [u, l, u, l, u, l, u, l],
                    D.totalPoints += 8,
                    g++;
            for (v = 0; v < t.length; v++)
                o = e[v],
                s = t[v],
                (h = o.length - s.length) < 0 ? O(o, -h / 6 | 0) : 0 < h && O(s, h / 6 | 0),
                C && !1 !== i && !s.reversed && p(s),
                (n = y[v] || 0 === y[v] ? y[v] : "auto") && (s.closed || Math.abs(s[0] - s[s.length - 2]) < .5 && Math.abs(s[1] - s[s.length - 1]) < .5 ? "auto" === n || "log" === n ? (y[v] = n = M(s, o, !v || !1 === i),
                        n < 0 && (C = !0,
                            p(s),
                            n = -n),
                        T(s, 6 * n)) : "reverse" !== n && (v && n < 0 && p(s),
                        T(s, 6 * (n < 0 ? -n : n))) : !C && ("auto" === n && Math.abs(o[0] - s[0]) + Math.abs(o[1] - s[1]) + Math.abs(o[o.length - 2] - s[s.length - 2]) + Math.abs(o[o.length - 1] - s[s.length - 1]) > Math.abs(o[0] - s[s.length - 2]) + Math.abs(o[1] - s[s.length - 1]) + Math.abs(o[o.length - 2] - s[0]) + Math.abs(o[o.length - 1] - s[1]) || n % 2) ? (p(s),
                        y[v] = -1,
                        C = !0) : "auto" === n ? y[v] = 0 : "reverse" === n && (y[v] = -1),
                    s.closed !== o.closed && (s.closed = o.closed = !1));
            return A && x("shapeIndex:[" + y.join(",") + "]"),
                t.shapeIndex = y
        }
    }

    function B(t, e, n, r, i) {
        var o = _(t[0]),
            s = _(t[1]);
        P(o, s, e || 0 === e ? e : "auto", n, i) && (t[0] = m(o),
            t[1] = m(s),
            "log" !== r && !0 !== r || x('precompile:["' + t[0] + '","' + t[1] + '"]'))
    }

    function R(t, e) {
        var n, r, i, o, s, a, u, l = 0,
            c = parseFloat(t[0]),
            f = parseFloat(t[1]),
            h = c + "," + f + " ";
        for (n = .5 * e / (.5 * (i = t.length) - 1),
            r = 0; r < i - 2; r += 2) {
            if (l += n,
                a = parseFloat(t[r + 2]),
                u = parseFloat(t[r + 3]),
                .999999 < l)
                for (s = 1 / (Math.floor(l) + 1),
                    o = 1; .999999 < l;)
                    h += (c + (a - c) * s * o).toFixed(2) + "," + (f + (u - f) * s * o).toFixed(2) + " ",
                    l--,
                    o++;
            h += a + "," + u + " ",
                c = a,
                f = u
        }
        return h
    }

    function N(t) {
        var e = t[0].match(tt) || [],
            n = t[1].match(tt) || [],
            r = n.length - e.length;
        0 < r ? t[0] = R(e, r) : t[1] = R(n, -r)
    }

    function z(t, e) {
        for (var n, r, i, o, s, a, u, l, c, f, h, p, d = t.length, D = .2 * (e || 1); - 1 < --d;) {
            for (h = (r = t[d]).isSmooth = r.isSmooth || [0, 0, 0, 0],
                p = r.smoothData = r.smoothData || [0, 0, 0, 0],
                h.length = 4,
                l = r.length - 2,
                u = 6; u < l; u += 6)
                i = r[u] - r[u - 2],
                o = r[u + 1] - r[u - 1],
                s = r[u + 2] - r[u],
                a = r[u + 3] - r[u + 1],
                c = W(o, i),
                f = W(a, s),
                (n = Math.abs(c - f) < D) && (p[u - 2] = c,
                    p[u + 2] = f,
                    p[u - 1] = K(i * i + o * o),
                    p[u + 3] = K(s * s + a * a)),
                h.push(n, n, 0, 0, n, n);
            r[l] === r[0] && r[1 + l] === r[1] && (i = r[0] - r[l - 2],
                o = r[1] - r[l - 1],
                s = r[2] - r[0],
                a = r[3] - r[1],
                c = W(o, i),
                f = W(a, s),
                Math.abs(c - f) < D && (p[l - 2] = c,
                    p[2] = f,
                    p[l - 1] = K(i * i + o * o),
                    p[3] = K(s * s + a * a),
                    h[l - 2] = h[l - 1] = !0))
        }
        return t
    }

    function L(t) {
        var e = t.trim().split(" ");
        return {
            x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100,
            y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100
        }
    }

    function I(t, e, n, r) {
        var i, o, s = this._origin,
            a = this._eOrigin,
            u = t[n] - s.x,
            l = t[n + 1] - s.y,
            c = K(u * u + l * l),
            f = W(l, u);
        return u = e[n] - a.x,
            l = e[n + 1] - a.y,
            o = function (t) {
                return t !== t % Q ? t + (t < 0 ? $ : -$) : t
            }(i = W(l, u) - f),
            !r && V && Math.abs(o + V.ca) < Z && (r = V),
            this._anchorPT = V = {
                _next: this._anchorPT,
                t: t,
                sa: f,
                ca: r && o * r.ca < 0 && Math.abs(o) > J ? i : o,
                sl: c,
                cl: K(u * u + l * l) - c,
                i: n
            }
    }

    function Y(t) {
        X = v(),
            U = U || X && X.plugins.morphSVG,
            X && U ? (j = X.utils.toArray,
                U.prototype._tweenRotation = I,
                H = 1) : t && x("Please gsap.registerPlugin(MorphSVGPlugin)")
    }
    var X, j, V, H, U, W = Math.atan2,
        q = Math.cos,
        G = Math.sin,
        K = Math.sqrt,
        Q = Math.PI,
        $ = 2 * Q,
        Z = .3 * Q,
        J = .7 * Q,
        tt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        et = /(^[#\.][a-z]|[a-y][a-z])/i,
        nt = /[achlmqstvz]/i,
        rt = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
        it = {
            version: "3.12.2",
            name: "morphSVG",
            rawVars: 1,
            register: function (t, e) {
                X = t,
                    U = e,
                    Y()
            },
            init: function (t, e, n, r, i) {
                if (H || Y(1),
                    !e)
                    return x("invalid shape"),
                        !1;
                var o, s, a, u, l, c, f, h, p, d, g, v, C, b, E, w, T, A, M, k, S, O;
                if (y(e) && (e = e.call(n, r, t, i)),
                    "string" == typeof e || e.getBBox || e[0])
                    e = {
                        shape: e
                    };
                else if ("object" == typeof e) {
                    for (s in o = {},
                        e)
                        o[s] = y(e[s]) && "render" !== s ? e[s].call(n, r, t, i) : e[s];
                    e = o
                }
                var B = t.nodeType ? window.getComputedStyle(t) : {},
                    R = B.fill + "",
                    I = !("none" === R || "0" === (R.match(tt) || [])[3] || "evenodd" === B.fillRule),
                    X = (e.origin || "50 50").split(",");
                if (l = "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) || "POLYGON" === o,
                    "PATH" !== o && !l && !e.prop)
                    return x("Cannot morph a <" + o + "> element. " + rt),
                        !1;
                if (s = "PATH" === o ? "d" : "points",
                    !e.prop && !y(t.setAttribute))
                    return !1;
                if (u = function (t, e, n) {
                        var r, i;
                        return (!("string" == typeof t) || et.test(t) || (t.match(tt) || []).length < 3) && ((r = j(t)[0]) ? (i = (r.nodeName + "").toUpperCase(),
                                e && "PATH" !== i && (r = D(r, !1),
                                    i = "PATH"),
                                t = r.getAttribute("PATH" === i ? "d" : "points") || "",
                                r === n && (t = r.getAttributeNS(null, "data-original") || t)) : (x("WARNING: invalid morph to: " + t),
                                t = !1)),
                            t
                    }(e.shape || e.d || e.points || "", "d" === s, t),
                    l && nt.test(u))
                    return x("A <" + o + "> cannot accept path data. " + rt),
                        !1;
                if (c = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto",
                    f = e.map || it.defaultMap,
                    this._prop = e.prop,
                    this._render = e.render || it.defaultRender,
                    this._apply = "updateTarget" in e ? e.updateTarget : it.defaultUpdateTarget,
                    this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision),
                    this._tween = n,
                    u) {
                    if (this._target = t,
                        T = "object" == typeof e.precompile,
                        d = this._prop ? t[this._prop] : t.getAttribute(s),
                        this._prop || t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", d),
                        "d" === s || this._prop) {
                        if (d = _(T ? e.precompile[0] : d),
                            g = _(T ? e.precompile[1] : u),
                            !T && !P(d, g, c, f, I))
                            return !1;
                        for ("log" !== e.precompile && !0 !== e.precompile || x('precompile:["' + m(d) + '","' + m(g) + '"]'),
                            (S = "linear" !== (e.type || it.defaultType)) && (d = z(d, e.smoothTolerance),
                                g = z(g, e.smoothTolerance),
                                d.size || F(d),
                                g.size || F(g),
                                k = L(X[0]),
                                this._origin = d.origin = {
                                    x: d.left + k.x * d.width,
                                    y: d.top + k.y * d.height
                                },
                                X[1] && (k = L(X[1])),
                                this._eOrigin = {
                                    x: g.left + k.x * g.width,
                                    y: g.top + k.y * g.height
                                }),
                            this._rawPath = t._gsRawPath = d,
                            C = d.length; - 1 < --C;)
                            for (E = d[C],
                                w = g[C],
                                h = E.isSmooth || [],
                                p = w.isSmooth || [],
                                b = E.length,
                                v = V = 0; v < b; v += 2)
                                w[v] === E[v] && w[v + 1] === E[v + 1] || (S ? h[v] && p[v] ? (A = E.smoothData,
                                    M = w.smoothData,
                                    O = v + (v === b - 4 ? 7 - b : 5),
                                    this._controlPT = {
                                        _next: this._controlPT,
                                        i: v,
                                        j: C,
                                        l1s: A[v + 1],
                                        l1c: M[v + 1] - A[v + 1],
                                        l2s: A[O],
                                        l2c: M[O] - A[O]
                                    },
                                    a = this._tweenRotation(E, w, v + 2),
                                    this._tweenRotation(E, w, v, a),
                                    this._tweenRotation(E, w, O - 1, a),
                                    v += 4) : this._tweenRotation(E, w, v) : (a = this.add(E, v, E[v], w[v], 0, 0, 0, 0, 0, 1),
                                    a = this.add(E, v + 1, E[v + 1], w[v + 1], 0, 0, 0, 0, 0, 1) || a))
                    } else
                        a = this.add(t, "setAttribute", t.getAttribute(s) + "", u + "", r, i, 0, function (t) {
                            return isNaN(t) ? N : function (e) {
                                N(e),
                                    e[1] = function (t, e) {
                                        if (!e)
                                            return t;
                                        var n, r, i, o = t.match(tt) || [],
                                            s = o.length,
                                            a = "";
                                        for (n = "reverse" === e ? (r = s - 1,
                                                -2) : (r = (2 * (parseInt(e, 10) || 0) + 1 + 100 * s) % s,
                                                2),
                                            i = 0; i < s; i += 2)
                                            a += o[r - 1] + "," + o[r] + " ",
                                            r = (r + n) % s;
                                        return a
                                    }(e[1], parseInt(t, 10))
                            }
                        }(c), s);
                    S && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1),
                            a = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)),
                        a && (this._props.push("morphSVG"),
                            a.end = u,
                            a.endProp = s)
                }
                return 1
            },
            render: function (t, e) {
                for (var n, r, i, o, s, a, u, l, c, f, h, p, d = e._rawPath, D = e._controlPT, g = e._anchorPT, _ = e._rnd, m = e._target, v = e._pt; v;)
                    v.r(t, v.d),
                    v = v._next;
                if (1 === t && e._apply)
                    for (v = e._pt; v;)
                        v.end && (e._prop ? m[e._prop] = v.end : m.setAttribute(v.endProp, v.end)),
                        v = v._next;
                else if (d) {
                    for (; g;)
                        s = g.sa + t * g.ca,
                        o = g.sl + t * g.cl,
                        g.t[g.i] = e._origin.x + q(s) * o,
                        g.t[g.i + 1] = e._origin.y + G(s) * o,
                        g = g._next;
                    for (r = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; D;)
                        p = (a = D.i) + (a === (i = d[D.j]).length - 4 ? 7 - i.length : 5),
                        s = W(i[p] - i[a + 1], i[p - 1] - i[a]),
                        f = G(s),
                        h = q(s),
                        l = i[a + 2],
                        c = i[a + 3],
                        o = D.l1s + r * D.l1c,
                        i[a] = l - h * o,
                        i[a + 1] = c - f * o,
                        o = D.l2s + r * D.l2c,
                        i[p - 1] = l + h * o,
                        i[p] = c + f * o,
                        D = D._next;
                    if (m._gsRawPath = d,
                        e._apply) {
                        for (n = "",
                            u = 0; u < d.length; u++)
                            for (o = (i = d[u]).length,
                                n += "M" + (i[0] * _ | 0) / _ + " " + (i[1] * _ | 0) / _ + " C",
                                a = 2; a < o; a++)
                                n += (i[a] * _ | 0) / _ + " ";
                        e._prop ? m[e._prop] = n : m.setAttribute("d", n)
                    }
                }
                e._render && d && e._render.call(e._tween, d, m)
            },
            kill: function () {
                this._pt = this._rawPath = 0
            },
            getRawPath: function (t) {
                var n, r = (t = e(t) && o.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
                return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}),
                    (n = r._gsPath[t]) && !n._dirty ? n : r._gsPath[t] = _(t)) : t ? e(t) ? _(t) : f(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
            },
            stringToRawPath: _,
            rawPathToString: m,
            normalizeStrings: function (t, e, n) {
                var r = [t, e];
                return B(r, n.shapeIndex, n.map),
                    r
            },
            pathFilter: B,
            pointsFilter: N,
            getTotalSize: F,
            equalizeSegmentQuantity: P,
            convertToPath: function (t, e) {
                return j(t).map((function (t) {
                    return D(t, !1 !== e)
                }))
            },
            defaultType: "linear",
            defaultUpdateTarget: !0,
            defaultMap: "size"
        };
    v() && X.registerPlugin(it),
        t.MorphSVGPlugin = it,
        t.default = it,
        "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete t.default
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e() {
        return "undefined" != typeof window
    }

    function n() {
        return c || e() && (c = window.gsap) && c.registerPlugin && c
    }

    function r(t) {
        return "string" == typeof t
    }

    function i(t) {
        return "function" == typeof t
    }

    function o(t, e) {
        var n = "x" === e ? "Width" : "Height",
            r = "scroll" + n,
            i = "client" + n;
        return t === h || t === p || t === d ? Math.max(p[r], d[r]) - (h["inner" + n] || p[i] || d[i]) : t[r] - t["offset" + n]
    }

    function s(t, e) {
        var n = "scroll" + ("x" === e ? "Left" : "Top");
        return t === h && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != p[n] ? p : d),
            function () {
                return t[n]
            }
    }

    function a(t, e) {
        if (!(t = D(t)[0]) || !t.getBoundingClientRect)
            return console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0
            };
        var n = t.getBoundingClientRect(),
            r = !e || e === h || e === d,
            i = r ? {
                top: p.clientTop - (h.pageYOffset || p.scrollTop || d.scrollTop || 0),
                left: p.clientLeft - (h.pageXOffset || p.scrollLeft || d.scrollLeft || 0)
            } : e.getBoundingClientRect(),
            o = {
                x: n.left - i.left,
                y: n.top - i.top
            };
        return !r && e && (o.x += s(e, "x")(),
                o.y += s(e, "y")()),
            o
    }

    function u(t, e, n, i, s) {
        return isNaN(t) || "object" == typeof t ? r(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i - s : "max" === t ? o(e, n) - s : Math.min(o(e, n), a(t, e)[n] - s) : parseFloat(t) - s
    }

    function l() {
        c = n(),
            e() && c && "undefined" != typeof document && document.body && (h = window,
                d = document.body,
                p = document.documentElement,
                D = c.utils.toArray,
                c.config({
                    autoKillThreshold: 7
                }),
                g = c.config(),
                f = 1)
    }
    var c, f, h, p, d, D, g, _, m = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register: function (t) {
            c = t,
                l()
        },
        init: function (t, e, n, o, a) {
            f || l();
            var p = this,
                d = c.getProperty(t, "scrollSnapType");
            p.isWin = t === h,
                p.target = t,
                p.tween = n,
                e = function (t, e, n, o) {
                    if (i(t) && (t = t(e, n, o)),
                        "object" != typeof t)
                        return r(t) && "max" !== t && "=" !== t.charAt(1) ? {
                            x: t,
                            y: t
                        } : {
                            y: t
                        };
                    if (t.nodeType)
                        return {
                            y: t,
                            x: t
                        };
                    var s, a = {};
                    for (s in t)
                        a[s] = "onAutoKill" !== s && i(t[s]) ? t[s](e, n, o) : t[s];
                    return a
                }(e, o, t, a),
                p.vars = e,
                p.autoKill = !!e.autoKill,
                p.getX = s(t, "x"),
                p.getY = s(t, "y"),
                p.x = p.xPrev = p.getX(),
                p.y = p.yPrev = p.getY(),
                _ = _ || c.core.globals().ScrollTrigger,
                "smooth" === c.getProperty(t, "scrollBehavior") && c.set(t, {
                    scrollBehavior: "auto"
                }),
                d && "none" !== d && (p.snap = 1,
                    p.snapInline = t.style.scrollSnapType,
                    t.style.scrollSnapType = "none"),
                null != e.x ? (p.add(p, "x", p.x, u(e.x, t, "x", p.x, e.offsetX || 0), o, a),
                    p._props.push("scrollTo_x")) : p.skipX = 1,
                null != e.y ? (p.add(p, "y", p.y, u(e.y, t, "y", p.y, e.offsetY || 0), o, a),
                    p._props.push("scrollTo_y")) : p.skipY = 1
        },
        render: function (t, e) {
            for (var n, r, i, s, a, u = e._pt, l = e.target, c = e.tween, f = e.autoKill, p = e.xPrev, d = e.yPrev, D = e.isWin, m = e.snap, v = e.snapInline; u;)
                u.r(t, u.d),
                u = u._next;
            n = D || !e.skipX ? e.getX() : p,
                i = (r = D || !e.skipY ? e.getY() : d) - d,
                s = n - p,
                a = g.autoKillThreshold,
                e.x < 0 && (e.x = 0),
                e.y < 0 && (e.y = 0),
                f && (!e.skipX && (a < s || s < -a) && n < o(l, "x") && (e.skipX = 1),
                    !e.skipY && (a < i || i < -a) && r < o(l, "y") && (e.skipY = 1),
                    e.skipX && e.skipY && (c.kill(),
                        e.vars.onAutoKill && e.vars.onAutoKill.apply(c, e.vars.onAutoKillParams || []))),
                D ? h.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (l.scrollTop = e.y),
                    e.skipX || (l.scrollLeft = e.x)),
                !m || 1 !== t && 0 !== t || (r = l.scrollTop,
                    n = l.scrollLeft,
                    v ? l.style.scrollSnapType = v : l.style.removeProperty("scroll-snap-type"),
                    l.scrollTop = r + 1,
                    l.scrollLeft = n + 1,
                    l.scrollTop = r,
                    l.scrollLeft = n),
                e.xPrev = e.x,
                e.yPrev = e.y,
                _ && _.update()
        },
        kill: function (t) {
            var e = "scrollTo" === t;
            !e && "scrollTo_x" !== t || (this.skipX = 1),
                !e && "scrollTo_y" !== t || (this.skipY = 1)
        }
    };
    m.max = o,
        m.getOffset = a,
        m.buildGetter = s,
        n() && c.registerPlugin(m),
        t.ScrollToPlugin = m,
        t.default = m,
        "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete t.default
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
        }
    }

    function n() {
        return g || "undefined" != typeof window && (g = window.gsap) && g.registerPlugin && g
    }

    function r(t, e) {
        return ~O.indexOf(t) && O[O.indexOf(t) + 1][e]
    }

    function i(t) {
        return !!~E.indexOf(t)
    }

    function o(t, e, n, r, i) {
        return t.addEventListener(e, n, {
            passive: !r,
            capture: !!i
        })
    }

    function s(t, e, n, r) {
        return t.removeEventListener(e, n, !!r)
    }

    function a() {
        return w && w.isPressed || S.cache++
    }

    function u(t, e) {
        function n(r) {
            if (r || 0 === r) {
                M && (m.history.scrollRestoration = "manual");
                var i = w && w.isPressed;
                r = n.v = Math.round(r) || (w && w.iOS ? 1 : 0),
                    t(r),
                    n.cacheID = S.cache,
                    i && B("ss", r)
            } else
                (e || S.cache !== n.cacheID || B("ref")) && (n.cacheID = S.cache,
                    n.v = t());
            return n.v + n.offset
        }
        return n.offset = 0,
            t && n
    }

    function l(t, e) {
        return (e && e._ctx && e._ctx.selector || g.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== g.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }

    function c(t, e) {
        var n = e.s,
            s = e.sc;
        i(t) && (t = v.scrollingElement || y);
        var l = S.indexOf(t),
            c = s === L.sc ? 1 : 2;
        ~l || (l = S.push(t) - 1),
            S[l + c] || o(t, "scroll", a);
        var f = S[l + c],
            h = f || (S[l + c] = u(r(t, n), !0) || (i(t) ? s : u((function (e) {
                return arguments.length ? t[n] = e : t[n]
            }))));
        return h.target = t,
            f || (h.smooth = "smooth" === g.getProperty(t, "scrollBehavior")),
            h
    }

    function f(t, e, n) {
        function r(t, e) {
            var r = P();
            e || u < r - s ? (o = i,
                i = t,
                a = s,
                s = r) : n ? i += t : i = o + (t - o) / (r - a) * (s - a)
        }
        var i = t,
            o = t,
            s = P(),
            a = s,
            u = e || 50,
            l = Math.max(500, 3 * u);
        return {
            update: r,
            reset: function () {
                o = i = n ? 0 : i,
                    a = s = 0
            },
            getVelocity: function (t) {
                var e = a,
                    u = o,
                    c = P();
                return !t && 0 !== t || t === i || r(t),
                    s === a || l < c - a ? 0 : (i + (n ? u : -u)) / ((n ? c : s) - e) * 1e3
            }
        }
    }

    function h(t, e) {
        return e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
    }

    function p(t) {
        var e = Math.max.apply(Math, t),
            n = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(n) ? e : n
    }

    function d() {
        (F = g.core.globals().ScrollTrigger) && F.core && function () {
            var t = F.core,
                e = t.bridge || {},
                n = t._scrollers,
                r = t._proxies;
            n.push.apply(n, S),
                r.push.apply(r, O),
                S = n,
                O = r,
                B = function (t, n) {
                    return e[t](n)
                }
        }()
    }

    function D(t) {
        return (g = t || n()) && "undefined" != typeof document && document.body && (m = window,
                y = (v = document).documentElement,
                x = v.body,
                E = [m, v, y, x],
                g.utils.clamp,
                A = g.core.context || function () {},
                b = "onpointerenter" in x ? "pointer" : "mouse",
                C = I.isTouch = m.matchMedia && m.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in m || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
                T = I.eventTypes = ("ontouchstart" in y ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in y ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
                setTimeout((function () {
                    return M = 0
                }), 500),
                d(),
                _ = 1),
            _
    }
    var g, _, m, v, y, x, C, b, F, E, w, T, A, M = 1,
        k = [],
        S = [],
        O = [],
        P = Date.now,
        B = function (t, e) {
            return e
        },
        R = "scrollLeft",
        N = "scrollTop",
        z = {
            s: R,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: u((function (t) {
                return arguments.length ? m.scrollTo(t, L.sc()) : m.pageXOffset || v[R] || y[R] || x[R] || 0
            }))
        },
        L = {
            s: N,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: z,
            sc: u((function (t) {
                return arguments.length ? m.scrollTo(z.sc(), t) : m.pageYOffset || v[N] || y[N] || x[N] || 0
            }))
        };
    z.op = L,
        S.cache = 0;
    var I = (Y.prototype.init = function (t) {
            _ || D(g) || console.warn("Please gsap.registerPlugin(Observer)"),
                F || d();
            var e = t.tolerance,
                n = t.dragMinimum,
                r = t.type,
                u = t.target,
                E = t.lineHeight,
                M = t.debounce,
                S = t.preventDefault,
                O = t.onStop,
                B = t.onStopDelay,
                R = t.ignore,
                N = t.wheelSpeed,
                I = t.event,
                Y = t.onDragStart,
                X = t.onDragEnd,
                j = t.onDrag,
                V = t.onPress,
                H = t.onRelease,
                U = t.onRight,
                W = t.onLeft,
                q = t.onUp,
                G = t.onDown,
                K = t.onChangeX,
                Q = t.onChangeY,
                $ = t.onChange,
                Z = t.onToggleX,
                J = t.onToggleY,
                tt = t.onHover,
                et = t.onHoverEnd,
                nt = t.onMove,
                rt = t.ignoreCheck,
                it = t.isNormalizer,
                ot = t.onGestureStart,
                st = t.onGestureEnd,
                at = t.onWheel,
                ut = t.onEnable,
                lt = t.onDisable,
                ct = t.onClick,
                ft = t.scrollSpeed,
                ht = t.capture,
                pt = t.allowClicks,
                dt = t.lockAxis,
                Dt = t.onLockAxis;

            function gt() {
                return Kt = P()
            }

            function _t(t, e) {
                return (zt.event = t) && R && ~R.indexOf(t.target) || e && Ht && "touch" !== t.pointerType || rt && rt(t, e)
            }

            function mt() {
                var t = zt.deltaX = p(qt),
                    n = zt.deltaY = p(Gt),
                    r = Math.abs(t) >= e,
                    i = Math.abs(n) >= e;
                $ && (r || i) && $(zt, t, n, qt, Gt),
                    r && (U && 0 < zt.deltaX && U(zt),
                        W && zt.deltaX < 0 && W(zt),
                        K && K(zt),
                        Z && zt.deltaX < 0 != Lt < 0 && Z(zt),
                        Lt = zt.deltaX,
                        qt[0] = qt[1] = qt[2] = 0),
                    i && (G && 0 < zt.deltaY && G(zt),
                        q && zt.deltaY < 0 && q(zt),
                        Q && Q(zt),
                        J && zt.deltaY < 0 != It < 0 && J(zt),
                        It = zt.deltaY,
                        Gt[0] = Gt[1] = Gt[2] = 0),
                    (Pt || Ot) && (nt && nt(zt),
                        Ot && (j(zt),
                            Ot = !1),
                        Pt = !1),
                    Rt && !(Rt = !1) && Dt && Dt(zt),
                    Bt && (at(zt),
                        Bt = !1),
                    kt = 0
            }

            function vt(t, e, n) {
                qt[n] += t,
                    Gt[n] += e,
                    zt._vx.update(t),
                    zt._vy.update(e),
                    M ? kt = kt || requestAnimationFrame(mt) : mt()
            }

            function yt(t, e) {
                dt && !Nt && (zt.axis = Nt = Math.abs(t) > Math.abs(e) ? "x" : "y",
                        Rt = !0),
                    "y" !== Nt && (qt[2] += t,
                        zt._vx.update(t, !0)),
                    "x" !== Nt && (Gt[2] += e,
                        zt._vy.update(e, !0)),
                    M ? kt = kt || requestAnimationFrame(mt) : mt()
            }

            function xt(t) {
                if (!_t(t, 1)) {
                    var e = (t = h(t, S)).clientX,
                        r = t.clientY,
                        i = e - zt.x,
                        o = r - zt.y,
                        s = zt.isDragging;
                    zt.x = e,
                        zt.y = r,
                        (s || Math.abs(zt.startX - e) >= n || Math.abs(zt.startY - r) >= n) && (j && (Ot = !0),
                            s || (zt.isDragging = !0),
                            yt(i, o),
                            s || Y && Y(zt))
                }
            }

            function Ct(t) {
                return t.touches && 1 < t.touches.length && (zt.isGesturing = !0) && ot(t, zt.isDragging)
            }

            function bt() {
                return (zt.isGesturing = !1) || st(zt)
            }

            function Ft(t) {
                if (!_t(t)) {
                    var e = Yt(),
                        n = Xt();
                    vt((e - jt) * ft, (n - Vt) * ft, 1),
                        jt = e,
                        Vt = n,
                        O && St.restart(!0)
                }
            }

            function Et(t) {
                if (!_t(t)) {
                    t = h(t, S),
                        at && (Bt = !0);
                    var e = (1 === t.deltaMode ? E : 2 === t.deltaMode ? m.innerHeight : 1) * N;
                    vt(t.deltaX * e, t.deltaY * e, 0),
                        O && !it && St.restart(!0)
                }
            }

            function wt(t) {
                if (!_t(t)) {
                    var e = t.clientX,
                        n = t.clientY,
                        r = e - zt.x,
                        i = n - zt.y;
                    zt.x = e,
                        zt.y = n,
                        Pt = !0,
                        (r || i) && yt(r, i)
                }
            }

            function Tt(t) {
                zt.event = t,
                    tt(zt)
            }

            function At(t) {
                zt.event = t,
                    et(zt)
            }

            function Mt(t) {
                return _t(t) || h(t, S) && ct(zt)
            }
            this.target = u = l(u) || y,
                this.vars = t,
                R = R && g.utils.toArray(R),
                e = e || 1e-9,
                n = n || 0,
                N = N || 1,
                ft = ft || 1,
                r = r || "wheel,touch,pointer",
                M = !1 !== M,
                E = E || parseFloat(m.getComputedStyle(x).lineHeight) || 22;
            var kt, St, Ot, Pt, Bt, Rt, Nt, zt = this,
                Lt = 0,
                It = 0,
                Yt = c(u, z),
                Xt = c(u, L),
                jt = Yt(),
                Vt = Xt(),
                Ht = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === T[0],
                Ut = i(u),
                Wt = u.ownerDocument || v,
                qt = [0, 0, 0],
                Gt = [0, 0, 0],
                Kt = 0,
                Qt = zt.onPress = function (t) {
                    _t(t, 1) || t && t.button || (zt.axis = Nt = null,
                        St.pause(),
                        zt.isPressed = !0,
                        t = h(t),
                        Lt = It = 0,
                        zt.startX = zt.x = t.clientX,
                        zt.startY = zt.y = t.clientY,
                        zt._vx.reset(),
                        zt._vy.reset(),
                        o(it ? u : Wt, T[1], xt, S, !0),
                        zt.deltaX = zt.deltaY = 0,
                        V && V(zt))
                },
                $t = zt.onRelease = function (t) {
                    if (!_t(t, 1)) {
                        s(it ? u : Wt, T[1], xt, !0);
                        var e = !isNaN(zt.y - zt.startY),
                            n = zt.isDragging && (3 < Math.abs(zt.x - zt.startX) || 3 < Math.abs(zt.y - zt.startY)),
                            r = h(t);
                        !n && e && (zt._vx.reset(),
                                zt._vy.reset(),
                                S && pt && g.delayedCall(.08, (function () {
                                    if (300 < P() - Kt && !t.defaultPrevented)
                                        if (t.target.click)
                                            t.target.click();
                                        else if (Wt.createEvent) {
                                        var e = Wt.createEvent("MouseEvents");
                                        e.initMouseEvent("click", !0, !0, m, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
                                            t.target.dispatchEvent(e)
                                    }
                                }))),
                            zt.isDragging = zt.isGesturing = zt.isPressed = !1,
                            O && !it && St.restart(!0),
                            X && n && X(zt),
                            H && H(zt, n)
                    }
                };
            St = zt._dc = g.delayedCall(B || .25, (function () {
                    zt._vx.reset(),
                        zt._vy.reset(),
                        St.pause(),
                        O && O(zt)
                })).pause(),
                zt.deltaX = zt.deltaY = 0,
                zt._vx = f(0, 50, !0),
                zt._vy = f(0, 50, !0),
                zt.scrollX = Yt,
                zt.scrollY = Xt,
                zt.isDragging = zt.isGesturing = zt.isPressed = !1,
                A(this),
                zt.enable = function (t) {
                    return zt.isEnabled || (o(Ut ? Wt : u, "scroll", a),
                            0 <= r.indexOf("scroll") && o(Ut ? Wt : u, "scroll", Ft, S, ht),
                            0 <= r.indexOf("wheel") && o(u, "wheel", Et, S, ht),
                            (0 <= r.indexOf("touch") && C || 0 <= r.indexOf("pointer")) && (o(u, T[0], Qt, S, ht),
                                o(Wt, T[2], $t),
                                o(Wt, T[3], $t),
                                pt && o(u, "click", gt, !1, !0),
                                ct && o(u, "click", Mt),
                                ot && o(Wt, "gesturestart", Ct),
                                st && o(Wt, "gestureend", bt),
                                tt && o(u, b + "enter", Tt),
                                et && o(u, b + "leave", At),
                                nt && o(u, b + "move", wt)),
                            zt.isEnabled = !0,
                            t && t.type && Qt(t),
                            ut && ut(zt)),
                        zt
                },
                zt.disable = function () {
                    zt.isEnabled && (k.filter((function (t) {
                            return t !== zt && i(t.target)
                        })).length || s(Ut ? Wt : u, "scroll", a),
                        zt.isPressed && (zt._vx.reset(),
                            zt._vy.reset(),
                            s(it ? u : Wt, T[1], xt, !0)),
                        s(Ut ? Wt : u, "scroll", Ft, ht),
                        s(u, "wheel", Et, ht),
                        s(u, T[0], Qt, ht),
                        s(Wt, T[2], $t),
                        s(Wt, T[3], $t),
                        s(u, "click", gt, !0),
                        s(u, "click", Mt),
                        s(Wt, "gesturestart", Ct),
                        s(Wt, "gestureend", bt),
                        s(u, b + "enter", Tt),
                        s(u, b + "leave", At),
                        s(u, b + "move", wt),
                        zt.isEnabled = zt.isPressed = zt.isDragging = !1,
                        lt && lt(zt))
                },
                zt.kill = zt.revert = function () {
                    zt.disable();
                    var t = k.indexOf(zt);
                    0 <= t && k.splice(t, 1),
                        w === zt && (w = 0)
                },
                k.push(zt),
                it && i(u) && (w = zt),
                zt.enable(I)
        },
        function (t, n, r) {
            n && e(t.prototype, n),
                r && e(t, r)
        }(Y, [{
            key: "velocityX",
            get: function () {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function () {
                return this._vy.getVelocity()
            }
        }]),
        Y);

    function Y(t) {
        this.init(t)
    }

    function X(t, e, n) {
        var r = ve(t) && ("clamp(" === t.substr(0, 6) || -1 < t.indexOf("max"));
        return (n["_" + e + "Clamp"] = r) ? t.substr(6, t.length - 7) : t
    }

    function j(t, e) {
        return !e || ve(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
    }

    function V() {
        return Ut = 1
    }

    function H() {
        return Ut = 0
    }

    function U(t) {
        return t
    }

    function W(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function q() {
        return "undefined" != typeof window
    }

    function G() {
        return Ot || q() && (Ot = window.gsap) && Ot.registerPlugin && Ot
    }

    function K(t) {
        return !!~Lt.indexOf(t)
    }

    function Q(t) {
        return ("Height" === t ? ue : Bt["inner" + t]) || Nt["client" + t] || zt["client" + t]
    }

    function $(t) {
        return r(t, "getBoundingClientRect") || (K(t) ? function () {
                return Je.width = Bt.innerWidth,
                    Je.height = ue,
                    Je
            } :
            function () {
                return Pe(t)
            }
        )
    }

    function Z(t, e) {
        var n = e.s,
            i = e.d2,
            o = e.d,
            s = e.a;
        return Math.max(0, (n = "scroll" + i) && (s = r(t, n)) ? s() - $(t)()[o] : K(t) ? (Nt[n] || zt[n]) - Q(i) : t[n] - t["offset" + i])
    }

    function J(t, e) {
        for (var n = 0; n < Qt.length; n += 3)
            e && !~e.indexOf(Qt[n + 1]) || t(Qt[n], Qt[n + 1], Qt[n + 2])
    }

    function tt(t) {
        return "function" == typeof t
    }

    function et(t) {
        return "number" == typeof t
    }

    function nt(t) {
        return "object" == typeof t
    }

    function rt(t, e, n) {
        return t && t.progress(e ? 0 : 1) && n && t.pause()
    }

    function it(t, e) {
        if (t.enabled) {
            var n = e(t);
            n && n.totalTime && (t.callbackAnimation = n)
        }
    }

    function ot(t) {
        return Bt.getComputedStyle(t)
    }

    function st(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }

    function at(t, e) {
        var n = e.d2;
        return t["offset" + n] || t["client" + n] || 0
    }

    function ut(t) {
        var e, n = [],
            r = t.labels,
            i = t.duration();
        for (e in r)
            n.push(r[e] / i);
        return n
    }

    function lt(t) {
        var e = Ot.utils.snap(t),
            n = Array.isArray(t) && t.slice(0).sort((function (t, e) {
                return t - e
            }));
        return n ? function (t, r, i) {
                var o;
                if (void 0 === i && (i = .001),
                    !r)
                    return e(t);
                if (0 < r) {
                    for (t -= i,
                        o = 0; o < n.length; o++)
                        if (n[o] >= t)
                            return n[o];
                    return n[o - 1]
                }
                for (o = n.length,
                    t += i; o--;)
                    if (n[o] <= t)
                        return n[o];
                return n[0]
            } :
            function (n, r, i) {
                void 0 === i && (i = .001);
                var o = e(n);
                return !r || Math.abs(o - n) < i || o - n < 0 == r < 0 ? o : e(r < 0 ? n - t : n + t)
            }
    }

    function ct(t, e, n, r) {
        return n.split(",").forEach((function (n) {
            return t(e, n, r)
        }))
    }

    function ft(t, e, n, r, i) {
        return t.addEventListener(e, n, {
            passive: !r,
            capture: !!i
        })
    }

    function ht(t, e, n, r) {
        return t.removeEventListener(e, n, !!r)
    }

    function pt(t, e, n) {
        (n = n && n.wheelHandler) && (t(e, "wheel", n),
            t(e, "touchmove", n))
    }

    function dt(t, e) {
        if (ve(t)) {
            var n = t.indexOf("="),
                r = ~n ? (t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
            ~n && (t.indexOf("%") > n && (r *= e / 100),
                    t = t.substr(0, n - 1)),
                t = r + (t in Ne ? Ne[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }

    function Dt(t, e, n, i, o, s, a, u) {
        var l = o.startColor,
            c = o.endColor,
            f = o.fontSize,
            h = o.indent,
            p = o.fontWeight,
            d = Rt.createElement("div"),
            D = K(n) || "fixed" === r(n, "pinType"),
            g = -1 !== t.indexOf("scroller"),
            _ = D ? zt : n,
            m = -1 !== t.indexOf("start"),
            v = m ? l : c,
            y = "border-color:" + v + ";font-size:" + f + ";color:" + v + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((g || u) && D ? "fixed;" : "absolute;"),
            !g && !u && D || (y += (i === L ? xe : Ce) + ":" + (s + parseFloat(h)) + "px;"),
            a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
            d._isStart = m,
            d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
            d.style.cssText = y,
            d.innerText = e || 0 === e ? t + "-" + e : t,
            _.children[0] ? _.insertBefore(d, _.children[0]) : _.appendChild(d),
            d._offset = d["offset" + i.op.d2],
            ze(d, 0, i, m),
            d
    }

    function gt() {
        return 34 < De() - _e && (ce = ce || requestAnimationFrame(Ge))
    }

    function _t() {
        te && te.isPressed && !(te.startX > zt.clientWidth) || (S.cache++,
            te ? ce = ce || requestAnimationFrame(Ge) : Ge(),
            _e || je("scrollStart"),
            _e = De())
    }

    function mt() {
        re = Bt.innerWidth,
            ne = Bt.innerHeight
    }

    function vt() {
        S.cache++,
            Ht || Jt || Rt.fullscreenElement || Rt.webkitFullscreenElement || ee && re === Bt.innerWidth && !(Math.abs(Bt.innerHeight - ne) > .25 * Bt.innerHeight) || It.restart(!0)
    }

    function yt() {
        return ht(en, "scrollEnd", yt) || Ue(!0)
    }

    function xt(t) {
        for (var e = 0; e < Ve.length; e += 5)
            (!t || Ve[e + 4] && Ve[e + 4].query === t) && (Ve[e].style.cssText = Ve[e + 1],
                Ve[e].getBBox && Ve[e].setAttribute("transform", Ve[e + 2] || ""),
                Ve[e + 3].uncache = 1)
    }

    function Ct(t, e) {
        var n;
        for (qt = 0; qt < Le.length; qt++)
            !(n = Le[qt]) || e && n._ctx !== e || (t ? n.kill(1) : n.revert(!0, !0));
        e && xt(e),
            e || je("revert")
    }

    function bt(t, e) {
        S.cache++,
            !e && fe || S.forEach((function (t) {
                return tt(t) && t.cacheID++ && (t.rec = 0)
            })),
            ve(t) && (Bt.history.scrollRestoration = se = t)
    }

    function Ft() {
        zt.appendChild(ae),
            ue = ae.offsetHeight || Bt.innerHeight,
            zt.removeChild(ae)
    }

    function Et(t, e, n, r) {
        if (!t._gsap.swappedIn) {
            for (var i, o = Ke.length, s = e.style, a = t.style; o--;)
                s[i = Ke[o]] = n[i];
            s.position = "absolute" === n.position ? "absolute" : "relative",
                "inline" === n.display && (s.display = "inline-block"),
                a[Ce] = a[xe] = "auto",
                s.flexBasis = n.flexBasis || "auto",
                s.overflow = "visible",
                s.boxSizing = "border-box",
                s[be] = at(t, z) + Oe,
                s[Fe] = at(t, L) + Oe,
                s[Me] = a[ke] = a.top = a.left = "0",
                Ze(r),
                a[be] = a.maxWidth = n[be],
                a[Fe] = a.maxHeight = n[Fe],
                a[Me] = n[Me],
                t.parentNode !== e && (t.parentNode.insertBefore(e, t),
                    e.appendChild(t)),
                t._gsap.swappedIn = !0
        }
    }

    function wt(t) {
        for (var e = Qe.length, n = t.style, r = [], i = 0; i < e; i++)
            r.push(Qe[i], n[Qe[i]]);
        return r.t = t,
            r
    }

    function Tt(t, e, n, r, i, o, s, a, u, c, f, h, p, d) {
        tt(t) && (t = t(a)),
            ve(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? dt("0" + t.substr(3), n) : 0));
        var D, g, _, m = p ? p.time() : 0;
        if (p && p.seek(0),
            isNaN(t) || (t = +t),
            et(t))
            p && (t = Ot.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, h, t)),
            s && ze(s, n, r, !0);
        else {
            tt(e) && (e = e(a));
            var v, y, x, C, b = (t || "0").split(" ");
            _ = l(e, a) || zt,
                (v = Pe(_) || {}) && (v.left || v.top) || "none" !== ot(_).display || (C = _.style.display,
                    _.style.display = "block",
                    v = Pe(_),
                    C ? _.style.display = C : _.style.removeProperty("display")),
                y = dt(b[0], v[r.d]),
                x = dt(b[1] || "0", n),
                t = v[r.p] - u[r.p] - c + y + i - x,
                s && ze(s, x, r, n - x < 20 || s._isStart && 20 < x),
                n -= n - x
        }
        if (d && (a[d] = t || -.001,
                t < 0 && (t = 0)),
            o) {
            var F = t + n,
                E = o._isStart;
            D = "scroll" + r.d2,
                ze(o, F, r, E && 20 < F || !E && (f ? Math.max(zt[D], Nt[D]) : o.parentNode[D]) <= F + 1),
                f && (u = Pe(s),
                    f && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Oe))
        }
        return p && _ && (D = Pe(_),
                p.seek(h),
                g = Pe(_),
                p._caScrollDist = D[r.p] - g[r.p],
                t = t / p._caScrollDist * h),
            p && p.seek(m),
            p ? t : Math.round(t)
    }

    function At(t, e, n, r) {
        if (t.parentNode !== e) {
            var i, o, s = t.style;
            if (e === zt) {
                for (i in t._stOrig = s.cssText,
                    o = ot(t))
                    +
                    i || tn.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                s.top = n,
                    s.left = r
            } else
                s.cssText = t._stOrig;
            Ot.core.getCache(t).uncache = 1,
                e.appendChild(t)
        }
    }

    function Mt(t, e, n) {
        var r = e,
            i = r;
        return function (e) {
            var o = Math.round(t());
            return o !== r && o !== i && 3 < Math.abs(o - r) && 3 < Math.abs(o - i) && (e = o,
                    n && n()),
                i = r,
                r = e
        }
    }

    function kt(t, e, n) {
        var r = {};
        r[e.p] = "+=" + n,
            Ot.set(t, r)
    }

    function St(t, e) {
        function n(e, o, s, a, u) {
            var l = n.tween,
                c = o.onComplete;
            s = s || r();
            var f = Mt(r, s, (function () {
                l.kill(),
                    n.tween = 0
            }));
            return u = a && u || 0,
                a = a || e - s,
                l && l.kill(),
                o[i] = e,
                (o.modifiers = {})[i] = function () {
                    return f(s + a * l.ratio + u * l.ratio * l.ratio)
                },
                o.onUpdate = function () {
                    S.cache++,
                        Ge()
                },
                o.onComplete = function () {
                    n.tween = 0,
                        c && c.call(l)
                },
                l = n.tween = Ot.to(t, o)
        }
        var r = c(t, e),
            i = "_scroll" + e.p2;
        return (t[i] = r).wheelHandler = function () {
                return n.tween && n.tween.kill() && (n.tween = 0)
            },
            ft(t, "wheel", r.wheelHandler),
            en.isTouch && ft(t, "touchmove", r.wheelHandler),
            n
    }
    I.version = "3.12.2",
        I.create = function (t) {
            return new I(t)
        },
        I.register = D,
        I.getAll = function () {
            return k.slice()
        },
        I.getById = function (t) {
            return k.filter((function (e) {
                return e.vars.id === t
            }))[0]
        },
        n() && g.registerPlugin(I);
    var Ot, Pt, Bt, Rt, Nt, zt, Lt, It, Yt, Xt, jt, Vt, Ht, Ut, Wt, qt, Gt, Kt, Qt, $t, Zt, Jt, te, ee, ne, re, ie, oe, se, ae, ue, le, ce, fe, he, pe, de = 1,
        De = Date.now,
        ge = De(),
        _e = 0,
        me = 0,
        ve = function (t) {
            return "string" == typeof t
        },
        ye = Math.abs,
        xe = "right",
        Ce = "bottom",
        be = "width",
        Fe = "height",
        Ee = "Right",
        we = "Left",
        Te = "Top",
        Ae = "Bottom",
        Me = "padding",
        ke = "margin",
        Se = "Width",
        Oe = "px",
        Pe = function (t, e) {
            var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== ot(t)[Wt] && Ot.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                r = t.getBoundingClientRect();
            return n && n.progress(0).kill(),
                r
        },
        Be = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Re = {
            toggleActions: "play",
            anticipatePin: 0
        },
        Ne = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        ze = function (t, e, n, r) {
            var i = {
                    display: "block"
                },
                o = n[r ? "os2" : "p2"],
                s = n[r ? "p2" : "os2"];
            t._isFlipped = r,
                i[n.a + "Percent"] = r ? -100 : 0,
                i[n.a] = r ? "1px" : 0,
                i["border" + o + Se] = 1,
                i["border" + s + Se] = 0,
                i[n.p] = e + "px",
                Ot.set(t, i)
        },
        Le = [],
        Ie = {},
        Ye = {},
        Xe = [],
        je = function (t) {
            return Ye[t] && Ye[t].map((function (t) {
                return t()
            })) || Xe
        },
        Ve = [],
        He = 0,
        Ue = function (t, e) {
            if (!_e || t) {
                Ft(),
                    fe = en.isRefreshing = !0,
                    S.forEach((function (t) {
                        return tt(t) && ++t.cacheID && (t.rec = t())
                    }));
                var n = je("refreshInit");
                $t && en.sort(),
                    e || Ct(),
                    S.forEach((function (t) {
                        tt(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
                            t(0))
                    })),
                    Le.slice(0).forEach((function (t) {
                        return t.refresh()
                    })),
                    Le.forEach((function (t, e) {
                        if (t._subPinOffset && t.pin) {
                            var n = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                r = t.pin[n];
                            t.revert(!0, 1),
                                t.adjustPinSpacing(t.pin[n] - r),
                                t.refresh()
                        }
                    })),
                    Le.forEach((function (t) {
                        var e = Z(t.scroller, t._dir);
                        ("max" === t.vars.end || t._endClamp && t.end > e) && t.setPositions(t.start, Math.max(t.start + 1, e), !0)
                    })),
                    n.forEach((function (t) {
                        return t && t.render && t.render(-1)
                    })),
                    S.forEach((function (t) {
                        tt(t) && (t.smooth && requestAnimationFrame((function () {
                                return t.target.style.scrollBehavior = "smooth"
                            })),
                            t.rec && t(t.rec))
                    })),
                    bt(se, 1),
                    It.pause(),
                    He++,
                    Ge(fe = 2),
                    Le.forEach((function (t) {
                        return tt(t.vars.onRefresh) && t.vars.onRefresh(t)
                    })),
                    fe = en.isRefreshing = !1,
                    je("refresh")
            } else
                ft(en, "scrollEnd", yt)
        },
        We = 0,
        qe = 1,
        Ge = function (t) {
            if (!fe || 2 === t) {
                en.isUpdating = !0,
                    pe && pe.update(0);
                var e = Le.length,
                    n = De(),
                    r = 50 <= n - ge,
                    i = e && Le[0].scroll();
                if (qe = i < We ? -1 : 1,
                    fe || (We = i),
                    r && (_e && !Ut && 200 < n - _e && (_e = 0,
                            je("scrollEnd")),
                        jt = ge,
                        ge = n),
                    qe < 0) {
                    for (qt = e; 0 < qt--;)
                        Le[qt] && Le[qt].update(0, r);
                    qe = 1
                } else
                    for (qt = 0; qt < e; qt++)
                        Le[qt] && Le[qt].update(0, r);
                en.isUpdating = !1
            }
            ce = 0
        },
        Ke = ["left", "top", Ce, xe, ke + Ae, ke + Ee, ke + Te, ke + we, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Qe = Ke.concat([be, Fe, "boxSizing", "max" + Se, "maxHeight", "position", ke, Me, Me + Te, Me + Ee, Me + Ae, Me + we]),
        $e = /([A-Z])/g,
        Ze = function (t) {
            if (t) {
                var e, n, r = t.t.style,
                    i = t.length,
                    o = 0;
                for ((t.t._gsap || Ot.core.getCache(t.t)).uncache = 1; o < i; o += 2)
                    n = t[o + 1],
                    e = t[o],
                    n ? r[e] = n : r[e] && r.removeProperty(e.replace($e, "-$1").toLowerCase())
            }
        },
        Je = {
            left: 0,
            top: 0
        },
        tn = /(webkit|moz|length|cssText|inset)/i,
        en = (nn.prototype.init = function (t, e) {
                if (this.progress = this.start = 0,
                    this.vars && this.kill(!0, !0),
                    me) {
                    var n, i, o, s, a, u, f, h, p, d, D, g, _, m, v, y, x, C, b, F, E, w, T, A, M, k, P, B, R, N, I, Y, V, H, q, G, J, ct, pt, gt = (t = st(ve(t) || et(t) || t.nodeType ? {
                            trigger: t
                        } : t, Re)).onUpdate,
                        mt = t.toggleClass,
                        xt = t.id,
                        Ct = t.onToggle,
                        bt = t.onRefresh,
                        Ft = t.scrub,
                        Mt = t.trigger,
                        Pt = t.pin,
                        Lt = t.pinSpacing,
                        It = t.invalidateOnRefresh,
                        Vt = t.anticipatePin,
                        Wt = t.onScrubComplete,
                        Gt = t.onSnapComplete,
                        Kt = t.once,
                        Qt = t.snap,
                        Jt = t.pinReparent,
                        te = t.pinSpacer,
                        ee = t.containerAnimation,
                        ne = t.fastScrollEnd,
                        re = t.preventOverlaps,
                        ie = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? z : L,
                        oe = !Ft && 0 !== Ft,
                        se = l(t.scroller || Bt),
                        ae = Ot.core.getCache(se),
                        ue = K(se),
                        ce = "fixed" === ("pinType" in t ? t.pinType : r(se, "pinType") || ue && "fixed"),
                        ge = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                        xe = oe && t.toggleActions.split(" "),
                        Ce = "markers" in t ? t.markers : Re.markers,
                        Ne = ue ? 0 : parseFloat(ot(se)["border" + ie.p2 + Se]) || 0,
                        ze = this,
                        Ye = t.onRefreshInit && function () {
                            return t.onRefreshInit(ze)
                        },
                        Xe = function (t, e, n) {
                            var i = n.d,
                                o = n.d2,
                                s = n.a;
                            return (s = r(t, "getBoundingClientRect")) ? function () {
                                    return s()[i]
                                } :
                                function () {
                                    return (e ? Q(o) : t["client" + o]) || 0
                                }
                        }(se, ue, ie),
                        je = function (t, e) {
                            return !e || ~O.indexOf(t) ? $(t) : function () {
                                return Je
                            }
                        }(se, ue),
                        Ve = 0,
                        We = 0,
                        Ge = 0,
                        Ke = c(se, ie);
                    if (ze._startClamp = ze._endClamp = !1,
                        ze._dir = ie,
                        Vt *= 45,
                        ze.scroller = se,
                        ze.scroll = ee ? ee.time.bind(ee) : Ke,
                        s = Ke(),
                        ze.vars = t,
                        e = e || t.animation,
                        "refreshPriority" in t && ($t = 1,
                            -9999 === t.refreshPriority && (pe = ze)),
                        ae.tweenScroll = ae.tweenScroll || {
                            top: St(se, L),
                            left: St(se, z)
                        },
                        ze.tweenTo = n = ae.tweenScroll[ie.p],
                        ze.scrubDuration = function (t) {
                            (V = et(t) && t) ? Y ? Y.duration(t) : Y = Ot.to(e, {
                                ease: "expo",
                                totalProgress: "+=0",
                                duration: V,
                                paused: !0,
                                onComplete: function () {
                                    return Wt && Wt(ze)
                                }
                            }): (Y && Y.progress(1).kill(),
                                Y = 0)
                        },
                        e && (e.vars.lazy = !1,
                            e._initted && !ze.isReverted || !1 !== e.vars.immediateRender && !1 !== t.immediateRender && e.duration() && e.render(0, !0, !0),
                            ze.animation = e.pause(),
                            (e.scrollTrigger = ze).scrubDuration(Ft),
                            N = 0,
                            xt = xt || e.vars.id),
                        Qt && (nt(Qt) && !Qt.push || (Qt = {
                                snapTo: Qt
                            }),
                            "scrollBehavior" in zt.style && Ot.set(ue ? [zt, Nt] : se, {
                                scrollBehavior: "auto"
                            }),
                            S.forEach((function (t) {
                                return tt(t) && t.target === (ue ? Rt.scrollingElement || Nt : se) && (t.smooth = !1)
                            })),
                            o = tt(Qt.snapTo) ? Qt.snapTo : "labels" === Qt.snapTo ? function (t) {
                                return function (e) {
                                    return Ot.utils.snap(ut(t), e)
                                }
                            }(e) : "labelsDirectional" === Qt.snapTo ? function (t) {
                                return function (e, n) {
                                    return lt(ut(t))(e, n.direction)
                                }
                            }(e) : !1 !== Qt.directional ? function (t, e) {
                                return lt(Qt.snapTo)(t, De() - We < 500 ? 0 : e.direction)
                            } :
                            Ot.utils.snap(Qt.snapTo),
                            H = nt(H = Qt.duration || {
                                min: .1,
                                max: 2
                            }) ? Xt(H.min, H.max) : Xt(H, H),
                            q = Ot.delayedCall(Qt.delay || V / 2 || .1, (function () {
                                var t = Ke(),
                                    r = De() - We < 500,
                                    i = n.tween;
                                if (!(r || Math.abs(ze.getVelocity()) < 10) || i || Ut || Ve === t)
                                    ze.isActive && Ve !== t && q.restart(!0);
                                else {
                                    var s = (t - u) / m,
                                        a = e && !oe ? e.totalProgress() : s,
                                        l = r ? 0 : (a - I) / (De() - jt) * 1e3 || 0,
                                        c = Ot.utils.clamp(-s, 1 - s, ye(l / 2) * l / .185),
                                        h = s + (!1 === Qt.inertia ? 0 : c),
                                        p = Xt(0, 1, o(h, ze)),
                                        d = Math.round(u + p * m),
                                        D = Qt.onStart,
                                        g = Qt.onInterrupt,
                                        _ = Qt.onComplete;
                                    if (t <= f && u <= t && d !== t) {
                                        if (i && !i._initted && i.data <= ye(d - t))
                                            return;
                                        !1 === Qt.inertia && (c = p - s),
                                            n(d, {
                                                duration: H(ye(.185 * Math.max(ye(h - a), ye(p - a)) / l / .05 || 0)),
                                                ease: Qt.ease || "power3",
                                                data: ye(d - t),
                                                onInterrupt: function () {
                                                    return q.restart(!0) && g && g(ze)
                                                },
                                                onComplete: function () {
                                                    ze.update(),
                                                        Ve = Ke(),
                                                        N = I = e && !oe ? e.totalProgress() : ze.progress,
                                                        Gt && Gt(ze),
                                                        _ && _(ze)
                                                }
                                            }, t, c * m, d - t - c * m),
                                            D && D(ze, n.tween)
                                    }
                                }
                            })).pause()),
                        xt && (Ie[xt] = ze),
                        pt = (pt = (Mt = ze.trigger = l(Mt || !0 !== Pt && Pt)) && Mt._gsap && Mt._gsap.stRevert) && pt(ze),
                        Pt = !0 === Pt ? Mt : l(Pt),
                        ve(mt) && (mt = {
                            targets: Mt,
                            className: mt
                        }),
                        Pt && (!1 === Lt || Lt === ke || (Lt = !(!Lt && Pt.parentNode && Pt.parentNode.style && "flex" === ot(Pt.parentNode).display) && Me),
                            ze.pin = Pt,
                            (i = Ot.core.getCache(Pt)).spacer ? v = i.pinState : (te && ((te = l(te)) && !te.nodeType && (te = te.current || te.nativeElement),
                                    i.spacerIsNative = !!te,
                                    te && (i.spacerState = wt(te))),
                                i.spacer = C = te || Rt.createElement("div"),
                                C.classList.add("pin-spacer"),
                                xt && C.classList.add("pin-spacer-" + xt),
                                i.pinState = v = wt(Pt)),
                            !1 !== t.force3D && Ot.set(Pt, {
                                force3D: !0
                            }),
                            ze.spacer = C = i.spacer,
                            R = ot(Pt),
                            A = R[Lt + ie.os2],
                            F = Ot.getProperty(Pt),
                            E = Ot.quickSetter(Pt, ie.a, Oe),
                            Et(Pt, C, R),
                            x = wt(Pt)),
                        Ce) {
                        g = nt(Ce) ? st(Ce, Be) : Be,
                            d = Dt("scroller-start", xt, se, ie, g, 0),
                            D = Dt("scroller-end", xt, se, ie, g, 0, d),
                            b = d["offset" + ie.op.d2];
                        var Qe = l(r(se, "content") || se);
                        h = this.markerStart = Dt("start", xt, Qe, ie, g, b, 0, ee),
                            p = this.markerEnd = Dt("end", xt, Qe, ie, g, b, 0, ee),
                            ee && (ct = Ot.quickSetter([h, p], ie.a, Oe)),
                            ce || O.length && !0 === r(se, "fixedMarkers") || (function (t) {
                                    var e = ot(t).position;
                                    t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
                                }(ue ? zt : se),
                                Ot.set([d, D], {
                                    force3D: !0
                                }),
                                k = Ot.quickSetter(d, ie.a, Oe),
                                B = Ot.quickSetter(D, ie.a, Oe))
                    }
                    if (ee) {
                        var $e = ee.vars.onUpdate,
                            tn = ee.vars.onUpdateParams;
                        ee.eventCallback("onUpdate", (function () {
                            ze.update(0, 0, 1),
                                $e && $e.apply(ee, tn || [])
                        }))
                    }
                    if (ze.previous = function () {
                            return Le[Le.indexOf(ze) - 1]
                        },
                        ze.next = function () {
                            return Le[Le.indexOf(ze) + 1]
                        },
                        ze.revert = function (t, n) {
                            if (!n)
                                return ze.kill(!0);
                            var r = !1 !== t || !ze.enabled,
                                i = Ht;
                            r !== ze.isReverted && (r && (G = Math.max(Ke(), ze.scroll.rec || 0),
                                    Ge = ze.progress,
                                    J = e && e.progress()),
                                h && [h, p, d, D].forEach((function (t) {
                                    return t.style.display = r ? "none" : "block"
                                })),
                                r && (Ht = ze).update(r),
                                !Pt || Jt && ze.isActive || (r ? function (t, e, n) {
                                    Ze(n);
                                    var r = t._gsap;
                                    if (r.spacerIsNative)
                                        Ze(r.spacerState);
                                    else if (t._gsap.swappedIn) {
                                        var i = e.parentNode;
                                        i && (i.insertBefore(t, e),
                                            i.removeChild(e))
                                    }
                                    t._gsap.swappedIn = !1
                                }(Pt, C, v) : Et(Pt, C, ot(Pt), M)),
                                r || ze.update(r),
                                Ht = i,
                                ze.isReverted = r)
                        },
                        ze.refresh = function (r, i, o, g) {
                            if (!Ht && ze.enabled || i)
                                if (Pt && r && _e)
                                    ft(nn, "scrollEnd", yt);
                                else {
                                    !fe && Ye && Ye(ze),
                                        Ht = ze,
                                        n.tween && !o && (n.tween.kill(),
                                            n.tween = 0),
                                        Y && Y.pause(),
                                        It && e && e.revert({
                                            kill: !1
                                        }).invalidate(),
                                        ze.isReverted || ze.revert(!0, !0),
                                        ze._subPinOffset = !1;
                                    var b, E, A, k, S, O, B, R, N, I, j, V, H, U = Xe(),
                                        W = je(),
                                        K = ee ? ee.duration() : Z(se, ie),
                                        Q = m <= .01,
                                        $ = 0,
                                        et = g || 0,
                                        rt = nt(o) ? o.end : t.end,
                                        it = t.endTrigger || Mt,
                                        st = nt(o) ? o.start : t.start || (0 !== t.start && Mt ? Pt ? "0 0" : "0 100%" : 0),
                                        ut = ze.pinnedContainer = t.pinnedContainer && l(t.pinnedContainer, ze),
                                        lt = Mt && Math.max(0, Le.indexOf(ze)) || 0,
                                        ct = lt;
                                    for (Ce && nt(o) && (V = Ot.getProperty(d, ie.p),
                                            H = Ot.getProperty(D, ie.p)); ct--;)
                                        (O = Le[ct]).end || O.refresh(0, 1) || (Ht = ze),
                                        !(B = O.pin) || B !== Mt && B !== Pt && B !== ut || O.isReverted || ((I = I || []).unshift(O),
                                            O.revert(!0, !0)),
                                        O !== Le[ct] && (lt--,
                                            ct--);
                                    for (tt(st) && (st = st(ze)),
                                        st = X(st, "start", ze),
                                        u = Tt(st, Mt, U, ie, Ke(), h, d, ze, W, Ne, ce, K, ee, ze._startClamp && "_startClamp") || (Pt ? -.001 : 0),
                                        tt(rt) && (rt = rt(ze)),
                                        ve(rt) && !rt.indexOf("+=") && (~rt.indexOf(" ") ? rt = (ve(st) ? st.split(" ")[0] : "") + rt : ($ = dt(rt.substr(2), U),
                                            rt = ve(st) ? st : (ee ? Ot.utils.mapRange(0, ee.duration(), ee.scrollTrigger.start, ee.scrollTrigger.end, u) : u) + $,
                                            it = Mt)),
                                        rt = X(rt, "end", ze),
                                        f = Math.max(u, Tt(rt || (it ? "100% 0" : K), it, U, ie, Ke() + $, p, D, ze, W, Ne, ce, K, ee, ze._endClamp && "_endClamp")) || -.001,
                                        $ = 0,
                                        ct = lt; ct--;)
                                        (B = (O = Le[ct]).pin) && O.start - O._pinPush <= u && !ee && 0 < O.end && (b = O.end - (ze._startClamp ? Math.max(0, O.start) : O.start),
                                            (B === Mt && O.start - O._pinPush < u || B === ut) && isNaN(st) && ($ += b * (1 - O.progress)),
                                            B === Pt && (et += b));
                                    if (u += $,
                                        f += $,
                                        ze._startClamp && (ze._startClamp += $),
                                        ze._endClamp && !fe && (ze._endClamp = f || -.001,
                                            f = Math.min(f, Z(se, ie))),
                                        m = f - u || (u -= .01) && .001,
                                        Q && (Ge = Ot.utils.clamp(0, 1, Ot.utils.normalize(u, f, G))),
                                        ze._pinPush = et,
                                        h && $ && ((b = {})[ie.a] = "+=" + $,
                                            ut && (b[ie.p] = "-=" + Ke()),
                                            Ot.set([h, p], b)),
                                        Pt)
                                        b = ot(Pt),
                                        k = ie === L,
                                        A = Ke(),
                                        w = parseFloat(F(ie.a)) + et,
                                        !K && 1 < f && (j = {
                                                style: j = (ue ? Rt.scrollingElement || Nt : se).style,
                                                value: j["overflow" + ie.a.toUpperCase()]
                                            },
                                            ue && "scroll" !== ot(zt)["overflow" + ie.a.toUpperCase()] && (j.style["overflow" + ie.a.toUpperCase()] = "scroll")),
                                        Et(Pt, C, b),
                                        x = wt(Pt),
                                        E = Pe(Pt, !0),
                                        R = ce && c(se, k ? z : L)(),
                                        Lt && ((M = [Lt + ie.os2, m + et + Oe]).t = C,
                                            (ct = Lt === Me ? at(Pt, ie) + m + et : 0) && M.push(ie.d, ct + Oe),
                                            Ze(M),
                                            ut && Le.forEach((function (t) {
                                                t.pin === ut && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                            })),
                                            ce && Ke(G)),
                                        ce && ((S = {
                                                top: E.top + (k ? A - u : R) + Oe,
                                                left: E.left + (k ? R : A - u) + Oe,
                                                boxSizing: "border-box",
                                                position: "fixed"
                                            })[be] = S.maxWidth = Math.ceil(E.width) + Oe,
                                            S[Fe] = S.maxHeight = Math.ceil(E.height) + Oe,
                                            S[ke] = S[ke + Te] = S[ke + Ee] = S[ke + Ae] = S[ke + we] = "0",
                                            S[Me] = b[Me],
                                            S[Me + Te] = b[Me + Te],
                                            S[Me + Ee] = b[Me + Ee],
                                            S[Me + Ae] = b[Me + Ae],
                                            S[Me + we] = b[Me + we],
                                            y = function (t, e, n) {
                                                for (var r, i = [], o = t.length, s = n ? 8 : 0; s < o; s += 2)
                                                    r = t[s],
                                                    i.push(r, r in e ? e[r] : t[s + 1]);
                                                return i.t = t.t,
                                                    i
                                            }(v, S, Jt),
                                            fe && Ke(0)),
                                        e ? (N = e._initted,
                                            Zt(1),
                                            e.render(e.duration(), !0, !0),
                                            T = F(ie.a) - w + m + et,
                                            P = 1 < Math.abs(m - T),
                                            ce && P && y.splice(y.length - 2, 2),
                                            e.render(0, !0, !0),
                                            N || e.invalidate(!0),
                                            e.parent || e.totalTime(e.totalTime()),
                                            Zt(0)) : T = m,
                                        j && (j.value ? j.style["overflow" + ie.a.toUpperCase()] = j.value : j.style.removeProperty("overflow-" + ie.a));
                                    else if (Mt && Ke() && !ee)
                                        for (E = Mt.parentNode; E && E !== zt;)
                                            E._pinOffset && (u -= E._pinOffset,
                                                f -= E._pinOffset),
                                            E = E.parentNode;
                                    I && I.forEach((function (t) {
                                            return t.revert(!1, !0)
                                        })),
                                        ze.start = u,
                                        ze.end = f,
                                        s = a = fe ? G : Ke(),
                                        ee || fe || (s < G && Ke(G),
                                            ze.scroll.rec = 0),
                                        ze.revert(!1, !0),
                                        We = De(),
                                        q && (Ve = -1,
                                            q.restart(!0)),
                                        Ht = 0,
                                        e && oe && (e._initted || J) && e.progress() !== J && e.progress(J || 0, !0).render(e.time(), !0, !0),
                                        (Q || Ge !== ze.progress || ee) && (e && !oe && e.totalProgress(ee && u < -.001 && !Ge ? Ot.utils.normalize(u, f, 0) : Ge, !0),
                                            ze.progress = Q || (s - u) / m === Ge ? 0 : Ge),
                                        Pt && Lt && (C._pinOffset = Math.round(ze.progress * T)),
                                        Y && Y.invalidate(),
                                        isNaN(V) || (V -= Ot.getProperty(d, ie.p),
                                            H -= Ot.getProperty(D, ie.p),
                                            kt(d, ie, V),
                                            kt(h, ie, V - (g || 0)),
                                            kt(D, ie, H),
                                            kt(p, ie, H - (g || 0))),
                                        Q && !fe && ze.update(),
                                        !bt || fe || _ || (_ = !0,
                                            bt(ze),
                                            _ = !1)
                                }
                        },
                        ze.getVelocity = function () {
                            return (Ke() - a) / (De() - jt) * 1e3 || 0
                        },
                        ze.endAnimation = function () {
                            rt(ze.callbackAnimation),
                                e && (Y ? Y.progress(1) : e.paused() ? oe || rt(e, ze.direction < 0, 1) : rt(e, e.reversed()))
                        },
                        ze.labelToScroll = function (t) {
                            return e && e.labels && (u || ze.refresh() || u) + e.labels[t] / e.duration() * m || 0
                        },
                        ze.getTrailing = function (t) {
                            var e = Le.indexOf(ze),
                                n = 0 < ze.direction ? Le.slice(0, e).reverse() : Le.slice(e + 1);
                            return (ve(t) ? n.filter((function (e) {
                                return e.vars.preventOverlaps === t
                            })) : n).filter((function (t) {
                                return 0 < ze.direction ? t.end <= u : t.start >= f
                            }))
                        },
                        ze.update = function (t, r, i) {
                            if (!ee || i || t) {
                                var o, l, c, h, p, D, g, _ = !0 === fe ? G : ze.scroll(),
                                    v = t ? 0 : (_ - u) / m,
                                    b = v < 0 ? 0 : 1 < v ? 1 : v || 0,
                                    F = ze.progress;
                                if (r && (a = s,
                                        s = ee ? Ke() : _,
                                        Qt && (I = N,
                                            N = e && !oe ? e.totalProgress() : b)),
                                    Vt && !b && Pt && !Ht && !de && _e && u < _ + (_ - a) / (De() - jt) * Vt && (b = 1e-4),
                                    b !== F && ze.enabled) {
                                    if (h = (p = (o = ze.isActive = !!b && b < 1) != (!!F && F < 1)) || !!b != !!F,
                                        ze.direction = F < b ? 1 : -1,
                                        ze.progress = b,
                                        h && !Ht && (l = b && !F ? 0 : 1 === b ? 1 : 1 === F ? 2 : 3,
                                            oe && (c = !p && "none" !== xe[l + 1] && xe[l + 1] || xe[l],
                                                g = e && ("complete" === c || "reset" === c || c in e))),
                                        re && (p || g) && (g || Ft || !e) && (tt(re) ? re(ze) : ze.getTrailing(re).forEach((function (t) {
                                            return t.endAnimation()
                                        }))),
                                        oe || (!Y || Ht || de ? e && e.totalProgress(b, !(!Ht || !We && !t)) : (Y._dp._time - Y._start !== Y._time && Y.render(Y._dp._time - Y._start),
                                            Y.resetTo ? Y.resetTo("totalProgress", b, e._tTime / e._tDur) : (Y.vars.totalProgress = b,
                                                Y.invalidate().restart()))),
                                        Pt)
                                        if (t && Lt && (C.style[Lt + ie.os2] = A),
                                            ce) {
                                            if (h) {
                                                if (D = !t && F < b && _ < f + 1 && _ + 1 >= Z(se, ie),
                                                    Jt)
                                                    if (t || !o && !D)
                                                        At(Pt, C);
                                                    else {
                                                        var M = Pe(Pt, !0),
                                                            S = _ - u;
                                                        At(Pt, zt, M.top + (ie === L ? S : 0) + Oe, M.left + (ie === L ? 0 : S) + Oe)
                                                    }
                                                Ze(o || D ? y : x),
                                                    P && b < 1 && o || E(w + (1 !== b || D ? 0 : T))
                                            }
                                        } else
                                            E(W(w + T * b));
                                    !Qt || n.tween || Ht || de || q.restart(!0),
                                        mt && (p || Kt && b && (b < 1 || !le)) && Yt(mt.targets).forEach((function (t) {
                                            return t.classList[o || Kt ? "add" : "remove"](mt.className)
                                        })),
                                        !gt || oe || t || gt(ze),
                                        h && !Ht ? (oe && (g && ("complete" === c ? e.pause().totalProgress(1) : "reset" === c ? e.restart(!0).pause() : "restart" === c ? e.restart(!0) : e[c]()),
                                                gt && gt(ze)),
                                            !p && le || (Ct && p && it(ze, Ct),
                                                ge[l] && it(ze, ge[l]),
                                                Kt && (1 === b ? ze.kill(!1, 1) : ge[l] = 0),
                                                p || ge[l = 1 === b ? 1 : 3] && it(ze, ge[l])),
                                            ne && !o && Math.abs(ze.getVelocity()) > (et(ne) ? ne : 2500) && (rt(ze.callbackAnimation),
                                                Y ? Y.progress(1) : rt(e, "reverse" === c ? 1 : !b, 1))) : oe && gt && !Ht && gt(ze)
                                }
                                if (B) {
                                    var O = ee ? _ / ee.duration() * (ee._caScrollDist || 0) : _;
                                    k(O + (d._isFlipped ? 1 : 0)),
                                        B(O)
                                }
                                ct && ct(-_ / ee.duration() * (ee._caScrollDist || 0))
                            }
                        },
                        ze.enable = function (t, e) {
                            ze.enabled || (ze.enabled = !0,
                                ft(se, "resize", vt),
                                ue || ft(se, "scroll", _t),
                                Ye && ft(nn, "refreshInit", Ye),
                                !1 !== t && (ze.progress = Ge = 0,
                                    s = a = Ve = Ke()),
                                !1 !== e && ze.refresh())
                        },
                        ze.getTween = function (t) {
                            return t && n ? n.tween : Y
                        },
                        ze.setPositions = function (t, e, n, r) {
                            if (ee) {
                                var i = ee.scrollTrigger,
                                    o = ee.duration(),
                                    s = i.end - i.start;
                                t = i.start + s * t / o,
                                    e = i.start + s * e / o
                            }
                            ze.refresh(!1, !1, {
                                    start: j(t, n && !!ze._startClamp),
                                    end: j(e, n && !!ze._endClamp)
                                }, r),
                                ze.update()
                        },
                        ze.adjustPinSpacing = function (t) {
                            if (M && t) {
                                var e = M.indexOf(ie.d) + 1;
                                M[e] = parseFloat(M[e]) + t + Oe,
                                    M[1] = parseFloat(M[1]) + t + Oe,
                                    Ze(M)
                            }
                        },
                        ze.disable = function (t, e) {
                            if (ze.enabled && (!1 !== t && ze.revert(!0, !0),
                                    ze.enabled = ze.isActive = !1,
                                    e || Y && Y.pause(),
                                    G = 0,
                                    i && (i.uncache = 1),
                                    Ye && ht(nn, "refreshInit", Ye),
                                    q && (q.pause(),
                                        n.tween && n.tween.kill() && (n.tween = 0)),
                                    !ue)) {
                                for (var r = Le.length; r--;)
                                    if (Le[r].scroller === se && Le[r] !== ze)
                                        return;
                                ht(se, "resize", vt),
                                    ue || ht(se, "scroll", _t)
                            }
                        },
                        ze.kill = function (n, r) {
                            ze.disable(n, r),
                                Y && !r && Y.kill(),
                                xt && delete Ie[xt];
                            var o = Le.indexOf(ze);
                            0 <= o && Le.splice(o, 1),
                                o === qt && 0 < qe && qt--,
                                o = 0,
                                Le.forEach((function (t) {
                                    return t.scroller === ze.scroller && (o = 1)
                                })),
                                o || fe || (ze.scroll.rec = 0),
                                e && (e.scrollTrigger = null,
                                    n && e.revert({
                                        kill: !1
                                    }),
                                    r || e.kill()),
                                h && [h, p, d, D].forEach((function (t) {
                                    return t.parentNode && t.parentNode.removeChild(t)
                                })),
                                pe === ze && (pe = 0),
                                Pt && (i && (i.uncache = 1),
                                    o = 0,
                                    Le.forEach((function (t) {
                                        return t.pin === Pt && o++
                                    })),
                                    o || (i.spacer = 0)),
                                t.onKill && t.onKill(ze)
                        },
                        Le.push(ze),
                        ze.enable(!1, !1),
                        pt && pt(ze),
                        e && e.add && !m) {
                        var en = ze.update;
                        ze.update = function () {
                                ze.update = en,
                                    u || f || ze.refresh()
                            },
                            Ot.delayedCall(.01, ze.update),
                            m = .01,
                            u = f = 0
                    } else
                        ze.refresh();
                    Pt && function () {
                        if (he !== He) {
                            var t = he = He;
                            requestAnimationFrame((function () {
                                return t === He && Ue(!0)
                            }))
                        }
                    }()
                } else
                    this.update = this.refresh = this.kill = U
            },
            nn.register = function (t) {
                return Pt || (Ot = t || G(),
                        q() && window.document && nn.enable(),
                        Pt = me),
                    Pt
            },
            nn.defaults = function (t) {
                if (t)
                    for (var e in t)
                        Re[e] = t[e];
                return Re
            },
            nn.disable = function (t, e) {
                me = 0,
                    Le.forEach((function (n) {
                        return n[e ? "kill" : "disable"](t)
                    })),
                    ht(Bt, "wheel", _t),
                    ht(Rt, "scroll", _t),
                    clearInterval(Vt),
                    ht(Rt, "touchcancel", U),
                    ht(zt, "touchstart", U),
                    ct(ht, Rt, "pointerdown,touchstart,mousedown", V),
                    ct(ht, Rt, "pointerup,touchend,mouseup", H),
                    It.kill(),
                    J(ht);
                for (var n = 0; n < S.length; n += 3)
                    pt(ht, S[n], S[n + 1]),
                    pt(ht, S[n], S[n + 2])
            },
            nn.enable = function () {
                if (Bt = window,
                    Rt = document,
                    Nt = Rt.documentElement,
                    zt = Rt.body,
                    Ot && (Yt = Ot.utils.toArray,
                        Xt = Ot.utils.clamp,
                        oe = Ot.core.context || U,
                        Zt = Ot.core.suppressOverwrites || U,
                        se = Bt.history.scrollRestoration || "auto",
                        We = Bt.pageYOffset,
                        Ot.core.globals("ScrollTrigger", nn),
                        zt)) {
                    me = 1,
                        (ae = document.createElement("div")).style.height = "100vh",
                        ae.style.position = "absolute",
                        Ft(),
                        function t() {
                            return me && requestAnimationFrame(t)
                        }(),
                        I.register(Ot),
                        nn.isTouch = I.isTouch,
                        ie = I.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                        ft(Bt, "wheel", _t),
                        Lt = [Bt, Rt, Nt, zt],
                        Ot.matchMedia ? (nn.matchMedia = function (t) {
                                var e, n = Ot.matchMedia();
                                for (e in t)
                                    n.add(e, t[e]);
                                return n
                            },
                            Ot.addEventListener("matchMediaInit", (function () {
                                return Ct()
                            })),
                            Ot.addEventListener("matchMediaRevert", (function () {
                                return xt()
                            })),
                            Ot.addEventListener("matchMedia", (function () {
                                Ue(0, 1),
                                    je("matchMedia")
                            })),
                            Ot.matchMedia("(orientation: portrait)", (function () {
                                return mt(),
                                    mt
                            }))) : console.warn("Requires GSAP 3.11.0 or later"),
                        mt(),
                        ft(Rt, "scroll", _t);
                    var t, e, n = zt.style,
                        r = n.borderTopStyle,
                        i = Ot.core.Animation.prototype;
                    for (i.revert || Object.defineProperty(i, "revert", {
                            value: function () {
                                return this.time(-.01, !0)
                            }
                        }),
                        n.borderTopStyle = "solid",
                        t = Pe(zt),
                        L.m = Math.round(t.top + L.sc()) || 0,
                        z.m = Math.round(t.left + z.sc()) || 0,
                        r ? n.borderTopStyle = r : n.removeProperty("border-top-style"),
                        Vt = setInterval(gt, 250),
                        Ot.delayedCall(.5, (function () {
                            return de = 0
                        })),
                        ft(Rt, "touchcancel", U),
                        ft(zt, "touchstart", U),
                        ct(ft, Rt, "pointerdown,touchstart,mousedown", V),
                        ct(ft, Rt, "pointerup,touchend,mouseup", H),
                        Wt = Ot.utils.checkPrefix("transform"),
                        Qe.push(Wt),
                        Pt = De(),
                        It = Ot.delayedCall(.2, Ue).pause(),
                        Qt = [Rt, "visibilitychange", function () {
                            var t = Bt.innerWidth,
                                e = Bt.innerHeight;
                            Rt.hidden ? (Gt = t,
                                Kt = e) : Gt === t && Kt === e || vt()
                        }, Rt, "DOMContentLoaded", Ue, Bt, "load", Ue, Bt, "resize", vt],
                        J(ft),
                        Le.forEach((function (t) {
                            return t.enable(0, 1)
                        })),
                        e = 0; e < S.length; e += 3)
                        pt(ht, S[e], S[e + 1]),
                        pt(ht, S[e], S[e + 2])
                }
            },
            nn.config = function (t) {
                "limitCallbacks" in t && (le = !!t.limitCallbacks);
                var e = t.syncInterval;
                e && clearInterval(Vt) || (Vt = e) && setInterval(gt, e),
                    "ignoreMobileResize" in t && (ee = 1 === nn.isTouch && t.ignoreMobileResize),
                    "autoRefreshEvents" in t && (J(ht) || J(ft, t.autoRefreshEvents || "none"),
                        Jt = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            },
            nn.scrollerProxy = function (t, e) {
                var n = l(t),
                    r = S.indexOf(n),
                    i = K(n);
                ~r && S.splice(r, i ? 6 : 2),
                    e && (i ? O.unshift(Bt, e, zt, e, Nt, e) : O.unshift(n, e))
            },
            nn.clearMatchMedia = function (t) {
                Le.forEach((function (e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                }))
            },
            nn.isInViewport = function (t, e, n) {
                var r = (ve(t) ? l(t) : t).getBoundingClientRect(),
                    i = r[n ? be : Fe] * e || 0;
                return n ? 0 < r.right - i && r.left + i < Bt.innerWidth : 0 < r.bottom - i && r.top + i < Bt.innerHeight
            },
            nn.positionInViewport = function (t, e, n) {
                ve(t) && (t = l(t));
                var r = t.getBoundingClientRect(),
                    i = r[n ? be : Fe],
                    o = null == e ? i / 2 : e in Ne ? Ne[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                return n ? (r.left + o) / Bt.innerWidth : (r.top + o) / Bt.innerHeight
            },
            nn.killAll = function (t) {
                if (Le.slice(0).forEach((function (t) {
                        return "ScrollSmoother" !== t.vars.id && t.kill()
                    })),
                    !0 !== t) {
                    var e = Ye.killAll || [];
                    Ye = {},
                        e.forEach((function (t) {
                            return t()
                        }))
                }
            },
            nn);

    function nn(t, e) {
        Pt || nn.register(Ot) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            oe(this),
            this.init(t, e)
    }

    function rn(t, e, n, r) {
        return r < e ? t(r) : e < 0 && t(0),
            r < n ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
    }

    function on(t, e) {
        !0 === e ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === e ? "auto" : e ? "pan-" + e + (I.isTouch ? " pinch-zoom" : "") : "none",
            t === Nt && on(zt, e)
    }

    function sn(t) {
        var e, n = t.event,
            r = t.target,
            i = t.axis,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            s = o._gsap || Ot.core.getCache(o),
            a = De();
        if (!s._isScrollT || 2e3 < a - s._isScrollT) {
            for (; o && o !== zt && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !ln[(e = ot(o)).overflowY] && !ln[e.overflowX]);)
                o = o.parentNode;
            s._isScroll = o && o !== r && !K(o) && (ln[(e = ot(o)).overflowY] || ln[e.overflowX]),
                s._isScrollT = a
        }!s._isScroll && "x" !== i || (n.stopPropagation(),
            n._gsapAllow = !0)
    }

    function an(t, e, n, r) {
        return I.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: r = r && sn,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function () {
                return n && ft(Rt, I.eventTypes[0], fn, !1, !0)
            },
            onDisable: function () {
                return ht(Rt, I.eventTypes[0], fn, !0)
            }
        })
    }
    en.version = "3.12.2",
        en.saveStyles = function (t) {
            return t ? Yt(t).forEach((function (t) {
                if (t && t.style) {
                    var e = Ve.indexOf(t);
                    0 <= e && Ve.splice(e, 5),
                        Ve.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Ot.core.getCache(t), oe())
                }
            })) : Ve
        },
        en.revert = function (t, e) {
            return Ct(!t, e)
        },
        en.create = function (t, e) {
            return new en(t, e)
        },
        en.refresh = function (t) {
            return t ? vt() : (Pt || en.register()) && Ue(!0)
        },
        en.update = function (t) {
            return ++S.cache && Ge(!0 === t ? 2 : 0)
        },
        en.clearScrollMemory = bt,
        en.maxScroll = function (t, e) {
            return Z(t, e ? z : L)
        },
        en.getScrollFunc = function (t, e) {
            return c(l(t), e ? z : L)
        },
        en.getById = function (t) {
            return Ie[t]
        },
        en.getAll = function () {
            return Le.filter((function (t) {
                return "ScrollSmoother" !== t.vars.id
            }))
        },
        en.isScrolling = function () {
            return !!_e
        },
        en.snapDirectional = lt,
        en.addEventListener = function (t, e) {
            var n = Ye[t] || (Ye[t] = []);
            ~n.indexOf(e) || n.push(e)
        },
        en.removeEventListener = function (t, e) {
            var n = Ye[t],
                r = n && n.indexOf(e);
            0 <= r && n.splice(r, 1)
        },
        en.batch = function (t, e) {
            function n(t, e) {
                var n = [],
                    r = [],
                    i = Ot.delayedCall(s, (function () {
                        e(n, r),
                            n = [],
                            r = []
                    })).pause();
                return function (t) {
                    n.length || i.restart(!0),
                        n.push(t.trigger),
                        r.push(t),
                        a <= n.length && i.progress(1)
                }
            }
            var r, i = [],
                o = {},
                s = e.interval || .016,
                a = e.batchMax || 1e9;
            for (r in e)
                o[r] = "on" === r.substr(0, 2) && tt(e[r]) && "onRefreshInit" !== r ? n(0, e[r]) : e[r];
            return tt(a) && (a = a(),
                    ft(en, "refresh", (function () {
                        return a = e.batchMax()
                    }))),
                Yt(t).forEach((function (t) {
                    var e = {};
                    for (r in o)
                        e[r] = o[r];
                    e.trigger = t,
                        i.push(en.create(e))
                })),
                i
        };
    var un, ln = {
            auto: 1,
            scroll: 1
        },
        cn = /(input|label|select|textarea)/i,
        fn = function (t) {
            var e = cn.test(t.target.tagName);
            (e || un) && (t._gsapAllow = !0,
                un = e)
        };
    en.sort = function (t) {
            return Le.sort(t || function (t, e) {
                return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
            })
        },
        en.observe = function (t) {
            return new I(t)
        },
        en.normalizeScroll = function (t) {
            if (void 0 === t)
                return te;
            if (!0 === t && te)
                return te.enable();
            if (!1 === t)
                return te && te.kill();
            var e = t instanceof I ? t : function (t) {
                function e() {
                    return u = !1
                }

                function n() {
                    s = Z(v, L),
                        O = Xt(ie ? 1 : 0, s),
                        D && (k = Xt(0, Z(v, z))),
                        a = He
                }

                function r() {
                    C._gsap.y = W(parseFloat(C._gsap.y) + b.offset) + "px",
                        C.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(C._gsap.y) + ", 0, 1)",
                        b.offset = b.cacheID = 0
                }

                function i() {
                    n(),
                        f.isActive() && f.vars.scrollY > s && (b() > s ? f.progress(1) && b(s) : f.resetTo("scrollY", s))
                }
                nt(t) || (t = {}),
                    t.preventDefault = t.isNormalizer = t.allowClicks = !0,
                    t.type || (t.type = "wheel,touch"),
                    t.debounce = !!t.debounce,
                    t.id = t.id || "normalizer";
                var o, s, a, u, f, h, p, d, D = t.normalizeScrollX,
                    g = t.momentum,
                    _ = t.allowNestedScroll,
                    m = t.onRelease,
                    v = l(t.target) || Nt,
                    y = Ot.core.globals().ScrollSmoother,
                    x = y && y.get(),
                    C = ie && (t.content && l(t.content) || x && !1 !== t.content && !x.smooth() && x.content()),
                    b = c(v, L),
                    F = c(v, z),
                    E = 1,
                    w = (I.isTouch && Bt.visualViewport ? Bt.visualViewport.scale * Bt.visualViewport.width : Bt.outerWidth) / Bt.innerWidth,
                    T = 0,
                    A = tt(g) ? function () {
                        return g(o)
                    } :
                    function () {
                        return g || 2.8
                    },
                    M = an(v, t.type, !0, _),
                    k = U,
                    O = U;
                return C && Ot.set(C, {
                        y: "+=0"
                    }),
                    t.ignoreCheck = function (t) {
                        return ie && "touchmove" === t.type && function () {
                            if (u) {
                                requestAnimationFrame(e);
                                var t = W(o.deltaY / 2),
                                    n = O(b.v - t);
                                if (C && n !== b.v + b.offset) {
                                    b.offset = n - b.v;
                                    var i = W((parseFloat(C && C._gsap.y) || 0) - b.offset);
                                    C.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + i + ", 0, 1)",
                                        C._gsap.y = i + "px",
                                        b.cacheID = S.cache,
                                        Ge()
                                }
                                return !0
                            }
                            b.offset && r(),
                                u = !0
                        }() || 1.05 < E && "touchstart" !== t.type || o.isGesturing || t.touches && 1 < t.touches.length
                    },
                    t.onPress = function () {
                        u = !1;
                        var t = E;
                        E = W((Bt.visualViewport && Bt.visualViewport.scale || 1) / w),
                            f.pause(),
                            t !== E && on(v, 1.01 < E || !D && "x"),
                            h = F(),
                            p = b(),
                            n(),
                            a = He
                    },
                    t.onRelease = t.onGestureStart = function (t, e) {
                        if (b.offset && r(),
                            e) {
                            S.cache++;
                            var n, o, a = A();
                            D && (o = (n = F()) + .05 * a * -t.velocityX / .227,
                                    a *= rn(F, n, o, Z(v, z)),
                                    f.vars.scrollX = k(o)),
                                o = (n = b()) + .05 * a * -t.velocityY / .227,
                                a *= rn(b, n, o, Z(v, L)),
                                f.vars.scrollY = O(o),
                                f.invalidate().duration(a).play(.01),
                                (ie && f.vars.scrollY >= s || s - 1 <= n) && Ot.to({}, {
                                    onUpdate: i,
                                    duration: a
                                })
                        } else
                            d.restart(!0);
                        m && m(t)
                    },
                    t.onWheel = function () {
                        f._ts && f.pause(),
                            1e3 < De() - T && (a = 0,
                                T = De())
                    },
                    t.onChange = function (t, e, i, o, s) {
                        if (He !== a && n(),
                            e && D && F(k(o[2] === e ? h + (t.startX - t.x) : F() + e - o[1])),
                            i) {
                            b.offset && r();
                            var u = s[2] === i,
                                l = u ? p + t.startY - t.y : b() + i - s[1],
                                c = O(l);
                            u && l !== c && (p += c - l),
                                b(c)
                        }
                        (i || e) && Ge()
                    },
                    t.onEnable = function () {
                        on(v, !D && "x"),
                            en.addEventListener("refresh", i),
                            ft(Bt, "resize", i),
                            b.smooth && (b.target.style.scrollBehavior = "auto",
                                b.smooth = F.smooth = !1),
                            M.enable()
                    },
                    t.onDisable = function () {
                        on(v, !0),
                            ht(Bt, "resize", i),
                            en.removeEventListener("refresh", i),
                            M.kill()
                    },
                    t.lockAxis = !1 !== t.lockAxis,
                    ((o = new I(t)).iOS = ie) && !b() && b(1),
                    ie && Ot.ticker.add(U),
                    d = o._dc,
                    f = Ot.to(o, {
                        ease: "power4",
                        paused: !0,
                        scrollX: D ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                            scrollY: Mt(b, b(), (function () {
                                return f.pause()
                            }))
                        },
                        onUpdate: Ge,
                        onComplete: d.vars.onComplete
                    }),
                    o
            }(t);
            return te && te.target === e.target && te.kill(),
                K(e.target) && (te = e),
                e
        },
        en.core = {
            _getVelocityProp: f,
            _inputObserver: an,
            _scrollers: S,
            _proxies: O,
            bridge: {
                ss: function () {
                    _e || je("scrollStart"),
                        _e = De()
                },
                ref: function () {
                    return Ht
                }
            }
        },
        G() && Ot.registerPlugin(en),
        t.ScrollTrigger = en,
        t.default = en,
        "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete t.default
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";
    var e = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function n(t) {
        D = document,
            g = window,
            (m = m || t || g.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (y = m.utils.toArray,
                v = m.core.context || function () {},
                _ = 1)
    }

    function r(t) {
        return g.getComputedStyle(t)
    }

    function i(t) {
        return "absolute" === t.position || !0 === t.absolute
    }

    function o(t, e) {
        for (var n, r = e.length; - 1 < --r;)
            if (n = e[r],
                t.substr(0, n.length) === n)
                return n.length
    }

    function s(t, e) {
        void 0 === t && (t = "");
        var n = ~t.indexOf("++"),
            r = 1;
        return n && (t = t.split("++").join("")),
            function () {
                return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
            }
    }

    function a(t, e, n) {
        var r = t.nodeType;
        if (1 === r || 9 === r || 11 === r)
            for (t = t.firstChild; t; t = t.nextSibling)
                a(t, e, n);
        else
            3 !== r && 4 !== r || (t.nodeValue = t.nodeValue.split(e).join(n))
    }

    function u(t, e) {
        for (var n = e.length; - 1 < --n;)
            t.push(e[n])
    }

    function l(t, e, n) {
        for (var r; t && t !== e;) {
            if (r = t._next || t.nextSibling)
                return r.textContent.charAt(0) === n;
            t = t.parentNode || t._parent
        }
    }

    function c(t) {
        var e, n, r = y(t.childNodes),
            i = r.length;
        for (e = 0; e < i; e++)
            (n = r[e])._isSplit ? c(n) : e && n.previousSibling && 3 === n.previousSibling.nodeType ? (n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue,
                t.removeChild(n)) : 3 !== n.nodeType && (t.insertBefore(n.firstChild, n),
                t.removeChild(n))
    }

    function f(t, e) {
        return parseFloat(e[t]) || 0
    }

    function h(t, e, n, o, s, h, p) {
        var d, g, _, m, v, y, x, C, b, F, E, w, T = r(t),
            A = f("paddingLeft", T),
            M = -999,
            k = f("borderBottomWidth", T) + f("borderTopWidth", T),
            S = f("borderLeftWidth", T) + f("borderRightWidth", T),
            O = f("paddingTop", T) + f("paddingBottom", T),
            P = f("paddingLeft", T) + f("paddingRight", T),
            B = f("fontSize", T) * (e.lineThreshold || .2),
            R = T.textAlign,
            N = [],
            z = [],
            L = [],
            I = e.wordDelimiter || " ",
            Y = e.tag ? e.tag : e.span ? "span" : "div",
            X = e.type || e.split || "chars,words,lines",
            j = s && ~X.indexOf("lines") ? [] : null,
            V = ~X.indexOf("words"),
            H = ~X.indexOf("chars"),
            U = i(e),
            W = e.linesClass,
            q = ~(W || "").indexOf("++"),
            G = [],
            K = "flex" === T.display,
            Q = t.style.display;
        for (q && (W = W.split("++").join("")),
            K && (t.style.display = "block"),
            _ = (g = t.getElementsByTagName("*")).length,
            v = [],
            d = 0; d < _; d++)
            v[d] = g[d];
        if (j || U)
            for (d = 0; d < _; d++)
                ((y = (m = v[d]).parentNode === t) || U || H && !V) && (w = m.offsetTop,
                    j && y && Math.abs(w - M) > B && ("BR" !== m.nodeName || 0 === d) && (x = [],
                        j.push(x),
                        M = w),
                    U && (m._x = m.offsetLeft,
                        m._y = w,
                        m._w = m.offsetWidth,
                        m._h = m.offsetHeight),
                    j && ((m._isSplit && y || !H && y || V && y || !V && m.parentNode.parentNode === t && !m.parentNode._isSplit) && (x.push(m),
                            m._x -= A,
                            l(m, t, I) && (m._wordEnd = !0)),
                        "BR" === m.nodeName && (m.nextSibling && "BR" === m.nextSibling.nodeName || 0 === d) && j.push([])));
        for (d = 0; d < _; d++)
            if (y = (m = v[d]).parentNode === t,
                "BR" !== m.nodeName)
                if (U && (b = m.style,
                        V || y || (m._x += m.parentNode._x,
                            m._y += m.parentNode._y),
                        b.left = m._x + "px",
                        b.top = m._y + "px",
                        b.position = "absolute",
                        b.display = "block",
                        b.width = m._w + 1 + "px",
                        b.height = m._h + "px"),
                    !V && H)
                    if (m._isSplit)
                        for (m._next = g = m.nextSibling,
                            m.parentNode.appendChild(m); g && 3 === g.nodeType && " " === g.textContent;)
                            m._next = g.nextSibling,
                            m.parentNode.appendChild(g),
                            g = g.nextSibling;
                    else
                        m.parentNode._isSplit ? (m._parent = m.parentNode,
                            !m.previousSibling && m.firstChild && (m.firstChild._isFirst = !0),
                            m.nextSibling && " " === m.nextSibling.textContent && !m.nextSibling.nextSibling && G.push(m.nextSibling),
                            m._next = m.nextSibling && m.nextSibling._isFirst ? null : m.nextSibling,
                            m.parentNode.removeChild(m),
                            v.splice(d--, 1),
                            _--) : y || (w = !m.nextSibling && l(m.parentNode, t, I),
                            m.parentNode._parent && m.parentNode._parent.appendChild(m),
                            w && m.parentNode.appendChild(D.createTextNode(" ")),
                            "span" === Y && (m.style.display = "inline"),
                            N.push(m));
        else
            m.parentNode._isSplit && !m._isSplit && "" !== m.innerHTML ? z.push(m) : H && !m._isSplit && ("span" === Y && (m.style.display = "inline"),
                N.push(m));
        else
            j || U ? (m.parentNode && m.parentNode.removeChild(m),
                v.splice(d--, 1),
                _--) : V || t.appendChild(m);
        for (d = G.length; - 1 < --d;)
            G[d].parentNode.removeChild(G[d]);
        if (j) {
            for (U && (F = D.createElement(Y),
                    t.appendChild(F),
                    E = F.offsetWidth + "px",
                    w = F.offsetParent === t ? 0 : t.offsetLeft,
                    t.removeChild(F)),
                b = t.style.cssText,
                t.style.cssText = "display:none;"; t.firstChild;)
                t.removeChild(t.firstChild);
            for (C = " " === I && (!U || !V && !H),
                d = 0; d < j.length; d++) {
                for (x = j[d],
                    (F = D.createElement(Y)).style.cssText = "display:block;text-align:" + R + ";position:" + (U ? "absolute;" : "relative;"),
                    W && (F.className = W + (q ? d + 1 : "")),
                    L.push(F),
                    _ = x.length,
                    g = 0; g < _; g++)
                    "BR" !== x[g].nodeName && (m = x[g],
                        F.appendChild(m),
                        C && m._wordEnd && F.appendChild(D.createTextNode(" ")),
                        U && (0 === g && (F.style.top = m._y + "px",
                                F.style.left = A + w + "px"),
                            m.style.top = "0px",
                            w && (m.style.left = m._x - w + "px")));
                0 === _ ? F.innerHTML = "&nbsp;" : V || H || (c(F),
                        a(F, String.fromCharCode(160), " ")),
                    U && (F.style.width = E,
                        F.style.height = m._h + "px"),
                    t.appendChild(F)
            }
            t.style.cssText = b
        }
        U && (p > t.clientHeight && (t.style.height = p - O + "px",
                    t.clientHeight < p && (t.style.height = p + k + "px")),
                h > t.clientWidth && (t.style.width = h - P + "px",
                    t.clientWidth < h && (t.style.width = h + S + "px"))),
            K && (Q ? t.style.display = Q : t.style.removeProperty("display")),
            u(n, N),
            V && u(o, z),
            u(s, L)
    }

    function p(t, n, r, s) {
        var u, l, c, f, h, p, d, g, _ = n.tag ? n.tag : n.span ? "span" : "div",
            m = ~(n.type || n.split || "chars,words,lines").indexOf("chars"),
            v = i(n),
            y = n.wordDelimiter || " ",
            x = " " !== y ? "" : v ? "&#173; " : " ",
            F = "</" + _ + ">",
            E = 1,
            w = n.specialChars ? "function" == typeof n.specialChars ? n.specialChars : o : null,
            T = D.createElement("div"),
            A = t.parentNode;
        for (A.insertBefore(T, t),
            T.textContent = t.nodeValue,
            A.removeChild(t),
            d = -1 !== (u = function t(e) {
                var n = e.nodeType,
                    r = "";
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        r += t(e)
                } else if (3 === n || 4 === n)
                    return e.nodeValue;
                return r
            }(t = T)).indexOf("<"),
            !1 !== n.reduceWhiteSpace && (u = u.replace(b, " ").replace(C, "")),
            d && (u = u.split("<").join("{{LT}}")),
            h = u.length,
            l = (" " === u.charAt(0) ? x : "") + r(),
            c = 0; c < h; c++)
            if (p = u.charAt(c),
                w && (g = w(u.substr(c), n.specialChars)))
                p = u.substr(c, g || 1),
                l += m && " " !== p ? s() + p + "</" + _ + ">" : p,
                c += g - 1;
            else if (p === y && u.charAt(c - 1) !== y && c) {
            for (l += E ? F : "",
                E = 0; u.charAt(c + 1) === y;)
                l += x,
                c++;
            c === h - 1 ? l += x : ")" !== u.charAt(c + 1) && (l += x + r(),
                E = 1)
        } else
            "{" === p && "{{LT}}" === u.substr(c, 6) ? (l += m ? s() + "{{LT}}</" + _ + ">" : "{{LT}}",
                c += 5) : 55296 <= p.charCodeAt(0) && p.charCodeAt(0) <= 56319 || 65024 <= u.charCodeAt(c + 1) && u.charCodeAt(c + 1) <= 65039 ? (f = ((u.substr(c, 12).split(e) || [])[1] || "").length || 2,
                l += m && " " !== p ? s() + u.substr(c, f) + "</" + _ + ">" : u.substr(c, f),
                c += f - 1) : l += m && " " !== p ? s() + p + "</" + _ + ">" : p;
        t.outerHTML = l + (E ? F : ""),
            d && a(A, "{{LT}}", "<")
    }

    function d(t, e, n, o) {
        var s, a, u = y(t.childNodes),
            l = u.length,
            c = i(e);
        if (3 !== t.nodeType || 1 < l) {
            for (e.absolute = !1,
                s = 0; s < l; s++)
                (a = u[s])._next = a._isFirst = a._parent = a._wordEnd = null,
                3 === a.nodeType && !/\S+/.test(a.nodeValue) || (c && 3 !== a.nodeType && "inline" === r(a).display && (a.style.display = "inline-block",
                        a.style.position = "relative"),
                    a._isSplit = !0,
                    d(a, e, n, o));
            return e.absolute = c,
                void(t._isSplit = !0)
        }
        p(t, e, n, o)
    }
    var D, g, _, m, v, y, x, C = /(?:\r|\n|\t\t)/g,
        b = /(?:\s\s+)/g,
        F = ((x = E.prototype).split = function (t) {
                this.isSplit && this.revert(),
                    this.vars = t = t || this.vars,
                    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, n, r, i = this.elements.length, o = t.tag ? t.tag : t.span ? "span" : "div", a = s(t.wordsClass, o), u = s(t.charsClass, o); - 1 < --i;)
                    r = this.elements[i],
                    this._originals[i] = r.innerHTML,
                    e = r.clientHeight,
                    n = r.clientWidth,
                    d(r, t, a, u),
                    h(r, t, this.chars, this.words, this.lines, n, e);
                return this.chars.reverse(),
                    this.words.reverse(),
                    this.lines.reverse(),
                    this.isSplit = !0,
                    this
            },
            x.revert = function () {
                var t = this._originals;
                if (!t)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function (e, n) {
                        return e.innerHTML = t[n]
                    })),
                    this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this.isSplit = !1,
                    this
            },
            E.create = function (t, e) {
                return new E(t, e)
            },
            E);

    function E(t, e) {
        _ || n(),
            this.elements = y(t),
            this.chars = [],
            this.words = [],
            this.lines = [],
            this._originals = [],
            this.vars = e || {},
            v(this),
            this.split(e)
    }
    F.version = "3.12.2",
        F.register = n,
        t.SplitText = F,
        t.default = F,
        "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete t.default
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).deepmerge = e()
}(this, (function () {
    "use strict";
    var t = function (t) {
            return function (t) {
                return !!t && "object" == typeof t
            }(t) && ! function (t) {
                var n = Object.prototype.toString.call(t);
                return "[object RegExp]" === n || "[object Date]" === n || function (t) {
                    return t.$$typeof === e
                }(t)
            }(t)
        },
        e = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function n(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t) ? a((n = t,
            Array.isArray(n) ? [] : {}), t, e) : t;
        var n
    }

    function r(t, e, r) {
        return t.concat(e).map((function (t) {
            return n(t, r)
        }))
    }

    function i(t) {
        return Object.keys(t).concat(function (t) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function (e) {
                return t.propertyIsEnumerable(e)
            })) : []
        }(t))
    }

    function o(t, e) {
        try {
            return e in t
        } catch (t) {
            return !1
        }
    }

    function s(t, e, r) {
        var s = {};
        return r.isMergeableObject(t) && i(t).forEach((function (e) {
                s[e] = n(t[e], r)
            })),
            i(e).forEach((function (i) {
                (function (t, e) {
                    return o(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
                })(t, i) || (o(t, i) && r.isMergeableObject(e[i]) ? s[i] = function (t, e) {
                    if (!e.customMerge)
                        return a;
                    var n = e.customMerge(t);
                    return "function" == typeof n ? n : a
                }(i, r)(t[i], e[i], r) : s[i] = n(e[i], r))
            })),
            s
    }

    function a(e, i, o) {
        (o = o || {}).arrayMerge = o.arrayMerge || r,
            o.isMergeableObject = o.isMergeableObject || t,
            o.cloneUnlessOtherwiseSpecified = n;
        var a = Array.isArray(i);
        return a === Array.isArray(e) ? a ? o.arrayMerge(e, i, o) : s(e, i, o) : n(i, o)
    }
    return a.all = function (t, e) {
            if (!Array.isArray(t))
                throw new Error("first argument should be an array");
            return t.reduce((function (t, n) {
                return a(t, n, e)
            }), {})
        },
        a
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function (t) {
    "use strict";

    function e(t, e) {
        t.prototype = Object.create(e.prototype),
            (t.prototype.constructor = t).__proto__ = e
    }

    function n(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function i(t) {
        return "function" == typeof t
    }

    function o(t) {
        return "number" == typeof t
    }

    function s(t) {
        return void 0 === t
    }

    function a(t) {
        return "object" == typeof t
    }

    function u(t) {
        return !1 !== t
    }

    function l() {
        return "undefined" != typeof window
    }

    function c(t) {
        return i(t) || r(t)
    }

    function f(t) {
        return (Et = be(t, fe)) && Yn
    }

    function h(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function p(t, e) {
        return !e && console.warn(t)
    }

    function d(t, e) {
        return t && (fe[t] = e) && Et && (Et[t] = e) || fe
    }

    function D() {
        return 0
    }

    function g(t) {
        var e, n, r = t[0];
        if (a(r) || i(r) || (t = [t]),
            !(e = (r._gsap || {}).harness)) {
            for (n = xe.length; n-- && !xe[n].targetTest(r);)
            ;
            e = xe[n]
        }
        for (n = t.length; n--;)
            t[n] && (t[n]._gsap || (t[n]._gsap = new Ge(t[n], e))) || t.splice(n, 1);
        return t
    }

    function _(t) {
        return t._gsap || g(ke(t))[0]._gsap
    }

    function m(t, e, n) {
        return (n = t[e]) && i(n) ? t[e]() : s(n) && t.getAttribute && t.getAttribute(e) || n
    }

    function v(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function y(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function x(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function C(t, e) {
        var n = e.charAt(0),
            r = parseFloat(e.substr(2));
        return t = parseFloat(t),
            "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
    }

    function b(t, e) {
        for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;)
        ;
        return r < n
    }

    function F() {
        var t, e, n = ge.length,
            r = ge.slice(0);
        for (_e = {},
            t = ge.length = 0; t < n; t++)
            (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function E(t, e, n, r) {
        ge.length && !vt && F(),
            t.render(e, n, r || vt && e < 0 && (t._initted || t._startAt)),
            ge.length && !vt && F()
    }

    function w(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(le).length < 2 ? e : r(t) ? t.trim() : t
    }

    function T(t) {
        return t
    }

    function A(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }

    function M(t, e) {
        for (var n in e)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = a(e[n]) ? M(t[n] || (t[n] = {}), e[n]) : e[n]);
        return t
    }

    function k(t, e) {
        var n, r = {};
        for (n in t)
            n in e || (r[n] = t[n]);
        return r
    }

    function S(t) {
        var e = t.parent || xt,
            n = t.keyframes ? function (t) {
                return function (e, n) {
                    for (var r in n)
                        r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
                }
            }(re(t.keyframes)) : A;
        if (u(t.inherit))
            for (; e;)
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }

    function O(t, e, n, r, i) {
        void 0 === n && (n = "_first"),
            void 0 === r && (r = "_last");
        var o, s = t[r];
        if (i)
            for (o = e[i]; s && s[i] > o;)
                s = s._prev;
        return s ? (e._next = s._next,
                s._next = e) : (e._next = t[n],
                t[n] = e),
            e._next ? e._next._prev = e : t[r] = e,
            e._prev = s,
            e.parent = e._dp = t,
            e
    }

    function P(t, e, n, r) {
        void 0 === n && (n = "_first"),
            void 0 === r && (r = "_last");
        var i = e._prev,
            o = e._next;
        i ? i._next = o : t[n] === e && (t[n] = o),
            o ? o._prev = i : t[r] === e && (t[r] = i),
            e._next = e._prev = e.parent = null
    }

    function B(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
            t._act = 0
    }

    function R(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n;)
                n._dirty = 1,
                n = n.parent;
        return t
    }

    function N(t, e, n, r) {
        return t._startAt && (vt ? t._startAt.revert(pe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
    }

    function z(t) {
        return t._repeat ? Fe(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function L(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function I(t) {
        return t._end = x(t._start + (t._tDur / Math.abs(t._ts || t._rts || Kt) || 0))
    }

    function Y(t, e) {
        var n = t._dp;
        return n && n.smoothChildTiming && t._ts && (t._start = x(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
                I(t),
                n._dirty || R(n, t)),
            t
    }

    function X(t, e) {
        var n;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = L(t.rawTime(), e),
                (!e._dur || Ae(0, e.totalDuration(), n) - e._tTime > Kt) && e.render(n, !0)),
            R(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp;)
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -Kt
        }
    }

    function j(t, e, n, r) {
        return e.parent && B(e),
            e._start = x((o(n) ? n : n || t !== xt ? Te(t, n, e) : t._time) + e._delay),
            e._end = x(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            O(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Ee(e) || (t._recent = e),
            r || X(t, e),
            t._ts < 0 && Y(t, t._tTime),
            t
    }

    function V(t, e) {
        return (fe.ScrollTrigger || h("scrollTrigger", e)) && fe.ScrollTrigger.create(e, t)
    }

    function H(t, e, n, r, i) {
        return rn(t, e, i),
            t._initted ? !n && t._pt && !vt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Tt !== Le.frame ? (ge.push(t),
                t._lazy = [i, r],
                1) : void 0 : 1
    }

    function U(t, e, n, r) {
        var i = t._repeat,
            o = x(e) || 0,
            s = t._tTime / t._tDur;
        return s && !r && (t._time *= o / t._dur),
            t._dur = o,
            t._tDur = i ? i < 0 ? 1e10 : x(o * (i + 1) + t._rDelay * i) : o,
            0 < s && !r && Y(t, t._tTime = t._tDur * s),
            t.parent && I(t),
            n || R(t.parent, t),
            t
    }

    function W(t) {
        return t instanceof $e ? R(t) : U(t, t._dur)
    }

    function q(t, e, n) {
        var r, i, s = o(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            l = e[a];
        if (s && (l.duration = e[1]),
            l.parent = n,
            t) {
            for (r = l,
                i = n; i && !("immediateRender" in r);)
                r = i.vars.defaults || {},
                i = u(i.vars.inherit) && i.parent;
            l.immediateRender = u(r.immediateRender),
                t < 2 ? l.runBackwards = 1 : l.startAt = e[a - 1]
        }
        return new un(e[0], l, e[1 + a])
    }

    function G(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function K(t, e) {
        return r(t) && (e = ce.exec(t)) ? e[1] : ""
    }

    function Q(t, e) {
        return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== Ct
    }

    function $(t) {
        return t = ke(t)[0] || p("Invalid scope") || {},
            function (e) {
                var n = t.current || t.nativeElement || t;
                return ke(e, n.querySelectorAll ? n : n === t ? p("Invalid scope") || Ft.createElement("div") : t)
            }
    }

    function Z(t) {
        return t.sort((function () {
            return .5 - Math.random()
        }))
    }

    function J(t) {
        if (i(t))
            return t;
        var e = a(t) ? t : {
                each: t
            },
            n = He(e.ease),
            o = e.from || 0,
            s = parseFloat(e.base) || 0,
            u = {},
            l = 0 < o && o < 1,
            c = isNaN(o) || l,
            f = e.axis,
            h = o,
            p = o;
        return r(o) ? h = p = {
                center: .5,
                edges: .5,
                end: 1
            } [o] || 0 : !l && c && (h = o[0],
                p = o[1]),
            function (t, r, i) {
                var a, l, d, D, g, _, m, v, y, C = (i || e).length,
                    b = u[C];
                if (!b) {
                    if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, Gt])[1])) {
                        for (m = -Gt; m < (m = i[y++].getBoundingClientRect().left) && y < C;)
                        ;
                        y--
                    }
                    for (b = u[C] = [],
                        a = c ? Math.min(y, C) * h - .5 : o % y,
                        l = y === Gt ? 0 : c ? C * p / y - .5 : o / y | 0,
                        v = Gt,
                        _ = m = 0; _ < C; _++)
                        d = _ % y - a,
                        D = l - (_ / y | 0),
                        b[_] = g = f ? Math.abs("y" === f ? D : d) : Jt(d * d + D * D),
                        m < g && (m = g),
                        g < v && (v = g);
                    "random" === o && Z(b),
                        b.max = m - v,
                        b.min = v,
                        b.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (C < y ? C - 1 : f ? "y" === f ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === o ? -1 : 1),
                        b.b = C < 0 ? s - C : s,
                        b.u = K(e.amount || e.each) || 0,
                        n = n && C < 0 ? Ve(n) : n
                }
                return C = (b[t] - b.min) / b.max || 0,
                    x(b.b + (n ? n(C) : C) * b.v) + b.u
            }
    }

    function tt(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (n) {
            var r = x(Math.round(parseFloat(n) / t) * t * e);
            return (r - r % 1) / e + (o(n) ? 0 : K(n))
        }
    }

    function et(t, e) {
        var n, r, s = re(t);
        return !s && a(t) && (n = s = t.radius || Gt,
                t.values ? (t = ke(t.values),
                    (r = !o(t[0])) && (n *= n)) : t = tt(t.increment)),
            G(e, s ? i(t) ? function (e) {
                    return r = t(e),
                        Math.abs(r - e) <= n ? r : e
                } :
                function (e) {
                    for (var i, s, a = parseFloat(r ? e.x : e), u = parseFloat(r ? e.y : 0), l = Gt, c = 0, f = t.length; f--;)
                        (i = r ? (i = t[f].x - a) * i + (s = t[f].y - u) * s : Math.abs(t[f] - a)) < l && (l = i,
                            c = f);
                    return c = !n || l <= n ? t[c] : e,
                        r || c === e || o(e) ? c : c + K(e)
                } :
                tt(t))
    }

    function nt(t, e, n, r) {
        return G(re(t) ? !e : !0 === n ? !!(n = 0) : !r, (function () {
            return re(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
        }))
    }

    function rt(t, e, n) {
        return G(n, (function (n) {
            return t[~~e(n)]
        }))
    }

    function it(t) {
        for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));)
            r = t.indexOf(")", e),
            i = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, r - e - 7).match(i ? le : ie),
            s += t.substr(o, e - o) + nt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
            o = r + 1;
        return s + t.substr(o, t.length - o)
    }

    function ot(t, e, n) {
        var r, i, o, s = t.labels,
            a = Gt;
        for (r in s)
            (i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (o = r,
                a = i);
        return o
    }

    function st(t) {
        return B(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!vt),
            t.progress() < 1 && Oe(t, "onInterrupt"),
            t
    }

    function at(t) {
        if (l() && t) {
            var e = (t = !t.name && t.default || t).name,
                n = i(t),
                r = e && !n && t.init ? function () {
                    this._props = []
                } :
                t,
                o = {
                    init: D,
                    render: mn,
                    add: nn,
                    kill: yn,
                    modifier: vn,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: dn,
                    aliases: {},
                    register: 0
                };
            if (Ie(),
                t !== r) {
                if (me[e])
                    return;
                A(r, A(k(t, o), s)),
                    be(r.prototype, be(o, k(t, s))),
                    me[r.prop = e] = r,
                    t.targetTest && (xe.push(r),
                        De[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            d(e, r),
                t.register && t.register(Yn, r, Cn)
        } else
            t && Pe.push(t)
    }

    function ut(t, e, n) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Be + .5 | 0
    }

    function lt(t, e, n) {
        var r, i, s, a, u, l, c, f, h, p, d = t ? o(t) ? [t >> 16, t >> 8 & Be, t & Be] : 0 : Re.black;
        if (!d) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
                Re[t])
                d = Re[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (r = t.charAt(1)) + r + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                    9 === t.length)
                    return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & Be, d & Be, parseInt(t.substr(7), 16) / 255];
                d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Be, t & Be]
            } else if ("hsl" === t.substr(0, 3))
                if (d = p = t.match(ie),
                    e) {
                    if (~t.indexOf("="))
                        return d = t.match(oe),
                            n && d.length < 4 && (d[3] = 1),
                            d
                } else
                    a = +d[0] % 360 / 360,
                    u = d[1] / 100,
                    r = 2 * (l = d[2] / 100) - (i = l <= .5 ? l * (u + 1) : l + u - l * u),
                    3 < d.length && (d[3] *= 1),
                    d[0] = ut(a + 1 / 3, r, i),
                    d[1] = ut(a, r, i),
                    d[2] = ut(a - 1 / 3, r, i);
            else
                d = t.match(ie) || Re.transparent;
            d = d.map(Number)
        }
        return e && !p && (r = d[0] / Be,
                i = d[1] / Be,
                s = d[2] / Be,
                l = ((c = Math.max(r, i, s)) + (f = Math.min(r, i, s))) / 2,
                c === f ? a = u = 0 : (h = c - f,
                    u = .5 < l ? h / (2 - c - f) : h / (c + f),
                    a = c === r ? (i - s) / h + (i < s ? 6 : 0) : c === i ? (s - r) / h + 2 : (r - i) / h + 4,
                    a *= 60),
                d[0] = ~~(a + .5),
                d[1] = ~~(100 * u + .5),
                d[2] = ~~(100 * l + .5)),
            n && d.length < 4 && (d[3] = 1),
            d
    }

    function ct(t) {
        var e = [],
            n = [],
            r = -1;
        return t.split(Ne).forEach((function (t) {
                var i = t.match(se) || [];
                e.push.apply(e, i),
                    n.push(r += i.length + 1)
            })),
            e.c = n,
            e
    }

    function ft(t, e, n) {
        var r, i, o, s, a = "",
            u = (t + a).match(Ne),
            l = e ? "hsla(" : "rgba(",
            c = 0;
        if (!u)
            return t;
        if (u = u.map((function (t) {
                return (t = lt(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })),
            n && (o = ct(t),
                (r = n.c).join(a) !== o.c.join(a)))
            for (s = (i = t.replace(Ne, "1").split(se)).length - 1; c < s; c++)
                a += i[c] + (~r.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
        if (!i)
            for (s = (i = t.split(Ne)).length - 1; c < s; c++)
                a += i[c] + u[c];
        return a + i[s]
    }

    function ht(t) {
        var e, n = t.join(" ");
        if (Ne.lastIndex = 0,
            Ne.test(n))
            return e = ze.test(n),
                t[1] = ft(t[1], e),
                t[0] = ft(t[0], e, ct(t[1])),
                !0
    }

    function pt(t, e) {
        for (var n, r = t._first; r;)
            r instanceof $e ? pt(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? pt(r.timeline, e) : (n = r._ease,
                r._ease = r._yEase,
                r._yEase = n,
                r._yoyo = e)),
            r = r._next
    }

    function dt(t, e, n, r) {
        void 0 === n && (n = function (t) {
                return 1 - e(1 - t)
            }),
            void 0 === r && (r = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
        var i, o = {
            easeIn: e,
            easeOut: n,
            easeInOut: r
        };
        return v(t, (function (t) {
                for (var e in Ye[t] = fe[t] = o,
                        Ye[i = t.toLowerCase()] = n,
                        o)
                    Ye[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ye[t + "." + e] = o[e]
            })),
            o
    }

    function Dt(t) {
        return function (e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function gt(t, e, n) {
        function r(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * ee((t - s) * o) + 1
        }
        var i = 1 <= e ? e : 1,
            o = (n || (t ? .3 : .45)) / (e < 1 ? e : 1),
            s = o / Qt * (Math.asin(1 / i) || 0),
            a = "out" === t ? r : "in" === t ? function (t) {
                return 1 - r(1 - t)
            } :
            Dt(r);
        return o = Qt / o,
            a.config = function (e, n) {
                return gt(t, e, n)
            },
            a
    }

    function _t(t, e) {
        function n(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }
        void 0 === e && (e = 1.70158);
        var r = "out" === t ? n : "in" === t ? function (t) {
                return 1 - n(1 - t)
            } :
            Dt(n);
        return r.config = function (e) {
                return _t(t, e)
            },
            r
    }
    var mt, vt, yt, xt, Ct, bt, Ft, Et, wt, Tt, At, Mt, kt, St, Ot, Pt, Bt, Rt, Nt, zt, Lt, It, Yt, Xt, jt, Vt, Ht, Ut, Wt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        qt = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Gt = 1e8,
        Kt = 1 / Gt,
        Qt = 2 * Math.PI,
        $t = Qt / 4,
        Zt = 0,
        Jt = Math.sqrt,
        te = Math.cos,
        ee = Math.sin,
        ne = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        re = Array.isArray,
        ie = /(?:-?\.?\d|\.)+/gi,
        oe = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ue = /[+-]=-?[.\d]+/,
        le = /[^,'"\[\]\s]+/gi,
        ce = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        fe = {},
        he = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        pe = {
            suppressEvents: !0,
            kill: !1
        },
        de = {
            suppressEvents: !0
        },
        De = {},
        ge = [],
        _e = {},
        me = {},
        ve = {},
        ye = 30,
        xe = [],
        Ce = "",
        be = function (t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        },
        Fe = function (t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        },
        Ee = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        we = {
            _start: 0,
            endTime: D,
            totalDuration: D
        },
        Te = function t(e, n, i) {
            var o, s, a, u = e.labels,
                l = e._recent || we,
                c = e.duration() >= Gt ? l.endTime(!1) : e._dur;
            return r(n) && (isNaN(n) || n in u) ? (s = n.charAt(0),
                a = "%" === n.substr(-1),
                o = n.indexOf("="),
                "<" === s || ">" === s ? (0 <= o && (n = n.replace(/=/, "")),
                    ("<" === s ? l._start : l.endTime(0 <= l._repeat)) + (parseFloat(n.substr(1)) || 0) * (a ? (o < 0 ? l : i).totalDuration() / 100 : 1)) : o < 0 ? (n in u || (u[n] = c),
                    u[n]) : (s = parseFloat(n.charAt(o - 1) + n.substr(o + 1)),
                    a && i && (s = s / 100 * (re(i) ? i[0] : i).totalDuration()),
                    1 < o ? t(e, n.substr(0, o - 1), i) + s : c + s)) : null == n ? c : +n
        },
        Ae = function (t, e, n) {
            return n < t ? t : e < n ? e : n
        },
        Me = [].slice,
        ke = function (t, e, n) {
            return yt && !e && yt.selector ? yt.selector(t) : !r(t) || n || !bt && Ie() ? re(t) ? function (t, e, n) {
                return void 0 === n && (n = []),
                    t.forEach((function (t) {
                        return r(t) && !e || Q(t, 1) ? n.push.apply(n, ke(t)) : n.push(t)
                    })) || n
            }(t, n) : Q(t) ? Me.call(t, 0) : t ? [t] : [] : Me.call((e || Ft).querySelectorAll(t), 0)
        },
        Se = function (t, e, n, r, i) {
            var o = e - t,
                s = r - n;
            return G(i, (function (e) {
                return n + ((e - t) / o * s || 0)
            }))
        },
        Oe = function (t, e, n) {
            var r, i, o, s = t.vars,
                a = s[e],
                u = yt,
                l = t._ctx;
            if (a)
                return r = s[e + "Params"],
                    i = s.callbackScope || t,
                    n && ge.length && F(),
                    l && (yt = l),
                    o = r ? a.apply(i, r) : a.call(i),
                    yt = u,
                    o
        },
        Pe = [],
        Be = 255,
        Re = {
            aqua: [0, Be, Be],
            lime: [0, Be, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Be],
            navy: [0, 0, 128],
            white: [Be, Be, Be],
            olive: [128, 128, 0],
            yellow: [Be, Be, 0],
            orange: [Be, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Be, 0, 0],
            pink: [Be, 192, 203],
            cyan: [0, Be, Be],
            transparent: [Be, Be, Be, 0]
        },
        Ne = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Re)
                e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ze = /hsl[a]?\(/,
        Le = (Nt = Date.now,
            zt = 500,
            Lt = 33,
            It = Nt(),
            Yt = It,
            jt = Xt = 1e3 / 240,
            Pt = {
                time: 0,
                frame: 0,
                tick: function () {
                    Ue(!0)
                },
                deltaRatio: function (t) {
                    return Bt / (1e3 / (t || 60))
                },
                wake: function () {
                    wt && (!bt && l() && (Ct = bt = window,
                            Ft = Ct.document || {},
                            fe.gsap = Yn,
                            (Ct.gsapVersions || (Ct.gsapVersions = [])).push(Yn.version),
                            f(Et || Ct.GreenSockGlobals || !Ct.gsap && Ct || {}),
                            Ot = Ct.requestAnimationFrame,
                            Pe.forEach(at)),
                        kt && Pt.sleep(),
                        St = Ot || function (t) {
                            return setTimeout(t, jt - 1e3 * Pt.time + 1 | 0)
                        },
                        Mt = 1,
                        Ue(2))
                },
                sleep: function () {
                    (Ot ? Ct.cancelAnimationFrame : clearTimeout)(kt),
                    Mt = 0,
                        St = D
                },
                lagSmoothing: function (t, e) {
                    zt = t || 1 / 0,
                        Lt = Math.min(e || 33, zt)
                },
                fps: function (t) {
                    Xt = 1e3 / (t || 240),
                        jt = 1e3 * Pt.time + Xt
                },
                add: function (t, e, n) {
                    var r = e ? function (e, n, i, o) {
                            t(e, n, i, o),
                                Pt.remove(r)
                        } :
                        t;
                    return Pt.remove(t),
                        Vt[n ? "unshift" : "push"](r),
                        Ie(),
                        r
                },
                remove: function (t, e) {
                    ~(e = Vt.indexOf(t)) && Vt.splice(e, 1) && e <= Rt && Rt--
                },
                _listeners: Vt = []
            }),
        Ie = function () {
            return !Mt && Le.wake()
        },
        Ye = {},
        Xe = /^[\d.\-M][\d.\-,\s]/,
        je = /["']/g,
        Ve = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        He = function (t, e) {
            return t && (i(t) ? t : Ye[t] || function (t) {
                var e = (t + "").split("("),
                    n = Ye[e[0]];
                return n && 1 < e.length && n.config ? n.config.apply(null, ~t.indexOf("{") ? [function (t) {
                    for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++)
                        n = o[a],
                        e = a !== u - 1 ? n.lastIndexOf(",") : n.length,
                        r = n.substr(0, e),
                        i[s] = isNaN(r) ? r.replace(je, "").trim() : +r,
                        s = n.substr(e + 1).trim();
                    return i
                }(e[1])] : function (t) {
                    var e = t.indexOf("(") + 1,
                        n = t.indexOf(")"),
                        r = t.indexOf("(", e);
                    return t.substring(e, ~r && r < n ? t.indexOf(")", n + 1) : n)
                }(t).split(",").map(w)) : Ye._CE && Xe.test(t) ? Ye._CE("", t) : n
            }(t)) || e
        };

    function Ue(t) {
        var e, n, r, i, o = Nt() - Yt,
            s = !0 === t;
        if (zt < o && (It += o - Lt),
            (0 < (e = (r = (Yt += o) - It) - jt) || s) && (i = ++Pt.frame,
                Bt = r - 1e3 * Pt.time,
                Pt.time = r /= 1e3,
                jt += e + (Xt <= e ? 4 : Xt - e),
                n = 1),
            s || (kt = St(Ue)),
            n)
            for (Rt = 0; Rt < Vt.length; Rt++)
                Vt[Rt](r, Bt, i, t)
    }

    function We(t) {
        return t < Ut ? Ht * t * t : t < .7272727272727273 ? Ht * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Ht * (t -= 2.25 / 2.75) * t + .9375 : Ht * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    v("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
            var n = e < 5 ? e + 1 : e;
            dt(t + ",Power" + (n - 1), e ? function (t) {
                    return Math.pow(t, n)
                } :
                function (t) {
                    return t
                }, (function (t) {
                    return 1 - Math.pow(1 - t, n)
                }), (function (t) {
                    return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
                }))
        })),
        Ye.Linear.easeNone = Ye.none = Ye.Linear.easeIn,
        dt("Elastic", gt("in"), gt("out"), gt()),
        Ht = 7.5625,
        Ut = 1 / 2.75,
        dt("Bounce", (function (t) {
            return 1 - We(1 - t)
        }), We),
        dt("Expo", (function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })),
        dt("Circ", (function (t) {
            return -(Jt(1 - t * t) - 1)
        })),
        dt("Sine", (function (t) {
            return 1 === t ? 1 : 1 - te(t * $t)
        })),
        dt("Back", _t("in"), _t("out"), _t()),
        Ye.SteppedEase = Ye.steps = fe.SteppedEase = {
            config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t,
                    r = t + (e ? 0 : 1),
                    i = e ? 1 : 0;
                return function (t) {
                    return ((r * Ae(0, .99999999, t) | 0) + i) * n
                }
            }
        },
        qt.ease = Ye["quad.out"],
        v("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
            return Ce += t + "," + t + "Params,"
        }));
    var qe, Ge = function (t, e) {
            this.id = Zt++,
                (t._gsap = this).target = t,
                this.harness = e,
                this.get = e ? e.get : m,
                this.set = e ? e.getSetter : dn
        },
        Ke = ((qe = Qe.prototype).delay = function (t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                    this._delay = t,
                    this) : this._delay
            },
            qe.duration = function (t) {
                return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            },
            qe.totalDuration = function (t) {
                return arguments.length ? (this._dirty = 0,
                    U(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            },
            qe.totalTime = function (t, e) {
                if (Ie(),
                    !arguments.length)
                    return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Y(this, t),
                        !n._dp || n.parent || X(n, this); n && n.parent;)
                        n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                        n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && j(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Kt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                        E(this, t, e)),
                    this
            },
            qe.time = function (t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + z(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            },
            qe.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            },
            qe.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + z(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            },
            qe.iteration = function (t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Fe(this._tTime, n) + 1 : 1
            },
            qe.timeScale = function (t) {
                if (!arguments.length)
                    return this._rts === -Kt ? 0 : this._rts;
                if (this._rts === t)
                    return this;
                var e = this.parent && this._ts ? L(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0,
                    this._ts = this._ps || t === -Kt ? 0 : this._rts,
                    this.totalTime(Ae(-Math.abs(this._delay), this._tDur, e), !0),
                    I(this),
                    function (t) {
                        for (var e = t.parent; e && e.parent;)
                            e._dirty = 1,
                            e.totalDuration(),
                            e = e.parent;
                        return t
                    }(this)
            },
            qe.paused = function (t) {
                return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                        this._ts = this._act = 0) : (Ie(),
                        this._ts = this._rts,
                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Kt && (this._tTime -= Kt)))),
                    this) : this._ps
            },
            qe.startTime = function (t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return !e || !e._sort && this.parent || j(e, this, t - this._delay),
                        this
                }
                return this._start
            },
            qe.endTime = function (t) {
                return this._start + (u(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            },
            qe.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? L(e.rawTime(t), this) : this._tTime : this._tTime
            },
            qe.revert = function (t) {
                void 0 === t && (t = de);
                var e = vt;
                return vt = t,
                    (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
                        this.totalTime(-.01, t.suppressEvents)),
                    "nested" !== this.data && !1 !== t.kill && this.kill(),
                    vt = e,
                    this
            },
            qe.globalTime = function (t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;)
                    n = e._start + n / (e._ts || 1),
                    e = e._dp;
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : n
            },
            qe.repeat = function (t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                    W(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            },
            qe.repeatDelay = function (t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t,
                        W(this),
                        e ? this.time(e) : this
                }
                return this._rDelay
            },
            qe.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t,
                    this) : this._yoyo
            },
            qe.seek = function (t, e) {
                return this.totalTime(Te(this, t), u(e))
            },
            qe.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, u(e))
            },
            qe.play = function (t, e) {
                return null != t && this.seek(t, e),
                    this.reversed(!1).paused(!1)
            },
            qe.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
            },
            qe.pause = function (t, e) {
                return null != t && this.seek(t, e),
                    this.paused(!0)
            },
            qe.resume = function () {
                return this.paused(!1)
            },
            qe.reversed = function (t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Kt : 0)),
                    this) : this._rts < 0
            },
            qe.invalidate = function () {
                return this._initted = this._act = 0,
                    this._zTime = -Kt,
                    this
            },
            qe.isActive = function () {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Kt))
            },
            qe.eventCallback = function (t, e, n) {
                var r = this.vars;
                return 1 < arguments.length ? (e ? (r[t] = e,
                        n && (r[t + "Params"] = n),
                        "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
                    this) : r[t]
            },
            qe.then = function (t) {
                var e = this;
                return new Promise((function (n) {
                    function r() {
                        var t = e.then;
                        e.then = null,
                            i(o) && (o = o(e)) && (o.then || o === e) && (e.then = t),
                            n(o),
                            e.then = t
                    }
                    var o = i(t) ? t : T;
                    e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? r() : e._prom = r
                }))
            },
            qe.kill = function () {
                st(this)
            },
            Qe);

    function Qe(t) {
        this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            U(this, +t.duration, 1, 1),
            this.data = t.data,
            yt && (this._ctx = yt).data.push(this),
            Mt || Le.wake()
    }
    A(Ke.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Kt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var $e = function (t) {
        function s(e, r) {
            var i;
            return void 0 === e && (e = {}),
                (i = t.call(this, e) || this).labels = {},
                i.smoothChildTiming = !!e.smoothChildTiming,
                i.autoRemoveChildren = !!e.autoRemoveChildren,
                i._sort = u(e.sortChildren),
                xt && j(e.parent || xt, n(i), r),
                e.reversed && i.reverse(),
                e.paused && i.paused(!0),
                e.scrollTrigger && V(n(i), e.scrollTrigger),
                i
        }
        e(s, t);
        var a = s.prototype;
        return a.to = function (t, e, n) {
                return q(0, arguments, this),
                    this
            },
            a.from = function (t, e, n) {
                return q(1, arguments, this),
                    this
            },
            a.fromTo = function (t, e, n, r) {
                return q(2, arguments, this),
                    this
            },
            a.set = function (t, e, n) {
                return e.duration = 0,
                    e.parent = this,
                    S(e).repeatDelay || (e.repeat = 0),
                    e.immediateRender = !!e.immediateRender,
                    new un(t, e, Te(this, n), 1),
                    this
            },
            a.call = function (t, e, n) {
                return j(this, un.delayedCall(0, t, e), n)
            },
            a.staggerTo = function (t, e, n, r, i, o, s) {
                return n.duration = e,
                    n.stagger = n.stagger || r,
                    n.onComplete = o,
                    n.onCompleteParams = s,
                    n.parent = this,
                    new un(t, n, Te(this, i)),
                    this
            },
            a.staggerFrom = function (t, e, n, r, i, o, s) {
                return n.runBackwards = 1,
                    S(n).immediateRender = u(n.immediateRender),
                    this.staggerTo(t, e, n, r, i, o, s)
            },
            a.staggerFromTo = function (t, e, n, r, i, o, s, a) {
                return r.startAt = n,
                    S(r).immediateRender = u(r.immediateRender),
                    this.staggerTo(t, e, r, i, o, s, a)
            },
            a.render = function (t, e, n) {
                var r, i, o, s, a, u, l, c, f, h, p, d, D = this._time,
                    g = this._dirty ? this.totalDuration() : this._tDur,
                    _ = this._dur,
                    m = t <= 0 ? 0 : x(t),
                    v = this._zTime < 0 != t < 0 && (this._initted || !_);
                if (this !== xt && g < m && 0 <= t && (m = g),
                    m !== this._tTime || n || v) {
                    if (D !== this._time && _ && (m += this._time - D,
                            t += this._time - D),
                        r = m,
                        f = this._start,
                        u = !(c = this._ts),
                        v && (_ || (D = this._zTime),
                            !t && e || (this._zTime = t)),
                        this._repeat) {
                        if (p = this._yoyo,
                            a = _ + this._rDelay,
                            this._repeat < -1 && t < 0)
                            return this.totalTime(100 * a + t, e, n);
                        if (r = x(m % a),
                            m === g ? (s = this._repeat,
                                r = _) : ((s = ~~(m / a)) && s === m / a && (r = _,
                                    s--),
                                _ < r && (r = _)),
                            h = Fe(this._tTime, a),
                            !D && this._tTime && h !== s && this._tTime - h * a - this._dur <= 0 && (h = s),
                            p && 1 & s && (r = _ - r,
                                d = 1),
                            s !== h && !this._lock) {
                            var y = p && 1 & h,
                                C = y === (p && 1 & s);
                            if (s < h && (y = !y),
                                D = y ? 0 : m % _ ? _ : m,
                                this._lock = 1,
                                this.render(D || (d ? 0 : x(s * a)), e, !_)._lock = 0,
                                this._tTime = m,
                                !e && this.parent && Oe(this, "onRepeat"),
                                this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                                D && D !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (_ = this._dur,
                                g = this._tDur,
                                C && (this._lock = 2,
                                    D = y ? _ : -1e-4,
                                    this.render(D, !0),
                                    this.vars.repeatRefresh && !d && this.invalidate()),
                                this._lock = 0,
                                !this._ts && !u)
                                return this;
                            pt(this, d)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, n) {
                            var r;
                            if (e < n)
                                for (r = t._first; r && r._start <= n;) {
                                    if ("isPause" === r.data && r._start > e)
                                        return r;
                                    r = r._next
                                }
                            else
                                for (r = t._last; r && r._start >= n;) {
                                    if ("isPause" === r.data && r._start < e)
                                        return r;
                                    r = r._prev
                                }
                        }(this, x(D), x(r))) && (m -= r - (r = l._start)),
                        this._tTime = m,
                        this._time = r,
                        this._act = !c,
                        this._initted || (this._onUpdate = this.vars.onUpdate,
                            this._initted = 1,
                            this._zTime = t,
                            D = 0),
                        !D && r && !e && !s && (Oe(this, "onStart"),
                            this._tTime !== m))
                        return this;
                    if (D <= r && 0 <= t)
                        for (i = this._first; i;) {
                            if (o = i._next,
                                (i._act || r >= i._start) && i._ts && l !== i) {
                                if (i.parent !== this)
                                    return this.render(t, e, n);
                                if (i.render(0 < i._ts ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n),
                                    r !== this._time || !this._ts && !u) {
                                    l = 0,
                                        o && (m += this._zTime = -Kt);
                                    break
                                }
                            }
                            i = o
                        }
                    else {
                        i = this._last;
                        for (var b = t < 0 ? t : r; i;) {
                            if (o = i._prev,
                                (i._act || b <= i._end) && i._ts && l !== i) {
                                if (i.parent !== this)
                                    return this.render(t, e, n);
                                if (i.render(0 < i._ts ? (b - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (b - i._start) * i._ts, e, n || vt && (i._initted || i._startAt)),
                                    r !== this._time || !this._ts && !u) {
                                    l = 0,
                                        o && (m += this._zTime = b ? -Kt : Kt);
                                    break
                                }
                            }
                            i = o
                        }
                    }
                    if (l && !e && (this.pause(),
                            l.render(D <= r ? 0 : -Kt)._zTime = D <= r ? 1 : -1,
                            this._ts))
                        return this._start = f,
                            I(this),
                            this.render(t, e, n);
                    this._onUpdate && !e && Oe(this, "onUpdate", !0),
                        (m === g && this._tTime >= this.totalDuration() || !m && D) && (f !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || (!t && _ || !(m === g && 0 < this._ts || !m && this._ts < 0) || B(this, 1),
                            e || t < 0 && !D || !m && !D && g || (Oe(this, m === g && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                                !this._prom || m < g && 0 < this.timeScale() || this._prom())))
                }
                return this
            },
            a.add = function (t, e) {
                var n = this;
                if (o(e) || (e = Te(this, e, t)),
                    !(t instanceof Ke)) {
                    if (re(t))
                        return t.forEach((function (t) {
                                return n.add(t, e)
                            })),
                            this;
                    if (r(t))
                        return this.addLabel(t, e);
                    if (!i(t))
                        return this;
                    t = un.delayedCall(0, t)
                }
                return this !== t ? j(this, t, e) : this
            },
            a.getChildren = function (t, e, n, r) {
                void 0 === t && (t = !0),
                    void 0 === e && (e = !0),
                    void 0 === n && (n = !0),
                    void 0 === r && (r = -Gt);
                for (var i = [], o = this._first; o;)
                    o._start >= r && (o instanceof un ? e && i.push(o) : (n && i.push(o),
                        t && i.push.apply(i, o.getChildren(!0, e, n)))),
                    o = o._next;
                return i
            },
            a.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                    if (e[n].vars.id === t)
                        return e[n]
            },
            a.remove = function (t) {
                return r(t) ? this.removeLabel(t) : i(t) ? this.killTweensOf(t) : (P(this, t),
                    t === this._recent && (this._recent = this._last),
                    R(this))
            },
            a.totalTime = function (e, n) {
                return arguments.length ? (this._forcing = 1,
                    !this._dp && this._ts && (this._start = x(Le.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                    t.prototype.totalTime.call(this, e, n),
                    this._forcing = 0,
                    this) : this._tTime
            },
            a.addLabel = function (t, e) {
                return this.labels[t] = Te(this, e),
                    this
            },
            a.removeLabel = function (t) {
                return delete this.labels[t],
                    this
            },
            a.addPause = function (t, e, n) {
                var r = un.delayedCall(0, e || D, n);
                return r.data = "isPause",
                    this._hasPause = 1,
                    j(this, r, Te(this, t))
            },
            a.removePause = function (t) {
                var e = this._first;
                for (t = Te(this, t); e;)
                    e._start === t && "isPause" === e.data && B(e),
                    e = e._next
            },
            a.killTweensOf = function (t, e, n) {
                for (var r = this.getTweensOf(t, n), i = r.length; i--;)
                    tn !== r[i] && r[i].kill(t, e);
                return this
            },
            a.getTweensOf = function (t, e) {
                for (var n, r = [], i = ke(t), s = this._first, a = o(e); s;)
                    s instanceof un ? b(s._targets, i) && (a ? (!tn || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (n = s.getTweensOf(i, e)).length && r.push.apply(r, n),
                    s = s._next;
                return r
            },
            a.tweenTo = function (t, e) {
                e = e || {};
                var n, r = this,
                    i = Te(r, t),
                    o = e.startAt,
                    s = e.onStart,
                    a = e.onStartParams,
                    u = e.immediateRender,
                    l = un.to(r, A({
                        ease: e.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: i,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((i - (o && "time" in o ? o.time : r._time)) / r.timeScale()) || Kt,
                        onStart: function () {
                            if (r.pause(),
                                !n) {
                                var t = e.duration || Math.abs((i - (o && "time" in o ? o.time : r._time)) / r.timeScale());
                                l._dur !== t && U(l, t, 0, 1).render(l._time, !0, !0),
                                    n = 1
                            }
                            s && s.apply(l, a || [])
                        }
                    }, e));
                return u ? l.render(0) : l
            },
            a.tweenFromTo = function (t, e, n) {
                return this.tweenTo(e, A({
                    startAt: {
                        time: Te(this, t)
                    }
                }, n))
            },
            a.recent = function () {
                return this._recent
            },
            a.nextLabel = function (t) {
                return void 0 === t && (t = this._time),
                    ot(this, Te(this, t))
            },
            a.previousLabel = function (t) {
                return void 0 === t && (t = this._time),
                    ot(this, Te(this, t), 1)
            },
            a.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Kt)
            },
            a.shiftChildren = function (t, e, n) {
                void 0 === n && (n = 0);
                for (var r, i = this._first, o = this.labels; i;)
                    i._start >= n && (i._start += t,
                        i._end += t),
                    i = i._next;
                if (e)
                    for (r in o)
                        o[r] >= n && (o[r] += t);
                return R(this)
            },
            a.invalidate = function (e) {
                var n = this._first;
                for (this._lock = 0; n;)
                    n.invalidate(e),
                    n = n._next;
                return t.prototype.invalidate.call(this, e)
            },
            a.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, n = this._first; n;)
                    e = n._next,
                    this.remove(n),
                    n = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                    t && (this.labels = {}),
                    R(this)
            },
            a.totalDuration = function (t) {
                var e, n, r, i = 0,
                    o = this,
                    s = o._last,
                    a = Gt;
                if (arguments.length)
                    return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                if (o._dirty) {
                    for (r = o.parent; s;)
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                        a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1,
                            j(o, s, n - s._delay, 1)._lock = 0) : a = n,
                        n < 0 && s._ts && (i -= n,
                            (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts,
                                o._time -= n,
                                o._tTime -= n),
                            o.shiftChildren(-n, !1, -1 / 0),
                            a = 0),
                        s._end > i && s._ts && (i = s._end),
                        s = e;
                    U(o, o === xt && o._time > i ? o._time : i, 1, 1),
                        o._dirty = 0
                }
                return o._tDur
            },
            s.updateRoot = function (t) {
                if (xt._ts && (E(xt, L(t, xt)),
                        Tt = Le.frame),
                    Le.frame >= ye) {
                    ye += Wt.autoSleep || 120;
                    var e = xt._first;
                    if ((!e || !e._ts) && Wt.autoSleep && Le._listeners.length < 2) {
                        for (; e && !e._ts;)
                            e = e._next;
                        e || Le.sleep()
                    }
                }
            },
            s
    }(Ke);

    function Ze(t, e, n, o, s, u) {
        var l, c, f, h;
        if (me[t] && !1 !== (l = new me[t]).init(s, l.rawVars ? e[t] : function (t, e, n, o, s) {
                if (i(t) && (t = on(t, s, e, n, o)),
                    !a(t) || t.style && t.nodeType || re(t) || ne(t))
                    return r(t) ? on(t, s, e, n, o) : t;
                var u, l = {};
                for (u in t)
                    l[u] = on(t[u], s, e, n, o);
                return l
            }(e[t], o, s, u, n), n, o, u) && (n._pt = c = new Cn(n._pt, s, t, 0, 1, l.render, l, 0, l.priority),
                n !== At))
            for (f = n._ptLookup[n._targets.indexOf(s)],
                h = l._props.length; h--;)
                f[l._props[h]] = c;
        return l
    }

    function Je(t, e, n, r) {
        var i, o, s = e.ease || r || "power1.inOut";
        if (re(e))
            o = n[t] || (n[t] = []),
            e.forEach((function (t, n) {
                return o.push({
                    t: n / (e.length - 1) * 100,
                    v: t,
                    e: s
                })
            }));
        else
            for (i in e)
                o = n[i] || (n[i] = []),
                "ease" === i || o.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: s
                })
    }
    A($e.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var tn, en, nn = function (t, e, n, o, s, a, u, l, c, f) {
            i(o) && (o = o(s || 0, t, a));
            var p, d = t[e],
                D = "get" !== n ? n : i(d) ? c ? t[e.indexOf("set") || !i(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : d,
                g = i(d) ? c ? pn : hn : fn;
            if (r(o) && (~o.indexOf("random(") && (o = it(o)),
                    "=" === o.charAt(1) && (!(p = C(D, o) + (K(D) || 0)) && 0 !== p || (o = p))),
                !f || D !== o || en)
                return isNaN(D * o) || "" === o ? (d || e in t || h(e, o),
                    function (t, e, n, r, i, o, s) {
                        var a, u, l, c, f, h, p, d, D = new Cn(this._pt, t, e, 0, 1, _n, null, i),
                            g = 0,
                            _ = 0;
                        for (D.b = n,
                            D.e = r,
                            n += "",
                            (p = ~(r += "").indexOf("random(")) && (r = it(r)),
                            o && (o(d = [n, r], t, e),
                                n = d[0],
                                r = d[1]),
                            u = n.match(ae) || []; a = ae.exec(r);)
                            c = a[0],
                            f = r.substring(g, a.index),
                            l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1),
                            c !== u[_++] && (h = parseFloat(u[_ - 1]) || 0,
                                D._pt = {
                                    _next: D._pt,
                                    p: f || 1 === _ ? f : ",",
                                    s: h,
                                    c: "=" === c.charAt(1) ? C(h, c) - h : parseFloat(c) - h,
                                    m: l && l < 4 ? Math.round : 0
                                },
                                g = ae.lastIndex);
                        return D.c = g < r.length ? r.substring(g, r.length) : "",
                            D.fp = s,
                            (ue.test(r) || p) && (D.e = 0),
                            this._pt = D
                    }
                    .call(this, t, e, D, o, g, l || Wt.stringFilter, c)) : (p = new Cn(this._pt, t, e, +D || 0, o - (D || 0), "boolean" == typeof d ? gn : Dn, 0, g),
                    c && (p.fp = c),
                    u && p.modifier(u, this, t),
                    this._pt = p)
        },
        rn = function t(e, n, r) {
            var i, o, s, a, l, c, f, h, p, d, D, m, v, y = e.vars,
                x = y.ease,
                C = y.startAt,
                b = y.immediateRender,
                E = y.lazy,
                w = y.onUpdate,
                T = y.onUpdateParams,
                M = y.callbackScope,
                S = y.runBackwards,
                O = y.yoyoEase,
                P = y.keyframes,
                R = y.autoRevert,
                N = e._dur,
                z = e._startAt,
                L = e._targets,
                I = e.parent,
                Y = I && "nested" === I.data ? I.vars.targets : L,
                X = "auto" === e._overwrite && !mt,
                j = e.timeline;
            if (!j || P && x || (x = "none"),
                e._ease = He(x, qt.ease),
                e._yEase = O ? Ve(He(!0 === O ? x : O, qt.ease)) : 0,
                O && e._yoyo && !e._repeat && (O = e._yEase,
                    e._yEase = e._ease,
                    e._ease = O),
                e._from = !j && !!y.runBackwards,
                !j || P && !y.stagger) {
                if (m = (h = L[0] ? _(L[0]).harness : 0) && y[h.prop],
                    i = k(y, De),
                    z && (z._zTime < 0 && z.progress(1),
                        n < 0 && S && b && !R ? z.render(-1, !0) : z.revert(S && N ? pe : he),
                        z._lazy = 0),
                    C) {
                    if (B(e._startAt = un.set(L, A({
                            data: "isStart",
                            overwrite: !1,
                            parent: I,
                            immediateRender: !0,
                            lazy: !z && u(E),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: T,
                            callbackScope: M,
                            stagger: 0
                        }, C))),
                        e._startAt._dp = 0,
                        e._startAt._sat = e,
                        n < 0 && (vt || !b && !R) && e._startAt.revert(pe),
                        b && N && n <= 0 && r <= 0)
                        return void(n && (e._zTime = n))
                } else if (S && N && !z)
                    if (n && (b = !1),
                        s = A({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: b && !z && u(E),
                            immediateRender: b,
                            stagger: 0,
                            parent: I
                        }, i),
                        m && (s[h.prop] = m),
                        B(e._startAt = un.set(L, s)),
                        e._startAt._dp = 0,
                        e._startAt._sat = e,
                        n < 0 && (vt ? e._startAt.revert(pe) : e._startAt.render(-1, !0)),
                        e._zTime = n,
                        b) {
                        if (!n)
                            return
                    } else
                        t(e._startAt, Kt, Kt);
                for (e._pt = e._ptCache = 0,
                    E = N && u(E) || E && !N,
                    o = 0; o < L.length; o++) {
                    if (f = (l = L[o])._gsap || g(L)[o]._gsap,
                        e._ptLookup[o] = d = {},
                        _e[f.id] && ge.length && F(),
                        D = Y === L ? o : Y.indexOf(l),
                        h && !1 !== (p = new h).init(l, m || i, e, D, Y) && (e._pt = a = new Cn(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority),
                            p._props.forEach((function (t) {
                                d[t] = a
                            })),
                            p.priority && (c = 1)),
                        !h || m)
                        for (s in i)
                            me[s] && (p = Ze(s, i, e, D, l, Y)) ? p.priority && (c = 1) : d[s] = a = nn.call(e, l, s, "get", i[s], D, Y, 0, y.stringFilter);
                    e._op && e._op[o] && e.kill(l, e._op[o]),
                        X && e._pt && (tn = e,
                            xt.killTweensOf(l, d, e.globalTime(n)),
                            v = !e.parent,
                            tn = 0),
                        e._pt && E && (_e[f.id] = 1)
                }
                c && xn(e),
                    e._onInit && e._onInit(e)
            }
            e._onUpdate = w,
                e._initted = (!e._op || e._pt) && !v,
                P && n <= 0 && j.render(Gt, !0, !0)
        },
        on = function (t, e, n, o, s) {
            return i(t) ? t.call(e, n, o, s) : r(t) && ~t.indexOf("random(") ? it(t) : t
        },
        sn = Ce + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        an = {};
    v(sn + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
        return an[t] = 1
    }));
    var un = function (t) {
        function i(e, r, i, s) {
            var l;
            "number" == typeof r && (i.duration = r,
                r = i,
                i = null);
            var f, h, d, D, _, m, v, y, C = (l = t.call(this, s ? r : S(r)) || this).vars,
                b = C.duration,
                F = C.delay,
                E = C.immediateRender,
                w = C.stagger,
                T = C.overwrite,
                M = C.keyframes,
                O = C.defaults,
                P = C.scrollTrigger,
                B = C.yoyoEase,
                R = r.parent || xt,
                N = (re(e) || ne(e) ? o(e[0]) : "length" in r) ? [e] : ke(e);
            if (l._targets = N.length ? g(N) : p("GSAP target " + e + " not found. https://greensock.com", !Wt.nullTargetWarn) || [],
                l._ptLookup = [],
                l._overwrite = T,
                M || w || c(b) || c(F)) {
                if (r = l.vars,
                    (f = l.timeline = new $e({
                        data: "nested",
                        defaults: O || {},
                        targets: R && "nested" === R.data ? R.vars.targets : N
                    })).kill(),
                    f.parent = f._dp = n(l),
                    f._start = 0,
                    w || c(b) || c(F)) {
                    if (D = N.length,
                        v = w && J(w),
                        a(w))
                        for (_ in w)
                            ~sn.indexOf(_) && ((y = y || {})[_] = w[_]);
                    for (h = 0; h < D; h++)
                        (d = k(r, an)).stagger = 0,
                        B && (d.yoyoEase = B),
                        y && be(d, y),
                        m = N[h],
                        d.duration = +on(b, n(l), h, m, N),
                        d.delay = (+on(F, n(l), h, m, N) || 0) - l._delay,
                        !w && 1 === D && d.delay && (l._delay = F = d.delay,
                            l._start += F,
                            d.delay = 0),
                        f.to(m, d, v ? v(h, m, N) : 0),
                        f._ease = Ye.none;
                    f.duration() ? b = F = 0 : l.timeline = 0
                } else if (M) {
                    S(A(f.vars.defaults, {
                            ease: "none"
                        })),
                        f._ease = He(M.ease || r.ease || "none");
                    var z, L, I, Y = 0;
                    if (re(M))
                        M.forEach((function (t) {
                            return f.to(N, t, ">")
                        })),
                        f.duration();
                    else {
                        for (_ in d = {},
                            M)
                            "ease" === _ || "easeEach" === _ || Je(_, M[_], d, M.easeEach);
                        for (_ in d)
                            for (z = d[_].sort((function (t, e) {
                                    return t.t - e.t
                                })),
                                h = Y = 0; h < z.length; h++)
                                (I = {
                                    ease: (L = z[h]).e,
                                    duration: (L.t - (h ? z[h - 1].t : 0)) / 100 * b
                                })[_] = L.v,
                                f.to(N, I, Y),
                                Y += I.duration;
                        f.duration() < b && f.to({}, {
                            duration: b - f.duration()
                        })
                    }
                }
                b || l.duration(b = f.duration())
            } else
                l.timeline = 0;
            return !0 !== T || mt || (tn = n(l),
                    xt.killTweensOf(N),
                    tn = 0),
                j(R, n(l), i),
                r.reversed && l.reverse(),
                r.paused && l.paused(!0),
                (E || !b && !M && l._start === x(R._time) && u(E) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(n(l)) && "nested" !== R.data) && (l._tTime = -Kt,
                    l.render(Math.max(0, -F) || 0)),
                P && V(n(l), P),
                l
        }
        e(i, t);
        var s = i.prototype;
        return s.render = function (t, e, n) {
                var r, i, o, s, a, u, l, c, f, h = this._time,
                    p = this._tDur,
                    d = this._dur,
                    D = t < 0,
                    g = p - Kt < t && !D ? p : t < Kt ? 0 : t;
                if (d) {
                    if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != D) {
                        if (r = g,
                            c = this.timeline,
                            this._repeat) {
                            if (s = d + this._rDelay,
                                this._repeat < -1 && D)
                                return this.totalTime(100 * s + t, e, n);
                            if (r = x(g % s),
                                g === p ? (o = this._repeat,
                                    r = d) : ((o = ~~(g / s)) && o === g / s && (r = d,
                                        o--),
                                    d < r && (r = d)),
                                (u = this._yoyo && 1 & o) && (f = this._yEase,
                                    r = d - r),
                                a = Fe(this._tTime, s),
                                r === h && !n && this._initted)
                                return this._tTime = g,
                                    this;
                            o !== a && (c && this._yEase && pt(c, u),
                                !this.vars.repeatRefresh || u || this._lock || (this._lock = n = 1,
                                    this.render(x(s * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (H(this, D ? t : r, n, e, g))
                                return this._tTime = 0,
                                    this;
                            if (h !== this._time)
                                return this;
                            if (d !== this._dur)
                                return this.render(t, e, n)
                        }
                        if (this._tTime = g,
                            this._time = r,
                            !this._act && this._ts && (this._act = 1,
                                this._lazy = 0),
                            this.ratio = l = (f || this._ease)(r / d),
                            this._from && (this.ratio = l = 1 - l),
                            r && !h && !e && !o && (Oe(this, "onStart"),
                                this._tTime !== g))
                            return this;
                        for (i = this._pt; i;)
                            i.r(l, i.d),
                            i = i._next;
                        c && c.render(t < 0 ? t : !r && u ? -Kt : c._dur * c._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t),
                            this._onUpdate && !e && (D && N(this, t, 0, n),
                                Oe(this, "onUpdate")),
                            this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && Oe(this, "onRepeat"),
                            g !== this._tDur && g || this._tTime !== g || (D && !this._onUpdate && N(this, t, 0, !0),
                                !t && d || !(g === this._tDur && 0 < this._ts || !g && this._ts < 0) || B(this, 1),
                                e || D && !h || !(g || h || u) || (Oe(this, g === p ? "onComplete" : "onReverseComplete", !0),
                                    !this._prom || g < p && 0 < this.timeScale() || this._prom()))
                    }
                } else
                    ! function (t, e, n, r) {
                        var i, o, s, a = t.ratio,
                            u = e < 0 || !e && (!t._start && function t(e) {
                                var n = e.parent;
                                return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                            }(t) && (t._initted || !Ee(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ee(t)) ? 0 : 1,
                            l = t._rDelay,
                            c = 0;
                        if (l && t._repeat && (c = Ae(0, t._tDur, e),
                                o = Fe(c, l),
                                t._yoyo && 1 & o && (u = 1 - u),
                                o !== Fe(t._tTime, l) && (a = 1 - u,
                                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                            u !== a || vt || r || t._zTime === Kt || !e && t._zTime) {
                            if (!t._initted && H(t, e, r, n, c))
                                return;
                            for (s = t._zTime,
                                t._zTime = e || (n ? Kt : 0),
                                n = n || e && !s,
                                t.ratio = u,
                                t._from && (u = 1 - u),
                                t._time = 0,
                                t._tTime = c,
                                i = t._pt; i;)
                                i.r(u, i.d),
                                i = i._next;
                            e < 0 && N(t, e, 0, !0),
                                t._onUpdate && !n && Oe(t, "onUpdate"),
                                c && t._repeat && !n && t.parent && Oe(t, "onRepeat"),
                                (e >= t._tDur || e < 0) && t.ratio === u && (u && B(t, 1),
                                    n || vt || (Oe(t, u ? "onComplete" : "onReverseComplete", !0),
                                        t._prom && t._prom()))
                        } else
                            t._zTime || (t._zTime = e)
                    }(this, t, e, n);
                return this
            },
            s.targets = function () {
                return this._targets
            },
            s.invalidate = function (e) {
                return e && this.vars.runBackwards || (this._startAt = 0),
                    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                    this._ptLookup = [],
                    this.timeline && this.timeline.invalidate(e),
                    t.prototype.invalidate.call(this, e)
            },
            s.resetTo = function (t, e, n, r) {
                Mt || Le.wake(),
                    this._ts || this.play();
                var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || rn(this, i),
                    function (t, e, n, r, i, o, s) {
                        var a, u, l, c, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                        if (!f)
                            for (f = t._ptCache[e] = [],
                                l = t._ptLookup,
                                c = t._targets.length; c--;) {
                                if ((a = l[c][e]) && a.d && a.d._pt)
                                    for (a = a.d._pt; a && a.p !== e && a.fp !== e;)
                                        a = a._next;
                                if (!a)
                                    return en = 1,
                                        t.vars[e] = "+=0",
                                        rn(t, s),
                                        en = 0,
                                        1;
                                f.push(a)
                            }
                        for (c = f.length; c--;)
                            (a = (u = f[c])._pt || u).s = !r && 0 !== r || i ? a.s + (r || 0) + o * a.c : r,
                            a.c = n - a.s,
                            u.e && (u.e = y(n) + K(u.e)),
                            u.b && (u.b = a.s + K(u.b))
                    }(this, t, e, n, r, this._ease(i / this._dur), i) ? this.resetTo(t, e, n, r) : (Y(this, 0),
                        this.parent || O(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                        this.render(0))
            },
            s.kill = function (t, e) {
                if (void 0 === e && (e = "all"),
                    !(t || e && "all" !== e))
                    return this._lazy = this._pt = 0,
                        this.parent ? st(this) : this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, tn && !0 !== tn.vars.overwrite)._first || st(this),
                        this.parent && n !== this.timeline.totalDuration() && U(this, this._dur * this.timeline._tDur / n, 0, 1),
                        this
                }
                var i, o, s, a, u, l, c, f = this._targets,
                    h = t ? ke(t) : f,
                    p = this._ptLookup,
                    d = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                        for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];)
                        ;
                        return n < 0
                    }(f, h))
                    return "all" === e && (this._pt = 0),
                        st(this);
                for (i = this._op = this._op || [],
                    "all" !== e && (r(e) && (u = {},
                            v(e, (function (t) {
                                return u[t] = 1
                            })),
                            e = u),
                        e = function (t, e) {
                            var n, r, i, o, s = t[0] ? _(t[0]).harness : 0,
                                a = s && s.aliases;
                            if (!a)
                                return e;
                            for (r in n = be({}, e),
                                a)
                                if (r in n)
                                    for (i = (o = a[r].split(",")).length; i--;)
                                        n[o[i]] = n[r];
                            return n
                        }(f, e)),
                    c = f.length; c--;)
                    if (~h.indexOf(f[c]))
                        for (u in o = p[c],
                            "all" === e ? (i[c] = e,
                                a = o,
                                s = {}) : (s = i[c] = i[c] || {},
                                a = e),
                            a)
                            (l = o && o[u]) && ("kill" in l.d && !0 !== l.d.kill(u) || P(this, l, "_pt"),
                                delete o[u]),
                            "all" !== s && (s[u] = 1);
                return this._initted && !this._pt && d && st(this),
                    this
            },
            i.to = function (t, e, n) {
                return new i(t, e, n)
            },
            i.from = function (t, e) {
                return q(1, arguments)
            },
            i.delayedCall = function (t, e, n, r) {
                return new i(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: r
                })
            },
            i.fromTo = function (t, e, n) {
                return q(2, arguments)
            },
            i.set = function (t, e) {
                return e.duration = 0,
                    e.repeatDelay || (e.repeat = 0),
                    new i(t, e)
            },
            i.killTweensOf = function (t, e, n) {
                return xt.killTweensOf(t, e, n)
            },
            i
    }(Ke);

    function ln(t, e, n) {
        return t.setAttribute(e, n)
    }

    function cn(t, e, n, r) {
        r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
    }
    A(un.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }),
        v("staggerTo,staggerFrom,staggerFromTo", (function (t) {
            un[t] = function () {
                var e = new $e,
                    n = Me.call(arguments, 0);
                return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                    e[t].apply(e, n)
            }
        }));
    var fn = function (t, e, n) {
            return t[e] = n
        },
        hn = function (t, e, n) {
            return t[e](n)
        },
        pn = function (t, e, n, r) {
            return t[e](r.fp, n)
        },
        dn = function (t, e) {
            return i(t[e]) ? hn : s(t[e]) && t.setAttribute ? ln : fn
        },
        Dn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        gn = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        _n = function (t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b)
                r = e.b;
            else if (1 === t && e.e)
                r = e.e;
            else {
                for (; n;)
                    r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r,
                    n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        mn = function (t, e) {
            for (var n = e._pt; n;)
                n.r(t, n.d),
                n = n._next
        },
        vn = function (t, e, n, r) {
            for (var i, o = this._pt; o;)
                i = o._next,
                o.p === r && o.modifier(t, e, n),
                o = i
        },
        yn = function (t) {
            for (var e, n, r = this._pt; r;)
                n = r._next,
                r.p === t && !r.op || r.op === t ? P(this, r, "_pt") : r.dep || (e = 1),
                r = n;
            return !e
        },
        xn = function (t) {
            for (var e, n, r, i, o = t._pt; o;) {
                for (e = o._next,
                    n = r; n && n.pr > o.pr;)
                    n = n._next;
                (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o,
                    (o._next = n) ? n._prev = o : i = o,
                    o = e
            }
            t._pt = r
        },
        Cn = (bn.prototype.modifier = function (t, e, n) {
                this.mSet = this.mSet || this.set,
                    this.set = cn,
                    this.m = t,
                    this.mt = n,
                    this.tween = e
            },
            bn);

    function bn(t, e, n, r, i, o, s, a, u) {
        this.t = e,
            this.s = r,
            this.c = i,
            this.p = n,
            this.r = o || Dn,
            this.d = s || this,
            this.set = a || fn,
            this.pr = u || 0,
            (this._next = t) && (t._prev = this)
    }

    function Fn(t) {
        return (An[t] || Mn).map((function (t) {
            return t()
        }))
    }

    function En() {
        var t = Date.now(),
            e = [];
        2 < t - kn && (Fn("matchMediaInit"),
            Tn.forEach((function (t) {
                var n, r, i, o, s = t.queries,
                    a = t.conditions;
                for (r in s)
                    (n = Ct.matchMedia(s[r]).matches) && (i = 1),
                    n !== a[r] && (a[r] = n,
                        o = 1);
                o && (t.revert(),
                    i && e.push(t))
            })),
            Fn("matchMediaRevert"),
            e.forEach((function (t) {
                return t.onMatch(t)
            })),
            kn = t,
            Fn("matchMedia"))
    }
    v(Ce + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
            return De[t] = 1
        })),
        fe.TweenMax = fe.TweenLite = un,
        fe.TimelineLite = fe.TimelineMax = $e,
        xt = new $e({
            sortChildren: !1,
            defaults: qt,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }),
        Wt.stringFilter = ht;
    var wn, Tn = [],
        An = {},
        Mn = [],
        kn = 0,
        Sn = 0,
        On = ((wn = Pn.prototype).add = function (t, e, n) {
                function r() {
                    var t, r = yt,
                        s = o.selector;
                    return r && r !== o && r.data.push(o),
                        n && (o.selector = $(n)),
                        yt = o,
                        i(t = e.apply(o, arguments)) && o._r.push(t),
                        yt = r,
                        o.selector = s,
                        o.isReverted = !1,
                        t
                }
                i(t) && (n = e,
                    e = t,
                    t = i);
                var o = this;
                return o.last = r,
                    t === i ? r(o) : t ? o[t] = r : r
            },
            wn.ignore = function (t) {
                var e = yt;
                yt = null,
                    t(this),
                    yt = e
            },
            wn.getTweens = function () {
                var t = [];
                return this.data.forEach((function (e) {
                        return e instanceof Pn ? t.push.apply(t, e.getTweens()) : e instanceof un && !(e.parent && "nested" === e.parent.data) && t.push(e)
                    })),
                    t
            },
            wn.clear = function () {
                this._r.length = this.data.length = 0
            },
            wn.kill = function (t, e) {
                var n = this;
                if (t) {
                    var r = this.getTweens();
                    this.data.forEach((function (t) {
                            "isFlip" === t.data && (t.revert(),
                                t.getChildren(!0, !0, !1).forEach((function (t) {
                                    return r.splice(r.indexOf(t), 1)
                                })))
                        })),
                        r.map((function (t) {
                            return {
                                g: t.globalTime(0),
                                t: t
                            }
                        })).sort((function (t, e) {
                            return e.g - t.g || -1 / 0
                        })).forEach((function (e) {
                            return e.t.revert(t)
                        })),
                        this.data.forEach((function (e) {
                            return !(e instanceof un) && e.revert && e.revert(t)
                        })),
                        this._r.forEach((function (e) {
                            return e(t, n)
                        })),
                        this.isReverted = !0
                } else
                    this.data.forEach((function (t) {
                        return t.kill && t.kill()
                    }));
                if (this.clear(),
                    e)
                    for (var i = Tn.length; i--;)
                        Tn[i].id === this.id && Tn.splice(i, 1)
            },
            wn.revert = function (t) {
                this.kill(t || {})
            },
            Pn);

    function Pn(t, e) {
        this.selector = e && $(e),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            this.id = Sn++,
            t && this.add(t)
    }
    var Bn, Rn = ((Bn = Nn.prototype).add = function (t, e, n) {
            a(t) || (t = {
                matches: t
            });
            var r, i, o, s = new On(0, n || this.scope),
                u = s.conditions = {};
            for (i in yt && !s.selector && (s.selector = yt.selector),
                this.contexts.push(s),
                e = s.add("onMatch", e),
                s.queries = t)
                "all" === i ? o = 1 : (r = Ct.matchMedia(t[i])) && (Tn.indexOf(s) < 0 && Tn.push(s),
                    (u[i] = r.matches) && (o = 1),
                    r.addListener ? r.addListener(En) : r.addEventListener("change", En));
            return o && e(s),
                this
        },
        Bn.revert = function (t) {
            this.kill(t || {})
        },
        Bn.kill = function (t) {
            this.contexts.forEach((function (e) {
                return e.kill(t, !0)
            }))
        },
        Nn);

    function Nn(t) {
        this.contexts = [],
            this.scope = t
    }
    var zn = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach((function (t) {
                return at(t)
            }))
        },
        timeline: function (t) {
            return new $e(t)
        },
        getTweensOf: function (t, e) {
            return xt.getTweensOf(t, e)
        },
        getProperty: function (t, e, n, i) {
            r(t) && (t = ke(t)[0]);
            var o = _(t || {}).get,
                s = n ? T : w;
            return "native" === n && (n = ""),
                t ? e ? s((me[e] && me[e].get || o)(t, e, n, i)) : function (e, n, r) {
                    return s((me[e] && me[e].get || o)(t, e, n, r))
                } :
                t
        },
        quickSetter: function (t, e, n) {
            if (1 < (t = ke(t)).length) {
                var r = t.map((function (t) {
                        return Yn.quickSetter(t, e, n)
                    })),
                    i = r.length;
                return function (t) {
                    for (var e = i; e--;)
                        r[e](t)
                }
            }
            t = t[0] || {};
            var o = me[e],
                s = _(t),
                a = s.harness && (s.harness.aliases || {})[e] || e,
                u = o ? function (e) {
                    var r = new o;
                    At._pt = 0,
                        r.init(t, n ? e + n : e, At, 0, [t]),
                        r.render(1, r),
                        At._pt && mn(1, At)
                } :
                s.set(t, a);
            return o ? u : function (e) {
                return u(t, a, n ? e + n : e, s, 1)
            }
        },
        quickTo: function (t, e, n) {
            function r(t, n, r) {
                return o.resetTo(e, t, n, r)
            }
            var i, o = Yn.to(t, be(((i = {})[e] = "+=0.1",
                i.paused = !0,
                i), n || {}));
            return r.tween = o,
                r
        },
        isTweening: function (t) {
            return 0 < xt.getTweensOf(t, !0).length
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = He(t.ease, qt.ease)),
                M(qt, t || {})
        },
        config: function (t) {
            return M(Wt, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                o = t.extendTimeline;
            (r || "").split(",").forEach((function (t) {
                    return t && !me[t] && !fe[t] && p(e + " effect requires " + t + " plugin.")
                })),
                ve[e] = function (t, e, r) {
                    return n(ke(t), A(e || {}, i), r)
                },
                o && ($e.prototype[e] = function (t, n, r) {
                    return this.add(ve[e](t, a(n) ? n : (r = n) && {}, this), r)
                })
        },
        registerEase: function (t, e) {
            Ye[t] = He(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? He(t, e) : Ye
        },
        getById: function (t) {
            return xt.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n, r, i = new $e(t);
            for (i.smoothChildTiming = u(t.smoothChildTiming),
                xt.remove(i),
                i._dp = 0,
                i._time = i._tTime = xt._time,
                n = xt._first; n;)
                r = n._next,
                !e && !n._dur && n instanceof un && n.vars.onComplete === n._targets[0] || j(i, n, n._start - n._delay),
                n = r;
            return j(xt, i, 0),
                i
        },
        context: function (t, e) {
            return t ? new On(t, e) : yt
        },
        matchMedia: function (t) {
            return new Rn(t)
        },
        matchMediaRefresh: function () {
            return Tn.forEach((function (t) {
                var e, n, r = t.conditions;
                for (n in r)
                    r[n] && (r[n] = !1,
                        e = 1);
                e && t.revert()
            })) || En()
        },
        addEventListener: function (t, e) {
            var n = An[t] || (An[t] = []);
            ~n.indexOf(e) || n.push(e)
        },
        removeEventListener: function (t, e) {
            var n = An[t],
                r = n && n.indexOf(e);
            0 <= r && n.splice(r, 1)
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return re(e) ? rt(e, t(0, e.length), n) : G(r, (function (t) {
                    return (i + (t - e) % i) % i + e
                }))
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e,
                    o = 2 * i;
                return re(e) ? rt(e, t(0, e.length - 1), n) : G(r, (function (t) {
                    return e + (i < (t = (o + (t - e) % o) % o || 0) ? o - t : t)
                }))
            },
            distribute: J,
            random: nt,
            snap: et,
            normalize: function (t, e, n) {
                return Se(t, e, 0, 1, n)
            },
            getUnit: K,
            clamp: function (t, e, n) {
                return G(n, (function (n) {
                    return Ae(t, e, n)
                }))
            },
            splitColor: lt,
            toArray: ke,
            selector: $,
            mapRange: Se,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || K(n))
                }
            },
            interpolate: function t(e, n, i, o) {
                var s = isNaN(e + n) ? 0 : function (t) {
                    return (1 - t) * e + t * n
                };
                if (!s) {
                    var a, u, l, c, f, h = r(e),
                        p = {};
                    if (!0 === i && (o = 1) && (i = null),
                        h)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (re(e) && !re(n)) {
                        for (l = [],
                            c = e.length,
                            f = c - 2,
                            u = 1; u < c; u++)
                            l.push(t(e[u - 1], e[u]));
                        c--,
                        s = function (t) {
                                t *= c;
                                var e = Math.min(f, ~~t);
                                return l[e](t - e)
                            },
                            i = n
                    } else
                        o || (e = be(re(e) ? [] : {}, e));
                    if (!l) {
                        for (a in n)
                            nn.call(p, e, a, "get", n[a]);
                        s = function (t) {
                            return mn(t, p) || (h ? e.p : e)
                        }
                    }
                }
                return G(i, s)
            },
            shuffle: Z
        },
        install: f,
        effects: ve,
        ticker: Le,
        updateRoot: $e.updateRoot,
        plugins: me,
        globalTimeline: xt,
        core: {
            PropTween: Cn,
            globals: d,
            Tween: un,
            Timeline: $e,
            Animation: Ke,
            getCache: _,
            _removeLinkedListItem: P,
            reverting: function () {
                return vt
            },
            context: function (t) {
                return t && yt && (yt.data.push(t),
                        t._ctx = yt),
                    yt
            },
            suppressOverwrites: function (t) {
                return mt = t
            }
        }
    };

    function Ln(t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;)
            n = n._next;
        return n
    }

    function In(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function (t, n, i) {
                i._onInit = function (t) {
                    var i, o;
                    if (r(n) && (i = {},
                            v(n, (function (t) {
                                return i[t] = 1
                            })),
                            n = i),
                        e) {
                        for (o in i = {},
                            n)
                            i[o] = e(n[o]);
                        n = i
                    }! function (t, e) {
                        var n, r, i, o = t._targets;
                        for (n in e)
                            for (r = o.length; r--;)
                                (i = (i = t._ptLookup[r][n]) && i.d) && (i._pt && (i = Ln(i, n)),
                                    i && i.modifier && i.modifier(e[n], t, o[r], n))
                    }(t, n)
                }
            }
        }
    }
    v("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
            return zn[t] = un[t]
        })),
        Le.add($e.updateRoot),
        At = zn.to({}, {
            duration: 0
        });
    var Yn = zn.registerPlugin({
        name: "attr",
        init: function (t, e, n, r, i) {
            var o, s, a;
            for (o in this.tween = n,
                e)
                a = t.getAttribute(o) || "",
                (s = this.add(t, "setAttribute", (a || 0) + "", e[o], r, i, 0, 0, o)).op = o,
                s.b = a,
                this._props.push(o)
        },
        render: function (t, e) {
            for (var n = e._pt; n;)
                vt ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d),
                n = n._next
        }
    }, {
        name: "endArray",
        init: function (t, e) {
            for (var n = e.length; n--;)
                this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
        }
    }, In("roundProps", tt), In("modifiers"), In("snap", et)) || zn;

    function Xn(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function jn(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Vn(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function Hn(t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
    }

    function Un(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function Wn(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function qn(t, e, n) {
        return t.style[e] = n
    }

    function Gn(t, e, n) {
        return t.style.setProperty(e, n)
    }

    function Kn(t, e, n) {
        return t._gsap[e] = n
    }

    function Qn(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }

    function $n(t, e, n, r, i) {
        var o = t._gsap;
        o.scaleX = o.scaleY = n,
            o.renderTransform(i, o)
    }

    function Zn(t, e, n, r, i) {
        var o = t._gsap;
        o[e] = n,
            o.renderTransform(i, o)
    }

    function Jn(t, e) {
        var n = this,
            r = this.target,
            i = r.style;
        if (t in Qr && i) {
            if (this.tfm = this.tfm || {},
                "transform" === t)
                return ri.transform.split(",").forEach((function (t) {
                    return Jn.call(n, t, e)
                }));
            if (~(t = ri[t] || t).indexOf(",") ? t.split(",").forEach((function (t) {
                    return n.tfm[t] = ci(r, t)
                })) : this.tfm[t] = r._gsap.x ? r._gsap[t] : ci(r, t),
                0 <= this.props.indexOf(ii))
                return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
                    this.props.push(oi, e, "")),
                t = ii
        }
        (i || e) && this.props.push(t, e, i[t])
    }

    function tr(t) {
        t.translate && (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"))
    }

    function er() {
        var t, e, n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap;
        for (t = 0; t < n.length; t += 3)
            n[t + 1] ? r[n[t]] = n[t + 2] : n[t + 2] ? i[n[t]] = n[t + 2] : i.removeProperty("--" === n[t].substr(0, 2) ? n[t] : n[t].replace(ti, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                o[e] = this.tfm[e];
            o.svg && (o.renderTransform(),
                    r.setAttribute("data-svg-origin", this.svgo || "")),
                (t = kr()) && t.isStart || i[ii] || (tr(i),
                    o.uncache = 1)
        }
    }

    function nr(t, e) {
        var n = {
            target: t,
            props: [],
            revert: er,
            save: Jn
        };
        return t._gsap || Yn.core.getCache(t),
            e && e.split(",").forEach((function (t) {
                return n.save(t)
            })),
            n
    }

    function rr(t, e) {
        var n = Er.createElementNS ? Er.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Er.createElement(t);
        return n.style ? n : Er.createElement(t)
    }

    function ir(t, e, n) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(ti, "-$1").toLowerCase()) || r.getPropertyValue(e) || !n && ir(t, ai(e) || e, 1) || ""
    }

    function or() {
        "undefined" != typeof window && window.document && (Fr = window,
            Er = Fr.document,
            wr = Er.documentElement,
            Ar = rr("div") || {
                style: {}
            },
            rr("div"),
            ii = ai(ii),
            oi = ii + "Origin",
            Ar.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            Sr = !!ai("perspective"),
            kr = Yn.core.reverting,
            Tr = 1)
    }

    function sr(t) {
        var e, n = rr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            i = this.nextSibling,
            o = this.style.cssText;
        if (wr.appendChild(n),
            n.appendChild(this),
            this.style.display = "block",
            t)
            try {
                e = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = sr
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
            wr.removeChild(n),
            this.style.cssText = o,
            e
    }

    function ar(t, e) {
        for (var n = e.length; n--;)
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }

    function ur(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (n) {
            e = sr.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === sr || (e = sr.call(t, !0)),
            !e || e.width || e.x || e.y ? e : {
                x: +ar(t, ["x", "cx", "x1"]) || 0,
                y: +ar(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
    }

    function lr(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ur(t))
    }

    function cr(t, e) {
        if (e) {
            var n = t.style;
            e in Qr && e !== oi && (e = ii),
                n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                    n.removeProperty(e.replace(ti, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    }

    function fr(t, e, n, r, i, o) {
        var s = new Cn(t._pt, e, n, 0, 1, o ? Wn : Un);
        return (t._pt = s).b = r,
            s.e = i,
            t._props.push(n),
            s
    }

    function hr(t, e, n, r) {
        var i, o, s, a, u = parseFloat(n) || 0,
            l = (n + "").trim().substr((u + "").length) || "px",
            c = Ar.style,
            f = ei.test(e),
            h = "svg" === t.tagName.toLowerCase(),
            p = (h ? "client" : "offset") + (f ? "Width" : "Height"),
            d = "px" === r,
            D = "%" === r;
        return r === l || !u || ui[r] || ui[l] ? u : ("px" === l || d || (u = hr(t, e, n, "px")),
            a = t.getCTM && lr(t),
            !D && "%" !== l || !Qr[e] && !~e.indexOf("adius") ? (c[f ? "width" : "height"] = 100 + (d ? l : r),
                o = ~e.indexOf("adius") || "em" === r && t.appendChild && !h ? t : t.parentNode,
                a && (o = (t.ownerSVGElement || {}).parentNode),
                o && o !== Er && o.appendChild || (o = Er.body),
                (s = o._gsap) && D && s.width && f && s.time === Le.time && !s.uncache ? y(u / s.width * 100) : (!D && "%" !== l || li[ir(o, "display")] || (c.position = ir(t, "position")),
                    o === t && (c.position = "static"),
                    o.appendChild(Ar),
                    i = Ar[p],
                    o.removeChild(Ar),
                    c.position = "absolute",
                    f && D && ((s = _(o)).time = Le.time,
                        s.width = o[p]),
                    y(d ? i * u / 100 : i && u ? 100 / i * u : 0))) : (i = a ? t.getBBox()[f ? "width" : "height"] : t[p],
                y(D ? u / i * 100 : u / 100 * i)))
    }

    function pr(t, e, n, r) {
        if (!n || "none" === n) {
            var i = ai(e, t, 1),
                o = i && ir(t, i, 1);
            o && o !== n ? (e = i,
                n = o) : "borderColor" === e && (n = ir(t, "borderTopColor"))
        }
        var s, a, u, l, c, f, h, p, d, D, g, _ = new Cn(this._pt, t.style, e, 0, 1, _n),
            m = 0,
            v = 0;
        if (_.b = n,
            _.e = r,
            n += "",
            "auto" == (r += "") && (t.style[e] = r,
                r = ir(t, e) || r,
                t.style[e] = n),
            ht(s = [n, r]),
            r = s[1],
            u = (n = s[0]).match(se) || [],
            (r.match(se) || []).length) {
            for (; a = se.exec(r);)
                h = a[0],
                d = r.substring(m, a.index),
                c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1),
                h !== (f = u[v++] || "") && (l = parseFloat(f) || 0,
                    g = f.substr((l + "").length),
                    "=" === h.charAt(1) && (h = C(l, h) + g),
                    p = parseFloat(h),
                    D = h.substr((p + "").length),
                    m = se.lastIndex - D.length,
                    D || (D = D || Wt.units[e] || g,
                        m === r.length && (r += D,
                            _.e += D)),
                    g !== D && (l = hr(t, e, f, D) || 0),
                    _._pt = {
                        _next: _._pt,
                        p: d || 1 === v ? d : ",",
                        s: l,
                        c: p - l,
                        m: c && c < 4 || "zIndex" === e ? Math.round : 0
                    });
            _.c = m < r.length ? r.substring(m, r.length) : ""
        } else
            _.r = "display" === e && "none" === r ? Wn : Un;
        return ue.test(r) && (_.e = 0),
            this._pt = _
    }

    function dr(t) {
        var e = t.split(" "),
            n = e[0],
            r = e[1] || "50%";
        return "top" !== n && "bottom" !== n && "left" !== r && "right" !== r || (t = n,
                n = r,
                r = t),
            e[0] = fi[n] || n,
            e[1] = fi[r] || r,
            e.join(" ")
    }

    function Dr(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, r, i, o = e.t,
                s = o.style,
                a = e.u,
                u = o._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                r = 1;
            else
                for (i = (a = a.split(",")).length; - 1 < --i;)
                    n = a[i],
                    Qr[n] && (r = 1,
                        n = "transformOrigin" === n ? oi : ii),
                    cr(o, n);
            r && (cr(o, ii),
                u && (u.svg && o.removeAttribute("transform"),
                    Di(o, 1),
                    u.uncache = 1,
                    tr(s)))
        }
    }

    function gr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function _r(t) {
        var e = ir(t, ii);
        return gr(e) ? pi : e.substr(7).match(oe).map(y)
    }

    function mr(t, e) {
        var n, r, i, o, s = t._gsap || _(t),
            a = t.style,
            u = _r(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? pi : u : (u !== pi || t.offsetParent || t === wr || s.svg || (i = a.display,
                a.display = "block",
                (n = t.parentNode) && t.offsetParent || (o = 1,
                    r = t.nextElementSibling,
                    wr.appendChild(t)),
                u = _r(t),
                i ? a.display = i : cr(t, "display"),
                o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : wr.removeChild(t))),
            e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function vr(t, e, n, r, i, o) {
        var s, a, u, l = t._gsap,
            c = i || mr(t, !0),
            f = l.xOrigin || 0,
            h = l.yOrigin || 0,
            p = l.xOffset || 0,
            d = l.yOffset || 0,
            D = c[0],
            g = c[1],
            _ = c[2],
            m = c[3],
            v = c[4],
            y = c[5],
            x = e.split(" "),
            C = parseFloat(x[0]) || 0,
            b = parseFloat(x[1]) || 0;
        n ? c !== pi && (a = D * m - g * _) && (u = C * (-g / a) + b * (D / a) - (D * y - g * v) / a,
                C = C * (m / a) + b * (-_ / a) + (_ * y - m * v) / a,
                b = u) : (C = (s = ur(t)).x + (~x[0].indexOf("%") ? C / 100 * s.width : C),
                b = s.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * s.height : b)),
            r || !1 !== r && l.smooth ? (v = C - f,
                y = b - h,
                l.xOffset = p + (v * D + y * _) - v,
                l.yOffset = d + (v * g + y * m) - y) : l.xOffset = l.yOffset = 0,
            l.xOrigin = C,
            l.yOrigin = b,
            l.smooth = !!r,
            l.origin = e,
            l.originIsAbsolute = !!n,
            t.style[oi] = "0px 0px",
            o && (fr(o, l, "xOrigin", f, C),
                fr(o, l, "yOrigin", h, b),
                fr(o, l, "xOffset", p, l.xOffset),
                fr(o, l, "yOffset", d, l.yOffset)),
            t.setAttribute("data-svg-origin", C + " " + b)
    }

    function yr(t, e, n) {
        var r = K(e);
        return y(parseFloat(e) + parseFloat(hr(t, "x", n + "px", r))) + r
    }

    function xr(t, e, n, i, o) {
        var s, a, u = 360,
            l = r(o),
            c = parseFloat(o) * (l && ~o.indexOf("rad") ? $r : 1) - i,
            f = i + c + "deg";
        return l && ("short" === (s = o.split("_")[1]) && (c %= u) != c % 180 && (c += c < 0 ? u : -u),
                "cw" === s && c < 0 ? c = (c + 36e9) % u - ~~(c / u) * u : "ccw" === s && 0 < c && (c = (c - 36e9) % u - ~~(c / u) * u)),
            t._pt = a = new Cn(t._pt, e, n, i, c, jn),
            a.e = f,
            a.u = "deg",
            t._props.push(n),
            a
    }

    function Cr(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }

    function br(t, e, n) {
        var r, i, o, s, a, u, l, c = Cr({}, n._gsap),
            f = n.style;
        for (i in c.svg ? (o = n.getAttribute("transform"),
                n.setAttribute("transform", ""),
                f[ii] = e,
                r = Di(n, 1),
                cr(n, ii),
                n.setAttribute("transform", o)) : (o = getComputedStyle(n)[ii],
                f[ii] = e,
                r = Di(n, 1),
                f[ii] = o),
            Qr)
            (o = c[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = K(o) !== (l = K(s)) ? hr(n, i, o, l) : parseFloat(o),
                u = parseFloat(s),
                t._pt = new Cn(t._pt, r, i, a, u - a, Xn),
                t._pt.u = l || 0,
                t._props.push(i));
        Cr(r, c)
    }
    un.version = $e.version = Yn.version = "3.12.2",
        wt = 1,
        l() && Ie();
    var Fr, Er, wr, Tr, Ar, Mr, kr, Sr, Or = Ye.Power0,
        Pr = Ye.Power1,
        Br = Ye.Power2,
        Rr = Ye.Power3,
        Nr = Ye.Power4,
        zr = Ye.Linear,
        Lr = Ye.Quad,
        Ir = Ye.Cubic,
        Yr = Ye.Quart,
        Xr = Ye.Quint,
        jr = Ye.Strong,
        Vr = Ye.Elastic,
        Hr = Ye.Back,
        Ur = Ye.SteppedEase,
        Wr = Ye.Bounce,
        qr = Ye.Sine,
        Gr = Ye.Expo,
        Kr = Ye.Circ,
        Qr = {},
        $r = 180 / Math.PI,
        Zr = Math.PI / 180,
        Jr = Math.atan2,
        ti = /([A-Z])/g,
        ei = /(left|right|width|margin|padding|x)/i,
        ni = /[\s,\(]\S/,
        ri = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        ii = "transform",
        oi = ii + "Origin",
        si = "O,Moz,ms,Ms,Webkit".split(","),
        ai = function (t, e, n) {
            var r = (e || Ar).style,
                i = 5;
            if (t in r && !n)
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(si[i] + t in r);)
            ;
            return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? si[i] : "") + t
        },
        ui = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        li = {
            grid: 1,
            flex: 1
        },
        ci = function (t, e, n, r) {
            var i;
            return Tr || or(),
                e in ri && "transform" !== e && ~(e = ri[e]).indexOf(",") && (e = e.split(",")[0]),
                Qr[e] && "transform" !== e ? (i = Di(t, r),
                    i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : gi(ir(t, oi)) + " " + i.zOrigin + "px") : (i = t.style[e]) && "auto" !== i && !r && !~(i + "").indexOf("calc(") || (i = hi[e] && hi[e](t, e, n) || ir(t, e) || m(t, e) || ("opacity" === e ? 1 : 0)),
                n && !~(i + "").trim().indexOf(" ") ? hr(t, e, i, n) + n : i
        },
        fi = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        hi = {
            clearProps: function (t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new Cn(t._pt, e, n, 0, 0, Dr);
                    return o.u = r,
                        o.pr = -10,
                        o.tween = i,
                        t._props.push(n),
                        1
                }
            }
        },
        pi = [1, 0, 0, 1, 0, 0],
        di = {},
        Di = function (t, e) {
            var n = t._gsap || new Ge(t);
            if ("x" in n && !e && !n.uncache)
                return n;
            var r, i, o, s, a, u, l, c, f, h, p, d, D, g, _, m, v, x, C, b, F, E, w, T, A, M, k, S, O, P, B, R, N = t.style,
                z = n.scaleX < 0,
                L = "deg",
                I = getComputedStyle(t),
                Y = ir(t, oi) || "0";
            return r = i = o = u = l = c = f = h = p = 0,
                s = a = 1,
                n.svg = !(!t.getCTM || !lr(t)),
                I.translate && ("none" === I.translate && "none" === I.scale && "none" === I.rotate || (N[ii] = ("none" !== I.translate ? "translate3d(" + (I.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== I.rotate ? "rotate(" + I.rotate + ") " : "") + ("none" !== I.scale ? "scale(" + I.scale.split(" ").join(",") + ") " : "") + ("none" !== I[ii] ? I[ii] : "")),
                    N.scale = N.rotate = N.translate = "none"),
                g = mr(t, n.svg),
                n.svg && (T = n.uncache ? (A = t.getBBox(),
                        Y = n.xOrigin - A.x + "px " + (n.yOrigin - A.y) + "px",
                        "") : !e && t.getAttribute("data-svg-origin"),
                    vr(t, T || Y, !!T || n.originIsAbsolute, !1 !== n.smooth, g)),
                d = n.xOrigin || 0,
                D = n.yOrigin || 0,
                g !== pi && (x = g[0],
                    C = g[1],
                    b = g[2],
                    F = g[3],
                    r = E = g[4],
                    i = w = g[5],
                    6 === g.length ? (s = Math.sqrt(x * x + C * C),
                        a = Math.sqrt(F * F + b * b),
                        u = x || C ? Jr(C, x) * $r : 0,
                        (f = b || F ? Jr(b, F) * $r + u : 0) && (a *= Math.abs(Math.cos(f * Zr))),
                        n.svg && (r -= d - (d * x + D * b),
                            i -= D - (d * C + D * F))) : (R = g[6],
                        P = g[7],
                        k = g[8],
                        S = g[9],
                        O = g[10],
                        B = g[11],
                        r = g[12],
                        i = g[13],
                        o = g[14],
                        l = (_ = Jr(R, O)) * $r,
                        _ && (T = E * (m = Math.cos(-_)) + k * (v = Math.sin(-_)),
                            A = w * m + S * v,
                            M = R * m + O * v,
                            k = E * -v + k * m,
                            S = w * -v + S * m,
                            O = R * -v + O * m,
                            B = P * -v + B * m,
                            E = T,
                            w = A,
                            R = M),
                        c = (_ = Jr(-b, O)) * $r,
                        _ && (m = Math.cos(-_),
                            B = F * (v = Math.sin(-_)) + B * m,
                            x = T = x * m - k * v,
                            C = A = C * m - S * v,
                            b = M = b * m - O * v),
                        u = (_ = Jr(C, x)) * $r,
                        _ && (T = x * (m = Math.cos(_)) + C * (v = Math.sin(_)),
                            A = E * m + w * v,
                            C = C * m - x * v,
                            w = w * m - E * v,
                            x = T,
                            E = A),
                        l && 359.9 < Math.abs(l) + Math.abs(u) && (l = u = 0,
                            c = 180 - c),
                        s = y(Math.sqrt(x * x + C * C + b * b)),
                        a = y(Math.sqrt(w * w + R * R)),
                        _ = Jr(E, w),
                        f = 2e-4 < Math.abs(_) ? _ * $r : 0,
                        p = B ? 1 / (B < 0 ? -B : B) : 0),
                    n.svg && (T = t.getAttribute("transform"),
                        n.forceCSS = t.setAttribute("transform", "") || !gr(ir(t, ii)),
                        T && t.setAttribute("transform", T))),
                90 < Math.abs(f) && Math.abs(f) < 270 && (z ? (s *= -1,
                    f += u <= 0 ? 180 : -180,
                    u += u <= 0 ? 180 : -180) : (a *= -1,
                    f += f <= 0 ? 180 : -180)),
                e = e || n.uncache,
                n.x = r - ((n.xPercent = r && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px",
                n.y = i - ((n.yPercent = i && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px",
                n.z = o + "px",
                n.scaleX = y(s),
                n.scaleY = y(a),
                n.rotation = y(u) + L,
                n.rotationX = y(l) + L,
                n.rotationY = y(c) + L,
                n.skewX = f + L,
                n.skewY = h + L,
                n.transformPerspective = p + "px",
                (n.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (N[oi] = gi(Y)),
                n.xOffset = n.yOffset = 0,
                n.force3D = Wt.force3D,
                n.renderTransform = n.svg ? Ci : Sr ? xi : _i,
                n.uncache = 0,
                n
        },
        gi = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        _i = function (t, e) {
            e.z = "0px",
                e.rotationY = e.rotationX = "0deg",
                e.force3D = 0,
                xi(t, e)
        },
        mi = "0deg",
        vi = "0px",
        yi = ") ",
        xi = function (t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                o = n.x,
                s = n.y,
                a = n.z,
                u = n.rotation,
                l = n.rotationY,
                c = n.rotationX,
                f = n.skewX,
                h = n.skewY,
                p = n.scaleX,
                d = n.scaleY,
                D = n.transformPerspective,
                g = n.force3D,
                _ = n.target,
                m = n.zOrigin,
                v = "",
                y = "auto" === g && t && 1 !== t || !0 === g;
            if (m && (c !== mi || l !== mi)) {
                var x, C = parseFloat(l) * Zr,
                    b = Math.sin(C),
                    F = Math.cos(C);
                C = parseFloat(c) * Zr,
                    o = yr(_, o, b * (x = Math.cos(C)) * -m),
                    s = yr(_, s, -Math.sin(C) * -m),
                    a = yr(_, a, F * x * -m + m)
            }
            D !== vi && (v += "perspective(" + D + yi),
                (r || i) && (v += "translate(" + r + "%, " + i + "%) "),
                !y && o === vi && s === vi && a === vi || (v += a !== vi || y ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + yi),
                u !== mi && (v += "rotate(" + u + yi),
                l !== mi && (v += "rotateY(" + l + yi),
                c !== mi && (v += "rotateX(" + c + yi),
                f === mi && h === mi || (v += "skew(" + f + ", " + h + yi),
                1 === p && 1 === d || (v += "scale(" + p + ", " + d + yi),
                _.style[ii] = v || "translate(0, 0)"
        },
        Ci = function (t, e) {
            var n, r, i, o, s, a = e || this,
                u = a.xPercent,
                l = a.yPercent,
                c = a.x,
                f = a.y,
                h = a.rotation,
                p = a.skewX,
                d = a.skewY,
                D = a.scaleX,
                g = a.scaleY,
                _ = a.target,
                m = a.xOrigin,
                v = a.yOrigin,
                x = a.xOffset,
                C = a.yOffset,
                b = a.forceCSS,
                F = parseFloat(c),
                E = parseFloat(f);
            h = parseFloat(h),
                p = parseFloat(p),
                (d = parseFloat(d)) && (p += d = parseFloat(d),
                    h += d),
                h || p ? (h *= Zr,
                    p *= Zr,
                    n = Math.cos(h) * D,
                    r = Math.sin(h) * D,
                    i = Math.sin(h - p) * -g,
                    o = Math.cos(h - p) * g,
                    p && (d *= Zr,
                        s = Math.tan(p - d),
                        i *= s = Math.sqrt(1 + s * s),
                        o *= s,
                        d && (s = Math.tan(d),
                            n *= s = Math.sqrt(1 + s * s),
                            r *= s)),
                    n = y(n),
                    r = y(r),
                    i = y(i),
                    o = y(o)) : (n = D,
                    o = g,
                    r = i = 0),
                (F && !~(c + "").indexOf("px") || E && !~(f + "").indexOf("px")) && (F = hr(_, "x", c, "px"),
                    E = hr(_, "y", f, "px")),
                (m || v || x || C) && (F = y(F + m - (m * n + v * i) + x),
                    E = y(E + v - (m * r + v * o) + C)),
                (u || l) && (F = y(F + u / 100 * (s = _.getBBox()).width),
                    E = y(E + l / 100 * s.height)),
                s = "matrix(" + n + "," + r + "," + i + "," + o + "," + F + "," + E + ")",
                _.setAttribute("transform", s),
                b && (_.style[ii] = s)
        };
    v("padding,margin,Width,Radius", (function (t, e) {
        var n = "Right",
            r = "Bottom",
            i = "Left",
            o = (e < 3 ? ["Top", n, r, i] : ["Top" + i, "Top" + n, r + n, r + i]).map((function (n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        hi[1 < e ? "border" + t : t] = function (t, e, n, r, i) {
            var s, a;
            if (arguments.length < 4)
                return s = o.map((function (e) {
                        return ci(t, e, n)
                    })),
                    5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (r + "").split(" "),
                a = {},
                o.forEach((function (t, e) {
                    return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                })),
                t.init(e, a, i)
        }
    }));
    var bi, Fi, Ei = {
        name: "css",
        register: or,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, n, i, o) {
            var s, a, u, l, c, f, p, d, D, g, _, m, v, y, x, b, F = this._props,
                E = t.style,
                w = n.vars.startAt;
            for (p in Tr || or(),
                this.styles = this.styles || nr(t),
                b = this.styles.props,
                this.tween = n,
                e)
                if ("autoRound" !== p && (a = e[p],
                        !me[p] || !Ze(p, e, n, i, t, o)))
                    if (c = typeof a,
                        f = hi[p],
                        "function" === c && (c = typeof (a = a.call(n, i, t, o))),
                        "string" === c && ~a.indexOf("random(") && (a = it(a)),
                        f)
                        f(this, t, p, a, n) && (x = 1);
                    else if ("--" === p.substr(0, 2))
                s = (getComputedStyle(t).getPropertyValue(p) + "").trim(),
                a += "",
                Ne.lastIndex = 0,
                Ne.test(s) || (d = K(s),
                    D = K(a)),
                D ? d !== D && (s = hr(t, p, s, D) + D) : d && (a += d),
                this.add(E, "setProperty", s, a, i, o, 0, 0, p),
                F.push(p),
                b.push(p, 0, E[p]);
            else if ("undefined" !== c) {
                if (w && p in w ? (r(s = "function" == typeof w[p] ? w[p].call(n, i, t, o) : w[p]) && ~s.indexOf("random(") && (s = it(s)),
                        K(s + "") || (s += Wt.units[p] || K(ci(t, p)) || ""),
                        "=" === (s + "").charAt(1) && (s = ci(t, p))) : s = ci(t, p),
                    l = parseFloat(s),
                    (g = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                    u = parseFloat(a),
                    p in ri && ("autoAlpha" === p && (1 === l && "hidden" === ci(t, "visibility") && u && (l = 0),
                            b.push("visibility", 0, E.visibility),
                            fr(this, E, "visibility", l ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                        "scale" !== p && "transform" !== p && ~(p = ri[p]).indexOf(",") && (p = p.split(",")[0])),
                    _ = p in Qr)
                    if (this.styles.save(p),
                        m || ((v = t._gsap).renderTransform && !e.parseTransform || Di(t, e.parseTransform),
                            y = !1 !== e.smoothOrigin && v.smooth,
                            (m = this._pt = new Cn(this._pt, E, ii, 0, 1, v.renderTransform, v, 0, -1)).dep = 1),
                        "scale" === p)
                        this._pt = new Cn(this._pt, v, "scaleY", v.scaleY, (g ? C(v.scaleY, g + u) : u) - v.scaleY || 0, Xn),
                        this._pt.u = 0,
                        F.push("scaleY", p),
                        p += "X";
                    else {
                        if ("transformOrigin" === p) {
                            b.push(oi, 0, E[oi]),
                                a = dr(a),
                                v.svg ? vr(t, a, 0, y, 0, this) : ((D = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && fr(this, v, "zOrigin", v.zOrigin, D),
                                    fr(this, E, p, gi(s), gi(a)));
                            continue
                        }
                        if ("svgOrigin" === p) {
                            vr(t, a, 1, y, 0, this);
                            continue
                        }
                        if (p in di) {
                            xr(this, v, p, l, g ? C(l, g + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === p) {
                            fr(this, v, "smooth", v.smooth, a);
                            continue
                        }
                        if ("force3D" === p) {
                            v[p] = a;
                            continue
                        }
                        if ("transform" === p) {
                            br(this, a, t);
                            continue
                        }
                    }
                else
                    p in E || (p = ai(p) || p);
                if (_ || (u || 0 === u) && (l || 0 === l) && !ni.test(a) && p in E)
                    u = u || 0,
                    (d = (s + "").substr((l + "").length)) !== (D = K(a) || (p in Wt.units ? Wt.units[p] : d)) && (l = hr(t, p, s, D)),
                    this._pt = new Cn(this._pt, _ ? v : E, p, l, (g ? C(l, g + u) : u) - l, _ || "px" !== D && "zIndex" !== p || !1 === e.autoRound ? Xn : Hn),
                    this._pt.u = D || 0,
                    d !== D && "%" !== D && (this._pt.b = s,
                        this._pt.r = Vn);
                else if (p in E)
                    pr.call(this, t, p, s, g ? g + a : a);
                else if (p in t)
                    this.add(t, p, s || t[p], g ? g + a : a, i, o);
                else if ("parseTransform" !== p) {
                    h(p, a);
                    continue
                }
                _ || (p in E ? b.push(p, 0, E[p]) : b.push(p, 1, s || t[p])),
                    F.push(p)
            }
            x && xn(this)
        },
        render: function (t, e) {
            if (e.tween._time || !kr())
                for (var n = e._pt; n;)
                    n.r(t, n.d),
                    n = n._next;
            else
                e.styles.revert()
        },
        get: ci,
        aliases: ri,
        getSetter: function (t, e, n) {
            var r = ri[e];
            return r && r.indexOf(",") < 0 && (e = r),
                e in Qr && e !== oi && (t._gsap.x || ci(t, "x")) ? n && Mr === n ? "scale" === e ? Qn : Kn : (Mr = n || {}) && ("scale" === e ? $n : Zn) : t.style && !s(t.style[e]) ? qn : ~e.indexOf("-") ? Gn : dn(t, e)
        },
        core: {
            _removeProperty: cr,
            _getMatrix: mr
        }
    };
    Yn.utils.checkPrefix = ai,
        Yn.core.getStyleSaver = nr,
        Fi = v("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (bi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
            Qr[t] = 1
        })),
        v(bi, (function (t) {
            Wt.units[t] = "deg",
                di[t] = 1
        })),
        ri[Fi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + bi,
        v("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
            var e = t.split(":");
            ri[e[1]] = Fi[e[0]]
        })),
        v("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
            Wt.units[t] = "px"
        })),
        Yn.registerPlugin(Ei);
    var wi = Yn.registerPlugin(Ei) || Yn,
        Ti = wi.core.Tween;
    t.Back = Hr,
        t.Bounce = Wr,
        t.CSSPlugin = Ei,
        t.Circ = Kr,
        t.Cubic = Ir,
        t.Elastic = Vr,
        t.Expo = Gr,
        t.Linear = zr,
        t.Power0 = Or,
        t.Power1 = Pr,
        t.Power2 = Br,
        t.Power3 = Rr,
        t.Power4 = Nr,
        t.Quad = Lr,
        t.Quart = Yr,
        t.Quint = Xr,
        t.Sine = qr,
        t.SteppedEase = Ur,
        t.Strong = jr,
        t.TimelineLite = $e,
        t.TimelineMax = $e,
        t.TweenLite = un,
        t.TweenMax = Ti,
        t.default = wi,
        t.gsap = wi,
        "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete t.default
})),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LazyLoad = e()
}(this, (function () {
    "use strict";

    function t() {
        return t = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            t.apply(this, arguments)
    }
    var e = "undefined" != typeof window,
        n = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        r = e && "IntersectionObserver" in window,
        i = e && "classList" in document.createElement("p"),
        o = e && window.devicePixelRatio > 1,
        s = {
            elements_selector: ".lazy",
            container: n || e ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_bg_set: "bg-set",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1,
            restore_on_error: !1
        },
        a = function (e) {
            return t({}, s, e)
        },
        u = function (t, e) {
            var n, r = "LazyLoad::Initialized",
                i = new t(e);
            try {
                n = new CustomEvent(r, {
                    detail: {
                        instance: i
                    }
                })
            } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, {
                    instance: i
                })
            }
            window.dispatchEvent(n)
        },
        l = "src",
        c = "srcset",
        f = "sizes",
        h = "poster",
        p = "llOriginalAttrs",
        d = "data",
        D = "loading",
        g = "loaded",
        _ = "applied",
        m = "error",
        v = "native",
        y = function (t, e) {
            return t.getAttribute("data-" + e)
        },
        x = function (t) {
            return y(t, "ll-status")
        },
        C = function (t, e) {
            return function (t, e, n) {
                var r = "data-ll-status";
                null !== n ? t.setAttribute(r, n) : t.removeAttribute(r)
            }(t, 0, e)
        },
        b = function (t) {
            return C(t, null)
        },
        F = function (t) {
            return null === x(t)
        },
        E = function (t) {
            return x(t) === v
        },
        w = [D, g, _, m],
        T = function (t, e, n, r) {
            t && (void 0 === r ? void 0 === n ? t(e) : t(e, n) : t(e, n, r))
        },
        A = function (t, e) {
            i ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
        },
        M = function (t, e) {
            i ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        },
        k = function (t) {
            return t.llTempImage
        },
        S = function (t, e) {
            if (e) {
                var n = e._observer;
                n && n.unobserve(t)
            }
        },
        O = function (t, e) {
            t && (t.loadingCount += e)
        },
        P = function (t, e) {
            t && (t.toLoadCount = e)
        },
        B = function (t) {
            for (var e, n = [], r = 0; e = t.children[r]; r += 1)
                "SOURCE" === e.tagName && n.push(e);
            return n
        },
        R = function (t, e) {
            var n = t.parentNode;
            n && "PICTURE" === n.tagName && B(n).forEach(e)
        },
        N = function (t, e) {
            B(t).forEach(e)
        },
        z = [l],
        L = [l, h],
        I = [l, c, f],
        Y = [d],
        X = function (t) {
            return !!t[p]
        },
        j = function (t) {
            return t[p]
        },
        V = function (t) {
            return delete t[p]
        },
        H = function (t, e) {
            if (!X(t)) {
                var n = {};
                e.forEach((function (e) {
                        n[e] = t.getAttribute(e)
                    })),
                    t[p] = n
            }
        },
        U = function (t, e) {
            if (X(t)) {
                var n = j(t);
                e.forEach((function (e) {
                    ! function (t, e, n) {
                        n ? t.setAttribute(e, n) : t.removeAttribute(e)
                    }(t, e, n[e])
                }))
            }
        },
        W = function (t, e, n) {
            A(t, e.class_applied),
                C(t, _),
                n && (e.unobserve_completed && S(t, e),
                    T(e.callback_applied, t, n))
        },
        q = function (t, e, n) {
            A(t, e.class_loading),
                C(t, D),
                n && (O(n, 1),
                    T(e.callback_loading, t, n))
        },
        G = function (t, e, n) {
            n && t.setAttribute(e, n)
        },
        K = function (t, e) {
            G(t, f, y(t, e.data_sizes)),
                G(t, c, y(t, e.data_srcset)),
                G(t, l, y(t, e.data_src))
        },
        Q = {
            IMG: function (t, e) {
                R(t, (function (t) {
                        H(t, I),
                            K(t, e)
                    })),
                    H(t, I),
                    K(t, e)
            },
            IFRAME: function (t, e) {
                H(t, z),
                    G(t, l, y(t, e.data_src))
            },
            VIDEO: function (t, e) {
                N(t, (function (t) {
                        H(t, z),
                            G(t, l, y(t, e.data_src))
                    })),
                    H(t, L),
                    G(t, h, y(t, e.data_poster)),
                    G(t, l, y(t, e.data_src)),
                    t.load()
            },
            OBJECT: function (t, e) {
                H(t, Y),
                    G(t, d, y(t, e.data_src))
            }
        },
        $ = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
        Z = function (t, e) {
            !e || function (t) {
                return t.loadingCount > 0
            }(e) || function (t) {
                return t.toLoadCount > 0
            }(e) || T(t.callback_finish, e)
        },
        J = function (t, e, n) {
            t.addEventListener(e, n),
                t.llEvLisnrs[e] = n
        },
        tt = function (t, e, n) {
            t.removeEventListener(e, n)
        },
        et = function (t) {
            return !!t.llEvLisnrs
        },
        nt = function (t) {
            if (et(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                    var r = e[n];
                    tt(t, n, r)
                }
                delete t.llEvLisnrs
            }
        },
        rt = function (t, e, n) {
            ! function (t) {
                delete t.llTempImage
            }(t),
            O(n, -1),
                function (t) {
                    t && (t.toLoadCount -= 1)
                }(n),
                M(t, e.class_loading),
                e.unobserve_completed && S(t, n)
        },
        it = function (t, e, n) {
            var r = k(t) || t;
            et(r) || function (t, e, n) {
                et(t) || (t.llEvLisnrs = {});
                var r = "VIDEO" === t.tagName ? "loadeddata" : "load";
                J(t, r, e),
                    J(t, "error", n)
            }(r, (function (i) {
                ! function (t, e, n, r) {
                    var i = E(e);
                    rt(e, n, r),
                        A(e, n.class_loaded),
                        C(e, g),
                        T(n.callback_loaded, e, r),
                        i || Z(n, r)
                }(0, t, e, n),
                nt(r)
            }), (function (i) {
                ! function (t, e, n, r) {
                    var i = E(e);
                    rt(e, n, r),
                        A(e, n.class_error),
                        C(e, m),
                        T(n.callback_error, e, r),
                        n.restore_on_error && U(e, I),
                        i || Z(n, r)
                }(0, t, e, n),
                nt(r)
            }))
        },
        ot = function (t, e, n) {
            ! function (t) {
                return $.indexOf(t.tagName) > -1
            }(t) ? function (t, e, n) {
                ! function (t) {
                    t.llTempImage = document.createElement("IMG")
                }(t),
                it(t, e, n),
                    function (t) {
                        X(t) || (t[p] = {
                            backgroundImage: t.style.backgroundImage
                        })
                    }(t),
                    function (t, e, n) {
                        var r = y(t, e.data_bg),
                            i = y(t, e.data_bg_hidpi),
                            s = o && i ? i : r;
                        s && (t.style.backgroundImage = 'url("'.concat(s, '")'),
                            k(t).setAttribute(l, s),
                            q(t, e, n))
                    }(t, e, n),
                    function (t, e, n) {
                        var r = y(t, e.data_bg_multi),
                            i = y(t, e.data_bg_multi_hidpi),
                            s = o && i ? i : r;
                        s && (t.style.backgroundImage = s,
                            W(t, e, n))
                    }(t, e, n),
                    function (t, e, n) {
                        var r = y(t, e.data_bg_set);
                        if (r) {
                            var i = r.split("|"),
                                o = i.map((function (t) {
                                    return "image-set(".concat(t, ")")
                                }));
                            t.style.backgroundImage = o.join(),
                                "" === t.style.backgroundImage && (o = i.map((function (t) {
                                        return "-webkit-image-set(".concat(t, ")")
                                    })),
                                    t.style.backgroundImage = o.join()),
                                W(t, e, n)
                        }
                    }(t, e, n)
            }(t, e, n) : function (t, e, n) {
                it(t, e, n),
                    function (t, e, n) {
                        var r = Q[t.tagName];
                        r && (r(t, e),
                            q(t, e, n))
                    }(t, e, n)
            }(t, e, n)
        },
        st = function (t) {
            t.removeAttribute(l),
                t.removeAttribute(c),
                t.removeAttribute(f)
        },
        at = function (t) {
            R(t, (function (t) {
                    U(t, I)
                })),
                U(t, I)
        },
        ut = {
            IMG: at,
            IFRAME: function (t) {
                U(t, z)
            },
            VIDEO: function (t) {
                N(t, (function (t) {
                        U(t, z)
                    })),
                    U(t, L),
                    t.load()
            },
            OBJECT: function (t) {
                U(t, Y)
            }
        },
        lt = ["IMG", "IFRAME", "VIDEO"],
        ct = function (t) {
            return t.use_native && "loading" in HTMLImageElement.prototype
        },
        ft = function (t) {
            return Array.prototype.slice.call(t)
        },
        ht = function (t) {
            return t.container.querySelectorAll(t.elements_selector)
        },
        pt = function (t) {
            return function (t) {
                return x(t) === m
            }(t)
        },
        dt = function (t, e) {
            return function (t) {
                return ft(t).filter(F)
            }(t || ht(e))
        },
        Dt = function (t, n) {
            var i = a(t);
            this._settings = i,
                this.loadingCount = 0,
                function (t, e) {
                    r && !ct(t) && (e._observer = new IntersectionObserver((function (n) {
                        ! function (t, e, n) {
                            t.forEach((function (t) {
                                return function (t) {
                                    return t.isIntersecting || t.intersectionRatio > 0
                                }(t) ? function (t, e, n, r) {
                                    var i = function (t) {
                                        return w.indexOf(x(t)) >= 0
                                    }(t);
                                    C(t, "entered"),
                                        A(t, n.class_entered),
                                        M(t, n.class_exited),
                                        function (t, e, n) {
                                            e.unobserve_entered && S(t, n)
                                        }(t, n, r),
                                        T(n.callback_enter, t, e, r),
                                        i || ot(t, n, r)
                                }(t.target, t, e, n) : function (t, e, n, r) {
                                    F(t) || (A(t, n.class_exited),
                                        function (t, e, n, r) {
                                            n.cancel_on_exit && function (t) {
                                                return x(t) === D
                                            }(t) && "IMG" === t.tagName && (nt(t),
                                                function (t) {
                                                    R(t, (function (t) {
                                                            st(t)
                                                        })),
                                                        st(t)
                                                }(t),
                                                at(t),
                                                M(t, n.class_loading),
                                                O(r, -1),
                                                b(t),
                                                T(n.callback_cancel, t, e, r))
                                        }(t, e, n, r),
                                        T(n.callback_exit, t, e, r))
                                }(t.target, t, e, n)
                            }))
                        }(n, t, e)
                    }), function (t) {
                        return {
                            root: t.container === document ? null : t.container,
                            rootMargin: t.thresholds || t.threshold + "px"
                        }
                    }(t)))
                }(i, this),
                function (t, n) {
                    e && (n._onlineHandler = function () {
                            ! function (t, e) {
                                var n;
                                (n = ht(t),
                                    ft(n).filter(pt)).forEach((function (e) {
                                        M(e, t.class_error),
                                            b(e)
                                    })),
                                    e.update()
                            }(t, n)
                        },
                        window.addEventListener("online", n._onlineHandler))
                }(i, this),
                this.update(n)
        };
    return Dt.prototype = {
            update: function (t) {
                var e, i, o = this._settings,
                    s = dt(t, o);
                P(this, s.length),
                    !n && r ? ct(o) ? function (t, e, n) {
                        t.forEach((function (t) {
                                -1 !== lt.indexOf(t.tagName) && function (t, e, n) {
                                    t.setAttribute("loading", "lazy"),
                                        it(t, e, n),
                                        function (t, e) {
                                            var n = Q[t.tagName];
                                            n && n(t, e)
                                        }(t, e),
                                        C(t, v)
                                }(t, e, n)
                            })),
                            P(n, 0)
                    }(s, o, this) : (i = s,
                        function (t) {
                            t.disconnect()
                        }(e = this._observer),
                        function (t, e) {
                            e.forEach((function (e) {
                                t.observe(e)
                            }))
                        }(e, i)) : this.loadAll(s)
            },
            destroy: function () {
                this._observer && this._observer.disconnect(),
                    e && window.removeEventListener("online", this._onlineHandler),
                    ht(this._settings).forEach((function (t) {
                        V(t)
                    })),
                    delete this._observer,
                    delete this._settings,
                    delete this._onlineHandler,
                    delete this.loadingCount,
                    delete this.toLoadCount
            },
            loadAll: function (t) {
                var e = this,
                    n = this._settings;
                dt(t, n).forEach((function (t) {
                    S(t, e),
                        ot(t, n, e)
                }))
            },
            restoreAll: function () {
                var t = this._settings;
                ht(t).forEach((function (e) {
                    ! function (t, e) {
                        (function (t) {
                            var e = ut[t.tagName];
                            e ? e(t) : function (t) {
                                if (X(t)) {
                                    var e = j(t);
                                    t.style.backgroundImage = e.backgroundImage
                                }
                            }(t)
                        })(t),
                        function (t, e) {
                            F(t) || E(t) || (M(t, e.class_entered),
                                M(t, e.class_exited),
                                M(t, e.class_applied),
                                M(t, e.class_loading),
                                M(t, e.class_loaded),
                                M(t, e.class_error))
                        }(t, e),
                        b(t),
                            V(t)
                    }(e, t)
                }))
            }
        },
        Dt.load = function (t, e) {
            var n = a(e);
            ot(t, n)
        },
        Dt.resetStatus = function (t) {
            b(t)
        },
        e && function (t, e) {
            if (e)
                if (e.length)
                    for (var n, r = 0; n = e[r]; r += 1)
                        u(t, n);
                else
                    u(t, e)
        }(Dt, window.lazyLoadOptions),
        Dt
}));