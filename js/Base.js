class Base{
    constructor(x, y, w, h){
        var options = {
            isStatic:true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }

    reveal(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(170,114,114);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}