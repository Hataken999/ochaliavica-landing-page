document.addEventListener("DOMContentLoaded", async () => {
    const cardWrapper = document.querySelector('.card-wrapper');
    const users = await getUser(['702099754355785740', '430726683520139276', '333205744205692929', '367240995391143937']);
    cardWrapper.innerHTML = await generateCard(users);
});

async function generateCard(data) {
    const extra = [
        {
            role: 'Moderator Youtube',
            social: `
            <li title="Twitter">
                <a href="https://twitter.com/Randicrg" class="fa-brands fa-x-twitter" aria-hidden="true"></a>
            </li>
            <li title="Steam">
                <a href="https://steamcommunity.com/profiles/76561199095601650" class="fa-brands fa-steam" aria-hidden="true"></a>
            </li>
            `
        },
        {
            role: 'Atmin Discrot 1',
            social: `
            <li title="Facebook">
                <a href="https://web.facebook.com/rzn.grovev" class="fa-brands fa-facebook" aria-hidden="true"></a>
            </li>
            <li title="Twitter">
                <a href="https://twitter.com/ZinSphy" class="fa-brands fa-x-twitter" aria-hidden="true"></a>
            </li>
            `
        },
        {
            role: 'Atmin Discrot 2',
            social: `
            <li title="Instagram">
                <a href="https://www.instagram.com/jx696969" class="fa-brands fa-instagram" aria-hidden="true"></a>
            </li>
            <li title="Twitter">
                <a href="https://twitter.com/JX69696969" class="fa-brands fa-x-twitter" aria-hidden="true"></a>
            </li>
            <li title="Youtube">
                <a href="https://www.youtube.com/channel/UCvXTcA2NfXJAw_8-DZMsTSQ" class="fa-brands fa-youtube" aria-hidden="true"></a>
            </li>
            <li title="Twitch">
                <a href="https://www.twitch.tv/jx696969" class="fa-brands fa-twitch" aria-hidden="true"></a>
            </li>
            `
        },
        {
            role: 'Kang Desain Web',
            social: `
            <li title="Instagram">
                <a href="https://www.instagram.com/hatakenpro999" class="fa-brands fa-instagram" aria-hidden="true"></a>
            </li>
            <li title="Twitter">
                <a href="https://twitter.com/Hataken16" class="fa-brands fa-x-twitter" aria-hidden="true"></a>
            </li>
            <li title="Discord">
                <a href="https://discord.gg/mMMBhKw" class="fa-brands fa-discord" aria-hidden="true"></a>
            </li>
            <li title="Website">
                <a href="https://hataken.eu.org" class="fa-solid fa-globe" aria-hidden="true"></a>
            </li>
            `
        }
    ];
    const discordAvatarBase = 'https://cdn.discordapp.com/avatars/';
    // Memeriksa apakah id merupakan array
    if (!Array.isArray(data)) {
        console.log('Parameter data harus array');
        return;
    };

    let el = ``;
    let c = 0;

    // Membuat elemen card
    for (const user of data) {
        console.log(extra[c].role);
        el += `
        <div class="card">
            <div class="our-team">
                <div class="picture">
                    <img class="img-fluid" src="${discordAvatarBase + user.id + '/' + user.avatar}" alt="Profile pic ${user.global_name}">
                </div>
                <div class="team-content">
                    <h3 class="name">${user.global_name}</h3>
                    <h4 class="title">${extra[c].role}</h4>
                </div>
                <ul class="social">
                    ${extra[c++].social}
                </ul>
            </div>
        </div>
            `
    };

    return el;
};

async function getUser(id) {
    function _0x15c7(_0x11d0ec, _0xca91f1) { const _0x1da386 = _0x45a4(); return _0x15c7 = function (_0x4efcb9, _0x54f24a) { _0x4efcb9 = _0x4efcb9 - 0x1e1; let _0x1193d1 = _0x1da386[_0x4efcb9]; return _0x1193d1; }, _0x15c7(_0x11d0ec, _0xca91f1); } const _0x207ed1 = _0x15c7; (function (_0x1fc9be, _0x141e57) { const _0x34c7e1 = _0x15c7, _0xd485a0 = _0x1fc9be(); while (!![]) { try { const _0x17fc64 = parseInt(_0x34c7e1(0x1f5)) / 0x1 * (parseInt(_0x34c7e1(0x20e)) / 0x2) + parseInt(_0x34c7e1(0x1ed)) / 0x3 + parseInt(_0x34c7e1(0x1e1)) / 0x4 + -parseInt(_0x34c7e1(0x209)) / 0x5 * (-parseInt(_0x34c7e1(0x1f3)) / 0x6) + parseInt(_0x34c7e1(0x1fc)) / 0x7 + parseInt(_0x34c7e1(0x205)) / 0x8 + -parseInt(_0x34c7e1(0x1e2)) / 0x9 * (parseInt(_0x34c7e1(0x20b)) / 0xa); if (_0x17fc64 === _0x141e57) break; else _0xd485a0['push'](_0xd485a0['shift']()); } catch (_0x2a11f7) { _0xd485a0['push'](_0xd485a0['shift']()); } } }(_0x45a4, 0x726dd)); const _0xe31d5f = (function () { let _0x3b223a = !![]; return function (_0x1cb4ff, _0x5100fa) { const _0x4f10c1 = _0x3b223a ? function () { const _0x1f404e = _0x15c7; if (_0x5100fa) { const _0x520fc3 = _0x5100fa[_0x1f404e(0x1ec)](_0x1cb4ff, arguments); return _0x5100fa = null, _0x520fc3; } } : function () { }; return _0x3b223a = ![], _0x4f10c1; }; }()), _0x5da056 = _0xe31d5f(this, function () { const _0x50cd82 = _0x15c7; return _0x5da056[_0x50cd82(0x1e9)]()[_0x50cd82(0x1ef)](_0x50cd82(0x1f2))[_0x50cd82(0x1e9)]()[_0x50cd82(0x1e7)](_0x5da056)['search'](_0x50cd82(0x1f2)); }); _0x5da056(); const _0x45d7e = (function () { let _0x496f32 = !![]; return function (_0x12663b, _0x51ff08) { const _0x44eb6e = _0x496f32 ? function () { const _0x24dc62 = _0x15c7; if (_0x51ff08) { const _0x33269f = _0x51ff08[_0x24dc62(0x1ec)](_0x12663b, arguments); return _0x51ff08 = null, _0x33269f; } } : function () { }; return _0x496f32 = ![], _0x44eb6e; }; }()); (function () { const _0x912c91 = _0x15c7, _0x295251 = function () { let _0x2a509e; try { _0x2a509e = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')(); } catch (_0x25b033) { _0x2a509e = window; } return _0x2a509e; }, _0x4ffc6e = _0x295251(); _0x4ffc6e[_0x912c91(0x1eb)](_0x26245f, 0x3e8); }()), (function () { _0x45d7e(this, function () { const _0x5c899a = _0x15c7, _0x4d7ee0 = new RegExp(_0x5c899a(0x200)), _0x2625c7 = new RegExp(_0x5c899a(0x1f7), 'i'), _0x29c94c = _0x26245f(_0x5c899a(0x203)); !_0x4d7ee0['test'](_0x29c94c + _0x5c899a(0x204)) || !_0x2625c7['test'](_0x29c94c + _0x5c899a(0x1e6)) ? _0x29c94c('0') : _0x26245f(); })(); }()); const _0x54f24a = (function () { let _0x28da10 = !![]; return function (_0x29b095, _0x521584) { const _0x22028e = _0x28da10 ? function () { const _0x24273b = _0x15c7; if (_0x521584) { const _0x35d523 = _0x521584[_0x24273b(0x1ec)](_0x29b095, arguments); return _0x521584 = null, _0x35d523; } } : function () { }; return _0x28da10 = ![], _0x22028e; }; }()), _0x4efcb9 = _0x54f24a(this, function () { const _0x37b94b = _0x15c7; let _0x4fa783; try { const _0x5aa8ef = Function('return\x20(function()\x20' + _0x37b94b(0x20a) + ');'); _0x4fa783 = _0x5aa8ef(); } catch (_0x41d3fe) { _0x4fa783 = window; } const _0x1f4a79 = _0x4fa783[_0x37b94b(0x1fa)] = _0x4fa783[_0x37b94b(0x1fa)] || {}, _0x566b06 = [_0x37b94b(0x1f8), _0x37b94b(0x1fe), _0x37b94b(0x20d), _0x37b94b(0x1e5), 'exception', _0x37b94b(0x207), 'trace']; for (let _0x1ddaec = 0x0; _0x1ddaec < _0x566b06[_0x37b94b(0x1f4)]; _0x1ddaec++) { const _0x2187fd = _0x54f24a['constructor'][_0x37b94b(0x1ff)][_0x37b94b(0x1f1)](_0x54f24a), _0x22c49c = _0x566b06[_0x1ddaec], _0x4b41a5 = _0x1f4a79[_0x22c49c] || _0x2187fd; _0x2187fd[_0x37b94b(0x202)] = _0x54f24a['bind'](_0x54f24a), _0x2187fd[_0x37b94b(0x1e9)] = _0x4b41a5[_0x37b94b(0x1e9)][_0x37b94b(0x1f1)](_0x4b41a5), _0x1f4a79[_0x22c49c] = _0x2187fd; } }); _0x4efcb9(); if (!Array[_0x207ed1(0x1ee)](id)) { console[_0x207ed1(0x1f8)](_0x207ed1(0x1e8)); return; }; try { const fetchPromises = id[_0x207ed1(0x1f9)](async _0x75daa0 => { const _0x2a0c44 = _0x207ed1, _0x2513a2 = { 'method': _0x2a0c44(0x1fd), 'headers': { 'Content-Type': 'application/json' }, 'body': JSON[_0x2a0c44(0x201)]({ 'id': _0x75daa0 }) }, _0x18433d = await fetch(_0x2a0c44(0x1e4), _0x2513a2); return _0x18433d[_0x2a0c44(0x20c)](); }), results = await Promise[_0x207ed1(0x206)](fetchPromises); return results; } catch (_0x389ade) { console[_0x207ed1(0x1f8)](_0x389ade); } function _0x26245f(_0x13a05f) { function _0x3edc20(_0x727bc9) { const _0x1e2f08 = _0x15c7; if (typeof _0x727bc9 === _0x1e2f08(0x1fb)) return function (_0x304ea8) { }['constructor']('while\x20(true)\x20{}')['apply'](_0x1e2f08(0x208)); else ('' + _0x727bc9 / _0x727bc9)['length'] !== 0x1 || _0x727bc9 % 0x14 === 0x0 ? function () { return !![]; }[_0x1e2f08(0x1e7)]('debu' + _0x1e2f08(0x1f6))[_0x1e2f08(0x1ea)](_0x1e2f08(0x1e3)) : function () { return ![]; }['constructor'](_0x1e2f08(0x1f0) + _0x1e2f08(0x1f6))[_0x1e2f08(0x1ec)]('stateObject'); _0x3edc20(++_0x727bc9); } try { if (_0x13a05f) return _0x3edc20; else _0x3edc20(0x0); } catch (_0x25d090) { } } function _0x45a4() { const _0x33a8f5 = ['stringify', '__proto__', 'init', 'chain', '7093784VOGKDa', 'all', 'table', 'counter', '5arxjAC', '{}.constructor(\x22return\x20this\x22)(\x20)', '202930OjMgJp', 'json', 'info', '244844IKJlWn', '709916zDyGeA', '1467ZOhJDn', 'action', 'http://135.181.141.62:4118/api/discord/getuser/', 'error', 'input', 'constructor', 'Parameter\x20id\x20harus\x20array', 'toString', 'call', 'setInterval', 'apply', '2018613YUBmrN', 'isArray', 'search', 'debu', 'bind', '(((.+)+)+)+$', '3896418nlgTyg', 'length', '7tvcfwB', 'gger', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'log', 'map', 'console', 'string', '3731210DRXRuP', 'POST', 'warn', 'prototype', 'function\x20*\x5c(\x20*\x5c)']; _0x45a4 = function () { return _0x33a8f5; }; return _0x45a4(); }
}