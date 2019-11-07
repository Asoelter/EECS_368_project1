let addKeyCallbacks = (snake) =>
{
    const upKey    = 38;
    const rightKey = 39;
    const downKey  = 40;
    const leftKey  = 37;

    document.addEventListener('keydown', (event) => 
    {
        if(event.keyCode === upKey)
        {
            snake.changeDirection(Direction.UP);
        }
        if(event.keyCode === rightKey)
        {
            snake.changeDirection(Direction.RIGHT);
        }
        if(event.keyCode === downKey)
        {
            snake.changeDirection(Direction.DOWN);
        }
        if(event.keyCode === leftKey)
        {
            snake.changeDirection(Direction.LEFT);
        }
    })
}

let playerLost = (snake, mainWindow) =>
{
    let outOfBounds = snake.isOutOfBounds(mainWindow);
    let intersectsSelf = snake.intersectsItself();

    return intersectsSelf || outOfBounds;
}

let gameOver = (mainWindow) =>
{
    mainWindow.gameOver();
}

let render = (mainWindow, snake, mouse) =>
{
    let renderImpl = () =>
    {
        snake.move();
        mainWindow.clear();
        mainWindow.drawSquare(mouse.square);
        mainWindow.drawSnake(snake);

        if(snake.isTouching(mouse))
        {
            mouse = Mouse.generate();
            mainWindow.increaseScore();
            snake.eat();
        }

        if(!playerLost(snake, mainWindow))
        {
            window.requestAnimationFrame(renderImpl);
        }
        else
        {
            gameOver(mainWindow);
        }
    }

    renderImpl();
}

let main = () =>
{
    let mainWindow = new Window(500, 500, Color.black());
    let snake = new Snake(200, 200);
    let mouse = Mouse.generate();

    addKeyCallbacks(snake);
    render(mainWindow, snake, mouse);
}



document.addEventListener("DOMContentLoaded", () => 
{
    main();
})
