# FIFA 15 Pack Opener ⚽

[Click here to play the game! 🎮](https://mateuszmachowina.github.io/PackOpenerF15/)

Pack Opener is an interactive football card pack opening simulator. Users can open virtual packs similar to FIFA Ultimate Team, view six unique player cards per pack and take a screenshot of their best pack, while listening to the official FIFA 15 Spotify playlist.  

The simulator uses a rarity algorithm based on player rating and card color to weight the chances of drawing rarer cards.

## 🎉 Personal Note  

This project was created as a tribute to my very first steps in IT – on the 10th anniversary of my first **FIFA Pack Opener**, built in Scratch over 10 years ago (2015):  

<details>
  <summary><strong>✨ See My Scratch Projects</strong></summary>

- ⚽ [FIFA 15 - Mini FUT](https://scratch.mit.edu/projects/75730628/)
- ⚽ [FIFA 16 - Mini FUT](https://scratch.mit.edu/projects/251721395/)
- ⚽ [FIFA 17 - Mini FUT](https://scratch.mit.edu/projects/134293944/)
- ⚽ [FIFA 19 - Mini FUT](https://scratch.mit.edu/projects/68231368/)
- 🌐 [More Projects on My Scratch Profile](https://scratch.mit.edu/users/Maszek/)

</details>


I have always learned by setting myself challenges, building projects and solving problems as they appeared. That approach guided me back then in Scratch and it still guides me today in technologies like **VBA, Power Automate, UiPath, and Python**. 🚀  


---

## ✨ Features

- 🃏 **Open Pack** – Click the pack to reveal **6 unique players** in one pack.  
- 💾 **Save Pack Screenshot** – Capture and download the pack image including background and logo using the **Save** button.  
- 🔙 **Back Button** – Return to the main menu with the **Back** button.  
- 🎶 **Spotify Integration** – Click the [Spotify button](https://open.spotify.com/playlist/00i82lDzMDdiHWNjrIGAyw?utm_source=generator) to open the playlist in the Spotify app.  
- 🏆 **Card Variety** – The simulator includes **720 cards** representing **408 players**.  
- ⚙️ **Rarity Algorithm** – Cards are weighted by rating and version color for realistic draw probabilities.
- 📱 **Responsive Design** – The app works on mobile devices, but the **best experience is on a desktop computer**.

---

## 🐍 Data Preparation

Three Python scripts and one Excel file were used to prepare data for this project:

1. **csv_to_json.py** – Converts raw CSV player data into a structured JSON format that can be used in the simulator.  
2. **images_checker.py** – Verifies that all required player, club and nation images exist and are correctly named; reports any missing or inconsistent files.  
3. **webp_to_png.py** – Converts WebP image files (from the source data) into PNG format for compatibility with the web application.  
4. **players_table.xlsx** – Contains the master table of all players, their ratings, positions, versions and other statistics used to generate the card data.



[Link to the Python scripts repository]([https://github.com/MateuszMachowina](https://github.com/MateuszMachowina/python-apps/tree/main/Tools%20for%20PackOpenerF15))  

---

## 📊 Data Sources

The data and graphics were sourced from:  

- 🌐 [Futbin](https://www.futbin.com/15/players) – Card information and graphics.  
- 🌐 [Sofifa.com](https://sofifa.com/players) – Player statistics.

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

## ⚖️ Legal Notice

All graphics, logos and data are the property of **EA Sports**. This project is **non-commercial** and created **for fun and personal enjoyment only**.  

---

## 👨‍💻 Author

[Mateusz Machowina – © 2025](https://github.com/MateuszMachowina)  

---


