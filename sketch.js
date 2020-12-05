const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

var ground;
var particle;

var divider = [];
var plinko = [];

var dividerHeight = 280;

var turn = 0;

var gameState = "PLAY";

var score = 0; 

function setup(){
    createCanvas(450,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, 790, width, 20);
    

}
function draw(){
    background(0);

    Engine.update(engine);

    ground.display();

    //divider
    for (var d = 20; d <= width; d = d + 80){
        divider.push(new Div(d, height-dividerHeight/2, 15, dividerHeight));
    }

    for (var d = 0; d < divider.length; d++){
        divider [d].display();
    }

    //plinko
    for (var p = 40; p <= width; p = p+65){
        plinko.push(new Plinko(p,75));
    }
    for (var p = 15; p <= width-10; p = p+65){
        plinko.push(new Plinko(p,175));
    }
    for (var p = -10; p <= width-20; p = p+65){
        plinko.push(new Plinko(p,275));
    }
    for (var p = -35; p <= width-30; p = p+65){
        plinko.push(new Plinko(p,375));
    }

    for (var p = 0; p < plinko.length; p++){
        plinko [p].display();
    }

    strokeWeight(5);
    stroke("yellow");
    line(0,480,450,480);

    noStroke();
    strokeWeight(0);
    textSize(18);
    text("500",50,560);
    text("500",120,560);
    text("1000",200,560);
    text("500",280,560);
    text("500",360,560);

    mousePressed();


    text ("Score : "+score,20, 50)

    console.log(score);

}
  
function mousePressed(){
  if (gameState!=="END"){
    turn++;
    particle = new Particle(mouseX, mouseY, 10);
    particle.display();
  }
}

function Scoring(){
    if (particle.body.y > 480){
        if (particle.body.x > 20 && particle.body.x < 100){
            score = score + 500;
            particle.body = null;
        }
        
    } 
}

