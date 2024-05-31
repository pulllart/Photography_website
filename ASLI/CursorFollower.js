function _0x2755(_0x5e8568, _0x19dcbb) {
    var _0x1422e4 = _0x1422();
    return _0x2755 = function(_0x2755b4, _0x33544e) {
        _0x2755b4 = _0x2755b4 - 0x18f;
        var _0x61ba10 = _0x1422e4[_0x2755b4];
        return _0x61ba10;
    }
    ,
    _0x2755(_0x5e8568, _0x19dcbb);
}
var _0x1e2c69 = _0x2755;
(function(_0x53d415, _0x4a666a) {
    var _0x2f2c07 = _0x2755
      , _0x251989 = _0x53d415();
    while (!![]) {
        try {
            var _0x544851 = parseInt(_0x2f2c07(0x1ad)) / 0x1 * (parseInt(_0x2f2c07(0x19b)) / 0x2) + -parseInt(_0x2f2c07(0x197)) / 0x3 * (parseInt(_0x2f2c07(0x193)) / 0x4) + -parseInt(_0x2f2c07(0x19e)) / 0x5 + -parseInt(_0x2f2c07(0x1aa)) / 0x6 * (-parseInt(_0x2f2c07(0x19a)) / 0x7) + -parseInt(_0x2f2c07(0x195)) / 0x8 * (-parseInt(_0x2f2c07(0x1b1)) / 0x9) + -parseInt(_0x2f2c07(0x18f)) / 0xa + parseInt(_0x2f2c07(0x19c)) / 0xb;
            if (_0x544851 === _0x4a666a)
                break;
            else
                _0x251989['push'](_0x251989['shift']());
        } catch (_0x57fb41) {
            _0x251989['push'](_0x251989['shift']());
        }
    }
}(_0x1422, 0x68f83));
function _0x1422() {
    var _0x3db77c = ['10594vVkmit', '5359167RUQCjD', 'element', '2259540mYlNSh', 'setLoading', 'arts/barba/transition/start', '_onTransitionEnd', 'bind', 'setup', '_createCursorFollower', 'addEventListener', 'delayedCall', 'reset', 'transitionEnd', 'update', '2621544TQUUGF', 'transitionStart', '_onTransitionStart', '46WpQYaj', 'arts/barba/transition/end', 'init', 'options', '1204245BawzfD', '2472270NFfYLO', '_setLoading', 'instance', 'removeEventListener', '344996UpKUvJ', 'destroy', '8IrqNjp', '_attachEvents', '6azndjS', '_detachEvents', '_handlers', '7NPTpTr'];
    _0x1422 = function() {
        return _0x3db77c;
    }
    ;
    return _0x1422();
}
export default class CursorFollower extends BaseComponent {
    constructor({name: _0xcb1762, loadInnerComponents: _0x43225a, parent: _0x5594c8, element: _0x2c1dd1, options: _0x25e06f}) {
        var _0x41e850 = _0x2755;
        super({
            'name': _0xcb1762,
            'loadInnerComponents': _0x43225a,
            'parent': _0x5594c8,
            'element': _0x2c1dd1,
            'defaults': _0x25e06f,
            'innerElements': {}
        }),
        this[_0x41e850(0x199)] = {
            'transitionStart': this[_0x41e850(0x1ac)][_0x41e850(0x1a2)](this),
            'transitionEnd': this[_0x41e850(0x1a1)]['bind'](this)
        },
        this[_0x41e850(0x1a3)]();
    }
    [_0x1e2c69(0x1af)]() {
        var _0x5c1efc = _0x1e2c69;
        this[_0x5c1efc(0x1a4)](),
        this[_0x5c1efc(0x196)]();
    }
    [_0x1e2c69(0x194)]() {
        var _0x455c78 = _0x1e2c69;
        this[_0x455c78(0x198)](),
        this[_0x455c78(0x191)][_0x455c78(0x194)]();
    }
    [_0x1e2c69(0x198)]() {
        var _0x18761f = _0x1e2c69;
        document[_0x18761f(0x192)](_0x18761f(0x1a0), this[_0x18761f(0x199)]['transitionStart']),
        document['removeEventListener'](_0x18761f(0x1ae), this[_0x18761f(0x199)][_0x18761f(0x1a8)]);
    }
    [_0x1e2c69(0x196)]() {
        var _0x3cef1f = _0x1e2c69;
        document[_0x3cef1f(0x1a5)](_0x3cef1f(0x1a0), this[_0x3cef1f(0x199)][_0x3cef1f(0x1ab)]),
        document['addEventListener'](_0x3cef1f(0x1ae), this[_0x3cef1f(0x199)][_0x3cef1f(0x1a8)]);
    }
    [_0x1e2c69(0x1a9)]() {
        var _0x14da67 = _0x1e2c69;
        this[_0x14da67(0x191)][_0x14da67(0x1a9)]();
    }
    ['_createCursorFollower']() {
        var _0x396692 = _0x1e2c69;
        this['instance'] = new ArtsCursorFollower(this[_0x396692(0x19d)],this[_0x396692(0x1b0)]);
    }
    [_0x1e2c69(0x1ac)]() {
        var _0x1640f2 = _0x1e2c69;
        this[_0x1640f2(0x190)](!![]);
    }
    ['_onTransitionEnd']() {
        var _0x24b445 = _0x1e2c69;
        gsap[_0x24b445(0x1a6)](0.3, ()=>{
            var _0x393924 = _0x24b445;
            this[_0x393924(0x190)](![]);
        }
        );
    }
    [_0x1e2c69(0x190)](_0x105bfd=!![]) {
        var _0x3ce924 = _0x1e2c69;
        this[_0x3ce924(0x191)] && (_0x105bfd ? this['instance'][_0x3ce924(0x1a7)]() : this[_0x3ce924(0x191)][_0x3ce924(0x1a9)](),
        this['instance'][_0x3ce924(0x1a7)](),
        this['instance'][_0x3ce924(0x19f)](_0x105bfd));
    }
}
