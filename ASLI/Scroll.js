function _0x2151(_0x251e4d, _0x3e33fd) {
    const _0x180718 = _0x1807();
    return _0x2151 = function(_0x2151c6, _0x910b5) {
        _0x2151c6 = _0x2151c6 - 0x11e;
        let _0x160b98 = _0x180718[_0x2151c6];
        return _0x160b98;
    }
    ,
    _0x2151(_0x251e4d, _0x3e33fd);
}
const _0x3fac04 = _0x2151;
(function(_0x25727a, _0x3fbbc3) {
    const _0x54c594 = _0x2151
      , _0x3fdefb = _0x25727a();
    while (!![]) {
        try {
            const _0x2ba53c = -parseInt(_0x54c594(0x150)) / 0x1 + parseInt(_0x54c594(0x152)) / 0x2 + parseInt(_0x54c594(0x125)) / 0x3 + parseInt(_0x54c594(0x120)) / 0x4 * (-parseInt(_0x54c594(0x123)) / 0x5) + -parseInt(_0x54c594(0x133)) / 0x6 * (-parseInt(_0x54c594(0x131)) / 0x7) + parseInt(_0x54c594(0x129)) / 0x8 * (parseInt(_0x54c594(0x156)) / 0x9) + -parseInt(_0x54c594(0x161)) / 0xa;
            if (_0x2ba53c === _0x3fbbc3)
                break;
            else
                _0x3fdefb['push'](_0x3fdefb['shift']());
        } catch (_0x278362) {
            _0x3fdefb['push'](_0x3fdefb['shift']());
        }
    }
}(_0x1807, 0xdb912));
function _0x1807() {
    const _0x47db19 = ['55638rlmcKA', 'target', 'offsetTop', 'querySelector', '_onAnimationFrameGSAP', 'remove', 'innerHeight', '_handlers', 'animationFrameGSAP', 'getById', '_setSmoothScroll', '10409560upbMij', 'setup', '.has-horizontal-scroll', 'add', 'useGSAPRaf', 'lastIndexOf', 'innerWidth', 'destroy', 'elementor-action', '10680wMviCD', 'transitionEnd', '_attachEvents', '2155tEzdYA', '_createVelocityWatcher', '4438146HmnzGd', '_getPageElementAnchor', 'getAttribute', '_raf', '1864Ihqcte', 'animationFrame', 'undefined', '_detachEvents', 'instance', '_getAnchorTarget', 'no-smooth-scroll', 'scrollTo', '1603iGAWVG', 'utilities', '21954bvrqSR', 'create', 'documentElement', 'slice', 'easing', 'element', 'arts/barba/transition/end', 'smoothScroll', 'click', '_onClick', 'preventDefault', 'init', 'includes', 'maxScroll', 'href', 'removeEventListener', 'raf', 'isEnabledOption', 'classList', 'start', 'html', 'bind', 'options', 'reset', '#!scroll-down', 'duration', '_onAnimationFrame', 'velocityWatcher', 'has-smooth-scroll', '934992SIgKSB', 'ticker', '536730AcveZo', 'addEventListener', '_attachAJAXListeners', 'closest'];
    _0x1807 = function() {
        return _0x47db19;
    }
    ;
    return _0x1807();
}
export default class Scroll extends BaseComponent {
    constructor({name: _0x4eee6b, loadInnerComponents: _0x14e507, parent: _0x3fd6c3, element: _0xbd6051, options: _0x15f2d7}) {
        const _0x363de8 = _0x2151;
        super({
            'name': _0x4eee6b,
            'loadInnerComponents': _0x14e507,
            'parent': _0x3fd6c3,
            'element': _0xbd6051,
            'defaults': _0x15f2d7
        }),
        this[_0x363de8(0x15d)] = {
            'click': this[_0x363de8(0x13c)]['bind'](this),
            'animationFrame': this[_0x363de8(0x14d)][_0x363de8(0x148)](this),
            'animationFrameGSAP': this[_0x363de8(0x15a)][_0x363de8(0x148)](this),
            'transitionEnd': this[_0x363de8(0x14a)][_0x363de8(0x148)](this)
        },
        this[_0x363de8(0x128)] = 0x0,
        this['instance'] = null,
        this[_0x363de8(0x162)](),
        this['_attachAJAXListeners']();
    }
    [_0x3fac04(0x13e)]() {
        const _0x10ba03 = _0x3fac04;
        this[_0x10ba03(0x124)](),
        this['_initSmoothScroll'](),
        this[_0x10ba03(0x122)]();
    }
    ['reset']() {
        const _0x38baae = _0x3fac04;
        this[_0x38baae(0x12d)] && (this['instance']['targetScroll'] = 0x0,
        this[_0x38baae(0x12d)][_0x38baae(0x146)]()),
        this[_0x38baae(0x12c)](),
        this[_0x38baae(0x138)] = app['containerEl'],
        this[_0x38baae(0x122)]();
    }
    [_0x3fac04(0x11e)]() {
        const _0x23ede8 = _0x3fac04;
        this['_detachEvents'](),
        this['instance'] && (this['instance'][_0x23ede8(0x11e)](),
        !!this['options'][_0x23ede8(0x165)] ? gsap[_0x23ede8(0x151)][_0x23ede8(0x15b)](this[_0x23ede8(0x15d)][_0x23ede8(0x15e)]) : (cancelAnimationFrame(this['_raf']),
        this[_0x23ede8(0x128)] = 0x0),
        this[_0x23ede8(0x12d)] = undefined);
    }
    ['_initSmoothScroll']() {
        const _0x34b824 = _0x3fac04
          , _0x372d6d = typeof Lenis !== _0x34b824(0x12b) && app[_0x34b824(0x132)][_0x34b824(0x144)](app[_0x34b824(0x149)][_0x34b824(0x13a)]) && !this[_0x34b824(0x12d)];
        _0x372d6d && (this['instance'] = new Lenis({
            'duration': this[_0x34b824(0x149)][_0x34b824(0x14c)],
            'easing': this[_0x34b824(0x149)][_0x34b824(0x137)]
        }),
        !!this[_0x34b824(0x149)]['useGSAPRaf'] ? gsap['ticker']['add'](this[_0x34b824(0x15d)][_0x34b824(0x15e)], ![], !![]) : this[_0x34b824(0x128)] = requestAnimationFrame(this[_0x34b824(0x15d)]['animationFrame'])),
        this[_0x34b824(0x160)](_0x372d6d);
    }
    ['_setSmoothScroll'](_0x2016c1=![]) {
        const _0x59c2c4 = _0x3fac04;
        _0x2016c1 ? (document[_0x59c2c4(0x135)][_0x59c2c4(0x145)][_0x59c2c4(0x164)](_0x59c2c4(0x14f)),
        document[_0x59c2c4(0x135)][_0x59c2c4(0x145)]['remove']('no-smooth-scroll')) : (document[_0x59c2c4(0x135)]['classList'][_0x59c2c4(0x15b)](_0x59c2c4(0x14f)),
        document[_0x59c2c4(0x135)]['classList'][_0x59c2c4(0x164)](_0x59c2c4(0x12f)));
    }
    [_0x3fac04(0x14d)](_0xd8cdb3) {
        const _0x461b4c = _0x3fac04;
        this[_0x461b4c(0x12d)] && this[_0x461b4c(0x12d)][_0x461b4c(0x143)](_0xd8cdb3),
        requestAnimationFrame(this['_handlers'][_0x461b4c(0x12a)]);
    }
    [_0x3fac04(0x15a)](_0x523aa1, _0x115a8f, _0x3c6c39) {
        const _0xa004ff = _0x3fac04;
        this[_0xa004ff(0x12d)] && this[_0xa004ff(0x12d)][_0xa004ff(0x143)](_0x523aa1 * 0x3e8);
    }
    [_0x3fac04(0x154)]() {
        const _0x2567a4 = _0x3fac04;
        document[_0x2567a4(0x153)](_0x2567a4(0x139), this[_0x2567a4(0x15d)][_0x2567a4(0x121)]);
    }
    ['_attachEvents']() {
        const _0x2eff63 = _0x3fac04;
        this[_0x2eff63(0x138)]['addEventListener']('click', this[_0x2eff63(0x15d)][_0x2eff63(0x13b)]);
    }
    ['_detachEvents']() {
        const _0x1470d9 = _0x3fac04;
        this[_0x1470d9(0x138)][_0x1470d9(0x142)](_0x1470d9(0x13b), this[_0x1470d9(0x15d)][_0x1470d9(0x13b)]);
    }
    ['_onClick'](_0x71013d) {
        const _0x46b55b = _0x3fac04
          , _0x2aa521 = _0x71013d[_0x46b55b(0x157)];
        if (_0x2aa521 instanceof HTMLElement) {
            const _0x340515 = _0x2aa521['closest']('a')
              , _0x2b7f30 = this[_0x46b55b(0x126)](_0x340515);
            if (_0x2b7f30)
                _0x71013d[_0x46b55b(0x13d)](),
                app['utilities'][_0x46b55b(0x130)]({
                    'target': _0x2b7f30
                });
            else {
                if (_0x340515 && _0x340515[_0x46b55b(0x127)](_0x46b55b(0x141)) === _0x46b55b(0x14b)) {
                    _0x71013d[_0x46b55b(0x13d)]();
                    let _0x4895d4;
                    const _0x58389c = _0x340515[_0x46b55b(0x155)](_0x46b55b(0x163));
                    if (_0x58389c) {
                        const _0x5643fd = _0x58389c[_0x46b55b(0x159)]('.js-horizontal-scroll__section');
                        _0x5643fd ? _0x4895d4 = _0x58389c[_0x46b55b(0x158)] + _0x5643fd['offsetWidth'] : _0x4895d4 = _0x58389c[_0x46b55b(0x158)] + window[_0x46b55b(0x167)];
                    } else
                        _0x4895d4 = window[_0x46b55b(0x15c)];
                    app['utilities']['scrollTo']({
                        'target': _0x4895d4
                    });
                } else
                    _0x340515 && _0x340515[_0x46b55b(0x127)](_0x46b55b(0x141)) === '#!scroll-up' && (_0x71013d[_0x46b55b(0x13d)](),
                    app[_0x46b55b(0x132)]['scrollTo']({
                        'target': 0x0
                    }));
            }
        }
    }
    [_0x3fac04(0x126)](_0x215cf7) {
        const _0x4546e8 = _0x3fac04;
        if (!_0x215cf7)
            return null;
        const _0x4b4813 = _0x215cf7[_0x4546e8(0x127)](_0x4546e8(0x141));
        if (this['_isValidAnchor'](_0x4b4813))
            return this['_getAnchorTarget'](_0x4b4813);
        return null;
    }
    ['_isValidAnchor'](_0x4c391f) {
        const _0x527d0a = _0x3fac04;
        return _0x4c391f && _0x4c391f !== '#' && !_0x4c391f[_0x527d0a(0x13f)](_0x527d0a(0x11f));
    }
    [_0x3fac04(0x12e)](_0x258bba) {
        const _0x469554 = _0x3fac04
          , _0x27ccff = _0x258bba[_0x469554(0x166)]('#');
        let _0x2b680e;
        return _0x27ccff !== -0x1 && (_0x2b680e = _0x258bba[_0x469554(0x136)](_0x27ccff + 0x1)),
        _0x2b680e ? document['getElementById'](_0x2b680e) : null;
    }
    [_0x3fac04(0x124)]() {
        const _0x475612 = _0x3fac04
          , _0x3349dc = _0x475612(0x14e);
        !ScrollTrigger[_0x475612(0x15f)](_0x3349dc) && ScrollTrigger[_0x475612(0x134)]({
            'id': _0x475612(0x14e),
            'start': 0x0,
            'end': ()=>ScrollTrigger[_0x475612(0x140)](_0x475612(0x147))
        });
    }
}
