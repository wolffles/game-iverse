export class World {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
    };
}

export class Hud {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx
        this.score = 0;
    };
    draw() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: " + this.score, 8, 20);
    };
}

export class Snake {
    constructor(world, grid = 16) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.grid = grid;
        this.x = Math.floor(canvas.width / this.grid / 2) * this.grid;
        this.y = Math.floor(canvas.height / this.grid / 2) * this.grid;
        this.snakeLength = 4;
        this.snakeCells = [];
        this.dx = 1;
        this.dy = 0;
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.keyDown = document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
        this.keyUp = document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
    }

    keyUpHandler(e) {
        if (e.keyCode == 39) {
            this.rightPressed = false;
        }
        else if (e.keyCode == 37) {
            this.leftPressed = false;
        }
        else if (e.keyCode == 38) {
			this.upPressed = false;
        }
        else if (e.keyCode == 40) {
			this.downPressed = false;
        }
    };  

    keyDownHandler(e) {
        if (e.keyCode == 39) {
            this.rightPressed = true;
        }
        else if (e.keyCode == 37) {
            this.leftPressed = true;
        }
        else if (e.keyCode == 38) {
			this.upPressed = true;
        }
        else if (e.keyCode == 40) {
			this.downPressed = true;
        }
    };

    movement(){
    	// Get keymovement and acceralation of snake and prevent oppisite travel.
        if (this.rightPressed && this.dx != -1) {
            this.dx = 1;
            this.dy = 0;
        } 
        else if (this.leftPressed && this.dx != 1) {
            this.dx = -1;
            this.dy = 0;
        } 
        else if (this.upPressed && this.dy != 1) {
            this.dx = 0;
            this.dy = -1;
        }
        else if (this.downPressed && this.dy != -1) {
            this.dx = 0;
            this.dy = 1;
        }

        // Move snake.
        this.x += this.dx * this.grid;
        this.y += this.dy * this.grid;

        // Prevent movement to edge.
        if (this.x < 0) {
        	this.x = this.canvas.width - this.grid;
        } 
        else if (this.x >= this.canvas.width) {
        	this.x = 0;
        }

        if (this.y < 0) { 
        	this.y = this.canvas.height - this.grid;
        }
      	else if (this.y >= this.canvas.width) {
        	this.y = 0;
        }

        // Add another snake link.
        this.snakeCells.unshift({x: this.x, y:this.y});

        // If link is at max pop one off.
        if (this.snakeCells.length > this.snakeLength) {
        	this.snakeCells.pop();
        }
    };

    draw() {
    	var self = this;
    	this.snakeCells.forEach(function(cell,cInx) {
    		self.ctx.fillStyle = 'green';
    		self.ctx.fillRect(cell.x, cell.y, self.grid, self.grid);

    		for (var i = cInx + 1; i < self.snakeCells.length; i++){
    			if (cell.x == self.snakeCells[i].x && cell.y == self.snakeCells[i].y) {
                   	alert("GAME OVER, SCORE: " + String(self.snakeLength - 4) + ". CONGRATULATIONS!!");
                    document.location.reload();
    			}
    		}
    	});
    };

}

export class Food { 
    constructor(world, grid = 16) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.grid = grid;
        this.x = canvas.width - (this.grid * 6);
        this.y = canvas.height - (this.grid * 6);
    };
    collisionDetection(snake, hud) {
    	if (snake.x === this.x && snake.y === this.y) {
    		snake.snakeLength++;
    		hud.score++;

    		this.x = Math.floor(Math.random() * Math.floor(this.canvas.height / this.grid)) * this.grid;
    		this.y = Math.floor(Math.random() * Math.floor(this.canvas.width / this.grid)) * this.grid;
    	}
    };
    draw() {
    	this.ctx.fillStyle = "red";
    	this.ctx.fillRect(this.x, this.y, this.grid, this.grid);
    };
}


// module.exports = {
//     World: World,
//     Hud:Hud,
//     Snake:Snake,
//     Food:Food
// }