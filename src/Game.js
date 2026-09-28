import * as Shapes from "./Shapes.js";


export class Game {
    
    constructor(ctx) {
        /** @type {CanvasRenderingContext2D} */
        this.ctx = ctx;
    }
    renderLoop(dt) {
        Shapes.drawQuadrant(Shapes.shapeTypes.C, this.ctx);
    }

    gameLoop() {

    }
}
