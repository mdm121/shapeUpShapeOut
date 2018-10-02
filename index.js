class Shape {
    constructor(xPos, yPos) {
        xPos = 300;
        yPos = 300;
        this.xPos = xPos;
        this.yPos = yPos;
    }

};

class Circle extends Shape {
    constructor(radius) {
        super(xPos, yPos);
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    createCircle() {
        let c = document.getElementsByClassName("shapeBox");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        ctx.fill().style.backgroundColor('maroon');
    }

}

class Triangle extends Shape {
    constructor(height){
        super(xPos, yPos);
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        let base = 

    }

    createTriangle() {
        let c = document.getElementsByClassName("shapeBox");
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(20,20);
        ctx.lineTo(20,100);
        ctx.lineTo(70,100);
        ctx.stroke();

    }
}