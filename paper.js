class Paper{
    constructor(x,y,r){
        var option = {
            restitution:0.3,
            friction:0.5,
            density:1.2
          }
          this.body = Bodies.circle(x,y,r,option);
          World.add(world,this.body);
          this.r = 2*r;
          this.image = loadImage("paper.png");
    }

   
         showpaper(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

}
