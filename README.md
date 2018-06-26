# Classic Arcade Game Project

### Description:
* In this game there is a Player and Enemies (Bugs). 
* The goal of the player is to reach the water, without colliding into any one of the enemies. 
* The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. 
* Once a the player collides with an enemy, the game is reset and the player moves back to the start square. * Once the player reaches the water the game is won.
* User can start the game by clicking start button.
* Only one event is added on click to make sure user can start only one session of game at a time.
* Once button is clicked, timer starts and user can move with arrow keys to next block position and start playing arcade game to reach upto the water level avoiding bugs bite.
* When player reaches top of the platform i.e. water level, page displays a modular pop up with victory message and option to replay.
* Also when bug bites or hits the player, page displays modular pop up with failure message and button to replay eg. **Play again** and **Close**.

### Table of Contents -_Functional details:_
* Inside the app.js file, implemented the Player and the Enemy classes, using Object-Oriented JavaScript.
* Total three classes have been implemented `Entity superclass` then `player` and `enemy` subclasses possessing their own uniue characteristics as well as inherited from parent class.
##### The Enemy function, which initiates the Enemy by:
- Loading the image by setting this.sprite to the appropriate image in the image folder
- Setting the Enemy initial location 
- Setting the Enemy speed 
- The update method for the Enemy
- Updates the Enemy location
- Handles collision with the Player

##### The Player function, which initiates the Player by:
- Loading the image by setting this.sprite to the appropriate image in the image folder
- Setting the Player initial location
- The update method for the Player 
- The render method for the Player 
- The handleInput method, receives user input, allowedKeys (the key which was pressed) and moves the player according to that input. eg.:
Left key moves the player to the left, right key to the right, up moves to the player up and down should moves to the player down.
- The player cannot move off screen.
- When the player reaches the water the game resets by moving the player back and bugs speed to the initial  location and scale
- finally instantiated player and enemy objects.
* Created a new Player object
* Created several new Enemies objects and placing them in an array called allEnemies
##### The global scope functions, to support the game functinality by:
- Updating timer on the screen
- Displaying result message on either failure or success.
- Game reset and start game functionality.

### Installation: 
To install this Game, click on index.html of the source folder.
Or direct location of index.html inside your pc's directory and open the path in the browser.

### Dependencies:
_Include below dependencies inside head element of index html:_
* [Google fonts](https://fonts.googleapis.com/css?family=AlfaSlabOne) used to style the fonts of game heading.
* [Google fonts](https://fonts.googleapis.com/css?family=Orbitron) used to style the digital fonts of timer

### Usage: 
On successful web page loading, start the game by clicking start the Game button.
Then Timer will start and player moves with bugs roaming staright will be enabled for arrow keypress and to reach upto water level subsequently.

### Credits: _Triveni Vikrant Londhe._

### License: 
MIT License
Copyright (c) [2018] [Triveni Vikrant Londhe]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

