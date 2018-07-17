class Ball {
  float x, y, xSpeed = 5, ySpeed = 0;
  float radius = 10;
  
  Ball() {
    x = width/2;
    y = height/2;
  }

  void display() {
    fill(255);
    ellipse(x, y, radius*2, radius*2);
  }

  void bounce() {
    ySpeed *= -1;
  }

  void move() {
    x += xSpeed;
    y += ySpeed;
    detectBorderCollision();
  }

  void detectBorderCollision() { //leaves field at top side
    if (y - radius <= 0) {
      y = 0 + radius;
      bounce();
    } else if (y + radius >= height) { //leaves field at bottom side
      y = height - radius;
      bounce();
    }
    if(x - radius <= 0 || x + radius >= width) { //leaves field on the sides
      x = width / 2;
      y = random(height/2 - 50, height/2 + 50);
      xSpeed = random(1) > 0.5 ? xSpeed : -xSpeed;
    }
  }
}
