class Rover{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x=x;
        this.y=y;
        this.width = 30;
        this.image=loadImage("images/rover.png");
        this.body=Bodies.rectangle(this.x, this,y, this.width, this.height, options);

        World.add(world,this.body);
        
    } 
    
   
     display(){
        var pos=this.body.position;
        //imageMode(CENTER);
        //image(this.image, position.x, posiiton.y, this.width, this.height);
        push();
        //translate(pos.x, pos.y);
        //rotate(this.body.angle);
        stroke("black");
        strokeWeight(10);
        fill("green");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        console.log(this.body.position.y);
        pop();
        

    }
    
}