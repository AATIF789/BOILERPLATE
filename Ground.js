class Ground{
    constructor(x,y,w,h){
    var shape={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,w,h,shape)
    this.width=w
    this.height=h
    World.add(world,this.body)

}      

show()
 { fill("yellow")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)

}
}