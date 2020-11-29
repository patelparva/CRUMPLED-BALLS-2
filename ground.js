class Ground{
    constructor(x,y,width,height) {
        var options={
            isStatic:true,
            restitution:0.3
        }

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display() {
        push();
        translate(this.x,this.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}