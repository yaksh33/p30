class Blocks extends BaseClass {
    constructor(x, y,width,height ){
      var options = {
        'restitution':0.1,
        'friction':0
        
    }
      super(x,y,width,height);
      this.Visiblity = 255
    }

    display(){

      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         //tint(255,this.Visiblity);
         //rect(this.body.position.x,this.body.position.y,this.width,this.height)

         pop();
       }
       
     }
    }
  
  