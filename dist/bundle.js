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
/******/ 	return __webpack_require__(__webpack_require__.s = "./space_invaders/example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./space_invaders/example.js":
/*!***********************************!*\
  !*** ./space_invaders/example.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites */ \"./space_invaders/sprites.js\");\n// var canvas = document.getElementById(\"myCanvas\");\n// var ctx = canvas.getContext(\"2d\");\n\n// var ballRadius = 10;\n// var x = canvas.width / 2;\n// var y = canvas.height - 30;\n// var dx = 2;\n// var dy = -2;\n// var paddleHeight = 10;\n// var paddleWidth = 75;\n// var paddleX = (canvas.width - paddleWidth) / 2;\n// var rightPressed = false;\n// var leftPressed = false;\n// var brickRowCount = 5;\n// var brickColumnCount = 3;\n// var brickWidth = 75;\n// var brickHeight = 20;\n// var brickPadding = 10;\n// var brickOffsetTop = 30;\n// var brickOffsetLeft = 30;\n// var score = 0;\n// var lives = 3;\n\n// var bricks = [];\n// for (var c = 0; c < brickColumnCount; c++) {\n//     bricks[c] = [];\n//     for (var r = 0; r < brickRowCount; r++) {\n//         bricks[c][r] = { x: 0, y: 0, status: 1 };\n//     }\n// }\n\n// document.addEventListener(\"keydown\", keyDownHandler, false);\n// document.addEventListener(\"keyup\", keyUpHandler, false);\n// document.addEventListener(\"mousemove\", mouseMoveHandler, false);\n\n// function keyDownHandler(e) {\n//     if (e.keyCode == 39) {\n//         rightPressed = true;\n//     }\n//     else if (e.keyCode == 37) {\n//         leftPressed = true;\n//     }\n// }\n// function keyUpHandler(e) {\n//     if (e.keyCode == 39) {\n//         rightPressed = false;\n//     }\n//     else if (e.keyCode == 37) {\n//         leftPressed = false;\n//     }\n// }\n// function mouseMoveHandler(e) {\n//     var relativeX = e.clientX - canvas.offsetLeft;\n//     if (relativeX > 0 && relativeX < canvas.width) {\n//         paddleX = relativeX - paddleWidth / 2;\n//     }\n// }\n// function collisionDetection() {\n//     for (var c = 0; c < brickColumnCount; c++) {\n//         for (var r = 0; r < brickRowCount; r++) {\n//             var b = bricks[c][r];\n//             if (b.status == 1) {\n//                 if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {\n//                     dy = -dy;\n//                     b.status = 0;\n//                     score++;\n//                     if (score == brickRowCount * brickColumnCount) {\n//                         alert(\"YOU WIN, CONGRATS!\");\n//                         document.location.reload();\n//                     }\n//                 }\n//             }\n//         }\n//     }\n// }\n\n// function drawBall() {\n//     ctx.beginPath();\n//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fill();\n//     ctx.closePath();\n// }\n// function drawPaddle() {\n//     ctx.beginPath();\n//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fill();\n//     ctx.closePath();\n// }\n// function drawBricks() {\n//     for (var c = 0; c < brickColumnCount; c++) {\n//         for (var r = 0; r < brickRowCount; r++) {\n//             if (bricks[c][r].status == 1) {\n//                 var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;\n//                 var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;\n//                 bricks[c][r].x = brickX;\n//                 bricks[c][r].y = brickY;\n//                 ctx.beginPath();\n//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);\n//                 ctx.fillStyle = \"#0095DD\";\n//                 ctx.fill();\n//                 ctx.closePath();\n//             }\n//         }\n//     }\n// }\n// function drawScore() {\n//     ctx.font = \"16px Arial\";\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fillText(\"Score: \" + score, 8, 20);\n// }\n// function drawLives() {\n//     ctx.font = \"16px Arial\";\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fillText(\"Lives: \" + lives, canvas.width - 65, 20);\n// }\n\n// function draw() {\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\n//     drawBricks();\n//     drawBall();\n//     drawPaddle();\n//     drawScore();\n//     drawLives();\n//     collisionDetection();\n\n//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {\n//         dx = -dx;\n//     }\n//     if (y + dy < ballRadius) {\n//         dy = -dy;\n//     }\n//     else if (y + dy > canvas.height - ballRadius) {\n//         if (x > paddleX && x < paddleX + paddleWidth) {\n//             dy = -dy;\n//         }\n//         else {\n//             lives--;\n//             if (!lives) {\n//                 alert(\"GAME OVER\");\n//                 document.location.reload();\n//             }\n//             else {\n//                 x = canvas.width / 2;\n//                 y = canvas.height - 30;\n//                 dx = 3;\n//                 dy = -3;\n//                 paddleX = (canvas.width - paddleWidth) / 2;\n//             }\n//         }\n//     }\n\n//     if (rightPressed && paddleX < canvas.width - paddleWidth) {\n//         paddleX += 7;\n//     }\n//     else if (leftPressed && paddleX > 0) {\n//         paddleX -= 7;\n//     }\n\n//     x += dx;\n//     y += dy;\n//     requestAnimationFrame(draw);\n// }\n\n// draw();\n\n\n// import { canvas, ctx, ballRadius, x, y, dx, dy, padX, canvasHeight } from \"./gameVar\";\nvar gameLogic = __webpack_require__(/*! ./gameLogic */ \"./space_invaders/gameLogic.js\");\nvar objects = __webpack_require__(/*! ./objects */ \"./space_invaders/objects.js\");\n\nvar canvas = new _sprites__WEBPACK_IMPORTED_MODULE_0__[\"World\"](document.getElementById(\"canvas\") );\nvar ball = new _sprites__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](canvas)\nvar gamelogic = new _sprites__WEBPACK_IMPORTED_MODULE_0__[\"GameLogic\"](canvas)\nvar paddle = new _sprites__WEBPACK_IMPORTED_MODULE_0__[\"Paddle\"](canvas)\n\n// function keyDownHandler(e) {\n//   if (e.keyCode == 39) {\n//     rightPressed = true;\n//   }\n//   else if (e.keyCode == 37) {\n//     leftPressed = true;\n//   }\n// }\n\n// function keyUpHandler(e) {\n//   if (e.keyCode == 39) {\n//     rightPressed = false;\n//   }\n//   else if (e.keyCode == 37) {\n//     leftPressed = false;\n//   }\n// }\n// document.addEventListener(\"keydown\", keyDownHandler, false);\n// document.addEventListener(\"keyup\", keyUpHandler, false);\n\npaddle.keyUp\npaddle.keyDown\nvar draw = () => {\n  canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);\n  ball.draw() \n  paddle.draw()\n  ball.boundries()\n  paddle.movement()\n\n  ball.x += ball.dx;\n  ball.y += ball.dy;\n  requestAnimationFrame(draw)\n}\n\n\ndraw();\n\n//# sourceURL=webpack:///./space_invaders/example.js?");

/***/ }),

/***/ "./space_invaders/gameLogic.js":
/*!*************************************!*\
  !*** ./space_invaders/gameLogic.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    vert_boundries: (x,dx,canvas, ballRadius) => {\n        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {\n            return true\n         }else{ \n            return false \n            }\n        }, \n    hor_boundries: (y, dy, canvas, ballRadius) => {\n        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {\n            return true\n        } else {\n            return false\n        }\n    }\n    // },\n    // keyDownHandler: (e)=>{\n    //     if (e.keyCode == 39) {\n    //         rightPressed = true;\n    //     }\n    //     else if (e.keyCode == 37) {\n    //         leftPressed = true;\n    //     }\n    // },\n    // keyUpHandler:(e) => {\n    //     if (e.keyCode == 39) {\n    //         rightPressed = false;\n    //     }\n    //     else if (e.keyCode == 37) {\n    //         leftPressed = false;\n    //     }\n    // }\n\n\n\n}\n\n//# sourceURL=webpack:///./space_invaders/gameLogic.js?");

/***/ }),

/***/ "./space_invaders/objects.js":
/*!***********************************!*\
  !*** ./space_invaders/objects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  drawBall: (ctx, x, y, ballRadius) => {\n    ctx.beginPath();\n    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fill();\n    ctx.closePath();\n  },\n\n  drawPaddle: (ctx, paddleX, canvasHeight, paddleHeight = 10, paddleWidth = 75) => {\n    ctx.beginPath();\n    ctx.rect(paddleX, canvasHeight - paddleHeight, paddleWidth, paddleHeight);\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fill();\n    ctx.closePath();\n  }\n};\n\n\n//# sourceURL=webpack:///./space_invaders/objects.js?");

/***/ }),

/***/ "./space_invaders/sprites.js":
/*!***********************************!*\
  !*** ./space_invaders/sprites.js ***!
  \***********************************/
/*! exports provided: World, Ball, GameLogic, Paddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"World\", function() { return World; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameLogic\", function() { return GameLogic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paddle\", function() { return Paddle; });\nclass World {\n    constructor(canvas) {\n        this.canvas = canvas\n        this.ctx = this.canvas.getContext(\"2d\");\n    }\n\n}\n\nclass Ball {\n    constructor(world) {\n        this.canvas = world.canvas;\n        this.ctx = world.ctx,\n        this.x = canvas.width / 2,\n        this.y = canvas.height - 30,\n        this.ballRadius = 10\n        this.dx = 2,\n        this.dy = -2\n    }\n    draw() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    boundries() {\n        if (this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {\n            this.dx = -this.dx;\n        }\n        if (this.y + this.dy > this.canvas.height - this.ballRadius || this.y + this.dy < this.ballRadius) {\n            this.dy = -this.dy;\n        }\n    }\n}\n\nclass GameLogic {\n    constructor (world) {\n        this.canvas = world.canvas\n        this.ctx = world.ctx,\n        this.x = canvas.width / 2,\n        this.y = canvas.height - 30,\n        this.ballRadius = 10\n        this.dx = 2,\n        this.dy = -2,\n        this.ball = {}\n    }\n   \n}\n\nclass Paddle {\n    constructor (world) {\n        var self = this;\n        this.canvas = world.canvas;\n        this.ctx = world.ctx;\n        this.paddleHeight = 10;\n        this.paddleWidth = 75;\n        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;\n        self.rightPressed = false;\n        self.leftPressed = false;\n        this.keyDownHandler= function(e) {\n            if (e.keyCode == 39) {\n                self.rightPressed = true;\n            }\n            else if (e.keyCode == 37) {\n                self.leftPressed = true;\n            \n            }\n        };\n        this.keyUpHandler= function(e) {\n            if (e.keyCode == 39) {\n                self.rightPressed = false;\n            }\n            else if (e.keyCode == 37) {\n                self.leftPressed = false;\n                \n            }\n        };\n        this.keyDown = document.addEventListener(\"keydown\", this.keyDownHandler, false);\n        this.keyUp = document.addEventListener(\"keyup\", this.keyUpHandler, false);\n    }\n\n    draw()  {\n        this.ctx.beginPath();\n        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight-5, this.paddleWidth, this.paddleHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    movement() {\n        if(this.leftPressed === true){\n            console.log('movement')\n        } \n        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {\n            this.paddleX += 7;\n        } else if (this.leftPressed && this.paddleX > 0) {\n            this.paddleX -= 7;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./space_invaders/sprites.js?");

/***/ })

/******/ });