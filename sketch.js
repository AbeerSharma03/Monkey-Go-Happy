var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var invisibleGround
var gameState
var PLAY
var END
var bgImg
function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 bgImg = loadImage("jungle.jpg");
}

function setup() {
createCanvas(600,400);
monkey=createSprite(100,350,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.3;

ground=createSprite(600,400,900,10);
ground.velocityX=-4
ground.x=ground.width/2;
console.log(monkey.y);
  
backGround=createSprite(0,0,600,400);
backGround.addImage("jungle",bgImg);
backGround.scale=1.4;
backGround.velocityX=-4;
  
  invisibleGround=createSprite(400,390,900,10);
  invisibleGround.visible=false;
  
  FoodGroup=new Group();
  ObstacleGroup= new Group();
  score=0;
}


function draw() {
 background("white");


  monkey.depth=backGround.depth+1;
  
  
 if(ground.x<150){
  ground.x=ground.width/2;
}
  if(backGround.x<150){
    backGround.x=backGround.width/2;
  }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+2;
     switch(score){
case 10:monkey.scale=0.12;
          break;
  case 20:monkey.scale=0.14;
          break;
  case 30:monkey.scale=0.16;
         break;
  case 40:monkey.scale=0.18;
       break;
          default:break;
  }
  }
  spawnfoodGroup();
spawnObstacles();
  
  
 
        // console.log(monkey.y)
  if(keyDown("space") && monkey.y>=270){
 monkey.velocityY=-6
}
monkey.velocityY=monkey.velocityY+0.2      ;
  


monkey.collide(invisibleGround);  
  

    if(ObstacleGroup.isTouching(monkey)){
    monkey.scale=0.1;
    //score=score-2;

    }
  
         
drawSprites();
  stroke("black");
textSize(20);
fill("white");
text("Score:"+ score,500,50); 
}

  
function spawnfoodGroup(){

if(frameCount%80===0){
var banana =createSprite(600,200);
banana.addImage(bananaImage);  
banana.velocityX=-3;
banana.y=Math.round(random(300,500));
banana.lifetime=350;
banana.scale=0.1;
 FoodGroup.add(banana);
 
}  
}

function spawnObstacles(){
  
if(frameCount%300===0){
 var obstacle = createSprite(600,380);
obstacle.addImage(obstacleImage);
obstacle.velocityX=-3;

obstacle.scale=0.1;

  
ObstacleGroup.add(obstacle);
  
}  
}
  
  