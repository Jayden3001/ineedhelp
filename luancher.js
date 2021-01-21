class Luancher{
    constructor(body1,point2){
        var option={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:.04
        }
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
        
    }
    display(){
        if(this.sling.bodyA){
        var point1=this.sling.bodyA.position
        var point2=this.sling.pointB
        strokeWeight(3)
        line(point1.x,point1.y,point2.x,point2.y)
        }
    }
}