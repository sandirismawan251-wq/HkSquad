const players = [
    {
        name: "Hk AiSay",
        hero: "Gusion",
        winrate: 55,
        matches: 120
    },
    {
        name: "Hk Warnerd",
        hero: "Terizla",
        winrate: 60,
        matches: 150
    },
    {
        name: "Hk Zefin",
        hero: "Zetian",
        winrate: 52,
        matches: 90
    },
    {
        name: "Hk Xora",
        hero: "Lylia",
        winrate: 58,
        matches: 130
    },
    {
        name: "Hk Ncek",
        hero: "Harith",
        winrate: 54,
        matches: 110
    },
    {
        name: "Hk Fundul",
        hero: "Tigreal",
        winrate: 57,
        matches: 125
    },
    {
        name: "Hk saprol",
        hero: "Grock",
        winrate: 59,
        matches: 140
    }
];

// Fungsi untuk menampilkan data pemain
function displayPlayers() {
    const container = document.getElementById("playersContainer");
    players.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";

        card.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="hero-fav">Hero Favorit: ${player.hero}</div>
            <div class="stats">
                Winrate: ${player.winrate}%<br>
                Match: ${player.matches}
            </div>
        `;

        container.appendChild(card);
    });
}

// Jalankan fungsi saat halaman dimuat
window.onload = () => {
    displayPlayers();
};