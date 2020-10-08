// Snake player class
export class Snake {
    constructor(canvasWidth, canvasHeight){
        this.snakeWidth = 20;
        this.snakeHeight = 20;

        this.snakePosition = { 
            x: canvasWidth / 2 - this.snakeWidth / 2, 
            y: canvasHeight / 2 - this.snakeHeight / 2
        }
    }

    draw(context) {
        context.fillStyle = "#000000";
        context.fillRect(this.snakePosition.x, this.snakePosition.y, this.snakeWidth, this.snakeHeight)        
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.snakePosition.y += 10 / deltaTime;
    }
}