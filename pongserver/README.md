## USAGE
An example setup could look like this:
```
test-game
|   public
----|   example.html
----|   example.js
|   index.js
```

First, `npm install --save game-iverse` and `npm install --save socket.io`. Then our source could look like this:

```example.html```
```html
<canvas id="canvas"></canvas>
<script src="/socket.io/socket.io.js"></script>
<script type="module" src="./example.js"></script>
```

```example.js```
```js
import { World, Ball, Paddle, Hud } from '/pongserver/pongclasses.js';
var world = new World(document.getElementById("canvas"));
var ball = new Ball(world);
var hud = new Hud(world);
var p1paddle = new Paddle(world);
var p2paddle = new Paddle(world);
p1paddle.keyUp;
p1paddle.keyDown;
var lastUpdate = performance.now();
var socket = io('', {query: `width=${world.canvas.width}&height=${world.canvas.height}`});
socket.on('update', function(state) {
    p1paddle.setState(state.p1paddle);
    p2paddle.setState(state.p2paddle);
    ball.setState(state.ball);
    hud.setState(state.hud);
});
var draw = (time) => {
    if (performance.now() - lastUpdate >= 30) {
        lastUpdate = performance.now();
        socket.emit('update', {p1paddle: p1paddle.getState()});
    }
    world.ctx.clearRect(0, 0, world.canvas.width, world.canvas.height);
    ball.draw();
    p1paddle.draw();
    p2paddle.draw();
    hud.draw();
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
```

```index.js```
```js
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const path = require('path');
const io = require('socket.io')(server);
const gameiverse = require('../Game-iverse')
const port = 8000;

app.set('port', port);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/example.html'));
});
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, './node_modules/game-iverse')))

io.on('connection', (socket) => {
    var world = new gameiverse.pongserver.World(socket.handshake.query.width, socket.handshake.query.height);
    var ball = new gameiverse.pongserver.Ball(world);
    var p1paddle = new gameiverse.pongserver.Paddle(world, 'player1');
    var p2paddle = new gameiverse.pongserver.AIPaddle(world, 'player2', ball);
    var hud = new gameiverse.pongserver.Hud();

    socket.on('update', (state) => {
        p1paddle.setState(state.p1paddle);
    });
    var tc = 0;
    var tick = () => {
        p1paddle.movement();
        p2paddle.movement();
        ball.boundaries([p1paddle, p2paddle], hud);
        ball.movement();
        if (tc >= 6) {
            socket.emit('update', {
                p1paddle: p1paddle.getState(),
                p2paddle: p2paddle.getState(),
                hud: hud.getState(),
                ball: ball.getState()
            });
            tc = 0;
            return;
        }
        tc += 1;
    }

    var iv = setInterval(tick, 5);

    socket.on('disconnect', () => {
        clearInterval(iv);
    });
});

server.listen(port, function() {
});
```

You should now be able to run the game by visiting `localhost:8000`.
