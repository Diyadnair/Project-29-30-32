class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
      this.trajectory =[];
    }

    display(){
      if(this.body.speed<5){
        super.display();
      }else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity-5;
        //tint(0,this.visiblity);
        //fill("brown");
        //rect(this.body.position.x, this.body.position.y, 50, 50);
        pop();

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }
       
      }
    }

    score(){
      if(this.Visiblity <0 && this.Visiblity>-105){
        score = score+1;
      }
    }
  
  };
  