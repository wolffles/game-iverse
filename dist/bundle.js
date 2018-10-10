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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var canvas = document.getElementById(\"myCanvas\");\n// var ctx = canvas.getContext(\"2d\");\n\n// var ballRadius = 10;\n// var x = canvas.width / 2;\n// var y = canvas.height - 30;\n// var dx = 2;\n// var dy = -2;\n// var paddleHeight = 10;\n// var paddleWidth = 75;\n// var paddleX = (canvas.width - paddleWidth) / 2;\n// var rightPressed = false;\n// var leftPressed = false;\n// var brickRowCount = 5;\n// var brickColumnCount = 3;\n// var brickWidth = 75;\n// var brickHeight = 20;\n// var brickPadding = 10;\n// var brickOffsetTop = 30;\n// var brickOffsetLeft = 30;\n// var score = 0;\n// var lives = 3;\n\n// var bricks = [];\n// for (var c = 0; c < brickColumnCount; c++) {\n//     bricks[c] = [];\n//     for (var r = 0; r < brickRowCount; r++) {\n//         bricks[c][r] = { x: 0, y: 0, status: 1 };\n//     }\n// }\n\n// document.addEventListener(\"keydown\", keyDownHandler, false);\n// document.addEventListener(\"keyup\", keyUpHandler, false);\n// document.addEventListener(\"mousemove\", mouseMoveHandler, false);\n\n// function keyDownHandler(e) {\n//     if (e.keyCode == 39) {\n//         rightPressed = true;\n//     }\n//     else if (e.keyCode == 37) {\n//         leftPressed = true;\n//     }\n// }\n// function keyUpHandler(e) {\n//     if (e.keyCode == 39) {\n//         rightPressed = false;\n//     }\n//     else if (e.keyCode == 37) {\n//         leftPressed = false;\n//     }\n// }\n// function mouseMoveHandler(e) {\n//     var relativeX = e.clientX - canvas.offsetLeft;\n//     if (relativeX > 0 && relativeX < canvas.width) {\n//         paddleX = relativeX - paddleWidth / 2;\n//     }\n// }\n// function collisionDetection() {\n//     for (var c = 0; c < brickColumnCount; c++) {\n//         for (var r = 0; r < brickRowCount; r++) {\n//             var b = bricks[c][r];\n//             if (b.status == 1) {\n//                 if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {\n//                     dy = -dy;\n//                     b.status = 0;\n//                     score++;\n//                     if (score == brickRowCount * brickColumnCount) {\n//                         alert(\"YOU WIN, CONGRATS!\");\n//                         document.location.reload();\n//                     }\n//                 }\n//             }\n//         }\n//     }\n// }\n\n// function drawBall() {\n//     ctx.beginPath();\n//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fill();\n//     ctx.closePath();\n// }\n// function drawPaddle() {\n//     ctx.beginPath();\n//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fill();\n//     ctx.closePath();\n// }\n// function drawBricks() {\n//     for (var c = 0; c < brickColumnCount; c++) {\n//         for (var r = 0; r < brickRowCount; r++) {\n//             if (bricks[c][r].status == 1) {\n//                 var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;\n//                 var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;\n//                 bricks[c][r].x = brickX;\n//                 bricks[c][r].y = brickY;\n//                 ctx.beginPath();\n//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);\n//                 ctx.fillStyle = \"#0095DD\";\n//                 ctx.fill();\n//                 ctx.closePath();\n//             }\n//         }\n//     }\n// }\n// function drawScore() {\n//     ctx.font = \"16px Arial\";\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fillText(\"Score: \" + score, 8, 20);\n// }\n// function drawLives() {\n//     ctx.font = \"16px Arial\";\n//     ctx.fillStyle = \"#0095DD\";\n//     ctx.fillText(\"Lives: \" + lives, canvas.width - 65, 20);\n// }\n\n// function draw() {\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\n//     drawBricks();\n//     drawBall();\n//     drawPaddle();\n//     drawScore();\n//     drawLives();\n//     collisionDetection();\n\n//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {\n//         dx = -dx;\n//     }\n//     if (y + dy < ballRadius) {\n//         dy = -dy;\n//     }\n//     else if (y + dy > canvas.height - ballRadius) {\n//         if (x > paddleX && x < paddleX + paddleWidth) {\n//             dy = -dy;\n//         }\n//         else {\n//             lives--;\n//             if (!lives) {\n//                 alert(\"GAME OVER\");\n//                 document.location.reload();\n//             }\n//             else {\n//                 x = canvas.width / 2;\n//                 y = canvas.height - 30;\n//                 dx = 3;\n//                 dy = -3;\n//                 paddleX = (canvas.width - paddleWidth) / 2;\n//             }\n//         }\n//     }\n\n//     if (rightPressed && paddleX < canvas.width - paddleWidth) {\n//         paddleX += 7;\n//     }\n//     else if (leftPressed && paddleX > 0) {\n//         paddleX -= 7;\n//     }\n\n//     x += dx;\n//     y += dy;\n//     requestAnimationFrame(draw);\n// }\n\n// draw();\n\n\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst ballRadius = 10;\nvar x = canvas.width / 2;\nvar y = canvas.height - 30;\nvar dx = 2;\nvar dy = -2;\nconst gameLogic = __webpack_require__(/*! ./gameLogic */ \"./space_invaders/gameLogic.js\");\nconst mod_ex = __webpack_require__(/*! ./mod_ex */ \"./space_invaders/mod_ex.js\");\n\n\nvar draw = () => {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    mod_ex.drawBall(ctx, x, y, ballRadius)\n    if (gameLogic.vert_boundries(x, dx, canvas, ballRadius)) {\n      dx = -dx;\n    }\n    if (gameLogic.hor_boundries(y, dy, canvas, ballRadius)) {\n      dy = -dy;\n    }\n    x += dx;\n    y += dy;\n    requestAnimationFrame(draw)\n}\n\ndraw();\n\n//# sourceURL=webpack:///./space_invaders/example.js?");

/***/ }),

/***/ "./space_invaders/gameLogic.js":
/*!*************************************!*\
  !*** ./space_invaders/gameLogic.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    vert_boundries: (x,dx,canvas, ballRadius) => {\n        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {\n            return true\n         }else{ \n            return false \n            }\n        }, \n    hor_boundries: (y, dy, canvas, ballRadius) => {\n        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {\n            return true\n        } else {\n            return false\n        }\n    }\n}\n\n//# sourceURL=webpack:///./space_invaders/gameLogic.js?");

/***/ }),

/***/ "./space_invaders/mod_ex.js":
/*!**********************************!*\
  !*** ./space_invaders/mod_ex.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = {\n \n  drawBall: (ctx, x, y, ballRadius) => {\n    ctx.beginPath();\n    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fill();\n    ctx.closePath();\n  },\n\n  drawPaddle: (ctx, ) => {\n    ctx.beginPath();\n    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);\n    ctx.fillStyle = \"#0095DD\";\n    ctx.fill();\n    ctx.closePath();\n}\n};\n\n\n//# sourceURL=webpack:///./space_invaders/mod_ex.js?");

/***/ })

/******/ });