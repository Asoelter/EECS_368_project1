class Square
{
    constructor(x, y, color)
    {
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.color = color;
    }

    moveUp(amount)
    {
        y -= amount;
    }

    moveRight(amount)
    {
        y += amount;
    }

    moveDown(amount)
    {
        y += amount;
    }

    moveLeft(amount)
    {
        x -= amount;
    }
}
