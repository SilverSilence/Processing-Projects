class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = 5;
        this.ySpeed = 0;
        this.radius = 10;
    }

    display() {
        fill(255);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    }

    bounce() {
        this.ySpeed *= -1;
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.detectBorderCollision();
    }

    detectBorderCollision() {
        if (this.y - this.radius <= 0) {
            this.y = 0 + this.radius;
            this.bounce();
        } else if (this.y + this.radius >= height) { //leaves field at bottom side
            this.y = height - this.radius;
            this.bounce();
        }
        if (this.x - this.radius <= 0 || this.x + this.radius >= width) { //leaves field on the sides
            this.x = width / 2;
            this.y = random(height / 2 - 50, height / 2 + 50);
            this.xSpeed = random(1) > 0.5 ? this.xSpeed : -this.xSpeed;
        }
    }

    detectCollision(slider) {
        if(this.hasCollided(slider)) {
            slider.deflect(this);
        }
    }

    clamp(value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }

    hasCollided(rectangle) {
        // Find the closest point to the circle within the rectangle
        var closestX = this.clamp(this.x, rectangle.x, rectangle.x + rectangle.w);
        var closestY = this.clamp(this.y, rectangle.y, rectangle.y + rectangle.h);

        // Calculate the distance between the circle's center and this closest point
        var distanceX = this.x - closestX;
        var distanceY = this.y - closestY;

        // If the distance is less than the circle's radius, an intersection occurs
        var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);
        return distanceSquared < (this.radius * this.radius);
    }
}
