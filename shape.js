export default class Shape {
    #x;
    #y;

    constructor (x, y){
        this.#x = x;
        this.#y = y;
    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }
}