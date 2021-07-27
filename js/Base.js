class Base{
    constructor(x, y, w, h){
        var options = {
            isStatic:true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
    }

    reveal(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(81,44,44);
        rect(po.x, pos.y, this.w, this.h);
        pop();
    }
}