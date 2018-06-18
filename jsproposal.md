## FTL - faster than light

### Background and Overview

FTL is a 2d vanilla javascript game based on flappy bird that allows players to traverse obstacles to get to the finish line.

Users can use the direction keys to move the object through the obstacle course and play multiple levels while collecting coins.

### Functionality & MVP  

In FTL, users will be able to:

- [ ] Use arrow keys to move the user object 
- [ ] Hear background sound 
- [ ] Traverse multiple levels
- [ ] Collect coins to to increase score
- [ ] Start, pause, restart, and reset the game

In addition, this project will include:

- [ ] An About modal describing the basic functionality

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