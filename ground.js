class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      world.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);

    }
  }