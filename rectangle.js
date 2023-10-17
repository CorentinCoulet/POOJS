import Shape from "./shape.js";

export default class Rectangle extends Shape {
    #width;
    #height;
    #color;

    constructor (x, y, width, height, color) {
        super(x, y);
        this.#width = width;
        this.#height = height;
        this.#color = color;
    }

    draw(ctx){
        ctx.fillStyle = this.#color;
        ctx.fillRect(super.x, super.y, this.#width, this.#height);
    }
}