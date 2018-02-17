export class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.x = initX;
        this.y = initY;
    }

    getColor() {
        return this.color;
    }

    setColor(val) {
        this.color = val;
    }

    getCoords() {
        return { x: this.initX, y: this.initY };
    }

    moveTo(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

export class Rectangle extends Shape {
    constructor(color, initX, initY, initWIdth, initHeight) {
        super(color, initX, initY);
        this.width = initWIdth;
        this.height = initHeight;
    }

    setWidth(newWidth) {
        this.width = newWidth;
    }

    setHeight(newHeight) {
        this.height = newHeight;
    }

    getDims() {
        return { width: this.width, height: this.height };
    }

    draw() {
        const str = `Drawing a rectangle at:\n  (x:${this.x}, y:${this.y})\nWith dimensions:\n  width: ${this.width}, height: ${this.height}\nFilled with color:\n  color: ${this.color}`;
        console.log(str);
    }
}

export class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY);
        this.radius = initRadius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(val) {
        this.radius = val;
    }

    draw() {
        const str = `Drawing a circle at:\n  (x:${this.x}, y:${this.y})\nWith dimensions:\n  radius: ${this.radius}\nFilled with color:\n  color: ${this.color}`;
        console.log(str);
    }
}


