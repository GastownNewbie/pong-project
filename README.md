![pong](https://user-images.githubusercontent.com/49002281/56876871-3cd9e280-69ff-11e9-9b23-1371ac95a042.jpg)
# Pong Game

A basic pong game using SVGs and javascript.

## Setup

Using a boiler plate downloaded from https://github.com/redacademy/pong-starter. 
Intialized a new repo on GitHub.

**Install dependencies:**

The npm dependency files package-lock.json and package.json are installed and part of this game.

**Run locally with Webpack Dev Server:**

After installing all the files, npn run start will initialize the game. 

**Build for production:**

Use 'npm run build' to run the build field from the package.json scripts field.

## Keys
Before instantiating each player in the game, add Key constants to settings.js

    a: "a",        // player 1 up key
    z: "z",        // player 1 down key
    up: "ArrowUp",       // player 2 up key
    down: "ArrowDown",     // player 2 down key
    spaceBar: " " // to use later...


Use an Eventlistener to listen for 'keydown' events.

    document.addEventListener('keydown', (event) => {
        console.log(event);
        switch(event.key){
          case KEYS.spaceBar:
            this.pause = !this.pause;
          break;
    
    up() {
        this.y = this.y - this.speed;
        this.y = Math.max(0, this.y - this.speed);
    }
    down() {
        this.y = this.y + this.speed;
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
    }

    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
        
**Player 1:**
* a: up
* z: down

       this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z,
      'green'
        );


**Player 2:**
* ▲ : up
* ▼: down

        this.player2 = new Paddle(
        this.height,
        this.paddleWidth,
        this.paddleHeight,
        (this.width - this.boardGap - this.paddleWidth),
        (this.height - this.paddleHeight) / 2,
        KEYS.up,
        KEYS.down
        );

Try playing or making the game! Hope you enjoy it.
