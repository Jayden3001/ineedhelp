class Stone{
 
    constructor(x,y,r){
    var options={
        isStatic:true,
        restitution:0.5,
        friction:1,
        density:1.2
    }
    this.image=loadImage("stone.png")
    this.body=Bodies.circle(x,y,r,options)
    this.radius=r
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.image,0,0,this.radius,this.radius)

    
    pop()
    }
}