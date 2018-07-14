class Board {
  float x;
  float y = height/2;
  float w = 10;
  float h = 70;
  float speed = 5;
  char direction = '0';
  char[] keys;

  Board(float x_) {
    x = x_;
  }

  void display() {
    stroke(255);
    rect(x, y, w, h);
  }

  void move() {
    if (direction == 'u') {
      moveUp();
    } else if (direction == 'd') {
      moveDown();
    }
  }


  private void moveUp() {
    y -= speed;
    if (y < 0) {
      y = 0;
    }
  }

  private void moveDown() {
    y += speed;
    if (y > height-h) {
      y = height-h;
    }
  }
}
