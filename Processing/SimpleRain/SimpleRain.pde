Drop[] drops = new Drop[500];

void setup(){
 size(800,800);
 stroke(255);
 background(0);
 for(int i = 0; i < drops.length; i++) {
   drops[i] = new Drop();
 }
}

void draw() {
  background(0);
  for(int i = 0; i < drops.length; i++) {
    drops[i].display();
    drops[i].fall();
  }
}
