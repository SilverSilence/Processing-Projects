class Slider {
    constructor(x, upKey, downKey) {
        this.upKey = upKey;
        this.downKey = downKey;
        this.x = x;
        this.y = height / 2;
        this.w = 10;
        this.h = 70;
        this.speed = 5;
    }

    display() {
        stroke(255);
        rect(this.x, this.y, this.w, this.h);
    }

    move() {
        if (keyIsDown(this.upKey)) {
            this.moveUp();
        } else if (keyIsDown(this.downKey)) {
            this.moveDown();
        }
    }

    deflect(ball) {
        ball.ySpeed = map(ball.y, this.y, this.y + this.h, -5, 5);
        ball.xSpeed *= -1;
    }

    moveUp() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    moveDown() {
        this.y += this.speed;
        if (this.y > height - this.h) {
            this.y = height - this.h;
        }
    }
}
