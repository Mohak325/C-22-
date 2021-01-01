const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
    myWorld = myEngine.world;
var options={
  isStatic:true
}
    

    ground=Bodies.rectangle(200,370,400,30,options);
    World.add(myWorld,ground);
    var optionball={
      restitution : 2
    }

    ball = Bodies.circle(200,30,10,optionball);
    World.add(myWorld,ball);

   
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode (CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,400,30);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,10,10);

  
}