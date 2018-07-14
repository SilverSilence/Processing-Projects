Board p1, p2;

void setup() {
  size(1000, 500);
  p1 = new Board(20);
  p2 = new Board(width - 20 - 10);
}

void draw() {
  background(0);
  p1.move();
  p2.move();
  p1.display();
  p2.display();
}

void keyReleased() {
  if (key == CODED) {
    if (keyCode == UP || keyCode == DOWN) {
      p1.direction = "";
    }
  }
  if (key == 'w' || key =='s') {
    p2.direction ="";
  }
}

void keyPressed() {
  if (key == CODED) {
    if (keyCode == UP) {
      p1.direction = "UP";
    } else if (keyCode == DOWN) {
      p1.direction = "DOWN";
    } else {
      p1.direction ="";
    }
  }
  if (key == 'w') {
    p2.direction ="UP";
  } else if (key =='s') {
    p2.direction ="DOWN";
  } else {
    p2.direction = "";
  }
}
