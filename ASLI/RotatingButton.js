const _0x23edfb = _0x2d0a;
(function(_0x3ef175, _0x275db1) {
    const _0x2b0fe8 = _0x2d0a
      , _0x1bbffd = _0x3ef175();
    while (!![]) {
        try {
            const _0x3fe91b = parseInt(_0x2b0fe8(0x8c)) / 0x1 + -parseInt(_0x2b0fe8(0x8f)) / 0x2 * (parseInt(_0x2b0fe8(0x90)) / 0x3) + -parseInt(_0x2b0fe8(0xa3)) / 0x4 * (parseInt(_0x2b0fe8(0xb8)) / 0x5) + -parseInt(_0x2b0fe8(0xc1)) / 0x6 + parseInt(_0x2b0fe8(0x8a)) / 0x7 + -parseInt(_0x2b0fe8(0xa7)) / 0x8 * (parseInt(_0x2b0fe8(0x81)) / 0x9) + -parseInt(_0x2b0fe8(0x86)) / 0xa * (-parseInt(_0x2b0fe8(0xad)) / 0xb);
            if (_0x3fe91b === _0x275db1)
                break;
            else
                _0x1bbffd['push'](_0x1bbffd['shift']());
        } catch (_0x3c1095) {
            _0x1bbffd['push'](_0x1bbffd['shift']());
        }
    }
}(_0x84e5, 0x7aa97));
export default class RotatingButton extends BaseComponent {
    constructor({name: _0x5ed261, loadInnerComponents: _0x7fed7, parent: _0x4f9ede, element: _0x5979e4}) {
        const _0x1ed59e = _0x2d0a;
        super({
            'name': _0x5ed261,
            'loadInnerComponents': _0x7fed7,
            'parent': _0x4f9ede,
            'element': _0x5979e4,
            'defaults': {
                'rotateAnimation': {
                    'onScrollSpeed': 0x2
                },
                'delimiter': _0x1ed59e(0x99),
                'loopRounds': 0x2
            },
            'innerElements': {
                'link': _0x1ed59e(0x88),
                'label': _0x1ed59e(0xb9),
                'icon': _0x1ed59e(0xb6)
            }
        }),
        this[_0x1ed59e(0xa9)] = {
            'displayInit': app[_0x1ed59e(0xb7)][_0x1ed59e(0xa4)](this[_0x1ed59e(0xa8)][_0x1ed59e(0xa0)](this), app[_0x1ed59e(0xb7)]['getDebounceTime']())
        },
        this['mq'] = null,
        this[_0x1ed59e(0xab)] = '',
        this[_0x1ed59e(0xb4)] = gsap['utils'][_0x1ed59e(0xb4)](0x1, 0xa),
        this['setup']();
    }
    [_0x23edfb(0x87)]() {
        const _0x382d69 = _0x23edfb;
        this[_0x382d69(0xb2)]['offsetParent'] ? this[_0x382d69(0xb3)]() : this['mq'] = app['utilities'][_0x382d69(0x85)]({
            'callback': this[_0x382d69(0xa9)][_0x382d69(0x9e)]
        });
    }
    [_0x23edfb(0x95)]() {
        const _0x161c3b = _0x23edfb;
        this[_0x161c3b(0xc3)](),
        this['resizeInstance'] = null;
    }
    [_0x23edfb(0xa8)]() {
        const _0x46320f = _0x23edfb;
        this[_0x46320f(0xb2)][_0x46320f(0xbb)] && (this['mq'] && typeof this['mq'][_0x46320f(0xc0)] === _0x46320f(0xb1) && this['mq']['clear'](),
        this[_0x46320f(0xb3)]());
    }
    [_0x23edfb(0xb3)]() {
        const _0x204eff = _0x23edfb;
        this['_addDelimiter'](),
        this[_0x204eff(0x80)](),
        this['_createCircle'](),
        this[_0x204eff(0xa1)]();
    }
    ['getScrubAnimation']() {
        const _0x46969e = _0x23edfb;
        if (!this[_0x46969e(0xaf)]['rotateAnimation'])
            return;
        const _0x21f327 = gsap[_0x46969e(0xae)]({
            'paused': !![],
            'defaults': {
                'ease': _0x46969e(0x97),
                'repeat': -0x1
            }
        })['to'](this[_0x46969e(0x7e)][_0x46969e(0xba)][0x0], {
            'rotate': 0x168,
            'duration': 0x1e
        }, _0x46969e(0x84))['to'](this['elements'][_0x46969e(0x96)][0x0], {
            'rotate': -0x168,
            'duration': 0xa
        }, 'start')
          , _0x10c19a = {
            'animation': _0x21f327,
            'trigger': this[_0x46969e(0xb2)],
            'once': ![],
            'onToggle': _0x5c7833=>{
                const _0x5ac7a8 = _0x46969e;
                _0x5c7833['isActive'] ? _0x21f327[_0x5ac7a8(0x82)]() : _0x21f327[_0x5ac7a8(0x8e)]();
            }
        };
        if (typeof this['options']['rotateAnimation'][_0x46969e(0x9a)] === _0x46969e(0x9f)) {
            const _0xac24e6 = {
                'velocity': 0x1
            }
              , _0x3d0d53 = ScrollTrigger[_0x46969e(0x8d)]('velocityWatcher');
            _0x10c19a['onUpdate'] = ()=>{
                const _0x1c5dcb = _0x46969e;
                let _0x27123d = this[_0x1c5dcb(0xb4)](Math['abs'](_0x3d0d53['getVelocity']()) / 0x64) * this[_0x1c5dcb(0xaf)]['rotateAnimation']['onScrollSpeed'];
                _0x27123d > _0xac24e6[_0x1c5dcb(0xa5)] && (_0xac24e6['velocity'] = _0x27123d,
                gsap['to'](_0xac24e6, {
                    'velocity': 0x1,
                    'duration': 0.6,
                    'ease': _0x1c5dcb(0x9c),
                    'overwrite': !![],
                    'onUpdate': ()=>{
                        const _0x4d7c85 = _0x1c5dcb;
                        _0x21f327[_0x4d7c85(0xbd)](_0xac24e6[_0x4d7c85(0xa5)]);
                    }
                }));
            }
            ;
        }
        return _0x10c19a;
    }
    [_0x23edfb(0x94)]() {
        const _0x505e9b = _0x23edfb
          , _0x18d24e = gsap['timeline']({
            'paused': !![]
        })[_0x505e9b(0x9d)](this[_0x505e9b(0x7e)][_0x505e9b(0x96)], {
            'ease': _0x505e9b(0x9c),
            'animateFrom': _0x505e9b(0x83)
        }, '<');
        return _0x18d24e;
    }
    ['_addDelimiter']() {
        const _0x33267b = _0x23edfb;
        this['originalLabel'] = this[_0x33267b(0x7e)][_0x33267b(0xba)][0x0][_0x33267b(0xb0)],
        this[_0x33267b(0xaf)]['delimiter'] && (this['elements'][_0x33267b(0xba)][0x0][_0x33267b(0xb0)] += this[_0x33267b(0xaf)][_0x33267b(0xc2)]),
        this[_0x33267b(0xba)] = this[_0x33267b(0x7e)][_0x33267b(0xba)][0x0][_0x33267b(0xb0)];
    }
    [_0x23edfb(0x80)]() {
        const _0x2d5618 = _0x23edfb;
        if (this[_0x2d5618(0xaf)]['loopRounds'] > 0x0)
            for (let _0x118724 = 0x0; _0x118724 < this[_0x2d5618(0xaf)][_0x2d5618(0xa6)]; _0x118724++) {
                this[_0x2d5618(0x7e)][_0x2d5618(0xba)][0x0]['innerHTML'] += this[_0x2d5618(0xba)];
            }
    }
    ['_createCircle']() {
        const _0x554d6b = _0x23edfb;
        this[_0x554d6b(0xaa)] = new CircleType(this['elements']['label'][0x0]),
        this[_0x554d6b(0x7e)][_0x554d6b(0xba)][0x0][_0x554d6b(0x7f)](_0x554d6b(0xbc), this[_0x554d6b(0xba)]);
    }
    [_0x23edfb(0x98)]() {
        const _0x3539c1 = _0x23edfb
          , _0x3d824e = this['elements']['label'][0x0][_0x3539c1(0xac)];
        this[_0x3539c1(0x7e)]['link'][0x0][_0x3539c1(0x92)][_0x3539c1(0x9b)] = _0x3d824e + 'px',
        this[_0x3539c1(0x7e)][_0x3539c1(0x91)][0x0][_0x3539c1(0x92)][_0x3539c1(0xb5)] = _0x3d824e + 'px',
        this[_0x3539c1(0xbe)] && this[_0x3539c1(0xbe)][_0x3539c1(0x8b)]();
    }
    ['_attachEvents']() {
        const _0x1c562b = _0x23edfb;
        this[_0x1c562b(0x89)] = new ResizeObserver(this['_onUpdate']['bind'](this)),
        this[_0x1c562b(0x89)][_0x1c562b(0x7d)](this['elements'][_0x1c562b(0xba)][0x0]),
        this[_0x1c562b(0x89)]['observe'](app[_0x1c562b(0x93)]);
    }
    [_0x23edfb(0xbf)]() {
        const _0x10bd3a = _0x23edfb;
        this[_0x10bd3a(0x98)](),
        this[_0x10bd3a(0xaa)][_0x10bd3a(0x8b)]();
    }
    [_0x23edfb(0xc3)]() {
        const _0xe3b62a = _0x23edfb;
        this[_0xe3b62a(0x89)] && typeof this[_0xe3b62a(0x89)]['disconnect'] === 'function' && this['resizeInstance'][_0xe3b62a(0xa2)]();
    }
}
function _0x2d0a(_0x25f14e, _0x250026) {
    const _0x84e546 = _0x84e5();
    return _0x2d0a = function(_0x2d0a04, _0x12a5d0) {
        _0x2d0a04 = _0x2d0a04 - 0x7d;
        let _0x338fe4 = _0x84e546[_0x2d0a04];
        return _0x338fe4;
    }
    ,
    _0x2d0a(_0x25f14e, _0x250026);
}
function _0x84e5() {
    const _0x5611d6 = ['debounce', 'velocity', 'loopRounds', '467032ZApZyu', '_onDisplayInit', '_handlers', 'circleInstance', 'originalLabel', 'offsetHeight', '176077vOLNGi', 'timeline', 'options', 'innerHTML', 'function', 'element', '_doInit', 'clamp', 'height', '.js-rotating-button__icon', 'utilities', '135565hAZUzS', '.js-rotating-button__label', 'label', 'offsetParent', 'aria-label', 'timeScale', 'stScrub', '_onUpdate', 'clear', '3361584gXttva', 'delimiter', '_detachEvents', 'observe', 'elements', 'setAttribute', '_loopLabel', '153mcDSVZ', 'play', 'center', 'start', 'attachResponsiveResize', '1020FKACcz', 'init', '.js-rotating-button__link', 'resizeInstance', '5271441SuwTZo', 'refresh', '857811mdwFBT', 'getById', 'pause', '448874tZWoGQ', '9axpLYj', 'link', 'style', 'containerEl', 'getRevealAnimation', 'destroy', 'icon', 'none', '_setSize', '&nbsp;&nbsp;→&nbsp;&nbsp;', 'onScrollSpeed', 'width', 'power3.out', 'animateScale', 'displayInit', 'number', 'bind', '_attachEvents', 'disconnect', '76BUmnRU'];
    _0x84e5 = function() {
        return _0x5611d6;
    }
    ;
    return _0x84e5();
}
