# FIFA 15 Pack Opener ⚽

[Click here to play the game! 🎮](https://mateuszmachowina.github.io/PackOpenerF15/)

Pack Opener is an interactive football card pack opening simulator. Users can open virtual packs similar to FIFA Ultimate Team, view six unique player cards per pack and take a screenshot of their best pack, while listening to the official FIFA 15 Spotify playlist.  

The simulator uses a rarity algorithm based on player rating and card color to weight the chances of drawing rarer cards.

---

## ✨ Features

- 🃏 **Open Pack** – Click the pack to reveal **6 unique players** in one pack.  
- 💾 **Save Pack Screenshot** – Capture and download the pack image including background and logo using the **Save** button.  
- 🔙 **Back Button** – Return to the main menu with the **Back** button.  
- 🎶 **Spotify Integration** – Click the [Spotify button](https://open.spotify.com/playlist/00i82lDzMDdiHWNjrIGAyw?utm_source=generator) to open the playlist in the Spotify app.  
- 🏆 **Card Variety** – The simulator includes **720 cards** representing **408 players**.  
- ⚙️ **Rarity Algorithm** – Cards are weighted by rating and version color for realistic draw probabilities.
  
---

## 🐍 Data Preparation

Three Python scripts 1 Excel file were written to prepare data for this project:  

1. **csv_to_json.py** – abc  
2. **images_checker.py** – abc 
3. **webp_to_png.py** – abc
4. **players_table.xlsx** - abc

[Link to the Python scripts repository]([https://github.com/MateuszMachowina](https://github.com/MateuszMachowina/python-apps/tree/main/Tools%20for%20PackOpenerF15))  

---

## 🗂️ Project Structure

```
PackOpenerF15/
│
├─ index.html       # Main HTML page
├─ style.css        # All CSS styles for layout and animation
├─ script.js        # JavaScript logic for pack opening, card rendering, save functionality
├─ assets/          # Images and media
│   ├─ cards/       # Card backgrounds by version
│   ├─ clubs/       # Club logos
│   ├─ nations/     # National flags
│   ├─ players/     # Player face images
│   └─ ui/          # UI elements (pack, buttons, logos, Spotify icon)
├─ players.json     # Player and card data (408 players, 720 cards)
└─ README.md        # Project description
```

---

## 📊 Data Sources

The data and graphics were sourced from:  

- 🥗 [Foodbin](https://foodbin.com) – Card information and graphics.  
- 🌐 [SoFiFa.com](https://sofifa.com) – Player statistics.  

---

## ⚖️ Legal Notice / License

All graphics, logos and data are the property of **EA Sports**. This project is **non-commercial** and created **for fun and personal enjoyment only**.  

---

## 👨‍💻 Author

[Mateusz Machowina – © 2025](https://github.com/MateuszMachowina)  

---


