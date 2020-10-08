// Snake player class
export class Snake {
    constructor(canvasWidth, canvasHeight){
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.snakeWidth = 20;
        this.snakeHeight = 20;

        this.snakeSpeed = 7;
        this.snakeXSpeed = 0;
        this.snakeYSpeed = 0;

        this.snakePosition = {  // Start snake head in the middle
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
        this.snakeXSpeed = -this.snakeSpeed * 1; //why *1 and not just -10?
        this.snakeYSpeed = 0;
        console.log("Left");
    }
    moveUp() {
        this.snakeXSpeed = 0;
        this.snakeYSpeed = -this.snakeSpeed * 1;
        console.log("Up");
    }
    moveRight() {
        this.snakeXSpeed = this.snakeSpeed * 1;
        this.snakeYSpeed = 0;
        console.log("Right");
    }
    moveDown() {
        this.snakeXSpeed = 0;
        this.snakeYSpeed = this.snakeSpeed * 1;
        console.log("Down");
    }

    draw(context) {
        context.fillStyle = "#000000";
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
        if (this.snakePosition.y + this.snakeHeight > this.canvasHeight) {
            this.resetSnakePosition();
        }
    }
}