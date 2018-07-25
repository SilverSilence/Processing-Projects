var p1, p2;
var ball;
var wallOffset;

function setup() {
    wallOffset = 20;
    var gameBoard = createCanvas(700, 500);
    gameBoard.parent("GameField");
    p1 = new Slider(wallOffset, 87, 83); //w & s
    p2 = new Slider(width - wallOffset - p1.w, 73, 75); //i & k
    ball = new Ball();
    frameRate(60);
}

function draw() {
    background(0);
    p1.move();
    p2.move();
    ball.move();
    ball.detectCollision(p1);
    ball.detectCollision(p2);
    p1.display();
    p2.display();
    ball.display();
}