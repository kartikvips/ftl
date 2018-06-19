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

This app will consist of a single screen with the simulation canvas, media bar, songs list and nav links to the Github, my LinkedIn, and the About and Details modals.  


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and audio logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- PT.js library for drawing out audio visualizations

In addition to the webpack entry file, there will be two categories of scripts involved in this project:

`visual[x].js`: this script will handle the logic for creating and updating the canvas for multiple visuals.

`audio.js`: this script will handle the audio logic for the game.

### Implementation Timeline

**Over the weekend**:
- [x] Learned how to build things using javascript and using canvas.

**Day 1**: Set up the skeleton, webpack, and have general direction moving forward on the project, and start on creating audio capabilities and styling the player

- [x] Get `webpack` serving files and frame out index.html
- [x] Learn enough canvas animation and audio analysers to play music with a simple analyser 

**Day 2**: Set up custom audio player that can be styled

- [x] Finish styling the site 
- [x] Create custom audio player that can be styled
- [x] Style custom audio player
- [x] Begin work on visualizations 

**Day 3**: Begin work on visualizations

- [x] Learn PT.js
- [x] Finish first visualization


**Day 4**: Get sound to work and install modals

- [x] Add listener features to visualization
- [x] Work on another visualization


### Bonus features

There are many directions in which this project could evolve.

- [ ] Create advanced listeners to manipulate audio visualizations