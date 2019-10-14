# GAME-IVERSE
**Game-iverse** is a game library that supplies building blocks for games. 

Jumpstart your JS game using game-iverse game libraries.

## CURRENT GAMES 
    * brickbreak
    * snake

## INSTALL
In your project directory:
`npm install game-iverse`

## USAGE
Currently you can't natively require NPM packages in the browser to make a client side game. There are however a couple hacks you can use to make a javascript game. New methods will be added as time goes on.


### Using the browser's native module support
The easiest implementation at the moment is to make a client side game importing the classes directly from the package folder.
In your html add this script: ` <script type="module" src="./example.js"></script>`

#### BrickBreak
```javascript
//add to a js file "example.js"
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

#### Snake
```javascript
//add to a js file "example.js"
// this is the full game just add the script to your html
import { World, Snake, Food, Hud } from '../node_modules/game-iverse/snake/snakeclasses.js'
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
```

### You can use a bundler like webpack or browserify
I'd suggest taking a look at browserify.
Examples coming soon.

### Contributors
jeff-ong
pandabear41
