export const shapeTypes = Object.freeze({
        C: "c",
        R: "r",
        W: "w",
        S: "s"
    });
/** 
 * @param {shapeTypes} type
 * @param {CanvasRenderingContext2D} ctx
 */
export function drawQuadrant(type, ctx) {
    switch (type) {
        default: console.log("[Shapes] Invalid or missing shape code '" + type + "'"); return;
        case this.shapeTypes.C:

            ctx.beginPath();
            ctx.moveTo(0, 0); 
            ctx.lineTo(100,100);

            // apply styles
            ctx.strokeStyle = "red";

            ctx.stroke();
    }

}