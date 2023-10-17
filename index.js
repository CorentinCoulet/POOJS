import Rectangle from "./rectangle.js";
import Ellipse from "./ellipse.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// const rectangle = new Rectangle(0, 0, 80, 120, 'forestgreen');
// const ellipse = new Ellipse(100, 100, 65, 35, 'firebrick');
// console.log(rectangle, ellipse);

// rectangle.draw(ctx);
// ellipse.draw(ctx);

// document.querySelector('form').addEventListener("submit", function(event){
//     event.preventDefault();
//     const champX = document.getElementById('champX').value;
//     const champY = document.getElementById('champY').value;
//     const champLargeur = document.getElementById('champLargeur').value;
//     const champHauteur = document.getElementById('champHauteur').value;
//     const champColor = document.getElementById('champColor').value;

//     const rectangle = new Rectangle (champX, champY, champLargeur, champHauteur, champColor);
//     rectangle.draw(ctx);
// });

// document.querySelector('#clearCanvas').addEventListener("click", function(event){
//     event.preventDefault();
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// });

addEventListener("click", function(event){
    const valueX = event.clientX;
    const valueY = event.clientY;
    const randomValue = Math.floor(Math.random() * (80 - 20) + 20);

    const ellipse = new Ellipse(valueX, valueY, randomValue, randomValue, '#'+(Math.random()*0xFFFFFF<<0).toString(16));
    ellipse.draw(ctx);
});