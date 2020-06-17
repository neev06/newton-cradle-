class Bob{

    constructor(x,y,radius){

var options={
    isStatic:false
   
    
  
        
    
        }
        this.radius=radius;
       
        
        this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    
    }   



display() { 
var paperpos=this.body.position;
// var angle=this.body.angle;
// push() 
// translate(paperpos.x, paperpos.y);
// rotate(angle);
ellipseMode(CENTER); 

ellipse(paperpos.x,paperpos.y,this.radius, this.radius); 
// pop() 
}
}