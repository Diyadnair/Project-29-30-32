const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,g1,g2,g3;

var b1,b2,b3,b4,b5;
var bx1,bx2,bx3;
var bl1;

var b6,b7,b8,b9,b10;
var bx4,bx5,bx6;
var bl2;

var b11,b12,b13,b14,b15;
var bx7,bx8,bx9;
var bl3;

var polygon;

var slingshot;
var score = 0;

var bg;

function setup() {
  var canvas = createCanvas(1500,600);
  
  engine = Engine.create();
  world = engine.world;
  

  fill("brown");
  ground = new Ground(500, 590, 2000, 10);
  g1 = new Ground(220, 500, 300, 10);
  g2 = new Ground(700, 250, 300, 10);
  g3 = new Ground(1220, 500, 300, 10);

  fill(255);
  stroke(0);
  //first ground
  b1 = new Box(120, 455, 50, 50);
  b2 = new Box(170, 455, 50, 50);
  b3= new Box(220, 455, 50, 50);
  b4 = new Box(270, 455, 50, 50);
  b5 = new Box(320, 455, 50, 50);

  bx1 = new Box(170, 405, 50, 50);
  bx2 = new Box(220, 405, 50, 50);
  bx3 = new Box(270, 405, 50, 50);
  
  bl1= new Box(220, 355, 50, 50);
 
//second ground
  b6 = new Box(600, 205, 50, 50);
  b7 = new Box(650, 205, 50, 50);
  b8 = new Box(700, 205, 50, 50);
  b9 = new Box(750, 205, 50, 50);
  b10 = new Box(800, 205, 50, 50);

 
  bx4 = new Box(650, 155, 50, 50);
  bx5 = new Box(700, 155, 50, 50);
  bx6 = new Box(750, 155, 50, 50);
 
 
  bl2 = new Box(700, 105, 50, 50);
 

  //third ground
  b11 = new Box(1120, 455, 50, 50);
  b12 = new Box(1170, 455, 50, 50);
  b13 = new Box(1220, 455, 50, 50);
  b14 = new Box(1270, 455, 50, 50);
  b15 = new Box(1320, 455, 50, 50);

 
  bx7 = new Box(1170, 405, 50, 50);
  bx8 = new Box(1220, 405, 50, 50);
  bx9 = new Box(1270, 405, 50, 50);
  
  bl3 = new Box(1220, 355, 50, 50);

  polygon = Bodies.rectangle(200,100,30,30);
  World.add(world,polygon);
  console.log(polygon);

  slingshot = new SlingShot(polygon,{x:200, y:100});

  getBackgroundImg();

}

function draw(){
  if(bg){
    background(bg);
  }
  Engine.update(engine);

  textSize(30);
  text("Score:"+score,1200,40);

  rectMode(CENTER);
  rect(polygon.position.x,polygon.position.y,30,30);

  ground.display();
  g1.display();
  g2.display();
  g3.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  bx1.display();
  bx2.display();
  bx3.display();

  bx4.display();
  bx5.display();
  bx6.display();

  bx7.display();
  bx8.display();
  bx9.display();

  bl1.display();
  bl2.display();
  bl3.display();

  //score
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();

  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();

  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();

  bx1.score();
  bx2.score();
  bx3.score();

  bx4.score();
  bx5.score();
  bx6.score();

  bx7.score();
  bx8.score();
  bx9.score();

  bl1.score();
  bl2.score();
  bl3.score();

  slingshot.display();

}

function mouseDragged(){
  
 Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
 }
}

async function getBackgroundImg(){
  var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>06 && hour<18){
      bg = "white";
      fill(0);
      text("Score:"+score,1200,40); 
  }else{
    bg = "black"; 
   
   }
}

