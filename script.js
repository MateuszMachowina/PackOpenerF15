let players = []; // load player data from JSON

// fetch player data on start
fetch('players.json')
  .then(res => res.json())
  .then(data => { players = data; });

// map card versions to their highlight colors
const versionColors = {
  "Futties": "#d859d4ff",
  "Gold": "#FFD700",
  "Gold_Non-rare": "#D2B48C",
  "IF": "#b19703ff",
  "Legend": "#f0f0caff",
  "MOTM": "#f39420ff",
  "POTY": "#6527c9ff",
  "RB": "#ff7772be",
  "TOTS": "#f5db47e1",
  "TOTY": "#127eebff"
};

// function to pick a single player with rating-based weighting and rarity adjustment
function weightedRandomPlayer(playersArray) {
  const weighted = [];

  playersArray.forEach(player => {
    // basic weight based on rating
    let weight = Math.max(1, 101 - player.RAT);

    // rarity multiplier to make some versions rarer
    let rarityMultiplier = 1;
    if (["IF", "MOTM", "POTY", "RB", "Futties"].includes(player.VER)) {
      rarityMultiplier = 0.5; // harder to pull
    } else if (["TOTS", "TOTY", "Legend"].includes(player.VER)) {
      rarityMultiplier = 0.3; // rarest cards
    }

    weight = Math.max(1, Math.floor(weight * rarityMultiplier));

    // push the player multiple times according to weight for probability
    for (let i = 0; i < weight; i++) {
      weighted.push(player);
    }
  });

  // random selection from weighted array
  const index = Math.floor(Math.random() * weighted.length);
  return weighted[index];
}

// function to draw a set of unique players, avoiding duplicates in the same pack
function drawUniquePlayers(count) {
  if (players.length < count) return [];

  const result = [];
  const copy = [...players];

  while (result.length < count) {
    const player = weightedRandomPlayer(copy);
    result.push(player);

    // remove drawn player to prevent duplicates
    const idx = copy.findIndex(p => p.player_id === player.player_id && p.VER === player.VER);
    if (idx !== -1) copy.splice(idx, 1);
  }

  return result;
}

// --- openPack function ---
function openPack() {
  if (!players.length) {
    alert("Player data not loaded yet!");
    return;
  }

  document.getElementById('menu').style.display = 'none';
  const container = document.getElementById('pack-container');
  container.style.display = 'flex';

  const cardsDiv = document.getElementById('cards');
  cardsDiv.innerHTML = '';

  const drawnPlayers = drawUniquePlayers(6); // draw 6 unique players per pack - here you can modify amt of players per pack

  drawnPlayers.forEach((player, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url('assets/cards/${player.VER}.png')`;

    // player face image
    const face = document.createElement('img');
    face.className = 'face';
    face.src = `assets/players/${player.player_id}.png`;
    card.appendChild(face);

    // club logo
    const club = document.createElement('img');
    club.className = 'club';
    club.src = `assets/clubs/${player.club_id}.png`;
    card.appendChild(club);

    // nation flag
    const nation = document.createElement('img');
    nation.className = 'nation';
    nation.src = `assets/nations/${player.nation_id}.png`;
    card.appendChild(nation);

    // player name
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = player.Surname;
    card.appendChild(name);

    // rating and position
    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = player.RAT;
    card.appendChild(rating);

    const position = document.createElement('div');
    position.className = 'position';
    position.textContent = player.POS;
    card.appendChild(position);

    // stats columns
    const stats = document.createElement('div');
    stats.className = 'stats';
    const col1 = document.createElement('div');
    col1.className = 'col';
    ['PAC','SHO','PAS'].forEach(key => {
      const stat = document.createElement('div');
      stat.className = 'stat';
      stat.innerHTML = `${player[key]} <span class="label">${key}</span>`;
      col1.appendChild(stat);
    });
    const col2 = document.createElement('div');
    col2.className = 'col';
    ['DRI','DEF','PHY'].forEach(key => {
      const stat = document.createElement('div');
      stat.className = 'stat';
      stat.innerHTML = `${player[key]} <span class="label">${key}</span>`;
      col2.appendChild(stat);
    });
    stats.appendChild(col1);
    stats.appendChild(col2);
    card.appendChild(stats);

    // card shadow color based on version
    const color = versionColors[player.VER];
    if (player.VER !== "Gold_Non-rare") card.style.setProperty("--card-color", color);

    const textElems = card.querySelectorAll('.name, .rating, .position, .stat, .stat .label');
    if (player.VER === "Legend") {
      textElems.forEach(el => el.style.color = "#b67e2bff"); // special text color for Legend
      card.style.setProperty("--card-color", "#b67e2bff");  // shadow color for Legend
    } else {
      textElems.forEach(el => el.style.color = "#FFFFFF"); // normal text color
    }

    // price display with proper formatting
    const coins = document.createElement('div');
    coins.className = 'coins';
    let price = parseInt(player.Coins.replace(/,/g, ''));
    if (isNaN(price)) price = 0;

    if (price >= 1000000) {
      coins.textContent = (price / 1000000).toFixed(2) + "M coins";
    } else if (price >= 1000) {
      coins.textContent = (price / 1000).toFixed(0) + "k coins";
    } else {
      coins.textContent = price + " coins";
    }

    card.appendChild(coins);
    cardsDiv.appendChild(card);

    // sequential animation delay for cards
    setTimeout(() => card.classList.add('show'), i * 200 + 50);
  });
}

// function to reset pack view back to menu
function resetPack() {
  document.getElementById('pack-container').style.display = 'none';
  document.getElementById('cards').innerHTML = '';

  const menu = document.getElementById('menu');
  menu.style.display = 'flex';
  menu.style.justifyContent = 'center';
  menu.style.alignItems = 'center';
  menu.style.height = '100vh';
}

