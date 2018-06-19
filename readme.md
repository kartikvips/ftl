## Media Player 

### Background and Overview

Media player is based off of Windows Media Player from 2000. It will have custom audio visualizations based on the song frequency/amplitudes. 

Users can select songs from a short playlist, play, pause, scroll through, stop, and change the volume on the song. 

### Functionality & MVP  

In Media Player, users will be able to:

- [ ] Pick from list of songs to play
- [ ] Play a song
- [ ] Pause a song
- [ ] Scroll through song position
- [ ] Stop a song
- [ ] Change the volume on a song


### Wireframes

This app will consist of a single screen with the simulation canvas, and nav links to the Github, my LinkedIn, and the About and Details modals.  

The simulation canvas will include a play button to begin the game. 

Users will then be shown the details modal before level 1. 

There will be a pause button on the screen for the game.

Users will be shown score at the end of each level. 

Users will be allowed to pause the sound



### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,

In addition to the webpack entry file, there will be five categories of scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary DOM elements.

`levels[x].js`: this will handle the setup for the different levels of the game.

`audio.js`: this script will handle the audio logic for the game.

`player.js`: this script will handle the player logic.

`coins.js`: this script will handle the coins logic.

### Implementation Timeline

**Over the weekend**:
- [x] Learned how to build games using javascript and using canvas.

**Day 1**: Set up the skeleton, webpack, and have general direction moving forward on the project, and start on player movement logic.

- [x] Get `webpack` serving files and frame out index.html
- [x] Learn enough canvas animation to render games properly 

**Day 2**: Set up game logic for player movement and set up one level

- [x] Set up player.js and get player to move accordingly with the right physics 
- [x] Set up board.js and get one level

**Day 3**: Set up logic for coins and counting coins and implement sound

- [x] Create coins.js
- [x] Create player.js
- [x] Learn how to implement music into the game


**Day 4**: Get sound to work and install modals

- [x] Create controls for game speed, stop, start, restart, reset
- [x] Have a styled `Canvas`, nice looking controls and title


### Bonus features

There are many directions in which this project could evolve.

- [ ] AI to play against in the same render of the game