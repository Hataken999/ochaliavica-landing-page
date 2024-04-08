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
    // Memeriksa apakah id merupakan array
    if (!Array.isArray(id)) {
        console.log('Parameter id harus array');
        return;
    };

    try {
        const fetchPromises = id.map(async userId => {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: userId }) // Perhatikan JSON.stringify
            };

            const response = await fetch('http://135.181.141.62:4118/api/discord/getuser/', options);
            return response.json();
        });

        // Menunggu semua promise fetch selesai dan mengumpulkan hasilnya
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        console.log(error);
    }
}