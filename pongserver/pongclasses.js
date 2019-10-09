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
        this.p1score = 0;
        this.p2score = 0;
    }

    draw() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Player 1 Score: " + this.p1score + ", Player 2 Score: " + this.p2score, 8, 20);
    }

    setState(state) {
        this.p1score = state.p1score;
        this.p2score = state.p2score;
    }
}

export class Paddle {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.height = 75;
        this.width = 10;
        this.y = 0;
        this.x = 0;
        this.upPressed = false;
        this.downPressed = false;

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
    }
    keyUpHandler(e) {
        if (e.keyCode == 38) {
            this.upPressed = false;
        } else if (e.keyCode == 40) {
            this.downPressed = false;
        }
    }

    keyDownHandler(e) {
        if (e.keyCode == 38) {
            this.upPressed = true;
        } else if (e.keyCode == 40) {
            this.downPressed = true;
        }
    }
    getState() {
        return {
            upPressed: this.upPressed,
            downPressed: this.downPressed
        };
    }

    setState(state) {
        this.y = state.y;
        this.x = state.x;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.x,
            this.y,
            this.width,
            this.height
        );
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export class Ball {
    constructor(world) {
        this.canvas = world.canvas;
        this.ctx = world.ctx;
        this.radius = 10;
        this.x = 0;
        this.y = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    setState(state) {
        this.x = state.x;
        this.y = state.y;
    }
}
