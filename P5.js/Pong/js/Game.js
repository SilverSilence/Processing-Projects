var p1, p2;
var ball;

function setup() {
    var gameBoard = createCanvas(700, 500);
    gameBoard.parent("GameField");
    p1 = new Slider(20);
    p2 = new Slider(width - 20 - p1.w);
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

function keyPressed() {
    setDirection(key, true);
}

function keyReleased() {
    setDirection(key, false);
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

function setDirection(keyC, isMoving) {
    if (isMoving) {
        switch (keyC.toLowerCase()) {
            case 'w':
                p1.direction = 'u';
                break;
            case 's':
                p1.direction = 'd';
                break;
            case 'i':
                p2.direction = 'u';
                break;
            case 'k':
                p2.direction = 'd';
                break;
        }
    } else {
        switch (keyC.toLocaleLowerCase()) {
            case 'w':
                p1.direction = '0';
                break;
            case 's':
                p1.direction = '0';
                break;
            case 'i':
                p2.direction = '0';
                break;
            case 'k':
                p2.direction = '0';
                break;
        }
    }
}
