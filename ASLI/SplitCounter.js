const _0x5d864e = _0x60f1;
function _0x60f1(_0x499ede, _0x49819f) {
    const _0x47c55d = _0x47c5();
    return _0x60f1 = function(_0x60f1b2, _0x1bedb6) {
        _0x60f1b2 = _0x60f1b2 - 0x8f;
        let _0xcc9787 = _0x47c55d[_0x60f1b2];
        return _0xcc9787;
    }
    ,
    _0x60f1(_0x499ede, _0x49819f);
}
function _0x47c5() {
    const _0x22afdb = ['innerHTML', 'progress', 'forEach', '74475mgBxUE', 'removeAttribute', '_attachEvents', 'timeline', 'span', 'utilities', 'options', 'clear', 'set', 'split', 'absolute', 'length', 'width,height', 'createElement', 'element', '_addNumbers', '_onResize', 'animating', 'debounce', 'dataset', '_updateNumber', '_detachEvents', 'number', 'filter', 'resizeInstance', '84tjARAg', '981cqUoWx', 'elements', '_setNumbers', '_removeNumbers', '1346163jVwCKN', 'getDebounceTime', '-103%', 'style', 'appendChild', '2SoopnQ', 'lanes', 'push', 'current', 'toString', '_current', '5249419sRJQtu', '10993zFmQMo', '13167640JfOhHb', '1448120NeqOZY', 'offsetWidth', '103%', '.js-split-counter__lane', 'bind', '1928kZMapV', '100%', '_getDigitsArrayFromNumber', 'stagger', 'offsetHeight', 'observe', 'destroy'];
    _0x47c5 = function() {
        return _0x22afdb;
    }
    ;
    return _0x47c5();
}
(function(_0x4b854b, _0x360f6a) {
    const _0x14c5b9 = _0x60f1
      , _0xf8b646 = _0x4b854b();
    while (!![]) {
        try {
            const _0x4aeda9 = parseInt(_0x14c5b9(0xa2)) / 0x1 * (parseInt(_0x14c5b9(0x9b)) / 0x2) + parseInt(_0x14c5b9(0x96)) / 0x3 + parseInt(_0x14c5b9(0xa4)) / 0x4 + parseInt(_0x14c5b9(0xb3)) / 0x5 * (parseInt(_0x14c5b9(0x91)) / 0x6) + parseInt(_0x14c5b9(0xa1)) / 0x7 + -parseInt(_0x14c5b9(0xa9)) / 0x8 * (parseInt(_0x14c5b9(0x92)) / 0x9) + -parseInt(_0x14c5b9(0xa3)) / 0xa;
            if (_0x4aeda9 === _0x360f6a)
                break;
            else
                _0xf8b646['push'](_0xf8b646['shift']());
        } catch (_0x3a1bef) {
            _0xf8b646['push'](_0xf8b646['shift']());
        }
    }
}(_0x47c5, 0x6aba6));
export default class SplitCounter extends BaseComponent {
    constructor({name: _0x36e5bf, loadInnerComponents: _0x4d8798, parent: _0x22b422, element: _0x290198}) {
        const _0x3cbf3c = _0x60f1;
        super({
            'name': _0x36e5bf,
            'loadInnerComponents': _0x4d8798,
            'parent': _0x22b422,
            'element': _0x290198,
            'defaults': {
                'stagger': 0.02
            },
            'innerElements': {
                'lanes': _0x3cbf3c(0xa7)
            }
        }),
        this['_handlers'] = {
            'resize': this['_onResize']['bind'](this)
        },
        this[_0x3cbf3c(0xa0)] = 0x0,
        this[_0x3cbf3c(0x9c)] = [],
        this['tl'] = gsap[_0x3cbf3c(0xb6)]({
            'defaults': {
                'ease': 'expo.inOut',
                'duration': 0.6
            }
        }),
        this['setup']();
    }
    ['init']() {
        const _0x50bfc4 = _0x60f1;
        this[_0x50bfc4(0xc2)](),
        this[_0x50bfc4(0x94)](),
        this[_0x50bfc4(0xb5)]();
    }
    [_0x5d864e(0xaf)]() {
        const _0x36af78 = _0x5d864e;
        this[_0x36af78(0xc8)](),
        this['tl'][_0x36af78(0xba)]()['kill'](),
        this[_0x36af78(0x95)]();
    }
    [_0x5d864e(0xb5)]() {
        const _0x41c433 = _0x5d864e;
        this[_0x41c433(0x90)] = new ResizeObserver(app[_0x41c433(0xb8)][_0x41c433(0xc5)](this[_0x41c433(0xc3)][_0x41c433(0xa8)](this), app[_0x41c433(0xb8)][_0x41c433(0x97)]())),
        this[_0x41c433(0x9c)]['forEach']((_0x36b1fd,_0x54a7f7)=>{
            _0x36b1fd['forEach'](_0x5e873b=>{
                const _0x2d5aff = _0x60f1;
                this[_0x2d5aff(0x90)][_0x2d5aff(0xae)](_0x5e873b[_0x2d5aff(0xc1)]);
            }
            );
        }
        ),
        this['resizeInstance']['observe'](this['element']);
    }
    [_0x5d864e(0xc8)]() {
        const _0x34777c = _0x5d864e;
        this[_0x34777c(0x90)] && this[_0x34777c(0x90)]['disconnect']();
    }
    [_0x5d864e(0xc3)]() {
        const _0x40a228 = _0x5d864e;
        this[_0x40a228(0x94)]();
    }
    [_0x5d864e(0xc2)]() {
        const _0x52dd = _0x5d864e;
        this[_0x52dd(0x93)][_0x52dd(0x9c)][_0x52dd(0xb2)]((_0x5c4d6c,_0x26139b)=>{
            const _0x585f40 = _0x52dd;
            let _0x2b24c4 = 0x0
              , _0x493d29 = 0x0;
            this[_0x585f40(0x9c)][_0x26139b] = [];
            for (let _0x6c3902 = 0x0; _0x6c3902 <= 0x9; _0x6c3902++) {
                const _0x3e105e = document[_0x585f40(0xc0)](_0x585f40(0xb7))
                  , _0x3add26 = _0x6c3902[_0x585f40(0x9f)]();
                _0x3e105e[_0x585f40(0xc6)][_0x585f40(0xc9)] = _0x3add26,
                _0x3e105e[_0x585f40(0xb0)] = _0x3add26,
                _0x5c4d6c[_0x585f40(0x9a)](_0x3e105e),
                _0x3e105e[_0x585f40(0xa5)] > _0x2b24c4 && (_0x2b24c4 = _0x3e105e[_0x585f40(0xa5)]),
                _0x3e105e[_0x585f40(0xad)] > _0x493d29 && (_0x493d29 = _0x3e105e[_0x585f40(0xad)]),
                gsap[_0x585f40(0xbb)](_0x3e105e, {
                    'position': _0x585f40(0xbd),
                    'y': _0x6c3902 === 0x0 ? '0%' : _0x585f40(0xaa)
                }),
                this[_0x585f40(0x9c)][_0x26139b][_0x585f40(0x9d)]({
                    'element': _0x3e105e,
                    'digit': _0x6c3902,
                    'animating': ![],
                    'progress': _0x6c3902 === 0x0 ? 0x1 : 0x0
                });
            }
            gsap[_0x585f40(0xbb)](this[_0x585f40(0x93)][_0x585f40(0x9c)][_0x26139b], {
                'width': _0x2b24c4,
                'height': _0x493d29
            });
        }
        );
    }
    [_0x5d864e(0x95)]() {
        const _0x435b6f = _0x5d864e;
        this[_0x435b6f(0x93)][_0x435b6f(0x9c)][_0x435b6f(0xb2)]((_0x166efd,_0x2cde99)=>{
            const _0x89137e = _0x435b6f;
            _0x166efd[_0x89137e(0xb0)] = '',
            _0x166efd[_0x89137e(0xb4)](_0x89137e(0x99)),
            this['lanes'][_0x2cde99] = [];
        }
        );
    }
    [_0x5d864e(0x94)]() {
        const _0x398c3c = _0x5d864e;
        this[_0x398c3c(0x9c)]['forEach']((_0x27d7af,_0x174a21)=>{
            const _0x4fa846 = _0x398c3c;
            let _0x492775 = 0x0
              , _0x2ae5c8 = 0x0;
            gsap[_0x4fa846(0xbb)](this['elements'][_0x4fa846(0x9c)][_0x174a21], {
                'clearProps': _0x4fa846(0xbf)
            }),
            _0x27d7af[_0x4fa846(0xb2)](_0x47dd6c=>{
                const _0x5d737e = _0x4fa846;
                _0x47dd6c[_0x5d737e(0xc1)][_0x5d737e(0xa5)] > _0x492775 && (_0x492775 = _0x47dd6c[_0x5d737e(0xc1)]['offsetWidth']),
                _0x47dd6c[_0x5d737e(0xc1)][_0x5d737e(0xad)] > _0x2ae5c8 && (_0x2ae5c8 = _0x47dd6c[_0x5d737e(0xc1)][_0x5d737e(0xad)]);
            }
            ),
            gsap[_0x4fa846(0xbb)](this[_0x4fa846(0x93)][_0x4fa846(0x9c)][_0x174a21], {
                'width': _0x492775,
                'height': _0x2ae5c8
            });
        }
        );
    }
    get[_0x5d864e(0x9e)]() {
        const _0x204593 = _0x5d864e;
        return this[_0x204593(0xa0)];
    }
    set[_0x5d864e(0x9e)](_0x43e75d) {
        const _0x4e0f4f = _0x5d864e;
        _0x43e75d !== this[_0x4e0f4f(0x9e)] && (this['tl'][_0x4e0f4f(0xba)](),
        this['_updateNumber'](_0x43e75d)),
        this[_0x4e0f4f(0xa0)] = _0x43e75d;
    }
    [_0x5d864e(0xc7)](_0x471e2f) {
        const _0x23bf97 = _0x5d864e
          , _0x11f6e7 = typeof this['options'][_0x23bf97(0xac)] === _0x23bf97(0xc9) ? '<' + this[_0x23bf97(0xb9)]['stagger'] : '<'
          , _0x220ffc = this
          , _0xde7be8 = this[_0x23bf97(0xab)](this[_0x23bf97(0x9e)])
          , _0x58dabe = this[_0x23bf97(0xab)](_0x471e2f);
        _0x471e2f === null ? _0xde7be8['forEach']((_0x4195ba,_0x280dd3)=>{
            const _0x3a0bea = _0x23bf97;
            this['tl']['to'](this[_0x3a0bea(0x9c)][_0x280dd3][_0xde7be8[_0x280dd3]][_0x3a0bea(0xc1)], {
                'y': '-103%'
            }, _0x11f6e7);
        }
        ) : _0xde7be8[_0x23bf97(0xb2)]((_0x13fbd8,_0x41dd46)=>{
            const _0x22ee1b = _0x23bf97;
            if (_0xde7be8[_0x41dd46] !== _0x58dabe[_0x41dd46]) {
                const _0x1f1220 = this[_0x22ee1b(0x9c)][_0x41dd46][_0x22ee1b(0x8f)](_0x54ac64=>!!_0x54ac64['animating']);
                _0x1f1220[_0x22ee1b(0xbe)] && _0x1f1220[_0x22ee1b(0xb2)](_0x42e6af=>{
                    const _0x79a547 = _0x22ee1b
                      , _0x30d727 = _0x42e6af[_0x79a547(0xb1)];
                    this['tl']['to'](_0x42e6af[_0x79a547(0xc1)], {
                        'y': _0x30d727 < 0x1 && _0x30d727 > 0.5 ? '-103%' : _0x79a547(0xa6),
                        'onStart': ()=>{
                            const _0x23debc = _0x79a547;
                            _0x42e6af[_0x23debc(0xc4)] = !![];
                        }
                        ,
                        'onUpdate': function() {
                            const _0x1171db = _0x79a547;
                            _0x42e6af[_0x1171db(0xb1)] = this['progress']();
                        },
                        'onComplete': ()=>{
                            const _0xad77c = _0x79a547;
                            _0x42e6af[_0xad77c(0xc4)] = ![],
                            _0x42e6af['progress'] = 0x0,
                            gsap[_0xad77c(0xbb)](_0x42e6af['element'], {
                                'y': _0xad77c(0xa6)
                            });
                        }
                    }, _0x11f6e7);
                }
                );
                const _0x4d103d = this[_0x22ee1b(0x9c)][_0x41dd46][_0xde7be8[_0x41dd46]]['progress'];
                this['tl']['to'](this['lanes'][_0x41dd46][_0xde7be8[_0x41dd46]]['element'], {
                    'y': _0x4d103d < 0.5 && _0x4d103d !== 0x0 ? _0x22ee1b(0xa6) : _0x22ee1b(0x98),
                    'onStart': ()=>{
                        const _0x1c0250 = _0x22ee1b;
                        this[_0x1c0250(0x9c)][_0x41dd46][_0xde7be8[_0x41dd46]][_0x1c0250(0xc4)] = !![];
                    }
                    ,
                    'onUpdate': function() {
                        const _0x21ced4 = _0x22ee1b;
                        _0x220ffc[_0x21ced4(0x9c)][_0x41dd46][_0xde7be8[_0x41dd46]][_0x21ced4(0xb1)] = this[_0x21ced4(0xb1)]();
                    },
                    'onComplete': ()=>{
                        const _0x5852f7 = _0x22ee1b;
                        this[_0x5852f7(0x9c)][_0x41dd46][_0xde7be8[_0x41dd46]][_0x5852f7(0xc4)] = ![],
                        gsap['set'](this['lanes'][_0x41dd46][_0xde7be8[_0x41dd46]]['element'], {
                            'y': '103%'
                        }),
                        this[_0x5852f7(0x9c)][_0x41dd46][_0xde7be8[_0x41dd46]][_0x5852f7(0xb1)] = 0x0;
                    }
                }, _0x11f6e7)['to'](this[_0x22ee1b(0x9c)][_0x41dd46][_0x58dabe[_0x41dd46]][_0x22ee1b(0xc1)], {
                    'y': '0%',
                    'onStart': ()=>{
                        const _0x10429b = _0x22ee1b;
                        this[_0x10429b(0x9c)][_0x41dd46][_0x58dabe[_0x41dd46]][_0x10429b(0xc4)] = !![];
                    }
                    ,
                    'onUpdate': function() {
                        const _0xff3f9c = _0x22ee1b;
                        _0x220ffc['lanes'][_0x41dd46][_0x58dabe[_0x41dd46]][_0xff3f9c(0xb1)] = this[_0xff3f9c(0xb1)]();
                    },
                    'onComplete': ()=>{
                        const _0x31e933 = _0x22ee1b;
                        this[_0x31e933(0x9c)][_0x41dd46][_0x58dabe[_0x41dd46]][_0x31e933(0xc4)] = ![];
                    }
                }, _0x11f6e7);
            }
        }
        );
    }
    ['_getDigitsArrayFromNumber'](_0x154d94) {
        const _0x2d81ac = _0x5d864e;
        return _0x154d94 < 0xa ? [0x0, _0x154d94] : _0x154d94[_0x2d81ac(0x9f)]()[_0x2d81ac(0xbc)]('')['map'](Number);
    }
}
