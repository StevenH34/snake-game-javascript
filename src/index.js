import {Snake} from "./snake.js";

let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d"); // rendering context

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

// let scale = 10;

let snake = new Snake(CANVAS_WIDTH, CANVAS_HEIGHT);
let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    snake.update(deltaTime);
    snake.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();
