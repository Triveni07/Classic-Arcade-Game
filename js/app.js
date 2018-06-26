/**
 * @description Represent the enemies the player needs to avoid to win the game.
 * Enemies have a default image, a random speed, and an initial position on the
 * screen. They move continuously and stop only when the player wins the game.
 * When a collision between an enemy and the player occurs, the game is reset.
 */
class Entity {
	constructor(x, y, sprite) {
		this.x = x;
		this.y = y;
		this.sprite = sprite;

	}
	update(){}
	render(){}
	checkCollision(){}
}

class Enemy extends Entity{
	/**
	 * @description Construct new enemy objects, assigning their default image,
	 * their initial position, and their initial speed.
	 * @param {number} x The initial position of the enemy in the x direction
	 * @param {number} y The initial position of the enemy in the y direction
	 * @param {number} speed The initial speed of the enemy
	 */
	constructor(x, y, speed, sprite) {
		super(x, y, sprite = 'images/enemy-bug.png');
		this.speed = speed;
		this.x = x;
		this.y = y;
	}

	/**
	 * @description Update the enemy's position, multiplying the speed by a time
	 * delta between ticks to ensure the game runs at the same speed for all
	 * computers. When the enemy disappear out of the right side of the screen,
	 * it returns back from the left side of the screen.
	 * When an enemy collides with the player, the game is reset.
	 * @param {number} dt The time delta between ticks
	 */

	update(dt) {
		this.x += this.speed * dt;
		// Detect when the enemy disappears from the right side of the screen
		if (this.x >= 500) {
			this.x = -100;
		}
	}

	/* If the horizontal distance between an enemy and the player is less
	 * than 75 pixels or the vertical distance is less than 25 pixels, there
	 * was a collision between the enemy and the player.
	 */    
	checkCollision(){       
		if (Math.abs(Math.floor(player.x) - Math.floor(this.x)) <= 75 &&
				Math.abs(Math.floor(player.y) - Math.floor(this.y)) <= 25) {
			setTimeout(() => {
				// return the player to his initial position
				player.x = 200;
				player.y = 400;
				// stop all enemies
				for (const enemy of allEnemies) {
					enemy.speed = 0;
				}
				//stop the timer
				stopTheTimer(intervalID );
				// print the winning message on the screen
				displayResultMessage(`Oops! Game Over. Reset and try again?`);
				this.render();

			}, 100);

		}
	}

	/**
	 * @description Draw an enemy on the screen.
	 */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

/**
 * @description Represent the player. The player has a default image and an
 * initial position on the screen. The player can move horizontally or
 * vertically, but is not allowed to move off the screen. The player's starting
 * position is on the grass at the bottom of the screen, and the aim is to
 * reach the water at the top of the screen without colliding into any enemy.
 * When the player reaches the water, the game is won. When the player collides
 * with an enemy, the game is reset.
 */
class Player extends Entity{
	/**
	 * @description Construct the player object, assigning their default image
	 * and their initial position.
	 * @param {number} x The initial position of the player in the x direction
	 * @param {number} y The initial position of the player in the y direction
	 */
	constructor(x, y, sprite) {
		super(x, y, sprite = 'images/char-horn-girl.png');
		this.x = x;
		this.y = y;
		this.result = false;
	}


	/**
	 * @description Prevent the player from moving off the screen.
	 * @param {number} x The horizontal position of the player
	 * @param {number} y The vertical position of the player
	 */
	update(x, y) {
		// the player is trying to move off the right side of the screen
		if (this.x >= 402) {
			this.x = 402;
		}

		// the player is trying to move off the left side of the screen
		if (this.x <= -2) {
			this.x = -2;
		}

		// The player is trying to move off the bottom of the screen
		if (this.y > 400) {
			this.y = 400;
		}

		/*
		 * The player is trying to move off the top of the screen. When the
		 * player reaches the top of the screen, they win the game. When the
		 * game is won, the player's position is reset to their initial
		 * position, all the enemies are stopped, and a message appears on the
		 * screen announcing the victory.
		 */
		if (this.y <= -11) {
			setTimeout(() => {
				// return the player to his initial position
				this.x = 200;
				this.y = 400;
				// stop all enemies
				for (const enemy of allEnemies) {
					enemy.speed = 0;
				}
				//stop the timer
				stopTheTimer(intervalID );
				// print the winning message on the screen
				this.result = true;
				const message = `Well done! You have reached to the water! Play again?`;
				displayResultMessage(message);
				this.render();

			}, 100);
		}
	}

	/**
	 * @description Draw the player on the screen.
	 */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

	/**
	 * @description  Once the key is pressed and depending on the player's move direction,
	 *  move the player's character one block towards the specific direction.
	 * @param {string} direction The direction of the arrow key pressed by the
	 * player
	 */
	handleInput(moveDirection) {
		switch (moveDirection) {
		case 'left':
			this.update(this.x -= 101);
			break;
		case 'up':
			this.update(this.y -= 83);
			break;
		case 'right':
			this.update(this.x += 101);
			break;
		case 'down':
			this.update(this.y += 83);
		}
	}
}


//Instantiate the player's object.
const player = new Player(200, 400);

/**
 * @typedef {object} KeyEvent
 */

/**
 * @event {string} 'keyup'
 * @type {KeyEvent}
 * @description When one of the allowed keys is pressed, call the
 * Player.handleInput method to move the player in the direction indicated by
 * the key pressed.
 * The allowed keys are the four arrows keys: left, up, right, and down.
 */
function activateKeys(){
	document.addEventListener('keyup', (e) => {
		const allowedKeys = {
				37: 'left',
				38: 'up',
				39: 'right',
				40: 'down'
		};
		player.handleInput(allowedKeys[e.keyCode]);
	});
}

/**
 * @description A list containing all the enemies.
 * @type {object[]}
 */
//Define allEnemies array and add all the different position with different speed to the array
const allEnemies = [];
var speed = Math.floor(Math.random() * 100);

const enemy1 = new Enemy(-200, 60, (speed + 350));
const enemy2 = new Enemy(-70, 145, (speed + 250));
const enemy3 = new Enemy(-200, 225, (speed + 100));
const enemy4 = new Enemy(-300, 60, (enemy1.speed));
const enemy5 = new Enemy(-350, 145, (enemy2.speed));
const enemy6 = new Enemy(-450, 225, (enemy3.speed));
//const enemy7 = new Enemy(-200, 60, (enemy3.speed));

//Event added on click which is invoked only once to stop multiple method invocation
const startButton = document.querySelector('.play');
startButton.addEventListener('click', startGame, {once: true});

//Start the game by adding enemies and adding event to the move keys
function startGame(){
	updateTimer();
	allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);
	activateKeys();

}

//Resets the game
function reset() {
	window.location.reload(true);
}

/**
 * When the game is won, print the victory message to the screen.
 */
//Result message display with respect to the player progress
function displayResultMessage(message){

	const result_message = document.querySelector('.winner_panel .modal_content .result_message');
	result_message.textContent = message;
//	Close button to close the modal
	document.querySelector(".winner_panel .modal_content .close").addEventListener('click', function(){
		document.querySelector(".winner_panel").classList.remove("active");
	});
	document.querySelector(".winner_panel .modal_content .play_again").addEventListener('click', reset);

	const winner_pannel = document.querySelector('.winner_panel');
	winner_pannel.className ='winner_panel active';

}

/*
 * This function updates time in seconds and minutes after the interval set 
 * i.e. every second seconds gets updated and after 60 secs minute gets updated
 */

//Global variable declaration to stop the timer
var intervalID;

function updateTimer(){
	let minutes = 0;
	let seconds = 0;
	intervalID  = setInterval(function(){
		seconds += 1;
		if (seconds === 60){
			seconds = 0;
			minutes += 1;
		}
		displayTimer(minutes,seconds);
	}, 990);
	return intervalID ;
}

//Stops the timer and returns timer reading
function stopTheTimer(intervalID ){
	clearInterval(intervalID );
	const timerSlot = document.querySelector('.score-panel .timer');
	const totalTimerReading = timerSlot.textContent;	
	return totalTimerReading;				
}

//Function to display timer in min:sec format
function displayTimer(minutes,seconds){
	const timerSlot = document.querySelector('.score-panel .timer');
	var min = '00';
	var sec = '00';
	if (seconds < 10)
		sec = '0' + seconds;
	else
		sec = seconds;
	if (minutes < 10)
		min = '0' + minutes;
	else
		min = minutes;
	timerSlot.textContent = min + ':' + sec;
}

