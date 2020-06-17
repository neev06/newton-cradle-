class rope{
    constructor(bodyA,pointB){
       
        var options = {
            bodyA: bodyA,
           pointB:pointB,
           lenght:10,
           stiffness:0.9
           
        } 
        this.pointB=pointB;
      this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
 
    display(){
      

        
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
       

        line(pointA.x, pointA.y,pointB.x, pointB.y);
    }
    
}