const Direction = 
{
    UP      : 0,
    RIGHT   : 1,
    DOWN    : 2,
    LEFT    : 3
}

class Snake
{
    constructor(x, y)
    {
        this.squares = [new Square(x, y, Color.blue())];
        this.back = 0;
        this.direction = Direction.UP;
        this.moveAmount = 5;
    }

    moveUp()
    {
        let oldX = this.squares[0].x;
        let oldY = this.squares[0].y;

        this.squares[0].y -= this.moveAmount;

        for(let i = 1; i < this.squares.length; ++i)
        {
            let nextX = this.squares[i].x;
            let nextY = this.squares[i].y;

            this.squares[i].x = oldX;
            this.squares[i].y = oldY;

            oldX = nextX;
            oldY = nextY;
        }

        this.direction = Direction.UP;
    }

    moveRight()
    {
        let oldX = this.squares[0].x;
        let oldY = this.squares[0].y;

        this.squares[0].x += this.moveAmount;

        for(let i = 1; i < this.squares.length; ++i)
        {
            let nextX = this.squares[i].x;
            let nextY = this.squares[i].y;

            this.squares[i].x = oldX;
            this.squares[i].y = oldY;

            oldX = nextX;
            oldY = nextY;
        }

        this.direction = Direction.RIGHT;
    }

    moveDown()
    {
        let oldX = this.squares[0].x;
        let oldY = this.squares[0].y;

        this.squares[0].y += this.moveAmount;

        for(let i = 1; i < this.squares.length; ++i)
        {
            let nextX = this.squares[i].x;
            let nextY = this.squares[i].y;

            this.squares[i].x = oldX;
            this.squares[i].y = oldY;

            oldX = nextX;
            oldY = nextY;
        }

        this.direction = Direction.DOWN;
    }

    moveLeft()
    {
        let oldX = this.squares[0].x;
        let oldY = this.squares[0].y;

        this.squares[0].x -= this.moveAmount;

        for(let i = 1; i < this.squares.length; ++i)
        {
            let nextX = this.squares[i].x;
            let nextY = this.squares[i].y;

            this.squares[i].x = oldX;
            this.squares[i].y = oldY;

            oldX = nextX;
            oldY = nextY;
        }

        this.direction = Direction.LEFT;
    }

    eat()
    {
        let x = this.squares[this.back].x;
        let y = this.squares[this.back].y;
        let offset = this.moveAmount;

        switch(this.direction)
        {
            case Direction.UP:
                y -= offset;
                break;
            case Direction.RIGHT:
                x += offset;
                break;
            case Direction.DOWN:
                y += offset;
                break;
            case Direction.LEFT:
                x -= offset;
                break;
        }

        this.squares.push(new Square(x, y, Color.blue()));
        ++this.back;
    }

    isTouching(mouse)
    {
        let x = this.squares[0].x;
        let y = this.squares[0].y;
        let width = this.squares[0].width;
        let height = this.squares[0].height;

        return Math.abs(x - mouse.x()) < width && Math.abs(y - mouse.y()) < height;
    }

    changeDirection(direction)
    {
        this.direction = direction;
    }

    move()
    {
        switch(this.direction)
        {
            case Direction.UP:
                this.moveUp();
                break;
            case Direction.RIGHT:
                this.moveRight();
                break;
            case Direction.DOWN:
                this.moveDown();
                break;
            case Direction.LEFT:
                this.moveLeft();
                break;
        }

        let head = this.squares[0];
        let x = head.x;
        let y = head.y;
        console.log(x, y);
    }

    intersectsItself()
    {
        const head        = this.squares[0];
        const headX       = head.x;
        const headY       = head.y;
        const width       = head.width;
        const height      = head.height;
        const firstToTest = 5;
        const hitWidth    = 6;

        if(this.back < firstToTest)
        {
            return false;
        }

        for(let i = firstToTest; i < this.squares.length; ++i)
        {
            let tailX = this.squares[i].x;
            let tailY = this.squares[i].y;

            if(Math.abs(headX - tailX) < hitWidth && Math.abs(headY - tailY) < hitWidth)
            {
                return true;
            }
        }

        return false;
    }

    isOutOfBounds(mainWindow)
    {
        let x = this.squares[0].x;
        let y = this.squares[0].y;

        return x < 0 || x > mainWindow.width || y < 0 || y > mainWindow.height;
    }
}
