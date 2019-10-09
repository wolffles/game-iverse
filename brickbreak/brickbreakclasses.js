export class World {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
}

export class Hud {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.score = 0;
    }

    draw() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: " + this.score, 8, 20);
    }
}

export class Ball {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.ballRadius = 10;
        this.dx = 2;
        this.dy = -2;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    boundaries(x, paddle) {
        // vertical boundarries
        if (
            x + this.dx > canvas.width - this.ballRadius ||
            x + this.dx < this.ballRadius
        ) {
            this.dx = -this.dx;
        }
        //horizontal boundaries
        if (this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
        // if ball y + next frame > the end of the canvas - ball radius
        else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
            // if ball x is within the paddle boundries
            if (x > paddle.paddleX && x < paddle.paddleX + paddle.paddleWidth) {
                this.dy = -this.dy;
            } else {
                alert("GAME OVER");
                window.location.reload();
            }
        }
    }
}

export class Brick {
    constructor(
        world,
        brickRowCount = 3,
        brickColumnCount = 5,
        brickWidth = 75,
        brickHeight = 20,
        brickPadding = 10,
        brickOffsetTop = 30,
        brickOffsetLeft = 30
    ) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.brickRowCount = brickRowCount;
        this.brickColumnCount = brickColumnCount;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickPadding = brickPadding;
        this.brickOffsetTop = brickOffsetTop;
        this.brickOffsetLeft = brickOffsetLeft;
        this.bricks = [];
        this.bricksArray = function () {
            for (let c = 0; c < this.brickColumnCount; c++) {
                this.bricks[c] = [];
                for (let r = 0; r < this.brickRowCount; r++) {
                    this.bricks[c][r] = {
                        x: 0,
                        y: 0,
                        status: 1
                    };
                }
            }
        };

        this.draw = function () {
            for (let c = 0; c < this.brickColumnCount; c++) {
                for (let r = 0; r < this.brickRowCount; r++) {
                    if (this.bricks[c][r].status == 1) {
                        const brickX =
                            c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
                        const brickY =
                            r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
                        this.bricks[c][r].x = brickX;
                        this.bricks[c][r].y = brickY;
                        this.ctx.beginPath();
                        this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                        this.ctx.fillStyle = "#0095DD";
                        this.ctx.fill();
                        this.ctx.closePath();
                    }
                }
            }
        };

        this.collisionDetection = function (ball, hud) {
            for (let c = 0; c < this.brickColumnCount; c++) {
                for (let r = 0; r < this.brickRowCount; r++) {
                    let b = this.bricks[c][r];
                    if (b.status === 1) {
                        if (
                            ball.x > b.x &&
                            ball.x < b.x + this.brickWidth &&
                            ball.y > b.y &&
                            ball.y < b.y + this.brickHeight
                        ) {
                            ball.dy = -ball.dy;
                            b.status = 0;
                            hud.score++;
                            if (hud.score == this.brickColumnCount * this.brickRowCount) {
                                alert("YOU WIN, CONGRATULATIONS!");
                                window.location.reload();
                            }
                        }
                    }
                }
            }
        };
    }
}

export class Paddle {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2; // location
        this.rightPressed = false;
        this.leftPressed = false;
        this.keyDown = document.addEventListener(
            "keydown",
            e => this.keyDownHandler(e),
            false
        );

        this.keyUp = document.addEventListener(
            "keyup",
            e => this.keyUpHandler(e),
            false
        );

        this.mouseMove = document.addEventListener(
            "mousemove",
            e => this.mouseMoveHandler(e),
            false
        );
    }
    keyUpHandler(e) {
        if (e.keyCode == 39) {
            this.rightPressed = false;
        } else if (e.keyCode == 37) {
            this.leftPressed = false;
        }
    }

    keyDownHandler(e) {
        if (e.keyCode == 39) {
            this.rightPressed = true;
        } else if (e.keyCode == 37) {
            this.leftPressed = true;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.paddleX,
            this.canvas.height - this.paddleHeight,
            this.paddleWidth,
            this.paddleHeight
        );
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    movement() {
        if (
            this.rightPressed &&
            this.paddleX < this.canvas.width - this.paddleWidth
        ) {
            this.paddleX += 7;
        } else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
    }

    mouseMoveHandler(e) {
        const relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    }
}
