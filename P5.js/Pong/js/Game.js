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
    detectCollision();
    p1.display();
    p2.display();
    ball.display();
}



function detectCollision() {
    var rightEdge = p1.x + p1.w; //right edge of left player
    var leftEdge = p2.x; //left edge of right player
    var ballLeftReach = ball.x - ball.radius;
    var ballRightReach = ball.x + ball.radius;
    if (ballLeftReach <= rightEdge && ball.y >= p1.y && ball.y <= p1.y + p1.h) { //hits left board
        ball.x = rightEdge + ball.radius;
        p1.deflect(ball);
    } else if (ballRightReach >= leftEdge && ball.y >= p2.y && ball.y <= p2.y + p2.h) { //hits right board
        ball.x = leftEdge - ball.radius;
        p2.deflect(ball);
    }
}