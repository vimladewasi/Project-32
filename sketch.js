const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ground, Stand1, slingshot, polygon;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10; 
var block11 , block12, block13, block14, block15, block16;

var Stand2;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10; 
var Block11 , Block12, Block13, Block14, Block15, Block16;

var score = 0;
var backgroundImg;
var bg = "bg1.png";

function preload(){
    polygon_img = loadImage("polygon.png");
    getBackgroundImg();
}

function setup(){
   createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    ground = new Ground(600,390,1200,20);

    Stand1 = new Ground(580,300,200,20);
    Stand2 = new Ground(900,200,200,20);

   // polygon = new Polygon(110, 100, 30);
// First Pyramid
    // level one
    block1 = new Box(520,260,20,30);
    block2 = new Box(540,260,20,30);
    block3 = new Box(560,260,20,30);
    block4 = new Box(580,260,20,30);
    block5 = new Box(600,260,20,30);
    block6 = new Box(620,260,20,30);
    block7 = new Box(640,260,20,30);
    // level two
    block8 = new Box(540,230,20,30);
    block9 = new Box(560,230,20,30);
    block10 = new Box(580,230,20,30);
    block11 = new Box(600,230,20,30);
    block12 = new Box(620,230,20,30);

    // level three
    block13 = new Box(560,210,20,30);
    block14 = new Box(580,210,20,30);
    block15 = new Box(600,210,20,30);

    // Top
    block16 = new Box(580,200,20,30);

 // Second Pyramid
// level one
    Block1 = new Box(840,190,20,30);
    Block2 = new Box(860,190,20,30);
    Block3 = new Box(880,190,20,30);
    Block4 = new Box(900,190,20,30);
    Block5 = new Box(920,190,20,30);
    Block6 = new Box(940,190,20,30);
    Block7 = new Box(960,190,20,30);
    // level two
    Block8 = new Box(860,150,20,30);
    Block9 = new Box(880,150,20,30);
    Block10 = new Box(900,150,20,30);
    Block11 = new Box(920,150,20,30);
    Block12 = new Box(940,150,20,30);

    // level three
    Block13 = new Box(880,120,20,30);
    Block14 = new Box(900,120,20,30);
    Block15 = new Box(920,120,20,30);

    // Top
    Block16 = new Box(900,100,20,30);       
    
    polygon = Bodies.circle(110,100,30)
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
   
   // Engine.run(engine);
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }else{
        background("lightgreen");
    }

  //  Engine.update(engine);
    
    textSize(20);
    fill("black");
    text("Score:" + score,50,50);
    text("Drag the hexagonal stone and release it to launch it towards the tower blocks and destroy them",250,30);
    text("Press Space to get a second Chance to Play!!",700 ,380);
    text(mouseX + ',' + mouseY, 10, 15);


    strokeWeight(4);
    Stand1.display();
    Stand2.display();

    strokeWeight(5)
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)

// first pyramid
    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("pink");
    block13.display();
    block14.display();
    block15.display();

    fill("blue");
    block16.display();
// second pyramid
    fill("pink");
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();

    fill("blue");
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
   
    fill("pink");
    Block13.display();
    Block14.display();
    Block15.display();

    fill("blue");
    Block16.display();
   
    slingshot.display(); 

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
   
    Block1.score();
    Block2.score();
    Block3.score();
    Block4.score();
    Block5.score();
    Block6.score();
    Block7.score();
    Block8.score();
    Block9.score();
    Block10.score();
    Block11.score();
    Block12.score();
    Block13.score();
    Block14.score();
    Block15.score();
    Block16.score();
    
    
   console.log(score);
   // drawSprites();

    
} 
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
         slingshot.fly();

}
function keyPressed(){
    if (keyCode===32){
        slingshot.attach(this.polygon);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "bg2.png";
    }
    else{
        bg = "bg1.png";
    }

    backgroundImg = loadImage(bg);
    console.log(datetime.slice(11,13));
}

