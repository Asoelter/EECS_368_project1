class Window
{
    constructor(width, height, color)
    {
        this.canvas = document.querySelector('.canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.context = this.canvas.getContext('2d');

        this.context.fillStyle = 'rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ')';
        this.context.fillRect(0, 0, width, height);

        this.score = 0;
        this.context.font = "30px Arial";
        this.context.fillText("" + this.score, 10, 50);
    }

    clear()
    {
        this.context.fillStyle = 'rgb(0, 0, 0)';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.font = "30px Arial";
        this.context.fillStyle = "red";
        this.context.fillText("" + this.score, 10, 50);
    }

    drawSquare(square)
    {
        this.context.fillStyle = 'rgb(' + square.color.red + ', ' + square.color.green + ', ' + square.color.blue + ')';
        this.context.fillRect(square.x, square.y, square.width, square.height);
    }

    drawSnake(snake)
    {
        for(let i = 0; i < snake.squares.length; i++)
        {
            this.drawSquare(snake.squares[i]);
        }
    }

    increaseScore()
    {
        this.score++;
    }

    gameOver()
    {
        this.context.fillStyle = 'rgb(0, 0, 0)';
        this.context.fillRect(0, 0, this.width, this.height);

        this.context.font = "60px Arial";
        this.context.fillStyle = "red";
        this.context.fillText("GAME OVER", this.width / 8, this.height / 2);
    }
}

