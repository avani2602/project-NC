class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
 
    }
 
    display(){
        var pointA = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, point2.x, point2.y);

    }
}
