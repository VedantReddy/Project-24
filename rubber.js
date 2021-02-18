class Rubber {
    constructor() {
      var options = {
          'restitution':0.5,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(500, 530, 50, options); 
      
     World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("yellow");
      circle(0, 0, 100);
      pop();
    }
  };
  