import Shape from "./shape.js";

export default class Ellipse extends Shape {
    #rx;
    #ry;
    #color;

    constructor (x, y, rx, ry, color) {
        super(x, y);
        this.#rx = rx;
        this.#ry = ry;
        this.#color = color;
    }

    draw(ctx){
        ctx.fillStyle = this.#color;
        ctx.beginPath();
        ctx.ellipse(super.x, super.y, this.#rx, this.#ry, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
}