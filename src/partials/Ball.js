import{ SVG_NS, KEYS } from "../settings";

export default class Ball {
    constructor(radius, boardWidth, boardHeight, color) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.color = "",
      this.direction = 1;
      this.reset();
    } // end of constructor

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while(this.vy ===0){
            this.vy = Math.floor(Math.random() * 10 - 5);   
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
      } // end of reset

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
      }

    render(svg, player1, player2){

        // update vector direction 60 times a secon
        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();


        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x); // x position
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'fill', '#00FF00');
        
        svg.appendChild(circle);


    }


  } // end of Ball class