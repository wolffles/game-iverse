module.exports = {
  drawBall: (ctx, x, y, ballRadius) => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  },

  drawPaddle: (ctx, paddleX, canvasHeight, paddleHeight = 10, paddleWidth = 75) => {
    ctx.beginPath();
    ctx.rect(paddleX, canvasHeight - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
};
