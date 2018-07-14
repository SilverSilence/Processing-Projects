Board p1, p2;

void setup() {
  size(1000, 500);
  p1 = new Board(20);
  p2 = new Board(width - 20 - 10);
  p1.keys = new char[]{'w', 's'};
  p2.keys = new char[]{'i', 'k'};
}

void draw() {
  background(0);
  p1.display();
  p2.display();
  p1.move();
  p2.move();
}

void keyPressed() {
  setDirection(key, true);
}

void keyReleased() {
  setDirection(key, false);
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
