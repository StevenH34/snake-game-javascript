let htmlCanvas = document.getElementById("gameCanvas");
let context = htmlCanvas.getContext("2d"); // rendering context
let scale = 10;
let rows = htmlCanvas.height / scale;
let columns = htmlCanvas.width / scale;

//context.fillRect(20, 20, 10, 10);
var snake;
