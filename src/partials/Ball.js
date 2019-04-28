import{ SVG_NS, KEYS } from "../settings";
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";

export default class Ball {
    constructor(radius, boardWidth, boardHeight, color = 'blue') {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.ping = new Audio('public/sounds/pong-01.wav');
      this.color = color;


      this.reset();
    
}// end of constructor



    

      wallCollision(){
          const hitLeft = this.x - this.radius <= 0;
          const hitRight = this.x + this.radius >= this.boardWidth;
          const hitTop = this.y - this.radius <= 0;
          const hitBottom = this.y + this.radius >= this.boardHeight;
          if(hitLeft || hitRight){ //left or rright
            //how to flip the x vector
            this.vx = -this.vx;
          } else if(hitBottom || hitTop){ //top or bottom
            // how to flip the y vector
            this.vy = -this.vy;
            

          }
      } //end of wall collision

      paddleCollision(player1, player2) {
        if (this.vx > 0) {
          // ball is moving the right and only check for player2
          let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
          let [leftX, rightX, topY, bottomY] = paddle;
          if(
           (this.x + this.radius >= leftX) &&
           (this.x + this.radius <= rightX) &&
           (this.y >= topY && this.y <= bottomY)
           ){
            this.vx = -this.vx;
            // sound for hitting paddle
            this.ping.play();
               // add pop-up Save!
               alert("Yellow made a save!");

          }// end of if
        } else {
            // check the player1 collision
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if(
              (this.x - this.radius <= rightX) &&
              (this.x - this.radius >= leftX) &&
              (this.y >= topY && this.y <= bottomY)
            ){
              this.vx = -this.vx;
             
              // sound for hitting paddle
              this.ping.play();
                // add pop-up Save!
                alert("Green made a save!");
            }
          }
      }// paddleCollision

      // add goal method
      goal(player){
          player.score++;
          this.reset();
          console.log(player.score);


      }

      
      // add declare winner method - couldn't figure out sequence/code
      //document.addEventListener(player.score <= 10) { alert("Winner!");
       // });

      reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while(this.vy ===0){
            this.vy = Math.floor(Math.random() * 10 - 5);   
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
      } // end of reset
    

    render(svg, player1, player2){

        // update vector direction 60 times a secon
        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(player1, player2);

        // draw ball
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x); // x position
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'fill', this.color);
        svg.appendChild(circle);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;
        if(rightGoal){
            this.goal(player1);
            this.direction = 1;

        } else if(leftGoal){
            this.goal(player2);
            this.direction = -1;

        }


    }


  } // end of Ball class