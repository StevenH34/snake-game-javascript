// Snake player class
export class Snake {
    constructor(canvasWidth, canvasHeight){
        this.snakeWidth = 20;
        this.snakeHeight = 20;

        this.snakePosition = { 
            x: canvasWidth / 2 - this.snakeWidth / 2, 
            y: canvasWidth / 2 - this.snakeWidth / 2
        }
    }
    draw (context) {
        context.fillStyle = "#000000";
        context.fillRect(this.snakePosition.x, this.snakePosition.y, this.snakeWidth, this.snakeHeight)        
    }
}