import {Snake} from "./snake.js";

let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d"); // rendering context

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

// let scale = 10;

let snake = new Snake(CANVAS_WIDTH, CANVAS_HEIGHT);
snake.draw(context);



