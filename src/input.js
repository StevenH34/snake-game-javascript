export class Input {
    constructor(snake) {
        document.addEventListener('keydown', (event) =>{
            // alert(event.keyCode);
            switch(event.keyCode){
                case 37:
                    snake.moveLeft();
                    break;
                case 38:
                    snake.moveUp();
                    break;
                case 39:
                    snake.moveRight();
                    break;
                case 40:
                    snake.moveDown();
                    break;    
            }
        });
    }
}