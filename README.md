# GAME-IVERSE
jumpstart your JS game using game-iverse game libraries.

## CURRENT GAMES 
    * brickbreak

## INSTALL
in your project directory 
`npm install game-iverse`

## USAGE
Currently you can't natively require NPM packages in the browser to make a client side game. There are however a couple hacks you can use to make a javascript game. new methods will be added as time goes on.

the easiest implementation is to make a client side game importing the classes directly from the package folder.
```javascript
// this is the full game just add the script to your html
import { World, Ball, Paddle, Brick, Hud } from '../node_modules/game-iverse/brickbreak/brickbreakclasses.js'
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

```
