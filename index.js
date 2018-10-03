let container = document.getElementById("container");
let shapeBox = document.getElementById("box");
let shape;
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let form4 = document.getElementById('form4');
let xPos = 200;
let yPos = 300;

let circleBtn = document.getElementById("circleBtn");
let circleRadius = document.getElementById('circleRadius');

let rectBtn = document.getElementById("rectBtn");
let rectWidth = document.getElementById('rectWidth');
let rectHeight = document.getElementById('rectHeight');

let sqBtn = document.getElementById("sqBtn");
let sqLength = document.getElementById('sqLength');

let triBtn = document.getElementById("triBtn");
let triHeight = document.getElementById('triHeight');

rectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Rectangle(rectWidth.value, rectHeight.value);
    form1.reset();
})

sqBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Square(sqLength.value);
    form2.reset();
})

triBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Triangle(triHeight.value);
    form3.reset();
})

circleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    new Circle(radius.value);
    form4.reset();
})

class Shape {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
        shape = document.createElement('div');
        shapeBox.appendChild(shape);
        this.shape = shape;
        this.removeShape();
    }

    removeShape() {
        shape.addEventListener('dblclick', () => {
            shapeBox.removeChild(shape);
        })
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(xPos, yPos);
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = width;
        this.height = height;
        this.shape.id = 'rectangle';
        this.createRectangle();
    }

    createRectangle() {
        this.shape.style.width = `${this.width}px`;
        this.shape.style.height = `${this.height}px`;
    }
}

class Square extends Shape {
    constructor(length) {
        super(xPos, yPos);
        this.xPos = xPos;
        this.yPos = yPos;
        this.length = length;
        this.shape.id = 'square';
        this.createSquare();
    }

    createSquare() {
        this.shape.style.width = `${this.length}px`;
        this.shape.style.height = `${this.length}px`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(xPos, yPos);
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.shape.id = 'circle';
        this.createCircle();
    }

    createCircle() {
        this.shape.style.width = `${this.radius * 2}px`;
        this.shape.style.height = `${this.radius * 2}px`;
        this.shape.style.borderRadius = `${this.radius}px`;
        this.shape.style.top = `${this.yPos}px`;
        this.shape.style.left = `${this.xPos}px`;
    }
}

class Triangle extends Shape {
    constructor(height){
        super(xPos, yPos);
        this.xPos = xPos;
        this.yPos = yPos;
        this.height = height;
        this.shape.id = 'triangle';
        this.createTriangle();
    }

    createTriangle() {
        this.shape.style.borderBottom = `${this.height}px solid red`;
        this.shape.style.borderRight = `${this.height}px solid transparent`;
    }
}