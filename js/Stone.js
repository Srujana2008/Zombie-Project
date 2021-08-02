class Stone{
    constructor(x, y, w, h){
      
        let options = {
            restitution: 0.8
          };

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }

    reveal(){
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}