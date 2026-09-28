import * as Shapes from "./Shapes.js";

class Shape {
    quadrants = [
        Shapes.shapeTypes.C,
        Shapes.shapeTypes.R,
        Shapes.shapeTypes.R,
        Shapes.shapeTypes.C
    ]
    shapeRotation = 0
    shapePosition = [0, 0]
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        Shapes.drawQuadrant(quadrants[0], this.ctx);
        Shapes.drawQuadrant(quadrants[1], this.ctx);
        Shapes.drawQuadrant(quadrants[2], this.ctx);
        Shapes.drawQuadrant(quadrants[3], this.ctx);
    }
}