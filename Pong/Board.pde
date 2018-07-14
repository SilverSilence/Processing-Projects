class Board {
  float x = 20;
  float y = height/2;
  float w = 10;
  float h = 70;
  float speed = 5;
  String direction = "";

  Board(float x_) {
    x = x_;
  }

  void display() {
    stroke(255);
    rect(x, y, w, h);
  }

  void move() {
    if (direction == "UP") {
      moveUp();
    } else if (direction =="DOWN") {
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
