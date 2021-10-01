class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 3.2,
      length: 350,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {

      
      push();
var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      //set the value of stroke to hide the rope
   
    
      pop();
    }
  
}
