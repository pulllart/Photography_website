class Animations {
    constructor({duration: e}={
        duration: 1.2
    }) {
        this.defaults = {
            duration: e
        },
        this.splitTextPresets = {
            sliderLines: {
                init: !0,
                type: "lines",
                wrap: "lines",
                set: !1
            },
            sliderChars: {
                type: "lines,chars",
                wrap: "chars",
                set: !1
            },
            counterChars: {
                init: !0,
                type: "chars",
                set: !1,
                wrap: !1
            },
            animatedLines: {
                init: !0,
                type: "lines",
                set: {
                    type: "lines",
                    direction: "y",
                    distance: "103%",
                    opacity: !1
                },
                wrap: "lines",
                wrapClass: "overflow-hidden"
            },
            overlayMenuItem: {
                init: !0,
                type: "lines",
                set: {
                    type: "lines",
                    direction: "y",
                    distance: "-103%",
                    opacity: !1
                },
                wrap: "lines",
                wrapClass: "overflow-hidden"
            },
            animatedChars: {
                init: !0,
                type: "lines,words,chars",
                set: {
                    type: "chars",
                    direction: "y",
                    distance: "103%",
                    opacity: !1
                },
                wrap: "lines",
                wrapClass: "overflow-hidden"
            },
            animatedCharsRandom: {
                init: !0,
                type: "lines,words,chars",
                set: {
                    type: "chars",
                    direction: "y",
                    distance: "103%",
                    opacity: 1
                },
                wrap: "lines",
                wrapClass: "overflow-hidden"
            },
            animatedCounterChars: {
                init: !0,
                type: "chars",
                set: {
                    type: "chars",
                    direction: "y",
                    distance: "40%",
                    opacity: 0
                },
                wrap: !1
            }
        },
        this._animateTranslate(),
        this._animateScale(),
        this._animateMask(),
        this._hideMask(),
        this._animateCurtain(),
        this._hideCurtain()
    }
    _animateTranslate() {
        gsap.registerEffect({
            name: "animateTranslate",
            effect: (e,t)=>{
                const n = gsap.timeline();
                if (e && e[0]) {
                    let a = {}
                      , i = {
                        xPercent: 0,
                        yPercent: 0,
                        duration: t.duration,
                        ease: t.ease,
                        stagger: t.stagger
                    };
                    switch (t.animateFrom) {
                    case "top":
                        a.yPercent = -100;
                        break;
                    case "right":
                        a.xPercent = 100;
                        break;
                    case "left":
                        a.xPercent = -100;
                        break;
                    case "bottom":
                        a.yPercent = 100
                    }
                    "number" == typeof t.xPercent && (a.xPercent = t.xPercent),
                    "number" == typeof t.yPercent && (a.yPercent = t.yPercent),
                    t.animateOpacity && (a.opacity = 0,
                    i.opacity = 1),
                    gsap.set(e, a),
                    n.to(e, i),
                    t.clearProps && t.clearProps.length && n.set(e, {
                        clearProps: t.clearProps
                    })
                }
                return n
            }
            ,
            defaults: {
                animateFrom: "bottom",
                animateOpacity: !1,
                animateSkew: !1,
                xPercent: !1,
                yPercent: !1,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0,
                transformOrigin: "center center",
                clearProps: "transform,transformOrigin,opacity"
            },
            extendTimeline: !0
        })
    }
    _animateScale() {
        gsap.registerEffect({
            name: "animateScale",
            effect: (e,t)=>{
                const n = gsap.timeline();
                if (e && e[0]) {
                    let a = {
                        duration: t.duration,
                        ease: t.ease,
                        stagger: t.stagger
                    };
                    switch (t.animateFrom) {
                    case "top":
                        a.transformOrigin = "center top",
                        a.scaleY = 1;
                        break;
                    case "right":
                        a.transformOrigin = "right center",
                        a.scaleX = 1;
                        break;
                    case "left":
                        a.transformOrigin = "left center",
                        a.scaleX = 1;
                        break;
                    case "bottom":
                        a.transformOrigin = "center bottom",
                        a.scaleY = 1;
                        break;
                    case "center":
                        a.transformOrigin = "center center",
                        a.scale = 1
                    }
                    "number" == typeof t.scaleX && (a.scaleX = 1),
                    "number" == typeof t.scaleY && (a.scaleY = 1),
                    "number" == typeof t.scale && (a.scale = 1),
                    n.to(e, a),
                    t.clearProps && t.clearProps.length && n.set(e, {
                        clearProps: t.clearProps
                    })
                }
                return n
            }
            ,
            defaults: {
                scaleX: !1,
                scaleY: !1,
                scale: !1,
                animateFrom: "center",
                duration: .6,
                ease: "power4.out",
                clearProps: "transform"
            },
            extendTimeline: !0
        })
    }
    _animateMask() {
        gsap.registerEffect({
            name: "animateMask",
            effect: (e,t)=>{
                const n = gsap.timeline({
                    onStart: t.onStart,
                    onComplete: t.onComplete
                });
                if (e && e[0]) {
                    let a, i;
                    if ("circle" === t.shape)
                        a = "circle(0% at 50% 50%)";
                    else if ("ellipse" === t.shape)
                        a = "ellipse(50% 0% at 50% 50%)";
                    else
                        switch (t.animateFrom) {
                        case "top":
                            a = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
                            break;
                        case "right":
                            a = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
                            break;
                        case "left":
                            a = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                            break;
                        case "center":
                            a = "inset(50%)";
                            break;
                        default:
                            a = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                        }
                    t.clipPathFrom && gsap.set(e, {
                        clipPath: a,
                        overwrite: t.overwrite
                    }),
                    "string" == typeof t.scaleInner && (i = e[0].querySelector(t.scaleInner)),
                    i && t.scale && gsap.set(i, {
                        transformOrigin: "center center",
                        scale: t.scale
                    });
                    let s = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                    "center" === t.animateFrom && (s = "inset(0%)"),
                    "circle" === t.shape ? s = "circle(100% at 50% 50%)" : "ellipse" === t.shape && (s = "ellipse(100% 100% at 50% 50%)"),
                    n.to(e, {
                        x: t.x,
                        y: t.y,
                        clipPath: s,
                        duration: t.duration,
                        ease: t.ease,
                        stagger: t.stagger
                    }),
                    i && t.scale && n.to(i, {
                        scale: 1,
                        duration: 1.25 * t.duration,
                        ease: t.ease
                    }, "<"),
                    t.clearProps && t.clearProps.length && (n.set(e, {
                        clearProps: t.clearProps
                    }),
                    i && t.scale && n.set(i, {
                        clearProps: "transform"
                    }))
                }
                return n
            }
            ,
            defaults: {
                x: void 0,
                y: void 0,
                shape: "rectangle",
                duration: this.defaults.duration,
                scale: 1.05,
                scaleInner: "img,video",
                ease: "expo.inOut",
                stagger: 0,
                animateFrom: "bottom",
                clearProps: "clipPath",
                clipPathFrom: !0,
                overwrite: !0
            },
            extendTimeline: !0
        })
    }
    _hideMask() {
        gsap.registerEffect({
            name: "hideMask",
            effect: (e,t)=>{
                const n = gsap.timeline({
                    onStart: t.onStart,
                    onComplete: t.onComplete
                });
                if (e && e[0]) {
                    switch (t.animateTo) {
                    case "top":
                        t.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
                        break;
                    case "right":
                        t.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
                        break;
                    case "left":
                        t.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                        break;
                    case "center":
                        t.clipPath = "inset(50%)";
                        break;
                    default:
                        t.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                    }
                    let a;
                    t.clipPathFrom && gsap.set(e, {
                        clipPath: t.clipPathFrom,
                        overwrite: t.overwrite
                    }),
                    "string" == typeof t.scaleInner && (a = e[0].querySelector(t.scaleInner)),
                    "number" == typeof t.duration && t.duration > 0 ? (n.to(e, {
                        x: t.x,
                        y: t.y,
                        clipPath: t.clipPath,
                        duration: t.duration,
                        ease: t.ease,
                        stagger: t.stagger
                    }),
                    a && t.scale && n.to(a, {
                        scale: t.scale,
                        duration: t.duration,
                        ease: t.ease
                    }, "<")) : (n.set(e, {
                        x: t.x,
                        y: t.y,
                        clipPath: t.clipPath
                    }),
                    a && t.scale && n.set(a, {
                        scale: t.scale
                    }, "<")),
                    t.clearProps && t.clearProps.length && (n.set(e, {
                        clearProps: t.clearProps
                    }),
                    a && t.scale && n.set(a, {
                        clearProps: "transform"
                    }))
                }
                return n
            }
            ,
            defaults: {
                x: void 0,
                y: void 0,
                duration: this.defaults.duration,
                scale: 1.1,
                scaleInner: "img,video",
                ease: "expo.inOut",
                animateTo: "bottom",
                clearProps: "clipPath",
                clipPathFrom: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                overwrite: !0
            },
            extendTimeline: !0
        })
    }
    _animateCurtain() {
        gsap.registerEffect({
            name: "animateCurtain",
            effect: (e,t)=>{
                if (!app.options.animations.curvedMasks)
                    return Object.assign(t, {
                        overwrite: !1
                    }),
                    gsap.effects.animateMask(e, t);
                const n = gsap.timeline({
                    onStart: t.onStart,
                    onComplete: t.onComplete
                });
                let a = !1;
                if (a = "function" == typeof app.options.animations.curvedMasksForceRepaint ? app.options.animations.curvedMasksForceRepaint() : "auto" === app.options.animations.curvedMasksForceRepaint ? void 0 !== window.safari : !!app.options.animations.curvedMasksForceRepaint,
                e && e[0]) {
                    const i = "url('#curtain-clip')"
                      , s = document.querySelector("#curtain-clip").querySelector("#curtain-clip__path");
                    let r = "center bottom"
                      , o = "M0,0.5 C0.167,0.167,0.333,0,0.5,0 C0.667,0,0.833,0.167,1,0.5 L1,1 L0,1 L0,0.5"
                      , l = "M0,0 C0.167,0,0.333,0,0.5,0 C0.667,0,0.833,0,1,0 L1,1 L0,1 L0,0";
                    "top" === t.animateFrom && (r = "center top",
                    o = "M0,0 L1,0 L1,0.5 C0.833,0.833,0.667,1,0.5,1 C0.333,1,0.167,0.833,0,0.5 L0,0",
                    l = "M0,0 L1,0 L1,1 C0.833,1,0.667,1,0.5,1 C0.333,1,0.167,1,0,1 L0,0"),
                    n.set(e[0], {
                        clipPath: i,
                        inset: "0px"
                    }).set(s, {
                        clearProps: "all"
                    }).fromTo(s, {
                        morphSVG: o,
                        scaleY: 0,
                        transformOrigin: r,
                        immediateRender: !0
                    }, {
                        morphSVG: l,
                        scaleY: 1.01,
                        transformOrigin: r,
                        ease: t.ease,
                        duration: t.duration,
                        onUpdate: ()=>{
                            a && (e[0].style.clipPath = "none",
                            e[0].offsetWidth,
                            e[0].style.clipPath = "url('#curtain-clip')")
                        }
                    }).set(e[0], {
                        clearProps: t.clearProps
                    }).set(s, {
                        clearProps: "all"
                    })
                }
                return n
            }
            ,
            defaults: {
                duration: this.defaults.duration,
                ease: "expo.inOut",
                animateFrom: "bottom",
                clearProps: "clipPath,inset"
            },
            extendTimeline: !0
        })
    }
    _hideCurtain() {
        gsap.registerEffect({
            name: "hideCurtain",
            effect: (e,t)=>{
                if (!app.options.animations.curvedMasks)
                    return Object.assign(t, {
                        overwrite: !1
                    }),
                    gsap.effects.hideMask(e, t);
                const n = gsap.timeline({
                    onStart: t.onStart,
                    onComplete: t.onComplete
                });
                let a = !1;
                if (a = "function" == typeof app.options.animations.curvedMasksForceRepaint ? app.options.animations.curvedMasksForceRepaint() : "auto" === app.options.animations.curvedMasksForceRepaint ? void 0 !== window.safari : !!app.options.animations.curvedMasksForceRepaint,
                e && e[0]) {
                    const i = "url('#curtain-clip')"
                      , s = document.querySelector("#curtain-clip").querySelector("#curtain-clip__path");
                    let r = "center bottom"
                      , o = "M0,0.5 C0.167,0.167,0.333,0,0.5,0 C0.667,0,0.833,0.167,1,0.5 L1,1 L0,1 L0,0.5"
                      , l = "M0,0 C0.167,0,0.333,0,0.5,0 C0.667,0,0.833,0,1,0 L1,1 L0,1 L0,0";
                    "top" === t.animateTo && (r = "center top",
                    o = "M0,0 L1,0 L1,0.5 C0.833,0.833,0.667,1,0.5,1 C0.333,1,0.167,0.833,0,0.5 L0,0",
                    l = "M0,0 L1,0 L1,1 C0.833,1,0.667,1,0.5,1 C0.333,1,0.167,1,0,1 L0,0"),
                    n.set(e[0], {
                        clipPath: i,
                        inset: "0px"
                    }).set(s, {
                        clearProps: "all"
                    }).fromTo(s, {
                        morphSVG: l,
                        scaleY: 1,
                        transformOrigin: r,
                        immediateRender: !0
                    }, {
                        morphSVG: o,
                        scaleY: 0,
                        transformOrigin: r,
                        ease: t.ease,
                        duration: t.duration,
                        onUpdate: ()=>{
                            a && (e[0].style.clipPath = "none",
                            e[0].offsetWidth,
                            e[0].style.clipPath = i)
                        }
                    }).set(e[0], {
                        clearProps: t.clearProps
                    }).set(s, {
                        clearProps: "all"
                    })
                }
                return n
            }
            ,
            defaults: {
                duration: this.defaults.duration,
                ease: "expo.inOut",
                animateTo: "top",
                clearProps: "clipPath,inset",
                onComplete: void 0
            },
            extendTimeline: !0
        })
    }
}
class AssetsManager {
    constructor() {
        this.promises = []
    }
    load({type: e, src: t=null, id: n=null, inline: a=null, preload: i=!1, refElement: s, version: r=null, timeout: o=3e4, cache: l=!0, cb: c=null}) {
        return new Promise(((p,h)=>{
            if (l && n in this.promises)
                this.promises[n].then(p, h);
            else {
                if ("style" === e) {
                    const e = this._loadStyle({
                        src: t,
                        id: n,
                        inline: a,
                        preload: i,
                        refElement: s,
                        timeout: o,
                        version: r,
                        cb: c
                    });
                    return this.promises[n] = e,
                    e.then(p, h)
                }
                if ("script" === e) {
                    const e = this._loadScript({
                        src: t,
                        id: n,
                        inline: a,
                        preload: i,
                        refElement: s,
                        timeout: o,
                        version: r,
                        cb: c
                    });
                    return this.promises[n] = e,
                    e.then(p, h)
                }
                h(new TypeError('Resource type "style" or "script" is missing.'))
            }
        }
        ))
    }
    _loadScript({src: e=null, id: t=null, inline: n=null, preload: a=!1, refElement: i=document.body, version: s=null, timeout: r=15e3, cb: o=null}) {
        return new Promise(((l,c)=>{
            const p = document.querySelector(`script[src="${e}"]`)
              , h = document.getElementsByTagName("head")[0];
            let d, m, u;
            if (null != p || n)
                l(p);
            else {
                if (e && s && (e += `?ver=${s}`),
                e && a && (u = document.createElement("link"),
                u.setAttribute("rel", "preload"),
                u.setAttribute("href", e),
                u.setAttribute("as", "script"),
                u.setAttribute("type", "text/javascript"),
                h.prepend(u)),
                d = document.createElement("script"),
                d.setAttribute("type", "text/javascript"),
                e && (d.setAttribute("async", "async"),
                d.setAttribute("src", e),
                d.setAttribute("crossorigin", "anonymous")),
                !t) {
                    const e = Math.round((new Date).getTime() / 1e3);
                    t = `ajax-asset-${e}-js`
                }
                d.setAttribute("id", t),
                "string" == typeof n && n.length && (d.innerHTML = n),
                i.append(d),
                e ? (d.onerror = t=>{
                    g(),
                    i.removeChild(d),
                    d = null,
                    c(new Error(`A network error occured while trying to load resouce ${e}`))
                }
                ,
                void 0 === d.onreadystatechange ? d.onload = f : d.onreadystatechange = f,
                m = setTimeout(d.onerror, r)) : l(d)
            }
            function g() {
                clearTimeout(m),
                m = null,
                d.onerror = d.onreadystatechange = d.onload = null
            }
            function f() {
                if (g(),
                !d.onreadystatechange || d.readyState && "complete" === d.readyState)
                    return "function" == typeof o && o(),
                    void l(d)
            }
        }
        ))
    }
    _loadStyle({src: e=null, id: t=null, inline: n=null, preload: a=!1, refElement: i, version: s=null, timeout: r=15e3, cb: o=null}) {
        return new Promise(((l,c)=>{
            const p = "string" == typeof n && n.length;
            t || c(new TypeError("Resource ID attribute is missing."));
            const h = document.getElementById(t);
            let d, m, u, g, f = p ? document.createElement("style") : document.createElement("link"), y = 100 * (r || 10);
            e && s && (e += `?ver=${s}`),
            e && a && (g = document.createElement("link"),
            g.setAttribute("rel", "preload"),
            g.setAttribute("href", e),
            g.setAttribute("as", "style"),
            g.setAttribute("type", "text/css"),
            document.head.prepend(g)),
            p ? (f.innerHTML = n,
            f.setAttribute("id", t),
            f.setAttribute("type", "text/css")) : (f.setAttribute("rel", "stylesheet"),
            f.setAttribute("id", t),
            f.setAttribute("type", "text/css"),
            f.setAttribute("href", e),
            a || f.setAttribute("crossorigin", "anonymous")),
            null != i ? i.insertAdjacentElement("afterend", f) : document.head.append(f),
            f.onerror = function(t) {
                d && clearInterval(d),
                d = null,
                c(new Error(`A network error occured while trying to load resouce ${e}`))
            }
            ,
            "sheet"in f ? (m = "sheet",
            u = "cssRules") : (m = "styleSheet",
            u = "rules"),
            d = setInterval((function() {
                try {
                    if (f[m] && f[m][u].length)
                        return clearInterval(d),
                        d = null,
                        "function" == typeof o && o(),
                        l(f),
                        void (h && h.remove())
                } catch (e) {}
                y-- < 0 && (clearInterval(d),
                d = null,
                c(new Error(`A network error occured while trying to load resouce ${e}`)))
            }
            ), 10)
        }
        ))
    }
    injectPreload({src: e=null, refElement: t=document.head.querySelector("meta[charset]"), rel: n="prefetch", crossorigin: a="anonymous", as: i="script", type: s="application/javascript"}={}) {
        if (e && !document.head.querySelector(`link[rel="${n}"][href="${e}"]`) && !document.querySelector(`script[src="${e}"]`)) {
            const r = document.createElement("link");
            r.setAttribute("href", e),
            r.setAttribute("rel", n),
            r.setAttribute("as", i),
            r.setAttribute("crossorigin", a),
            r.setAttribute("type", s),
            t ? t.insertAdjacentElement("afterend", r) : document.head.prepend(r)
        }
    }
}
class BaseAnimation {
    constructor() {
        this.animations = {
            animatedScale: {
                animationName: "animateScale",
                initialVars: {
                    scale: 0
                },
                targetVars: {
                    animateFrom: "center",
                    ease: "power3.out",
                    duration: .6
                }
            },
            animatedBorderHorizontal: {
                animationName: "animateScale",
                initialVars: {
                    scaleX: 0
                },
                targetVars: {
                    animateFrom: "left",
                    ease: "power4.out",
                    duration: 1.2
                }
            },
            animatedMask: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "center",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "center",
                    shape: "rectangle",
                    ease: "power4.out",
                    duration: 1.2,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedMaskCircle: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "center",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "center",
                    shape: "circle",
                    ease: "power2.inOut",
                    duration: 1.2,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedMaskEllipse: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "center",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "center",
                    shape: "ellipse",
                    ease: "power2.inOut",
                    duration: 1.2,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedMaskFromTop: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "bottom",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "top",
                    shape: "rectangle",
                    ease: "power3.inOut",
                    duration: .9,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedMaskFromBottom: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "top",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "bottom",
                    shape: "rectangle",
                    ease: "power3.inOut",
                    duration: .9,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedMaskFromLeft: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "right",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "left",
                    shape: "rectangle",
                    ease: "power3.inOut",
                    duration: .9,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedMaskFromRight: {
                animationName: "animateMask",
                setAnimationName: "hideMask",
                initialVars: {
                    animateTo: "left",
                    duration: 0,
                    overwrite: !1,
                    clearProps: !1,
                    scaleInner: ".js-animated-mask-inner"
                },
                targetVars: {
                    animateFrom: "right",
                    shape: "rectangle",
                    ease: "power3.inOut",
                    duration: .9,
                    scale: 1.2,
                    scaleInner: ".js-animated-mask-inner"
                }
            },
            animatedReveal: {
                initialVars: {
                    yPercent: -100
                },
                targetVars: {
                    yPercent: 0,
                    ease: "power3.out",
                    duration: 1.2
                }
            },
            animatedRevealBottom: {
                initialVars: {
                    yPercent: 100
                },
                targetVars: {
                    yPercent: 0,
                    ease: "power3.out",
                    duration: 1.2
                }
            },
            animatedJump: {
                initialVars: {
                    autoAlpha: 0,
                    yPercent: 30
                },
                targetVars: {
                    autoAlpha: 1,
                    yPercent: 0,
                    ease: "power3.out",
                    duration: .6
                }
            },
            animatedJumpFromLeft: {
                initialVars: {
                    autoAlpha: 0,
                    xPercent: -30
                },
                targetVars: {
                    autoAlpha: 1,
                    xPercent: 0,
                    ease: "power3.out",
                    duration: .6
                }
            },
            animatedJumpFromRight: {
                initialVars: {
                    autoAlpha: 0,
                    xPercent: 30
                },
                targetVars: {
                    autoAlpha: 1,
                    xPercent: 0,
                    ease: "power3.out",
                    duration: .6
                }
            },
            animatedJumpScale: {
                initialVars: {
                    autoAlpha: 0,
                    scaleX: 1,
                    scaleY: 1.5,
                    x: 0,
                    y: 300,
                    xPercent: 0,
                    yPercent: 0
                },
                targetVars: {
                    autoAlpha: 1,
                    scaleX: 1,
                    scaleY: 1,
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    ease: "power3.out",
                    duration: .6
                }
            },
            animatedFade: {
                initialVars: {
                    autoAlpha: 0
                },
                targetVars: {
                    autoAlpha: 1,
                    ease: "power3.out",
                    duration: .6
                }
            }
        }
    }
    prepareAnimation() {
        return new Promise((e=>{
            ScrollTrigger.refresh(),
            e(!0)
        }
        ))
    }
    getScrubAnimation() {}
    getRevealAnimation() {}
    _registerAnimations() {
        const e = app.utilities.getTimeScaleByKey("onScrollReveal");
        for (const [t,n] of Object.entries(this.animations)) {
            const a = this._getScopedAnimationElements(`[data-arts-os-animation-name="${t}"]`);
            if (a.length) {
                const t = {
                    elements: a
                };
                "initialVars"in n && Object.assign(t, {
                    initialVars: n.initialVars
                }),
                "setAnimationName"in n && "function" == typeof gsap.effects[n.setAnimationName] && Object.assign(t, {
                    shouldRunSetTween: !1,
                    setCb: (e,t)=>{
                        gsap.effects[n.setAnimationName](e, t)
                    }
                }),
                "animationName"in n && "function" == typeof gsap.effects[n.animationName] && Object.assign(t, {
                    shouldRunTween: !1,
                    cb: t=>{
                        if ("duration"in n.targetVars) {
                            const t = n.targetVars.duration;
                            Object.assign(n.targetVars, {
                                duration: t / e
                            })
                        }
                        gsap.effects[n.animationName](t, n.targetVars)
                    }
                }),
                this._createBatchSTReveal(t)
            }
        }
    }
    _getRevealTextAnimation() {
        const e = this._getScopedAnimationElements();
        this._createBatchSTReveal({
            elements: e,
            shouldRunTween: !1,
            clearVars: !1,
            cb: e=>{
                this._animateText(e)
            }
        })
    }
    _animateText(e) {
        const t = gsap.timeline();
        e.forEach(((e,n)=>{
            if (e instanceof HTMLElement) {
                switch (e.getAttribute("data-arts-split-text-preset")) {
                case "animatedCounterChars":
                    t.animateChars(e, {
                        duration: 1.2,
                        y: "-40%",
                        stagger: {
                            from: "start",
                            amount: .1
                        }
                    }, "start");
                    break;
                case "animatedChars":
                    t.animateChars(e, {
                        duration: 1.2,
                        stagger: {
                            from: "start",
                            amount: .3
                        }
                    }, "start");
                    break;
                case "animatedCharsRandom":
                    t.animateChars(e, {
                        duration: 1.2,
                        stagger: {
                            from: "random",
                            amount: .3
                        }
                    }, "start");
                    break;
                case "animatedWords":
                    t.animateWords(e, {
                        duration: 1.2,
                        stagger: {
                            from: "start",
                            amount: .1
                        }
                    }, 0 === n ? "start" : "<20%");
                    break;
                case "animatedLines":
                    t.animateLines(e, {
                        duration: 1.2,
                        stagger: .07
                    }, 0 === n ? "start" : "<20%")
                }
            }
        }
        )),
        this._animateOutlines(t),
        t.timeScale(app.utilities.getTimeScaleByKey("onScrollReveal"))
    }
    _animateOutlines(e) {
        e && this.elements.outlines && this.elements.outlines.length && e.add((()=>{
            this.elements.outlines.forEach(((t,n)=>{
                e.to(t, {
                    duration: 1.8,
                    drawSVG: "100% 0%",
                    ease: "expo.inOut",
                    delay: .1 * n,
                    onStart: ()=>{
                        const e = this.elements.outlines[n].closest(".js-arts-split-text__wrapper-line");
                        e && (e.classList.remove("overflow-hidden"),
                        e.style.overflow = "initial"),
                        this.elements.outlines[n].classList.add("color-accent")
                    }
                }, "<")
            }
            ))
        }
        ), "<50%")
    }
    _initAnimations() {
        this._hasAnimationScene() && this.prepareAnimation().then((()=>{
            this._getRevealTextAnimation(),
            this._registerAnimations(),
            this._setAnimationReady(),
            this._createSTReveal()
        }
        )),
        this._createSTScrub()
    }
    _createSTReveal() {
        const e = this.getRevealAnimation();
        if (e) {
            const t = gsap.timeline({
                defaults: {
                    duration: 1.2,
                    ease: "power3.out"
                },
                onStart: ()=>{
                    app.utilities.dispatchEvent("animation/start", {}, this.element)
                }
                ,
                onUpdate: ()=>{
                    app.utilities.dispatchEvent("animation/update", {}, this.element)
                }
                ,
                onComplete: ()=>{
                    e.kill(),
                    app.utilities.dispatchEvent("animation/end", {}, this.element)
                }
            }).add(e.play())
              , n = app.componentsManager.getComponentByName("Preloader")
              , a = app.utilities.getTriggerHookValue();
            t.timeScale(app.utilities.getTimeScaleByKey("onScrollReveal")),
            this.stReveal = ScrollTrigger.create({
                start: this.containerAnimation ? "top bottom" : `top bottom-=${window.innerHeight * a}px`,
                animation: t,
                trigger: this.element,
                invalidateOnRefresh: !0,
                once: !0
            }),
            n ? (this.stReveal.disable(),
            n.loaded.then((()=>{
                this.stReveal.enable()
            }
            ))) : this._isWebGLEnabled() && (this.stReveal.disable(),
            this.webGLReady.then((()=>{
                this.stReveal.enable()
            }
            )))
        }
    }
    _createSTScrub() {
        const e = this.getScrubAnimation();
        e && (this.containerAnimation && (e.containerAnimation = this.containerAnimation),
        e.matchMedia ? (this.mmSTScrub = gsap.matchMedia(),
        this.mmSTScrub.add(e.matchMedia, (()=>{
            this.stScrub = ScrollTrigger.create(e)
        }
        ))) : this.stScrub = ScrollTrigger.create(e),
        document.addEventListener("arts/barba/transition/start", (()=>{
            this.stScrub && this.stScrub.kill(),
            this.mmSTScrub && "function" == typeof this.mmSTScrub.kill && this.mmSTScrub.kill()
        }
        ), {
            once: !0
        }))
    }
    _createBatchSTReveal({initialVars: e={}, targetVars: t={}, clearVars: n={}, elements: a, interval: i=.05, batchMax: s=6, setCb: r, cb: o, shouldRunTween: l=!0, shouldRunSetTween: c=!0}={}) {
        if (a) {
            const p = app.utilities.getTimeScaleByKey("onScrollReveal")
              , h = app.utilities.getTriggerHookValue()
              , d = {
                interval: i,
                batchMax: s,
                start: ({trigger: e})=>`top bottom-=${e.getBoundingClientRect().top < window.innerHeight ? 0 : window.innerHeight * h}px`,
                once: !0
            }
              , m = {
                autoAlpha: 1,
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                scaleX: 1,
                scaleY: 1,
                duration: .6,
                stagger: .07,
                ease: "power3.out"
            }
              , u = {
                clearProps: "opacity,visibility,transform"
            }
              , g = app.componentsManager.getComponentByName("Preloader");
            if ("object" == typeof t && (t = deepmerge(m, t)),
            "object" == typeof n && (n = deepmerge(u, n)),
            "duration"in t) {
                const e = t.duration;
                Object.assign(t, {
                    duration: e / p
                })
            }
            Object.assign(d, {
                onEnter: e=>{
                    Object.assign(t, {
                        onStart: ()=>{
                            app.utilities.dispatchEvent("animation/start", {}, this.element)
                        }
                        ,
                        onUpdate: ()=>{
                            app.utilities.dispatchEvent("animation/update", {}, this.element)
                        }
                        ,
                        onComplete: ()=>{
                            "object" == typeof n && gsap.set(e, n),
                            app.utilities.dispatchEvent("animation/complete", {}, this.element)
                        }
                    }),
                    "function" == typeof o && o(e, t),
                    l && gsap.to(e, t)
                }
            }),
            Object.assign(e, {
                onComplete: ()=>{
                    const e = ScrollTrigger.batch(a, d);
                    g ? (e.forEach((e=>e.disable())),
                    g.loaded.then((()=>{
                        e.forEach((e=>e.enable()))
                    }
                    ))) : this._isWebGLEnabled() && (e.forEach((e=>e.disable())),
                    this.webGLReady.then((()=>{
                        e.forEach((e=>e.enable()))
                    }
                    )))
                }
            }),
            "function" == typeof r && r(a, e),
            c && gsap.set(a, e),
            ScrollTrigger.addEventListener("refreshInit", (()=>gsap.set(a, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0
            })))
        }
    }
    _setAnimationReady() {
        this.element.setAttribute("data-arts-os-animation", "ready")
    }
    _hasAnimationScene() {
        const e = this.element.getAttribute("data-arts-os-animation");
        return !!e && "false" !== e
    }
    _getScopedSelector(e) {
        return `:scope ${e}:not(:scope [data-arts-component-name] ${e}):not(:scope [data-arts-component-name]${e})`
    }
    _getScopedAnimationElements(e="[data-arts-split-text-preset]") {
        const t = [...this.element.querySelectorAll(this._getScopedSelector(e))];
        return this.element.matches(e) && t.push(this.element),
        t
    }
}
class BaseComponent extends BaseAnimation {
    constructor({name: e, element: t, loadInnerComponents: n, parent: a, defaults: i, innerElements: s}) {
        super(),
        this.mounted = !1,
        this.containerAnimation = void 0,
        this.ready = new Promise((e=>{
            this._setReady = e
        }
        )),
        this.webGLReady = new Promise((e=>{
            this._setWebGLReady = e
        }
        )),
        this.loadInnerComponents = n,
        this.name = e,
        this.element = t,
        this.parent = a,
        this.defaults = i,
        this.innerSelectors = s,
        this.components = [],
        this.elements = {},
        this.options = {},
        this.lazy = null,
        this._updateOptions(),
        this._updateElements({
            container: this.element,
            elements: this.innerSelectors
        })
    }
    setup() {
        const e = app.componentsManager.getComponentByName("AJAX");
        document.fonts.ready.then((()=>this.mount())).then((()=>{
            e && e.running ? (this.init(),
            document.addEventListener("arts/barba/transition/end/before", this._initAnimations.bind(this), {
                once: !0
            })) : (this.init(),
            this._initAnimations()),
            gsap.ticker.add(this._setReady.bind(this), !0, !1)
        }
        ))
    }
    init() {}
    destroy() {}
    update() {
        this._updateOptions()
    }
    reload(e) {
        this.stReveal && this.stReveal.kill(),
        this.stScrub && this.stScrub.kill(),
        this.destroy(),
        this._updateOptions({
            attributeSelector: !e && void 0,
            options: e
        }),
        this.init(),
        this._initAnimations()
    }
    mount() {
        return new Promise((e=>{
            this.parent && this.parent.horizontalScroll && (this.horizontalScroll = this.parent.horizontalScroll,
            this.containerAnimation = this.horizontalScroll.getContainerAnimation(this.element)),
            this.mounted || !this.loadInnerComponents ? (this.mounted = !0,
            e(!0)) : Promise.all(app.componentsManager.init({
                storage: this.components,
                scope: this.element,
                parent: this,
                nameAttribute: "data-arts-component-name",
                optionsAttribute: "data-arts-component-options"
            })).then((()=>{
                this._initSplitText(),
                this._initLazyMedia(),
                this.mounted = !0,
                e(!0)
            }
            ))
        }
        ))
    }
    destroySplitText() {
        this.splitObserver.disconnect(),
        this.splitTextInstance.forEach((e=>{
            e.destroy()
        }
        ))
    }
    updateRef(e, t) {
        if (e && t)
            return this[e] || (this[e] = app.componentsManager.getComponentByName(t)),
            this[e]
    }
    setLoading(e=!0) {
        app.options.cursorLoading && this.element.classList.toggle("cursor-progress", e)
    }
    _initLazyMedia() {
        const e = [...this.element.querySelectorAll(".lazy:not(:scope [data-arts-component-name] .lazy)")];
        e.length && (e.forEach((e=>{
            const t = e.parentElement
              , n = e.getAttribute("width")
              , a = e.getAttribute("height")
              , i = "absolute" === window.getComputedStyle(e).position
              , s = e.classList.contains("full-height") || e.classList.contains("hs-full-height");
            i || s || !t || !n || !a || e.closest(".custom-aspect-ratio") || e.closest(".auto-width-height") || (t.style.setProperty("--media-width", n),
            t.style.setProperty("--media-height", a),
            t.classList.add("has-aspect-ratio"))
        }
        )),
        ScrollTrigger.create({
            trigger: this.element,
            start: ()=>"top-=1000px bottom",
            scrub: !1,
            containerAnimation: this.containerAnimation,
            once: !0,
            onEnter: ()=>{
                e.forEach((e=>{
                    LazyLoad.load(e)
                }
                ))
            }
        }))
    }
    _initSplitText() {
        const e = this._getScopedAnimationElements();
        let t = {
            init: !0,
            type: "lines",
            set: {
                type: "lines",
                direction: "y",
                distance: "100%",
                opacity: !1
            },
            wrap: "lines",
            wrapClass: "overflow-hidden"
        };
        this.splitTextInstance = [],
        this.splitTextTriggered = !1,
        this.splitObserver = new ResizeObserver(app.utilities.debounce(this._onSplitTextResize.bind(this), 50)),
        e.forEach(((e,n)=>{
            const a = e.getAttribute("data-arts-split-text-preset");
            this._createTextOutlines(e),
            a && a in app.animations.splitTextPresets && (t = app.animations.splitTextPresets[a]);
            try {
                this.splitTextInstance[n] = new ArtsSplitText(e,t),
                this.splitObserver.observe(e)
            } catch (e) {
                console.error(`An error occured in component ${this.name}: ${e}`)
            }
        }
        ))
    }
    _createTextOutlines(e) {
        const t = [...e.querySelectorAll("u")];
        t.length && "string" == typeof app.options.circleTemplate && (this.elements.outlines = [],
        t.forEach((e=>{
            e.insertAdjacentHTML("beforeend", app.options.circleTemplate);
            const t = e.querySelector("ellipse");
            this.elements.outlines.push(t),
            this._hasAnimationScene() && gsap.set(t, {
                drawSVG: "0% 0%"
            })
        }
        )))
    }
    _onSplitTextResize(e) {
        if (this.splitTextTriggered)
            for (const t of e)
                this.elements.outlines = [],
                this.splitTextInstance.forEach((e=>{
                    if (e.containerElement === t.target) {
                        e.destroy(),
                        t.target.classList.contains("split-text-animation-revealed") && [...t.target.querySelectorAll("u ellipse")].forEach((e=>{
                            e.style = null
                        }
                        ));
                        [...t.target.querySelectorAll("u")].forEach((e=>{
                            const t = e.querySelector("ellipse");
                            this.elements.outlines.push(t)
                        }
                        )),
                        e.init(),
                        t.target.classList.contains("split-text-animation-revealed") && [...t.target.querySelectorAll("u ellipse")].forEach((e=>{
                            const t = e.closest(".js-arts-split-text__wrapper-line");
                            t && (t.classList.remove("overflow-hidden"),
                            t.style.overflow = "initial")
                        }
                        ))
                    }
                }
                ));
        else
            this.splitTextTriggered = !0
    }
    _setReady() {}
    _setWebGLReady() {}
    _isWebGLEnabled() {
        return !!this.options.webGL && !!this.options.webGL.enabled
    }
    _updateOptions({container: e=this.element, target: t=this.options, defaults: n=this.defaults, attributeSelector: a="data-arts-component-options", options: i={}}={}) {
        if (!e)
            return {};
        let s = {};
        if (i && n && (s = deepmerge(n, i)),
        a) {
            const t = app.utilities.parseOptionsStringObject(e.getAttribute(a));
            t && 0 !== Object.keys(t).length && (s = deepmerge(s, t))
        }
        Object.assign(t, s)
    }
    _updateElements({container: e, elements: t}) {
        if (e && t && "object" == typeof t)
            for (const n in t) {
                const a = `${t[n]}`;
                Object.assign(this.elements, {
                    [n]: [...e.querySelectorAll(a)]
                })
            }
    }
    _getInnerComponentByName(e) {
        const t = this.components.findIndex((t=>t.name === e));
        return t > -1 && this.components[t]
    }
}
window.BaseComponent = BaseComponent;
class ComponentsManager {
    constructor() {
        this.instances = {
            persistent: [],
            disposable: []
        }
    }
    init({scope: e=document, parent: t=null, loadInnerComponents: n=!0, storage: a=this.instances.disposable, selector: i=":scope [data-arts-component-name]:not(:scope [data-arts-component-name] [data-arts-component-name])", loadOnlyFirst: s=!1, nameAttribute: r="data-arts-component-name", optionsAttribute: o="data-arts-component-options"}) {
        if (!e)
            return [];
        let l = s ? [e.querySelector(i)] : [...e.querySelectorAll(i)]
          , c = [];
        return t || (l = l.filter((e=>e && !e.matches(":scope [data-arts-component-name] [data-arts-component-name]"))),
        s || (l[0] = null)),
        l && l.length && l.forEach((e=>{
            const i = this.loadComponent({
                el: e,
                parent: t,
                storage: a,
                loadInnerComponents: n,
                nameAttribute: r,
                optionsAttribute: o
            });
            c.push(i)
        }
        )),
        c
    }
    loadComponent({el: e, loadInnerComponents: t, parent: n, storage: a, name: i, nameAttribute: s="data-arts-component-name", optionsAttribute: r="data-arts-component-options", options: o}) {
        if (!e)
            return new Promise((e=>{
                e(!0)
            }
            ));
        const l = i || e.getAttribute(s)
          , c = o || e.getAttribute(r);
        return new Promise(((i,s)=>{
            if (void 0 !== window[l]) {
                const s = new window[l]({
                    name: l,
                    loadInnerComponents: t,
                    parent: n,
                    element: e,
                    options: c
                });
                a.push(s),
                s.ready.then((()=>i(!0)))
            } else
                app.components[l] ? this.load({
                    properties: app.components[l]
                }).then((s=>{
                    if ("object" == typeof s && "default"in s) {
                        const r = new s.default({
                            name: l,
                            loadInnerComponents: t,
                            parent: n,
                            element: e,
                            options: c
                        });
                        a.push(r),
                        r.ready.then((()=>i(!0)))
                    } else
                        i(!0)
                }
                )) : (console.error(`Component "${l}" is not recognized`),
                i(!0))
        }
        ))
    }
    load({properties: e=[]}) {
        const t = []
          , n = [];
        return new Promise((a=>{
            "dependencies"in e && e.dependencies.forEach((e=>{
                e in app.assets && app.assets[e].forEach((e=>{
                    t.push(app.assetsManager.load(e))
                }
                ))
            }
            )),
            "files"in e && e.files.forEach((e=>{
                n.push(app.assetsManager.load(e))
            }
            )),
            Promise.all(t).then((()=>Promise.all(n))).then((()=>"string" == typeof e.file ? import(e.file) : {})).then(a)
        }
        ))
    }
    getComponentByName(e) {
        return this.instances.persistent.filter((t=>t.name.toLowerCase() === e.toLowerCase()))[0]
    }
}
class Forms {
    constructor() {
        this.forms = "form",
        this.input = "input-float__input",
        this.inputClassNotEmpty = "input-float__input_not-empty",
        this.inputClassFocused = "input-float__input_focused",
        this.inputParent = "wpcf7-form-control-wrap",
        this._handlers = {
            focusIn: this._onFocusIn.bind(this),
            focusOut: this._onFocusOut.bind(this),
            reset: this._onReset.bind(this)
        },
        this.init()
    }
    init() {
        this._floatLabels(),
        this._attachEvents()
    }
    _floatLabels() {
        [...document.querySelectorAll(`.${this.input}`)].forEach((e=>{
            const t = e.closest(`.${this.inputParent}`);
            e.value && e.value.length ? this._setNotEmptyValue(e, t) : this._setEmptyValue(e, t),
            !e.placeholder || !e.placeholder.length || e.value && e.value.length || this._setNotEmptyValue(e, t)
        }
        ))
    }
    _setNotEmptyValue(e, t) {
        e && e.classList.add(this.inputClassNotEmpty),
        t && t.classList.add(this.inputClassNotEmpty)
    }
    _setEmptyValue(e, t) {
        e && e.classList.remove(this.inputClassFocused, this.inputClassNotEmpty),
        t && t.classList.remove(this.inputClassFocused, this.inputClassNotEmpty)
    }
    _setFocus(e, t) {
        e && (e.classList.add(this.inputClassFocused),
        e.classList.remove(this.inputClassNotEmpty)),
        t && (t.classList.add(this.inputClassFocused),
        t.classList.remove(this.inputClassNotEmpty))
    }
    _removeFocus(e, t) {
        e && e.classList.remove(this.inputClassFocused),
        t && t.classList.remove(this.inputClassFocused)
    }
    _isTargetInput(e) {
        return e.classList && e.classList.contains(this.input)
    }
    _isTargetForm(e) {
        return "FORM" === e.tagName
    }
    _attachEvents() {
        window.addEventListener("focusin", this._handlers.focusIn),
        window.addEventListener("focusout", this._handlers.focusOut),
        window.addEventListener("reset", this._handlers.reset)
    }
    _detachEvents() {
        window.removeEventListener("focusin", this._handlers.focusIn),
        window.removeEventListener("focusout", this._handlers.focusOut),
        window.removeEventListener("reset", this._handlers.reset)
    }
    _onFocusIn(e) {
        const t = e.target;
        if (this._isTargetInput(t)) {
            const e = t.closest(`.${this.inputParent}`);
            this._setFocus(t, e)
        }
    }
    _onFocusOut(e) {
        const t = e.target;
        if (this._isTargetInput(t)) {
            const e = t.closest(`.${this.inputParent}`);
            t.value && t.value.length ? this._setNotEmptyValue(t, e) : (t.placeholder && t.placeholder.length && this._setNotEmptyValue(t, e),
            this._removeFocus(t, e))
        }
    }
    _onReset(e) {
        const t = e.target;
        this._isTargetForm(t) && [...t.querySelectorAll(`.${this.input}`)].forEach((e=>{
            const t = e.closest(`.${this.inputParent}`);
            e.classList.remove(this.inputClassFocused, this.inputClassNotEmpty),
            t && t.classList.remove(this.inputClassFocused, this.inputClassNotEmpty)
        }
        ))
    }
}
class HoverEffect {
    constructor() {
        this._handlers = {
            hoverIn: this._onMouseEnter.bind(this),
            hoverOut: this._onMouseLeave.bind(this),
            prevent: this.preventDefault.bind(this)
        },
        this.selectorHoverSelf = "[data-hover-class]",
        this.attributeHoverSelf = "data-hover-class",
        this.selectorHoverGroup = "[data-hover-group-class]",
        this.selectorHoverGroupElements = `${this.selectorHoverGroup} a`,
        this.attributeHoverGroup = "data-hover-group-class",
        this.attachEvents(document, this._handlers.hoverIn, this._handlers.hoverOut)
    }
    _onMouseEnter(e) {
        const t = e.target;
        t instanceof HTMLElement && (this._toggleHoverSelfClass({
            element: t,
            toggle: !0
        }),
        this._toggleHoverGroupClass({
            element: t,
            toggle: !0
        }))
    }
    _onMouseLeave(e) {
        const t = e.target;
        t instanceof HTMLElement && (this._toggleHoverSelfClass({
            element: t,
            selector: this.selectorHoverSelf,
            attribute: this.attributeHoverSelf,
            toggle: !1
        }),
        this._toggleHoverGroupClass({
            element: t,
            toggle: !1
        }))
    }
    _toggleHoverSelfClass({element: e, toggle: t}={
        element: null,
        toggle: !1
    }) {
        const n = e.closest(this.selectorHoverSelf);
        if (n) {
            const e = n.getAttribute(this.attributeHoverSelf);
            e.length && n.classList.toggle(e, t)
        }
    }
    _toggleHoverGroupClass({element: e, toggle: t}={
        element: null,
        toggle: !1
    }) {
        if (e.closest(this.selectorHoverGroupElements)) {
            const n = e.closest(this.selectorHoverGroup);
            if (n) {
                const e = n.getAttribute(this.attributeHoverGroup);
                e.length && n.classList.toggle(e, t)
            }
        }
    }
    attachEvents(e, t, n) {
        e && ("function" == typeof t && (e.addEventListener("mouseenter", t, !0),
        e.addEventListener("touchstart", t, !0),
        e.addEventListener("webkitmouseforcewillbegin", this._handlers.prevent),
        e.addEventListener("webkitmouseforcedown", this._handlers.prevent),
        e.addEventListener("webkitmouseforceup", this._handlers.prevent),
        e.addEventListener("webkitmouseforcechanged", this._handlers.prevent)),
        "function" == typeof n && (e.addEventListener("mouseleave", n, !0),
        e.addEventListener("touchend", n, !0),
        e.addEventListener("touchcancel", n, !0)))
    }
    detachEvents(e, t, n) {
        e && ("function" == typeof t && (e.removeEventListener("mouseenter", t, !0),
        e.removeEventListener("touchstart", t, !0),
        e.removeEventListener("webkitmouseforcewillbegin", this._handlers.prevent),
        e.removeEventListener("webkitmouseforcedown", this._handlers.prevent),
        e.removeEventListener("webkitmouseforceup", this._handlers.prevent),
        e.removeEventListener("webkitmouseforcechanged", this._handlers.prevent)),
        "function" == typeof n && (e.removeEventListener("mouseleave", n, !0),
        e.removeEventListener("touchend", n, !0),
        e.removeEventListener("touchcancel", n, !0)))
    }
    preventDefault(e) {
        e.stopPropagation(),
        e.preventDefault()
    }
}
class Utilities {
    constructor() {
        this._handlers = {
            resize: this.debounce(this._updateMobileBarVh.bind(this), this.getDebounceTime(300)),
            orientationchange: this.debounce(ScrollTrigger.refresh.bind(ScrollTrigger, !1), this.getDebounceTime())
        },
        this.lastVW = window.innerWidth,
        this.lastVH = window.innerHeight,
        this.mqPointer = window.matchMedia("(hover: hover) and (pointer: fine)"),
        this.init()
    }
    init() {
        this._attachEvents()
    }
    update() {
        this._updateMobileBarVh()
    }
    destroy() {
        this._detachEvents()
    }
    _attachEvents() {
        this.attachResponsiveResize({
            callback: this._handlers.resize,
            autoDetachOnTransitionStart: !1
        }),
        window.addEventListener("orientationchange", this._handlers.orientationchange)
    }
    _detachEvents() {
        window.removeEventListener("orientationchange", this._handlers.orientationchange)
    }
    attachResponsiveResize({callback: e, immediateCall: t=!0, autoDetachOnTransitionStart: n=!0}={}) {
        const a = this;
        if ("function" == typeof e) {
            const i = e.bind(e);
            function s(e) {
                this.lastVW !== window.innerWidth && (this.lastVW = window.innerWidth,
                i())
            }
            function r(e) {
                this.lastVH !== window.innerHeight && (this.lastVH = window.innerHeight,
                i())
            }
            const o = s.bind(s)
              , l = r.bind(r);
            function c(e, t=!1) {
                e.matches ? window.addEventListener("resize", l, !1) : window.removeEventListener("resize", l, !1),
                t && i()
            }
            function p() {
                window.removeEventListener("resize", o, !1),
                window.removeEventListener("resize", l, !1),
                "function" == typeof a.mqPointer.removeEventListener ? a.mqPointer.removeEventListener("change", c) : a.mqPointer.removeListener(c)
            }
            return window.addEventListener("resize", o, !1),
            c({
                matches: a.mqPointer.matches
            }, t),
            "function" == typeof a.mqPointer.addEventListener ? a.mqPointer.addEventListener("change", c) : a.mqPointer.addListener(c),
            n && document.addEventListener("arts/barba/transition/start", p, {
                once: !0
            }),
            {
                clear: p
            }
        }
    }
    _updateMobileBarVh() {
        document.documentElement.style.setProperty("--fix-bar-vh", .01 * document.documentElement.clientHeight + "px"),
        ScrollTrigger.refresh(!0)
    }
    scrollTo({target: e=0, ease: t="expo.inOut", delay: n=0, duration: a=.8, offset: i=0, container: s=window, cb: r}) {
        const o = app.componentsManager.getComponentByName("Scroll")
          , l = this.isSmoothScrollingEnabled() && o && o.instance;
        return 0 === a ? l ? gsap.set(s, {
            delay: n,
            scrollTo: {
                y: e,
                offsetY: i
            },
            onComplete: ()=>{
                o.instance.scrollTo(e, {
                    immediate: !0,
                    offset: -i
                }),
                "function" == typeof r && r()
            }
        }) : gsap.set(s, {
            delay: n,
            scrollTo: e,
            onComplete: r
        }) : l ? gsap.to(s, {
            duration: a,
            delay: n,
            ease: t,
            onStart: ()=>{
                o.instance.scrollTo(e, {
                    duration: a,
                    offset: -i,
                    easing: gsap.parseEase(t)
                })
            }
            ,
            onComplete: r
        }) : gsap.to(s, {
            duration: a,
            delay: n,
            scrollTo: {
                y: e,
                offsetY: i
            },
            ease: t,
            onComplete: r
        })
    }
    scrollLock(e=!0) {
        const t = app.componentsManager.getComponentByName("Scroll");
        document.documentElement.classList.toggle("lock-scroll", e),
        this.isSmoothScrollingEnabled() && t.instance && (e ? t.instance.stop() : t.instance.start())
    }
    scrollToAnchorFromHash(e=.3) {
        if (window.location.hash)
            try {
                const t = document.querySelector(window.location.hash);
                if (t)
                    return this.scrollTo({
                        target: t,
                        delay: e
                    })
            } catch (e) {}
    }
    isSmoothScrollingEnabled() {
        const e = app.componentsManager.getComponentByName("Scroll");
        return e && e.instance
    }
    toggleClasses(e, t, n) {
        if (e && e instanceof HTMLElement) {
            const a = t.split(" ");
            a.length && a.map((t=>e.classList.toggle(t, n)))
        }
    }
    debounce(e, t, n) {
        let a;
        return function(...i) {
            let s = this
              , r = n && !a;
            clearTimeout(a),
            a = setTimeout((()=>{
                a = null,
                n || e.apply(s, i)
            }
            ), t),
            r && e.apply(s, i)
        }
    }
    getDebounceTime(e=400) {
        return e
    }
    parseOptionsStringObject(e) {
        let t = {};
        if (!e)
            return t;
        try {
            t = JSON.parse(this.convertStringToJSON(e))
        } catch (t) {
            console.warn(`${e} is not a valid parameters object`)
        }
        return t
    }
    convertStringToJSON(e) {
        if (!e)
            return;
        return e.replace(/'/g, '"').replace(/(?=[^"]*(?:"[^"]*"[^"]*)*$)(\w+:)|(\w+ :)/g, (function(e) {
            return '"' + e.substring(0, e.length - 1) + '":'
        }
        ))
    }
    pageLock(e=!0) {
        gsap.set("#page-blocking-curtain", {
            display: e ? "block" : "none"
        })
    }
    getLinkTarget(e) {
        const t = e.target;
        if (t instanceof HTMLElement) {
            const e = t.closest("a") || t.closest(".virtual-link");
            if (e)
                return e
        }
        return null
    }
    degrees2Radians(e) {
        return e * (Math.PI / 180)
    }
    getHeaderHeight() {
        return parseInt(document.documentElement.style.getPropertyValue("--header-height"))
    }
    dispatchEvent(e, t, n=document) {
        const a = new CustomEvent(e,t);
        n.dispatchEvent(a)
    }
    waitForVariable(e, t=20, n=1e3) {
        return new Promise(((a,i)=>{
            const s = setInterval((()=>{
                void 0 !== window[e] && (clearInterval(s),
                a(window[e]))
            }
            ), t);
            setTimeout((()=>{
                clearInterval(s),
                i(`Global variable "window.${e}" is still not defined after ${n}ms.`)
            }
            ), n)
        }
        ))
    }
    isEnabledOption(e) {
        return !0 === e || "object" == typeof e && (!("enabled"in e) || "enabled"in e && !0 === e.enabled)
    }
    getTimeScaleByKey(e) {
        return e in app.options.animations.speed && "number" == typeof app.options.animations.speed[e] ? 0 === app.options.animations.speed[e] ? 1 : gsap.utils.clamp(.01, 1 / 0, app.options.animations.speed[e]) : 1
    }
    getTriggerHookValue(e=.15) {
        return "triggerHook"in app.options.animations && "number" == typeof app.options.animations.triggerHook ? gsap.utils.clamp(0, 1, app.options.animations.triggerHook) : e
    }
}
(()=>{
    "use strict";
    var e = {
        417: e=>{
            var t = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && !function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === n
                    }(e)
                }(e)
            }
              , n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
            function a(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? o((n = e,
                Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }
            function i(e, t, n) {
                return e.concat(t).map((function(e) {
                    return a(e, n)
                }
                ))
            }
            function s(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return e.propertyIsEnumerable(t)
                    }
                    )) : []
                }(e))
            }
            function r(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }
            function o(e, n, l) {
                (l = l || {}).arrayMerge = l.arrayMerge || i,
                l.isMergeableObject = l.isMergeableObject || t,
                l.cloneUnlessOtherwiseSpecified = a;
                var c = Array.isArray(n);
                return c === Array.isArray(e) ? c ? l.arrayMerge(e, n, l) : function(e, t, n) {
                    var i = {};
                    return n.isMergeableObject(e) && s(e).forEach((function(t) {
                        i[t] = a(e[t], n)
                    }
                    )),
                    s(t).forEach((function(s) {
                        (function(e, t) {
                            return r(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                        }
                        )(e, s) || (r(e, s) && n.isMergeableObject(t[s]) ? i[s] = function(e, t) {
                            if (!t.customMerge)
                                return o;
                            var n = t.customMerge(e);
                            return "function" == typeof n ? n : o
                        }(s, n)(e[s], t[s], n) : i[s] = a(t[s], n))
                    }
                    )),
                    i
                }(e, n, l) : a(n, l)
            }
            o.all = function(e, t) {
                if (!Array.isArray(e))
                    throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return o(e, n, t)
                }
                ), {})
            }
            ;
            var l = o;
            e.exports = l
        }
        ,
        76: (e,t,n)=>{
            n.r(t)
        }
        ,
        549: (e,t,n)=>{
            n.r(t)
        }
    }
      , t = {};
    function n(a) {
        var i = t[a];
        if (void 0 !== i)
            return i.exports;
        var s = t[a] = {
            exports: {}
        };
        return e[a](s, s.exports, n),
        s.exports
    }
    n.d = (e,t)=>{
        for (var a in t)
            n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ;
    var a = {};
    (()=>{
        n.d(a, {
            default: ()=>l
        });
        var e = n(417);
        const t = {
            init: !0,
            matchMedia: !1,
            type: "lines",
            set: !1,
            lineClass: "js-arts-split-text__line",
            wordClass: "js-arts-split-text__word",
            charClass: "js-arts-split-text__char",
            wrap: !1,
            wrapClass: !1,
            dropCapSelector: ".has-drop-cap",
            reduceWhiteSpace: !0
        };
        class i {
            constructor({container: e, attributeSelector: n="data-arts-split-text-options", options: a}) {
                this._data = t,
                e instanceof HTMLElement && this._transformOptions({
                    container: e,
                    attributeSelector: n,
                    options: a
                })
            }
            get data() {
                return this._data
            }
            set data(e) {
                this._data = e
            }
            _transformOptions({container: n, attributeSelector: a, options: s}) {
                if (!n)
                    return {};
                let r = {};
                if (s && t && (r = e(t, s)),
                a) {
                    let t;
                    t = "DATA" === a ? function(e, t={
                        separator: "-",
                        pattern: /^/
                    }) {
                        let n = {};
                        var a;
                        return void 0 === t.separator && (t.separator = "-"),
                        Array.prototype.slice.call(e.attributes).filter((a = t.pattern,
                        function(e) {
                            let t;
                            return t = /^data\-/.test(e.name),
                            void 0 === a ? t : t && a.test(e.name.slice(5))
                        }
                        )).forEach((function(e) {
                            e.name.slice(5).split(t.separator).reduce((function(t, n, a, i) {
                                return "data" === n ? t : (a === i.length - 1 ? t[n] = e.value : t[n] = t[n] || {},
                                t[n])
                            }
                            ), n)
                        }
                        )),
                        n
                    }(n) : i.parseOptionsStringObject(n.getAttribute(a)),
                    t && 0 !== Object.keys(t).length && (t = i.transformPluginOptions(t),
                    r = e(r, t))
                }
                this.data = r
            }
            static parseOptionsStringObject(e) {
                let t = {};
                if (!e)
                    return t;
                try {
                    t = JSON.parse(i.convertStringToJSON(e))
                } catch (t) {
                    console.warn(`${e} is not a valid parameters object`)
                }
                return t
            }
            static convertStringToJSON(e) {
                if (e)
                    return e.replace(/'/g, '"').replace(/(?=[^"]*(?:"[^"]*"[^"]*)*$)(\w+:)|(\w+ :)/g, (function(e) {
                        return '"' + e.substring(0, e.length - 1) + '":'
                    }
                    ))
            }
            static transformPluginOptions(e) {
                return e
            }
        }
        function s(e, t=!1) {
            return (t ? e.toLowerCase() : e).replace(/(?:^|\s|["'([{])+\S/g, (e=>e.toUpperCase()))
        }
        class r {
            constructor({condition: e, callbackMatch: t, callbackNoMatch: n}) {
                this._handlers = {
                    change: this._onChange.bind(this)
                },
                this.condition = e,
                this.callbacks = {
                    match: t,
                    noMatch: n
                },
                (this._hasMatchFunction() || this._hasNoMatchFunction()) && this.init()
            }
            init() {
                this.mediaQuery = this._addMatchMedia(),
                this._attachEvents()
            }
            destroy() {
                this._detachEvents(),
                this.mediaQuery = null
            }
            get mediaQuery() {
                return this._mediaQuery
            }
            set mediaQuery(e) {
                this._mediaQuery = e
            }
            get callbacks() {
                return this._callbacks
            }
            set callbacks(e) {
                this._callbacks = e
            }
            get condition() {
                return this._condition
            }
            set condition(e) {
                this._condition = e
            }
            _hasMatchFunction() {
                return "function" == typeof this.callbacks.match
            }
            _hasNoMatchFunction() {
                return "function" == typeof this.callbacks.noMatch
            }
            _addMatchMedia() {
                return window.matchMedia(`${this.condition}`)
            }
            _attachEvents() {
                "function" == typeof this.mediaQuery.addEventListener ? this.mediaQuery.addEventListener("change", this._handlers.change) : this.mediaQuery.addListener(this._handlers.change)
            }
            _detachEvents() {
                "function" == typeof this.mediaQuery.removeEventListener ? this.mediaQuery.removeEventListener("change", this._handlers.change) : this.mediaQuery.removeListener(this._handlers.change)
            }
            _onChange(e) {
                e.matches ? this._hasMatchFunction() && this.callbacks.match() : e.matches || this._hasNoMatchFunction() && this.callbacks.noMatch()
            }
        }
        gsap.registerPlugin(ScrollTrigger),
        gsap.registerPlugin(SplitText);
        var o = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
                    t.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]])
            }
            return n
        };
        n(76),
        n(549),
        new class {
            constructor({duration: e, ease: t, hideWithOpacity: n, linesSelector: a, wordsSelector: i, charsSelector: s}={
                duration: 1.2,
                ease: "power4.out",
                hideWithOpacity: 1,
                linesSelector: ".js-arts-split-text__line",
                wordsSelector: ".js-arts-split-text__word",
                charsSelector: ".js-arts-split-text__char"
            }) {
                this._animations = {},
                this._options = {
                    duration: e,
                    ease: t,
                    hideWithOpacity: n,
                    linesSelector: a,
                    wordsSelector: i,
                    charsSelector: s
                },
                this._animations = {
                    lines: {
                        selector: this._options.linesSelector,
                        duration: this._options.duration,
                        ease: this._options.ease,
                        x: 0,
                        y: 0,
                        autoAlpha: 1,
                        stagger: {
                            amount: .08
                        }
                    },
                    words: {
                        selector: this._options.wordsSelector,
                        duration: this._options.duration,
                        ease: this._options.ease,
                        x: 0,
                        y: 0,
                        autoAlpha: 1,
                        stagger: {
                            amount: .2
                        }
                    },
                    chars: {
                        selector: this._options.charsSelector,
                        duration: this._options.duration,
                        ease: this._options.ease,
                        x: 0,
                        y: 0,
                        autoAlpha: 1,
                        stagger: {
                            from: "end",
                            axis: "x",
                            amount: .3
                        }
                    }
                },
                this._registerAnimations()
            }
            _registerAnimations() {
                for (const e in this._animations) {
                    const t = s(e)
                      , n = `animate${t}`
                      , a = `hide${t}`;
                    gsap.registerEffect({
                        name: n,
                        effect: this._effect,
                        defaults: Object.assign(Object.assign({}, this._animations[e]), {
                            animationName: n,
                            type: "reveal"
                        }),
                        extendTimeline: !0
                    }),
                    gsap.registerEffect({
                        name: a,
                        effect: this._effect,
                        defaults: Object.assign(Object.assign({}, this._animations[e]), {
                            animationName: a,
                            y: "-103%",
                            autoAlpha: this._options.hideWithOpacity,
                            type: "hide"
                        }),
                        extendTimeline: !0
                    })
                }
                gsap.registerEffect({
                    name: "animateCharsDirectional",
                    effect: this._effectCharsDirectional,
                    defaults: Object.assign(Object.assign({}, this._animations.chars), {
                        stagger: {
                            from: "auto",
                            amount: .3
                        },
                        animationName: "animateCharsDirectional",
                        type: "reveal"
                    }),
                    extendTimeline: !0
                }),
                gsap.registerEffect({
                    name: "hideCharsDirectional",
                    effect: this._effectCharsDirectional,
                    defaults: Object.assign(Object.assign({}, this._animations.chars), {
                        y: "-103%",
                        autoAlpha: this._options.hideWithOpacity,
                        animationName: "hideCharsDirectional",
                        type: "hide"
                    }),
                    extendTimeline: !0
                })
            }
            _effect(e, t) {
                const n = gsap.timeline({
                    defaults: {
                        duration: 0
                    }
                });
                if (e && e[0]) {
                    const a = ()=>[...e[0].querySelectorAll(t.selector)]
                      , {selector: i} = t
                      , s = o(t, ["selector"]);
                    if ("type"in t) {
                        const n = s.onStart
                          , a = s.onComplete;
                        "reveal" === t.type && (s.onStart = ()=>{
                            "function" == typeof n && n(),
                            e[0].classList.remove("split-text-animation-hidden")
                        }
                        ,
                        s.onComplete = ()=>{
                            "function" == typeof a && a(),
                            e[0].classList.remove("split-text-animation-hidden"),
                            e[0].classList.add("split-text-animation-revealed")
                        }
                        ),
                        "hide" === t.type && (s.onStart = ()=>{
                            "function" == typeof n && n(),
                            e[0].classList.remove("split-text-animation-revealed")
                        }
                        ,
                        s.onComplete = ()=>{
                            "function" == typeof a && a(),
                            e[0].classList.remove("split-text-animation-revealed"),
                            e[0].classList.add("split-text-animation-hidden")
                        }
                        ),
                        delete s.type
                    }
                    return 0 === s.duration ? n.add((()=>{
                        e[0].dataset.artsSplitTextState = encodeURIComponent(JSON.stringify(t)),
                        delete s.stagger,
                        delete s.duration,
                        delete s.animationName,
                        delete s.selector,
                        gsap.set(a(), s)
                    }
                    )) : (delete s.animationName,
                    delete s.selector,
                    n.to({}, {
                        delay: s.delay,
                        duration: s.duration,
                        ease: s.ease,
                        onStart: ()=>{
                            e[0].dataset.artsSplitTextState = encodeURIComponent(JSON.stringify(t)),
                            delete s.delay,
                            n.to(a(), s, "<")
                        }
                    }))
                }
                return n
            }
            _effectCharsDirectional(e, t) {
                if (e && e[0]) {
                    const n = [...e[0].querySelectorAll(t.selector)];
                    if (n.length) {
                        const {selector: e} = t
                          , a = o(t, ["selector"]);
                        if ("stagger"in a && "from"in a.stagger && "auto" === a.stagger.from) {
                            let e;
                            switch (gsap.getProperty(n[0], "text-align")) {
                            case "left":
                            default:
                                e = "start";
                                break;
                            case "center":
                                e = "center";
                                break;
                            case "right":
                                e = "end"
                            }
                            a.stagger = function(e) {
                                let t, n = e.ease, a = e.from || 0, i = e.base || 0, s = e.axis, r = {
                                    center: .5,
                                    end: 1
                                }[a] || 0;
                                return function(o, l, c) {
                                    if (!c)
                                        return 0;
                                    let p, h, d, m, u, g, f, y, b, v, _, w = c.length;
                                    if (!t) {
                                        for (t = [],
                                        f = b = 1 / 0,
                                        y = v = -f,
                                        _ = [],
                                        g = 0; g < w; g++)
                                            u = c[g].getBoundingClientRect(),
                                            d = (u.left + u.right) / 2,
                                            m = (u.top + u.bottom) / 2,
                                            d < f && (f = d),
                                            d > y && (y = d),
                                            m < b && (b = m),
                                            m > v && (v = m),
                                            _[g] = {
                                                x: d,
                                                y: m
                                            };
                                        for (p = isNaN(a) ? f + (y - f) * r : _[a].x || 0,
                                        h = isNaN(a) ? b + (v - b) * r : _[a].y || 0,
                                        y = 0,
                                        f = 1 / 0,
                                        g = 0; g < w; g++)
                                            d = _[g].x - p,
                                            m = h - _[g].y,
                                            t[g] = u = s ? Math.abs("y" === s ? m : d) : Math.sqrt(d * d + m * m),
                                            u > y && (y = u),
                                            u < f && (f = u);
                                        t.max = y - f,
                                        t.min = f,
                                        t.v = w = e.amount || e.each * w || 0,
                                        t.b = w < 0 ? i - w : i
                                    }
                                    return w = (t[o] - t.min) / t.max,
                                    t.b + (n ? n.getRatio(w) : w) * t.v
                                }
                            }({
                                from: e,
                                amount: a.stagger.amount
                            })
                        }
                        return 0 === a.duration ? gsap.set(n, a) : gsap.to(n, a)
                    }
                }
            }
        }
        ;
        const l = class extends class {
            constructor({container: e, options: t={}}) {
                this._enabled = !1,
                this._initialized = !1,
                e && t && (this._updateContainerElement(e),
                this._updateOptions(e, t),
                this._updateSplitTarget())
            }
            get enabled() {
                return this._enabled
            }
            set enabled(e) {
                this._enabled = e
            }
            get initialized() {
                return this._initialized
            }
            set initialized(e) {
                this._initialized = e
            }
            get containerElement() {
                return this._containerElement
            }
            set containerElement(e) {
                this._containerElement = e
            }
            _updateContainerElement(e) {
                this.containerElement = class {
                    static getElementByStringSelector(e, t=document) {
                        if ("string" == typeof e) {
                            const n = t.querySelector(e);
                            if (n && null !== n)
                                return n
                        }
                        return e
                    }
                    static getElementsInContainer(e, t) {
                        return "string" == typeof t && e && null !== e ? [...e.querySelectorAll(t)] : [...t]
                    }
                }
                .getElementByStringSelector(e)
            }
            get options() {
                return this._options
            }
            set options(e) {
                this._options = e
            }
            _updateOptions(e, t) {
                this.options = new i({
                    container: e,
                    attributeSelector: "data-arts-split-text-options",
                    options: t
                }).data
            }
            get matchMedia() {
                return this._matchMedia
            }
            set matchMedia(e) {
                this._matchMedia = e
            }
            get splitTarget() {
                return this._splitTarget
            }
            set splitTarget(e) {
                this._splitTarget = e
            }
            _updateSplitTarget() {
                const e = this.containerElement.children;
                e.length > 0 ? ([...e].forEach((e=>{
                    e instanceof HTMLElement && (e.matches("ul") || e.matches("ol")) && (this._wrapListElements(e),
                    e.dataset.artsSplitTextElement = "list")
                }
                )),
                this.splitTarget = [...e]) : this.splitTarget = [this.containerElement]
            }
            get splitInstance() {
                return this._splitInstance
            }
            set splitInstance(e) {
                this._splitInstance = e,
                this.containerElement.dataset.artsSplitTextReady = null === e ? "false" : "true"
            }
            _updateSplitInstance() {
                this.splitInstance = new SplitText(this.splitTarget,{
                    type: this.options.type,
                    reduceWhiteSpace: this.options.reduceWhiteSpace
                })
            }
            _markSplitTextElements() {
                "chars"in this.splitInstance && this.splitInstance.chars.length > 0 && this.splitInstance.chars.forEach((e=>{
                    e instanceof HTMLElement && "string" == typeof this.options.charClass && e.classList.add(this.options.charClass)
                }
                )),
                "words"in this.splitInstance && this.splitInstance.words.length > 0 && this.splitInstance.words.forEach((e=>{
                    e instanceof HTMLElement && "string" == typeof this.options.wordClass && e.classList.add(this.options.wordClass)
                }
                )),
                "lines"in this.splitInstance && this.splitInstance.lines.length > 0 && this.splitInstance.lines.forEach((e=>{
                    e instanceof HTMLElement && "string" == typeof this.options.lineClass && e.classList.add(this.options.lineClass)
                }
                ))
            }
            _wrapSplitTextElements() {
                if (this.options.wrap && "string" == typeof this.options.wrap) {
                    let e = "";
                    "string" == typeof this.options.wrap && (e = this.options.wrap.slice(0, -1).toLowerCase()),
                    this.splitInstance[this.options.wrap].forEach((t=>{
                        if (t instanceof HTMLElement) {
                            const n = document.createElement("div");
                            "string" == typeof this.options.wrapClass && n.classList.add(this.options.wrapClass),
                            n.classList.add(`js-arts-split-text__wrapper-${e}`),
                            this._wrap(t, n)
                        }
                    }
                    ))
                }
            }
            _wrapListElements(e) {
                [...e.querySelectorAll("li")].forEach((e=>{
                    if (e instanceof HTMLElement) {
                        const t = document.createElement("div");
                        t.dataset.artsSplitTextElement = "wrapperLi",
                        this._wrapInner(e, t)
                    }
                }
                ))
            }
            _wrap(e, t) {
                e.parentNode && (e.parentNode.insertBefore(t, e),
                t.appendChild(e))
            }
            _wrapInner(e, t) {
                for (e.appendChild(t); e.firstChild !== t; )
                    e.firstChild && t.appendChild(e.firstChild)
            }
            _handleDropCap() {
                if ("string" == typeof this.options.dropCapSelector) {
                    const e = this.containerElement.querySelectorAll(this.options.dropCapSelector);
                    e.length > 0 && [...e].forEach((e=>{
                        const t = e.innerHTML[0]
                          , n = e.innerHTML.slice(1, -1);
                        e.innerHTML = `<span data-arts-split-text-element="wrapperDropCap">${t}</span>${n}`
                    }
                    ))
                }
            }
            _set() {
                if ("artsSplitTextState"in this.containerElement.dataset && "string" == typeof this.containerElement.dataset.artsSplitTextState) {
                    const {animationName: e, selector: t, x: n, y: a, autoAlpha: i} = JSON.parse(decodeURIComponent(this.containerElement.dataset.artsSplitTextState))
                      , s = {
                        selector: t,
                        duration: 0,
                        x: n,
                        y: a,
                        autoAlpha: i
                    };
                    gsap.effects[e](this.containerElement, s)
                } else if (this.options.set && "type"in this.options.set && "string" == typeof this.options.set.type) {
                    const e = `hide${s(this.options.set.type)}`;
                    if (e in gsap.effects && "function" == typeof gsap.effects[e]) {
                        const t = {
                            [this.options.set.direction]: "number" == typeof this.options.set.distance ? `${this.options.set.distance}px` : this.options.set.distance,
                            duration: 0
                        };
                        "number" == typeof this.options.set.opacity && (t.opacity = this.options.set.opacity),
                        gsap.effects[e](this.containerElement, t)
                    }
                }
            }
        }
        {
            constructor(e, t={}) {
                super({
                    container: e,
                    options: t
                }),
                this.options.init && (this.options.matchMedia && !window.matchMedia(`${this.options.matchMedia}`).matches ? this.matchMedia = new r({
                    condition: this.options.matchMedia,
                    callbackMatch: this.init.bind(this)
                }) : this.init())
            }
            init() {
                this.initialized || (this.matchMedia && this.matchMedia.destroy(),
                this.options.matchMedia && (this.matchMedia = new r({
                    condition: this.options.matchMedia,
                    callbackMatch: this.init.bind(this),
                    callbackNoMatch: this.destroy.bind(this)
                })),
                this._handleDropCap(),
                this._updateSplitInstance(),
                this._markSplitTextElements(),
                this._wrapSplitTextElements(),
                this._set(),
                this.initialized = !0,
                this.enabled = !0)
            }
            destroy() {
                this.enabled = !1,
                this.initialized = !1,
                this.splitInstance && this.splitInstance.revert()
            }
        }
    }
    )(),
    this.ArtsSplitText = a.default
}
)();
