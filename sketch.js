var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var orage
var red
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
 
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);

var selec_sprites = Math.round(random(1,3))
if (frameCount % 80 == 0){
  if(selec_sprites == 1){~
  createapple()
  }else if(selec_sprites == 2){
    createorage()
  }
  else{
    createred()
  }
}

rabbit.x = World.mouseX




  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

}
  
  
  
  function creatApples(){
    apple = createSprite(random(50,350),40,10,10)
    apple.addImage("apple.png")
    apple.sacle = 0.07
    apple.velocityY = 3
    apple.lefetime = 150
    
    }
  
  
  function Orange(){
    orange = creatSprite(random(50,350),40,10,10)
    orange.addImage("orangeLeaf.png")
    orange.sacle = 0.08
    orange.velocityY = 3
    orange.lefetime = 150

  }
  
  function red(){
    red = creatSprite(random(50,350),40,10,10)
    red.addImage("orangeLeaf.png")
    red.sacle = 0.06
    red.velocityY = 3
    red.lefetime = 150
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
