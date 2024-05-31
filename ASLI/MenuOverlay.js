const _0x3860fb = _0x5a70;
(function(_0x3ecd0b, _0xe2482c) {
    const _0x262959 = _0x5a70
      , _0x121491 = _0x3ecd0b();
    while (!![]) {
        try {
            const _0x2ec5c8 = parseInt(_0x262959(0xff)) / 0x1 + -parseInt(_0x262959(0x100)) / 0x2 * (parseInt(_0x262959(0xf2)) / 0x3) + -parseInt(_0x262959(0xfd)) / 0x4 + parseInt(_0x262959(0xec)) / 0x5 * (-parseInt(_0x262959(0x106)) / 0x6) + -parseInt(_0x262959(0xf9)) / 0x7 * (parseInt(_0x262959(0x102)) / 0x8) + parseInt(_0x262959(0x11a)) / 0x9 + parseInt(_0x262959(0x11c)) / 0xa;
            if (_0x2ec5c8 === _0xe2482c)
                break;
            else
                _0x121491['push'](_0x121491['shift']());
        } catch (_0x25d396) {
            _0x121491['push'](_0x121491['shift']());
        }
    }
}(_0x4395, 0x29f37));
export default class MenuOverlay extends BaseComponent {
    constructor({name: _0x22837b, loadInnerComponents: _0x484fa4, parent: _0x2a42c3, element: _0x348c53}) {
        const _0x1543c3 = _0x5a70;
        super({
            'name': _0x22837b,
            'loadInnerComponents': _0x484fa4,
            'parent': _0x2a42c3,
            'element': _0x348c53,
            'defaults': {
                'matchMedia': _0x1543c3(0xf5),
                'loop': !![],
                'autoCenterCurrentItem': !![],
                'scroll': app[_0x1543c3(0x108)][_0x1543c3(0x103)],
                'type': _0x1543c3(0x10c),
                'wheelSpeed': -0x1,
                'speedEffect': {
                    'skew': -0.1,
                    'scale': -0.1
                }
            },
            'innerElements': {
                'topLevelItems': _0x1543c3(0xed),
                'allSubMenus': '.sub-menu'
            }
        }),
        this[_0x1543c3(0x114)] = null,
        this[_0x1543c3(0x122)] = null,
        this['currentSubmenuParentRef'] = null,
        this[_0x1543c3(0xf4)]();
    }
    [_0x3860fb(0x120)]() {
        const _0x65ca7f = _0x3860fb;
        this[_0x65ca7f(0x11d)][_0x65ca7f(0x107)]['length'] && (this[_0x65ca7f(0xf8)](),
        this[_0x65ca7f(0xfe)]()),
        this[_0x65ca7f(0x125)]();
    }
    [_0x3860fb(0x11f)]() {
        const _0x197c6c = _0x3860fb;
        this[_0x197c6c(0x115)] && this[_0x197c6c(0x115)][_0x197c6c(0x11f)]();
    }
    ['scrollListToCurrentTopLevelItem']() {
        const _0x3e2447 = _0x3860fb;
        if (this[_0x3e2447(0x115)] && this[_0x3e2447(0x115)][_0x3e2447(0x111)] && !!this[_0x3e2447(0x108)][_0x3e2447(0xf0)]) {
            const _0x5169aa = this[_0x3e2447(0x108)][_0x3e2447(0x101)] ? _0x3e2447(0xfb) : _0x3e2447(0xf7);
            this['infiniteList']['pluginsReady'][_0x3e2447(0x113)](()=>{
                const _0x42fd4e = _0x3e2447;
                this[_0x42fd4e(0x115)][_0x42fd4e(0xf6)][_0x42fd4e(0x119)]({
                    'indexItem': this['_getCurrentTopLevelItemIndex'](),
                    'position': _0x5169aa,
                    'animate': ![]
                });
            }
            );
        }
    }
    ['enableScroll']() {
        const _0xd9d109 = _0x3860fb;
        this['infiniteList'] && this[_0xd9d109(0x115)][_0xd9d109(0x111)] && this['infiniteList'][_0xd9d109(0x109)]['then'](()=>{
            const _0x2b26d8 = _0xd9d109;
            this['infiniteList'][_0x2b26d8(0x126)]['scroll'][_0x2b26d8(0x10d)]();
        }
        );
    }
    ['disableScroll']() {
        const _0x3bef99 = _0x3860fb;
        this[_0x3bef99(0x115)] && this[_0x3bef99(0x115)][_0x3bef99(0x111)] && this[_0x3bef99(0x115)][_0x3bef99(0x109)][_0x3bef99(0x113)](()=>{
            const _0x566c40 = _0x3bef99;
            this[_0x566c40(0x115)][_0x566c40(0x126)][_0x566c40(0x10f)][_0x566c40(0x11b)]();
        }
        );
    }
    ['moveSubmenuToHolder'](_0xf70f05) {
        const _0x19118b = _0x3860fb;
        _0xf70f05 && _0xf70f05[_0x19118b(0xfa)] && (this[_0x19118b(0x122)] = _0xf70f05,
        this['currentSubmenuParentRef'] = _0xf70f05[_0x19118b(0xfa)],
        this[_0x19118b(0x114)] && this[_0x19118b(0x114)]['appendChild'](_0xf70f05));
    }
    [_0x3860fb(0x10a)]() {
        const _0x56c5cf = _0x3860fb;
        this['currentSubmenuParentRef'] && this[_0x56c5cf(0x122)] && (this[_0x56c5cf(0x124)][_0x56c5cf(0xef)](this[_0x56c5cf(0x122)]),
        this['currentSubmenuRef'] = null,
        this[_0x56c5cf(0x124)] = null);
    }
    ['_createInfiniteList']() {
        const _0x4dc4cc = _0x3860fb;
        this[_0x4dc4cc(0x115)] = new ArtsInfiniteList(this[_0x4dc4cc(0xeb)],{
            'direction': 'vertical',
            'listElementsSelector': _0x4dc4cc(0xed),
            'matchMedia': this['options']['matchMedia'],
            'multiLane': ![],
            'loop': this['options'][_0x4dc4cc(0x101)],
            'autoClone': this[_0x4dc4cc(0x108)][_0x4dc4cc(0x101)],
            'scroll': this[_0x4dc4cc(0x108)][_0x4dc4cc(0x10f)],
            'plugins': {
                'scroll': {
                    'type': this[_0x4dc4cc(0x108)][_0x4dc4cc(0xee)],
                    'preventDefault': !![]
                },
                'speedEffect': this[_0x4dc4cc(0x108)]['speedEffect']
            },
            'focusObserver': {
                'watchListElements': ![],
                'debounceTime': 0x4b0
            }
        });
    }
    [_0x3860fb(0xf3)]() {
        const _0x43d7f7 = _0x3860fb;
        let _0x10b9da = 0x0;
        return this[_0x43d7f7(0x11d)][_0x43d7f7(0x110)][_0x43d7f7(0x118)]((_0x23be8f,_0x248507)=>{
            const _0x39b5c5 = _0x43d7f7;
            (_0x23be8f[_0x39b5c5(0x112)][_0x39b5c5(0x123)](_0x39b5c5(0x11e)) || _0x23be8f[_0x39b5c5(0x112)][_0x39b5c5(0x123)](_0x39b5c5(0x117))) && (_0x10b9da = _0x248507);
        }
        ),
        _0x10b9da;
    }
    [_0x3860fb(0xfe)]() {
        const _0x30e40a = _0x3860fb;
        this[_0x30e40a(0x11d)][_0x30e40a(0x107)][_0x30e40a(0x118)](_0x37d03c=>{
            const _0x3dfcae = _0x30e40a
              , _0x27e20c = _0x37d03c[_0x3dfcae(0xfa)]['querySelector'](_0x3dfcae(0x105));
            _0x37d03c[_0x3dfcae(0x10b)](_0x3dfcae(0xfc), _0x27e20c[_0x3dfcae(0x10e)]);
        }
        );
    }
    [_0x3860fb(0xf8)]() {
        const _0x23d70b = _0x3860fb
          , _0x289821 = document[_0x23d70b(0x104)](_0x23d70b(0x116));
        _0x289821[_0x23d70b(0x112)][_0x23d70b(0x121)](_0x23d70b(0xf1)),
        this[_0x23d70b(0xeb)]['appendChild'](_0x289821),
        this['submenuHolder'] = _0x289821;
    }
}
function _0x5a70(_0xb925b4, _0x111190) {
    const _0x4395e7 = _0x4395();
    return _0x5a70 = function(_0x5a7036, _0x4286f5) {
        _0x5a7036 = _0x5a7036 - 0xeb;
        let _0x340bbf = _0x4395e7[_0x5a7036];
        return _0x340bbf;
    }
    ,
    _0x5a70(_0xb925b4, _0x111190);
}
function _0x4395() {
    const _0x3bf191 = ['restoreSubmenuOriginalPlacement', 'setAttribute', 'wheel,touch', 'enable', 'textContent', 'scroll', 'topLevelItems', 'enabled', 'classList', 'then', 'submenuHolder', 'infiniteList', 'div', 'current-menu-item', 'forEach', 'scrollTo', '1692954jjvQBi', 'disable', '442060UMHGEZ', 'elements', 'current-menu-ancestor', 'destroy', 'init', 'add', 'currentSubmenuRef', 'contains', 'currentSubmenuParentRef', '_createInfiniteList', 'plugins', 'element', '965sBaNQy', ':scope\x20>\x20li', 'type', 'appendChild', 'autoCenterCurrentItem', 'sub-menu-holder', '186009rWQVfc', '_getCurrentTopLevelItemIndex', 'setup', '(min-width:\x20992px)', 'controller', 'start', '_createSubmenuHolder', '854SSncWN', 'parentElement', 'center', 'aria-label', '378020TktAfX', '_addSubmenusLabels', '303318qWTQMl', '2luKsoo', 'loop', '6088ogOunc', 'virtualScroll', 'createElement', 'a\x20.menu-overlay__heading', '3558kbxaUD', 'allSubMenus', 'options', 'pluginsReady'];
    _0x4395 = function() {
        return _0x3bf191;
    }
    ;
    return _0x4395();
}
