module.exports = {
    vert_boundries: (x,dx,canvas, ballRadius) => {
        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            return true
         }else{ 
            return false 
            }
        }, 
    hor_boundries: (y, dy, canvas, ballRadius) => {
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            return true
        } else {
            return false
        }
    }
}