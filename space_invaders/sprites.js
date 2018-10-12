export class World {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
    }

}

export class Ball {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx,
        this.x = canvas.width / 2,
        this.y = canvas.height - 30,
        this.ballRadius = 10
        this.dx = 2,
        this.dy = -2
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    boundries() {
        if (this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > this.canvas.height - this.ballRadius || this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }
    }
}

export class GameLogic {
    constructor (world) {
        this.canvas = world.canvas
        this.ctx = world.ctx,
        this.x = canvas.width / 2,
        this.y = canvas.height - 30,
        this.ballRadius = 10
        this.dx = 2,
        this.dy = -2,
        this.ball = {}
    }
   
}

export class Paddle {
    constructor (world) {
        var self = this;
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        self.rightPressed = false;
        self.leftPressed = false;
        this.keyDownHandler= function(e) {
            if (e.keyCode == 39) {
                self.rightPressed = true;
            }
            else if (e.keyCode == 37) {
                self.leftPressed = true;
            
            }
        };
        this.keyUpHandler= function(e) {
            if (e.keyCode == 39) {
                self.rightPressed = false;
            }
            else if (e.keyCode == 37) {
                self.leftPressed = false;
                
            }
        };
        this.keyDown = document.addEventListener("keydown", this.keyDownHandler, false);
        this.keyUp = document.addEventListener("keyup", this.keyUpHandler, false);
    }

    draw()  {
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight-5, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    movement() {
        if(this.leftPressed === true){
            console.log('movement')
        } 
        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
            this.paddleX += 7;
        } else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
    }
}