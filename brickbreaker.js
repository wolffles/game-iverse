//add to a js file "example.js"
// this is the full game just add the script to your html
import { World, Ball, Paddle, Brick, Hud } from './brickbreak/brickbreakclasses.js'
var canvas = new World(document.getElementById("canvas"));
var ball = new Ball(canvas);
var brick = new Brick(canvas);
var hud = new Hud(canvas);
var paddle = new Paddle(canvas);

paddle.keyUp
paddle.keyDown
paddle.mouseMove
brick.bricksArray(brick.bricks)
ball.draw()
var draw = () => {
    canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    brick.draw()
    ball.draw()
    paddle.draw()
    hud.draw()
    ball.boundaries(ball.x, paddle)
    brick.collisionDetection(ball, hud)
    paddle.movement()

    ball.x += ball.dx;
    ball.y += ball.dy;
    requestAnimationFrame(draw)
}
draw();
