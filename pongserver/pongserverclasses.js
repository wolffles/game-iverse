class World {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Hud {
    constructor() {
        this.p1score = 0;
        this.p2score = 0;
    }

    getState() {
        return {
            p1score: this.p1score,
            p2score: this.p2score
        }
    }
}

class Ball {
    constructor(world) {
        this.world = world;
        this.radius = 10;
        this.reset();
    }

    reset() {
        this.x = this.world.width / 2;
        this.y = this.world.height / 2;
        this.dx = 1;
        this.dy = -1;
        this.speed = 25;
        this.lastUpdate = process.hrtime.bigint();
    }

    nextPos() {
        var dt = Number(process.hrtime.bigint() - this.lastUpdate) / 1e9;
        return {
            x: this.x + this.dx * this.speed * dt,
            y: this.y + this.dy * this.speed * dt
        }
    }

    boundaries(paddles, hud) {
        const clamp = (v, min, max) => v < min? min: v > max? max: v;
        var nextPos = this.nextPos();
        if (nextPos.y - this.radius <= 0 || nextPos.y + this.radius >= this.world.height) {
            // collision with top or bottom of play area
            this.dy = -this.dy;
        }
        for (var paddle of paddles) {
            var dx = nextPos.x - clamp(nextPos.x, paddle.x, paddle.x + paddle.width);
            var dy = nextPos.y - clamp(nextPos.y, paddle.y, paddle.y + paddle.height);
            if (dx**2 + dy**2 < this.radius**2) {
                // collision with a paddle
                this.dx = -this.dx;
                return;
            }
        }
        if (nextPos.x - this.radius <= 0) {
            hud.p2score += 1;
            this.reset();
        }
        else if (nextPos.x + this.radius >= this.world.width) {
            hud.p1score += 1;
            this.reset();
        }
    }

    movement() {
        var nextPos = this.nextPos();
        this.lastUpdate = process.hrtime.bigint();
        this.x = nextPos.x;
        this.y = nextPos.y;
        this.speed += this.speed*0.01;
    }

    getState() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

class Paddle {
    constructor(world, player) {
        this.world = world;
        this.height = 75;
        this.width = 10;
        this.x = player == "player1"? 0: this.world.width - this.width;
        this.speed = 100;
        this.reset();
    }

    reset() {
        this.lastUpdate = process.hrtime.bigint();
        this.upPressed = false;
        this.downPressed = false;
        this.y = this.world.height - this.height / 2;
    }

    getState() {
        return {
            x: this.x,
            y: this.y
        }
    }

    setState(state) {
        this.upPressed = state.upPressed;
        this.downPressed = state.downPressed;
    }

    nextPos() {
        var y = this.y;
        var dt = Number(process.hrtime.bigint() - this.lastUpdate) / 1e9;
        if (this.upPressed) {
            y -= this.speed * dt;
        }
        else if (this.downPressed) {
            y += this.speed * dt;
        }
        return {
            x: this.x,
            y: y
        }
    }

    movement() {
        var nextPos = this.nextPos();
        this.lastUpdate = process.hrtime.bigint();
        const clamp = (v, min, max) => v < min? min: v > max? max: v;
        this.y = clamp(nextPos.y, 0, this.world.height - this.height);
    }
}

class AIPaddle extends Paddle {
    constructor(world, player, ball) {
        super(world, player);
        this.ball = ball;
    }
    nextPos() {
        super.upPressed = false;
        super.downPressed = false;
        if (this.y + this.height / 2 > this.ball.y) {
            super.upPressed = true;
        }
        else if (this.y + this.height / 2 < this.ball.y) {
            super.downPressed = true;
        }
        return super.nextPos();
    }
}

module.exports = {
    AIPaddle,
    Paddle,
    Hud,
    Ball,
    World
};
