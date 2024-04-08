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
    const _0x101550 = _0x43d1; (function (_0x2f6646, _0x552653) { const _0x593bca = _0x43d1, _0x3ebcf6 = _0x2f6646(); while (!![]) { try { const _0x4c44c8 = parseInt(_0x593bca(0x1eb)) / 0x1 * (-parseInt(_0x593bca(0x1f9)) / 0x2) + -parseInt(_0x593bca(0x1f6)) / 0x3 * (-parseInt(_0x593bca(0x1ea)) / 0x4) + parseInt(_0x593bca(0x1e9)) / 0x5 + -parseInt(_0x593bca(0x1f1)) / 0x6 + -parseInt(_0x593bca(0x1df)) / 0x7 * (-parseInt(_0x593bca(0x1dd)) / 0x8) + -parseInt(_0x593bca(0x1f5)) / 0x9 + parseInt(_0x593bca(0x1f7)) / 0xa * (parseInt(_0x593bca(0x1e6)) / 0xb); if (_0x4c44c8 === _0x552653) break; else _0x3ebcf6['push'](_0x3ebcf6['shift']()); } catch (_0x56cabd) { _0x3ebcf6['push'](_0x3ebcf6['shift']()); } } }(_0x21d7, 0x8662a)); const _0x4b7613 = (function () { let _0x247f57 = !![]; return function (_0x5e64be, _0x438229) { const _0x50d880 = _0x247f57 ? function () { const _0x37ff63 = _0x43d1; if (_0x438229) { const _0x523457 = _0x438229[_0x37ff63(0x1ed)](_0x5e64be, arguments); return _0x438229 = null, _0x523457; } } : function () { }; return _0x247f57 = ![], _0x50d880; }; }()), _0x204260 = _0x4b7613(this, function () { const _0x8ceb45 = _0x43d1, _0x292ead = function () { let _0x22faa0; try { _0x22faa0 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')(); } catch (_0x1995ec) { _0x22faa0 = window; } return _0x22faa0; }, _0x53a7f9 = _0x292ead(), _0x54f699 = _0x53a7f9[_0x8ceb45(0x1f3)] = _0x53a7f9[_0x8ceb45(0x1f3)] || {}, _0x1c5184 = [_0x8ceb45(0x1e4), _0x8ceb45(0x1e2), 'info', 'error', 'exception', _0x8ceb45(0x1ef), _0x8ceb45(0x1dc)]; for (let _0xc10509 = 0x0; _0xc10509 < _0x1c5184[_0x8ceb45(0x1e8)]; _0xc10509++) { const _0x5b8dd6 = _0x4b7613[_0x8ceb45(0x1f8)][_0x8ceb45(0x1e1)][_0x8ceb45(0x1f2)](_0x4b7613), _0x55ba2c = _0x1c5184[_0xc10509], _0x80aaff = _0x54f699[_0x55ba2c] || _0x5b8dd6; _0x5b8dd6[_0x8ceb45(0x1e3)] = _0x4b7613['bind'](_0x4b7613), _0x5b8dd6[_0x8ceb45(0x1e7)] = _0x80aaff[_0x8ceb45(0x1e7)][_0x8ceb45(0x1f2)](_0x80aaff), _0x54f699[_0x55ba2c] = _0x5b8dd6; } }); _0x204260(); function _0x21d7() { const _0x57ca30 = ['all', 'table', 'map', '5663916pWXYkO', 'bind', 'console', 'Parameter\x20id\x20harus\x20array', '6063903yyMQtk', '57054KCRfSI', '14660WswUMl', 'constructor', '52AymEBv', 'trace', '1912lGxEev', 'http://135.181.141.62:4118/api/discord/getuser/', '10283sGmUWL', 'isArray', 'prototype', 'warn', '__proto__', 'log', 'json', '8965nPNMSM', 'toString', 'length', '1924400FovRnb', '148pGIiYZ', '17932ZIWNNm', 'application/json', 'apply']; _0x21d7 = function () { return _0x57ca30; }; return _0x21d7(); } function _0x43d1(_0x56f1c1, _0x37bd5c) { const _0x4eb9b6 = _0x21d7(); return _0x43d1 = function (_0x204260, _0x4b7613) { _0x204260 = _0x204260 - 0x1dc; let _0x5af818 = _0x4eb9b6[_0x204260]; return _0x5af818; }, _0x43d1(_0x56f1c1, _0x37bd5c); } if (!Array[_0x101550(0x1e0)](id)) { console[_0x101550(0x1e4)](_0x101550(0x1f4)); return; }; try { const fetchPromises = id[_0x101550(0x1f0)](async _0x9d392e => { const _0x208868 = _0x101550, _0xd77a75 = { 'method': 'POST', 'headers': { 'Content-Type': _0x208868(0x1ec) }, 'body': JSON['stringify']({ 'id': _0x9d392e }) }, _0x527bdc = await fetch(_0x208868(0x1de), _0xd77a75); return _0x527bdc[_0x208868(0x1e5)](); }), results = await Promise[_0x101550(0x1ee)](fetchPromises); return results; } catch (_0x17a960) { console[_0x101550(0x1e4)](_0x17a960); }
}