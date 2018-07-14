class Drop {
  float x;
  float y;
  float len;
  float gravity;
  float speed;
  float z;
  float thickness;
  
  Drop() {
    reset(); 
  }
  
  void display() {
    stroke(0,0,255);
    strokeWeight(thickness);
    line(x,y,x, y+len);
  }
  
  void fall() {
    y += speed;
    speed += gravity;
    if(y > height) {
      reset();
    }
  }
  
  void reset() {
      z = random(20); //0 close, 20 far
      gravity = map(z,0,20,0.05,0);
      speed = map(z,0,20,10,5);
      thickness = map(z,0,20,3,1);
      len = map(z,0,20,20,10);
      y = random(-200, -100);
      x = random(800);
  }
}
