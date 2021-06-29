class Paper{
    constructor(x,y,diameter){ 
    var options = {
    isStatic:false,
    restitution:0.3,
    density:0,
    friction:0.5
}
this.body=Bodies.circle(x,y,diameter)
this.diameter=diameter
World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
 
        push();
        translate(pos.x, pos.y);

        ellipseMode(CENTER);

        fill(255)
        ellipse(0,0,this.diameter);
        pop();
    }
}