class Mouse
{
    constructor(x, y)
    {
        this.square = new Square(x, y, Color.white());
    }

    static generate()
    {
        const randX = Math.round(Math.random() * 500);
        const randY = Math.round(Math.random() * 500);

        return new Mouse(randX, randY, Color.white());
    }

    x()
    {
        return this.square.x;
    }

    y()
    {
        return this.square.y;
    }
}

