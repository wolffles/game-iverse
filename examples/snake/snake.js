//add to a js file "example.js"
// this is the full game just add the script to your html
import { World, Snake, Food, Hud } from '../../src/snake/snakeclasses.js'
var canvas = new World(document.getElementById("canvas"));
var hud = new Hud(canvas);
var snake = new Snake(canvas);
var food = new Food(canvas);
var count = 0;

snake.keyUp
snake.keyDown
snake.draw()
food.draw()
var draw = () => {
    requestAnimationFrame(draw)
    // reduce to 15 fps.
    if (++count < 4) {
        return;
    }
    count = 0;

    canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    snake.draw()
    food.draw()
    hud.draw()

    food.collisionDetection(snake, hud)
    snake.movement()

}
draw();
