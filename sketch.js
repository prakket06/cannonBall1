const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, rectangle;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    rectangle = new Rectangle(200,200,1200,20);
}

function draw(){
    background(255,0,0);
    Engine.update(engine);
    ground.display();
    rectangle.display();
    console.log(rectangle.x, rectangle.y);
    
}