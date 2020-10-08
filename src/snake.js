// Snake player class

/*
Notes:
I think the wall collision is too quick or too soon.
Snake head moves a little too fast.
*/

export class Snake {
    constructor(canvasWidth, canvasHeight){
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.snakeWidth = 20;
        this.snakeHeight = 20;

        this.snakeSpeed = 5;
        this.snakeXSpeed = 0;
        this.snakeYSpeed = 0;

        this.snakePosition = {  // Start snake head in middle
            x: canvasWidth / 2 - this.snakeWidth / 2, 
            y: canvasHeight / 2 - this.snakeHeight / 2
        }
    }

    resetSnakePosition(){
        this.snakePosition.x = this.canvasWidth / 2 - this.snakeWidth / 2;
        this.snakePosition.y = this.canvasHeight / 2 - this.snakeHeight / 2;

        this.snakeXSpeed = 0;
        this.snakeYSpeed = 0;
    }

    moveLeft() {
        this.snakeXSpeed = -this.snakeSpeed; //why *1 and not just -10?
        this.snakeYSpeed = 0;
    }
    moveUp() {
        this.snakeXSpeed = 0;
        this.snakeYSpeed = -this.snakeSpeed;
    }
    moveRight() {
        this.snakeXSpeed = this.snakeSpeed;
        this.snakeYSpeed = 0;
    }
    moveDown() {
        this.snakeXSpeed = 0;
        this.snakeYSpeed = this.snakeSpeed;
    }

    draw(context) {
        context.fillStyle = "#32CD32";
        context.fillRect(this.snakePosition.x, this.snakePosition.y, this.snakeWidth, this.snakeHeight)        
    }

    update(deltaTime) {
        if(!deltaTime) return;

        // Change snake head position
        this.snakePosition.x += this.snakeXSpeed;
        this.snakePosition.y += this.snakeYSpeed;

        // Hit Wall: reset snake head
        if (this.snakePosition.x < 0) { this.resetSnakePosition(); }
        if ((this.snakePosition.x + this.snakeWidth) > this.canvasWidth) {            
            this.resetSnakePosition();
        }
        if (this.snakePosition.y < 0) { this.resetSnakePosition(); }
        if ((this.snakePosition.y + this.snakeHeight) > this.canvasHeight) {
            this.resetSnakePosition();
        }
    }
}