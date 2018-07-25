class Slider {
    constructor(x_) {
        this.x = x_;
        this.y = height / 2;
        this.w = 10;
        this.h = 70;
        this.speed = 5;
        this.direction = '0';
    }

    display() {
        stroke(255);
        rect(this.x, this.y, this.w, this.h);
    }

    move() {
        if (this.direction == 'u') {
            this.moveUp();
        } else if (this.direction == 'd') {
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
