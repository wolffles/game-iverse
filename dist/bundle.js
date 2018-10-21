/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./brickbreak/example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./brickbreak/brickbreakclasses.js":
/*!*****************************************!*\
  !*** ./brickbreak/brickbreakclasses.js ***!
  \*****************************************/
/*! exports provided: World, Hud, Ball, Brick, Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hud\", function() { return Hud; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Brick\", function() { return Brick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paddle\", function() { return Paddle; });\n\n\nclass World {\n    constructor(canvas) {\n        this.canvas = canvas\n        this.ctx = this.canvas.getContext(\"2d\");\n    }\n\n}\n\nclass Hud {\n    constructor(world) {\n        this.canvas = world.canvas;\n        this.ctx = world.ctx\n        this.score = 0;\n    }\n    draw() {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"#0095DD\";\n    this.ctx.fillText(\"Score: \" + this.score, 8, 20);\n}\n}\n\nclass Ball {\n    constructor(world) {\n        this.canvas = world.canvas;\n        this.ctx = world.ctx;\n        this.x = canvas.width / 2;\n        this.y = canvas.height - 30;\n        this.ballRadius = 10\n        this.dx = 2;\n        this.dy = -2\n    }\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    boundaries(x, paddle) {\n        // vertical boundarries\n        if (x + this.dx > canvas.width - this.ballRadius || x + this.dx < this.ballRadius) {\n            this.dx = -this.dx;\n        }\n        //horizontal boundaries\n        if ( this.y + this.dy < this.ballRadius) {\n            this.dy = -this.dy;\n        }\n        // if ball y + next frame > the end of the canvas - ball radius\n        else if (this.y + this.dy > this.canvas.height - this.ballRadius) {\n        // if ball x is within the paddle boundries\n            if (x > paddle.paddleX && x < paddle.paddleX + paddle.paddleWidth) {\n                this.dy = -this.dy;\n            }\n            else {\n                alert(\"GAME OVER\");\n                document.location.reload();\n            }\n        }   \n    }\n}\n\nclass Brick {\n    constructor(world, brickRowCount = 3, brickColumnCount = 5, brickWidth = 75, brickHeight = 20, brickPadding = 10, brickOffsetTop = 30, brickOffsetLeft = 30) {\n        this.canvas = world.canvas;\n        this.ctx = world.ctx;\n        this.brickRowCount = brickRowCount;\n        this.brickColumnCount = brickColumnCount;\n        this.brickWidth = brickWidth;\n        this.brickHeight = brickHeight;\n        this.brickPadding = brickPadding;\n        this.brickOffsetTop = brickOffsetTop;\n        this.brickOffsetLeft = brickOffsetLeft;\n        this.bricks = [];\n        this.bricksArray = function () {\n            for (var c = 0; c < this.brickColumnCount; c++) {\n                this.bricks[c] = [];\n                for (var r = 0; r < this.brickRowCount; r++) {\n                    this.bricks[c][r] = { x: 0, y: 0, status: 1 };\n                }\n            }\n        }\n\n        this.draw = function () {\n            for (var c = 0; c < this.brickColumnCount; c++) {\n                for (var r = 0; r < this.brickRowCount; r++) {\n                    if (this.bricks[c][r].status == 1) {\n                        var brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;\n                        var brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;\n                        this.bricks[c][r].x = brickX;\n                        this.bricks[c][r].y = brickY;\n                        this.ctx.beginPath();\n                        this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);\n                        this.ctx.fillStyle = \"#0095DD\";\n                        this.ctx.fill();\n                        this.ctx.closePath();\n                    }\n                }\n            }\n        }\n\n        this.collisionDetection =function(ball, hud) {\n            for (var c = 0; c < this.brickColumnCount; c++) {\n                for (var r = 0; r < this.brickRowCount; r++) {\n                    var b = this.bricks[c][r];\n                    if (b.status === 1) {\n                        if (ball.x > b.x && ball.x < b.x + this.brickWidth && ball.y > b.y && ball.y < b.y + this.brickHeight) {\n                            ball.dy = -ball.dy;\n                            b.status = 0\n                            hud.score++\n                            if (hud.score == this.brickColumnCount * this.brickRowCount) {\n                                alert(\"YOU WIN, CONGRATULATIONS!\");\n                                document.location.reload();\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n}\n\nclass Paddle {\n    constructor (world) {\n        this.canvas = world.canvas;\n        this.ctx = world.ctx;\n        this.paddleHeight = 10;\n        this.paddleWidth = 75;\n        this.paddleX = (this.canvas.width - this.paddleWidth) / 2; // location\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.keyDown = document.addEventListener(\"keydown\", (e) => this.keyDownHandler(e), false);\n\n        this.keyUp = document.addEventListener(\"keyup\", (e) => this.keyUpHandler(e), false);\n\n        this.mouseMove = document.addEventListener(\"mousemove\", (e) => this.mouseMoveHandler(e), false);\n    }\n    keyUpHandler(e) {\n        if (e.keyCode == 39) {\n            this.rightPressed = false;\n        }\n        else if (e.keyCode == 37) {\n            this.leftPressed = false;\n\n        }\n    };  \n\n    keyDownHandler(e) {\n        if (e.keyCode == 39) {\n            this.rightPressed = true;\n        }\n        else if (e.keyCode == 37) {\n            this.leftPressed = true;\n\n        }\n    };\n\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    movement(){\n        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {\n            this.paddleX += 7;\n        } else if (this.leftPressed && this.paddleX > 0) {\n            this.paddleX -= 7;\n        }\n    }\n\n    mouseMoveHandler(e){\n        var relativeX = e.clientX - this.canvas.offsetLeft;\n        if (relativeX > 0 && relativeX < this.canvas.width) {\n            this.paddleX = relativeX - this.paddleWidth / 2\n        }\n    };\n}\n\n//# sourceURL=webpack:///./brickbreak/brickbreakclasses.js?");

/***/ }),

/***/ "./brickbreak/example.js":
/*!*******************************!*\
  !*** ./brickbreak/example.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _brickbreakclasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brickbreakclasses */ \"./brickbreak/brickbreakclasses.js\");\n\n\n\nvar canvas = new _brickbreakclasses__WEBPACK_IMPORTED_MODULE_0__[\"World\"](document.getElementById(\"canvas\") );\nvar ball = new _brickbreakclasses__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](canvas)\nvar brick = new _brickbreakclasses__WEBPACK_IMPORTED_MODULE_0__[\"Brick\"](canvas)\nvar hud = new _brickbreakclasses__WEBPACK_IMPORTED_MODULE_0__[\"Hud\"](canvas)\nvar paddle = new _brickbreakclasses__WEBPACK_IMPORTED_MODULE_0__[\"Paddle\"](canvas)\n\npaddle.keyUp\npaddle.keyDown\npaddle.mouseMove\nbrick.bricksArray(brick.bricks)\nvar draw = () => {\n  canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);\n  brick.draw()\n  ball.draw() \n  paddle.draw()\n  hud.draw()\n  ball.boundaries(ball.x, paddle)\n  brick.collisionDetection(ball,hud)\n  paddle.movement()\n\n  ball.x += ball.dx;\n  ball.y += ball.dy;\n  requestAnimationFrame(draw)\n}\n\n\ndraw();\n\n\n\n//# sourceURL=webpack:///./brickbreak/example.js?");

/***/ })

/******/ });