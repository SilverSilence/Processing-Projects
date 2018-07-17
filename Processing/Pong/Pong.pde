/*
Ideas:
Give ball and board random colors on each bounce or deflect
Make it a 4 player game, covering each side
Display score
Random xSpeed or acceleration on deflects
Random "speed Up" spawns in the field
*/

Board p1, p2;
Ball ball;

void setup() {
  size(700, 500);
  p1 = new Board(20);
  p2 = new Board(width - 20 - p1.w);
  ball = new Ball();
}

void draw() {
  background(0);
  p1.move();
  p2.move();
  ball.move();
  detectCollision();
  p1.display();
  p2.display();
  ball.display();
}

void keyPressed() {
  setDirection(key, true);
}

void keyReleased() {
  setDirection(key, false);
}

void detectCollision() {
  float rightEdge = p1.x + p1.w; //right edge of left player
  float leftEdge = p2.x; //left edge of right player
  float ballLeftReach = ball.x - ball.radius;
  float ballRightReach = ball.x + ball.radius;
  if (ballLeftReach <= rightEdge && ball.y >= p1.y && ball.y <= p1.y + p1.h) { //hits left board
    ball.x = rightEdge + ball.radius;
    p1.deflect(ball);
  } else if (ballRightReach >= leftEdge && ball.y >= p2.y && ball.y <= p2.y + p2.h) { //hits right board
    ball.x = leftEdge - ball.radius;
    p2.deflect(ball);
  }
}

void setDirection(int keyC, boolean isMoving) {
  if (isMoving) {
    switch(keyC) {
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
    switch(keyC) {
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
