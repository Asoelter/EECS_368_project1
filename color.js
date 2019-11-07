class Color
{
    constructor(r = 0, g = 0, b = 0)
    {
        this.red = r;
        this.green = g;
        this.blue = b;
    }

    static black()
    {
        return new Color(0, 0, 0);
    }

    static blue()
    {
        return new Color(0, 0, 256);
    }

    static white()
    {
        return new Color(255, 255, 255);
    }
}
